import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,a as d}from"./app-CcJZcE5q.js";const s={},r=d(`<h4 id="redis安装" tabindex="-1"><a class="header-anchor" href="#redis安装"><span>Redis安装</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>下载地址：http://redis.io/download
安装步骤：
# 安装gcc
yum install gcc

# 把下载好的redis-5.0.3.tar.gz放在/usr/local文件夹下，并解压
wget http://download.redis.io/releases/redis-5.0.3.tar.gz
tar -zxvf redis-5.0.3.tar.gz
cd redis-5.0.3

# 进入到解压好的redis-5.0.3目录下，进行编译与安装
make

# 修改配置
daemonize yes  #后台启动
protected-mode no  #关闭保护模式，开启的话，只有本机才可以访问redis
# 需要注释掉bind
#bind 127.0.0.1（bind绑定的是自己机器网卡的ip，如果有多块网卡可以配多个ip，代表允许客户端通过机器的哪些网卡ip去访问，内网一般可以不配置bind，注释掉即可）

# 启动服务
src/redis-server redis.conf

# 验证启动是否成功 
ps -ef | grep redis 

# 进入redis客户端 
src/redis-cli 

# 退出客户端
quit

# 退出redis服务： 
（1）pkill redis-server 
（2）kill 进程号                       
（3）src/redis-cli shutdown 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[r];function a(t,c){return i(),n("div",null,l)}const o=e(s,[["render",a],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/pages/c92b96/","title":"Redis安装","lang":"zh-CN","frontmatter":{"title":"Redis安装","date":"2022-10-15T23:47:55.000Z","permalink":"/pages/c92b96/","categories":["Redis"],"author":{"name":"江"}},"headers":[],"git":{"createdTime":1709200080000,"updatedTime":1709200080000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":0.79,"words":238},"filePathRelative":"分布式/00.Redis/00.Redis安装.md","localizedDate":"2022年10月15日","excerpt":"<h4>Redis安装</h4>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>下载地址：http://redis.io/download\\n安装步骤：\\n# 安装gcc\\nyum install gcc\\n\\n# 把下载好的redis-5.0.3.tar.gz放在/usr/local文件夹下，并解压\\nwget http://download.redis.io/releases/redis-5.0.3.tar.gz\\ntar -zxvf redis-5.0.3.tar.gz\\ncd redis-5.0.3\\n\\n# 进入到解压好的redis-5.0.3目录下，进行编译与安装\\nmake\\n\\n# 修改配置\\ndaemonize yes  #后台启动\\nprotected-mode no  #关闭保护模式，开启的话，只有本机才可以访问redis\\n# 需要注释掉bind\\n#bind 127.0.0.1（bind绑定的是自己机器网卡的ip，如果有多块网卡可以配多个ip，代表允许客户端通过机器的哪些网卡ip去访问，内网一般可以不配置bind，注释掉即可）\\n\\n# 启动服务\\nsrc/redis-server redis.conf\\n\\n# 验证启动是否成功 \\nps -ef | grep redis \\n\\n# 进入redis客户端 \\nsrc/redis-cli \\n\\n# 退出客户端\\nquit\\n\\n# 退出redis服务： \\n（1）pkill redis-server \\n（2）kill 进程号                       \\n（3）src/redis-cli shutdown \\n</code></pre></div>"}');export{o as comp,u as data};
