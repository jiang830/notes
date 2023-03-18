(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{398:function(a,s,t){"use strict";t.r(s);var e=t(4),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("2013年发布至今， "),s("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker"),s("OutboundLink")],1),a._v(" 一直广受瞩目，被认为可能会改变软件行业。")]),a._v(" "),s("p",[a._v("但是，许多人并不清楚 Docker 到底是什么，要解决什么问题，好处又在哪里？今天就来详细解释，帮助大家理解它，还带有简单易懂的实例，教你如何将它用于日常开发。")]),a._v(" "),s("p",[a._v("​    "),s("img",{attrs:{src:"https://img.jssjqd.cn/202211100917731.png",alt:""}})]),a._v(" "),s("p",[s("strong",[a._v("Docker简介")])]),a._v(" "),s("p",[a._v("Docker是一个开源的"),s("strong",[a._v("容器引擎")]),a._v("，它有助于更快地交付应用。 Docker可将应用程序和基础设施层隔离，并且能将基础设施当作程序一样进行管理。使用 Docker可更快地打包、测试以及部署应用程序，并可以缩短从编写到部署运行代码的周期。")]),a._v(" "),s("p",[a._v("Docker的优点如下：")]),a._v(" "),s("p",[s("strong",[a._v("1、简化程序")])]),a._v(" "),s("p",[a._v("Docker 让开发者可以打包他们的应用以及依赖包到一个"),s("strong",[a._v("可移植")]),a._v("的容器中，然后发布到任何流行的 Linux 机器上，便可以实现虚拟化。Docker改变了虚拟化的方式，使开发者可以直接将自己的成果放入Docker中进行管理。方便快捷已经是 Docker的最大优势，过去需要用数天乃至数周的 任务，在Docker容器的处理下，只需要数秒就能完成。")]),a._v(" "),s("p",[s("strong",[a._v("2、避免选择恐惧症")])]),a._v(" "),s("p",[a._v("如果你有选择恐惧症，还是资深患者。Docker 帮你 打包你的纠结！比如 Docker 镜像；Docker 镜像中包含了运行环境和配置，所以 Docker 可以简化部署多种应用实例工作。比如 Web 应用、后台应用、数据库应用、大数据应用比如 Hadoop 集群、消息队列等等都可以打包成一个镜像部署。")]),a._v(" "),s("p",[s("strong",[a._v("3、节省开支")])]),a._v(" "),s("p",[a._v("一方面，云计算时代到来，使开发者不必为了追求效果而配置高额的硬件，Docker 改变了高性能必然高价格的思维定势。Docker 与云的结合，让云空间得到更充分的利用。不仅解决了硬件管理的问题，也改变了虚拟化的方式。")]),a._v(" "),s("p",[s("strong",[a._v("Docker的架构")])]),a._v(" "),s("p",[a._v("​    "),s("img",{attrs:{src:"https://img.jssjqd.cn/202211100918451.png",alt:"image-20221110091841828"}})]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Docker daemon（ Docker守护进程）")])])]),a._v(" "),s("p",[a._v("Docker daemon是一个运行在宿主机（ DOCKER-HOST）的后台进程。可通过 Docker客户端与之通信。")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Client（ Docker客户端）")])])]),a._v(" "),s("p",[a._v("Docker客户端是 Docker的用户界面，它可以接受用户命令和配置标识，并与 Docker daemon通信。图中， docker build等都是 Docker的相关命令。")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Images（ Docker镜像）")])])]),a._v(" "),s("p",[a._v("Docker镜像是一个只读模板，它包含创建 Docker容器的说明。"),s("strong",[a._v("它和系统安装光盘有点像")]),a._v("，使用系统安装光盘可以安装系统，同理，使用Docker镜像可以运行 Docker镜像中的程序。")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Container（容器）")])])]),a._v(" "),s("p",[a._v("容器是镜像的可运行实例。"),s("strong",[a._v("镜像和容器的关系有点类似于面向对象中，类和对象的关系")]),a._v("。可通过 Docker API或者 CLI命令来启停、移动、删除容器。")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Registry")])])]),a._v(" "),s("p",[a._v("Docker Registry是一个集中存储与分发镜像的服务。构建完 Docker镜像后，就可在当前宿主机上运行。但如果想要在其他机器上运行这个镜像，就需要手动复制。此时可借助 Docker Registry来避免镜像的手动复制。")]),a._v(" "),s("p",[a._v("一个 Docker Registry可包含多个 Docker仓库，每个仓库可包含多个镜像标签，每个标签对应一个 Docker镜像。这跟 Maven的仓库有点类似，如果把 Docker Registry比作 Maven仓库的话，那么 Docker仓库就可理解为某jar包的路径，而镜像标签则可理解为jar包的版本号。")]),a._v(" "),s("p",[a._v("Docker Registry可分为公有Docker Registry和私有Docker Registry。 最常⽤的Docker Registry莫过于官⽅的Docker Hub， 这也是默认的Docker Registry。 Docker Hub上存放着⼤量优秀的镜像， 我们可使⽤Docker命令下载并使⽤。")]),a._v(" "),s("p",[s("strong",[a._v("Docker 的安装")])]),a._v(" "),s("p",[a._v("Docker 是一个开源的商业产品，有两个版本：社区版（Community Edition，缩写为 CE）和企业版（Enterprise Edition，缩写为 EE）。企业版包含了一些收费服务，个人开发者一般用不到。下面的介绍都针对社区版。")]),a._v(" "),s("p",[a._v("Docker CE 的安装请参考官方文档，"),s("strong",[a._v("我们这里以CentOS为例：")])]),a._v(" "),s("p",[a._v("1、Docker 要求 CentOS 系统的内核版本高于 3.10")]),a._v(" "),s("p",[a._v("通过 uname -r 命令查看你当前的内核版本")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("uname")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v("              \n")])])]),s("p",[a._v("2、使用 root 权限登录 Centos。确保 yum 包更新到最新。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" update              \n")])])]),s("p",[a._v("3、卸载旧版本(如果安装过旧版本的话)")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum remove "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" docker*              \n")])])]),s("p",[a._v("4、安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" yum-utils              \n")])])]),s("p",[a._v("5、设置yum源，并更新 yum 的包索引")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo yum makecache fast              \n")])])]),s("p",[a._v("​    "),s("img",{attrs:{src:"https://img.jssjqd.cn/202211100919813.png",alt:"0"}})]),a._v(" "),s("p",[a._v("6、可以查看所有仓库中所有docker版本，并选择特定版本安装")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum list docker-ce "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--showduplicates")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v("              \n")])])]),s("p",[a._v("​    "),s("img",{attrs:{src:"https://img.jssjqd.cn/202211100919508.png",alt:"image-20221110091921772"}})]),a._v(" "),s("p",[a._v("7、安装docker")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" docker-ce-3:19.03.9-3.el7.x86_64 "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 这是指定版本安装              ")]),a._v("\n")])])]),s("p",[a._v("8、启动并加入开机启动")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("systemctl start "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("              \n")])])]),s("p",[a._v("9、验证安装是否成功(有client和service两部分表示docker安装启动都成功了)")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" version              \n")])])]),s("p",[a._v("​    "),s("img",{attrs:{src:"https://img.jssjqd.cn/202211100919972.png",alt:"image-20221110091932473"}})]),a._v(" "),s("p",[s("strong",[a._v("注意：一般需要配置docker镜像加速器")])]),a._v(" "),s("p",[a._v("我们可以借助阿里云的镜像加速器，登录阿里云(https://cr.console.aliyun.com/#/accelerator)")]),a._v(" "),s("p",[a._v("可以看到镜像加速地址如下图：")]),a._v(" "),s("p",[a._v("​    "),s("img",{attrs:{src:"https://img.jssjqd.cn/202211100919311.png",alt:"image-20221110091944892"}})]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /etc/docker              \n")])])]),s("p",[a._v("查看有没有 daemon.json。这是docker默认的配置文件。")]),a._v(" "),s("p",[a._v("如果没有新建，如果有，则修改。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" daemon.json "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"registry-mirrors"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://m9r2r2uj.mirror.aliyuncs.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("              \n")])])]),s("p",[a._v("保存退出。")]),a._v(" "),s("p",[a._v("重启docker服务")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("systemctl daemon-reload \n\nsystemctl restart "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("    \n")])])]),s("p",[a._v("成功！")]),a._v(" "),s("p",[a._v("10、卸载docker")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum remove "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" docker* "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" /etc/systemd/system/docker.service.d "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" /var/lib/docker "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" /var/run/docker              \n")])])]),s("p",[s("strong",[a._v("Docker常用命令")])]),a._v(" "),s("p",[s("strong",[a._v("镜像相关命令")])]),a._v(" "),s("p",[s("strong",[a._v("1、搜索镜像")])]),a._v(" "),s("p",[a._v("可使用 docker search命令搜索存放在 Docker Hub中的镜像。执行该命令后， Docker就会在Docker Hub中搜索含有 java这个关键词的镜像仓库。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" search "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v("              \n")])])]),s("p",[s("img",{attrs:{src:"https://img.jssjqd.cn/202211100919105.png",alt:"image-20221110091957117"}})]),a._v(" "),s("p",[a._v("以上列表包含五列，含义如下：")]),a._v(" "),s("p",[a._v("- NAME:镜像仓库名称。")]),a._v(" "),s("p",[a._v("- DESCRIPTION:镜像仓库描述。")]),a._v(" "),s("p",[a._v("- STARS：镜像仓库收藏数，表示该镜像仓库的受欢迎程度，类似于 GitHub的 stars0")]),a._v(" "),s("p",[a._v("- OFFICAL:表示是否为官方仓库，该列标记为[0K]的镜像均由各软件的官方项目组创建和维护。")]),a._v(" "),s("p",[a._v("- AUTOMATED：表示是否是自动构建的镜像仓库。")]),a._v(" "),s("p",[s("strong",[a._v("2、下载镜像")])]),a._v(" "),s("p",[a._v("使用命令docker pull命令即可从 Docker Registry上下载镜像，执行该命令后，Docker会从 Docker Hub中的 java仓库下载最新版本的 Java镜像。如果要下载指定版本则在java后面加冒号指定版本，例如：docker pull java:8")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull java:8  \n")])])]),s("p",[a._v("​    "),s("img",{attrs:{src:"https://img.jssjqd.cn/202211101006727.png",alt:"image-20221110100640093"}})]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull nginx              \n")])])]),s("p",[a._v("​    "),s("img",{attrs:{src:"https://img.jssjqd.cn/202211101006576.png",alt:"image-20221110100646229"}})]),a._v(" "),s("p",[s("strong",[a._v("3、列出镜像")])]),a._v(" "),s("p",[a._v("使用 docker images命令即可列出已下载的镜像")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images              \n")])])]),s("p",[a._v("​    "),s("img",{attrs:{src:"https://img.jssjqd.cn/202211101006344.png",alt:"image-20221110100651042"}})]),a._v(" "),s("p",[a._v("以上列表含义如下")]),a._v(" "),s("p",[a._v("- REPOSITORY：镜像所属仓库名称。")]),a._v(" "),s("p",[a._v("- TAG:镜像标签。默认是 latest,表示最新。")]),a._v(" "),s("p",[a._v("- IMAGE ID：镜像 ID，表示镜像唯一标识。")]),a._v(" "),s("p",[a._v("- CREATED：镜像创建时间。")]),a._v(" "),s("p",[a._v("- SIZE: 镜像大小。")]),a._v(" "),s("p",[s("strong",[a._v("4、删除本地镜像")])]),a._v(" "),s("p",[a._v("使用 docker rmi命令即可删除指定镜像，强制删除加 -f")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v("               \n")])])]),s("p",[a._v("删除所有镜像")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("              \n")])])]),s("p",[s("strong",[a._v("容器相关命令")])]),a._v(" "),s("p",[s("strong",[a._v("1、新建并启动容器")])]),a._v(" "),s("p",[a._v("使用以下docker run命令即可新建并启动一个容器，该命令是最常用的命令，它有很多选项，下面将列举一些常用的选项。")]),a._v(" "),s("p",[a._v("-d选项：表示后台运行")]),a._v(" "),s("p",[a._v("-P选项：随机端口映射")]),a._v(" "),s("p",[a._v("-p选项：指定端口映射，有以下四种格式。")]),a._v(" "),s("p",[a._v("-- ip:hostPort:containerPort")]),a._v(" "),s("p",[a._v("-- ip::containerPort")]),a._v(" "),s("p",[a._v("-- hostPort:containerPort")]),a._v(" "),s("p",[a._v("-- containerPort")]),a._v(" "),s("p",[a._v("--net选项：指定网络模式，该选项有以下可选参数：")]),a._v(" "),s("p",[a._v("--net=bridge:"),s("strong",[a._v("默认选项")]),a._v("，表示连接到默认的网桥。")]),a._v(" "),s("p",[a._v("--net=host:容器使用宿主机的网络。")]),a._v(" "),s("p",[a._v("--net=container:NAME-or-ID：告诉 Docker让新建的容器使用已有容器的网络配置。")]),a._v(" "),s("p",[a._v("--net=none：不配置该容器的网络，用户可自定义网络配置。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("91")]),a._v(":80 nginx              \n")])])]),s("p",[a._v("这样就能启动一个 Nginx容器。在本例中，为 docker run添加了两个参数，含义如下：")]),a._v(" "),s("p",[a._v("-d 后台运行")]),a._v(" "),s("p",[a._v("-p 宿主机端口:容器端口 #开放容器端口到宿主机端口")]),a._v(" "),s("p",[a._v("访问 http://Docker宿主机 IP:91/，将会看到nginx的主界面如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img.jssjqd.cn/202211101006708.png",alt:"image-20221110100657226"}})]),a._v(" "),s("p",[a._v("需要注意的是，使用 docker run命令创建容器时，会先检查本地是否存在指定镜像。如果本地不存在该名称的镜像， Docker就会自动从 Docker Hub下载镜像并启动一个 Docker容器。")]),a._v(" "),s("p",[s("strong",[a._v("2、列出容器")])]),a._v(" "),s("p",[a._v("用 docker ps命令即可列出"),s("strong",[a._v("运行中")]),a._v("的容器")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v("              \n")])])]),s("p",[s("img",{attrs:{src:"https://img.jssjqd.cn/202211101007686.png",alt:"image-20221110100705388"}})]),a._v(" "),s("p",[a._v("如需列出所有容器（包括已停止的容器），可使用-a参数。该列表包含了7列，含义如下")]),a._v(" "),s("p",[a._v("- CONTAINER_ID：表示容器 ID。")]),a._v(" "),s("p",[a._v("- IMAGE:表示镜像名称。")]),a._v(" "),s("p",[a._v("- COMMAND：表示启动容器时运行的命令。")]),a._v(" "),s("p",[a._v("- CREATED：表示容器的创建时间。")]),a._v(" "),s("p",[a._v("- STATUS：表示容器运行的状态。UP表示运行中， Exited表示已停止。")]),a._v(" "),s("p",[a._v("- PORTS:表示容器对外的端口号。")]),a._v(" "),s("p",[a._v("- NAMES:表示容器名称。该名称默认由 Docker自动生成，也可使用 docker run命令的--name选项自行指定。")]),a._v(" "),s("p",[s("strong",[a._v("3、停止容器")])]),a._v(" "),s("p",[a._v("使用 docker stop命令，即可停止容器")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop f0b1c8ab3633              \n")])])]),s("p",[a._v("其中f0b1c8ab3633是容器 ID,当然也可使用 docker stop容器名称来停止指定容器")]),a._v(" "),s("p",[s("strong",[a._v("4、强制停止容器")])]),a._v(" "),s("p",[a._v("可使用 docker kill命令发送 SIGKILL信号来强制停止容器")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" f0b1c8ab3633              \n")])])]),s("p",[s("strong",[a._v("5、启动已停止的容器")])]),a._v(" "),s("p",[a._v("使用docker run命令，即可"),s("strong",[a._v("新建")]),a._v("并启动一个容器。对于已停止的容器，可使用 docker start命令来"),s("strong",[a._v("启动")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" start f0b1c8ab3633              \n")])])]),s("p",[s("strong",[a._v("6、查看容器所有信息")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" inspect f0b1c8ab3633              \n")])])]),s("p",[s("strong",[a._v("7、查看容器日志")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" container logs f0b1c8ab3633\n")])])]),s("p",[s("strong",[a._v("8、查看容器里的进程")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("top")]),a._v(" f0b1c8ab3633              \n")])])]),s("p",[s("strong",[a._v("9、容器与宿主机相互复制文件")])]),a._v(" "),s("ul",[s("li",[a._v("从容器里面拷文件到宿主机：")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" 容器id:要拷贝的文件在容器里面的路径  宿主机的相应路径  如：docker "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" 7aa5dc458f9d:/etc/nginx/nginx.conf /mydata/nginx              \n")])])]),s("ul",[s("li",[a._v("从宿主机拷文件到容器里面：")])]),a._v(" "),s("p",[a._v("docker cp 要拷贝的宿主机文件路径 容器id:要拷贝到容器里面对应的路径")]),a._v(" "),s("p",[s("strong",[a._v("10、进入容器")])]),a._v(" "),s("p",[a._v("使用docker exec命令用于进入一个正在运行的docker容器。如果docker run命令运行容器的时候，没有使用-it参数，就要用这个命令进入容器。一旦进入了容器，就可以在容器的 Shell 执行命令了")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" f0b1c8ab3633 /bin/bash  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("有的容器需要把 /bin/bash 换成 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("         \n")])])]),s("p",[s("strong",[a._v("11、容器内安装vim、ping、ifconfig等指令")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#安装vim ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" iputils-ping  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#安装ping ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" net-tools     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#安装ifconfig               ")]),a._v("\n")])])]),s("p",[s("strong",[a._v("12、删除容器")])]),a._v(" "),s("p",[a._v("使用 docker rm命令即可删除指定容器")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" f0b1c8ab3633              \n")])])]),s("p",[a._v("该命令只能删除"),s("strong",[a._v("已停止")]),a._v("的容器，如需删除正在运行的容器，可使用-f参数")]),a._v(" "),s("p",[a._v("强制删除所有容器")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("              \n")])])]),s("h4",{attrs:{id:"将微服务运行在docker上"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将微服务运行在docker上"}},[a._v("#")]),a._v(" 将微服务运行在docker上")]),a._v(" "),s("p",[s("strong",[a._v("使用Dockerfile构建Docker镜像")])]),a._v(" "),s("p",[a._v("Dockerfile是一个文本文件，其中包含了若干条指令，指令描述了构建镜像的细节")]),a._v(" "),s("p",[a._v("先来编写一个最简单的Dockerfile，以前文下载的Nginx镜像为例，来编写一个Dockerfile修改该Nginx镜像的首页")]),a._v(" "),s("p",[a._v("1、新建一个空文件夹docker-demo，在里面再新建文件夹app，在app目录下新建一个名为Dockerfile的文件，在里面增加如下内容：")]),a._v(" "),s("div",{staticClass:"language-dockerfile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" nginx")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RUN")]),a._v(" echo "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<h1>This is Tuling Nginx!!!</h1>'")]),a._v(" > /usr/share/nginx/html/index.html ")]),a._v("\n")])])]),s("p",[a._v("该Dockerfile非常简单，其中的 FROM、 RUN都是 Dockerfile的指令。 FROM指令用于指定基础镜像， RUN指令用于执行命令。")]),a._v(" "),s("p",[a._v("2、在Dockerfile所在路径执行以下命令构建镜像：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" nginx:tuling "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("              \n")])])]),s("p",[a._v("其中，-t指定镜像名字，命令最后的点（.）表示Dockerfile文件所在路径")]),a._v(" "),s("p",[a._v("3、执行以下命令，即可使用该镜像启动一个 Docker容器")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("92")]),a._v(":80 nginx:tuling              \n")])])]),s("p",[a._v("4、访问 http://Docker宿主机IP:92/，可看到下图所示界面")]),a._v(" "),s("p",[a._v("​    "),s("img",{attrs:{src:"https://img.jssjqd.cn/202211101007978.png",alt:"image-20221110100713601"}})]),a._v(" "),s("p",[s("strong",[a._v("Dockerfile常用指令")])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("命令")]),a._v(" "),s("th",[a._v("用途")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("FROM")]),a._v(" "),s("td",[a._v("基础镜像文件")])]),a._v(" "),s("tr",[s("td",[a._v("RUN")]),a._v(" "),s("td",[a._v("构建镜像阶段执行命令")])]),a._v(" "),s("tr",[s("td",[a._v("ADD")]),a._v(" "),s("td",[a._v("添加文件，从src目录复制文件到容器的dest，其中 src可以是 Dockerfile所在目录的相对路径，也可以是一个 URL,还可以是一个压缩包")])]),a._v(" "),s("tr",[s("td",[a._v("COPY")]),a._v(" "),s("td",[a._v("拷贝文件，和ADD命令类似，但不支持URL和压缩包")])]),a._v(" "),s("tr",[s("td",[a._v("CMD")]),a._v(" "),s("td",[a._v("容器启动后执行命令")])]),a._v(" "),s("tr",[s("td",[a._v("EXPOSE")]),a._v(" "),s("td",[a._v("声明容器在运行时对外提供的服务端口")])]),a._v(" "),s("tr",[s("td",[a._v("WORKDIR")]),a._v(" "),s("td",[a._v("指定容器工作路径")])]),a._v(" "),s("tr",[s("td",[a._v("ENV")]),a._v(" "),s("td",[a._v("指定环境变量")])]),a._v(" "),s("tr",[s("td",[a._v("ENTRYPINT")]),a._v(" "),s("td",[a._v("容器入口， ENTRYPOINT和 CMD指令的目的一样，都是指定 Docker容器启动时执行的命令，可多次设置，但只有最后一个有效。")])]),a._v(" "),s("tr",[s("td",[a._v("USER")]),a._v(" "),s("td",[a._v("该指令用于设置启动镜像时的用户或者 UID,写在该指令后的 RUN、 CMD以及 ENTRYPOINT指令都将使用该用户执行命令。")])]),a._v(" "),s("tr",[s("td",[a._v("VOLUME")]),a._v(" "),s("td",[a._v('指定挂载点，该指令使容器中的一个目录具有持久化存储的功能，该目录可被容器本身使用，也可共享给其他容器。当容器中的应用有持久化数据的需求时可以在 Dockerfile中使用该指令。格式为： VOLUME["/data"]。')])])])]),a._v(" "),s("p",[a._v("注意：RUN命令在 image 文件的构建阶段执行，执行结果都会打包进入 image 文件；CMD命令则是在容器启动后执行。另外，一个 Dockerfile 可以包含多个RUN命令，但是只能有一个CMD命令。")]),a._v(" "),s("p",[a._v("注意，指定了CMD命令以后，docker container run命令就不能附加命令了（比如前面的/bin/bash），否则它会覆盖CMD命令。")]),a._v(" "),s("p",[s("strong",[a._v("使用Dockerfile构建微服务镜像")])]),a._v(" "),s("p",[a._v("以项目"),s("strong",[a._v("05-ms-eureka-server")]),a._v("为例，将该微服务的可运行jar包构建成docker镜像")]),a._v(" "),s("p",[a._v("1、将jar包上传linux服务器/usr/local/docker-app/docker-demo/app/eureka目录，在jar包所在目录创建名为Dockerfile的文件")]),a._v(" "),s("p",[a._v("2、在Dockerfile中添加以下内容")]),a._v(" "),s("div",{staticClass:"language-dockerfile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 基于哪个镜像")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("From")]),a._v(" java:8")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 复制文件到容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ADD")]),a._v(" microservice-eureka-server-0.0.1-SNAPSHOT.jar /app.jar")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 声明需要暴露的端口")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXPOSE")]),a._v(" 8761")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置容器启动后执行的命令")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENTRYPOINT")]),a._v(" java "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_OPTS}")]),a._v(" -jar /app.jar           ")]),a._v("\n")])])]),s("p",[a._v("3、使用docker build命令构建镜像")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" microservice-eureka-server:0.0.1 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("              \n")])])]),s("p",[a._v("# 格式： docker  build  -t  镜像名称:标签  Dockerfile的相对位置")]),a._v(" "),s("p",[a._v("在这里，使用-t选项指定了镜像的标签。执行该命令后，终端将会输出如下的内容")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img.jssjqd.cn/202211101007024.png",alt:"image-20221110100718927"}})]),a._v(" "),s("p",[a._v("4、启动镜像，加-d可在后台启动")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8761")]),a._v(":8761 microservice-eureka-server:0.0.1              \n")])])]),s("p",[a._v("使用 -v 可以挂载一个主机上的目录到容器的目录")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8761")]),a._v(":8761 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /log:/container-log microservice-eureka-server:0.0.1              \n")])])]),s("p",[a._v("加上JVM参数：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# --cap-add=SYS_PTRACE 这个参数是让docker能支持在容器里能执行jdk自带类似jinfo，jmap这些命令，如果不需要在容器里执行这些命令可以不加")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_OPTS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'-Xms1028M -Xmx1028M -Xmn512M -Xss512K -XX:MetaspaceSize=256M -XX:MaxMetaspaceSize=256M'")]),a._v(" --cap-add"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SYS_PTRACE "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8761")]),a._v(":8761 microservice-eureka-server:0.0.1          \n")])])]),s("p",[a._v("5、访问http://Docker宿主机IP:8761/，可正常显示Eureka Server首页")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img.jssjqd.cn/202211101007860.png",alt:"image-20221110100723510"}})]),a._v(" "),s("p",[s("strong",[a._v("将微服务镜像发布到远程镜像仓库")])]),a._v(" "),s("p",[a._v("我们制作好了微服务镜像，一般需要发布到镜像仓库供别人使用，我们可以选择自建镜像仓库，也可以直接使用docker官方镜像仓库，这里我们选择docker官方镜像仓库：https://hub.docker.com/")]),a._v(" "),s("p",[a._v("首先，我们需要在docke官方镜像仓库里注册一个账号")]),a._v(" "),s("p",[a._v("然后，在linux服务器上用docker login命令登录镜像仓库")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img.jssjqd.cn/202211101007063.png",alt:"image-20221110100728987"}})]),a._v(" "),s("p",[a._v("要把镜像推送到镜像仓库，需要将镜像前面加个分组名(一般就是docker hub的账户名)，执行如下命令修改镜像名字")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" tag microservice-eureka-server:0.0.1 zhuge666/microservice-eureka-server:0.0.1              \n")])])]),s("p",[a._v("最后将镜像推送到远程仓库")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" push zhuge666/microservice-eureka-server:0.0.1              \n")])])]),s("p",[s("img",{attrs:{src:"https://img.jssjqd.cn/202211101007560.png",alt:"image-20221110100732659"}})]),a._v(" "),s("p",[a._v("我们登录到docker镜像查看下刚刚推送的镜像，这样镜像就能给别人用了")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img.jssjqd.cn/202211101007592.png",alt:"image-20221110100745407"}})]),a._v(" "),s("p",[s("strong",[a._v("Docker虚拟化原理")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img.jssjqd.cn/202211101008900.png",alt:"image-20221110100802572"}})]),a._v(" "),s("p",[a._v("传统虚拟化和容器技术结构比较：传统虚拟化技术是在硬件层面实现虚拟化，增加了系统调用链路的环节，有性能损耗；容器虚拟化技术以共享宿主机Kernel的方式实现，几乎没有性能损耗。")]),a._v(" "),s("p",[a._v("docker利用的是宿主机的内核,而不需要Guest OS。因此,当新建一个容器时,docker不需要和虚拟机一样重新加载一个操作系统内核。避免了寻址、加载操作系统内核这些比较费时费资源的过程,当新建一个虚拟机时,虚拟机软件需要加载Guest OS,这个新建过程是分钟级别的。而docker由于直接利用宿主机的操作系统,则省略了这个过程,因此新建一个docker容器只需要几秒钟。")]),a._v(" "),s("p",[a._v("​    "),s("img",{attrs:{src:"https://img.jssjqd.cn/202211101008931.png",alt:"image-20221110100807908"}})]),a._v(" "),s("p",[s("strong",[a._v("Docker是如何将机器的资源进行隔离的？")])]),a._v(" "),s("p",[a._v("答案是"),s("strong",[a._v("联合文件系统")]),a._v("，常见的有AUFS、Overlay、devicemapper、BTRFS和ZFS等。")]),a._v(" "),s("p",[a._v("以Overlay2举例说明，Overlay2的架构图如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img.jssjqd.cn/202211101458505.png",alt:"image-20221110145808660"}})]),a._v(" "),s("p",[a._v("原理：overlayfs在linux主机上只有两层，一个目录在下层，用来保存镜像(docker)，另外一个目录在上层，用来存储容器信息。在overlayfs中，底层的目录叫做lowerdir，顶层的目录称之为upperdir，对外提供统一的文件系统为merged。当需要修改一个文件时，使用**COW(Copy-on-write)**将文件从只读的Lower复制到可写的Upper进行修改，结果也保存在Upper层。在Docker中，底下的只读层就是image，可写层就是Container。")]),a._v(" "),s("p",[s("strong",[a._v("写时复制 (CoW) 技术详解")])]),a._v(" "),s("p",[a._v("所有驱动都用到的技术—写时复制，Cow全称copy-on-write，表示只是在需要写时才去复制，这个是"),s("strong",[a._v("针对已有文件的修改场景")]),a._v("。比如基于一个image启动多个Container，如果每个Container都去分配一个image一样的文件系统，那么将会占用大量的磁盘空间。而CoW技术可以让所有的容器共享image的文件系统，所有数据都从image中读取，只有当要对文件进行写操作时，才从image里把要写的文件复制到自己的文件系统进行修改。所以无论有多少个容器共享一个image，所做的写操作都是对从image中复制到自己的文件系统的副本上进行，并不会修改image的源文件，且多个容器操作同一个文件，会在每个容器的文件系统里生成一个副本，每个容器修改的都是自己的副本，互相隔离，互不影响。使用CoW可以有效的提高磁盘的利用率。"),s("strong",[a._v("所以容器占用的空间是很少的。")])]),a._v(" "),s("p",[s("strong",[a._v("查看容器占用磁盘大小指令：")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看所有容器的大小")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /var/lib/docker/containers  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进入docker容器存储目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-sh")]),a._v(" *  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看所有容器的大小")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-sh")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("容器完整id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看某一个容器的大小   ")]),a._v("\n")])])]),s("p",[s("strong",[a._v("用时分配 （allocate-on-demand）")])]),a._v(" "),s("p",[a._v("用时分配是"),s("strong",[a._v("针对原本没有这个文件的场景")]),a._v("，只有在要新写入一个文件时才分配空间，这样可以提高存储资源的利用率。比如启动一个容器，并不会因为这个容器分配一些磁盘空间，而是当有新文件写入时，才按需分配新空间。")]),a._v(" "),s("p",[s("strong",[a._v("docker中的镜像分层技术的原理是什么呢？")])]),a._v(" "),s("p",[a._v("docker使用共享技术减少镜像存储空间，所有镜像层和容器层都保存在宿主机的文件系统/var/lib/docker/中，由存储驱动进行管理，尽管存储方式不尽相同，但在所有版本的Docker中都可以"),s("strong",[a._v("共享镜像层")]),a._v("。在下载镜像时，Docker Daemon会检查镜像中的镜像层与宿主机文件系统中的镜像层进行对比，如果存在则不下载，只下载不存在的镜像层，这样可以非常"),s("strong",[a._v("节约存储空间")]),a._v("。    "),s("img",{attrs:{src:"https://img.jssjqd.cn/202211101008958.png",alt:"image-20221110100815868"}})]),a._v(" "),s("p",[a._v("​    "),s("img",{attrs:{src:"https://img.jssjqd.cn/202211101008660.png",alt:"image-20221110100820691"}})]),a._v(" "),s("p",[s("strong",[a._v("最后附一个查看容器资源使用情况的指令：")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stats  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 返回容器资源的实时使用情况，1秒刷新一次 ")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stats --no-stream  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 返回容器当时的资源使用情况              ")]),a._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://img.jssjqd.cn/202211101008947.png",alt:"image-20221110100824915"}})]),a._v(" "),s("p",[a._v("默认情况下，stats 命令会每隔 1 秒钟刷新一次输出的内容直到你按下 ctrl + c。下面是输出的主要内容：")]),a._v(" "),s("p",[a._v("[CONTAINER]：以短格式显示容器的 ID。")]),a._v(" "),s("p",[a._v("[CPU %]：CPU 的使用情况。")]),a._v(" "),s("p",[a._v("[MEM USAGE / LIMIT]：当前使用的内存和最大可以使用的内存。")]),a._v(" "),s("p",[a._v("[MEM %]：以百分比的形式显示内存使用情况。")]),a._v(" "),s("p",[a._v("[NET I/O]：网络 I/O 数据。")]),a._v(" "),s("p",[a._v("[BLOCK I/O]：磁盘 I/O 数据。")]),a._v(" "),s("p",[a._v("[PIDS]：PID 号。")]),a._v(" "),s("p",[a._v('注意：容器的内存使用最大限制默认可以接近宿主机的物理内存，可以通过"-m"参数限制容器可以使用的最大内存：')]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" 500M redis   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#限制容器的最大使用内存为500M")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);