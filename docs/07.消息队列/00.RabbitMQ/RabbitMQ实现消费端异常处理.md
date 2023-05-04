---
title: RabbitMQ实现消费端异常处理
date: 2021-12-27 04:48:27
permalink: /pages/d02edd/
categories: 
  - rabbitmq
tags: 
  - null
author: 
  name: xugaoyi
  link: https://github.com/xugaoyi
---
RabbitMQ 实现消费端异常处理
------------------

前言
--

思考：因为在开发项目时，RabbitMQ 的消费端出现了异常（工具类操作文件时，未找到文件路径）。由于在此之前并未对该异常进行预判，导致异常出现后，消费端仍然对 MQ 的消息进行消费，但是出现异常后无法对 MQ 进行回复，所以造成后果**消费端一直消费该条信息，进入死循环！**

从而引发了自己的思考：1. 开发时难免会出现异常，这种异常如果事先未预判，那么在程序运行中，消费端该怎么避免以上出现的死循环；2. 如果事先预判到异常，对其进行了抛出或捕获，消费端又该如何表现？

异常
--

第一种方法，可以对可能发生异常的部分 try、catch；只要事先将问题 catch 住，就证明消费端已经将该问题消费掉，然后该消息就不存在于队列中，不会造成无限报错的情况。这里，你可以在 catch 中写一些业务，把这个出现异常的 “消息” 记录到数据库或者怎么怎么处理，反正是相当于被消费掉了。

第二种方法，" **消费者重试** " 模式。基本配置同一，只是在 catch 中显式的抛异常。这样其实就和没有 catch 差不多，就相当于未知状况下出现了异常。catch 是为了解决业务问题，在这里处理自己需要的业务。catch 中的 throw 有什么用呢？

throw 配合着 application.yml 中的 “**开启消费者重试**” 模式：若异常发生，重试 n 次（n 为 yml 中的 max-attempts），之后消息就自动进入死信队列（或者如果没配置死信队列，消息被扔掉）。

具体如下，消费者的 mq 配置类中设置了死信队列（参数只有死信交换机和路由，没有 TTL）。

```
@Configuration
public class RabbitmqConfig {
    
    public static final String QUEUE_INFORM_EMAIL = "queue_inform_email";
    public static final String EXCHANGE_TOPICS_INFORM="exchange_topics_inform";
    public static final String ROUTINGKEY_EMAIL="inform.#.email.#";

    //声明交换机
    @Bean(EXCHANGE_TOPICS_INFORM)
    public Exchange EXCHANGE_TOPICS_INFORM(){
        return ExchangeBuilder.topicExchange(EXCHANGE_TOPICS_INFORM).durable(true).build();
    }

    //声明QUEUE_INFORM_EMAIL队列，配置死信队列需要的参数
    @Bean(QUEUE_INFORM_EMAIL)
    public Queue QUEUE_INFORM_EMAIL(){
        Map<String,Object> map = new HashMap<>();
        map.put("x-dead-letter-exchange",DEAD_EXCHANGE);
        map.put("x-dead-letter-routing-key","dev");
        return new Queue(QUEUE_INFORM_EMAIL,true,false,false,map);
    }

    //ROUTINGKEY_EMAIL队列绑定交换机，指定routingKey
    @Bean
    public Binding BINDING_QUEUE_INFORM_EMAIL(@Qualifier(QUEUE_INFORM_EMAIL) Queue queue,
                                              @Qualifier(EXCHANGE_TOPICS_INFORM) Exchange exchange){
        return BindingBuilder.bind(queue).to(exchange).with(ROUTINGKEY_EMAIL).noargs();
    }


    //以下为死信队列

    private static final String DEAD_EXCHANGE = "x-dead-letter-exchange";

    @Bean(DEAD_EXCHANGE)
    public Exchange dead_exchange(){
        return ExchangeBuilder.directExchange(DEAD_EXCHANGE).durable(true).build();
    }

    @Bean("dead_queue")
    public Queue dead_routing_key(){
        return QueueBuilder.durable("dead_queue").build();
    }

    @Bean("dead_bind")
    public Binding dead_bind(@Qualifier("dead_queue")Queue queue,@Qualifier(DEAD_EXCHANGE)Exchange exchange){
        return BindingBuilder.bind(queue).to(exchange).with("dev").noargs();
    }
}
```

消费者端不做任何异常处理，模拟开发时并不知道会出现异常的情况。（注释掉的，catch 里的 throw 和这个是一样的效果）

```
@RabbitListener(queues = "queue_inform_email")
public void receiveMediaProcessTask(String msg, Channel channel, Message message){
            
                System.out.println("Listen===========" + msg);
                int i = 1;
                int b = i/0;
                System.out.println("解决了");
    
//            try {
//                System.out.println("Listen===========" + msg);
//                int i = 1;
//                int b = i/0;
//            }catch (Exception e){
//                System.out.println("解决了");
//                throw new RuntimeException("还是不行");
//            }

    }
```

但是配置文件中开启 “消费者尝试”，并配置最大尝试数。

```
rabbitmq:
    host: 127.0.0.1
    port: 5672
    username: guest
    password: guest
    virtual-host: /
    listener:
      simple:
        concurrency: 1 # Minimum number of consumers.
        max-concurrency: 20 # Maximum number of consumers.
        prefetch: 50
        default-requeue-rejected: true #意思是，消息被拒后（即未消费），重新（true）放入队列
        retry:
          enabled: true #是否开启消费者重试（为false时关闭消费者重试，这时消费端代码异常会一直重复收到消息）
          max-attempts: 3
          initial-interval: 5000ms
```

这样，消费端发现了异常，尝试了规定次数后，这条 “问题消息” 就会被解决（如果设置了死信队列，就被送到了死信队列；否则直接扔掉）。是开启了 “消费者重试尝试” 的功劳。如果不开启该模式，那么会无限的循环下去。**和 “default-requeue-rejected: true” 参数没有任何关系**，“消费者重试” 模式会覆盖掉 default-requeue-rejected(默认为 true)。所以，只要是开了该模式，异常就可以被解决。如果只设置 default-requeue-rejected: true（消费者重试未开启，应答方式为默认），那么会无限报错！

第三种，**只设置 default-requeue-rejected: false**（消费者重试未开启，应答方式为默认），异常只出现一次，然后该 “问题消息” 被解决（如果设置了死信队列，就被送到了死信队列；否则直接扔掉）。

第四种，**在队列中设置了 TTL 参数！！！**那么异常会无脑的跑一会，当消息到了一定时间就会过期，自动进入死信队列。这是 TTL 的功劳。

```
@Bean(QUEUE_INFORM_EMAIL)
public Queue QUEUE_INFORM_EMAIL(){
    Map<String,Object> map = new HashMap<>();
    //设置TTL
    map.put("x-message-ttl",10000);
    map.put("x-dead-letter-exchange",DEAD_EXCHANGE);
    map.put("x-dead-letter-routing-key","dev");
    return new Queue(QUEUE_INFORM_EMAIL,true,false,false,map);
}
```

目前为止，都是自动（**acknowledge-mode** 默认 auto）应答 mq，不需要手动应答。

第六种，yml 配置文件**手动应答**, 见最后一行的配置。

```
spring:
  application:
    name: test-rabbitmq-producer
  rabbitmq:
    host: 127.0.0.1
    port: 5672
    username: guest
    password: guest
    virtual-host: /
    listener:
      simple:
        concurrency: 1 # Minimum number of consumers.
        max-concurrency: 20 # Maximum number of consumers.
        prefetch: 50
        acknowledge-mode: manual        #关键    消费方手动ack
```

这时，消费端的监听需要如下这样，参照死信队列的概念，channel.basicReject 的 requeue 参数必须设为 false。

```
@RabbitListener(queues = "queue_inform_email")
public void receiveMediaProcessTask(String msg, Channel channel, Message message) throws IOException {

    try {
        System.out.println("Listen===========" + msg);
        int i = 1;
        int b = i/0;
    }catch (Exception e){
 //手动应答，采取拒绝，第二位参数requeue，必须设置为false
        channel.basicReject(message.getMessageProperties().getDeliveryTag(),false);
        System.out.println("解决了");
        //下面的抛异常就随意了，因为上面已经把当前的消息扔到队列外，所以不会无限执行该条消息，也就是说，抛异常只会抛一次，并不会无限下去。
        throw new RuntimeException("还是不行？？");
    }
}
```

如果把 requeue 的值设为 true，那就白玩了，“问题消息”又被你放到了当前队列，下一次消费方又执行这条 “问题消息”。可以看出，第六种方案的推行并不依赖于“消费端重试” 和 TTL，仅仅依照死信队列的定义：利用 basicReject 拒绝，并把 requeue 设置为 false.

注意：如果是，不管是否设置 “消费者重试” 模式，配置了 default-requeue-rejected: false，且手动应答，异常只会出现一次，但是不会进入死信队列。消息以 unack 形式存在队列中。

综上所述，我们可以发现消费端异常的几种方案的特点：

1.  TTL 可以设置消息的过期时间，不管你是不是无脑抛异常，只要过期，就进入死信队列；
2.  “消费者重试” 模式，只要你抛异常抛到了我的底线（次数达标），那我就把你送走，可能是直接扔了，也可能是扔到死信队列；
3.  try、catch，只要你能提前预判，捕获到相应异常，那就平平安安，没有一点波澜；
4.  手动回应，需要提前知道哪里会出错，就在哪里拒绝，而且 requeue 设成 false；还要在哪里不拒绝（普通的消息回应），对 mq 做出相应正确的反馈

其实从这些特点可以看出，死信的定义就是最好的答案。

*   死信的产生：
    1.  消息被拒绝 (basic.reject / basic.nack)，并且 requeue = false
    2.  消息 TTL 过期
    3.  队列达到最大长度

Emm... 所以说如果是我开发项目的话，应该是这样的：

1.  先把预先判断可能要出错的地方 catch 住，catch 里根据需求看看要不要显式地抛异常；
2.  设置一下 “消费者重试” 模式，配置 default-requeue-rejected: false，手动应答
3.  然后实在不知道哪里会出错的，就让它出错好了，我也没招；
4.  只不过消费端必须有 “预案”——死信队列；
