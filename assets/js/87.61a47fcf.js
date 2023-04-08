(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{412:function(t,a,s){"use strict";s.r(a);var n=s(4),p=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"单体架构vs微服务架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单体架构vs微服务架构"}},[t._v("#")]),t._v(" 单体架构vs微服务架构")]),t._v(" "),a("h3",{attrs:{id:"单机架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单机架构"}},[t._v("#")]),t._v(" 单机架构")]),t._v(" "),a("h4",{attrs:{id:"什么是单体架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是单体架构"}},[t._v("#")]),t._v(" 什么是单体架构")]),t._v(" "),a("p",[t._v("一个归档包（例如war格式）包含了应用所有功能的应用程序，我们通常称之为单体应用。架构单体应用的方法论，我们称之为单体应用架构。（就是一个war包打天下）")]),t._v(" "),a("h4",{attrs:{id:"单体架构示意图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单体架构示意图"}},[t._v("#")]),t._v(" 单体架构示意图")]),t._v(" "),a("p",[t._v("​    "),a("img",{attrs:{src:"https://img.jssjqd.cn/202211141912190.png",alt:"image-20221114191243385"}})]),t._v(" "),a("h4",{attrs:{id:"单体架构的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单体架构的优缺点"}},[t._v("#")]),t._v(" 单体架构的优缺点")]),t._v(" "),a("p",[a("strong",[t._v("优点")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("架构简单明了，没有花里胡哨的问题需要解决。")])]),t._v(" "),a("li",[a("p",[t._v("开发，测试，部署简单，运维简单")])]),t._v(" "),a("li",[a("p",[t._v("随着业务扩展，代码越来越复杂，代码质量参差不齐(开发人员的水平不一),会让你每次提交代码 ，修改每一个小bug都是心惊胆战的。")])]),t._v(" "),a("li",[a("p",[t._v("部署慢(由于单体架构，功能复杂) 能想像下一个来自200W+代码部署的速度(15分钟)")])]),t._v(" "),a("li",[a("p",[t._v("扩展成本高，根据单体架构图 假设用户模块是一个CPU密集型的模块(涉及到大量的运算)，那么我们需要替换更加牛逼的CPU，而我们的订单模块是一个IO密集模块（涉及大量的读写磁盘）,那我们需要替换更加牛逼的内存以及高效的磁盘。但是我们的单体架构上 无法针对单个功能模块进行扩展，那么就需要替换更牛逼的CPU，更牛逼的内存，更牛逼的磁盘，价格蹭蹭的往上涨。")])]),t._v(" "),a("li",[a("p",[t._v("阻碍了新技术的发展。。。。。。比如我们的web架构模块 从struts2迁移到springboot，那么就会成为灾难")])])]),t._v(" "),a("h3",{attrs:{id:"微服务以及微服务架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务以及微服务架构"}},[t._v("#")]),t._v(" 微服务以及微服务架构")]),t._v(" "),a("h4",{attrs:{id:"微服务的定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务的定义"}},[t._v("#")]),t._v(" 微服务的定义")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("英文:https://martinfowler.com/articles/microservices.html")])]),t._v(" "),a("li",[a("p",[t._v("中文:http://blog.cuicc.com/blog/2015/07/22/microservices")])])]),t._v(" "),a("p",[t._v("微服务核心就是把传统的单机应用，根据业务将单机应用拆分为一个一个的服务，彻底的解耦，每一个服务都是提供特定的功能，一个服务只做一件事,类似进程，每个服务都能够单独部署，甚至可以拥有自己的数据库。这样的一个一个的小服务就是微服务。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("比如传统的单机电商应用,有"),a("strong",[t._v("订单/支付/库存/物流/积分")]),t._v("等模块(理解为service)")])]),t._v(" "),a("li",[a("p",[t._v("我们根据业务模型来拆分,可以拆分为"),a("strong",[t._v("订单服务，支付服务，库存服务，物流服务，积分服务")])])]),t._v(" "),a("li",[a("p",[t._v("若不拆分的时候，我的非核心业务积分模块 出现了重大bug 导致系统内存溢出，导致整个服务宕机,若拆分之后，只是说我的积分微服务不可用，我的整个系统核心功能还是能使用")])])]),t._v(" "),a("h4",{attrs:{id:"微服务的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务的特点"}},[t._v("#")]),t._v(" 微服务的特点")]),t._v(" "),a("p",[a("strong",[t._v("1）独立部署，灵活扩展")])]),t._v(" "),a("p",[t._v("传统的单体架构是以整个系统为单位进行部署，而微服务则是以每一个独立组件（例如用户服务，商品服务）为单位进行部署。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.jssjqd.cn/202211141913000.png",alt:"image-20221114191316803"}})]),t._v(" "),a("p",[a("strong",[t._v("2）资源的有效隔离")])]),t._v(" "),a("p",[t._v("微服务设计的原则之一，就是每一个微服务拥有独立的数据源，假如微服务A想要读写微服务B的数据库，只能调用微服务B对外暴露的接口来完成。这样有效避免了服务之间争用数据库和缓存资源所带来的问题。")]),t._v(" "),a("p",[t._v("​    "),a("img",{attrs:{src:"https://img.jssjqd.cn/202211141913637.png",alt:"image-20221114191327616"}})]),t._v(" "),a("p",[a("strong",[t._v("3）团队组织架构的调整")])]),t._v(" "),a("p",[t._v("微服务设计的思想也改变了原有的企业研发团队组织架构。传统的研发组织架构是水平架构，前端有前端的团队，后端有后端的团队，DBA有DBA的团队，测试有测试的团队。而微服务的设计思想对团队的划分有着一定的影响，使得团队组织架构的划分更倾向于垂直架构，比如用户业务是一个团队来负责，支付业务是一个团队来负责。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.jssjqd.cn/202211141913769.png",alt:"image-20221114191336571"}})]),t._v(" "),a("h4",{attrs:{id:"微服务架构是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构是什么"}},[t._v("#")]),t._v(" 微服务架构是什么？")]),t._v(" "),a("p",[t._v("微服务架构风格是一种将单个应用程序作为一套小型服务开发的方法，每种应用程序都在自己的进程中运行，并与轻量级机制（通常是HTTP资源API）进行通信。 这些服务是围绕业务功能构建的，可以通过全自动部署机制独立部署。 这些服务的集中管理最少，可以用不同的编程语言编写，并使用不同的数据存储技术。")]),t._v(" "),a("p",[t._v("SOA架构强调的是异构系统之间的通信和解耦合，而微服务架构强调的是系统按业务边界做细粒度的拆分和部署")]),t._v(" "),a("p",[t._v("微服务架构是一个架构风格, 提倡:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("将一个单一应用程序开发为一组小型服务.")])]),t._v(" "),a("li",[a("p",[t._v("每个服务运行在自己的进程中")])]),t._v(" "),a("li",[a("p",[t._v("服务之间通过轻量级的通信机制(http rest api)")])]),t._v(" "),a("li",[a("p",[t._v("每个服务都能够独立的部署")])]),t._v(" "),a("li",[a("p",[t._v("每个服务甚至可以拥有自己的数据库")])])]),t._v(" "),a("p",[t._v("微服务以及微服务架构的是二个完全不同的概念。微服务强调的是服务的大小和对外提供的单一功能，而微服务架构是指把 一个一个的微服务组合管理起来，对外提供一套完整的服务。")]),t._v(" "),a("h4",{attrs:{id:"微服务的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务的优缺点"}},[t._v("#")]),t._v(" 微服务的优缺点")]),t._v(" "),a("p",[a("strong",[t._v("优点")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("每个服务足够小,足够内聚，代码更加容易理解,专注一个业务功能点(对比传统应用，可能改几行代码 需要了解整个系统)")])]),t._v(" "),a("li",[a("p",[t._v("开发简单，一个服务只干一个事情。（加入你做支付服务，你只要了解支付相关代码就可以了）")])]),t._v(" "),a("li",[a("p",[t._v("微服务能够被2-5个人的小团队开发，提高效率")])]),t._v(" "),a("li",[a("p",[t._v("按需伸缩，服务松耦合，每个服务都能够开发部署")])]),t._v(" "),a("li",[a("p",[t._v("前后端分离, 开发人员只需要关注后端接口的安全性以及性能，不要去关注页面的人机交互(H5工程师)根据前后端接口协议，根据入参，返回json的回参。")])]),t._v(" "),a("li",[a("p",[t._v("一个服务可用拥有自己的数据库，也可以多个服务连接同一个数据库。")])])]),t._v(" "),a("p",[a("strong",[t._v("缺点")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("增加了运维人员的工作量，以前只要部署一个war包，现在可能需要部署成百上千个war包 (k8s+docker+jenkins )")])]),t._v(" "),a("li",[a("p",[t._v("服务之间相互调用，增加通信成本")])]),t._v(" "),a("li",[a("p",[t._v("数据一致性问题(分布式事务问题)")])]),t._v(" "),a("li",[a("p",[t._v("性能监控等,问题定位..........................")])])]),t._v(" "),a("h4",{attrs:{id:"微服务的适用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务的适用场景"}},[t._v("#")]),t._v(" 微服务的适用场景")]),t._v(" "),a("p",[a("strong",[t._v("合适")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("大型复杂的项目............(来自单体架构200W行代码的恐惧)")])]),t._v(" "),a("li",[a("p",[t._v("快速迭代的项目............(来自一天一版的恐惧)")])]),t._v(" "),a("li",[a("p",[t._v("并发高的项目................(考虑弹性伸缩扩容的恐惧)")])])]),t._v(" "),a("p",[a("strong",[t._v("不合适")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("业务稳定，就是修修bug ，改改数据")])]),t._v(" "),a("li",[a("p",[t._v("迭代周期长 发版频率 一二个月一次.")])])]),t._v(" "),a("h2",{attrs:{id:"spring-cloud-微服务技术栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-微服务技术栈"}},[t._v("#")]),t._v(" Spring Cloud 微服务技术栈")]),t._v(" "),a("h3",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("Spring Cloud是分布式微服务架构的一站式解决方案，是多种微服务架构落地技术的集合体，俗称微服务全家桶。")]),t._v(" "),a("p",[t._v("Spring Cloud为开发人员提供了快速构建分布式系统中的一些常见模式的工具(例如配置管理、服务发现、断路器、智能路由、微代理、控制总线、一次性令牌、全局锁、领导选举、分布式会话、集群状态)。")]),t._v(" "),a("p",[t._v("​    "),a("img",{attrs:{src:"https://img.jssjqd.cn/202304082145918.png",alt:"image-20230408214542007"}})]),t._v(" "),a("p",[t._v("​    "),a("img",{attrs:{src:"https://img.jssjqd.cn/202211141913012.png",alt:"image-20221114191344720"}})]),t._v(" "),a("p",[t._v("官网： https://spring.io/projects/spring-cloud")]),t._v(" "),a("p",[t._v("中文文档： https://www.springcloud.cc/")]),t._v(" "),a("p",[t._v("Spring Cloud中国社区：http://springcloud.cn/")]),t._v(" "),a("h3",{attrs:{id:"springcloud微服务架构生态圈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springcloud微服务架构生态圈"}},[t._v("#")]),t._v(" SpringCloud微服务架构生态圈")]),t._v(" "),a("p",[t._v("​    "),a("img",{attrs:{src:"https://img.jssjqd.cn/202211141913534.png",alt:"image-20221114191350492"}})]),t._v(" "),a("h3",{attrs:{id:"spring-cloud-netflix包含的组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-netflix包含的组件"}},[t._v("#")]),t._v(" Spring Cloud Netflix包含的组件")]),t._v(" "),a("ul",[a("li",[t._v("Eureka，服务注册和发现，它提供了一个服务注册中心、服务发现的客户端，还有一个方便的查看所有注册的服务的界面。 所有的服务使用Eureka的服务发现客户端来将自己注册到Eureka的服务器上。")]),t._v(" "),a("li",[t._v("Zuul，网关，所有的客户端请求通过这个网关访问后台的服务。他可以使用一定的路由配置来判断某一个URL由哪个服务来处理。并从Eureka获取注册的服务来转发请求。")]),t._v(" "),a("li",[t._v("Ribbon，即负载均衡，Zuul网关将一个请求发送给某一个服务的应用的时候，如果一个服务启动了多个实例，就会通过Ribbon来通过一定的负载均衡策略来发送给某一个服务实例。")]),t._v(" "),a("li",[t._v("Feign，服务客户端，服务之间如果需要相互访问，可以使用RestTemplate，也可以使用Feign客户端访问。它默认会使用Ribbon来实现负载均衡。")]),t._v(" "),a("li",[t._v("Hystrix，监控和断路器。我们只需要在服务接口上添加Hystrix标签，就可以实现对这个接口的监控和断路器功能。")]),t._v(" "),a("li",[t._v("Hystrix Dashboard，监控面板，他提供了一个界面，可以监控各个服务上的服务调用所消耗的时间等。")]),t._v(" "),a("li",[t._v("Turbine，监控聚合，使用Hystrix监控，我们需要打开每一个服务实例的监控信息来查看。而Turbine可以帮助我们把所有的服务实例的监控信息聚合到一个地方统一查看。这样就不需要挨个打开一个个的页面一个个查看。")])]),t._v(" "),a("p",[t._v("​    "),a("img",{attrs:{src:"https://img.jssjqd.cn/202211141913095.png",alt:"image-20221114191356744"}})]),t._v(" "),a("h2",{attrs:{id:"spring-cloud-alibaba技术栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-alibaba技术栈"}},[t._v("#")]),t._v(" Spring Cloud Alibaba技术栈")]),t._v(" "),a("p",[t._v("同 Spring Cloud 一样，Spring Cloud Alibaba 也是一套微服务解决方案，包含开发分布式应用微服务的必需组件，方便开发者通过 Spring Cloud 编程模型轻松使用这些组件来开发分布式应用服务。")]),t._v(" "),a("p",[t._v("依托 Spring Cloud Alibaba，您只需要添加一些注解和少量配置，就可以将 Spring Cloud 应用接入阿里微服务解决方案，通过阿里中间件来迅速搭建分布式应用系统。")]),t._v(" "),a("p",[t._v("作为 Spring Cloud 体系下的新实现，Spring Cloud Alibaba 跟官方的组件或其它的第三方实现如 Netflix, Consul，Zookeeper 等对比，具备了更多的功能:")]),t._v(" "),a("p",[t._v("​    "),a("img",{attrs:{src:"https://img.jssjqd.cn/202211141914145.png",alt:"image-20221114191401893"}})]),t._v(" "),a("h3",{attrs:{id:"spring-cloud-alibaba-包含组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-alibaba-包含组件"}},[t._v("#")]),t._v(" Spring Cloud Alibaba 包含组件")]),t._v(" "),a("h4",{attrs:{id:"阿里开源组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阿里开源组件"}},[t._v("#")]),t._v(" 阿里开源组件")]),t._v(" "),a("p",[t._v("Nacos：一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。")]),t._v(" "),a("p",[t._v("Sentinel：把流量作为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。")]),t._v(" "),a("p",[t._v("RocketMQ：开源的分布式消息系统，基于高可用分布式集群技术，提供低延时的、高可靠的消息发布与订阅服务。")]),t._v(" "),a("p",[t._v("Dubbo：在国内应用非常广泛的一款高性能 Java RPC 框架。")]),t._v(" "),a("p",[t._v("Seata：阿里巴巴开源产品，一个易于使用的高性能微服务分布式事务解决方案。")]),t._v(" "),a("p",[t._v("Arthas：开源的Java动态追踪工具，基于字节码增强技术，功能非常强大。")]),t._v(" "),a("h4",{attrs:{id:"阿里商业化组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阿里商业化组件"}},[t._v("#")]),t._v(" 阿里商业化组件")]),t._v(" "),a("p",[t._v("作为一家商业公司，阿里巴巴推出 Spring Cloud Alibaba，很大程度上市希望通过抢占开发者生态，来帮助推广自家的云产品。")]),t._v(" "),a("p",[t._v("Alibaba Cloud ACM：一款在分布式架构环境中对应用配置进行集中管理和推送的应用配置中心产品。")]),t._v(" "),a("p",[t._v("Alibaba Cloud OSS：阿里云对象存储服务（Object Storage Service，简称 OSS），是阿里云提供的云存储服务。")]),t._v(" "),a("p",[t._v("Alibaba Cloud SchedulerX：阿里中间件团队开发的一款分布式任务调度产品，提供秒级、精准的定时（基于 Cron 表达式）任务调度服务。")]),t._v(" "),a("p",[t._v("​    "),a("img",{attrs:{src:"https://img.jssjqd.cn/202211141914574.png",alt:"image-20221114191407085"}})]),t._v(" "),a("h3",{attrs:{id:"spring-cloud-alibaba版本选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-alibaba版本选择"}},[t._v("#")]),t._v(" Spring Cloud Alibaba版本选择")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("版本选择： Spring Cloud Alibaba 2.2.8.RELEASE")]),t._v(" "),a("p",[t._v("父pom如下：")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("project")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://maven.apache.org/POM/4.0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("modelVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("4.0.0"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("modelVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("parent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-parent"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.3.12.RELEASE"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("relativePath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- lookup parent from repository --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("parent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.tuling.mall"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("vip-spring-cloud-alibaba"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0.0.1-SNAPSHOT"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("vip-spring-cloud-alibaba"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("packaging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pom"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("packaging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Demo project for Spring Cloud Alibaba"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("java.version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.8"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("java.version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("spring-cloud.version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hoxton.SR12"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("spring-cloud.version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("spring-cloud-alibaba.version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.2.8.RELEASE"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("spring-cloud-alibaba.version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencyManagement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-dependencies"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${spring-cloud.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pom"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("import"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.alibaba.cloud"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-alibaba-dependencies"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${spring-cloud-alibaba.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pom"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("import"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencyManagement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("project")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("​")])])}),[],!1,null,null,null);a.default=p.exports}}]);