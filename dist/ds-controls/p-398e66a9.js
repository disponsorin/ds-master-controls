const t=window,e=document,n={t:0,s:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,s)=>t.addEventListener(e,n,s),rel:(t,e,n,s)=>t.removeEventListener(e,n,s)},s=!!e.documentElement.attachShadow,o=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),l=new WeakMap,r=t=>l.get(t),i=(t,e)=>l.set(e.o=t,e),c=(t,e)=>e in t,a=t=>console.error(t),f=new Map,u=new Map,$=t.__stencil_cssshim;let d=0,p=!1;const m=[],h=[],y=[],w=(t,e)=>s=>{t.push(s),p||(p=!0,e&&4&n.t?v(b):n.raf(b))},_=(t,e)=>{let n=0,s=0;for(;n<t.length&&(s=performance.now())<e;)try{t[n++](s)}catch(t){a(t)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},b=()=>{d++,(t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){a(t)}t.length=0})(m);const t=2==(6&n.t)?performance.now()+10*Math.ceil(d*(1/22)):1/0;_(h,t),_(y,t),h.length>0&&(y.push(...h),h.length=0),(p=m.length+h.length+y.length>0)?n.raf(b):d=0},v=t=>Promise.resolve().then(t),g=w(h,!0),j={},k=t=>null!=t,S=t=>t.toLowerCase(),R=t=>["object","function"].includes(typeof t),M=()=>t.CSS&&t.CSS.supports&&t.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_ds_controls("./p-3ea8955c.js"),U=async()=>{{const n=Array.from(e.querySelectorAll("script")).find(t=>t.src.includes("/ds-controls.esm.js")||"ds-controls"===t.getAttribute("data-namespace")),s=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,t.location.href));return L(s.href),window.customElements||await __sc_import_ds_controls("./p-860d8016.js"),s.href}},L=n=>{const s=(()=>`__sc_import_${"ds-controls".replace(/\s|-/g,"_")}`)();try{t[s]=new Function("w","return import(w);")}catch(o){const l=new Map;t[s]=o=>{const r=new URL(o,n).href;let i=l.get(r);if(!i){const n=e.createElement("script");n.type="module",n.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.${s}.m = m;`],{type:"application/javascript"})),i=new Promise(e=>{n.onload=()=>{e(t[s].m),n.remove()}}),l.set(r,i),e.head.appendChild(n)}return i}}},O=new WeakMap,x=t=>"sc-"+t,C=(t,e,...n)=>{let s,o,l=null,r=!1,i=!1,c=[];const a=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof t&&!R(l))&&(l=String(l)),r&&i?c[c.length-1].l+=l:c.push(r?{t:0,l}:l),i=r)};if(a(n),e){s=e.key||void 0,o=e.name;{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}if("function"==typeof t)return t(e,c,T);const f={t:0,i:t,u:c.length>0?c:null,$:void 0,p:e};return f.h=s,f._=o,f},P={},T={forEach:(t,e)=>t.map(A).forEach(e),map:(t,e)=>t.map(A).map(e).map(E)},A=t=>({vattrs:t.p,vchildren:t.u,vkey:t.h,vname:t._,vtag:t.i,vtext:t.l}),E=t=>({t:0,p:t.vattrs,u:t.vchildren,h:t.vkey,_:t.vname,i:t.vtag,l:t.vtext}),F=(t,e,s,o,l,r)=>{if(s!==o)if("class"!==e||l)if("style"===e){for(const e in s)o&&null!=o[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in o)s&&o[e]===s[e]||(e.includes("-")?t.style.setProperty(e,o[e]):t.style[e]=o[e])}else if("key"===e);else if("ref"===e)o&&o(t);else if(e.startsWith("on")&&!c(t,e))e=c(t,S(e))?S(e.substring(2)):S(e[2])+e.substring(3),s&&n.rel(t,e,s,!1),o&&n.ael(t,e,o,!1);else{const n=c(t,e),s=R(o);if((n||s&&null!==o)&&!l)try{t[e]=null==o&&-1===t.tagName.indexOf("-")?"":o}catch(t){}null==o||!1===o?t.removeAttribute(e):(!n||4&r||l)&&!s&&(o=!0===o?"":o.toString(),t.setAttribute(e,o))}else{const e=H(s),n=H(t.className).filter(t=>!e.includes(t));t.className=n.concat(H(o).filter(t=>!n.includes(t))).join(" ")}},H=t=>t?t.split(" "):[],N=(t,e,n,s)=>{const o=11===e.$.nodeType&&e.$.host?e.$.host:e.$,l=t&&t.p||j,r=e.p||j;for(s in l)null==r[s]&&null!=l[s]&&F(o,s,l[s],void 0,n,e.t);for(s in r)F(o,s,l[s],r[s],n,e.t)};let W,q,B,V=!1,z=!1,D=!1;const G=(t,n,s,o)=>{let l,r,i,c=n.u[s],a=0;if(V||(D=!0,"slot"===c.i&&(W&&o.classList.add(W+"-s"),c.t|=c.u?2:1)),k(c.l))c.$=e.createTextNode(c.l);else if(1&c.t)c.$=e.createTextNode("");else if(l=c.$=e.createElement(2&c.t?"slot-fb":c.i),N(null,c,!1),k(W)&&l["s-si"]!==W&&l.classList.add(l["s-si"]=W),c.u)for(a=0;a<c.u.length;++a)(r=G(t,c,a,l))&&l.appendChild(r);return c.$["s-hn"]=B,3&c.t&&(c.$["s-sr"]=!0,c.$["s-cr"]=q,c.$["s-sn"]=c._||"",(i=t&&t.u&&t.u[s])&&i.i===c.i&&t.$&&I(t.$,!1)),c.$},I=(t,e)=>{n.t|=1;const s=t.childNodes;for(let t=s.length-1;t>=0;t--){const n=s[t];n["s-hn"]!==B&&n["s-ol"]&&(Y(n).insertBefore(n,X(n)),n["s-ol"].remove(),n["s-ol"]=void 0,D=!0),e&&I(n,e)}n.t&=-2},J=(t,e,n,s,o,l)=>{let r,i=t["s-cr"]&&t["s-cr"].parentNode||t;for(i.shadowRoot&&S(i.tagName)===B&&(i=i.shadowRoot);o<=l;++o)s[o]&&(r=G(null,n,o,t))&&(s[o].$=r,i.insertBefore(r,X(e)))},K=(t,e,n,s)=>{for(;e<=n;++e)k(t[e])&&(s=t[e].$,st(t[e],!0),z=!0,s["s-ol"]?s["s-ol"].remove():I(s,!0),s.remove())},Q=(t,e)=>t.i===e.i&&("slot"===t.i?t._===e._:t.h===e.h),X=t=>t&&t["s-ol"]||t,Y=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,Z=(t,e)=>{const n=e.$=t.$,s=t.u,o=e.u;let l;k(e.l)?(l=n["s-cr"])?l.parentNode.textContent=e.l:t.l!==e.l&&(n.textContent=e.l):("slot"===e.i||N(t,e,!1),k(s)&&k(o)?((t,e,n,s)=>{let o,l,r=0,i=0,c=0,a=0,f=e.length-1,u=e[0],$=e[f],d=s.length-1,p=s[0],m=s[d];for(;r<=f&&i<=d;)if(null==u)u=e[++r];else if(null==$)$=e[--f];else if(null==p)p=s[++i];else if(null==m)m=s[--d];else if(Q(u,p))Z(u,p),u=e[++r],p=s[++i];else if(Q($,m))Z($,m),$=e[--f],m=s[--d];else if(Q(u,m))"slot"!==u.i&&"slot"!==m.i||I(u.$.parentNode,!1),Z(u,m),t.insertBefore(u.$,$.$.nextSibling),u=e[++r],m=s[--d];else if(Q($,p))"slot"!==u.i&&"slot"!==m.i||I($.$.parentNode,!1),Z($,p),t.insertBefore($.$,u.$),$=e[--f],p=s[++i];else{for(c=-1,a=r;a<=f;++a)if(e[a]&&k(e[a].h)&&e[a].h===p.h){c=a;break}c>=0?((l=e[c]).i!==p.i?o=G(e&&e[i],n,c,t):(Z(l,p),e[c]=void 0,o=l.$),p=s[++i]):(o=G(e&&e[i],n,i,t),p=s[++i]),o&&Y(u.$).insertBefore(o,X(u.$))}r>f?J(t,null==s[d+1]?null:s[d+1].$,n,s,i,d):i>d&&K(e,r,f)})(n,s,e,o):k(o)?(k(t.l)&&(n.textContent=""),J(n,null,e,o,0,o.length-1)):k(s)&&K(s,0,s.length-1))},tt=(t,e,n,s,o,l,r,i)=>{for(s=0,o=(n=t.childNodes).length;s<o;s++)if(1===(e=n[s]).nodeType){if(e["s-sr"])for(r=e["s-sn"],e.hidden=!1,l=0;l<o;l++)if(n[l]["s-hn"]!==e["s-hn"])if(i=n[l].nodeType,""!==r){if(1===i&&r===n[l].getAttribute("slot")){e.hidden=!0;break}}else if(1===i||3===i&&""!==n[l].textContent.trim()){e.hidden=!0;break}tt(e)}},et=[],nt=t=>{let e,n,s,o,l=t.childNodes,r=l.length,i=0,c=0,a=0;for(r=l.length;i<r;i++){if((e=l[i])["s-sr"]&&(n=e["s-cr"]))for(o=e["s-sn"],c=(s=n.parentNode.childNodes).length-1;c>=0;c--)(n=s[c])["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||((3===(a=n.nodeType)||8===a)&&""===o||1===a&&null===n.getAttribute("slot")&&""===o||1===a&&n.getAttribute("slot")===o)&&(et.some(t=>t.nodeToRelocate===n)||(z=!0,n["s-sn"]=o,et.push({slotRefNode:e,nodeToRelocate:n})));1===e.nodeType&&nt(e)}},st=(t,e)=>{t&&(t.p&&t.p.ref&&t.p.ref(e?null:t.$),t.u&&t.u.forEach(t=>{st(t,e)}))},ot=(t,e,n,s)=>{e.t|=16;const o=e.o,l=()=>lt(t,e,n,o,s);return(()=>(()=>g(l))())()},lt=(t,o,l,r,i)=>{o.t&=-17,t["s-lr"]=!1,i&&((t,n)=>{const o=((t,n,s,o)=>{let l=x(n.v),r=u.get(l);if(t=11===t.nodeType?t:e,r)if("string"==typeof r){let s,i=O.get(t=t.head||t);if(i||O.set(t,i=new Set),!i.has(l)){if($){const t=(s=$.createHostStyle(o,l,r,!!(10&n.t)))["s-sc"];t&&(l=t,i=null)}else(s=e.createElement("style")).innerHTML=r;t.insertBefore(s,t.querySelector("link")),i&&i.add(l)}}else t.adoptedStyleSheets.includes(r)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,r]);return l})(s&&t.shadowRoot?t.shadowRoot:t.getRootNode(),n,0,t);10&n.t&&(t["s-sc"]=o,t.classList.add(o+"-h"))})(t,l),o.t|=4;try{((t,o,l,r)=>{B=S(t.tagName);const i=o.g||{t:0},c=(t=>t&&t.i===P)(r)?r:C(null,null,r);if(l.j&&(c.p=c.p||{},l.j.forEach(([e,n])=>c.p[n]=t[e])),c.i=null,c.t|=4,o.g=c,c.$=i.$=t.shadowRoot||t,W=t["s-sc"],q=t["s-cr"],V=s&&0!=(1&l.t),D=z=!1,Z(i,c),D){nt(c.$);for(let t=0;t<et.length;t++){const n=et[t];if(!n.nodeToRelocate["s-ol"]){const t=e.createTextNode("");t["s-nr"]=n.nodeToRelocate,n.nodeToRelocate.parentNode.insertBefore(n.nodeToRelocate["s-ol"]=t,n.nodeToRelocate)}}n.t|=1;for(let t=0;t<et.length;t++){const e=et[t],n=e.slotRefNode.parentNode;let s=e.slotRefNode.nextSibling,o=e.nodeToRelocate["s-ol"];for(;o=o.previousSibling;){let t=o["s-nr"];if(t&&t["s-sn"]===e.nodeToRelocate["s-sn"]&&n===t.parentNode&&(!(t=t.nextSibling)||!t["s-nr"])){s=t;break}}(!s&&n!==e.nodeToRelocate.parentNode||e.nodeToRelocate.nextSibling!==s)&&e.nodeToRelocate!==s&&n.insertBefore(e.nodeToRelocate,s)}n.t&=-2}z&&tt(c.$),et.length=0})(t,o,l,r.render())}catch(t){a(t)}o.t&=-5,$&&$.updateHost(t),t["s-lr"]=!0,o.t|=2,t["s-rc"].length>0&&(t["s-rc"].forEach(t=>t()),t["s-rc"].length=0),rt(t,o)},rt=(t,s,o)=>{if(!t["s-al"]){const l=s.o,r=s.k;64&s.t||(s.t|=64,t.classList.add("hydrated"),(t=>{if(t&&t.componentDidLoad)try{t.componentDidLoad(void 0)}catch(t){a(t)}})(l),s.S(t),r||(e.documentElement.classList.add("hydrated"),setTimeout(()=>n.t|=2,999))),r&&((o=r["s-al"])&&(o.delete(t),0===o.size&&(r["s-al"]=void 0,r["s-init"]())),s.k=void 0)}},it=(t,e,s)=>{if(e.R){const o=Object.entries(e.R),l=t.prototype;if(o.forEach(([t,[n]])=>{(31&n||2&s&&32&n)&&Object.defineProperty(l,t,{get(){return((t,e)=>r(t).M.get(e))(this,t)},set(n){((t,e,n,s)=>{const o=r(this),l=o.U,i=o.M.get(e),c=o.t;(n=((t,e)=>null==t||R(t)?t:4&e?"false"!==t&&(""===t||!!t):1&e?String(t):t)(n,s.R[e][0]))===i||8&c&&void 0!==i||(o.M.set(e,n),o.o&&2==(22&c)&&ot(l,o,s,!1))})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&s){const s=new Map;l.attributeChangedCallback=function(t,e,o){n.jmp(()=>{const e=s.get(t);this[e]=(null!==o||"boolean"!=typeof this[e])&&o})},t.observedAttributes=o.filter(([t,e])=>15&e[0]).map(([t,n])=>{const o=n[1]||t;return s.set(o,t),512&n[0]&&e.j.push([t,o]),o})}}return t},ct=(i,c={})=>{const d=[],p=c.exclude||[],m=e.head,h=t.customElements,y=m.querySelector("meta[charset]"),w=e.createElement("style");Object.assign(n,c),n.s=new URL(c.resourcesUrl||"./",e.baseURI).href,c.syncQueue&&(n.t|=4),i.forEach(t=>t[1].forEach(i=>{const c={t:i[0],v:i[1],R:i[2],L:i[3],j:[]};!s&&1&c.t&&(c.t|=8);const m=c.v;c.O=t[0],p.includes(m)||h.get(m)||(d.push(m),h.define(m,it(class extends HTMLElement{constructor(t){super(t),t=this,this["s-lr"]=!1,this["s-rc"]=[],(t=>{{const e={t:0,U:t,M:new Map};e.C=new Promise(t=>e.S=t),l.set(t,e)}})(t),1&c.t&&(s?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){n.jmp(()=>((t,s)=>{if(0==(1&n.t)){const n=r(t);if(!(1&n.t)){let l;n.t|=1,l||(4&s.t||8&s.t)&&((t,n)=>{let s;s="",(n=t["s-cr"]=e.createComment(""))["s-cn"]=!0,t.insertBefore(n,t.firstChild)})(t);{let e=t;for(;e=e.parentNode||e.host;)if(e["s-init"]&&!1===e["s-lr"]){n.k=e,(e["s-al"]=e["s-al"]||new Set).add(t);break}}s.R&&Object.entries(s.R).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),v(()=>(async(t,e,n,s,l)=>{if(0==(32&e.t)){e.t|=32,(l=(t=>{const e=t.v.replace(/-/g,"_"),n=t.O,s=f.get(n);return s?s[e]:__sc_import_ds_controls(`./${n}.entry.js`).then(t=>(f.set(n,t),t[e]),a)})(n)).then&&(l=await l),l.isProxied||(it(l,n,2),l.isProxied=!0),e.t|=8;try{new l(e)}catch(t){a(t)}if(e.t&=-9,!l.isStyleRegistered&&l.style){let t=l.style,e=x(n.v);8&n.t&&(t=await __sc_import_ds_controls("./p-549b16dd.js").then(n=>n.scopeCss(t,e,!1))),((t,e,n)=>{let s=u.get(t);o&&n?(s=s||new CSSStyleSheet).replace(e):s=e,u.set(t,s)})(e,t,!!(1&n.t)),l.isStyleRegistered=!0}}const r=e.k,i=()=>ot(t,e,n,!0);r&&!1===r["s-lr"]&&r["s-rc"]?r["s-rc"].push(i):i()})(t,n,s))}}})(this,c))}disconnectedCallback(){n.jmp(()=>(()=>{0==(1&n.t)&&$&&$.removeHost(this)})())}"s-init"(){const t=r(this);t.o&&rt(this,t)}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const n=r(t);2&n.t&&ot(t,n,e,!1)}})(this,c)}componentOnReady(){return r(this).C}},c,1)))})),w.innerHTML=d+"{visibility:hidden}.hydrated{visibility:inherit}",w.setAttribute("data-styles",""),m.insertBefore(w,y?y.nextSibling:m.firstChild)};export{P as H,M as a,ct as b,C as h,U as p,i as r};