!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("chart.js")):"function"==typeof define&&define.amd?define("Vue3ChartJs",["chart.js"],t):"object"==typeof exports?exports.Vue3ChartJs=t(require("chart.js")):e.Vue3ChartJs=t(e.Chart)}(self,(function(e){return(()=>{"use strict";var t={663:(e,t,n)=>{n.r(t),n.d(t,{default:()=>wn});var r=n(551),o=n.n(r);function s(e,t){const n=Object.create(null),r=e.split(",");for(let e=0;e<r.length;e++)n[r[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const a=s("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl"),l=s("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function i(e){if(b(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=i(S(r)?f(r):r);if(o)for(const e in o)t[e]=o[e]}return t}if(x(e))return e}const c=/;(?![^(]*\))/g,u=/:(.+)/;function f(e){const t={};return e.split(c).forEach((e=>{if(e){const n=e.split(u);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function p(e){let t="";if(S(e))t=e;else if(b(e))for(let n=0;n<e.length;n++)t+=p(e[n])+" ";else if(x(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const d={},h=()=>{},v=/^on[^a-z]/,g=e=>v.test(e),y=Object.assign,_=Object.prototype.hasOwnProperty,m=(e,t)=>_.call(e,t),b=Array.isArray,C=e=>"[object Map]"===k(e),w=e=>"function"==typeof e,S=e=>"string"==typeof e,E=e=>"symbol"==typeof e,x=e=>null!==e&&"object"==typeof e,A=Object.prototype.toString,k=e=>A.call(e),L=e=>S(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,T=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},D=/-(\w)/g,R=T((e=>e.replace(D,((e,t)=>t?t.toUpperCase():"")))),N=/\B([A-Z])/g,O=T((e=>e.replace(N,"-$1").toLowerCase())),P=T((e=>e.charAt(0).toUpperCase()+e.slice(1))),j=(T((e=>e?`on${P(e)}`:"")),(e,t)=>e!==t&&(e==e||t==t)),F=new WeakMap,I=[];let M;const U=Symbol(""),$=Symbol("");function B(e,t=d){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const n=function(e,t){const n=function(){if(!n.active)return t.scheduler?void 0:e();if(!I.includes(n)){W(n);try{return H.push(q),q=!0,I.push(n),M=n,e()}finally{I.pop(),K(),M=I[I.length-1]}}};return n.id=z++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(e,t);return t.lazy||n(),n}function V(e){e.active&&(W(e),e.options.onStop&&e.options.onStop(),e.active=!1)}let z=0;function W(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let q=!0;const H=[];function J(){H.push(q),q=!1}function K(){const e=H.pop();q=void 0===e||e}function G(e,t,n){if(!q||void 0===M)return;let r=F.get(e);r||F.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=new Set),o.has(M)||(o.add(M),M.deps.push(o))}function Z(e,t,n,r,o,s){const a=F.get(e);if(!a)return;const l=new Set,i=e=>{e&&e.forEach((e=>{(e!==M||e.allowRecurse)&&l.add(e)}))};if("clear"===t)a.forEach(i);else if("length"===n&&b(e))a.forEach(((e,t)=>{("length"===t||t>=r)&&i(e)}));else switch(void 0!==n&&i(a.get(n)),t){case"add":b(e)?L(n)&&i(a.get("length")):(i(a.get(U)),C(e)&&i(a.get($)));break;case"delete":b(e)||(i(a.get(U)),C(e)&&i(a.get($)));break;case"set":C(e)&&i(a.get(U))}l.forEach((e=>{e.options.scheduler?e.options.scheduler(e):e()}))}const Q=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(E)),X=re(),Y=re(!1,!0),ee=re(!0),te=re(!0,!0),ne={};function re(e=!1,t=!1){return function(n,r,o){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&o===(e?Le:ke).get(n))return n;const s=b(n);if(s&&m(ne,r))return Reflect.get(ne,r,o);const a=Reflect.get(n,r,o);return(E(r)?Q.has(r):"__proto__"===r||"__v_isRef"===r)?a:(e||G(n,0,r),t?a:Fe(a)?s&&L(r)?a:a.value:x(a)?e?De(a):Te(a):a)}}function oe(e=!1){return function(t,n,r,o){const s=t[n];if(!e&&(r=je(r),!b(t)&&Fe(s)&&!Fe(r)))return s.value=r,!0;const a=b(t)&&L(n)?Number(n)<t.length:m(t,n),l=Reflect.set(t,n,r,o);return t===je(o)&&(a?j(r,s)&&Z(t,"set",n,r):Z(t,"add",n,r)),l}}["includes","indexOf","lastIndexOf"].forEach((e=>{const t=Array.prototype[e];ne[e]=function(...e){const n=je(this);for(let e=0,t=this.length;e<t;e++)G(n,0,e+"");const r=t.apply(n,e);return-1===r||!1===r?t.apply(n,e.map(je)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{const t=Array.prototype[e];ne[e]=function(...e){J();const n=t.apply(this,e);return K(),n}}));const se={get:X,set:oe(),deleteProperty:function(e,t){const n=m(e,t),r=(e[t],Reflect.deleteProperty(e,t));return r&&n&&Z(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return E(t)&&Q.has(t)||G(e,0,t),n},ownKeys:function(e){return G(e,0,b(e)?"length":U),Reflect.ownKeys(e)}},ae={get:ee,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},le=(y({},se,{get:Y,set:oe(!0)}),y({},ae,{get:te}),e=>x(e)?Te(e):e),ie=e=>x(e)?De(e):e,ce=e=>e,ue=e=>Reflect.getPrototypeOf(e);function fe(e,t,n=!1,r=!1){const o=je(e=e.__v_raw),s=je(t);t!==s&&!n&&G(o,0,t),!n&&G(o,0,s);const{has:a}=ue(o),l=n?ie:r?ce:le;return a.call(o,t)?l(e.get(t)):a.call(o,s)?l(e.get(s)):void 0}function pe(e,t=!1){const n=this.__v_raw,r=je(n),o=je(e);return e!==o&&!t&&G(r,0,e),!t&&G(r,0,o),e===o?n.has(e):n.has(e)||n.has(o)}function de(e,t=!1){return e=e.__v_raw,!t&&G(je(e),0,U),Reflect.get(e,"size",e)}function he(e){e=je(e);const t=je(this),n=ue(t).has.call(t,e),r=t.add(e);return n||Z(t,"add",e,e),r}function ve(e,t){t=je(t);const n=je(this),{has:r,get:o}=ue(n);let s=r.call(n,e);s||(e=je(e),s=r.call(n,e));const a=o.call(n,e),l=n.set(e,t);return s?j(t,a)&&Z(n,"set",e,t):Z(n,"add",e,t),l}function ge(e){const t=je(this),{has:n,get:r}=ue(t);let o=n.call(t,e);o||(e=je(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&Z(t,"delete",e,void 0),s}function ye(){const e=je(this),t=0!==e.size,n=e.clear();return t&&Z(e,"clear",void 0,void 0),n}function _e(e,t){return function(n,r){const o=this,s=o.__v_raw,a=je(s),l=e?ie:t?ce:le;return!e&&G(a,0,U),s.forEach(((e,t)=>n.call(r,l(e),l(t),o)))}}function me(e,t,n){return function(...r){const o=this.__v_raw,s=je(o),a=C(s),l="entries"===e||e===Symbol.iterator&&a,i="keys"===e&&a,c=o[e](...r),u=t?ie:n?ce:le;return!t&&G(s,0,i?$:U),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:l?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function be(e){return function(...t){return"delete"!==e&&this}}const Ce={get(e){return fe(this,e)},get size(){return de(this)},has:pe,add:he,set:ve,delete:ge,clear:ye,forEach:_e(!1,!1)},we={get(e){return fe(this,e,!1,!0)},get size(){return de(this)},has:pe,add:he,set:ve,delete:ge,clear:ye,forEach:_e(!1,!0)},Se={get(e){return fe(this,e,!0)},get size(){return de(this,!0)},has(e){return pe.call(this,e,!0)},add:be("add"),set:be("set"),delete:be("delete"),clear:be("clear"),forEach:_e(!0,!1)};function Ee(e,t){const n=t?we:e?Se:Ce;return(t,r,o)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(m(n,r)&&r in t?n:t,r,o)}["keys","values","entries",Symbol.iterator].forEach((e=>{Ce[e]=me(e,!1,!1),Se[e]=me(e,!0,!1),we[e]=me(e,!1,!0)}));const xe={get:Ee(!1,!1)},Ae=(Ee(!1,!0),{get:Ee(!0,!1)}),ke=new WeakMap,Le=new WeakMap;function Te(e){return e&&e.__v_isReadonly?e:Re(e,!1,se,xe)}function De(e){return Re(e,!0,ae,Ae)}function Re(e,t,n,r){if(!x(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const o=t?Le:ke,s=o.get(e);if(s)return s;const a=(l=e).__v_skip||!Object.isExtensible(l)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>k(e).slice(8,-1))(l));var l;if(0===a)return e;const i=new Proxy(e,2===a?r:n);return o.set(e,i),i}function Ne(e){return Oe(e)?Ne(e.__v_raw):!(!e||!e.__v_isReactive)}function Oe(e){return!(!e||!e.__v_isReadonly)}function Pe(e){return Ne(e)||Oe(e)}function je(e){return e&&je(e.__v_raw)||e}function Fe(e){return Boolean(e&&!0===e.__v_isRef)}function Ie(e,t,n,r){let o;try{o=r?e(...r):e()}catch(e){Ue(e,t,n)}return o}function Me(e,t,n,r){if(w(e)){const s=Ie(e,t,n,r);return s&&x(o=s)&&w(o.then)&&w(o.catch)&&s.catch((e=>{Ue(e,t,n)})),s}var o;const s=[];for(let o=0;o<e.length;o++)s.push(Me(e[o],t,n,r));return s}function Ue(e,t,n,r=!0){if(t&&t.vnode,t){let r=t.parent;const o=t.proxy,s=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,s))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void Ie(a,null,10,[e,o,s])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let $e=!1,Be=!1;const Ve=[];let ze=0;const We=[];let qe=null,He=0;const Je=[];let Ke=null,Ge=0;const Ze=Promise.resolve();let Qe=null,Xe=null;function Ye(e){const t=Qe||Ze;return e?t.then(this?e.bind(this):e):t}function et(){$e||Be||(Be=!0,Qe=Ze.then(ot))}function tt(e,t,n,r){b(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),et()}function nt(e,t=null){if(We.length){for(Xe=t,qe=[...new Set(We)],We.length=0,He=0;He<qe.length;He++)qe[He]();qe=null,He=0,Xe=null,nt(e,t)}}const rt=e=>null==e.id?1/0:e.id;function ot(e){Be=!1,$e=!0,nt(e),Ve.sort(((e,t)=>rt(e)-rt(t)));try{for(ze=0;ze<Ve.length;ze++){const e=Ve[ze];e&&Ie(e,null,14)}}finally{ze=0,Ve.length=0,function(e){if(Je.length){const e=[...new Set(Je)];if(Je.length=0,Ke)return void Ke.push(...e);for(Ke=e,Ke.sort(((e,t)=>rt(e)-rt(t))),Ge=0;Ge<Ke.length;Ge++)Ke[Ge]();Ke=null,Ge=0}}(),$e=!1,Qe=null,(Ve.length||Je.length)&&ot(e)}}new Set,new Map;let st=null;function at(e){return w(e)&&(e=e()),b(e)&&(e=function(e){const t=e.filter((e=>!(Dt(e)&&e.type===Tt&&"v-if"!==e.children)));return 1===t.length&&Dt(t[0])?t[0]:null}(e)),Mt(e)}let lt=0;const it=e=>lt+=e;const ct=e=>(t,n=zt)=>!Ht&&function(e,t,n=zt,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;J(),qt(n);const o=Me(t,n,e,r);return qt(null),K(),o});return r?o.unshift(s):o.push(s),s}}(e,t,n),ut=(ct("bm"),ct("m")),ft=(ct("bu"),ct("u"),ct("bum"));ct("um"),ct("rtg"),ct("rtc");const pt={};function dt(e,t,{immediate:n,deep:r,flush:o,onTrack:s,onTrigger:a}=d,l=zt){let i,c,u=!1;if(Fe(e)?(i=()=>e.value,u=!!e._shallow):Ne(e)?(i=()=>e,r=!0):i=b(e)?()=>e.map((e=>Fe(e)?e.value:Ne(e)?vt(e):w(e)?Ie(e,l,2):void 0)):w(e)?t?()=>Ie(e,l,2):()=>{if(!l||!l.isUnmounted)return c&&c(),Ie(e,l,3,[f])}:h,t&&r){const e=i;i=()=>vt(e())}const f=e=>{c=y.options.onStop=()=>{Ie(e,l,4)}};let p=b(e)?[]:pt;const v=()=>{if(y.active)if(t){const e=y();(r||u||j(e,p))&&(c&&c(),Me(t,l,3,[e,p===pt?void 0:p,f]),p=e)}else y()};let g;v.allowRecurse=!!t,g="sync"===o?v:"post"===o?()=>xt(v,l&&l.suspense):()=>{!l||l.isMounted?function(e){tt(e,qe,We,He)}(v):v()};const y=B(i,{lazy:!0,onTrack:s,onTrigger:a,scheduler:g});return _=y,zt&&(zt.effects||(zt.effects=[])).push(_),t?n?v():p=y():"post"===o?xt(y,l&&l.suspense):y(),()=>{V(y),l&&((e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)})(l.effects,y)};var _}function ht(e,t,n){const r=this.proxy;return dt(S(e)?()=>r[e]:e.bind(r),t.bind(r),n,this)}function vt(e,t=new Set){if(!x(e)||t.has(e))return e;if(t.add(e),Fe(e))vt(e.value,t);else if(b(e))for(let n=0;n<e.length;n++)vt(e[n],t);else if("[object Set]"===k(e)||C(e))e.forEach((e=>{vt(e,t)}));else for(const n in e)vt(e[n],t);return e}const gt=[Function,Array],yt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gt,onEnter:gt,onAfterEnter:gt,onEnterCancelled:gt,onBeforeLeave:gt,onLeave:gt,onAfterLeave:gt,onLeaveCancelled:gt,onBeforeAppear:gt,onAppear:gt,onAfterAppear:gt,onAppearCancelled:gt},setup(e,{slots:t}){const n=Wt(),r=function(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ut((()=>{e.isMounted=!0})),ft((()=>{e.isUnmounting=!0})),e}();let o;return()=>{const s=t.default&&St(t.default(),!0);if(!s||!s.length)return;const a=je(e),{mode:l}=a,i=s[0];if(r.isLeaving)return bt(i);const c=Ct(i);if(!c)return bt(i);const u=mt(c,a,r,n);wt(c,u);const f=n.subTree,p=f&&Ct(f);let d=!1;const{getTransitionKey:h}=c.type;if(h){const e=h();void 0===o?o=e:e!==o&&(o=e,d=!0)}if(p&&p.type!==Tt&&(!Rt(c,p)||d)){const e=mt(p,a,r,n);if(wt(p,e),"out-in"===l)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},bt(i);"in-out"===l&&(e.delayLeave=(e,t,n)=>{_t(r,p)[String(p.key)]=p,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return i}}};function _t(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function mt(e,t,n,r){const{appear:o,mode:s,persisted:a=!1,onBeforeEnter:l,onEnter:i,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:d,onLeaveCancelled:h,onBeforeAppear:v,onAppear:g,onAfterAppear:y,onAppearCancelled:_}=t,m=String(e.key),b=_t(n,e),C=(e,t)=>{e&&Me(e,r,9,t)},w={mode:s,persisted:a,beforeEnter(t){let r=l;if(!n.isMounted){if(!o)return;r=v||l}t._leaveCb&&t._leaveCb(!0);const s=b[m];s&&Rt(e,s)&&s.el._leaveCb&&s.el._leaveCb(),C(r,[t])},enter(e){let t=i,r=c,s=u;if(!n.isMounted){if(!o)return;t=g||i,r=y||c,s=_||u}let a=!1;const l=e._enterCb=t=>{a||(a=!0,C(t?s:r,[e]),w.delayedLeave&&w.delayedLeave(),e._enterCb=void 0)};t?(t(e,l),t.length<=1&&l()):l()},leave(t,r){const o=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();C(f,[t]);let s=!1;const a=t._leaveCb=n=>{s||(s=!0,r(),C(n?h:d,[t]),t._leaveCb=void 0,b[o]===e&&delete b[o])};b[o]=e,p?(p(t,a),p.length<=1&&a()):a()},clone:e=>mt(e,t,n,r)};return w}function bt(e){if(Et(e))return(e=Ft(e)).children=null,e}function Ct(e){return Et(e)?e.children?e.children[0]:void 0:e}function wt(e,t){6&e.shapeFlag&&e.component?wt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function St(e,t=!1){let n=[],r=0;for(let o=0;o<e.length;o++){const s=e[o];s.type===kt?(128&s.patchFlag&&r++,n=n.concat(St(s.children,t))):(t||s.type!==Tt)&&n.push(s)}if(r>1)for(let e=0;e<n.length;e++)n[e].patchFlag=-2;return n}const Et=e=>e.type.__isKeepAlive;RegExp,RegExp;const xt=function(e,t){t&&t.pendingBranch?b(e)?t.effects.push(...e):t.effects.push(e):tt(e,Ke,Je,Ge)};const At=Symbol(),kt=Symbol(void 0),Lt=Symbol(void 0),Tt=Symbol(void 0);Symbol(void 0);function Dt(e){return!!e&&!0===e.__v_isVNode}function Rt(e,t){return e.type===t.type&&e.key===t.key}const Nt="__vInternal",Ot=({key:e})=>null!=e?e:null,Pt=({ref:e})=>null!=e?b(e)?e:{i:st,r:e}:null,jt=function(e,t=null,n=null,r=0,o=null,s=!1){if(e&&e!==At||(e=Tt),Dt(e)){const r=Ft(e,t,!0);return n&&Ut(r,n),r}if(a=e,w(a)&&"__vccOpts"in a&&(e=e.__vccOpts),t){(Pe(t)||Nt in t)&&(t=y({},t));let{class:e,style:n}=t;e&&!S(e)&&(t.class=p(e)),x(n)&&(Pe(n)&&!b(n)&&(n=y({},n)),t.style=i(n))}var a;const l=S(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:x(e)?4:w(e)?2:0,c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ot(t),ref:t&&Pt(t),scopeId:null,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};if(Ut(c,n),128&l){const{content:e,fallback:t}=function(e){const{shapeFlag:t,children:n}=e;let r,o;return 32&t?(r=at(n.default),o=at(n.fallback)):(r=at(n),o=Mt(null)),{content:r,fallback:o}}(c);c.ssContent=e,c.ssFallback=t}return c};function Ft(e,t,n=!1){const{props:r,ref:o,patchFlag:s}=e,a=t?function(...e){const t=y({},e[0]);for(let n=1;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=p([t.class,r.class]));else if("style"===e)t.style=i([t.style,r.style]);else if(g(e)){const n=t[e],o=r[e];n!==o&&(t[e]=n?[].concat(n,r[e]):o)}else""!==e&&(t[e]=r[e])}return t}(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Ot(a),ref:t&&t.ref?n&&o?b(o)?o.concat(Pt(t)):[o,Pt(t)]:Pt(t):o,scopeId:e.scopeId,children:e.children,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==kt?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ft(e.ssContent),ssFallback:e.ssFallback&&Ft(e.ssFallback),el:e.el,anchor:e.anchor}}function It(e=" ",t=0){return jt(Lt,null,e,t)}function Mt(e){return null==e||"boolean"==typeof e?jt(Tt):b(e)?jt(kt,null,e):"object"==typeof e?null===e.el?e:Ft(e):jt(Lt,null,String(e))}function Ut(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(b(t))n=16;else if("object"==typeof t){if(1&r||64&r){const n=t.default;return void(n&&(n._c&&it(1),Ut(e,n()),n._c&&it(-1)))}{n=32;const e=t._;!e&&!(Nt in t)&&(t._ctx=st)}}else w(t)?(t={default:t,_ctx:st},n=32):(t=String(t),64&r?(n=16,t=[It(t)]):n=8);e.children=t,e.shapeFlag|=n}function $t(e,t,n){const r=n.appContext.config.optionMergeStrategies,{mixins:o,extends:s}=t;s&&$t(e,s,n),o&&o.forEach((t=>$t(e,t,n)));for(const o in t)r&&m(r,o)?e[o]=r[o](e[o],t[o],n.proxy,o):e[o]=t[o]}const Bt=y(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>e.parent&&e.parent.proxy,$root:e=>e.root&&e.root.proxy,$emit:e=>e.emit,$options:e=>__VUE_OPTIONS_API__?function(e){const t=e.type,{__merged:n,mixins:r,extends:o}=t;if(n)return n;const s=e.appContext.mixins;if(!s.length&&!r&&!o)return t;const a={};return s.forEach((t=>$t(a,t,e))),$t(a,t,e),t.__merged=a}(e):e.type,$forceUpdate:e=>()=>{return t=e.update,void(Ve.length&&Ve.includes(t,$e&&t.allowRecurse?ze+1:ze)||t===Xe||(Ve.push(t),et()));var t},$nextTick:e=>Ye.bind(e.proxy),$watch:e=>__VUE_OPTIONS_API__?ht.bind(e):h}),Vt={get({_:e},t){const{ctx:n,setupState:r,data:o,props:s,accessCache:a,type:l,appContext:i}=e;if("__v_skip"===t)return!0;let c;if("$"!==t[0]){const l=a[t];if(void 0!==l)switch(l){case 0:return r[t];case 1:return o[t];case 3:return n[t];case 2:return s[t]}else{if(r!==d&&m(r,t))return a[t]=0,r[t];if(o!==d&&m(o,t))return a[t]=1,o[t];if((c=e.propsOptions[0])&&m(c,t))return a[t]=2,s[t];if(n!==d&&m(n,t))return a[t]=3,n[t];__VUE_OPTIONS_API__,a[t]=4}}const u=Bt[t];let f,p;return u?("$attrs"===t&&G(e,0,t),u(e)):(f=l.__cssModules)&&(f=f[t])?f:n!==d&&m(n,t)?(a[t]=3,n[t]):(p=i.config.globalProperties,m(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;if(o!==d&&m(o,t))o[t]=n;else if(r!==d&&m(r,t))r[t]=n;else if(t in e.props)return!1;return!("$"===t[0]&&t.slice(1)in e||(s[t]=n,0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let l;return void 0!==n[a]||e!==d&&m(e,a)||t!==d&&m(t,a)||(l=s[0])&&m(l,a)||m(r,a)||m(Bt,a)||m(o.config.globalProperties,a)}};y({},Vt,{get(e,t){if(t!==Symbol.unscopables)return Vt.get(e,t,e)},has:(e,t)=>"_"!==t[0]&&!a(t)}),Object.create(null);let zt=null;const Wt=()=>zt||st,qt=e=>{zt=e};let Ht=!1;function Jt(e,t,n){const r=arguments.length;return 2===r?x(t)&&!b(t)?Dt(t)?jt(e,null,[t]):jt(e,t):jt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Dt(n)&&(n=[n]),jt(e,t,n))}Symbol("");const Kt="http://www.w3.org/2000/svg",Gt="undefined"!=typeof document?document:null;let Zt,Qt;const Xt={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n)=>t?Gt.createElementNS(Kt,e):Gt.createElement(e,n?{is:n}:void 0),createText:e=>Gt.createTextNode(e),createComment:e=>Gt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Gt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode:e=>e.cloneNode(!0),insertStaticContent(e,t,n,r){const o=r?Qt||(Qt=Gt.createElementNS(Kt,"svg")):Zt||(Zt=Gt.createElement("div"));o.innerHTML=e;const s=o.firstChild;let a=s,l=a;for(;a;)l=a,Xt.insert(a,t,n),a=o.firstChild;return[s,l]}},Yt=/\s*!important$/;function en(e,t,n){if(b(n))n.forEach((n=>en(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=nn[t];if(n)return n;let r=R(t);if("filter"!==r&&r in e)return nn[t]=r;r=P(r);for(let n=0;n<tn.length;n++){const o=tn[n]+r;if(o in e)return nn[t]=o}return t}(e,t);Yt.test(n)?e.setProperty(O(r),n.replace(Yt,""),"important"):e[r]=n}}const tn=["Webkit","Moz","ms"],nn={},rn="http://www.w3.org/1999/xlink";let on=Date.now;"undefined"!=typeof document&&on()>document.createEvent("Event").timeStamp&&(on=()=>performance.now());let sn=0;const an=Promise.resolve(),ln=()=>{sn=0};const cn=/(?:Once|Passive|Capture)$/,un=/^on[a-z]/,fn="transition",pn="animation",dn=(e,{slots:t})=>Jt(yt,function(e){let{name:t="v",type:n,css:r=!0,duration:o,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:i=s,appearActiveClass:c=a,appearToClass:u=l,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:p=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=e;const h={};for(const t in e)t in hn||(h[t]=e[t]);if(!r)return h;const v=function(e){if(null==e)return null;if(x(e))return[vn(e.enter),vn(e.leave)];{const t=vn(e);return[t,t]}}(o),g=v&&v[0],_=v&&v[1],{onBeforeEnter:m,onEnter:b,onEnterCancelled:C,onLeave:w,onLeaveCancelled:S,onBeforeAppear:E=m,onAppear:A=b,onAppearCancelled:k=C}=h,L=(e,t,n)=>{yn(e,t?u:l),yn(e,t?c:a),n&&n()},T=(e,t)=>{yn(e,d),yn(e,p),t&&t()},D=e=>(t,r)=>{const o=e?A:b,a=()=>L(t,e,r);o&&o(t,a),_n((()=>{yn(t,e?i:s),gn(t,e?u:l),o&&o.length>1||(g?setTimeout(a,g):mn(t,n,a))}))};return y(h,{onBeforeEnter(e){m&&m(e),gn(e,a),gn(e,s)},onBeforeAppear(e){E&&E(e),gn(e,c),gn(e,i)},onEnter:D(!1),onAppear:D(!0),onLeave(e,t){const r=()=>T(e,t);gn(e,p),gn(e,f),_n((()=>{yn(e,f),gn(e,d),w&&w.length>1||(_?setTimeout(r,_):mn(e,n,r))})),w&&w(e,r)},onEnterCancelled(e){L(e,!1),C&&C(e)},onAppearCancelled(e){L(e,!0),k&&k(e)},onLeaveCancelled(e){T(e),S&&S(e)}})}(e),t);dn.displayName="Transition";const hn={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};function vn(e){return(e=>{const t=parseFloat(e);return isNaN(t)?e:t})(e)}function gn(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function yn(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function _n(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}function mn(e,t,n){const{type:r,timeout:o,propCount:s}=function(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),o=r("transitionDelay"),s=r("transitionDuration"),a=bn(o,s),l=r("animationDelay"),i=r("animationDuration"),c=bn(l,i);let u=null,f=0,p=0;return t===fn?a>0&&(u=fn,f=a,p=s.length):t===pn?c>0&&(u=pn,f=c,p=i.length):(f=Math.max(a,c),u=f>0?a>c?fn:pn:null,p=u?u===fn?s.length:i.length:0),{type:u,timeout:f,propCount:p,hasTransform:u===fn&&/\b(transform|all)(,|$)/.test(n.transitionProperty)}}(e,t);if(!r)return n();const a=r+"end";let l=0;const i=()=>{e.removeEventListener(a,c),n()},c=t=>{t.target===e&&++l>=s&&i()};setTimeout((()=>{l<s&&i()}),o+1),e.addEventListener(a,c)}function bn(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>Cn(t)+Cn(e[n]))))}function Cn(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}dn.props=y({},yt.props,hn),new WeakMap,new WeakMap,y({patchProp:(e,t,n,r,o=!1,s,a,i,c)=>{switch(t){case"class":!function(e,t,n){if(null==t&&(t=""),n)e.setAttribute("class",t);else{const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),e.className=t}}(e,r,o);break;case"style":!function(e,t,n){const r=e.style;if(n)if(S(n))t!==n&&(r.cssText=n);else{for(const e in n)en(r,e,n[e]);if(t&&!S(t))for(const e in t)null==n[e]&&en(r,e,"")}else e.removeAttribute("style")}(e,n,r);break;default:g(t)?(e=>e.startsWith("onUpdate:"))(t)||function(e,t,n,r,o=null){const s=e._vei||(e._vei={}),a=s[t];if(r&&a)a.value=r;else{const[n,l]=function(e){let t;if(cn.test(e)){let n;for(t={};n=e.match(cn);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e.slice(2).toLowerCase(),t]}(t);r?function(e,t,n,r){e.addEventListener(t,n,r)}(e,n,s[t]=function(e,t){const n=e=>{(e.timeStamp||on())>=n.attached-1&&Me(function(e,t){if(b(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=sn||(an.then(ln),sn=on()),n}(r,o),l):a&&(function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,a,l),s[t]=void 0)}}(e,t,0,r,a):function(e,t,n,r){return r?"innerHTML"===t||!!(t in e&&un.test(t)&&w(n)):"spellcheck"!==t&&"draggable"!==t&&(("form"!==t||"string"!=typeof n)&&(("list"!==t||"INPUT"!==e.tagName)&&((!un.test(t)||!S(n))&&t in e)))}(e,t,r,o)?function(e,t,n,r,o,s,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,o,s),void(e[t]=null==n?"":n);if("value"!==t||"PROGRESS"===e.tagName)if(""===n&&"boolean"==typeof e[t])e[t]=!0;else if(null==n&&"string"==typeof e[t])e[t]="",e.removeAttribute(t);else try{e[t]=n}catch(e){}else{e._value=n;const t=null==n?"":n;e.value!==t&&(e.value=t)}}(e,t,r,s,a,i,c):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),function(e,t,n,r){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(rn,t.slice(6,t.length)):e.setAttributeNS(rn,t,n);else{const r=l(t);null==n||r&&!1===n?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}(e,t,r,o))}},forcePatchProp:(e,t)=>"value"===t},Xt);const wn={name:"vue3-chartjs",render:()=>Jt("canvas"),setup:(e,{emit:t})=>({state:{chart:null,debouncedID:null,plugins:[{id:"vue3-charjs-event-hooks",beforeInit:()=>t("beforeInit"),afterInit:()=>t("afterInit"),beforeUpdate:()=>t("beforeUpdate"),afterUpdate:()=>t("afterUpdate"),beforeLayout:()=>t("beforeLayout"),afterLayout:()=>t("afterLayout"),beforeDatasetsUpdate:()=>t("beforeDatasetsUpdate"),afterDatasetsUpdate:()=>t("afterDatasetsUpdate"),beforeDatasetUpdate:()=>t("beforeDatasetUpdate"),afterDatasetUpdate:()=>t("afterDatasetUpdate"),beforeRender:()=>t("beforeRender"),afterRender:()=>t("afterRender"),beforeDraw:()=>t("beforeDraw"),afterDraw:()=>t("afterDraw"),beforeDatasetsDraw:()=>t("beforeDatasetsDraw"),afterDatasetsDraw:()=>t("afterDatasetsDraw"),beforeDatasetDraw:()=>t("beforeDatasetDraw"),afterDatasetDraw:()=>t("afterDatasetDraw"),beforeEvent:()=>t("beforeEvent"),afterEvent:()=>t("afterEvent"),resize:()=>t("resize"),destroy:()=>t("destroy")}].concat(e.plugins)}}),props:{type:{type:String,required:!0},data:{},options:{},plugins:{default:[]}},mounted(){this.render()},unmounted(){this.destroy()},methods:{render(){this.destroy(),this.state.chart=new(o())(this.$el.getContext("2d"),{type:this.type,data:this.data,options:this.options,plugins:this.state.plugins})},update(){this.state.chart&&this.state.chart.update()},destroy(){this.state.chart&&this.state.chart.destroy()},debounce(e,t){this.state.debouncedID&&clearTimeout(this.state.debouncedID),this.state.debouncedID=setTimeout((()=>e()),t)}},watch:{"data.data":{handler:function(){this.debounce((()=>{this.state.chart.data=this.data,this.update()}),500)},deep:!0}}}},551:t=>{t.exports=e}},n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(663)})()}));
//# sourceMappingURL=vue3-chartjs.js.map