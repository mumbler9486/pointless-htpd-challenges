import{S as Ke,i as Ge,s as We,a as He,e as B,c as Me,b as G,g as ie,t as J,d as le,f as x,h as z,j as Xe,o as be,k as Ye,l as Qe,m as Ze,n as ge,p as C,q as et,r as tt,u as nt,v as W,w as Se,x as H,y as M,z as Te}from"./chunks/index-37444448.js";import{g as De,f as Ce,s as K,a as ve,b as rt,i as at}from"./chunks/singletons-9c23f8a6.js";const st=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ot=function(r,e){return new URL(r,e).href},qe={},se=function(e,t,c){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=ot(s,c),s in qe)return;qe[s]=!0;const u=s.endsWith(".css"),n=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":st,u||(f.as="script",f.crossOrigin=""),f.href=s,document.head.appendChild(f),u)return new Promise((g,m)=>{f.addEventListener("load",g),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};class we{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ve{constructor(e,t){this.status=e,this.location=t}}function it(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function lt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ct=["href","pathname","search","searchParams","toString","toJSON"];function ft(r,e){const t=new URL(r);for(const c of ct){let s=t[c];Object.defineProperty(t,c,{get(){return e(),s},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(c,s,u)=>u(r,s),ut(t),t}function ut(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const Re=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const c=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;oe.delete(c)}return Re(r,e)};const oe=new Map;function pt(r,e,t){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;t&&typeof t.body=="string"&&(s+=`[data-hash="${dt(t.body)}"]`);const u=document.querySelector(s);if(u!=null&&u.textContent){const{body:n,...f}=JSON.parse(u.textContent),g=u.getAttribute("data-ttl");return g&&oe.set(e,{body:n,init:f,ttl:1e3*Number(g)}),Promise.resolve(new Response(n,f))}return Re(r,t)}function ht(r,e){const t=oe.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);oe.delete(r)}return Re(r,e)}const mt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function _t(r){const e=[],t=[];let c=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(gt).map((u,n,f)=>{const g=decodeURIComponent(u),m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(g);if(m)return e.push(m[1]),t.push(m[2]),"(?:/(.*))?";const y=n===f.length-1;return g&&"/"+g.split(/\[(.+?)\]/).map((L,b)=>{if(b%2){const q=mt.exec(L);if(!q)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,T,N,F]=q;return e.push(N),t.push(F),T?"(.*?)":"([^/]+?)"}return y&&L.includes(".")&&(c=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${c?"/?":""}$`),names:e,types:t}}function gt(r){return!/^\([^)]+\)$/.test(r)}function wt(r,e,t,c){const s={};for(let u=0;u<e.length;u+=1){const n=e[u],f=t[u],g=r[u+1]||"";if(f){const m=c[f];if(!m)throw new Error(`Missing "${f}" param matcher`);if(!m(g))return}s[n]=g}return s}function yt(r,e,t,c){const s=new Set(e);return Object.entries(t).map(([f,[g,m,y]])=>{const{pattern:L,names:b,types:q}=_t(f),T={id:f,exec:N=>{const F=L.exec(N);if(F)return wt(F,b,q,c)},errors:[1,...y||[]].map(N=>r[N]),layouts:[0,...m||[]].map(n),leaf:u(g)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function u(f){const g=f<0;return g&&(f=~f),[g,r[f]]}function n(f){return f===void 0?f:[s.has(f),r[f]]}}function bt(r){let e,t,c;var s=r[0][0];function u(n){return{props:{data:n[2],form:n[1]}}}return s&&(e=new s(u(r))),{c(){e&&W(e.$$.fragment),t=B()},l(n){e&&Se(e.$$.fragment,n),t=B()},m(n,f){e&&H(e,n,f),G(n,t,f),c=!0},p(n,f){const g={};if(f&4&&(g.data=n[2]),f&2&&(g.form=n[1]),s!==(s=n[0][0])){if(e){ie();const m=e;J(m.$$.fragment,1,0,()=>{M(m,1)}),le()}s?(e=new s(u(n)),W(e.$$.fragment),x(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else s&&e.$set(g)},i(n){c||(e&&x(e.$$.fragment,n),c=!0)},o(n){e&&J(e.$$.fragment,n),c=!1},d(n){n&&z(t),e&&M(e,n)}}}function vt(r){let e,t,c;var s=r[0][0];function u(n){return{props:{data:n[2],$$slots:{default:[kt]},$$scope:{ctx:n}}}}return s&&(e=new s(u(r))),{c(){e&&W(e.$$.fragment),t=B()},l(n){e&&Se(e.$$.fragment,n),t=B()},m(n,f){e&&H(e,n,f),G(n,t,f),c=!0},p(n,f){const g={};if(f&4&&(g.data=n[2]),f&523&&(g.$$scope={dirty:f,ctx:n}),s!==(s=n[0][0])){if(e){ie();const m=e;J(m.$$.fragment,1,0,()=>{M(m,1)}),le()}s?(e=new s(u(n)),W(e.$$.fragment),x(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else s&&e.$set(g)},i(n){c||(e&&x(e.$$.fragment,n),c=!0)},o(n){e&&J(e.$$.fragment,n),c=!1},d(n){n&&z(t),e&&M(e,n)}}}function kt(r){let e,t,c;var s=r[0][1];function u(n){return{props:{data:n[3],form:n[1]}}}return s&&(e=new s(u(r))),{c(){e&&W(e.$$.fragment),t=B()},l(n){e&&Se(e.$$.fragment,n),t=B()},m(n,f){e&&H(e,n,f),G(n,t,f),c=!0},p(n,f){const g={};if(f&8&&(g.data=n[3]),f&2&&(g.form=n[1]),s!==(s=n[0][1])){if(e){ie();const m=e;J(m.$$.fragment,1,0,()=>{M(m,1)}),le()}s?(e=new s(u(n)),W(e.$$.fragment),x(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else s&&e.$set(g)},i(n){c||(e&&x(e.$$.fragment,n),c=!0)},o(n){e&&J(e.$$.fragment,n),c=!1},d(n){n&&z(t),e&&M(e,n)}}}function Be(r){let e,t=r[5]&&Je(r);return{c(){e=Ye("div"),t&&t.c(),this.h()},l(c){e=Qe(c,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=Ze(e);t&&t.l(s),s.forEach(z),this.h()},h(){ge(e,"id","svelte-announcer"),ge(e,"aria-live","assertive"),ge(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(c,s){G(c,e,s),t&&t.m(e,null)},p(c,s){c[5]?t?t.p(c,s):(t=Je(c),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(c){c&&z(e),t&&t.d()}}}function Je(r){let e;return{c(){e=et(r[6])},l(t){e=tt(t,r[6])},m(t,c){G(t,e,c)},p(t,c){c&64&&nt(e,t[6])},d(t){t&&z(e)}}}function Et(r){let e,t,c,s,u;const n=[vt,bt],f=[];function g(y,L){return y[0][1]?0:1}e=g(r),t=f[e]=n[e](r);let m=r[4]&&Be(r);return{c(){t.c(),c=He(),m&&m.c(),s=B()},l(y){t.l(y),c=Me(y),m&&m.l(y),s=B()},m(y,L){f[e].m(y,L),G(y,c,L),m&&m.m(y,L),G(y,s,L),u=!0},p(y,[L]){let b=e;e=g(y),e===b?f[e].p(y,L):(ie(),J(f[b],1,1,()=>{f[b]=null}),le(),t=f[e],t?t.p(y,L):(t=f[e]=n[e](y),t.c()),x(t,1),t.m(c.parentNode,c)),y[4]?m?m.p(y,L):(m=Be(y),m.c(),m.m(s.parentNode,s)):m&&(m.d(1),m=null)},i(y){u||(x(t),u=!0)},o(y){J(t),u=!1},d(y){f[e].d(y),y&&z(c),m&&m.d(y),y&&z(s)}}}function St(r,e,t){let{stores:c}=e,{page:s}=e,{components:u}=e,{form:n}=e,{data_0:f=null}=e,{data_1:g=null}=e;Xe(c.page.notify);let m=!1,y=!1,L=null;return be(()=>{const b=c.page.subscribe(()=>{m&&(t(5,y=!0),t(6,L=document.title||"untitled page"))});return t(4,m=!0),b}),r.$$set=b=>{"stores"in b&&t(7,c=b.stores),"page"in b&&t(8,s=b.page),"components"in b&&t(0,u=b.components),"form"in b&&t(1,n=b.form),"data_0"in b&&t(2,f=b.data_0),"data_1"in b&&t(3,g=b.data_1)},r.$$.update=()=>{r.$$.dirty&384&&c.page.set(s)},[u,n,f,g,m,y,L,c,s]}class Rt extends Ke{constructor(e){super(),Ge(this,e,St,Et,We,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const $t={},ce=[()=>se(()=>import("./chunks/0-044bcce3.js"),["chunks/0-044bcce3.js","components/pages/_layout.svelte-a9aceb22.js","assets/_layout-26edef83.css","chunks/index-37444448.js"],import.meta.url),()=>se(()=>import("./chunks/1-a5ea074f.js"),["chunks/1-a5ea074f.js","components/error.svelte-28d3b9bf.js","chunks/index-37444448.js","chunks/singletons-9c23f8a6.js"],import.meta.url),()=>se(()=>import("./chunks/2-9ef84216.js"),["chunks/2-9ef84216.js","components/pages/_page.svelte-844df078.js","chunks/index-37444448.js"],import.meta.url)],Lt=[],Pt={"":[2]},It={handleError:({error:r})=>(console.error(r),{message:"Internal Error"})},Ot="/__data.js",Fe="sveltekit:scroll",V="sveltekit:index",ne=yt(ce,Lt,Pt,$t),ke=ce[0],Ee=ce[1];ke();Ee();let Z={};try{Z=JSON.parse(sessionStorage[Fe])}catch{}function ye(r){Z[r]=ve()}function Ut({target:r,base:e,trailing_slash:t}){var Ae;const c=[];let s=null;const u={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},f=!1,g=!0,m=!1,y=!1,L,b=(Ae=history.state)==null?void 0:Ae[V];b||(b=Date.now(),history.replaceState({...history.state,[V]:b},"",location.href));const q=Z[b];q&&(history.scrollRestoration="manual",scrollTo(q.x,q.y));let T=!1,N,F,ee;async function $e(){ee=ee||Promise.resolve(),await ee,ee=null;const a=new URL(location.href),l=pe(a,!0);s=null,await Pe(l,a,[])}async function fe(a,{noscroll:l=!1,replaceState:d=!1,keepfocus:o=!1,state:i={}},p,h){return typeof a=="string"&&(a=new URL(a,De(document))),he({url:a,scroll:l?ve():null,keepfocus:o,redirect_chain:p,details:{state:i,replaceState:d},nav_token:h,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Le(a){const l=pe(a,!1);if(!l)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s={id:l.id,promise:Ue(l)},s.promise}async function Pe(a,l,d,o,i={},p){var v,k;F=i;let h=a&&await Ue(a);if(!h&&l.origin===location.origin&&l.pathname===location.pathname&&(h=await te({status:404,error:new Error(`Not found: ${l.pathname}`),url:l,routeId:null})),!h)return await Y(l),!1;if(l=(a==null?void 0:a.url)||l,F!==i)return!1;if(h.type==="redirect")if(d.length>10||d.includes(l.pathname))h=await te({status:500,error:new Error("Redirect loop"),url:l,routeId:null});else return fe(new URL(h.location,l).href,{},[...d,l.pathname],i),!1;else((k=(v=h.props)==null?void 0:v.page)==null?void 0:k.status)>=400&&await K.updated.check()&&await Y(l);if(c.length=0,y=!1,m=!0,o&&o.details){const{details:w}=o,E=w.replaceState?0:1;w.state[V]=b+=E,history[w.replaceState?"replaceState":"pushState"](w.state,"",l)}if(s=null,f){n=h.state,h.props.page&&(h.props.page.url=l);const w=ae();L.$set(h.props),w()}else Ie(h);if(o){const{scroll:w,keepfocus:E}=o;if(!E){const S=document.body,P=S.getAttribute("tabindex");S.tabIndex=-1,S.focus({preventScroll:!0}),setTimeout(()=>{var I;(I=getSelection())==null||I.removeAllRanges()}),P!==null?S.setAttribute("tabindex",P):S.removeAttribute("tabindex")}if(await Te(),g){const S=l.hash&&document.getElementById(l.hash.slice(1));w?scrollTo(w.x,w.y):S?S.scrollIntoView():scrollTo(0,0)}}else await Te();g=!0,h.props.page&&(N=h.props.page),p&&p(),m=!1}function Ie(a){var i,p;n=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),N=a.props.page;const d=ae();L=new Rt({target:r,props:{...a.props,stores:K},hydrate:!0}),d();const o={from:null,to:re("to",{params:n.params,routeId:(p=(i=n.route)==null?void 0:i.id)!=null?p:null,url:new URL(location.href)}),type:"load"};u.after_navigate.forEach(h=>h(o)),f=!0}async function X({url:a,params:l,branch:d,status:o,error:i,route:p,form:h}){var P;const v=d.filter(Boolean),k={type:"loaded",state:{url:a,params:l,branch:d,error:i,route:p},props:{components:v.map(I=>I.node.component)}};h!==void 0&&(k.props.form=h);let w={},E=!N;for(let I=0;I<v.length;I+=1){const U=v[I];w={...w,...U.data},(E||!n.branch.some(j=>j===U))&&(k.props[`data_${I}`]=w,E=E||Object.keys((P=U.data)!=null?P:{}).length>0)}if(E||(E=Object.keys(N.data).length!==Object.keys(w).length),!n.url||a.href!==n.url.href||n.error!==i||E){k.props.page={error:i,params:l,routeId:p&&p.id,status:o,url:a,data:E?w:N.data};const I=(U,j)=>{Object.defineProperty(k.props.page,U,{get:()=>{throw new Error(`$page.${U} has been replaced by $page.url.${j}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return k}async function ue({loader:a,parent:l,url:d,params:o,routeId:i,server_data_node:p}){var w,E,S,P,I;let h=null;const v={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await a();if((w=k.shared)!=null&&w.load){let U=function(...$){for(const _ of $){const{href:R}=new URL(_,d);v.dependencies.add(R)}};const j={routeId:i,params:new Proxy(o,{get:($,_)=>(v.params.add(_),$[_])}),data:(E=p==null?void 0:p.data)!=null?E:null,url:ft(d,()=>{v.url=!0}),async fetch($,_){let R;typeof $=="string"?R=$:(R=$.url,_={body:$.method==="GET"||$.method==="HEAD"?void 0:await $.blob(),cache:$.cache,credentials:$.credentials,headers:$.headers,integrity:$.integrity,keepalive:$.keepalive,method:$.method,mode:$.mode,redirect:$.redirect,referrer:$.referrer,referrerPolicy:$.referrerPolicy,signal:$.signal,..._});const A=new URL(R,d).href;return U(A),f?ht(A,_):pt(R,A,_)},setHeaders:()=>{},depends:U,parent(){return v.parent=!0,l()}};Object.defineProperties(j,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),h=(S=await k.shared.load.call(null,j))!=null?S:null}return{node:k,loader:a,server:p,shared:(P=k.shared)!=null&&P.load?{type:"data",data:h,uses:v}:null,data:(I=h!=null?h:p==null?void 0:p.data)!=null?I:null}}function Oe(a,l,d,o){if(y)return!0;if(!d)return!1;if(d.parent&&l||d.url&&a)return!0;for(const i of d.params)if(o[i]!==n.params[i])return!0;for(const i of d.dependencies)if(c.some(p=>p(new URL(i))))return!0;return!1}function de(a,l){var d,o;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((d=a.uses.dependencies)!=null?d:[]),params:new Set((o=a.uses.params)!=null?o:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function Ue({id:a,invalidating:l,url:d,params:o,route:i}){var $;if((s==null?void 0:s.id)===a)return s.promise;const{errors:p,layouts:h,leaf:v}=i,k=[...h,v];p.forEach(_=>_==null?void 0:_().catch(()=>{})),k.forEach(_=>_==null?void 0:_[1]().catch(()=>{}));let w=null;const E=n.url?a!==n.url.pathname+n.url.search:!1,S=k.reduce((_,R,A)=>{var D;const O=n.branch[A],Q=!!(R!=null&&R[0])&&((O==null?void 0:O.loader)!==R[1]||Oe(E,_.some(Boolean),(D=O.server)==null?void 0:D.uses,o));return _.push(Q),_},[]);if(S.some(Boolean)){try{w=await xe(d,S)}catch(_){return te({status:500,error:_,url:d,routeId:i.id})}if(w.type==="redirect")return w}const P=w==null?void 0:w.nodes;let I=!1;const U=k.map(async(_,R)=>{var D;if(!_)return;const A=n.branch[R],O=P==null?void 0:P[R];if((!O||O.type==="skip")&&_[1]===(A==null?void 0:A.loader)&&!Oe(E,I,(D=A.shared)==null?void 0:D.uses,o))return A;if(I=!0,(O==null?void 0:O.type)==="error")throw O;return ue({loader:_[1],url:d,params:o,routeId:i.id,parent:async()=>{var Ne;const me={};for(let _e=0;_e<R;_e+=1)Object.assign(me,(Ne=await U[_e])==null?void 0:Ne.data);return me},server_data_node:de(O===void 0&&_[0]?{type:"skip"}:O!=null?O:null,A==null?void 0:A.server)})});for(const _ of U)_.catch(()=>{});const j=[];for(let _=0;_<k.length;_+=1)if(k[_])try{j.push(await U[_])}catch(R){if(R instanceof Ve)return{type:"redirect",location:R.location};let A=500,O;for(P!=null&&P.includes(R)?(A=($=R.status)!=null?$:A,O=R.error):R instanceof we?(A=R.status,O=R.body):O=ze(R,{params:o,url:d,routeId:i.id});_--;)if(p[_]){let Q,D=_;for(;!j[D];)D-=1;try{return Q={node:await p[_](),loader:p[_],data:{},server:null,shared:null},await X({url:d,params:o,branch:j.slice(0,D+1).concat(Q),status:A,error:O,route:i})}catch{continue}}await Y(d);return}else j.push(void 0);return await X({url:d,params:o,branch:j,status:200,error:null,route:i,form:l?void 0:null})}async function te({status:a,error:l,url:d,routeId:o}){var w;const i={},p=await ke();let h=null;if(p.server)try{const E=await xe(d,[!0]);if(E.type!=="data"||E.nodes[0]&&E.nodes[0].type!=="data")throw 0;h=(w=E.nodes[0])!=null?w:null}catch{await Y(d);return}const v=await ue({loader:ke,url:d,params:i,routeId:o,parent:()=>Promise.resolve({}),server_data_node:de(h)}),k={node:await Ee(),loader:Ee,shared:null,server:null,data:null};return await X({url:d,params:i,branch:[v,k],status:a,error:l instanceof we?l.body:ze(l,{url:d,params:i,routeId:null}),route:null})}function pe(a,l){if(je(a))return;const d=decodeURI(a.pathname.slice(e.length)||"/");for(const o of ne){const i=o.exec(d);if(i){const p=new URL(a.origin+it(a.pathname,t)+a.search+a.hash);return{id:p.pathname+p.search,invalidating:l,route:o,params:lt(i),url:p}}}}function je(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function he({url:a,scroll:l,keepfocus:d,redirect_chain:o,details:i,type:p,delta:h,nav_token:v,accepted:k,blocked:w}){var U,j,$,_;let E=!1;const S=pe(a,!1),P={from:re("from",{params:n.params,routeId:(j=(U=n.route)==null?void 0:U.id)!=null?j:null,url:n.url}),to:re("to",{params:($=S==null?void 0:S.params)!=null?$:null,routeId:(_=S==null?void 0:S.route.id)!=null?_:null,url:a}),type:p};h!==void 0&&(P.delta=h);const I={...P,cancel:()=>{E=!0}};if(u.before_navigate.forEach(R=>R(I)),E){w();return}ye(b),k(),f&&K.navigating.set(P),await Pe(S,a,o,{scroll:l,keepfocus:d,details:i},v,()=>{u.after_navigate.forEach(R=>R(P)),K.navigating.set(null)})}function Y(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{be(()=>(u.after_navigate.push(a),()=>{const l=u.after_navigate.indexOf(a);u.after_navigate.splice(l,1)}))},before_navigate:a=>{be(()=>(u.before_navigate.push(a),()=>{const l=u.before_navigate.indexOf(a);u.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(m||!f)&&(g=!1)},goto:(a,l={})=>fe(a,l,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")c.push(a);else{const{href:l}=new URL(a,location.href);c.push(d=>d.href===l)}return $e()},invalidateAll:()=>(y=!0,$e()),prefetch:async a=>{const l=new URL(a,De(document));await Le(l)},prefetch_routes:async a=>{const d=(a?ne.filter(o=>a.some(i=>o.exec(i))):ne).map(o=>Promise.all([...o.layouts,o.leaf].map(i=>i==null?void 0:i[1]())));await Promise.all(d)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:d,route:o}=n;if(!o)return;let i=n.branch.length;for(;i--;)if(o.errors[i]){let p,h=i;for(;!d[h];)h-=1;try{p={node:await o.errors[i](),loader:o.errors[i],data:{},server:null,shared:null};const v=await X({url:l,params:n.params,branch:d.slice(0,h+1).concat(p),status:500,error:a.error,route:o});n=v.state;const k=ae();L.$set(v.props),k();return}catch{continue}}}else if(a.type==="redirect")fe(a.location,{},[]);else{const l={form:a.data};a.status!==N.status&&(l.page={...N,status:a.status});const d=ae();L.$set(l),d()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var h,v;let i=!1;const p={from:re("from",{params:n.params,routeId:(v=(h=n.route)==null?void 0:h.id)!=null?v:null,url:n.url}),to:null,type:"unload",cancel:()=>i=!0};u.before_navigate.forEach(k=>k(p)),i?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(b);try{sessionStorage[Fe]=JSON.stringify(Z)}catch{}}});const a=o=>{const{url:i,options:p}=Ce(o);if(i&&p.prefetch){if(je(i))return;Le(i)}};let l;const d=o=>{clearTimeout(l),l=setTimeout(()=>{var i;(i=o.target)==null||i.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const{a:i,url:p,options:h}=Ce(o);if(!i||!p)return;const v=i instanceof SVGAElement;if(!v&&!(p.protocol==="https:"||p.protocol==="http:"))return;const k=(i.getAttribute("rel")||"").split(/\s+/);if(i.hasAttribute("download")||k.includes("external")||h.reload||(v?i.target.baseVal:i.target))return;const[w,E]=p.href.split("#");if(E!==void 0&&w===location.href.split("#")[0]){T=!0,ye(b),n.url=p,K.page.set({...N,url:p}),K.page.notify();return}he({url:p,scroll:h.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),addEventListener("popstate",o=>{if(o.state){if(o.state[V]===b)return;const i=o.state[V]-b;he({url:new URL(location.href),scroll:Z[o.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{b=o.state[V]},blocked:()=>{history.go(-i)},type:"popstate",delta:i})}}),addEventListener("hashchange",()=>{T&&(T=!1,history.replaceState({...history.state,[V]:++b},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&K.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:d,params:o,routeId:i,data:p,form:h})=>{var w;const v=new URL(location.href);let k;try{const E=d.map(async(S,P)=>{const I=p[P];return ue({loader:ce[S],url:v,params:o,routeId:i,parent:async()=>{const U={};for(let j=0;j<P;j+=1)Object.assign(U,(await E[j]).data);return U},server_data_node:de(I)})});k=await X({url:v,params:o,branch:await Promise.all(E),status:a,error:l,form:h,route:(w=ne.find(S=>S.id===i))!=null?w:null})}catch(E){const S=E;if(S instanceof Ve){await Y(new URL(E.location,location.href));return}k=await te({status:S instanceof we?S.status:500,error:S,url:v,routeId:i})}Ie(k)}}}let jt=1;async function xe(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+Ot,t.searchParams.set("__invalid",e.map(s=>s?"y":"n").join("")),t.searchParams.set("__id",String(jt++)),await se(()=>import(t.href),[],import.meta.url);const c=window.__sveltekit_data;return delete window.__sveltekit_data,c}function ze(r,e){var t;return(t=It.handleError({error:r,event:e}))!=null?t:{message:e.routeId?"Internal Error":"Not Found"}}const At=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function re(r,e){for(const t of At)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return e}function ae(){return()=>{}}async function Dt({env:r,hydrate:e,paths:t,target:c,trailing_slash:s}){rt(t);const u=Ut({target:c,base:t.base,trailing_slash:s});at({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{Dt as start};
