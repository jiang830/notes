(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{344:function(s,t,a){"use strict";a.r(t);var e=a(4),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h4",{attrs:{id:"mysql的内部组件结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql的内部组件结构"}},[s._v("#")]),s._v(" MySQL的内部组件结构")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://img.jssjqd.cn/202110220536652.png",alt:"img"}})]),s._v(" "),t("p",[s._v("大体来说，MySQL 可以分为 Server 层和存储引擎层两部分。")]),s._v(" "),t("p",[t("strong",[s._v("Server层")])]),s._v(" "),t("p",[s._v("主要包括连接器、查询缓存、分析器、优化器、执行器等，涵盖 MySQL 的大多数核心服务功能，以及所有的内置函数（如日期、时间、数学和加密函数等），所有跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图等。")]),s._v(" "),t("p",[t("strong",[s._v("Store层")])]),s._v(" "),t("p",[s._v("存储引擎层负责数据的存储和提取。其架构模式是插件式的，支持 InnoDB、MyISAM、Memory 等多个存储引擎。现在最常用的存储引擎是 InnoDB，它从 MySQL 5.5.5 版本开始成为了默认存储引擎。也就是说如果我们在create table时不指定表的存储引擎类型,默认会给你设置存储引擎为InnoDB。")]),s._v(" "),t("p",[s._v("本节课演示表的DDL：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTO_INCREMENT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("InnoDB")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTO_INCREMENT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARSET")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("下面我们重点来分析连接器、查询缓存、分析器、优化器、执行器分别主要干了哪些事情。")]),s._v(" "),t("p",[t("strong",[s._v("连接器")])]),s._v(" "),t("p",[s._v("我们知道由于MySQL是开源的，他有非常多种类的客户端：navicat,mysql front,jdbc,SQLyog等非常丰富的客户端 , 这些客户端要向mysql发起通信都必须先跟Server端建立通信连接，而建立连接的工作就是有连接器完成的。")]),s._v(" "),t("p",[s._v("第一步，你会先连接到这个数据库上，这时候接待你的就是连接器。连接器负责跟客户端建立连接、获取权限、维持和管理连接。")]),s._v(" "),t("p",[s._v("连接命令一般是这么写的：")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[root@192 ~]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql -h host[数据库地址] -u root[用户] -p root[密码] -P 3306")]),s._v("\n")])])]),t("p",[s._v("连接命令中的 mysql 是客户端工具，用来跟服务端建立连接。在完成经典的 TCP 握手后，连接器就要开始认证你的身份，这个时候用的就是你输入的用户名和密码。")]),s._v(" "),t("p",[s._v('1、如果用户名或密码不对，你就会收到一个"Access denied for user"的错误，然后客户端程序结束执行。')]),s._v(" "),t("p",[s._v("2、如果用户名密码认证通过，连接器会到权限表里面查出你拥有的权限。之后，这个连接里面的权限判断逻辑，都将依赖于此时读到的权限。")]),s._v(" "),t("p",[s._v("这就意味着，一个用户成功建立连接后，即使你用管理员账号对这个用户的权限做了修改，也不会影响已经存在连接的权限。修改完成后，只有再新建的连接才会使用新的权限设置。用户的权限表在系统表空间的mysql的user表中。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://img.jssjqd.cn/202110220537649.png",alt:"img"}})]),s._v(" "),t("p",[s._v("修改user密码")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'host'")]),s._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//创建新用户 ")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//赋权限,%表示所有(host) ")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flush "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//刷新数据库 ")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("”"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("″"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("’root’"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("设置用户名密码"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" grants "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v('@"%"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 查看当前用户的权限\n")])])]),t("p",[s._v("连接完成后，如果你没有后续的动作，这个连接就处于空闲状态，你可以在 show processlist 命令中看到它。文本中这个图是 show processlist 的结果，其中的 Command 列显示为“Sleep”的这一行，就表示现在系统里面有一个空闲连接，关闭连接 kill "),t("id",[s._v("。")])],1),s._v(" "),t("p",[t("img",{attrs:{src:"http://img.jssjqd.cn/202110220537435.png",alt:"img"}})]),s._v(" "),t("p",[s._v("客户端如果长时间不发送command到Server端，连接器就会自动将它断开。这个时间是由参数 wait_timeout 控制的，默认值是 8 小时。")]),s._v(" "),t("p",[s._v("查看wait_timeout")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('mysql> show global variables like "wait_timeout"; mysql>set global wait_timeout=28800; 设置全局服务器关闭非交互连接之前等待活动的秒数\n')])])]),t("p",[t("img",{attrs:{src:"http://img.jssjqd.cn/202110220537422.png",alt:"img"}})]),s._v(" "),t("p",[s._v("如果在连接被断开之后，客户端再次发送请求的话，就会收到一个错误提醒： Lost connection to MySQL server during query。这时候如果你要继续，就需要重连，然后再执行请求了。")]),s._v(" "),t("p",[s._v("数据库里面，长连接是指连接成功后，如果客户端持续有请求，则一直使用同一个连接。短连接则是指每次执行完很少的几次查询就断开连接，下次查询再重新建立一个。")]),s._v(" "),t("p",[s._v("开发当中我们大多数时候用的都是长连接,把连接放在Pool内进行管理，但是长连接有些时候会导致 MySQL 占用内存涨得特别快，这是因为 MySQL 在执行过程中临时使用的内存是管理在连接对象里面的。这些资源会在连接断开的时候才释放。所以如果长连接累积下来，可能导致内存占用太大，被系统强行杀掉（OOM），从现象看就是 MySQL 异常重启了。")]),s._v(" "),t("p",[s._v("怎么解决这类问题呢？")]),s._v(" "),t("p",[s._v("1、定期断开长连接。使用一段时间，或者程序里面判断执行过一个占用内存的大查询后，断开连接，之后要查询再重连。")]),s._v(" "),t("p",[s._v("2、如果你用的是 MySQL 5.7 或更新版本，可以在每次执行一个比较大的操作后，通过执行 mysql_reset_connection 来重新初始化连接资源。这个过程不需要重连和重新做权限验证，但是会将连接恢复到刚刚创建完时的状态。")]),s._v(" "),t("p",[t("strong",[s._v("查询缓存")])]),s._v(" "),t("p",[s._v("常用的一些操作")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("databases")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 显示所有数据库 \nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" dbname； 打开数据库： \nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tables")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 显示数据库mysql中所有的表； \nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("describe")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 显示表mysql数据库中"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v("表的列信息）；\n")])])]),t("p",[s._v("连接建立完成后，你就可以执行 select 语句了。执行逻辑就会来到第二步：查询缓存。")]),s._v(" "),t("p",[s._v("MySQL 拿到一个查询请求后，会先到查询缓存看看，之前是不是执行过这条语句。之前执行过的语句及其结果可能会以 key-value 对的形式，被直接缓存在内存中。key 是查询的语句，value 是查询的结果。如果你的查询能够直接在这个缓存中找到 key，那么这个 value 就会被直接返回给客户端。")]),s._v(" "),t("p",[s._v("如果语句不在查询缓存中，就会继续后面的执行阶段。执行完成后，执行结果会被存入查询缓存中。你可以看到，如果查询命中缓存，MySQL 不需要执行后面的复杂操作，就可以直接返回结果，这个效率会很高。")]),s._v(" "),t("p",[t("strong",[s._v("大多数情况查询缓存就是个鸡肋，为什么呢？")])]),s._v(" "),t("p",[s._v("因为查询缓存往往弊大于利。查询缓存的失效非常频繁，只要有对一个表的更新，这个表上所有的查询缓存都会被清空。因此很可能你费劲地把结果存起来，还没使用呢，就被一个更新全清空了。对于更新压力大的数据库来说，查询缓存的命中率会非常低。")]),s._v(" "),t("p",[t("em",[s._v("mysql8.0已经移除了查询缓存功能")])]),s._v(" "),t("p",[t("strong",[s._v("分析器")])]),s._v(" "),t("p",[s._v("如果没有命中查询缓存，就要开始真正执行语句了。首先，MySQL 需要知道你要做什么，因此需要对 SQL 语句做解析。")]),s._v(" "),t("p",[s._v("分析器先会做“词法分析”。你输入的是由多个字符串和空格组成的一条 SQL 语句，MySQL 需要识别出里面的字符串分别是什么，代表什么。")]),s._v(" "),t("p",[s._v('MySQL 从你输入的"select"这个关键字识别出来，这是一个查询语句。它也要把字符串“T”识别成“表名 T”，把字符串“ID”识别成“列 ID”。')]),s._v(" "),t("p",[s._v("做完了这些识别以后，就要做“语法分析”。根据词法分析的结果，语法分析器会根据语法规则，判断你输入的这个 SQL 语句是否满足 MySQL 语法。")]),s._v(" "),t("p",[s._v('如果你的语句不对，就会收到“You have an error in your SQL syntax”的错误提醒，比如下面这个语句 from 写成了 "rom"。')]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" fro test "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \nERROR "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1064")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("42000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": You have an error "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" your "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQL")]),s._v(" syntax"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("check")]),s._v(" the manual that corresponds "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" your MySQL server version "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("right")]),s._v(" syntax "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" near "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fro test where id=1'")]),s._v(" at line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),t("p",[t("strong",[s._v("词法分析器原理")])]),s._v(" "),t("p",[s._v("词法分析器分成6个主要步骤完成对sql语句的分析")]),s._v(" "),t("p",[s._v("1、词法分析")]),s._v(" "),t("p",[s._v("2、语法分析")]),s._v(" "),t("p",[s._v("3、语义分析")]),s._v(" "),t("p",[s._v("4、构造执行树")]),s._v(" "),t("p",[s._v("5、生成执行计划")]),s._v(" "),t("p",[s._v("6、计划的执行")]),s._v(" "),t("p",[s._v("下图是SQL词法分析的过程步骤：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://img.jssjqd.cn/202110220537597.png",alt:"img"}})]),s._v(" "),t("p",[s._v("SQL语句的分析分为词法分析与语法分析，mysql的词法分析由MySQLLex[MySQL自己实现的]完成，语法分析由Bison生成。关于语法树大家如果想要深入研究可以参考这篇wiki文章：https://en.wikipedia.org/wiki/LR_parser。那么除了Bison外，Java当中也有开源的词法结构分析工具例如Antlr4，ANTLR从语法生成一个解析器，可以构建和遍历解析树，可以在IDEA工具当中安装插件："),t("strong",[s._v("antlr v4 grammar plugin。插件使用详见课程")])]),s._v(" "),t("p",[s._v("经过bison语法分析之后，会生成一个这样的语法树")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://img.jssjqd.cn/202110220537307.png",alt:"img"}})]),s._v(" "),t("p",[s._v("至此我们分析器的工作任务也基本圆满了。接下来进入到优化器")]),s._v(" "),t("p",[t("strong",[s._v("优化器")])]),s._v(" "),t("p",[s._v("经过了分析器，MySQL 就知道你要做什么了。在开始执行之前，还要先经过优化器的处理。")]),s._v(" "),t("p",[s._v("优化器是在表里面有多个索引的时候，决定使用哪个索引；或者在一个语句有多表关联（join）的时候，决定各个表的连接顺序。比如你执行下面这样的语句，这个语句是执行两个表的 join：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" test1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" test2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" test1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yangguo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" test2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xiaolongnv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("既可以先从表 test1 里面取出 name=yangguo的记录的 ID 值，再根据 ID 值关联到表 test2，再判断 test2 里面 name的值是否等于 yangguo。")]),s._v(" "),t("p",[s._v("也可以先从表 test2 里面取出 name=xiaolongnv 的记录的 ID 值，再根据 ID 值关联到 test1，再判断 test1 里面 name 的值是否等于 yangguo。")]),s._v(" "),t("p",[s._v("这两种执行方法的逻辑结果是一样的，但是执行的效率会有不同，而优化器的作用就是决定选择使用哪一个方案。优化器阶段完成后，这个语句的执行方案就确定下来了，然后进入执行器阶段。如果你还有一些疑问，比如优化器是怎么选择索引的，有没有可能选择错等等。")]),s._v(" "),t("p",[t("strong",[s._v("执行器")])]),s._v(" "),t("p",[s._v("开始执行的时候，要先判断一下你对这个表 T 有没有执行查询的权限，如果没有，就会返回没有权限的错误，如下所示 (在工程实现上，如果命中查询缓存，会在查询缓存返回结果的时候，做权限验证。查询也会在优化器之前 调用 precheck 验证权限)。")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" test "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("如果有权限，就打开表继续执行。打开表的时候，执行器就会根据表的引擎定义，去使用这个引擎提供的接口。")]),s._v(" "),t("p",[s._v("比如我们这个例子中的表 test 中，ID 字段没有索引，那么执行器的执行流程是这样的：")]),s._v(" "),t("ol",[t("li",[s._v("调用 InnoDB 引擎接口取这个表的第一行，判断 ID 值是不是 10，如果不是则跳过，如果是则将这行存在结果集中；")]),s._v(" "),t("li",[s._v("调用引擎接口取“下一行”，重复相同的判断逻辑，直到取到这个表的最后一行。")]),s._v(" "),t("li",[s._v("执行器将上述遍历过程中所有满足条件的行组成的记录集作为结果集返回给客户端。")])]),s._v(" "),t("p",[s._v("至此，这个语句就执行完成了。对于有索引的表，执行的逻辑也差不多。第一次调用的是“取满足条件的第一行”这个接口，之后循环取“满足条件的下一行”这个接口，这些接口都是引擎中已经定义好的。你会在数据库的慢查询日志中看到一个 rows_examined 的字段，表示这个语句执行过程中扫描了多少行。这个值就是在执行器每次调用引擎获取数据行的时候累加的。在有些场景下，执行器调用一次，在引擎内部则扫描了多行，因此引擎扫描行数跟 rows_examined 并不是完全相同的。")]),s._v(" "),t("p",[t("strong",[s._v("bin-log归档")])]),s._v(" "),t("p",[s._v("删库是不需要跑路的，因为我们的SQL执行时，会将sql语句的执行逻辑记录在我们的bin-log当中，什么是bin-log呢？")]),s._v(" "),t("p",[s._v("binlog是Server层实现的二进制日志,他会记录我们的cud操作。Binlog有以下几个特点：")]),s._v(" "),t("p",[s._v("1、Binlog在MySQL的Server层实现（引擎共用）")]),s._v(" "),t("p",[s._v("2、Binlog为逻辑日志,记录的是一条语句的原始逻辑")]),s._v(" "),t("p",[s._v("3、Binlog不限大小,追加写入,不会覆盖以前的日志")]),s._v(" "),t("p",[s._v("如果，我们误删了数据库,可以使用binlog进行归档!要使用binlog归档，首先我们得记录binlog，因此需要先开启MySQL的binlog功能。")]),s._v(" "),t("p",[s._v("配置my.cnf")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("配置开启binlog \nlog-bin=/usr/local/mysql/data/binlog/mysql-bin \n注意5.7以及更高版本需要配置本项：server-id=123454（自定义,保证唯一性）;\n#binlog格式，有3种statement,row,mixed \nbinlog-format=ROW\n#表示每1次执行写入就与硬盘同步，会影响性能，为0时表示，事务提交时mysql不做刷盘操作，由系统决定 sync-binlog=1\n")])])]),t("ul",[t("li",[t("p",[t("strong",[s._v("bin-log的三种格式")])]),s._v(" "),t("p",[t("strong",[s._v("1.Statement：每一条会修改数据的sql都会记录在binlog中。")])]),s._v(" "),t("p",[s._v("**优点：**不需要记录每一行的变化，减少了binlog日志量，节约了IO，提高性能。(相比row能节约多少性能与日志量，这个取决于应用的SQL情况，正常同一条记录修改或者插入row格式所产生的日志量还小于Statement产生的日志量，但是考虑到如果带条件的update操作，以及整表删除，alter表等操作，ROW格式会产生大量日志，因此在考虑是否使用ROW格式日志时应该跟据应用的实际情况，其所产生的日志量会增加多少，以及带来的IO性能问题。)")]),s._v(" "),t("p",[s._v("**缺点：**由于记录的只是执行语句，为了这些语句能在slave上正确运行，因此还必须记录每条语句在执行的时候的一些相关信息，以保证所有语句能在slave得到和在master端执行时候相同的结果。另外mysql 的复制,像一些特定函数功能，slave可与master上要保持一致会有很多相关问题(如sleep()函数， last_insert_id()，以及user-defined functions(udf)会出现问题).")]),s._v(" "),t("p",[t("strong",[s._v("2.Row:不记录sql语句上下文相关信息，仅保存哪条记录被修改。")])]),s._v(" "),t("p",[t("strong",[s._v("优点：")]),s._v(" binlog中可以不记录执行的sql语句的上下文相关的信息，仅需要记录那一条记录被修改成什么了。所以rowlevel的日志内容会非常清楚的记录下每一行数据修改的细节。而且不会出现某些特定情况下的存储过程，或function，以及trigger的调用和触发无法被正确复制的问题")]),s._v(" "),t("p",[t("strong",[s._v("缺点:")]),s._v(" 所有的执行的语句当记录到日志中的时候，都将以每行记录的修改来记录，这样可能会产生大量的日志内容,比如一条update语句，修改多条记录，则binlog中每一条修改都会有记录，这样造成binlog日志量会很大，特别是当执行alter table之类的语句的时候，由于表结构修改，每条记录都发生改变，那么该表每一条记录都会记录到日志中。")]),s._v(" "),t("p",[t("strong",[s._v("3.Mixed level: 是以上两种level的混合使用")])]),s._v(" "),t("p",[s._v("一般的语句修改使用statment格式保存binlog，如一些函数，statement无法完成主从复制的操作，则采用row格式保存binlog,MySQL会根据执行的每一条具体的sql语句来区分对待记录的日志形式，也就是在Statement和Row之间选择一种.新版本的MySQL中队row level模式也被做了优化，并不是所有的修改都会以row level来记录，像遇到表结构变更的时候就会以statement模式来记录。至于update或者delete等修改数据的语句，还是会记录所有行的变更。")])])]),s._v(" "),t("p",[s._v("binlog命令")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" variables "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%log_bin%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 查看bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("log是否开启 \nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flush logs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 会多一个最新的bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("log日志 \nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" master "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 查看最后一个bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("log日志的相关信息 \nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" reset master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 清空所有的bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("log日志\n")])])]),t("p",[s._v("查看binlog内容")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysqlbinlog "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--no-defaults /usr/local/mysql/data/binlog/mysql-bin.000001 查看binlog内容")]),s._v("\n")])])]),t("p",[s._v("binlog里的内容不具备可读性，所以需要我们自己去判断恢复的逻辑点位，怎么观察呢？看重点信息，比如begin,commit这种关键词信息，只要在binlog当中看到了，你就可以理解为begin-commit之间的信息是一个完整的事务逻辑,然后再根据位置position判断恢复即可。binlog内容如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://img.jssjqd.cn/202110220537571.png",alt:"img"}})]),s._v(" "),t("p",[s._v("数据归档操作")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('从bin-log恢复数据 \n恢复全部数据 \n/usr/local/mysql/bin/mysqlbinlog --no-defaults /usr/local/mysql/data/binlog/mysql-bin.000001 |mysql -uroot -p tuling(数据库名) \n恢复指定位置数据 \n/usr/local/mysql/bin/mysqlbinlog --no-defaults --start-position="408" --stop-position="731"  /usr/local/mysql/data/binlog/mysql-bin.000001 |mysql -uroot -p tuling(数据库) \n恢复指定时间段数据 \n/usr/local/mysql/bin/mysqlbinlog --no-defaults /usr/local/mysql/data/binlog/mysql-bin.000001 --stop-date= "2018-03-02 12:00:00" --start-date= "2019-03-02 11:55:00"|mysql -uroot -p test(数据库)\n')])])]),t("p",[t("strong",[s._v("归档测试准")])]),s._v(" "),t("p",[s._v("1、定义一个存储过程，写入数据")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("procedure")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v(" tproc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delimiter")]),s._v(" $$ \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("procedure")]),s._v(" tproc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" s "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" c "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("repeat")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("start")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" test "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("$$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delimiter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("2、删除数据")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("truncate")]),s._v(" test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("3、利用binlog归档")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysqlbinlog "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--no-defaults /usr/local/mysql/data/binlog/mysql-bin.000001 |mysql -uroot -p tuling(数据库名)")]),s._v("\n")])])]),t("p",[s._v("4、归档完毕，数据恢复")])])}),[],!1,null,null,null);t.default=r.exports}}]);