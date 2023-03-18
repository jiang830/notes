(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{394:function(e,n,t){"use strict";t.r(n);var a=t(4),r=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"rabbitmq-实现消费端异常处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-实现消费端异常处理"}},[e._v("#")]),e._v(" RabbitMQ 实现消费端异常处理")]),e._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),n("p",[e._v("思考：因为在开发项目时，RabbitMQ 的消费端出现了异常（工具类操作文件时，未找到文件路径）。由于在此之前并未对该异常进行预判，导致异常出现后，消费端仍然对 MQ 的消息进行消费，但是出现异常后无法对 MQ 进行回复，所以造成后果"),n("strong",[e._v("消费端一直消费该条信息，进入死循环！")])]),e._v(" "),n("p",[e._v("从而引发了自己的思考：1. 开发时难免会出现异常，这种异常如果事先未预判，那么在程序运行中，消费端该怎么避免以上出现的死循环；2. 如果事先预判到异常，对其进行了抛出或捕获，消费端又该如何表现？")]),e._v(" "),n("h2",{attrs:{id:"异常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[e._v("#")]),e._v(" 异常")]),e._v(" "),n("p",[e._v("第一种方法，可以对可能发生异常的部分 try、catch；只要事先将问题 catch 住，就证明消费端已经将该问题消费掉，然后该消息就不存在于队列中，不会造成无限报错的情况。这里，你可以在 catch 中写一些业务，把这个出现异常的 “消息” 记录到数据库或者怎么怎么处理，反正是相当于被消费掉了。")]),e._v(" "),n("p",[e._v('第二种方法，" '),n("strong",[e._v("消费者重试")]),e._v(' " 模式。基本配置同一，只是在 catch 中显式的抛异常。这样其实就和没有 catch 差不多，就相当于未知状况下出现了异常。catch 是为了解决业务问题，在这里处理自己需要的业务。catch 中的 throw 有什么用呢？')]),e._v(" "),n("p",[e._v("throw 配合着 application.yml 中的 “"),n("strong",[e._v("开启消费者重试")]),e._v("” 模式：若异常发生，重试 n 次（n 为 yml 中的 max-attempts），之后消息就自动进入死信队列（或者如果没配置死信队列，消息被扔掉）。")]),e._v(" "),n("p",[e._v("具体如下，消费者的 mq 配置类中设置了死信队列（参数只有死信交换机和路由，没有 TTL）。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('@Configuration\npublic class RabbitmqConfig {\n    \n    public static final String QUEUE_INFORM_EMAIL = "queue_inform_email";\n    public static final String EXCHANGE_TOPICS_INFORM="exchange_topics_inform";\n    public static final String ROUTINGKEY_EMAIL="inform.#.email.#";\n\n    //声明交换机\n    @Bean(EXCHANGE_TOPICS_INFORM)\n    public Exchange EXCHANGE_TOPICS_INFORM(){\n        return ExchangeBuilder.topicExchange(EXCHANGE_TOPICS_INFORM).durable(true).build();\n    }\n\n    //声明QUEUE_INFORM_EMAIL队列，配置死信队列需要的参数\n    @Bean(QUEUE_INFORM_EMAIL)\n    public Queue QUEUE_INFORM_EMAIL(){\n        Map<String,Object> map = new HashMap<>();\n        map.put("x-dead-letter-exchange",DEAD_EXCHANGE);\n        map.put("x-dead-letter-routing-key","dev");\n        return new Queue(QUEUE_INFORM_EMAIL,true,false,false,map);\n    }\n\n    //ROUTINGKEY_EMAIL队列绑定交换机，指定routingKey\n    @Bean\n    public Binding BINDING_QUEUE_INFORM_EMAIL(@Qualifier(QUEUE_INFORM_EMAIL) Queue queue,\n                                              @Qualifier(EXCHANGE_TOPICS_INFORM) Exchange exchange){\n        return BindingBuilder.bind(queue).to(exchange).with(ROUTINGKEY_EMAIL).noargs();\n    }\n\n\n    //以下为死信队列\n\n    private static final String DEAD_EXCHANGE = "x-dead-letter-exchange";\n\n    @Bean(DEAD_EXCHANGE)\n    public Exchange dead_exchange(){\n        return ExchangeBuilder.directExchange(DEAD_EXCHANGE).durable(true).build();\n    }\n\n    @Bean("dead_queue")\n    public Queue dead_routing_key(){\n        return QueueBuilder.durable("dead_queue").build();\n    }\n\n    @Bean("dead_bind")\n    public Binding dead_bind(@Qualifier("dead_queue")Queue queue,@Qualifier(DEAD_EXCHANGE)Exchange exchange){\n        return BindingBuilder.bind(queue).to(exchange).with("dev").noargs();\n    }\n}\n')])])]),n("p",[e._v("消费者端不做任何异常处理，模拟开发时并不知道会出现异常的情况。（注释掉的，catch 里的 throw 和这个是一样的效果）")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('@RabbitListener(queues = "queue_inform_email")\npublic void receiveMediaProcessTask(String msg, Channel channel, Message message){\n            \n                System.out.println("Listen===========" + msg);\n                int i = 1;\n                int b = i/0;\n                System.out.println("解决了");\n    \n//            try {\n//                System.out.println("Listen===========" + msg);\n//                int i = 1;\n//                int b = i/0;\n//            }catch (Exception e){\n//                System.out.println("解决了");\n//                throw new RuntimeException("还是不行");\n//            }\n\n    }\n')])])]),n("p",[e._v("但是配置文件中开启 “消费者尝试”，并配置最大尝试数。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("rabbitmq:\n    host: 127.0.0.1\n    port: 5672\n    username: guest\n    password: guest\n    virtual-host: /\n    listener:\n      simple:\n        concurrency: 1 # Minimum number of consumers.\n        max-concurrency: 20 # Maximum number of consumers.\n        prefetch: 50\n        default-requeue-rejected: true #意思是，消息被拒后（即未消费），重新（true）放入队列\n        retry:\n          enabled: true #是否开启消费者重试（为false时关闭消费者重试，这时消费端代码异常会一直重复收到消息）\n          max-attempts: 3\n          initial-interval: 5000ms\n")])])]),n("p",[e._v("这样，消费端发现了异常，尝试了规定次数后，这条 “问题消息” 就会被解决（如果设置了死信队列，就被送到了死信队列；否则直接扔掉）。是开启了 “消费者重试尝试” 的功劳。如果不开启该模式，那么会无限的循环下去。"),n("strong",[e._v("和 “default-requeue-rejected: true” 参数没有任何关系")]),e._v("，“消费者重试” 模式会覆盖掉 default-requeue-rejected(默认为 true)。所以，只要是开了该模式，异常就可以被解决。如果只设置 default-requeue-rejected: true（消费者重试未开启，应答方式为默认），那么会无限报错！")]),e._v(" "),n("p",[e._v("第三种，"),n("strong",[e._v("只设置 default-requeue-rejected: false")]),e._v("（消费者重试未开启，应答方式为默认），异常只出现一次，然后该 “问题消息” 被解决（如果设置了死信队列，就被送到了死信队列；否则直接扔掉）。")]),e._v(" "),n("p",[e._v("第四种，**在队列中设置了 TTL 参数！！！**那么异常会无脑的跑一会，当消息到了一定时间就会过期，自动进入死信队列。这是 TTL 的功劳。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('@Bean(QUEUE_INFORM_EMAIL)\npublic Queue QUEUE_INFORM_EMAIL(){\n    Map<String,Object> map = new HashMap<>();\n    //设置TTL\n    map.put("x-message-ttl",10000);\n    map.put("x-dead-letter-exchange",DEAD_EXCHANGE);\n    map.put("x-dead-letter-routing-key","dev");\n    return new Queue(QUEUE_INFORM_EMAIL,true,false,false,map);\n}\n')])])]),n("p",[e._v("目前为止，都是自动（"),n("strong",[e._v("acknowledge-mode")]),e._v(" 默认 auto）应答 mq，不需要手动应答。")]),e._v(" "),n("p",[e._v("第六种，yml 配置文件"),n("strong",[e._v("手动应答")]),e._v(", 见最后一行的配置。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("spring:\n  application:\n    name: test-rabbitmq-producer\n  rabbitmq:\n    host: 127.0.0.1\n    port: 5672\n    username: guest\n    password: guest\n    virtual-host: /\n    listener:\n      simple:\n        concurrency: 1 # Minimum number of consumers.\n        max-concurrency: 20 # Maximum number of consumers.\n        prefetch: 50\n        acknowledge-mode: manual        #关键    消费方手动ack\n")])])]),n("p",[e._v("这时，消费端的监听需要如下这样，参照死信队列的概念，channel.basicReject 的 requeue 参数必须设为 false。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('@RabbitListener(queues = "queue_inform_email")\npublic void receiveMediaProcessTask(String msg, Channel channel, Message message) throws IOException {\n\n    try {\n        System.out.println("Listen===========" + msg);\n        int i = 1;\n        int b = i/0;\n    }catch (Exception e){\n //手动应答，采取拒绝，第二位参数requeue，必须设置为false\n        channel.basicReject(message.getMessageProperties().getDeliveryTag(),false);\n        System.out.println("解决了");\n        //下面的抛异常就随意了，因为上面已经把当前的消息扔到队列外，所以不会无限执行该条消息，也就是说，抛异常只会抛一次，并不会无限下去。\n        throw new RuntimeException("还是不行？？");\n    }\n}\n')])])]),n("p",[e._v("如果把 requeue 的值设为 true，那就白玩了，“问题消息”又被你放到了当前队列，下一次消费方又执行这条 “问题消息”。可以看出，第六种方案的推行并不依赖于“消费端重试” 和 TTL，仅仅依照死信队列的定义：利用 basicReject 拒绝，并把 requeue 设置为 false.")]),e._v(" "),n("p",[e._v("注意：如果是，不管是否设置 “消费者重试” 模式，配置了 default-requeue-rejected: false，且手动应答，异常只会出现一次，但是不会进入死信队列。消息以 unack 形式存在队列中。")]),e._v(" "),n("p",[e._v("综上所述，我们可以发现消费端异常的几种方案的特点：")]),e._v(" "),n("ol",[n("li",[e._v("TTL 可以设置消息的过期时间，不管你是不是无脑抛异常，只要过期，就进入死信队列；")]),e._v(" "),n("li",[e._v("“消费者重试” 模式，只要你抛异常抛到了我的底线（次数达标），那我就把你送走，可能是直接扔了，也可能是扔到死信队列；")]),e._v(" "),n("li",[e._v("try、catch，只要你能提前预判，捕获到相应异常，那就平平安安，没有一点波澜；")]),e._v(" "),n("li",[e._v("手动回应，需要提前知道哪里会出错，就在哪里拒绝，而且 requeue 设成 false；还要在哪里不拒绝（普通的消息回应），对 mq 做出相应正确的反馈")])]),e._v(" "),n("p",[e._v("其实从这些特点可以看出，死信的定义就是最好的答案。")]),e._v(" "),n("ul",[n("li",[e._v("死信的产生：\n"),n("ol",[n("li",[e._v("消息被拒绝 (basic.reject / basic.nack)，并且 requeue = false")]),e._v(" "),n("li",[e._v("消息 TTL 过期")]),e._v(" "),n("li",[e._v("队列达到最大长度")])])])]),e._v(" "),n("p",[e._v("Emm... 所以说如果是我开发项目的话，应该是这样的：")]),e._v(" "),n("ol",[n("li",[e._v("先把预先判断可能要出错的地方 catch 住，catch 里根据需求看看要不要显式地抛异常；")]),e._v(" "),n("li",[e._v("设置一下 “消费者重试” 模式，配置 default-requeue-rejected: false，手动应答")]),e._v(" "),n("li",[e._v("然后实在不知道哪里会出错的，就让它出错好了，我也没招；")]),e._v(" "),n("li",[e._v("只不过消费端必须有 “预案”——死信队列；")])])])}),[],!1,null,null,null);n.default=r.exports}}]);