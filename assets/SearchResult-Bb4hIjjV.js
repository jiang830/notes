import{u as I,f as $,g as ee,h as j,i as se,j as ae,t as te,k as le,l as q,m as S,n as re,w as M,p as a,q as _,s as B,R as U,v as ue,x as ne,y as ie,z as oe,O as ce,P as ve,A as pe,B as de,C as ye,D as he,E as me,F as ge,G as fe,H as F}from"./app-BupKcn-7.js";const He=["/","/pages/06c8a8/","/pages/60b9cf/","/pages/5b853b/","/%E9%9D%A2%E8%AF%95/%E9%98%BF%E9%87%8C%E4%BA%91%E9%9D%A2%E8%AF%95%E9%A2%98.html","/pages/81ef2f/","/pages/c486e1/","/pages/b003d3/","/pages/5ae626/","/pages/7bda4d/","/pages/5655a2/","/pages/d20586/","/pages/01dad9/","/404.html","/pages/","/%E9%9D%A2%E8%AF%95/"],Re="SEARCH_PRO_QUERY_HISTORY",d=I(Re,[]),ke=()=>{const{queryHistoryCount:t}=F,l=t>0;return{enabled:l,queryHistory:d,addQueryHistory:r=>{l&&(d.value.length<t?d.value=Array.from(new Set([r,...d.value])):d.value=Array.from(new Set([r,...d.value.slice(0,t-1)])))},removeQueryHistory:r=>{d.value=[...d.value.slice(0,r),...d.value.slice(r+1)]}}},D=t=>He[t.id]+("anchor"in t?`#${t.anchor}`:""),Qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:b}=F,y=I(Qe,[]),Ae=()=>{const t=b>0;return{enabled:t,resultHistory:y,addResultHistory:l=>{if(t){const r={link:D(l),display:l.display};"header"in l&&(r.header=l.header),y.value.length<b?y.value=[r,...y.value]:y.value=[r,...y.value.slice(0,b-1)]}},removeResultHistory:l=>{y.value=[...y.value.slice(0,l),...y.value.slice(l+1)]}}},Ee=t=>{const l=ce(),r=j(),{search:Q,terminate:v}=ve(),m=q(!1),g=pe([]);return de(()=>{const h=()=>{g.value=[],m.value=!1},A=fe(f=>{m.value=!0,f?Q({type:"search",query:f,locale:r.value,options:l.value}).then(p=>{g.value=p,m.value=!1}).catch(p=>{console.error(p),h()}):h()},F.searchDelay);M([t,r],()=>A(t.value),{immediate:!0}),ye(()=>{v()})}),{searching:m,results:g}};var we=$({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:l}){const r=ee(),Q=j(),v=se(ae),{enabled:m,addQueryHistory:g,queryHistory:h,removeQueryHistory:A}=ke(),{enabled:f,resultHistory:p,addResultHistory:L,removeResultHistory:Y}=Ae(),P=m||f,E=te(t,"query"),{results:H,searching:z}=Ee(E),u=le({isQuery:!0,index:0}),o=q(0),c=q(0),T=S(()=>P&&(h.value.length>0||p.value.length>0)),x=S(()=>H.value.length>0),w=S(()=>H.value[o.value]||null),G=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?p.value.length-1:h.value.length-1):u.index=s-1},V=()=>{const{isQuery:e,index:s}=u;s===(e?h.value.length-1:p.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{o.value=o.value>0?o.value-1:H.value.length-1,c.value=w.value.contents.length-1},K=()=>{o.value=o.value<H.value.length-1?o.value+1:0,c.value=0},N=()=>{c.value<w.value.contents.length-1?c.value+=1:K()},W=()=>{c.value>0?c.value-=1:J()},C=e=>e.map(s=>he(s)?s:a(s[0],s[1])),X=e=>{if(e.type==="customField"){const s=me[e.index]||"$content",[n,k=""]=ge(s)?s[Q.value].split("$content"):s.split("$content");return e.display.map(i=>a("div",C([n,...i,k])))}return e.display.map(s=>a("div",C(s)))},R=()=>{o.value=0,c.value=0,l("updateQuery",""),l("close")};return re("keydown",e=>{if(t.isFocusing){if(x.value){if(e.key==="ArrowUp")W();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const s=w.value.contents[c.value];g(t.query),L(s),r.push(D(s)),R()}}else if(f){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",h.value[s]),e.preventDefault()):(r.push(p.value[s].link),R())}}}}),M([o,c],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:E.value?!x.value:!T.value}],id:"search-pro-results"},E.value===""?P?T.value?[m?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},v.value.queryHistory),h.value.map((e,s)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[a(_,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:B,onClick:n=>{n.preventDefault(),n.stopPropagation(),A(s)}})]))])):null,f?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},v.value.resultHistory),p.value.map((e,s)=>a(U,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{R()}},()=>[a(_,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(n=>C(n)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:B,onClick:n=>{n.preventDefault(),n.stopPropagation(),Y(s)}})]))])):null]:v.value.emptyHistory:v.value.emptyResult:z.value?a(ue,{hint:v.value.searching}):x.value?a("ul",{class:"search-pro-result-list"},H.value.map(({title:e,contents:s},n)=>{const k=o.value===n;return a("li",{class:["search-pro-result-list-item",{active:k}]},[a("div",{class:"search-pro-result-title"},e||v.value.defaultTitle),s.map((i,Z)=>{const O=k&&c.value===Z;return a(U,{to:D(i),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{g(t.query),L(i),R()}},()=>[i.type==="text"?null:a(i.type==="title"?ne:i.type==="heading"?ie:oe,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[i.type==="text"&&i.header?a("div",{class:"content-header"},i.header):null,a("div",X(i))])])})])})):v.value.emptyResult)}});export{we as default};
