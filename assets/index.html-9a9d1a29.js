const t=JSON.parse('{"key":"v-3080ee46","path":"/pages/5cfa95/","title":"并发List、Set和ConcurrentHashMap底层原理","lang":"zh-CN","frontmatter":{"title":"并发List、Set和ConcurrentHashMap底层原理","date":"2022-11-02T14:16:34.000Z","permalink":"/pages/5cfa95/","author":{"name":"江"},"category":["并发编程"],"description":"​ ArrayList List特点：元素有放入顺序，元素可重复 。 存储结构：底层采用数组来实现的。 源码： public class ArrayList&lt;E&gt; extends AbstractList&lt;E&gt;","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/5cfa95/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"并发List、Set和ConcurrentHashMap底层原理"}],["meta",{"property":"og:description","content":"​ ArrayList List特点：元素有放入顺序，元素可重复 。 存储结构：底层采用数组来实现的。 源码： public class ArrayList&lt;E&gt; extends AbstractList&lt;E&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T21:24:19.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2022-11-02T14:16:34.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T21:24:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"并发List、Set和ConcurrentHashMap底层原理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-02T14:16:34.000Z\\",\\"dateModified\\":\\"2023-08-01T21:24:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":2,"title":"ArrayList","slug":"arraylist","link":"#arraylist","children":[]},{"level":2,"title":"LinkedList","slug":"linkedlist","link":"#linkedlist","children":[]},{"level":2,"title":"HashMap（Map）","slug":"hashmap-map","link":"#hashmap-map","children":[]},{"level":2,"title":"ConcurrentHashMap（并发安全map）","slug":"concurrenthashmap-并发安全map","link":"#concurrenthashmap-并发安全map","children":[]}],"git":{"createdTime":1690925059000,"updatedTime":1690925059000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":9.25,"words":2774},"filePathRelative":"10.并发编程/10.并发List、Set和ConcurrentHashMap底层原理.md","localizedDate":"2022年11月2日","excerpt":"<p>​    <img src=\\"https://img.jssjqd.cn/202211021421285\\" alt=\\"0\\" loading=\\"lazy\\"></p>\\n<h2> ArrayList</h2>\\n<p><strong>List特点</strong>：元素有放入顺序，元素可重复 。</p>\\n<p><strong>存储结构</strong>：底层采用数组来实现的。</p>\\n<p><strong>源码</strong>：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ArrayList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">E</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">AbstractList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">E</span><span class=\\"token punctuation\\">&gt;</span></span>              \\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
