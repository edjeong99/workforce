if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}})).then(e=>{const s=r(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-cc985859"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"app.js",revision:"3b7e8d724c2e317186f13c8b9b07a0a8"},{url:"assets/css/font-awesome-4.7.0/css/font-awesome.css",revision:"c495654869785bc3df60216616814ad1"},{url:"assets/css/font-awesome-4.7.0/css/font-awesome.min.css",revision:"269550530cc127b6aa5a35925a7de6ce"},{url:"assets/css/fontawesome-all.min.css",revision:"dbf9d822cefe851ba6f66e1ad57e8987"},{url:"assets/css/main.css",revision:"7b81cce86d486d7d7bde6d1a38d5cc78"},{url:"assets/css/main2.css",revision:"27ed67becd49b42a59ba542e32529440"},{url:"assets/css/style.css",revision:"5be787aa373cbcd85ebe9cf86826ec6e"},{url:"assets/data/config.js",revision:"635567038a9ecbac8a4fad5690b252bf"},{url:"assets/data/data.js",revision:"d9dffc368e633f03a18e5d7c37aae4a8"},{url:"assets/data/getDataFromAPI.js",revision:"266b400e412ece1d4129597aa0610ec2"},{url:"assets/js/display.js",revision:"7fa438f207ab358275b4f5451bf1456a"},{url:"assets/js/event.js",revision:"577d6ba5bab8fc85610124681fca9ef7"},{url:"assets/js/jquery.min.js",revision:"220afd743d9e9643852e31a135a9f3ae"},{url:"assets/js/util.js",revision:"87dd5bd5774b4ca1b58123721c388091"},{url:"images/banner.jpg",revision:"e4dd3c7e248862eaa51dd48b5f43f400"},{url:"images/favicon.ico",revision:"c85671d54d5f45c2bbad3ebdc1493cc2"},{url:"images/pic01.jpg",revision:"4a126caffa4b4dcf00c069d32e96b59d"},{url:"images/pic02.jpg",revision:"cd1be9dd3d71de715a3eaf6773ee16db"},{url:"images/pic03.jpg",revision:"874dbe44f3c687171804a55a8a416583"},{url:"images/pic04.jpg",revision:"1cb52e4eab771759da9561e409874945"},{url:"images/pic05.jpg",revision:"1afd6a2a17d4fba6611f6667d3cd0aae"},{url:"images/pic06.jpg",revision:"2b6f79db093de2f64e60f6a0e622b357"},{url:"images/pic07.jpg",revision:"31a17a2d68323d375426f42d15b37e20"},{url:"images/pic08.jpg",revision:"96bf17aa868f1be2fa0d53498456c68f"},{url:"images/workforce-entry.PNG",revision:"be1c3f70269bad42ac71ea08b2a36133"},{url:"images/workforce-list.PNG",revision:"7b7025ac402b4d575bbc3332991426da"},{url:"images/workforce-login.PNG",revision:"71926beee084f76041685afd8a5c7781"},{url:"images/workforce-menu.PNG",revision:"dfd01e5feaca40f27ea3a3738d40fb9c"},{url:"images/workforce-setting.PNG",revision:"9c6861e1f24620b1039c36fa1768d6ac"},{url:"index.html",revision:"6ab170055c3a1e413956b1fce89ac29a"},{url:"workforce.webmanifest",revision:"3254cd975f8eaaeaaaa2a0289b2f4b2d"}],{}),e.registerRoute(/https:\/\/cloud\.iexapis\.com\/stable/,new e.NetworkFirst({cacheName:"stockPrice",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
