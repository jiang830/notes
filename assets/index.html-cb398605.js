const e=JSON.parse('{"key":"v-5b9c9a5f","path":"/pages/1d1280/","title":"垃圾收集器ParNew&CMS与底层三色标记算法详解","lang":"zh-CN","frontmatter":{"title":"垃圾收集器ParNew&CMS与底层三色标记算法详解","date":"2022-08-31T01:56:40.000Z","permalink":"/pages/1d1280/","author":{"name":"江"},"category":["JVM性能调优"],"description":"垃圾收集算法 ​ 分代收集理论 当前虚拟机的垃圾收集都采用分代收集算法，这种算法没有什么新的思想，只是根据对象存活周期的不同将内存分为几块。一般将java堆分为新生代和老年代，这样我们就可以根据各个年代的特点选择合适的垃圾收集算法。 比如在新生代中，每次收集都会有大量对象(近99%)死去，所以可以选择复制算法，只需要付出少量对象的复制成本就可以完成每次垃圾收集。而老年代的对象存活几率是比较高的，而且没有额外的空间对它进行分配担保，所以我们必须选择“标记-清除”或“标记-整理”算法进行垃圾收集。注意，“标记-清除”或“标记-整理”算法会比复制算法慢10倍以上。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/1d1280/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"垃圾收集器ParNew&CMS与底层三色标记算法详解"}],["meta",{"property":"og:description","content":"垃圾收集算法 ​ 分代收集理论 当前虚拟机的垃圾收集都采用分代收集算法，这种算法没有什么新的思想，只是根据对象存活周期的不同将内存分为几块。一般将java堆分为新生代和老年代，这样我们就可以根据各个年代的特点选择合适的垃圾收集算法。 比如在新生代中，每次收集都会有大量对象(近99%)死去，所以可以选择复制算法，只需要付出少量对象的复制成本就可以完成每次垃圾收集。而老年代的对象存活几率是比较高的，而且没有额外的空间对它进行分配担保，所以我们必须选择“标记-清除”或“标记-整理”算法进行垃圾收集。注意，“标记-清除”或“标记-整理”算法会比复制算法慢10倍以上。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-02T17:03:17.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2022-08-31T01:56:40.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-02T17:03:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"垃圾收集器ParNew&CMS与底层三色标记算法详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-31T01:56:40.000Z\\",\\"dateModified\\":\\"2023-08-02T17:03:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":3,"title":"垃圾收集算法","slug":"垃圾收集算法","link":"#垃圾收集算法","children":[]},{"level":3,"title":"垃圾收集器","slug":"垃圾收集器","link":"#垃圾收集器","children":[]},{"level":3,"title":"亿级流量电商系统如何优化JVM参数设置(ParNew+CMS)","slug":"亿级流量电商系统如何优化jvm参数设置-parnew-cms","link":"#亿级流量电商系统如何优化jvm参数设置-parnew-cms","children":[]},{"level":3,"title":"垃圾收集底层算法实现","slug":"垃圾收集底层算法实现","link":"#垃圾收集底层算法实现","children":[]},{"level":3,"title":"记忆集与卡表","slug":"记忆集与卡表","link":"#记忆集与卡表","children":[]}],"git":{"createdTime":1690995797000,"updatedTime":1690995797000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":20.24,"words":6072},"filePathRelative":"20.性能调优/JVM/05.垃圾收集器ParNew&CMS与底层三色标记算法详解.md","localizedDate":"2022年8月31日","excerpt":"<h3> 垃圾收集算法</h3>\\n<p>​    <img src=\\"https://img.jssjqd.cn/20221006185411.png\\" alt=\\"\\" loading=\\"lazy\\"></p>\\n<h4> <strong>分代收集理论</strong></h4>\\n<p>当前虚拟机的垃圾收集都采用分代收集算法，这种算法没有什么新的思想，只是根据对象存活周期的不同将内存分为几块。一般将java堆分为新生代和老年代，这样我们就可以根据各个年代的特点选择合适的垃圾收集算法。</p>\\n<p>比如在新生代中，每次收集都会有大量对象(近99%)死去，所以可以选择复制算法，只需要付出少量对象的复制成本就可以完成每次垃圾收集。而老年代的对象存活几率是比较高的，而且没有额外的空间对它进行分配担保，所以我们必须选择“标记-清除”或“标记-整理”算法进行垃圾收集。注意，“标记-清除”或“标记-整理”算法会比复制算法慢10倍以上。</p>","autoDesc":true}');export{e as data};