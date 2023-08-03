const e=JSON.parse('{"key":"v-38246ea2","path":"/pages/206e51/","title":"Redis哨兵机制","lang":"zh-CN","frontmatter":{"title":"Redis哨兵机制","date":"2022-12-04T00:08:46.000Z","permalink":"/pages/206e51/","author":{"name":"江"},"category":["Redis"],"description":"在主从复制的基础上，如果注节点出现故障该怎么办呢？ 在 Redis 主从集群中，哨兵机制是实现主从库自动切换的关键机制，它有效地解决了主从复制模式下故障转移的问题。 哨兵机制（Redis Sentinel） Redis Sentinel，即Redis哨兵，在Redis 2.8版本开始引入。哨兵的核心功能是主节点的自动故障转移。 下图是一个典型的哨兵集群监控的逻辑图： img","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/206e51/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"Redis哨兵机制"}],["meta",{"property":"og:description","content":"在主从复制的基础上，如果注节点出现故障该怎么办呢？ 在 Redis 主从集群中，哨兵机制是实现主从库自动切换的关键机制，它有效地解决了主从复制模式下故障转移的问题。 哨兵机制（Redis Sentinel） Redis Sentinel，即Redis哨兵，在Redis 2.8版本开始引入。哨兵的核心功能是主节点的自动故障转移。 下图是一个典型的哨兵集群监控的逻辑图： img"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-02T17:03:17.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2022-12-04T00:08:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-02T17:03:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis哨兵机制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-04T00:08:46.000Z\\",\\"dateModified\\":\\"2023-08-02T17:03:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":2,"title":"哨兵机制（Redis Sentinel）","slug":"哨兵机制-redis-sentinel","link":"#哨兵机制-redis-sentinel","children":[{"level":3,"title":"哨兵集群的组建","slug":"哨兵集群的组建","link":"#哨兵集群的组建","children":[]},{"level":3,"title":"哨兵监控Redis库","slug":"哨兵监控redis库","link":"#哨兵监控redis库","children":[]},{"level":3,"title":"主库下线的判定","slug":"主库下线的判定","link":"#主库下线的判定","children":[]},{"level":3,"title":"哨兵集群的选举","slug":"哨兵集群的选举","link":"#哨兵集群的选举","children":[]},{"level":3,"title":"新主库的选出","slug":"新主库的选出","link":"#新主库的选出","children":[]},{"level":3,"title":"故障的转移","slug":"故障的转移","link":"#故障的转移","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1690995797000,"updatedTime":1690995797000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":6.37,"words":1911},"filePathRelative":"30.分布式框架/00.Redis/12.Redis哨兵机制.md","localizedDate":"2022年12月4日","excerpt":"<p>在主从复制的基础上，如果注节点出现故障该怎么办呢？ 在 Redis 主从集群中，哨兵机制是实现主从库自动切换的关键机制，它有效地解决了主从复制模式下故障转移的问题。</p>\\n<h2> 哨兵机制（Redis Sentinel）</h2>\\n<blockquote>\\n<p>Redis Sentinel，即Redis哨兵，在Redis 2.8版本开始引入。哨兵的核心功能是主节点的自动故障转移。</p>\\n</blockquote>\\n<p>下图是一个典型的哨兵集群监控的逻辑图：</p>\\n<figure><img src=\\"https://img.jssjqd.cn/202212040010405.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>","autoDesc":true}');export{e as data};