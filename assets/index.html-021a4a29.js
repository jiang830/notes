const e=JSON.parse('{"key":"v-67966c00","path":"/pages/6f27a7/","title":"AQS之ReentrantReadWriteLock详解","lang":"zh-CN","frontmatter":{"title":"AQS之ReentrantReadWriteLock详解","date":"2022-11-29T01:18:44.000Z","permalink":"/pages/6f27a7/","author":{"name":"江"},"category":["并发编程"],"description":"读写锁介绍 现实中有这样一种场景：对共享资源有读和写的操作，且写操作没有读操作那么频繁（读多写少）。在没有写操作的时候，多个线程同时读一个资源没有任何问题，所以应该允许多个线程同时读取共享资源（读读可以并发）；但是如果一个线程想去写这些共享资源，就不应该允许其他线程对该资源进行读和写操作了（读写，写读，写写互斥）。在读多于写的情况下，读写锁能够提供比排它锁更好的并发性和吞吐量。 针对这种场景，JAVA的并发包提供了读写锁ReentrantReadWriteLock，它内部，维护了一对相关的锁，一个用于只读操作，称为读锁；一个用于写入操作，称为写锁，描述如下：","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/6f27a7/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"AQS之ReentrantReadWriteLock详解"}],["meta",{"property":"og:description","content":"读写锁介绍 现实中有这样一种场景：对共享资源有读和写的操作，且写操作没有读操作那么频繁（读多写少）。在没有写操作的时候，多个线程同时读一个资源没有任何问题，所以应该允许多个线程同时读取共享资源（读读可以并发）；但是如果一个线程想去写这些共享资源，就不应该允许其他线程对该资源进行读和写操作了（读写，写读，写写互斥）。在读多于写的情况下，读写锁能够提供比排它锁更好的并发性和吞吐量。 针对这种场景，JAVA的并发包提供了读写锁ReentrantReadWriteLock，它内部，维护了一对相关的锁，一个用于只读操作，称为读锁；一个用于写入操作，称为写锁，描述如下："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-02T17:03:17.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2022-11-29T01:18:44.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-02T17:03:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AQS之ReentrantReadWriteLock详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-29T01:18:44.000Z\\",\\"dateModified\\":\\"2023-08-02T17:03:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":2,"title":"读写锁介绍","slug":"读写锁介绍","link":"#读写锁介绍","children":[]},{"level":2,"title":"ReentrantReadWriteLock的使用","slug":"reentrantreadwritelock的使用","link":"#reentrantreadwritelock的使用","children":[{"level":3,"title":"读写锁接口ReadWriteLock","slug":"读写锁接口readwritelock","link":"#读写锁接口readwritelock","children":[]},{"level":3,"title":"ReentrantReadWriteLock类结构","slug":"reentrantreadwritelock类结构","link":"#reentrantreadwritelock类结构","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":3,"title":"锁降级","slug":"锁降级","link":"#锁降级","children":[]}]},{"level":2,"title":"ReentrantReadWriteLock源码分析","slug":"reentrantreadwritelock源码分析","link":"#reentrantreadwritelock源码分析","children":[{"level":3,"title":"ReentrantReadWriteLock结构","slug":"reentrantreadwritelock结构","link":"#reentrantreadwritelock结构","children":[]},{"level":3,"title":"读写状态的设计","slug":"读写状态的设计","link":"#读写状态的设计","children":[]},{"level":3,"title":"HoldCounter 计数器","slug":"holdcounter-计数器","link":"#holdcounter-计数器","children":[]},{"level":3,"title":"写锁的获取","slug":"写锁的获取","link":"#写锁的获取","children":[]},{"level":3,"title":"写锁的释放","slug":"写锁的释放","link":"#写锁的释放","children":[]},{"level":3,"title":"读锁的获取","slug":"读锁的获取","link":"#读锁的获取","children":[]},{"level":3,"title":"读锁的释放","slug":"读锁的释放","link":"#读锁的释放","children":[]}]}],"git":{"createdTime":1690995797000,"updatedTime":1690995797000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":12.02,"words":3606},"filePathRelative":"10.并发编程/80.AQS之ReentrantReadWriteLock详解.md","localizedDate":"2022年11月29日","excerpt":"<h2> 读写锁介绍</h2>\\n<p>现实中有这样一种场景：对共享资源有读和写的操作，且写操作没有读操作那么频繁（读多写少）。在没有写操作的时候，多个线程同时读一个资源没有任何问题，所以应该允许多个线程同时读取共享资源（读读可以并发）；但是如果一个线程想去写这些共享资源，就不应该允许其他线程对该资源进行读和写操作了（读写，写读，写写互斥）。在读多于写的情况下，读写锁能够提供比排它锁更好的并发性和吞吐量。</p>\\n<p>针对这种场景，JAVA的并发包提供了读写锁ReentrantReadWriteLock，它内部，维护了一对相关的锁，一个用于只读操作，称为读锁；一个用于写入操作，称为写锁，描述如下：</p>","autoDesc":true}');export{e as data};