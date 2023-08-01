const n=JSON.parse('{"key":"v-d1b56b3e","path":"/pages/d64172/","title":"Class文件结构","lang":"zh-CN","frontmatter":{"title":"Class文件结构","date":"2022-08-31T01:56:40.000Z","permalink":"/pages/d64172/","author":{"name":"江"},"category":["JVM性能调优"],"description":"一:源代码 package com.tuling.smlz.jvm.classbyatecode; /** * Created by smlz on 2019/11/5. */ public class TulingByteCode { private String userName; public String getUserName() { return userName; } public void setUserName(String userName) { this.userName = userName; } }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/d64172/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"Class文件结构"}],["meta",{"property":"og:description","content":"一:源代码 package com.tuling.smlz.jvm.classbyatecode; /** * Created by smlz on 2019/11/5. */ public class TulingByteCode { private String userName; public String getUserName() { return userName; } public void setUserName(String userName) { this.userName = userName; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T21:24:19.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2022-08-31T01:56:40.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T21:24:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Class文件结构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-31T01:56:40.000Z\\",\\"dateModified\\":\\"2023-08-01T21:24:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[],"git":{"createdTime":1690925059000,"updatedTime":1690925059000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":39.32,"words":11795},"filePathRelative":"20.性能调优/JVM/04.Class文件结构.md","localizedDate":"2022年8月31日","excerpt":"<p><strong>一:源代码</strong></p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">package</span> <span class=\\"token namespace\\">com<span class=\\"token punctuation\\">.</span>tuling<span class=\\"token punctuation\\">.</span>smlz<span class=\\"token punctuation\\">.</span>jvm<span class=\\"token punctuation\\">.</span>classbyatecode</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token doc-comment comment\\">/**\\n * Created by smlz on 2019/11/5.\\n */</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">TulingByteCode</span> <span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">String</span> userName<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">getUserName</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> userName<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">setUserName</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> userName<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>userName <span class=\\"token operator\\">=</span> userName<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
