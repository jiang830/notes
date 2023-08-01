const e=JSON.parse('{"key":"v-5a469442","path":"/pages/3io5l01/","title":"并发编程常用设计模式","lang":"zh-CN","frontmatter":{"title":"并发编程常用设计模式","date":"2023-06-14T23:49:36.000Z","permalink":"/pages/3io5l01/","author":{"name":"江"},"category":["并发编程"],"description":"并发（多线程）设计模式不同于传统设计模式，更关注的是并发编程中特定场景的解决方案。 并发知识体系： https://www.processon.com/view/link/615d4a610e3e74663e97fa0e image-20230614203013455","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/3io5l01/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"并发编程常用设计模式"}],["meta",{"property":"og:description","content":"并发（多线程）设计模式不同于传统设计模式，更关注的是并发编程中特定场景的解决方案。 并发知识体系： https://www.processon.com/view/link/615d4a610e3e74663e97fa0e image-20230614203013455"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T21:24:19.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2023-06-14T23:49:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T21:24:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"并发编程常用设计模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-14T23:49:36.000Z\\",\\"dateModified\\":\\"2023-08-01T21:24:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":2,"title":"终止线程的设计模式","slug":"终止线程的设计模式","link":"#终止线程的设计模式","children":[{"level":3,"title":"Two-phase Termination（两阶段终止）模式——优雅的终止线程","slug":"two-phase-termination-两阶段终止-模式——优雅的终止线程","link":"#two-phase-termination-两阶段终止-模式——优雅的终止线程","children":[]}]},{"level":2,"title":"避免共享的设计模式","slug":"避免共享的设计模式","link":"#避免共享的设计模式","children":[{"level":3,"title":"Immutability模式——想破坏也破坏不了","slug":"immutability模式——想破坏也破坏不了","link":"#immutability模式——想破坏也破坏不了","children":[]},{"level":3,"title":"Copy-on-Write模式","slug":"copy-on-write模式","link":"#copy-on-write模式","children":[]},{"level":3,"title":"Thread-Specific Storage 模式——没有共享就没有伤害","slug":"thread-specific-storage-模式——没有共享就没有伤害","link":"#thread-specific-storage-模式——没有共享就没有伤害","children":[]}]},{"level":2,"title":"多线程版本的if模式","slug":"多线程版本的if模式","link":"#多线程版本的if模式","children":[{"level":3,"title":"Guarded Suspension模式——等我准备好哦","slug":"guarded-suspension模式——等我准备好哦","link":"#guarded-suspension模式——等我准备好哦","children":[]},{"level":3,"title":"Balking模式——不需要就算了","slug":"balking模式——不需要就算了","link":"#balking模式——不需要就算了","children":[]}]},{"level":2,"title":"多线程分工模式","slug":"多线程分工模式","link":"#多线程分工模式","children":[{"level":3,"title":"Thread-Per-Message 模式——最简单实用的分工方法","slug":"thread-per-message-模式——最简单实用的分工方法","link":"#thread-per-message-模式——最简单实用的分工方法","children":[]},{"level":3,"title":"Worker Thread模式——如何避免重复创建线程","slug":"worker-thread模式——如何避免重复创建线程","link":"#worker-thread模式——如何避免重复创建线程","children":[]},{"level":3,"title":"生产者 - 消费者模式——用流水线的思想提高效率","slug":"生产者-消费者模式——用流水线的思想提高效率","link":"#生产者-消费者模式——用流水线的思想提高效率","children":[]}]}],"git":{"createdTime":1690925059000,"updatedTime":1690925059000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":18.86,"words":5657},"filePathRelative":"10.并发编程/120.并发编程常用设计模式.md","localizedDate":"2023年6月14日","excerpt":"<p>并发（多线程）设计模式不同于传统设计模式，更关注的是并发编程中特定场景的解决方案。</p>\\n<p>并发知识体系： <a href=\\"https://www.processon.com/view/link/615d4a610e3e74663e97fa0e\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.processon.com/view/link/615d4a610e3e74663e97fa0e</a></p>\\n<figure><img src=\\"https://img.jssjqd.cn/202306142030025.png\\" alt=\\"image-20230614203013455\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20230614203013455</figcaption></figure>","autoDesc":true}');export{e as data};
