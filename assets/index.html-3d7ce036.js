import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as d,c as h,a,b as e,e as s,f as r}from"./app-1fe98df7.js";const c={},o={href:"https://juejin.im/post/5ec0ff4a6fb9a043271c76e9?utm_source=gold_browser_extension",target:"_blank",rel:"noopener noreferrer"},l=a("h2",{id:"java基础",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#java基础","aria-hidden":"true"},"#"),e(" Java基础")],-1),p=a("h3",{id:"_1-string和stringbuffer和stringbuilder区别",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-string和stringbuffer和stringbuilder区别","aria-hidden":"true"},"#"),e(" 1. String和StringBuffer和StringBuilder区别")],-1),u=a("p",null,[a("strong",null,"可变性"),e(" 简单的来说：String 类中使用 final 关键字修饰字符数组来保存字符串，"),a("code",null,"private final char value[]"),e("，所以 String 对象是不可变的。")],-1),b={href:"https://github.com/Snailclimb/JavaGuide/issues/675",target:"_blank",rel:"noopener noreferrer"},_=a("code",null,"private final byte[] value",-1),k=r(`<p>而 StringBuilder 与 StringBuffer 都继承自 AbstractStringBuilder 类，在 AbstractStringBuilder 中也是使用字符数组保存字符串<code>char[]value</code> 但是没有用 final 关键字修饰，所以这两种对象都是可变的。</p><p>StringBuilder 与 StringBuffer 的构造方法都是调用父类构造方法也就是 AbstractStringBuilder 实现的，大家可以自行查阅源码。</p><p><code>AbstractStringBuilder.java</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractStringBuilder</span> <span class="token keyword">implements</span> <span class="token class-name">Appendable</span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * The value is used for character storage.
     */</span>
    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * The count is the number of characters used.
     */</span>
    <span class="token keyword">int</span> count<span class="token punctuation">;</span>

    <span class="token class-name">AbstractStringBuilder</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>线程安全性</strong></p><p>String 中的对象是不可变的，也就可以理解为常量，线程安全。AbstractStringBuilder 是 StringBuilder 与 StringBuffer 的公共父类，定义了一些字符串的基本操作，如 expandCapacity、append、insert、indexOf 等公共方法。StringBuffer 对方法加了同步锁或者对调用的方法加了同步锁，所以是线程安全的。StringBuilder 并没有对方法进行加同步锁，所以是非线程安全的。</p><p><strong>性能</strong></p><p>每次对 String 类型进行改变的时候，都会生成一个新的 String 对象，然后将指针指向新的 String 对象。StringBuffer 每次都会对 StringBuffer 对象本身进行操作，而不是生成新的对象并改变对象引用。相同情况下使用 StringBuilder 相比使用 StringBuffer 仅能获得 10%~15% 左右的性能提升，但却要冒多线程不安全的风险。</p><p><strong>对于三者使用的总结：</strong></p><ol><li>操作少量的数据: 适用 String</li><li>单线程操作字符串缓冲区下操作大量数据: 适用 StringBuilder</li><li>多线程操作字符串缓冲区下操作大量数据: 适用 StringBuffer</li></ol><h3 id="_2-string为啥默认用final" tabindex="-1"><a class="header-anchor" href="#_2-string为啥默认用final" aria-hidden="true">#</a> 2. String为啥默认用final</h3><h3 id="_3-和equals区别-详细比如相同对象比较、以及相同integer" tabindex="-1"><a class="header-anchor" href="#_3-和equals区别-详细比如相同对象比较、以及相同integer" aria-hidden="true">#</a> 3. ==和equals区别（详细比如相同对象比较、以及相同integer）</h3><p><strong>==</strong> : 它的作用是判断两个对象的地址是不是相等。即，判断两个对象是不是同一个对象(基本数据类型<mark>比较的是值，引用数据类型</mark>比较的是内存地址)。</p><p><strong>equals()</strong> : 它的作用也是判断两个对象是否相等。但它一般有两种使用情况：</p><ul><li>情况 1：类没有覆盖 equals() 方法。则通过 equals() 比较该类的两个对象时，等价于通过“==”比较这两个对象。</li><li>情况 2：类覆盖了 equals() 方法。一般，我们都覆盖 equals() 方法来比较两个对象的内容是否相等；若它们的内容相等，则返回 true (即，认为这两个对象相等)。</li></ul><p><strong>举个例子：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> test1 <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;ab&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a 为一个引用</span>
        <span class="token class-name">String</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;ab&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// b为另一个引用,对象的内容一样</span>
        <span class="token class-name">String</span> aa <span class="token operator">=</span> <span class="token string">&quot;ab&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 放在常量池中</span>
        <span class="token class-name">String</span> bb <span class="token operator">=</span> <span class="token string">&quot;ab&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 从常量池中查找</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>aa <span class="token operator">==</span> bb<span class="token punctuation">)</span> <span class="token comment">// true</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;aa==bb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span> <span class="token comment">// false，非同一对象</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a==b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;aEQb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">42</span> <span class="token operator">==</span> <span class="token number">42.0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// true</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明：</strong></p><ul><li>String 中的 equals 方法是被重写过的，因为 object 的 equals 方法是比较的对象的内存地址，而 String 的 equals 方法比较的是对象的值。</li><li>当创建 String 类型的对象时，虚拟机会在常量池中查找有没有已经存在的值和要创建的值相同的对象，如果有就把它赋给当前引用。如果没有就在常量池中重新创建一个 String 对象。</li></ul><h3 id="_4-hashmap和hashset" tabindex="-1"><a class="header-anchor" href="#_4-hashmap和hashset" aria-hidden="true">#</a> 4. hashMap和hashSet</h3><h3 id="_5-集合类-比如arraylist底层有什么的" tabindex="-1"><a class="header-anchor" href="#_5-集合类-比如arraylist底层有什么的" aria-hidden="true">#</a> 5. 集合类（比如ArrayList底层有什么的）</h3><p>底层为数组</p><h3 id="_6-多线程sleep和wait-以及-notify和notifyall" tabindex="-1"><a class="header-anchor" href="#_6-多线程sleep和wait-以及-notify和notifyall" aria-hidden="true">#</a> 6. 多线程sleep和wait 以及 notify和notifyAll</h3><h3 id="_7-如何创建线程-几种方式-再往深处扩展" tabindex="-1"><a class="header-anchor" href="#_7-如何创建线程-几种方式-再往深处扩展" aria-hidden="true">#</a> 7. 如何创建线程，几种方式，再往深处扩展</h3><h3 id="_8-还有就是抽象类和接口的区别" tabindex="-1"><a class="header-anchor" href="#_8-还有就是抽象类和接口的区别" aria-hidden="true">#</a> 8. 还有就是抽象类和接口的区别</h3><h3 id="_9-动态代理有哪些-有什么场景-区别" tabindex="-1"><a class="header-anchor" href="#_9-动态代理有哪些-有什么场景-区别" aria-hidden="true">#</a> 9. 动态代理有哪些，有什么场景，区别</h3><h3 id="_10-int-和integer的区别" tabindex="-1"><a class="header-anchor" href="#_10-int-和integer的区别" aria-hidden="true">#</a> 10. int 和Integer的区别</h3><h3 id="_11-jdbc和mybatis的区别" tabindex="-1"><a class="header-anchor" href="#_11-jdbc和mybatis的区别" aria-hidden="true">#</a> 11. jdbc和mybatis的区别</h3><h3 id="_12-和-区别" tabindex="-1"><a class="header-anchor" href="#_12-和-区别" aria-hidden="true">#</a> 12. #{} 和 \${}区别</h3><h3 id="_13-分页查询除了使用limit-还能有哪种方式实现-pagehelper插件" tabindex="-1"><a class="header-anchor" href="#_13-分页查询除了使用limit-还能有哪种方式实现-pagehelper插件" aria-hidden="true">#</a> 13. 分页查询除了使用limit，还能有哪种方式实现 pagehelper插件</h3><h3 id="_14-jvm的模型有什么" tabindex="-1"><a class="header-anchor" href="#_14-jvm的模型有什么" aria-hidden="true">#</a> 14. jvm的模型有什么</h3><h3 id="_15-jvm了解吗" tabindex="-1"><a class="header-anchor" href="#_15-jvm了解吗" aria-hidden="true">#</a> 15. jvm了解吗</h3><h3 id="_16-包括gc什么的-以及内部的一些东西" tabindex="-1"><a class="header-anchor" href="#_16-包括gc什么的-以及内部的一些东西" aria-hidden="true">#</a> 16. 包括gc什么的，以及内部的一些东西</h3><h3 id="_17-http和https以及tcp-ip-以及socket" tabindex="-1"><a class="header-anchor" href="#_17-http和https以及tcp-ip-以及socket" aria-hidden="true">#</a> 17. http和https以及tcp/ip 以及socket</h3><h3 id="_18-runable和callable" tabindex="-1"><a class="header-anchor" href="#_18-runable和callable" aria-hidden="true">#</a> 18. runable和callable</h3><h3 id="_19-sychornized-和lock的区别-lock底层用的reentrantlock、readwritelock" tabindex="-1"><a class="header-anchor" href="#_19-sychornized-和lock的区别-lock底层用的reentrantlock、readwritelock" aria-hidden="true">#</a> 19. Sychornized 和lock的区别，lock底层用的ReentrantLock、ReadWriteLock</h3><h3 id="_20-threadlocal-以及-volatile" tabindex="-1"><a class="header-anchor" href="#_20-threadlocal-以及-volatile" aria-hidden="true">#</a> 20. Threadlocal 以及 volatile</h3><h3 id="_21-aqs-是原理" tabindex="-1"><a class="header-anchor" href="#_21-aqs-是原理" aria-hidden="true">#</a> 21. AQS 是原理</h3><h3 id="_22-线程池了解吗-有哪几种线程池-使用场景有哪些" tabindex="-1"><a class="header-anchor" href="#_22-线程池了解吗-有哪几种线程池-使用场景有哪些" aria-hidden="true">#</a> 22. 线程池了解吗 ，有哪几种线程池，使用场景有哪些，</h3><h3 id="_23-比如有4个线程执行-合并结果集" tabindex="-1"><a class="header-anchor" href="#_23-比如有4个线程执行-合并结果集" aria-hidden="true">#</a> 23. 比如有4个线程执行，合并结果集</h3><h3 id="_24-锁细分-读写锁-偏向锁-自旋锁-轻量级锁-重量级锁" tabindex="-1"><a class="header-anchor" href="#_24-锁细分-读写锁-偏向锁-自旋锁-轻量级锁-重量级锁" aria-hidden="true">#</a> 24. 锁细分，读写锁，偏向锁，自旋锁，轻量级锁，重量级锁</h3><h3 id="_25-阻塞队列和非阻塞队列-包括一些常用的队列的说明" tabindex="-1"><a class="header-anchor" href="#_25-阻塞队列和非阻塞队列-包括一些常用的队列的说明" aria-hidden="true">#</a> 25. 阻塞队列和非阻塞队列（包括一些常用的队列的说明，）</h3><h3 id="_26-有界队列和无界队列-区别-为啥分有界和无界" tabindex="-1"><a class="header-anchor" href="#_26-有界队列和无界队列-区别-为啥分有界和无界" aria-hidden="true">#</a> 26. 有界队列和无界队列（区别，为啥分有界和无界）</h3><h3 id="_27-反射和jvm的执行引擎有什么区别" tabindex="-1"><a class="header-anchor" href="#_27-反射和jvm的执行引擎有什么区别" aria-hidden="true">#</a> 27. 反射和jvm的执行引擎有什么区别</h3><h3 id="_28-tcp和udp的区别" tabindex="-1"><a class="header-anchor" href="#_28-tcp和udp的区别" aria-hidden="true">#</a> 28. tcp和udp的区别</h3><h3 id="_29-什么是面向连接-什么是面向无连接" tabindex="-1"><a class="header-anchor" href="#_29-什么是面向连接-什么是面向无连接" aria-hidden="true">#</a> 29. 什么是面向连接，什么是面向无连接</h3><h3 id="_30-tcp的为什么是可靠连接" tabindex="-1"><a class="header-anchor" href="#_30-tcp的为什么是可靠连接" aria-hidden="true">#</a> 30. tcp的为什么是可靠连接</h3><h3 id="_31-拆包和装包是什么-连接这方面的" tabindex="-1"><a class="header-anchor" href="#_31-拆包和装包是什么-连接这方面的" aria-hidden="true">#</a> 31. 拆包和装包是什么，连接这方面的</h3><h3 id="_32-spring和springmvc的常用注解" tabindex="-1"><a class="header-anchor" href="#_32-spring和springmvc的常用注解" aria-hidden="true">#</a> 32. spring和springmvc的常用注解</h3><h3 id="_33-spring的ioc和aop" tabindex="-1"><a class="header-anchor" href="#_33-spring的ioc和aop" aria-hidden="true">#</a> 33. spring的ioc和aop</h3><h3 id="_34-spring的bean是怎么管理-beanfactory以及applicationcontext" tabindex="-1"><a class="header-anchor" href="#_34-spring的bean是怎么管理-beanfactory以及applicationcontext" aria-hidden="true">#</a> 34. spring的bean是怎么管理，beanfactory以及applicationcontext</h3><h3 id="_35-springboot的注解-三大注解有什么作用" tabindex="-1"><a class="header-anchor" href="#_35-springboot的注解-三大注解有什么作用" aria-hidden="true">#</a> 35. springboot的注解，三大注解有什么作用，</h3><h3 id="_36-springboot的compantscan扫描范围是所有的包还是到哪一层" tabindex="-1"><a class="header-anchor" href="#_36-springboot的compantscan扫描范围是所有的包还是到哪一层" aria-hidden="true">#</a> 36. springboot的compantScan扫描范围是所有的包还是到哪一层；</h3><h3 id="_37-springcloud用过什么-削峰-限流-其他一些实战-看你用没用过" tabindex="-1"><a class="header-anchor" href="#_37-springcloud用过什么-削峰-限流-其他一些实战-看你用没用过" aria-hidden="true">#</a> 37. Springcloud用过什么，削峰，限流，其他一些实战（看你用没用过）</h3><h3 id="_38-future相关的" tabindex="-1"><a class="header-anchor" href="#_38-future相关的" aria-hidden="true">#</a> 38. future相关的</h3><h3 id="_39-servlet-的生命周期是" tabindex="-1"><a class="header-anchor" href="#_39-servlet-的生命周期是" aria-hidden="true">#</a> 39. servlet 的生命周期是</h3><h3 id="_40-session-和-application-的区别-已经cookie" tabindex="-1"><a class="header-anchor" href="#_40-session-和-application-的区别-已经cookie" aria-hidden="true">#</a> 40. session 和 application 的区别 已经cookie</h3><h3 id="_41-动态代理-jdk代理和cglib代理区别啥的" tabindex="-1"><a class="header-anchor" href="#_41-动态代理-jdk代理和cglib代理区别啥的" aria-hidden="true">#</a> 41. 动态代理 jdk代理和cglib代理区别啥的</h3><h3 id="_42-run和start区别-整个过程还有什么" tabindex="-1"><a class="header-anchor" href="#_42-run和start区别-整个过程还有什么" aria-hidden="true">#</a> 42. run和start区别 ，整个过程还有什么</h3><h3 id="_43-spring执行机制" tabindex="-1"><a class="header-anchor" href="#_43-spring执行机制" aria-hidden="true">#</a> 43. spring执行机制</h3><h3 id="_44-spring事务-以及事务会问你事务除了acid外-还有脏读-不可重复读-幻读可详细说-事务的传播机制7种-事务的隔离级别-可能会出题-比如a方法使用事务-b方法没有使用-那么a调用b会有几种情况-你使用事务哪种级别" tabindex="-1"><a class="header-anchor" href="#_44-spring事务-以及事务会问你事务除了acid外-还有脏读-不可重复读-幻读可详细说-事务的传播机制7种-事务的隔离级别-可能会出题-比如a方法使用事务-b方法没有使用-那么a调用b会有几种情况-你使用事务哪种级别" aria-hidden="true">#</a> 44. spring事务，以及事务会问你事务除了ACID外，还有脏读，不可重复读，幻读可详细说，事务的传播机制7种，事务的隔离级别，可能会出题，比如A方法使用事务，B方法没有使用，那么A调用B会有几种情况，你使用事务哪种级别</h3><h3 id="_45-mybatis的事务" tabindex="-1"><a class="header-anchor" href="#_45-mybatis的事务" aria-hidden="true">#</a> 45. mybatis的事务，</h3><h3 id="_46-springmvc的执行流程" tabindex="-1"><a class="header-anchor" href="#_46-springmvc的执行流程" aria-hidden="true">#</a> 46. springmvc的执行流程</h3><h3 id="_47-线上的修改配置文件的环境比如数据库配置-怎么修改-是不是同一个目录下" tabindex="-1"><a class="header-anchor" href="#_47-线上的修改配置文件的环境比如数据库配置-怎么修改-是不是同一个目录下" aria-hidden="true">#</a> 47. 线上的修改配置文件的环境比如数据库配置，怎么修改，是不是同一个目录下</h3><h3 id="_48-过滤器和拦截器区别-实战用到没有-怎么用的" tabindex="-1"><a class="header-anchor" href="#_48-过滤器和拦截器区别-实战用到没有-怎么用的" aria-hidden="true">#</a> 48. 过滤器和拦截器区别，实战用到没有，怎么用的</h3><h3 id="_49-设计模式用过哪些-项目中用到的设计模式有哪些-说几个熟悉-可能再往深处扩展-比如你怎么实现-怎么写" tabindex="-1"><a class="header-anchor" href="#_49-设计模式用过哪些-项目中用到的设计模式有哪些-说几个熟悉-可能再往深处扩展-比如你怎么实现-怎么写" aria-hidden="true">#</a> 49. 设计模式用过哪些，项目中用到的设计模式有哪些，说几个熟悉，可能再往深处扩展，比如你怎么实现，怎么写</h3><h3 id="_50-观察者模式和redis的订阅和消费" tabindex="-1"><a class="header-anchor" href="#_50-观察者模式和redis的订阅和消费" aria-hidden="true">#</a> 50. 观察者模式和redis的订阅和消费</h3><h3 id="_51-netty有没有用过-netty的优势是啥-你为啥用-项目中怎么用的" tabindex="-1"><a class="header-anchor" href="#_51-netty有没有用过-netty的优势是啥-你为啥用-项目中怎么用的" aria-hidden="true">#</a> 51. netty有没有用过，netty的优势是啥， 你为啥用，项目中怎么用的</h3><h3 id="_52-微服务和分布式区别" tabindex="-1"><a class="header-anchor" href="#_52-微服务和分布式区别" aria-hidden="true">#</a> 52. 微服务和分布式区别</h3><h3 id="_53-微服务再细一点-我这边没怎么问-没用到" tabindex="-1"><a class="header-anchor" href="#_53-微服务再细一点-我这边没怎么问-没用到" aria-hidden="true">#</a> 53. 微服务再细一点，我这边没怎么问，没用到</h3><h3 id="_54-dubbo和springcloud的区别" tabindex="-1"><a class="header-anchor" href="#_54-dubbo和springcloud的区别" aria-hidden="true">#</a> 54. dubbo和springcloud的区别</h3><h3 id="_55-dubbo和zk连接流程" tabindex="-1"><a class="header-anchor" href="#_55-dubbo和zk连接流程" aria-hidden="true">#</a> 55. dubbo和zk连接流程</h3><h3 id="_56-dubbo再往深处-比如负载均衡以及容错机制-再往深处" tabindex="-1"><a class="header-anchor" href="#_56-dubbo再往深处-比如负载均衡以及容错机制-再往深处" aria-hidden="true">#</a> 56. dubbo再往深处，比如负载均衡以及容错机制，再往深处</h3><h3 id="_57-zk了解吗-没怎么问我" tabindex="-1"><a class="header-anchor" href="#_57-zk了解吗-没怎么问我" aria-hidden="true">#</a> 57. zk了解吗，没怎么问我</h3><h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h2><h3 id="_1-数据库优化方式" tabindex="-1"><a class="header-anchor" href="#_1-数据库优化方式" aria-hidden="true">#</a> 1.数据库优化方式</h3><h3 id="_2-sql优化方式" tabindex="-1"><a class="header-anchor" href="#_2-sql优化方式" aria-hidden="true">#</a> 2.sql优化方式</h3><h3 id="_3-索引-通过执行explain-优化索引-比如覆盖索引-最左原则-组合索引遇到的几种方式不同" tabindex="-1"><a class="header-anchor" href="#_3-索引-通过执行explain-优化索引-比如覆盖索引-最左原则-组合索引遇到的几种方式不同" aria-hidden="true">#</a> 3.索引，通过执行explain,优化索引， 比如覆盖索引，最左原则，组合索引遇到的几种方式不同</h3><h3 id="_4-b-tree和b-tree区别" tabindex="-1"><a class="header-anchor" href="#_4-b-tree和b-tree区别" aria-hidden="true">#</a> 4.B tree和B+Tree区别</h3><h3 id="_5-innodb和myisam的区别" tabindex="-1"><a class="header-anchor" href="#_5-innodb和myisam的区别" aria-hidden="true">#</a> 5.innodb和myisam的区别</h3><h3 id="_6-数据库表设计" tabindex="-1"><a class="header-anchor" href="#_6-数据库表设计" aria-hidden="true">#</a> 6.数据库表设计</h3><h3 id="_7-三大范式" tabindex="-1"><a class="header-anchor" href="#_7-三大范式" aria-hidden="true">#</a> 7.三大范式</h3><h3 id="_8-数据库查询leftjoin以及其他join-出题考你-还有就是写sql-比如俩个表-只取a表中与b表不共用的那部分-怎么实现" tabindex="-1"><a class="header-anchor" href="#_8-数据库查询leftjoin以及其他join-出题考你-还有就是写sql-比如俩个表-只取a表中与b表不共用的那部分-怎么实现" aria-hidden="true">#</a> 8.数据库查询Leftjoin以及其他join 出题考你，还有就是写sql，比如俩个表，只取A表中与B表不共用的那部分，怎么实现</h3><h2 id="中间件-rabbitmq、kafka、rocketmq" tabindex="-1"><a class="header-anchor" href="#中间件-rabbitmq、kafka、rocketmq" aria-hidden="true">#</a> 中间件(rabbitmq、kafka、rocketMq)</h2><h3 id="_1-使用的队列常见问题-如何保证消息一致性、保证消息不丢失、重复数据怎么处理-、生产者宕机-或者消费者宕机你怎么处理-、不消费怎么处理" tabindex="-1"><a class="header-anchor" href="#_1-使用的队列常见问题-如何保证消息一致性、保证消息不丢失、重复数据怎么处理-、生产者宕机-或者消费者宕机你怎么处理-、不消费怎么处理" aria-hidden="true">#</a> 1.使用的队列常见问题 ( 如何保证消息一致性、保证消息不丢失、重复数据怎么处理 、生产者宕机 或者消费者宕机你怎么处理 、不消费怎么处理 )</h3><h3 id="_2-如果整个链路通的-但是数据不消费怎么处理" tabindex="-1"><a class="header-anchor" href="#_2-如果整个链路通的-但是数据不消费怎么处理" aria-hidden="true">#</a> 2.如果整个链路通的，但是数据不消费怎么处理</h3><h3 id="_3-rabbitmq的死信队列-原因-之后怎么处理" tabindex="-1"><a class="header-anchor" href="#_3-rabbitmq的死信队列-原因-之后怎么处理" aria-hidden="true">#</a> 3.rabbitmq的死信队列 ，原因，之后怎么处理</h3><h3 id="_4-会问rabbitmq和kakfa区别或者-和rockedmq区别" tabindex="-1"><a class="header-anchor" href="#_4-会问rabbitmq和kakfa区别或者-和rockedmq区别" aria-hidden="true">#</a> 4.会问rabbitMq和kakfa区别或者 和rockedMq区别</h3><h3 id="_5-如何保证消息不会被重复消费" tabindex="-1"><a class="header-anchor" href="#_5-如何保证消息不会被重复消费" aria-hidden="true">#</a> 5.如何保证消息不会被重复消费</h3><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> redis</h2><h3 id="_1-redis的5种数据类型-使用场景-你项目中用到没有" tabindex="-1"><a class="header-anchor" href="#_1-redis的5种数据类型-使用场景-你项目中用到没有" aria-hidden="true">#</a> 1.redis的5种数据类型（使用场景，你项目中用到没有）</h3><h4 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h4><blockquote><p><strong>常用命令:</strong> set,get,decr,incr,mget 等。</p></blockquote><p>String数据结构是简单的key-value类型，value其实不仅可以是String，也可以是数字。 常规key-value缓存应用； 常规计数：微博数，粉丝数等。</p><h4 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> Hash</h4><blockquote><p><strong>常用命令：</strong> hget,hset,hgetall 等。</p></blockquote><p>hash 是一个 string 类型的 field 和 value 的映射表，hash 特别适合用于存储对象，后续操作的时候，你可以直接仅仅修改这个对象中的某个字段的值。 比如我们可以 hash 数据结构来存储用户信息，商品信息等等。比如下面我就用 hash 类型存放了我本人的一些信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>key=JavaUser293847
value={
  “id”: 1,
  “name”: “SnailClimb”,
  “age”: 22,
  “location”: “Wuhan, Hubei”
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> List</h4><blockquote><p><strong>常用命令:</strong> lpush,rpush,lpop,rpop,lrange等</p></blockquote><p>list 就是链表，Redis list 的应用场景非常多，也是Redis最重要的数据结构之一，比如微博的关注列表，粉丝列表，消息列表等功能都可以用Redis的 list 结构来实现。</p><p>Redis list 的实现为一个双向链表，即可以支持反向查找和遍历，更方便操作，不过带来了部分额外的内存开销。</p><p>另外可以通过 lrange 命令，就是从某个元素开始读取多少个元素，可以基于 list 实现分页查询，这个很棒的一个功能，基于 redis 实现简单的高性能分页，可以做类似微博那种下拉不断分页的东西（一页一页的往下走），性能高。</p><h4 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h4><blockquote><p><strong>常用命令：</strong> sadd,spop,smembers,sunion 等</p></blockquote><p>set 对外提供的功能与list类似是一个列表的功能，特殊之处在于 set 是可以自动排重的。</p><p>当你需要存储一个列表数据，又不希望出现重复数据时，set是一个很好的选择，并且set提供了判断某个成员是否在一个set集合内的重要接口，这个也是list所不能提供的。可以基于 set 轻易实现交集、并集、差集的操作。</p><p>比如：在微博应用中，可以将一个用户所有的关注人存在一个集合中，将其所有粉丝存在一个集合。Redis可以非常方便的实现如共同关注、共同粉丝、共同喜好等功能。这个过程也就是求交集的过程，具体命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sinterstore key1 key2 key3     将交集存在key1内
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="sorted-set" tabindex="-1"><a class="header-anchor" href="#sorted-set" aria-hidden="true">#</a> Sorted Set</h4><blockquote><p><strong>常用命令：</strong> zadd,zrange,zrem,zcard等</p></blockquote><p>和set相比，sorted set增加了一个权重参数score，使得集合中的元素能够按score进行有序排列。</p><p><strong>举例：</strong> 在直播系统中，实时排行信息包含直播间在线用户列表，各种礼物排行榜，弹幕消息（可以理解为按消息维度的消息排行榜）等信息，适合使用 Redis 中的 Sorted Set 结构进行存储。</p><h4 id="_2-redis的持久化-俩种方式-rdb和aof" tabindex="-1"><a class="header-anchor" href="#_2-redis的持久化-俩种方式-rdb和aof" aria-hidden="true">#</a> 2.redis的持久化，俩种方式，rdb和aof，</h4><h4 id="_3-redis的订阅机制" tabindex="-1"><a class="header-anchor" href="#_3-redis的订阅机制" aria-hidden="true">#</a> 3.redis的订阅机制</h4><h2 id="jvm总结" tabindex="-1"><a class="header-anchor" href="#jvm总结" aria-hidden="true">#</a> JVM总结</h2><h3 id="_1-jvm调优实战说一下" tabindex="-1"><a class="header-anchor" href="#_1-jvm调优实战说一下" aria-hidden="true">#</a> 1.JVM调优实战说一下</h3><h3 id="_2-cms-gc的流程-cms-表示基于-标记清理的垃圾回收器" tabindex="-1"><a class="header-anchor" href="#_2-cms-gc的流程-cms-表示基于-标记清理的垃圾回收器" aria-hidden="true">#</a> 2.cms gc的流程 cms 表示基于 标记清理的垃圾回收器</h3><h3 id="_3-新生代和老年代标记算法优缺点" tabindex="-1"><a class="header-anchor" href="#_3-新生代和老年代标记算法优缺点" aria-hidden="true">#</a> 3.新生代和老年代标记算法优缺点</h3><h3 id="_4-oom的排查思路" tabindex="-1"><a class="header-anchor" href="#_4-oom的排查思路" aria-hidden="true">#</a> 4.oom的排查思路</h3><h3 id="_5-cms优缺点" tabindex="-1"><a class="header-anchor" href="#_5-cms优缺点" aria-hidden="true">#</a> 5.cms优缺点</h3><h3 id="_6-对象什么时候进入老年代" tabindex="-1"><a class="header-anchor" href="#_6-对象什么时候进入老年代" aria-hidden="true">#</a> 6.对象什么时候进入老年代</h3><h3 id="_7-什么时候触发fullgc" tabindex="-1"><a class="header-anchor" href="#_7-什么时候触发fullgc" aria-hidden="true">#</a> 7.什么时候触发fullgc</h3><h3 id="_8-模拟oom和stack-overflow场景" tabindex="-1"><a class="header-anchor" href="#_8-模拟oom和stack-overflow场景" aria-hidden="true">#</a> 8.模拟oom和Stack Overflow场景</h3><h3 id="_9-栈什么时候oom" tabindex="-1"><a class="header-anchor" href="#_9-栈什么时候oom" aria-hidden="true">#</a> 9.栈什么时候oom</h3><h3 id="_10-怎么jvm中内存的使用情况" tabindex="-1"><a class="header-anchor" href="#_10-怎么jvm中内存的使用情况" aria-hidden="true">#</a> 10.怎么jvm中内存的使用情况</h3><h3 id="_11-jmap是怎么做到的" tabindex="-1"><a class="header-anchor" href="#_11-jmap是怎么做到的" aria-hidden="true">#</a> 11.jmap是怎么做到的</h3><h3 id="_12-java代码从编译到执行有哪些步骤" tabindex="-1"><a class="header-anchor" href="#_12-java代码从编译到执行有哪些步骤" aria-hidden="true">#</a> 12.java代码从编译到执行有哪些步骤</h3><h3 id="_13-类加载过程" tabindex="-1"><a class="header-anchor" href="#_13-类加载过程" aria-hidden="true">#</a> 13.类加载过程</h3><h3 id="_14-jar包冲突遇到过吗-jar包冲突时在类加载过程中哪一步报的错" tabindex="-1"><a class="header-anchor" href="#_14-jar包冲突遇到过吗-jar包冲突时在类加载过程中哪一步报的错" aria-hidden="true">#</a> 14.jar包冲突遇到过吗？jar包冲突时在类加载过程中哪一步报的错</h3><h3 id="_15-让你实现一个jvm-标记垃圾的具体步骤你怎么做-怎么扫描垃圾-这些信息维护在哪" tabindex="-1"><a class="header-anchor" href="#_15-让你实现一个jvm-标记垃圾的具体步骤你怎么做-怎么扫描垃圾-这些信息维护在哪" aria-hidden="true">#</a> 15.让你实现一个jvm,标记垃圾的具体步骤你怎么做，怎么扫描垃圾，这些信息维护在哪</h3><h2 id="实战总结" tabindex="-1"><a class="header-anchor" href="#实战总结" aria-hidden="true">#</a> 实战总结</h2><h3 id="_1-分库分表的场景题-淘宝场景-买家卖家数据怎么存-怎么分库分表" tabindex="-1"><a class="header-anchor" href="#_1-分库分表的场景题-淘宝场景-买家卖家数据怎么存-怎么分库分表" aria-hidden="true">#</a> 1. 分库分表的场景题，淘宝场景，买家卖家数据怎么存，怎么分库分表</h3><h3 id="_2-说说你在重构拆分中遇到的问题-你负责了哪些" tabindex="-1"><a class="header-anchor" href="#_2-说说你在重构拆分中遇到的问题-你负责了哪些" aria-hidden="true">#</a> 2. 说说你在重构拆分中遇到的问题，你负责了哪些</h3><h3 id="_3-拆分你是怎么保证数据完整性的" tabindex="-1"><a class="header-anchor" href="#_3-拆分你是怎么保证数据完整性的" aria-hidden="true">#</a> 3. 拆分你是怎么保证数据完整性的</h3><h3 id="_4-如果你当前系统压力-100倍你怎么设计" tabindex="-1"><a class="header-anchor" href="#_4-如果你当前系统压力-100倍你怎么设计" aria-hidden="true">#</a> 4. 如果你当前系统压力*100倍你怎么设计</h3><h3 id="_5-如果根据压测流量路由到影子库" tabindex="-1"><a class="header-anchor" href="#_5-如果根据压测流量路由到影子库" aria-hidden="true">#</a> 5. 如果根据压测流量路由到影子库</h3>`,137),f={id:"_6-https-tech-meituan-com-2018-09-27-quake-introduction-html",tabindex:"-1"},m=a("a",{class:"header-anchor",href:"#_6-https-tech-meituan-com-2018-09-27-quake-introduction-html","aria-hidden":"true"},"#",-1),g={href:"https://tech.meituan.com/2018/09/27/quake-introduction.html",target:"_blank",rel:"noopener noreferrer"},v=r('<h3 id="_7-分布式事务有没有了解过目前业内比较成熟的解决方案" tabindex="-1"><a class="header-anchor" href="#_7-分布式事务有没有了解过目前业内比较成熟的解决方案" aria-hidden="true">#</a> 7. 分布式事务有没有了解过目前业内比较成熟的解决方案</h3><h3 id="_8-场景题-大量请求访问一份数据怎么设计-只说应用层面的-借用读写锁的思想" tabindex="-1"><a class="header-anchor" href="#_8-场景题-大量请求访问一份数据怎么设计-只说应用层面的-借用读写锁的思想" aria-hidden="true">#</a> 8. 场景题，大量请求访问一份数据怎么设计，只说应用层面的（借用读写锁的思想）</h3><h3 id="_9-分布式锁你们用什么实现的" tabindex="-1"><a class="header-anchor" href="#_9-分布式锁你们用什么实现的" aria-hidden="true">#</a> 9. 分布式锁你们用什么实现的</h3><h3 id="_10-你怎么理解幂等" tabindex="-1"><a class="header-anchor" href="#_10-你怎么理解幂等" aria-hidden="true">#</a> 10. 你怎么理解幂等？</h3><h3 id="_11-你是怎么实现幂等的" tabindex="-1"><a class="header-anchor" href="#_11-你是怎么实现幂等的" aria-hidden="true">#</a> 11. 你是怎么实现幂等的？</h3><h3 id="_12-链路追踪你们怎么做的" tabindex="-1"><a class="header-anchor" href="#_12-链路追踪你们怎么做的" aria-hidden="true">#</a> 12. 链路追踪你们怎么做的</h3><h3 id="_13-cpu负载很高一般是什么原因-排查思路是什么" tabindex="-1"><a class="header-anchor" href="#_13-cpu负载很高一般是什么原因-排查思路是什么" aria-hidden="true">#</a> 13. CPU负载很高一般是什么原因，排查思路是什么？</h3><h2 id="linux总结" tabindex="-1"><a class="header-anchor" href="#linux总结" aria-hidden="true">#</a> linux总结</h2><h3 id="_1-top命令cpu利用率和load-average的区别" tabindex="-1"><a class="header-anchor" href="#_1-top命令cpu利用率和load-average的区别" aria-hidden="true">#</a> 1. top命令CPU利用率和Load?Average的区别</h3><h3 id="_2-load-average高但是cpu使用率不高是什么原因" tabindex="-1"><a class="header-anchor" href="#_2-load-average高但是cpu使用率不高是什么原因" aria-hidden="true">#</a> 2. Load?Average高但是CPU使用率不高是什么原因</h3><h2 id="数据结构-算法" tabindex="-1"><a class="header-anchor" href="#数据结构-算法" aria-hidden="true">#</a> 数据结构&amp;算法</h2><h3 id="_1-求链表长度-可能有环" tabindex="-1"><a class="header-anchor" href="#_1-求链表长度-可能有环" aria-hidden="true">#</a> 1. 求链表长度，可能有环</h3><h3 id="_2-经典的上台阶问题" tabindex="-1"><a class="header-anchor" href="#_2-经典的上台阶问题" aria-hidden="true">#</a> 2. 经典的上台阶问题</h3><h3 id="_3-多线程顺序打印" tabindex="-1"><a class="header-anchor" href="#_3-多线程顺序打印" aria-hidden="true">#</a> 3. 多线程顺序打印</h3><h3 id="_4-括号匹配问题" tabindex="-1"><a class="header-anchor" href="#_4-括号匹配问题" aria-hidden="true">#</a> 4. 括号匹配问题</h3><h3 id="_5-遍历树-写2种" tabindex="-1"><a class="header-anchor" href="#_5-遍历树-写2种" aria-hidden="true">#</a> 5. 遍历树，写2种</h3><h3 id="_6-求树最大深度-用队列求" tabindex="-1"><a class="header-anchor" href="#_6-求树最大深度-用队列求" aria-hidden="true">#</a> 6. 求树最大深度，用队列求</h3>',17);function x(q,S){const n=t("ExternalLinkIcon");return d(),h("div",null,[a("p",null,[e("（面试大厂的面试题）"),a("a",o,[e("https://juejin.im/post/5ec0ff4a6fb9a043271c76e9?utm_source=gold_browser_extension"),s(n)])]),l,p,u,a("blockquote",null,[a("p",null,[e("补充（来自"),a("a",b,[e("issue 675"),s(n)]),e("）：在 Java 9 之后，String 类的实现改用 byte 数组存储字符串 "),_])]),k,a("h3",f,[m,e(" 6. "),a("a",g,[e("https://tech.meituan.com/2018/09/27/quake-introduction.html"),s(n)])]),v])}const w=i(c,[["render",x],["__file","index.html.vue"]]);export{w as default};
