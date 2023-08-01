const e=JSON.parse('{"key":"v-15f936fa","path":"/pages/a42c37/","title":"分布式ID服务","lang":"zh-CN","frontmatter":{"title":"分布式ID服务","date":"2023-05-02T22:56:40.000Z","permalink":"/pages/a42c37/","author":{"name":"江"},"category":["项目实战专题"],"description":"分布式唯一ID实战 背景 日常开发中，我们需要对系统中的各种数据使用 ID 唯一表示，比如用户 ID 对应且仅对应一个人，商品 ID 对应且仅对应一件商品，订单 ID 对应且仅对应一个订单。我们现实生活中也有各种 ID，比如身份证 ID 对应且仅对应一个人，简单来说，ID 就是数据的唯一标识。 一般情况下，会使用数据库的自增主键作为数据ID，但是在大数量的情况下，我们往往会引入分布式、分库分表等手段来应对，很明显对数据分库分表后我们依然需要有一个唯一ID来标识一条数据或消息，数据库的自增ID已经无法满足需求。此时一个能够生成全局唯一ID的系统是非常必要的。概括下来，那业务系统对ID号的要求有哪些呢？","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/a42c37/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"分布式ID服务"}],["meta",{"property":"og:description","content":"分布式唯一ID实战 背景 日常开发中，我们需要对系统中的各种数据使用 ID 唯一表示，比如用户 ID 对应且仅对应一个人，商品 ID 对应且仅对应一件商品，订单 ID 对应且仅对应一个订单。我们现实生活中也有各种 ID，比如身份证 ID 对应且仅对应一个人，简单来说，ID 就是数据的唯一标识。 一般情况下，会使用数据库的自增主键作为数据ID，但是在大数量的情况下，我们往往会引入分布式、分库分表等手段来应对，很明显对数据分库分表后我们依然需要有一个唯一ID来标识一条数据或消息，数据库的自增ID已经无法满足需求。此时一个能够生成全局唯一ID的系统是非常必要的。概括下来，那业务系统对ID号的要求有哪些呢？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T21:24:19.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2023-05-02T22:56:40.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T21:24:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式ID服务\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-02T22:56:40.000Z\\",\\"dateModified\\":\\"2023-08-01T21:24:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":2,"title":"分布式唯一ID实战","slug":"分布式唯一id实战","link":"#分布式唯一id实战","children":[]},{"level":2,"title":"常见方法介绍","slug":"常见方法介绍","link":"#常见方法介绍","children":[{"level":3,"title":"UUID","slug":"uuid","link":"#uuid","children":[]},{"level":3,"title":"雪花算法及其衍生","slug":"雪花算法及其衍生","link":"#雪花算法及其衍生","children":[]},{"level":3,"title":"数据库生成","slug":"数据库生成","link":"#数据库生成","children":[]}]},{"level":2,"title":"分布式ID微服务","slug":"分布式id微服务","link":"#分布式id微服务","children":[{"level":3,"title":"美团Leaf方案实现","slug":"美团leaf方案实现","link":"#美团leaf方案实现","children":[]},{"level":3,"title":"美团Leaf现状","slug":"美团leaf现状","link":"#美团leaf现状","children":[]}]}],"git":{"createdTime":1690925059000,"updatedTime":1690925059000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":19.37,"words":5810},"filePathRelative":"微服务电商项目/40.分布式ID服务.md","localizedDate":"2023年5月2日","excerpt":"<h2> 分布式唯一ID实战</h2>\\n<p><strong>背景</strong></p>\\n<p>日常开发中，我们需要对系统中的各种数据使用 ID 唯一表示，比如用户 ID 对应且仅对应一个人，商品 ID 对应且仅对应一件商品，订单 ID 对应且仅对应一个订单。我们现实生活中也有各种 ID，比如身份证 ID 对应且仅对应一个人，简单来说，ID 就是数据的唯一标识。</p>\\n<p>一般情况下，会使用数据库的自增主键作为数据ID，但是在大数量的情况下，我们往往会引入分布式、分库分表等手段来应对，很明显对数据分库分表后我们依然需要有一个唯一ID来标识一条数据或消息，数据库的自增ID已经无法满足需求。此时一个能够生成全局唯一ID的系统是非常必要的。概括下来，那业务系统对ID号的要求有哪些呢？</p>","autoDesc":true}');export{e as data};
