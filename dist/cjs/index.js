"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=e(require("react")),n={exports:{}},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){const{headManager:t,reduceComponentsToState:n}=e;function r(){if(t&&t.mountedInstances){const r=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}if(s){var a;null==t||null==(a=t.mountedInstances)||a.add(e.children),r()}return i((()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),i((()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)}))),c((()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}))),null};var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=r?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(n,o,s):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(t.default);function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}const s="undefined"==typeof window,i=s?()=>{}:o.useLayoutEffect,c=s?()=>{}:o.useEffect;var l,u={};Object.defineProperty(u,"__esModule",{value:!0}),u.AmpStateContext=void 0;const d=((l=t.default)&&l.__esModule?l:{default:l}).default.createContext({});u.AmpStateContext=d,"production"!==process.env.NODE_ENV&&(d.displayName="AmpStateContext");var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.HeadManagerContext=void 0;var f=function(e){return e&&e.__esModule?e:{default:e}}(t.default);const m=f.default.createContext({});p.HeadManagerContext=m,"production"!==process.env.NODE_ENV&&(m.displayName="HeadManagerContext");var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.isInAmpMode=function({ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}={}){return e||t&&n};var h={};function g(e,t,n,r,o,a,s){try{var i=e[a](s),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(e){g(a,r,o,s,i,"next",e)}function i(e){g(a,r,o,s,i,"throw",e)}s(void 0)}))}}Object.defineProperty(h,"__esModule",{value:!0}),h.execOnce=function(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)},h.getLocationOrigin=O,h.getURL=function(){const{href:e}=window.location,t=O();return e.substring(t.length)},h.getDisplayName=_,h.isResSent=w,h.normalizeRepeatedSlashes=function(e){const t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")},h.loadGetInitialProps=b,h.ST=h.SP=h.warnOnce=h.isAbsoluteUrl=void 0;const E=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/;function O(){const{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function _(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function w(e){return e.finished||e.headersSent}function b(e,t){return x.apply(this,arguments)}function x(){return(x=v((function*(e,t){var n;if("production"!==process.env.NODE_ENV&&(null==(n=e.prototype)?void 0:n.getInitialProps)){const t=`"${_(e)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;throw new Error(t)}const r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:yield b(t.Component,t.ctx)}:{};const o=yield e.getInitialProps(t);if(r&&w(r))return o;if(!o){const t=`"${_(e)}.getInitialProps()" should resolve to an object. But found "${o}" instead.`;throw new Error(t)}return"production"!==process.env.NODE_ENV&&(0!==Object.keys(o).length||t.ctx||console.warn(`${_(e)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`)),o}))).apply(this,arguments)}h.isAbsoluteUrl=e=>E.test(e);let j=e=>{};if("production"!==process.env.NODE_ENV){const e=new Set;h.warnOnce=j=t=>{e.has(t)||console.warn(t),e.add(t)}}const N="undefined"!=typeof performance;h.SP=N;const P=N&&["mark","measure","getEntriesByName"].every((e=>"function"==typeof performance[e]));h.ST=P;class M extends Error{}h.DecodeError=M;class k extends Error{}h.NormalizeError=k;class S extends Error{constructor(e){super(),this.code="ENOENT",this.message=`Cannot find module for page: ${e}`}}h.PageNotFoundError=S;class C extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}h.MissingStaticPage=C;class A extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}h.MiddlewareNotFoundError=A,h.warnOnce=j,function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.defaultHead=m,n.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(t.default),a=function(e){return e&&e.__esModule?e:{default:e}}(r),s=u,i=p,c=y,l=h;function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function m(e=!1){const t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function g(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t)),[])):e.concat(t)}const v=["name","httpEquiv","charSet","itemProp"];function E(e,t){return e.reduce(g,[]).reverse().concat(m(t.inAmpMode).reverse()).filter(function(){const e=new Set,t=new Set,n=new Set,r={};return o=>{let a=!0,s=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){s=!0;const t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(let e=0,t=v.length;e<t;e++){const t=v[e];if(o.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?a=!1:n.add(t);else{const e=o.props[t],n=r[t]||new Set;"name"===t&&s||!n.has(e)?(n.add(e),r[t]=n):a=!1}}}return a}}()).reverse().map(((e,n)=>{const r=e.key||n;if("development"!==process.env.NODE_ENV&&process.env.__NEXT_OPTIMIZE_FONTS&&!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((t=>e.props.href.startsWith(t)))){const t=d({},e.props||{});return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}if("development"===process.env.NODE_ENV&&process.env.__NEXT_REACT_ROOT)if("script"===e.type&&"application/ld+json"!==e.props.type){const t=e.props.src?`<script> tag with src="${e.props.src}"`:"inline <script>";l.warnOnce(`Do not add <script> tags using next/head (see ${t}). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`)}else"link"===e.type&&"stylesheet"===e.props.rel&&l.warnOnce(`Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="${e.props.href}"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);return o.default.cloneElement(e,{key:r})}))}var O=function({children:e}){const t=o.useContext(s.AmpStateContext),n=o.useContext(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:E,headManager:n,inAmpMode:c.isInAmpMode(t)},e)};n.default=O,("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)}(n,n.exports);var I=n.exports,D={MReact:{Section:function(e){var n=e.id,r=e.className,o=e.onClick,a=e.children;return t.default.createElement("section",{id:null!=n?n:"",className:null!=r?r:"",onClick:o},a)},Wrap:function(e){var n=e.id,r=e.className,o=e.children;return t.default.createElement("div",{id:null!=n?n:"",className:null!=r?r:""},o)},Content:function(e){var n=e.id,r=e.className,o=e.displayType,a=e.onClick,s=e.children;return"block"===o?t.default.createElement("article",{id:null!=n?n:"",className:null!=r?r:"",onClick:a},s):t.default.createElement("span",{id:null!=n?n:"",className:null!=r?r:"",onClick:a},s)}},MNext:{SEO:function(e){var n=e.children,r=e.title,o=e.meta;return t.default.createElement(I,null,o&&t.default.createElement(t.default.Fragment,null,o.keywords&&t.default.createElement("meta",{name:"keywords",content:o.keywords.words.join(o.keywords.joinBy)}),o.description&&t.default.createElement("meta",{name:"description",content:o.description})),null!=n?n:null,t.default.createElement("title",null,r.subString?[r.default,r.subString].join(" "+r.joinBy+" "):r.default))}}};module.exports=D;
//# sourceMappingURL=index.js.map
