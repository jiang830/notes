const e=JSON.parse('{"key":"v-5ad82c50","path":"/pages/01dad9/","title":"Dockerfile","lang":"zh-CN","frontmatter":{"title":"Dockerfile","date":"2021-12-27T04:48:27.000Z","permalink":"/pages/01dad9/","author":{"name":"江"},"category":["Docker"],"description":"在介绍 Dockerfile 最佳实践前，这里再强调一下，生产实践中一定优先使用 Dockerfile 的方式构建镜像。 因为使用 Dockerfile 构建镜像可以带来很多好处： 易于版本化管理，Dockerfile 本身是一个文本文件，方便存放在代码仓库做版本管理，可以很方便地找到各个版本之间的变更历史； 过程可追溯，Dockerfile 的每一行指令代表一个镜像层，根据 Dockerfile 的内容即可很明确地查看镜像的完整构建过程； 屏蔽构建环境异构，使用 Dockerfile 构建镜像无须考虑构建环境，基于相同 Dockerfile 无论在哪里运行，构建结果都一致。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/01dad9/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"Dockerfile"}],["meta",{"property":"og:description","content":"在介绍 Dockerfile 最佳实践前，这里再强调一下，生产实践中一定优先使用 Dockerfile 的方式构建镜像。 因为使用 Dockerfile 构建镜像可以带来很多好处： 易于版本化管理，Dockerfile 本身是一个文本文件，方便存放在代码仓库做版本管理，可以很方便地找到各个版本之间的变更历史； 过程可追溯，Dockerfile 的每一行指令代表一个镜像层，根据 Dockerfile 的内容即可很明确地查看镜像的完整构建过程； 屏蔽构建环境异构，使用 Dockerfile 构建镜像无须考虑构建环境，基于相同 Dockerfile 无论在哪里运行，构建结果都一致。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T21:24:19.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2021-12-27T04:48:27.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T21:24:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dockerfile\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-27T04:48:27.000Z\\",\\"dateModified\\":\\"2023-08-01T21:24:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":3,"title":"精选评论","slug":"精选评论","link":"#精选评论","children":[]}],"git":{"createdTime":1690925059000,"updatedTime":1690925059000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":20.06,"words":6019},"filePathRelative":"容器/Docker/Dockerfile.md","localizedDate":"2021年12月27日","excerpt":"<p data-nodeid=\\"1577\\" class=\\"\\">在介绍 Dockerfile 最佳实践前，这里再强调一下，<strong data-nodeid=\\"1719\\">生产实践中一定优先使用 Dockerfile 的方式构建镜像。</strong> 因为使用 Dockerfile 构建镜像可以带来很多好处：</p>\\n<ul data-nodeid=\\"1578\\">\\n<li data-nodeid=\\"1579\\">\\n<p data-nodeid=\\"1580\\">易于版本化管理，Dockerfile 本身是一个文本文件，方便存放在代码仓库做版本管理，可以很方便地找到各个版本之间的变更历史；</p>\\n</li>\\n<li data-nodeid=\\"1581\\">\\n<p data-nodeid=\\"1582\\">过程可追溯，Dockerfile 的每一行指令代表一个镜像层，根据 Dockerfile 的内容即可很明确地查看镜像的完整构建过程；</p>\\n</li>\\n<li data-nodeid=\\"1583\\">\\n<p data-nodeid=\\"1584\\">屏蔽构建环境异构，使用 Dockerfile 构建镜像无须考虑构建环境，基于相同 Dockerfile 无论在哪里运行，构建结果都一致。</p>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
