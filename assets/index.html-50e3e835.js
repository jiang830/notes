const e=JSON.parse('{"key":"v-79d56afd","path":"/pages/81ef2f/","title":"集合框架","lang":"zh-CN","frontmatter":{"title":"集合框架","date":"2021-12-27T04:48:27.000Z","permalink":"/pages/81ef2f/","author":{"name":"江"},"category":["面试"],"description":"2.2 Java集合 作者：Guide哥。 介绍: Github 70k Star 项目 JavaGuide（公众号同名） 作者。每周都会在公众号更新一些自己原创干货。公众号后台回复“1”领取Java工程师必备学习资料+面试突击pdf。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/81ef2f/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"集合框架"}],["meta",{"property":"og:description","content":"2.2 Java集合 作者：Guide哥。 介绍: Github 70k Star 项目 JavaGuide（公众号同名） 作者。每周都会在公众号更新一些自己原创干货。公众号后台回复“1”领取Java工程师必备学习资料+面试突击pdf。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T21:24:19.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2021-12-27T04:48:27.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T21:24:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集合框架\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-27T04:48:27.000Z\\",\\"dateModified\\":\\"2023-08-01T21:24:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":2,"title":"2.2 Java集合","slug":"_2-2-java集合","link":"#_2-2-java集合","children":[{"level":3,"title":"2.2.1 说说List,Set,Map三者的区别？","slug":"_2-2-1-说说list-set-map三者的区别","link":"#_2-2-1-说说list-set-map三者的区别","children":[]},{"level":3,"title":"2.2.2 Arraylist 与 LinkedList 区别?","slug":"_2-2-2-arraylist-与-linkedlist-区别","link":"#_2-2-2-arraylist-与-linkedlist-区别","children":[]},{"level":3,"title":"2.2.3 ArrayList 与 Vector 区别呢?为什么要用Arraylist取代Vector呢？","slug":"_2-2-3-arraylist-与-vector-区别呢-为什么要用arraylist取代vector呢","link":"#_2-2-3-arraylist-与-vector-区别呢-为什么要用arraylist取代vector呢","children":[]},{"level":3,"title":"2.2.4 说一说 ArrayList 的扩容机制吧","slug":"_2-2-4-说一说-arraylist-的扩容机制吧","link":"#_2-2-4-说一说-arraylist-的扩容机制吧","children":[]},{"level":3,"title":"2.2.5 HashMap 和 Hashtable 的区别","slug":"_2-2-5-hashmap-和-hashtable-的区别","link":"#_2-2-5-hashmap-和-hashtable-的区别","children":[]},{"level":3,"title":"2.2.6 HashMap 和 HashSet区别","slug":"_2-2-6-hashmap-和-hashset区别","link":"#_2-2-6-hashmap-和-hashset区别","children":[]},{"level":3,"title":"2.2.7 HashSet如何检查重复","slug":"_2-2-7-hashset如何检查重复","link":"#_2-2-7-hashset如何检查重复","children":[]},{"level":3,"title":"2.2.8 HashMap的底层实现","slug":"_2-2-8-hashmap的底层实现","link":"#_2-2-8-hashmap的底层实现","children":[]},{"level":3,"title":"2.2.9 HashMap 的长度为什么是2的幂次方","slug":"_2-2-9-hashmap-的长度为什么是2的幂次方","link":"#_2-2-9-hashmap-的长度为什么是2的幂次方","children":[]},{"level":3,"title":"2.2.10 HashMap 多线程操作导致死循环问题","slug":"_2-2-10-hashmap-多线程操作导致死循环问题","link":"#_2-2-10-hashmap-多线程操作导致死循环问题","children":[]},{"level":3,"title":"2.2.11 ConcurrentHashMap 和 Hashtable 的区别","slug":"_2-2-11-concurrenthashmap-和-hashtable-的区别","link":"#_2-2-11-concurrenthashmap-和-hashtable-的区别","children":[]},{"level":3,"title":"2.2.12 ConcurrentHashMap线程安全的具体实现方式/底层具体实现","slug":"_2-2-12-concurrenthashmap线程安全的具体实现方式-底层具体实现","link":"#_2-2-12-concurrenthashmap线程安全的具体实现方式-底层具体实现","children":[]},{"level":3,"title":"2.2.13 comparable 和 Comparator的区别","slug":"_2-2-13-comparable-和-comparator的区别","link":"#_2-2-13-comparable-和-comparator的区别","children":[]},{"level":3,"title":"2.2.14 集合框架底层数据结构总结","slug":"_2-2-14-集合框架底层数据结构总结","link":"#_2-2-14-集合框架底层数据结构总结","children":[]},{"level":3,"title":"2.2.15 如何选用集合?","slug":"_2-2-15-如何选用集合","link":"#_2-2-15-如何选用集合","children":[]}]}],"git":{"createdTime":1690925059000,"updatedTime":1690925059000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":19.33,"words":5798},"filePathRelative":"面试/集合框架.md","localizedDate":"2021年12月27日","excerpt":"<h2> 2.2 Java集合</h2>\\n<blockquote>\\n<p>作者：Guide哥。</p>\\n<p><strong>介绍:</strong> Github 70k Star 项目  <strong><a href=\\"https://github.com/Snailclimb/JavaGuide\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JavaGuide</a></strong>（公众号同名） 作者。每周都会在公众号更新一些自己原创干货。公众号后台回复“1”领取Java工程师必备学习资料+面试突击pdf。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
