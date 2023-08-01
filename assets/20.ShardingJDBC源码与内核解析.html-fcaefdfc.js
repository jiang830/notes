const e=JSON.parse('{"key":"v-2472b45f","path":"/20.%E6%80%A7%E8%83%BD%E8%B0%83%E4%BC%98/03.%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8/20.ShardingJDBC%E6%BA%90%E7%A0%81%E4%B8%8E%E5%86%85%E6%A0%B8%E8%A7%A3%E6%9E%90.html","title":"一、ShardingJDBC内核工作原理解读","lang":"zh-CN","frontmatter":{"description":"[TOC] ​\\t通过上一章节，我们已经对ShardingJDBC的各种使用方式有了一些了解，这一章节我们自然要更进一步，深入ShardingJDBC的内核。但是内核其实是非常复杂的，决定开始深入之前，最好带上明确的目的，否则只会是一头雾水。这次我们的主要问题就从实际使用出发，重点了解一下上一章节中用到的各种各样花里胡哨的配置，是怎么从ShardingJDBC的内核中扩展出来的。以及我们应该要如何自行扩展各种组件。 一、ShardingJDBC内核工作原理解读 ​\\t在深入之前，你需要了解ShardingJDBC整体上是怎么工作的。ShardingSphere的整体架构图是这样的：","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/20.%E6%80%A7%E8%83%BD%E8%B0%83%E4%BC%98/03.%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8/20.ShardingJDBC%E6%BA%90%E7%A0%81%E4%B8%8E%E5%86%85%E6%A0%B8%E8%A7%A3%E6%9E%90.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"一、ShardingJDBC内核工作原理解读"}],["meta",{"property":"og:description","content":"[TOC] ​\\t通过上一章节，我们已经对ShardingJDBC的各种使用方式有了一些了解，这一章节我们自然要更进一步，深入ShardingJDBC的内核。但是内核其实是非常复杂的，决定开始深入之前，最好带上明确的目的，否则只会是一头雾水。这次我们的主要问题就从实际使用出发，重点了解一下上一章节中用到的各种各样花里胡哨的配置，是怎么从ShardingJDBC的内核中扩展出来的。以及我们应该要如何自行扩展各种组件。 一、ShardingJDBC内核工作原理解读 ​\\t在深入之前，你需要了解ShardingJDBC整体上是怎么工作的。ShardingSphere的整体架构图是这样的："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T21:24:19.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:modified_time","content":"2023-08-01T21:24:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一、ShardingJDBC内核工作原理解读\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-01T21:24:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"0、配置管控","slug":"_0、配置管控","link":"#_0、配置管控","children":[]},{"level":2,"title":"1、SQL Parser: SQL解析引擎","slug":"_1、sql-parser-sql解析引擎","link":"#_1、sql-parser-sql解析引擎","children":[]},{"level":2,"title":"2、SQL Router- SQL 路由引擎","slug":"_2、sql-router-sql-路由引擎","link":"#_2、sql-router-sql-路由引擎","children":[]},{"level":2,"title":"3、SQL Rewriter : SQL 优化引擎","slug":"_3、sql-rewriter-sql-优化引擎","link":"#_3、sql-rewriter-sql-优化引擎","children":[]},{"level":2,"title":"4、SQL Executor ： SQL执行引擎","slug":"_4、sql-executor-sql执行引擎","link":"#_4、sql-executor-sql执行引擎","children":[]},{"level":2,"title":"5、Result Merger： 结果归并","slug":"_5、result-merger-结果归并","link":"#_5、result-merger-结果归并","children":[]},{"level":2,"title":"1、从主键生成策略入手","slug":"_1、从主键生成策略入手","link":"#_1、从主键生成策略入手","children":[]},{"level":2,"title":"2、尝试扩展分片算法","slug":"_2、尝试扩展分片算法","link":"#_2、尝试扩展分片算法","children":[]}],"git":{"createdTime":1690925059000,"updatedTime":1690925059000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":14.18,"words":4253},"filePathRelative":"20.性能调优/03.分库分表/20.ShardingJDBC源码与内核解析.md","localizedDate":"2023年8月1日","excerpt":"<p>[TOC]</p>\\n\\n<p>​\\t通过上一章节，我们已经对ShardingJDBC的各种使用方式有了一些了解，这一章节我们自然要更进一步，深入ShardingJDBC的内核。但是内核其实是非常复杂的，决定开始深入之前，最好带上明确的目的，否则只会是一头雾水。这次我们的主要问题就从实际使用出发，重点了解一下上一章节中用到的各种各样花里胡哨的配置，是怎么从ShardingJDBC的内核中扩展出来的。以及我们应该要如何自行扩展各种组件。</p>\\n<h1> 一、ShardingJDBC内核工作原理解读</h1>\\n<p>​\\t在深入之前，你需要了解ShardingJDBC整体上是怎么工作的。ShardingSphere的整体架构图是这样的：</p>","autoDesc":true}');export{e as data};
