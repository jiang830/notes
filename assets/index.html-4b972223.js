import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as o,f as s}from"./app-2d5e738c.js";const a={},i=s(`<h3 id="mvcc多版本并发控制机制" tabindex="-1"><a class="header-anchor" href="#mvcc多版本并发控制机制" aria-hidden="true">#</a> MVCC多版本并发控制机制</h3><p>Mysql在可重复读隔离级别下如何保证事务较高的隔离性，我们上节课给大家演示过，同样的sql查询语句在一个事务里多次执行查询结果相同，就算其它事务对数据有修改也不会影响当前事务sql语句的查询结果。</p><p>这个隔离性就是靠MVCC(<strong>Multi-Version Concurrency Control</strong>)机制来保证的，对一行数据的读和写两个操作默认是不会通过加锁互斥来保证隔离性，避免了频繁加锁互斥，而在串行化隔离级别为了保证较高的隔离性是通过将所有操作加锁互斥来实现的。</p><p>Mysql在读已提交和可重复读隔离级别下都实现了MVCC机制。</p><p><strong>undo日志版本链与ReadView机制详解</strong></p><p>undo日志版本链是指一行数据被多个事务依次修改过后，在每个事务修改完后，Mysql会保留修改前的数据undo回滚日志，并且用两个隐藏字段trx_id和roll_pointer把这些undo日志串联起来形成一个历史记录版本链(见下图，需参考视频里的例子理解)</p><p>​ <img src="https://img.jssjqd.cn/note/20220831233310.png" alt="" loading="lazy"></p><p><strong>在Repeatable read(可重复读)和Read uncommitted(读已提交)两个级别中，当事务开启后，执行任何查询语句时会生成当前事务的一致性视图ReadView，略有不同的是，可重复读级别中的ReadView在事务提交之前只会生成一次，不会变化；而在读已提交级别中的ReadView则在每执行一次查询语句时都会重新生成。</strong></p><p><strong>ReadView</strong> 会记录 4 个非常重要的属性：</p><ol><li><p><strong>creator_trx_id</strong>: 当前事务的 id</p><p><strong>只有在对表中的记录做改动时（执行INSERT、DELETE、UPDATE这些语句时）才会为事务分配事务id，否则在一个只读事务中的事务id值都默认为0。</strong></p></li><li><p><strong>m_ids</strong>: 当前系统中所有的活跃事务的 id，活跃事务指的是当前系统中开启了事务，但是还没有提交的事务;</p></li><li><p><strong>min_trx_id</strong>: 当前系统中，所有活跃事务中事务 id 最小的那个事务，也就是 m_id 数组中最小的事务 id;</p></li><li><p><strong>max_trx_id</strong>: 表示生成<code>ReadView</code>时系统中应该分配给下一个事务的<code>id</code>值。</p></li></ol><p><strong>有了这个<code>ReadView</code>，这样在访问某条记录时，只需要按照下边的步骤判断记录的某个版本是否可见：</strong></p><ul><li>如果被访问版本的<code>trx_id</code>属性值与<code>ReadView</code>中的<code>creator_trx_id</code>值相同，意味着当前事务在访问它自己修改过的记录，所以该版本可以被当前事务访问。</li><li>如果被访问版本的<code>trx_id</code>属性值小于<code>ReadView</code>中的<code>min_trx_id</code>值，表明生成该版本的事务在当前事务生成<code>ReadView</code>前已经提交，所以该版本可以被当前事务访问。</li><li>如果被访问版本的<code>trx_id</code>属性值大于或等于<code>ReadView</code>中的<code>max_trx_id</code>值，表明生成该版本的事务在当前事务生成<code>ReadView</code>后才开启，所以该版本不可以被当前事务访问。</li><li>如果被访问版本的<code>trx_id</code>属性值在<code>ReadView</code>的<code>min_trx_id</code>和<code>max_trx_id</code>之间，那就需要判断一下<code>trx_id</code>属性值是不是在<code>m_ids</code>列表中，如果在，说明创建<code>ReadView</code>时生成该版本的事务还是活跃的，该版本不可以被访问；如果不在，说明创建<code>ReadView</code>时生成该版本的事务已经被提交，该版本可以被访问。</li></ul><p>如果某个版本的数据对当前事务不可见的话，那就顺着版本链找到下一个版本的数据，继续按照上边的步骤判断可见性，依此类推，直到版本链中的最后一个版本。如果最后一个版本也不可见的话，那么就意味着该条记录对该事务完全不可见，查询结果就不包含该记录。</p><p>对于删除的情况可以认为是update的特殊情况，会将版本链上最新的数据复制一份，然后将trx_id修改成删除操作的trx_id，同时在该条记录的头信息（record header）里的（deleted_flag）标记位写上true，来表示当前记录已经被删除，在查询时按照上面的规则查到对应的记录如果delete_flag标记位为true，意味着记录已被删除，则不返回数据。</p><p><strong>注意:</strong> begin/start transaction 命令并不是一个事务的起点，在执行到它们之后的第一个修改操作InnoDB表的语句，事务才真正启动，才会向mysql申请事务id，mysql内部是严格按照事务的启动顺序来分配事务id的。</p><p><strong>总结：</strong></p><p>MVCC机制的实现就是通过ReadView机制与undo版本链比对机制，使得不同的事务会根据数据版本链对比规则读取同一条数据在版本链上的不同版本数据。</p><h3 id="innodb引擎sql执行的bufferpool缓存机制" tabindex="-1"><a class="header-anchor" href="#innodb引擎sql执行的bufferpool缓存机制" aria-hidden="true">#</a> Innodb引擎SQL执行的BufferPool缓存机制</h3><p>对于InnoDB存储引擎而言，页是磁盘和内存交互的基本单位。哪怕你要读取一条记录，InnoDB也会将整个索引页加载到内存。哪怕只改了1个字节的数据，该索引页就是脏页了，整个索引页都要刷新到磁盘。InnoDB是基于磁盘的存储引擎，如果每次操作都去读写磁盘，那么性能将会受到很大的影响。而且绝大多数时候，程序读写的数据在磁盘上并不是连续的，这意味着需要执行大量的随机IO读写，磁盘随机IO读写效率是非常低的，尤其是传统的机械硬盘。</p><p>为什么我们只想读取一条记录，而InnoDB会将整个页的数据都加载到内存？因为根据计算机的局部性原理，程序接下来大概率会访问与它相邻的记录，为了避免频繁发起磁盘IO读操作，InnoDB直接将整个页都加载到内存，下次再访问页中的其它记录时，就可以命中缓存了，减少磁盘IO操作。</p><p>问题解决的思路其实是一样的，磁盘的速度虽然很慢，但是内存的速度快啊。这些被加载到内存里的索引页，使用完毕后不要立即释放，而是将它们先缓存下来，下次再访问这些页时，就可以命中缓存了，减少磁盘IO，从而提升性能。理论上，只要内存无限大，那么MySQL几乎可以是基于内存的数据库了。</p><p><strong>Buffer Pool</strong></p><p>MySQL服务器启动时，InnoDB会向操作系统申请一块连续的内存空间用来缓存索引页，这一块连续的内存空间就是Buffer Pool。默认情况下Buffer Pool的大小是128MB，查看命令如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;innodb_buffer_pool_size&#39;</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-------------------------+-----------+</span>
<span class="token operator">|</span> Variable_name           <span class="token operator">|</span> <span class="token keyword">Value</span>     <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------------------+-----------+</span>
<span class="token operator">|</span> innodb_buffer_pool_size <span class="token operator">|</span> <span class="token number">134217728</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------------------+-----------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>理论上，Buffer Pool越大，缓存的索引页就可以更多，缓存的命中率就可以更高，对应的性能提升就越明显。如果你的机器内存够大，完全可以调大Buffer Pool的大小，在配置文件里进行修改：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token punctuation">[</span>server<span class="token punctuation">]</span>
innodb_buffer_pool_size<span class="token operator">=</span><span class="token number">2147483648</span>
innodb_buffer_pool_instances<span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Buffer Pool最小是5MB，即使你配置的小于5MB，InnoDB也会分配5MB的内存。</strong></p><p><strong>innodb_buffer_pool_instances</strong>启动项代表Buffer Pool实例的个数。Buffer Pool支持配置多个，不同实例之间是隔离的，互不影响。配置多个的主要原因是因为BufferPool由多个链表组成，在维护这些链表时需要加锁保证同步，在高并发场景下会影响性能，配置多个实例就可以解决这个问题了。 每个Buffer Pool的大小是<strong>innodb_buffer_pool_size/innodb_buffer_pool_instances</strong>，InnoDB规定，单个Buffer Pool实例的大小如果小于1GB，即使配置多个也不会生效。</p><figure><img src="https://img.jssjqd.cn/202211010159523.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>执行sql</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">update</span> t <span class="token keyword">set</span> name<span class="token operator">=</span> <span class="token string">&#39;zhuge666&#39;</span> <span class="token keyword">where</span> id<span class="token operator">=</span><span class="token number">1</span>
<span class="token comment">#id为1的数据name的原值为zhuge</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>加载id为1的记录所在的整页数据为缓存数据到Buffer Pool缓存池</li><li>把name原值写入到undo日志文件中以便于回滚</li><li>更新Buffer Pool缓存池中的内存数据</li><li>写redo日志</li><li>准备提交事务，redo日志写入磁盘</li><li>准备提交事务，binlog日志写入磁盘</li><li>写入commit 标记到redo日志文件里，提交事务完成，该标记为了保证事务提交后redo与binlog数据一致</li><li>随机时间写入磁盘，以page为单位写入，这步完成后磁盘里的name更新为新值</li></ol><p><strong>为什么Mysql不能直接更新磁盘上的数据而且设置这么一套复杂的机制来执行SQL了？</strong></p><p>因为来一个请求就直接对磁盘文件进行随机读写，然后更新磁盘文件里的数据性能可能相当差。</p><p>因为磁盘随机读写的性能是非常差的，所以直接更新磁盘文件是不能让数据库抗住很高并发的。</p><p>Mysql这套机制看起来复杂，但它可以保证每个更新请求都是<strong>更新内存BufferPool</strong>，然后<strong>顺序写日志文件</strong>，同时还能保证各种异常情况下的数据一致性。</p><p>更新内存的性能是极高的，然后顺序写磁盘上的日志文件的性能也是非常高的，要远高于随机读写磁盘文件。</p><p>正是通过这套机制，才能让我们的MySQL数据库在较高配置的机器上每秒可以抗下几干甚至上万的读写请求。</p>`,38),r=[i];function d(l,t){return n(),o("div",null,r)}const u=e(a,[["render",d],["__file","index.html.vue"]]);export{u as default};