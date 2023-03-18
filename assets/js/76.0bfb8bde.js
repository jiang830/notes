(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{401:function(r,v,_){"use strict";_.r(v);var t=_(4),o=Object(t.a)({},(function(){var r=this,v=r._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[v("p",[v("strong",[r._v("系列课程介绍")])]),r._v(" "),v("p",[r._v("本次主要讲解Dubbo3.0，是Dubbo的一次重大升级，有很多的新特性，所以本次课程主要围绕这些新特性来进行讲解和分析。")]),r._v(" "),v("p",[v("strong",[r._v("代码地址")])]),r._v(" "),v("p",[r._v("手写Dubbo地址：https://gitee.com/archguide/rpc-zhouyu")]),r._v(" "),v("p",[v("strong",[r._v("什么是RPC")])]),r._v(" "),v("p",[v("strong",[r._v("维基百科")]),r._v("是这么定义RPC的：")]),r._v(" "),v("p",[r._v("在"),v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A1%E7%AE%97",target:"_blank",rel:"noopener noreferrer"}},[r._v("分布式计算"),v("OutboundLink")],1),v("strong",[r._v("，远程过程调用")]),r._v("（英语：Remote Procedure Call，缩写为 RPC）是一个计算机通信"),v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%B6%B2%E7%B5%A1%E5%82%B3%E8%BC%B8%E5%8D%94%E8%AD%B0",target:"_blank",rel:"noopener noreferrer"}},[r._v("协议"),v("OutboundLink")],1),r._v("。该协议允许运行于一台计算机的"),v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%A8%8B%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"}},[r._v("程序"),v("OutboundLink")],1),r._v("调用另一个"),v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%9C%B0%E5%9D%80%E7%A9%BA%E9%97%B4",target:"_blank",rel:"noopener noreferrer"}},[r._v("地址空间"),v("OutboundLink")],1),r._v("（通常为一个开放网络的一台计算机）的"),v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%AD%90%E7%A8%8B%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"}},[r._v("子程序"),v("OutboundLink")],1),r._v("，而程序员就像调用本地程序一样，无需额外地为这个交互作用编程（无需关注细节）。RPC是一种服务器-客户端（Client/Server）模式，经典实现是一个通过"),v("strong",[r._v("发送请求-接受回应")]),r._v("进行信息交互的系统。")]),r._v(" "),v("p",[r._v("如果涉及的软件采用"),v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[r._v("面向对象编程"),v("OutboundLink")],1),r._v("，那么远程过程调用亦可称作"),v("strong",[r._v("远程调用")]),r._v("或"),v("strong",[r._v("远程方法调用")]),r._v("，例："),v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Java_RMI",target:"_blank",rel:"noopener noreferrer"}},[r._v("Java RMI"),v("OutboundLink")],1)]),r._v(" "),v("p",[r._v("所以，对于Java程序员而言，RPC就是"),v("strong",[r._v("远程方法调用")]),r._v("。")]),r._v(" "),v("p",[v("strong",[r._v("远程方法调用")]),r._v("和"),v("strong",[r._v("本地方法调用")]),r._v("是相对的两个概念，本地方法调用指的是进程内部的方法调用，而远程方法调用指的是两个进程内的方法相互调用。")]),r._v(" "),v("p",[r._v("如果实现远程方法调用，基本的就是通过网络，通过传输数据来进行调用。")]),r._v(" "),v("p",[r._v("所以就有了：")]),r._v(" "),v("ol",[v("li",[r._v("RPC over Http：基于Http协议来传输数据")]),r._v(" "),v("li",[r._v("PRC over Tcp：基于Tcp协议来传输数据")])]),r._v(" "),v("p",[r._v("对于所传输的数据，可以交由RPC的双方来协商定义，但基本都会包括：")]),r._v(" "),v("ol",[v("li",[r._v("调用的是哪个类或接口")]),r._v(" "),v("li",[r._v("调用的是哪个方法，方法名和方法参数类型（考虑方法重载）")]),r._v(" "),v("li",[r._v("调用方法的入参")])]),r._v(" "),v("p",[r._v("所以，我们其实可以看到RPC的自定义性是很高的，各个公司内部都可以实现自己的一套RPC框架，而"),v("strong",[r._v("Dubbo")]),r._v("就是阿里所开源出来的一套RPC框架。")]),r._v(" "),v("p",[v("strong",[r._v("什么是Dubbo")])]),r._v(" "),v("p",[r._v("官网地址：http://dubbo.apache.org/zh/")]),r._v(" "),v("p",[r._v("目前，官网上是这么介绍的："),v("strong",[r._v("Apache Dubbo 是一款高性能、轻量级的开源 Java")]),r._v(" "),v("strong",[r._v("服务****框架")])]),r._v(" "),v("p",[r._v("在几个月前，官网的介绍是："),v("strong",[r._v("Apache Dubbo 是一款高性能、轻量级的开源 Java")]),r._v(" "),v("strong",[r._v("RPC****框架")])]),r._v(" "),v("p",[r._v("现在的介绍是："),v("strong",[r._v("Apache Dubbo 是一款微服务框架，为大规模微服务实践提供高性能 RPC 通信、流量治理、可观测性等解决方案，涵盖 Java、Golang 等多种语言 SDK 实现")])]),r._v(" "),v("p",[r._v("为什么会将"),v("strong",[r._v("RPC")]),r._v("改为"),v("strong",[r._v("服务")]),r._v("？")]),r._v(" "),v("p",[r._v("Dubbo一开始的定位就是RPC，专注于两个服务之间的调用。但随着微服务的盛行，除开"),v("strong",[r._v("服务调用")]),r._v("之外，Dubbo也在逐步的涉猎服务治理、服务监控、服务网关等等，所以现在的Dubbo目标已经不止是RPC框架了，而是和Spring Cloud类似想成为了一个"),v("strong",[r._v("服务")]),r._v("框架。")])])}),[],!1,null,null,null);v.default=o.exports}}]);