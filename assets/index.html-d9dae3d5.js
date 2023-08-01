const e=JSON.parse('{"key":"v-5a4a373a","path":"/pages/3io5t01/","title":"Future&CompletableFuture&Disruptor实战","lang":"zh-CN","frontmatter":{"title":"Future&CompletableFuture&Disruptor实战","date":"2023-06-14T23:49:36.000Z","permalink":"/pages/3io5t01/","author":{"name":"江"},"category":["并发编程"],"description":"关于Future的使用，务必掌握，掌握了Futuer就掌握了未来 CompletableFuture的API非常丰富，不用全部掌握，大概了解有哪些功能，使用时会查API就行 Callable&amp;Future&amp;FutureTask介绍 直接继承Thread或者实现Runnable接口都可以创建线程，但是这两种方法都有一个问题就是：没有返回值，也就是不能获取执行完的结果。因此java1.5就提供了Callable接口来实现这一场景，而Future和FutureTask就可以和Callable接口配合起来使用。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/3io5t01/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"Future&CompletableFuture&Disruptor实战"}],["meta",{"property":"og:description","content":"关于Future的使用，务必掌握，掌握了Futuer就掌握了未来 CompletableFuture的API非常丰富，不用全部掌握，大概了解有哪些功能，使用时会查API就行 Callable&amp;Future&amp;FutureTask介绍 直接继承Thread或者实现Runnable接口都可以创建线程，但是这两种方法都有一个问题就是：没有返回值，也就是不能获取执行完的结果。因此java1.5就提供了Callable接口来实现这一场景，而Future和FutureTask就可以和Callable接口配合起来使用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T21:24:19.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2023-06-14T23:49:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T21:24:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Future&CompletableFuture&Disruptor实战\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-14T23:49:36.000Z\\",\\"dateModified\\":\\"2023-08-01T21:24:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":2,"title":"Callable&Future&FutureTask介绍","slug":"callable-future-futuretask介绍","link":"#callable-future-futuretask介绍","children":[{"level":3,"title":"Callable和Runnable的区别","slug":"callable和runnable的区别","link":"#callable和runnable的区别","children":[]},{"level":3,"title":"Future 的主要功能","slug":"future-的主要功能","link":"#future-的主要功能","children":[]},{"level":3,"title":"利用 FutureTask 创建 Future","slug":"利用-futuretask-创建-future","link":"#利用-futuretask-创建-future","children":[]},{"level":3,"title":"Future的局限性","slug":"future的局限性","link":"#future的局限性","children":[]}]},{"level":2,"title":"CompletionService","slug":"completionservice","link":"#completionservice","children":[{"level":3,"title":"CompletionService原理","slug":"completionservice原理","link":"#completionservice原理","children":[]},{"level":3,"title":"使用案例","slug":"使用案例","link":"#使用案例","children":[]},{"level":3,"title":"应用场景总结","slug":"应用场景总结","link":"#应用场景总结","children":[]}]},{"level":2,"title":"CompletableFuture使用详解","slug":"completablefuture使用详解","link":"#completablefuture使用详解","children":[{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":3,"title":"创建异步操作","slug":"创建异步操作","link":"#创建异步操作","children":[]},{"level":3,"title":"获取结果","slug":"获取结果","link":"#获取结果","children":[]},{"level":3,"title":"结果处理","slug":"结果处理","link":"#结果处理","children":[]},{"level":3,"title":"结果转换","slug":"结果转换","link":"#结果转换","children":[]},{"level":3,"title":"结果消费","slug":"结果消费","link":"#结果消费","children":[]},{"level":3,"title":"结果组合","slug":"结果组合","link":"#结果组合","children":[]},{"level":3,"title":"任务交互","slug":"任务交互","link":"#任务交互","children":[]},{"level":3,"title":"CompletableFuture常用方法总结","slug":"completablefuture常用方法总结","link":"#completablefuture常用方法总结","children":[]},{"level":3,"title":"使用案例：实现最优的“烧水泡茶”程序","slug":"使用案例-实现最优的-烧水泡茶-程序","link":"#使用案例-实现最优的-烧水泡茶-程序","children":[]}]}],"git":{"createdTime":1690925059000,"updatedTime":1690925059000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":21,"words":6299},"filePathRelative":"10.并发编程/110.Future&CompletableFuture&Disruptor实战.md","localizedDate":"2023年6月14日","excerpt":"<ol>\\n<li>关于Future的使用，务必掌握，掌握了Futuer就掌握了未来</li>\\n<li>CompletableFuture的API非常丰富，不用全部掌握，大概了解有哪些功能，使用时会查API就行</li>\\n</ol>\\n<h2> Callable&amp;Future&amp;FutureTask介绍</h2>\\n<p>直接继承Thread或者实现Runnable接口都可以创建线程，但是这两种方法都有一个问题就是：没有返回值，也就是不能获取执行完的结果。因此java1.5就提供了Callable接口来实现这一场景，而Future和FutureTask就可以和Callable接口配合起来使用。</p>","autoDesc":true}');export{e as data};
