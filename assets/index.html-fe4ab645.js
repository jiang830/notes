import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as r,f as d}from"./app-1fe98df7.js";const i={},h=d('<h4 id="高并发场景秒杀抢购超卖bug实战重现" tabindex="-1"><a class="header-anchor" href="#高并发场景秒杀抢购超卖bug实战重现" aria-hidden="true">#</a> 高并发场景秒杀抢购超卖Bug实战重现</h4><h4 id="秒杀抢购场景下实战jvm级别锁与分布式锁" tabindex="-1"><a class="header-anchor" href="#秒杀抢购场景下实战jvm级别锁与分布式锁" aria-hidden="true">#</a> 秒杀抢购场景下实战JVM级别锁与分布式锁</h4><h4 id="大厂分布式锁redisson框架实战" tabindex="-1"><a class="header-anchor" href="#大厂分布式锁redisson框架实战" aria-hidden="true">#</a> 大厂分布式锁Redisson框架实战</h4><h4 id="lua脚本语言快速入门与使用注意事项" tabindex="-1"><a class="header-anchor" href="#lua脚本语言快速入门与使用注意事项" aria-hidden="true">#</a> Lua脚本语言快速入门与使用注意事项</h4><h4 id="redisson分布式锁源码剖析" tabindex="-1"><a class="header-anchor" href="#redisson分布式锁源码剖析" aria-hidden="true">#</a> Redisson分布式锁源码剖析</h4><h4 id="redis主从架构锁失效问题解析" tabindex="-1"><a class="header-anchor" href="#redis主从架构锁失效问题解析" aria-hidden="true">#</a> Redis主从架构锁失效问题解析</h4><p>主节点返回加锁成功的信息给客户端后，主节点挂了，设置的key没有同步到从节点，从节点变成了主节点，导致其他等待解锁的线程也可以加锁。使用zookeeper可以解决上述问题，redis偏向ap，zookeeper偏向cp</p><p><strong>RedLock实现原理</strong></p><figure><img src="https://img.jssjqd.cn/20221021082247.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>缺点：</p><p>有从节点的时候依旧会有主从锁失效问题；半数以上节点无法连通时，就无法加锁成功；节点越多，加锁性能越低；</p><h4 id="从cap角度剖析redis-与zookeeper分布式锁区别" tabindex="-1"><a class="header-anchor" href="#从cap角度剖析redis-与zookeeper分布式锁区别" aria-hidden="true">#</a> 从CAP角度剖析Redis.与Zookeeper分布式锁区别</h4><h4 id="redlock分布式锁原理与存在的问题分析" tabindex="-1"><a class="header-anchor" href="#redlock分布式锁原理与存在的问题分析" aria-hidden="true">#</a> Redlock分布式锁原理与存在的问题分析</h4><h4 id="大促场景如何将分布式锁性能提升100倍" tabindex="-1"><a class="header-anchor" href="#大促场景如何将分布式锁性能提升100倍" aria-hidden="true">#</a> 大促场景如何将分布式锁性能提升100倍</h4>',14),s=[h];function n(o,t){return a(),r("div",null,s)}const p=e(i,[["render",n],["__file","index.html.vue"]]);export{p as default};
