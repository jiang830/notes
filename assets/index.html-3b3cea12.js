const t=JSON.parse('{"key":"v-72e705ea","path":"/pages/3ccf9f/","title":"Tomcat线程模型详解&性能调优","lang":"zh-CN","frontmatter":{"title":"Tomcat线程模型详解&性能调优","permalink":"/pages/3ccf9f/","author":{"name":"江"},"category":["Tomcat"],"description":"Tomcat I/O模型详解 I/O模型详解 内核空间和用户空间 思考：物理内存是有限的（比如16G内存），怎么把有限的内存分配给不同的进程？ Linux 给每个进程虚拟出一块很大的地址空间，比如 32 位机器上进程的虚拟内存地址空间是 4GB，从 0x00000000 到 0xFFFFFFFF。但这 4GB 并不是真实的物理内存，而是进程访问到了某个虚拟地址，如果这个地址还没有对应的物理内存页，就会产生缺页中断，分配物理内存，MMU（内存管理单元）会将虚拟地址与物理内存页的映射关系保存在页表中，再次访问这个虚拟地址，就能找到相应的物理内存页。每个进程的这 4GB 虚拟地址空间分布如下图所示：","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/3ccf9f/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"Tomcat线程模型详解&性能调优"}],["meta",{"property":"og:description","content":"Tomcat I/O模型详解 I/O模型详解 内核空间和用户空间 思考：物理内存是有限的（比如16G内存），怎么把有限的内存分配给不同的进程？ Linux 给每个进程虚拟出一块很大的地址空间，比如 32 位机器上进程的虚拟内存地址空间是 4GB，从 0x00000000 到 0xFFFFFFFF。但这 4GB 并不是真实的物理内存，而是进程访问到了某个虚拟地址，如果这个地址还没有对应的物理内存页，就会产生缺页中断，分配物理内存，MMU（内存管理单元）会将虚拟地址与物理内存页的映射关系保存在页表中，再次访问这个虚拟地址，就能找到相应的物理内存页。每个进程的这 4GB 虚拟地址空间分布如下图所示："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T21:24:19.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:modified_time","content":"2023-08-01T21:24:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tomcat线程模型详解&性能调优\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-01T21:24:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":3,"title":"Tomcat I/O模型详解","slug":"tomcat-i-o模型详解","link":"#tomcat-i-o模型详解","children":[]},{"level":3,"title":"Tomcat调优","slug":"tomcat调优","link":"#tomcat调优","children":[]}],"git":{"createdTime":1690925059000,"updatedTime":1690925059000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":15.39,"words":4617},"filePathRelative":"20.性能调优/Tomcat/10.Tomcat线程模型详解&性能调优.md","localizedDate":"2023年8月1日","excerpt":"<h3> Tomcat I/O模型详解</h3>\\n<h4> I/O模型详解</h4>\\n<h5> 内核空间和用户空间</h5>\\n<p>思考：物理内存是有限的（比如16G内存），怎么把有限的内存分配给不同的进程？</p>\\n<p>Linux 给每个进程虚拟出一块很大的地址空间，比如 32 位机器上进程的虚拟内存地址空间是 4GB，从 0x00000000 到 0xFFFFFFFF。但这 4GB 并不是真实的物理内存，而是进程访问到了某个虚拟地址，如果这个地址还没有对应的物理内存页，就会产生缺页中断，分配物理内存，MMU（内存管理单元）会将虚拟地址与物理内存页的映射关系保存在页表中，再次访问这个虚拟地址，就能找到相应的物理内存页。每个进程的这 4GB 虚拟地址空间分布如下图所示：</p>","autoDesc":true}');export{t as data};
