const e=JSON.parse('{"key":"v-4f785cfd","path":"/pages/fd3a46/","title":"JVM对象创建与内存分配机制","lang":"zh-CN","frontmatter":{"title":"JVM对象创建与内存分配机制","date":"2022-08-31T01:56:40.000Z","permalink":"/pages/fd3a46/","author":{"name":"江"},"category":["JVM性能调优"],"description":"对象的创建 对象创建的主要流程: ​ 1.类加载检查 虚拟机遇到一条new指令时，首先将去检查这个指令的参数是否能在常量池中定位到一个类的符号引用，并且检查这个符号引用代表的类是否已被加载、解析和初始化过。如果没有，那必须先执行相应的类加载过程。 new指令对应到语言层面上讲是，new关键词、对象克隆、对象序列化等。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/fd3a46/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"JVM对象创建与内存分配机制"}],["meta",{"property":"og:description","content":"对象的创建 对象创建的主要流程: ​ 1.类加载检查 虚拟机遇到一条new指令时，首先将去检查这个指令的参数是否能在常量池中定位到一个类的符号引用，并且检查这个符号引用代表的类是否已被加载、解析和初始化过。如果没有，那必须先执行相应的类加载过程。 new指令对应到语言层面上讲是，new关键词、对象克隆、对象序列化等。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T21:24:19.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2022-08-31T01:56:40.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T21:24:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM对象创建与内存分配机制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-31T01:56:40.000Z\\",\\"dateModified\\":\\"2023-08-01T21:24:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":3,"title":"对象的创建","slug":"对象的创建","link":"#对象的创建","children":[]},{"level":3,"title":"对象大小与指针压缩","slug":"对象大小与指针压缩","link":"#对象大小与指针压缩","children":[]},{"level":3,"title":"对象栈上分配","slug":"对象栈上分配","link":"#对象栈上分配","children":[]},{"level":3,"title":"对象在Eden区分配","slug":"对象在eden区分配","link":"#对象在eden区分配","children":[]},{"level":3,"title":"对象内存回收","slug":"对象内存回收","link":"#对象内存回收","children":[]}],"git":{"createdTime":1690925059000,"updatedTime":1690925059000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":21.27,"words":6380},"filePathRelative":"20.性能调优/JVM/03.JVM对象创建与内存分配机制.md","localizedDate":"2022年8月31日","excerpt":"<h3> 对象的创建</h3>\\n<p>对象创建的主要流程:</p>\\n<p>​    <img src=\\"https://img.jssjqd.cn/20221002232842.png\\" alt=\\"\\" loading=\\"lazy\\"></p>\\n<p><strong>1.类加载检查</strong></p>\\n<p>虚拟机遇到一条new指令时，首先将去检查这个指令的参数是否能在常量池中定位到一个类的符号引用，并且检查这个符号引用代表的类是否已被加载、解析和初始化过。如果没有，那必须先执行相应的类加载过程。</p>\\n<p>new指令对应到语言层面上讲是，new关键词、对象克隆、对象序列化等。</p>\\n","autoDesc":true}');export{e as data};
