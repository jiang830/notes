const e=JSON.parse('{"key":"v-aef80448","path":"/pages/12192426/","title":"Innodb底层原理与MySQL日志机制","lang":"zh-CN","frontmatter":{"title":"Innodb底层原理与MySQL日志机制","date":"2023-07-12T19:24:26.000Z","permalink":"/pages/12192426/","author":{"name":"江"},"category":["MySQL"],"description":"MySQL的内部组件结构 ​ 大体来说，MySQL 可以分为 Server 层和存储引擎层两部分。 Server层 主要包括连接器、查询缓存、分析器、优化器、执行器等，涵盖 MySQL 的大多数核心服务功能，以及所有的内置函数（如日期、时间、数学和加密函数等），所有跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图等。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/12192426/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"Innodb底层原理与MySQL日志机制"}],["meta",{"property":"og:description","content":"MySQL的内部组件结构 ​ 大体来说，MySQL 可以分为 Server 层和存储引擎层两部分。 Server层 主要包括连接器、查询缓存、分析器、优化器、执行器等，涵盖 MySQL 的大多数核心服务功能，以及所有的内置函数（如日期、时间、数学和加密函数等），所有跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图等。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T21:24:19.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2023-07-12T19:24:26.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T21:24:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Innodb底层原理与MySQL日志机制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-12T19:24:26.000Z\\",\\"dateModified\\":\\"2023-08-01T21:24:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":2,"title":"MySQL的内部组件结构","slug":"mysql的内部组件结构","link":"#mysql的内部组件结构","children":[{"level":3,"title":"Server层","slug":"server层","link":"#server层","children":[]},{"level":3,"title":"存储引擎层","slug":"存储引擎层","link":"#存储引擎层","children":[]},{"level":3,"title":"连接器","slug":"连接器","link":"#连接器","children":[]},{"level":3,"title":"查询缓存","slug":"查询缓存","link":"#查询缓存","children":[]},{"level":3,"title":"分析器","slug":"分析器","link":"#分析器","children":[]},{"level":3,"title":"优化器","slug":"优化器","link":"#优化器","children":[]},{"level":3,"title":"执行器","slug":"执行器","link":"#执行器","children":[]}]},{"level":2,"title":"Innodb底层原理与Mysql日志机制","slug":"innodb底层原理与mysql日志机制","link":"#innodb底层原理与mysql日志机制","children":[{"level":3,"title":"redo log重做日志关键参数","slug":"redo-log重做日志关键参数","link":"#redo-log重做日志关键参数","children":[]},{"level":3,"title":"redo log 写入磁盘过程分析","slug":"redo-log-写入磁盘过程分析","link":"#redo-log-写入磁盘过程分析","children":[]},{"level":3,"title":"binlog二进制归档日志","slug":"binlog二进制归档日志","link":"#binlog二进制归档日志","children":[]},{"level":3,"title":"binlog 的日志格式","slug":"binlog-的日志格式","link":"#binlog-的日志格式","children":[]},{"level":3,"title":"binlog写入磁盘机制","slug":"binlog写入磁盘机制","link":"#binlog写入磁盘机制","children":[]},{"level":3,"title":"删除 binlog 日志文件","slug":"删除-binlog-日志文件","link":"#删除-binlog-日志文件","children":[]},{"level":3,"title":"查看 binlog 日志文件","slug":"查看-binlog-日志文件","link":"#查看-binlog-日志文件","children":[]},{"level":3,"title":"binlog日志文件恢复数据","slug":"binlog日志文件恢复数据","link":"#binlog日志文件恢复数据","children":[]},{"level":3,"title":"undo log回滚日志","slug":"undo-log回滚日志","link":"#undo-log回滚日志","children":[]},{"level":3,"title":"错误日志","slug":"错误日志","link":"#错误日志","children":[]},{"level":3,"title":"通用查询日志","slug":"通用查询日志","link":"#通用查询日志","children":[]}]}],"git":{"createdTime":1690925059000,"updatedTime":1690925059000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":21.95,"words":6585},"filePathRelative":"20.性能调优/00.MySQL/08.Innodb底层原理与MySQL日志机制深入剖析.md","localizedDate":"2023年7月12日","excerpt":"<h2> MySQL的内部组件结构</h2>\\n<hr>\\n<p>​    <img src=\\"https://img.jssjqd.cn/202307120113283.png\\" alt=\\"image-20230712011318890\\" loading=\\"lazy\\"></p>\\n<p>大体来说，MySQL 可以分为 Server 层和存储引擎层两部分。</p>\\n<h3> Server层</h3>\\n<p>主要包括<strong>连接器、查询缓存、分析器、优化器、执行器</strong>等，涵盖 MySQL 的大多数核心服务功能，以及所有的内置函数（如日期、时间、数学和加密函数等），所有跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图等。</p>","autoDesc":true}');export{e as data};
