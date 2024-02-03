const e=Symbol("solid-track"),t={equals:(e,t)=>e===t};let s=A;const n=1,r=2,o={owned:null,cleanups:null,context:null,owner:null};var i=null;let a=null,l=null,c=null,u=null,f=0;function d(e,t){const s=l,n=i,r=0===e.length,a=void 0===t?n:t,c=r?o:{owned:null,cleanups:null,context:a?a.context:null,owner:a},u=r?e:()=>e((()=>y((()=>U(c)))));i=c,l=null;try{return S(u,!0)}finally{l=s,i=n}}function h(e,s){const n={value:e,observers:null,observerSlots:null,comparator:(s=s?Object.assign({},t,s):t).equals||void 0};return[g.bind(n),e=>("function"==typeof e&&(e=e(n.value)),m(n,e))]}function p(e,t,s){v(w(e,t,!1,n))}function y(e){if(null===l)return e();const t=l;l=null;try{return e()}finally{l=t}}function g(){if(this.sources&&this.state)if(this.state===n)v(this);else{const e=c;c=null,S((()=>x(this)),!1),c=e}if(l){const e=this.observers?this.observers.length:0;l.sources?(l.sources.push(this),l.sourceSlots.push(e)):(l.sources=[this],l.sourceSlots=[e]),this.observers?(this.observers.push(l),this.observerSlots.push(l.sources.length-1)):(this.observers=[l],this.observerSlots=[l.sources.length-1])}return this.value}function m(e,t,s){let r=e.value;return e.comparator&&e.comparator(r,t)||(e.value=t,e.observers&&e.observers.length&&S((()=>{for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t],r=a&&a.running;r&&a.disposed.has(s),(r?s.tState:s.state)||(s.pure?c.push(s):u.push(s),s.observers&&C(s)),r||(s.state=n)}if(c.length>1e6)throw c=[],new Error}),!1)),t}function v(e){if(!e.fn)return;U(e);const t=f;!function(e,t,s){let r;const o=i,a=l;l=i=e;try{r=e.fn(t)}catch(c){return e.pure&&(e.state=n,e.owned&&e.owned.forEach(U),e.owned=null),e.updatedAt=s+1,k(c)}finally{l=a,i=o}(!e.updatedAt||e.updatedAt<=s)&&(null!=e.updatedAt&&"observers"in e?m(e,r):e.value=r,e.updatedAt=s)}(e,e.value,t)}function w(e,t,s,r=n,a){const l={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:i,context:i?i.context:null,pure:s};return null===i||i!==o&&(i.owned?i.owned.push(l):i.owned=[l]),l}function b(e){if(0===e.state)return;if(e.state===r)return x(e);if(e.suspense&&y(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<f);)e.state&&t.push(e);for(let s=t.length-1;s>=0;s--)if((e=t[s]).state===n)v(e);else if(e.state===r){const s=c;c=null,S((()=>x(e,t[0])),!1),c=s}}function S(e,t){if(c)return e();let n=!1;t||(c=[]),u?n=!0:u=[],f++;try{const t=e();return function(e){if(c&&(A(c),c=null),e)return;const t=u;u=null,t.length&&S((()=>s(t)),!1)}(n),t}catch(r){n||(u=null),c=null,k(r)}}function A(e){for(let t=0;t<e.length;t++)b(e[t])}function x(e,t){e.state=0;for(let s=0;s<e.sources.length;s+=1){const o=e.sources[s];if(o.sources){const e=o.state;e===n?o!==t&&(!o.updatedAt||o.updatedAt<f)&&b(o):e===r&&x(o,t)}}}function C(e){for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];s.state||(s.state=r,s.pure?c.push(s):u.push(s),s.observers&&C(s))}}function U(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),n=t.observers;if(n&&n.length){const e=n.pop(),r=t.observerSlots.pop();s<n.length&&(e.sourceSlots[r]=s,n[s]=e,t.observerSlots[s]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)U(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function k(e,t=i){const s=function(e){return e instanceof Error?e:new Error("string"==typeof e?e:"Unknown error",{cause:e})}(e);throw s}const T=Symbol("fallback");function E(e){for(let t=0;t<e.length;t++)e[t]()}function N(e,t){return y((()=>e(t||{})))}function I(s){const n="fallback"in s&&{fallback:()=>s.fallback};return function(e,s,n){n=n?Object.assign({},t,n):t;const r=w(e,void 0,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,v(r),g.bind(r)}(function(t,s,n={}){let r=[],o=[],a=[],l=0,c=s.length>1?[]:null;var u;return u=()=>E(a),null===i||(null===i.cleanups?i.cleanups=[u]:i.cleanups.push(u)),()=>{let i,u,f=t()||[];return f[e],y((()=>{let e,t,s,h,y,g,m,v,w,b=f.length;if(0===b)0!==l&&(E(a),a=[],r=[],o=[],l=0,c&&(c=[])),n.fallback&&(r=[T],o[0]=d((e=>(a[0]=e,n.fallback()))),l=1);else if(0===l){for(o=new Array(b),u=0;u<b;u++)r[u]=f[u],o[u]=d(p);l=b}else{for(s=new Array(b),h=new Array(b),c&&(y=new Array(b)),g=0,m=Math.min(l,b);g<m&&r[g]===f[g];g++);for(m=l-1,v=b-1;m>=g&&v>=g&&r[m]===f[v];m--,v--)s[v]=o[m],h[v]=a[m],c&&(y[v]=c[m]);for(e=new Map,t=new Array(v+1),u=v;u>=g;u--)w=f[u],i=e.get(w),t[u]=void 0===i?-1:i,e.set(w,u);for(i=g;i<=m;i++)w=r[i],u=e.get(w),void 0!==u&&-1!==u?(s[u]=o[i],h[u]=a[i],c&&(y[u]=c[i]),u=t[u],e.set(w,u)):a[i]();for(u=g;u<b;u++)u in s?(o[u]=s[u],a[u]=h[u],c&&(c[u]=y[u],c[u](u))):o[u]=d(p);o=o.slice(0,l=b),r=f.slice(0)}return o}));function p(e){if(a[u]=e,c){const[e,t]=h(u);return c[u]=t,s(f[u],e)}return s(f[u])}}}((()=>s.each),s.children,n||void 0))}function R(e,t,s){let n;const r=()=>{const t=document.createElement("template");return t.innerHTML=e,s?t.content.firstChild.firstChild:t.content.firstChild},o=t?()=>y((()=>document.importNode(n||(n=r()),!0))):()=>(n||(n=r())).cloneNode(!0);return o.cloneNode=o,o}function D(e,t,s){null==s?e.removeAttribute(t):e.setAttribute(t,s)}function B(e,t,s,n){if(void 0===s||n||(n=[]),"function"!=typeof t)return F(e,t,n,s);p((n=>F(e,t(),n,s)),n)}function F(e,t,s,n,r){for(;"function"==typeof s;)s=s();if(t===s)return s;const o=typeof t,i=void 0!==n;if(e=i&&s[0]&&s[0].parentNode||e,"string"===o||"number"===o)if("number"===o&&(t=t.toString()),i){let r=s[0];r&&3===r.nodeType?r.data!==t&&(r.data=t):r=document.createTextNode(t),s=$(e,s,n,r)}else s=""!==s&&"string"==typeof s?e.firstChild.data=t:e.textContent=t;else if(null==t||"boolean"===o)s=$(e,s,n);else{if("function"===o)return p((()=>{let r=t();for(;"function"==typeof r;)r=r();s=F(e,r,s,n)})),()=>s;if(Array.isArray(t)){const o=[],a=s&&Array.isArray(s);if(M(o,t,s,r))return p((()=>s=F(e,o,s,n,!0))),()=>s;if(0===o.length){if(s=$(e,s,n),i)return s}else a?0===s.length?P(e,o,n):function(e,t,s){let n=s.length,r=t.length,o=n,i=0,a=0,l=t[r-1].nextSibling,c=null;for(;i<r||a<o;)if(t[i]!==s[a]){for(;t[r-1]===s[o-1];)r--,o--;if(r===i){const t=o<n?a?s[a-1].nextSibling:s[o-a]:l;for(;a<o;)e.insertBefore(s[a++],t)}else if(o===a)for(;i<r;)c&&c.has(t[i])||t[i].remove(),i++;else if(t[i]===s[o-1]&&s[a]===t[r-1]){const n=t[--r].nextSibling;e.insertBefore(s[a++],t[i++].nextSibling),e.insertBefore(s[--o],n),t[r]=s[o]}else{if(!c){c=new Map;let e=a;for(;e<o;)c.set(s[e],e++)}const n=c.get(t[i]);if(null!=n)if(a<n&&n<o){let l,u=i,f=1;for(;++u<r&&u<o&&null!=(l=c.get(t[u]))&&l===n+f;)f++;if(f>n-a){const r=t[i];for(;a<n;)e.insertBefore(s[a++],r)}else e.replaceChild(s[a++],t[i++])}else i++;else t[i++].remove()}}else i++,a++}(e,s,o):(s&&$(e),P(e,o));s=o}else if(t.nodeType){if(Array.isArray(s)){if(i)return s=$(e,s,n,t);$(e,s,null,t)}else null!=s&&""!==s&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);s=t}}return s}function M(e,t,s,n){let r=!1;for(let o=0,i=t.length;o<i;o++){let i,a=t[o],l=s&&s[o];if(null==a||!0===a||!1===a);else if("object"==(i=typeof a)&&a.nodeType)e.push(a);else if(Array.isArray(a))r=M(e,a,l)||r;else if("function"===i)if(n){for(;"function"==typeof a;)a=a();r=M(e,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||r}else e.push(a),r=!0;else{const t=String(a);l&&3===l.nodeType&&l.data===t?e.push(l):e.push(document.createTextNode(t))}}return r}function P(e,t,s=null){for(let n=0,r=t.length;n<r;n++)e.insertBefore(t[n],s)}function $(e,t,s,n){if(void 0===s)return e.textContent="";const r=n||document.createTextNode("");if(t.length){let n=!1;for(let o=t.length-1;o>=0;o--){const i=t[o];if(r!==i){const t=i.parentNode===e;n||o?t&&i.remove():t?e.replaceChild(r,i):e.insertBefore(r,s)}else n=!0}}else e.insertBefore(r,s);return[r]}class L{#e;on(e,t){let s,n;return s=this.#e,void 0===s?s=this.#e=Object.create(null):n=s[e],void 0===n?s[e]=t:"function"==typeof n?s[e]=[n,t]:n.push(t),()=>this.off(e,t)}off(e,t){const s=this.#e;if(void 0===s)return;const n=s[e];if(null!=n)if(n===t)delete s[e];else if("function"!=typeof n){const r=n.indexOf(t);-1!==r&&(2===n.length?s[e]=n[0===r?1:0]:n.splice(r,1))}}emit(e,...t){const s=this.#e;if(void 0===s)return;const n=s[e];if(void 0!==n)if("function"==typeof n)n.apply(this,t);else{const e=n.slice();for(let s=0,n=e.length;s<n;s++)e[s].apply(this,t)}}}const J=e=>{const t=e.split(".")[1];let s;if("string"!=typeof t)throw new Error("invalid token: missing part 2");try{s=(e=>{var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return(e=>decodeURIComponent(atob(e).replace(/(.)/g,((e,t)=>{let s=t.charCodeAt(0).toString(16).toUpperCase();return s.length<2&&(s="0"+s),"%"+s}))))(t)}catch(s){return atob(t)}})(t)}catch(n){throw new Error("invalid token: invalid b64 for part 2 ("+n.message+")")}try{return JSON.parse(s)}catch(n){throw new Error("invalid token: invalid json for part 2 ("+n.message+")")}},O=new TextEncoder,j=new TextDecoder;class q{constructor(e,t){this.data=e,this.headers=t}success=!0}class z extends Error{constructor(e,t,s,n){super(s||t),this.status=e,this.error=t,this.name="XRPCError",this.headers=n}success=!1;headers}var _=(e=>(e[e.Unknown=1]="Unknown",e[e.InvalidResponse=2]="InvalidResponse",e[e.Success=200]="Success",e[e.InvalidRequest=400]="InvalidRequest",e[e.AuthRequired=401]="AuthRequired",e[e.Forbidden=403]="Forbidden",e[e.XRPCNotSupported=404]="XRPCNotSupported",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.RateLimitExceeded=429]="RateLimitExceeded",e[e.InternalServerError=500]="InternalServerError",e[e.MethodNotImplemented=501]="MethodNotImplemented",e[e.UpstreamFailure=502]="UpstreamFailure",e[e.NotEnoughResouces=503]="NotEnoughResouces",e[e.UpstreamTimeout=504]="UpstreamTimeout",e))(_||{});const H=e=>e in _?e:e>=100&&e<200?404:e>=200&&e<300?200:e>=300&&e<400?404:e>=400&&e<500?400:500,Z=(e,t)=>{if(e["Content-Type"]&&void 0!==t)return t instanceof ArrayBuffer||t instanceof Blob?t:e["Content-Type"].startsWith("text/")?O.encode(t.toString()):e["Content-Type"].startsWith("application/json")?O.encode(JSON.stringify(t)):t},W=(e,t)=>{if(e){if(e.includes("application/json")&&t?.byteLength)try{const e=j.decode(t);return JSON.parse(e)}catch(s){throw new z(2,`Failed to parse response body: ${String(s)}`)}if(e.startsWith("text/")&&t?.byteLength)try{return j.decode(t)}catch(s){throw new z(2,`Failed to parse response body: ${String(s)}`)}}return t instanceof ArrayBuffer?new Uint8Array(t):t},X=(e,t)=>{if(!e)return!1;const s=typeof e.error,n=typeof e.message;return("undefined"===s||"string"===s)&&("undefined"===n||"string"===n)&&(!t||t.includes(e.error))},K=async(e,t,s,n,r)=>{try{const o={signal:r,method:t,headers:s,body:Z(s,n),duplex:"half"},i=await fetch(e,o),a=await i.arrayBuffer();return{status:i.status,headers:Object.fromEntries(i.headers.entries()),body:W(i.headers.get("content-type"),a)}}catch(o){throw new z(_.Unknown,String(o))}};class V{constructor(e,t=K){this.serviceUri=e,this.fetch=t}get(e,t){return this.#t({type:"get",method:e,...t})}call(e,t){return this.#t({type:"post",method:e,...t})}async#t(e){const{type:t,method:s,params:n,data:r,encoding:o,headers:i={},signal:a}=e,l=((e,t,s)=>{const n=new URL(`/xrpc/${e}`,t);if(s)for(const r in s){const e=s[r];if(void 0!==e)if(Array.isArray(e))for(let t=0,s=e.length;t<s;t++){const s=e[t];n.searchParams.append(r,s)}else n.searchParams.set(r,e)}return n.toString()})(s,this.serviceUri,n),c=((e,t,s,n)=>("post"===t&&(s&&"object"==typeof s&&(e["Content-Type"]||(e["Content-Type"]="application/json")),n&&(e["Content-Type"]=n)),e))(i,t,r,o),u=await this.fetch(l,t,c,r,a),f=H(u.status);if(f===_.Success)return new q(u.body,u.headers);throw u.body&&X(u.body)?new z(f,u.body.error,u.body.message):new z(f)}}const Y=(e,t,s)=>{const n=e.id+t,r=e.service?.find((e=>e.id===t||e.id===n));if(r&&r.type===s&&"string"==typeof r.serviceEndpoint)return G(r.serviceEndpoint)},G=e=>{let t;try{t=new URL(e)}catch{return}const s=t.protocol;if(t.hostname&&("http:"===s||"https:"===s))return e},Q=36e5,ee=24*Q,te=7*ee,se=4*te,ne=12*se,re=new Intl.DateTimeFormat("en-US",{dateStyle:"medium"}),oe=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}),ie=new Intl.DateTimeFormat("en-US",{dateStyle:"long",timeStyle:"short"}),ae={};var le=R('<div><small><a href=https://mary.my.id>« other bluesky stuff</a></small><h3>Bluesky quiet posters</h3><p>List of your follows sorted by least active</p><form class=input-form><input type=text name=handle required placeholder=example.bsky.social pattern=@?([a-zA-Z0-9\\-]+(?:\\.[a-zA-Z0-9\\-]+)*(?:\\.[a-zA-Z]+))|did:[a-z]+:[a-zA-Z0-9._\\-]+ title="Bluesky handle or DID"><button type=submit>Go!</button></form><hr><div class=message-info></div><div class=profile-list>'),ce=R("<a target=_blank class=profile><img loading=lazy class=profile-avatar><div class=profile-info><p class=profile-name></p><div class=profile-subinfo><span class=profile-handle>@</span><span aria-hidden=true class=dot>·"),ue=R("<span class=profile-activity>"),fe=R('<span class="profile-activity is-empty">no activity'),de=R("<span aria-hidden=true class=dot>·"),he=R("<span class=profile-mutuals>mutuals");const pe=new class extends L{rpc;fetch;serviceUri;session;#s;constructor(e){super(),this.fetch=e.fetch??K,this.serviceUri=e.serviceUri,this.rpc=new V(this.serviceUri),this.rpc.fetch=this.#n.bind(this)}async login(e){this.#r();const t=await this.rpc.call("com.atproto.server.createSession",{data:{identifier:e.identifier,password:e.password}});return this.#o(t.data)}async resumeSession(e){const t=Date.now()/1e3+300;if(t>=J(e.refreshJwt).exp)throw new Error("INVALID_TOKEN");const s=J(e.accessJwt);if(this.#r(e),t>=s.exp?await this.#i():this.rpc.get("com.atproto.server.getSession",{}).then((e=>{const t=this.session,s=e.data;t&&this.#o({...t,handle:s.handle,didDoc:s.didDoc,email:s.email,emailConfirmed:s.emailConfirmed})})),!this.session)throw new Error("INVALID_TOKEN");return this.session}async#n(e,t,s,n,r){await this.#s;let o=await this.fetch(e,t,this.#a(s),n,r);return X(o.body,["ExpiredToken"])&&this.session?.refreshJwt&&(await this.#i(),this.session&&(o=await this.fetch(e,t,this.#a(s),n,r))),o}#a(e){const t=this.session;return!e.authorization&&t?{...e,authorization:`Bearer ${t.accessJwt}`}:e}async#i(){if(this.#s)return this.#s;this.#s=this.#l();try{await this.#s}finally{this.#s=void 0}}async#l(){const e=this.session;if(!e||!e.refreshJwt)return;const t=new URL("/xrpc/com.atproto.server.refreshSession",e.pdsUri||this.serviceUri),s=await this.fetch(t.toString(),"POST",{authorization:`Bearer ${e.refreshJwt}`},void 0,void 0);X(s.body,["ExpiredToken","InvalidToken"])?(this.#r(),this.emit("sessionExpired")):H(s.status)===_.Success&&(this.#o(s.body),this.emit("sessionUpdate",this.session))}#r(e){this.session=e,this.rpc.serviceUri=e&&e.pdsUri||this.serviceUri}#o(e){const t=e.didDoc;let s;return t&&(s=Y(t,"#atproto_pds","AtprotoPersonalDataServer")),this.rpc.serviceUri=s||this.serviceUri,this.session={accessJwt:e.accessJwt,refreshJwt:e.refreshJwt,handle:e.handle,did:e.did,pdsUri:s,email:e.email,emailConfirmed:e.emailConfirmed}}}({serviceUri:"https://api.bsky.app"}),ye=[],ge=(e,t)=>(e.lastActivity??-1)-(t.lastActivity??-1),me=()=>{let e;const[t,s]=h(),[n,r]=h(ye);return l=(a=(i=(o=le()).firstChild.nextSibling.nextSibling.nextSibling).nextSibling.nextSibling).nextSibling,i.addEventListener("submit",(t=>{const n=new FormData(t.currentTarget);t.preventDefault();const o=n.get("handle").replace(/^@/,"");e?.abort(),e=new AbortController;const i=e.signal;r(ye),(async(e,t)=>{let n,o=[],i=new Set;e.startsWith("did:")?n=e:(s("Resolving your handle"),n=(await pe.rpc.get("com.atproto.identity.resolveHandle",{signal:t,params:{handle:e}})).data.did);{let e;do{s(`Retrieving your follows (${o.length} users)`);const r=(await pe.rpc.get("app.bsky.graph.getFollows",{signal:t,params:{actor:n,cursor:e}})).data;o=o.concat(r.follows),e=r.cursor}while(void 0!==e)}{const e=o.map((e=>e.did)),r=ve(e,30);for(let o=0,a=r.length;o<a;o++){s(`Retrieving your follow relationships (${o+1}/${a})`);const e=r[o],l=(await pe.rpc.get("app.bsky.graph.getRelationships",{signal:t,params:{actor:n,others:e}})).data.relationships;for(let t=0,s=l.length;t<s;t++){const e=l[t];"app.bsky.graph.defs#relationship"===e.$type&&e.followedBy&&e.following&&i.add(e.did)}}}let a=[];for(let l=0,c=o.length;l<c;l++){const e=o[l];s(`Retrieving @${e.handle} (${l+1}/${c})`);const n=(await pe.rpc.get("app.bsky.feed.getAuthorFeed",{signal:t,params:{actor:e.did,limit:1}})).data.feed;let u;for(let t=0,s=n.length;t<s;t++){const{post:e,reason:s}=n[t],r=new Date(s?s.indexedAt:e.indexedAt);u??=r.getTime()}a=a.concat({profile:e,mutuals:i.has(e.did),lastActivity:u}),a.sort(ge),r(a)}s(void 0)})(o,i).catch((e=>{i.aborted||s(`Oops, an error occured. ${e}`)}))})),B(a,t),B(l,N(I,{get each(){return n()},children:({profile:e,mutuals:t,lastActivity:s})=>{const n=`https://bsky.app/profile/${e.did}`;return(c=(l=(a=(i=(o=ce()).firstChild).nextSibling.firstChild).nextSibling).firstChild).firstChild,c.nextSibling,D(o,"href",n),D(i,"src",e.avatar||"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='80'%20height='80'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3ccircle%20cx='12'%20cy='12'%20r='12'%20fill='%230070ff'/%3e%3ccircle%20cx='12'%20cy='9.5'%20r='3.5'%20fill='%23fff'/%3e%3cpath%20fill='%23fff'%20d='M12.058%2022.784c-2.636%200-5.051-.948-6.921-2.522.53-2.274%203.397-4.012%206.853-4.012%203.504%200%206.401%201.786%206.874%204.107-1.854%201.517-4.224%202.427-6.806%202.427Z'/%3e%3c/svg%3e"),B(a,e.displayName||`@${e.handle}`),B(c,e.handle,null),B(l,void 0!==s?(D(r=ue(),"title",(e=>{const t=new Date(e);return ie.format(t)})(s)),B(r,((e,t=new Date)=>{const s=new Date(e),n=s.getTime(),r=Math.abs(n-t.getTime());if(r>te)return s.getFullYear()===t.getFullYear()?oe.format(s):re.format(s);const[o,i]=(e=>e<1e3?[0,"second"]:e<6e4?[Math.trunc(e/1e3),"second"]:e<Q?[Math.trunc(e/6e4),"minute"]:e<ee?[Math.trunc(e/Q),"hour"]:e<te?[Math.trunc(e/ee),"day"]:e<se?[Math.trunc(e/te),"week"]:e<ne?[Math.trunc(e/se),"month"]:[Math.trunc(e/ne),"year"])(r);return(ae[i]||=new Intl.NumberFormat("en-US",{style:"unit",unit:i,unitDisplay:"narrow"})).format(Math.abs(o))})(s)),r):fe(),null),B(l,t?[de(),he()]:null,null),o;var r,o,i,a,l,c}})),o;var o,i,a,l},ve=(e,t)=>{const s=[];for(let n=0,r=e.length;n<r;n+=t)s.push(e.slice(n,n+t));return s};!function(e,t,s,n={}){let r;d((n=>{r=n,t===document?e():B(t,e(),t.firstChild?null:void 0,s)}),n.owner)}((()=>N(me,{})),document.getElementById("root"));
//# sourceMappingURL=index-Fo3piyOZ.js.map