const e=JSON.parse('{"key":"v-6c26fed4","path":"/pages/3ed20e/","title":"AQS之独占锁ReentrantLock源码分析","lang":"zh-CN","frontmatter":{"title":"AQS之独占锁ReentrantLock源码分析","date":"2022-11-25T00:21:05.000Z","permalink":"/pages/3ed20e/","author":{"name":"江"},"category":["并发编程"],"description":"AQS是jdk并发包java.util.concurrent下绝大部分工具类实现的基础，非常重要 AQS原理分析 什么是AQS java.util.concurrent包中的大多数同步器实现都是围绕着共同的基础行为，比如等待队列、条件队列、独占获取、共享获取等，而这些行为的抽象就是基于**AbstractQueuedSynchronizer（简称AQS）**实现的，AQS是一个抽象同步框架，可以用来实现一个依赖状态的同步器。 JDK中提供的大多数的同步器如Lock, Latch, Barrier等，都是基于AQS框架来实现的","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/3ed20e/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"AQS之独占锁ReentrantLock源码分析"}],["meta",{"property":"og:description","content":"AQS是jdk并发包java.util.concurrent下绝大部分工具类实现的基础，非常重要 AQS原理分析 什么是AQS java.util.concurrent包中的大多数同步器实现都是围绕着共同的基础行为，比如等待队列、条件队列、独占获取、共享获取等，而这些行为的抽象就是基于**AbstractQueuedSynchronizer（简称AQS）**实现的，AQS是一个抽象同步框架，可以用来实现一个依赖状态的同步器。 JDK中提供的大多数的同步器如Lock, Latch, Barrier等，都是基于AQS框架来实现的"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T21:24:19.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2022-11-25T00:21:05.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T21:24:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AQS之独占锁ReentrantLock源码分析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-25T00:21:05.000Z\\",\\"dateModified\\":\\"2023-08-01T21:24:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":2,"title":"AQS原理分析","slug":"aqs原理分析","link":"#aqs原理分析","children":[{"level":3,"title":"什么是AQS","slug":"什么是aqs","link":"#什么是aqs","children":[]},{"level":3,"title":"同步等待队列","slug":"同步等待队列","link":"#同步等待队列","children":[]},{"level":3,"title":"条件等待队列","slug":"条件等待队列","link":"#条件等待队列","children":[]},{"level":3,"title":"Condition接口详解","slug":"condition接口详解","link":"#condition接口详解","children":[]}]},{"level":2,"title":"ReentrantLock详解","slug":"reentrantlock详解","link":"#reentrantlock详解","children":[{"level":3,"title":"ReentrantLock的使用","slug":"reentrantlock的使用","link":"#reentrantlock的使用","children":[]},{"level":3,"title":"ReentrantLock源码分析","slug":"reentrantlock源码分析","link":"#reentrantlock源码分析","children":[]}]}],"git":{"createdTime":1690925059000,"updatedTime":1690925059000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":9.34,"words":2802},"filePathRelative":"10.并发编程/60.AQS之独占锁ReentrantLock源码分析.md","localizedDate":"2022年11月25日","excerpt":"<p><strong>AQS是jdk并发包java.util.concurrent下绝大部分工具类实现的基础，非常重要</strong></p>\\n<h2> AQS原理分析</h2>\\n<h3> 什么是AQS</h3>\\n<p>java.util.concurrent包中的大多数同步器实现都是围绕着共同的基础行为，比如等待队列、条件队列、独占获取、共享获取等，而这些行为的抽象就是基于**AbstractQueuedSynchronizer（简称AQS）**实现的，AQS是一个抽象同步框架，可以用来实现一个依赖状态的同步器。</p>\\n<p>JDK中提供的大多数的同步器如Lock, Latch, Barrier等，都是基于AQS框架来实现的</p>","autoDesc":true}');export{e as data};
