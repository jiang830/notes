const e=JSON.parse('{"key":"v-940f5a46","path":"/pages/9705f1/","title":"AQS之Semaphore&CountDownLatch&CyclicBarrie详解","lang":"zh-CN","frontmatter":{"title":"AQS之Semaphore&CountDownLatch&CyclicBarrie详解","date":"2022-11-25T16:26:58.000Z","permalink":"/pages/9705f1/","author":{"name":"江"},"category":["并发编程"],"description":"Semaphore介绍 Semaphore，俗称信号量，它是操作系统中PV操作的原语在java的实现，它也是基于AbstractQueuedSynchronizer实现的。 Semaphore的功能非常强大，大小为1的信号量就类似于互斥锁，通过同时只能有一个线程获取信号量实现。大小为n（n&gt;0）的信号量可以实现限流的功能，它可以实现只能有n个线程同时获取信号量。 ​","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/9705f1/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"AQS之Semaphore&CountDownLatch&CyclicBarrie详解"}],["meta",{"property":"og:description","content":"Semaphore介绍 Semaphore，俗称信号量，它是操作系统中PV操作的原语在java的实现，它也是基于AbstractQueuedSynchronizer实现的。 Semaphore的功能非常强大，大小为1的信号量就类似于互斥锁，通过同时只能有一个线程获取信号量实现。大小为n（n&gt;0）的信号量可以实现限流的功能，它可以实现只能有n个线程同时获取信号量。 ​"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-02T17:03:17.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2022-11-25T16:26:58.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-02T17:03:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AQS之Semaphore&CountDownLatch&CyclicBarrie详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-25T16:26:58.000Z\\",\\"dateModified\\":\\"2023-08-02T17:03:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":2,"title":"Semaphore介绍","slug":"semaphore介绍","link":"#semaphore介绍","children":[{"level":3,"title":"Semaphore 常用方法","slug":"semaphore-常用方法","link":"#semaphore-常用方法","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":3,"title":"Semaphore源码分析","slug":"semaphore源码分析","link":"#semaphore源码分析","children":[]}]},{"level":2,"title":"CountDownLatch介绍","slug":"countdownlatch介绍","link":"#countdownlatch介绍","children":[{"level":3,"title":"CountDownLatch的使用","slug":"countdownlatch的使用","link":"#countdownlatch的使用","children":[]},{"level":3,"title":"CountDownLatch应用场景","slug":"countdownlatch应用场景","link":"#countdownlatch应用场景","children":[]},{"level":3,"title":"CountDownLatch实现原理","slug":"countdownlatch实现原理","link":"#countdownlatch实现原理","children":[]}]},{"level":2,"title":"CyclicBarrier介绍","slug":"cyclicbarrier介绍","link":"#cyclicbarrier介绍","children":[{"level":3,"title":"CyclicBarrier的使用","slug":"cyclicbarrier的使用","link":"#cyclicbarrier的使用","children":[]},{"level":3,"title":"CyclicBarrier源码分析","slug":"cyclicbarrier源码分析","link":"#cyclicbarrier源码分析","children":[]}]}],"git":{"createdTime":1690995797000,"updatedTime":1690995797000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":10.18,"words":3054},"filePathRelative":"10.并发编程/70.AQS之Semaphore&CountDownLatch&CyclicBarrie详解.md","localizedDate":"2022年11月25日","excerpt":"<h2> Semaphore介绍</h2>\\n<p><strong>Semaphore，俗称信号量，它是操作系统中PV操作的原语在java的实现</strong>，它也是基于AbstractQueuedSynchronizer实现的。</p>\\n<p>Semaphore的功能非常强大，大小为1的信号量就类似于互斥锁，通过同时只能有一个线程获取信号量实现。大小为n（n&gt;0）的信号量可以实现限流的功能，它可以实现只能有n个线程同时获取信号量。</p>\\n<p>​    <img src=\\"https://img.jssjqd.cn/202211251628622.png\\" alt=\\"image-20221125162835649\\" loading=\\"lazy\\"></p>","autoDesc":true}');export{e as data};