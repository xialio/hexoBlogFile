if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const u=e=>n(e,r),c={module:{uri:r},exports:t,require:u};i[r]=Promise.all(o.map((e=>c[e]||u(e)))).then((e=>(s(...e),t)))}}define(["./workbox-be8e5e83"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"06fc992588ac04bf39a26e7157a8e2e6"},{url:"css/index.css",revision:"1628968a4d7f67a2734eff1e6839d911"},{url:"/",revision:"index-20240825121849236"},{url:"music/",revision:"music-20240825121849236"},{url:"about/",revision:"about-20240825121849236"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
