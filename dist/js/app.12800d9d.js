(function(t){function a(a){for(var s,i,c=a[0],o=a[1],l=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);p&&p(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,i=1;i<e.length;i++){var c=e[i];0!==n[c]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},n={app:0},r=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-0ad67b4b":"422c7862","chunk-2e5c50db":"ce92e668","chunk-7b0a37f0":"9fc5e14c","chunk-9b11f710":"ed581be6"}[t]+".js"}function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e={"chunk-0ad67b4b":1,"chunk-2e5c50db":1,"chunk-7b0a37f0":1,"chunk-9b11f710":1};i[t]?a.push(i[t]):0!==i[t]&&e[t]&&a.push(i[t]=new Promise((function(a,e){for(var s="css/"+({}[t]||t)+"."+{"chunk-0ad67b4b":"3a38aa4b","chunk-2e5c50db":"922a6bce","chunk-7b0a37f0":"dd8bc5d4","chunk-9b11f710":"ba851304"}[t]+".css",n=o.p+s,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===s||d===n))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===s||d===n)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var s=a&&a.target&&a.target.src||n,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete i[t],p.parentNode.removeChild(p),e(r)},p.href=n;var v=document.getElementsByTagName("head")[0];v.appendChild(p)})).then((function(){i[t]=0})));var s=n[t];if(0!==s)if(s)a.push(s[2]);else{var r=new Promise((function(a,e){s=n[t]=[a,e]}));a.push(s[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=c(t);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(p);var e=n[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",u.name="ChunkLoadError",u.type=s,u.request=i,e[1](u)}n[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/play-hair/dist/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var p=d;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0b5c":function(t,a,e){t.exports=e.p+"img/boy2.af086586.jpg"},"0d3b":function(t,a){t.exports="data:image/png;base64,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"},"1bda":function(t,a,e){t.exports=e.p+"img/boy6.cc698d83.jpg"},"1bde":function(t,a){},"1d0a":function(t,a,e){t.exports=e.p+"img/boy1.b766ea59.jpg"},"1fe1":function(t,a,e){t.exports=e.p+"img/讚.f2d00e99.png"},"213f":function(t,a,e){t.exports=e.p+"img/girl1.d9d0ce5a.jpg"},"320d":function(t,a,e){},"3d13":function(t,a,e){"use strict";var s=e("ab36"),i=e.n(s);i.a},"40cf":function(t,a,e){"use strict";var s=e("4373"),i=e("6f4e"),n=(e("5888"),e("4be3"),e("2877")),r=Object(n["a"])(i["default"],s["a"],s["b"],!1,null,"b4e69454",null);a["default"]=r.exports},4163:function(t,a,e){t.exports=e.p+"img/girl5.a2a9bb0a.jpg"},4373:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleIndicators","data-ride":"carousel"}},[s("ol",{staticClass:"carousel-indicators"},[s("li",{staticClass:"active",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"0"}}),s("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}}),s("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}})]),s("div",{staticClass:"carousel-inner"},[s("div",{staticClass:"carousel-item active"},[s("img",{staticClass:"d-block w-100",attrs:{src:e("d5b3"),alt:"剪髮圖片"}}),s("div",{staticClass:"inner-text"},[s("h3",[t._v("完美實現"),s("br"),t._v("你的"),s("span",[t._v("想")]),s("span",[t._v("法")])]),s("a",{staticClass:"inner-btn",attrs:{href:"javascript:;"}},[t._v("立即預約")])])]),s("div",{staticClass:"carousel-item"},[s("img",{staticClass:"d-block w-100",attrs:{src:e("ebeb"),alt:"美容院圖片"}}),s("div",{staticClass:"inner-text"},[s("h3",[s("span",[t._v("時")]),s("span",[t._v("尚")]),s("br"),t._v("是一種生活態度")]),s("a",{staticClass:"inner-btn",attrs:{href:"javascript:;"}},[t._v("立即預約")])])]),s("div",{staticClass:"carousel-item"},[s("img",{staticClass:"d-block w-100",attrs:{src:e("e05d"),alt:"染髮"}}),s("div",{staticClass:"inner-text"},[s("h3",[t._v("給自己一個"),s("br"),s("span",[t._v("改")]),s("span",[t._v("變")]),t._v("的契機")]),s("a",{staticClass:"inner-btn",attrs:{href:"javascript:;"}},[t._v("立即預約")])])])]),s("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"prev"}},[s("div",{staticClass:"btn-box"},[s("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Previous")])])]),s("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"next"}},[s("div",{staticClass:"btn-box"},[s("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Next")])])])])}];e.d(a,"a",(function(){return s})),e.d(a,"b",(function(){return i}))},4978:function(t,a,e){t.exports=e.p+"img/設計師4.0426f04d.jpeg"},"4be3":function(t,a,e){"use strict";var s=e("a86f"),i=e.n(s);i.a},"4e59":function(t,a,e){t.exports=e.p+"img/boy3.f71c6376.jpg"},"4fe2":function(t,a,e){},"509a":function(t,a,e){"use strict";var s=e("4fe2"),i=e.n(s);i.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t._m(0),e("header",{staticClass:"js-scroll"},[e("div",{staticClass:"container"},[e("div",{staticClass:"nav"},[t._m(1),e("nav",[e("router-link",{attrs:{to:"/"}},[t._v("HOME | 首頁")]),e("router-link",{attrs:{to:"/serve"}},[t._v("SERVE | 服務")]),e("router-link",{attrs:{to:"/popularCut"}},[t._v("POPULAR CUT | 熱門髮型")]),e("router-link",{attrs:{to:"/location"}},[t._v("LOATION | 店址")]),e("a",{attrs:{href:"javascript:;"},on:{click:t.FB}},[t._v("FB | 粉絲專頁")]),e("router-link",{attrs:{to:"/reservation"}},[t._v("RESERVATION | 線上預約")])],1)])]),e("a",{staticClass:"menu-toggle",attrs:{href:"javascript:"},on:{click:t.menuToggle}},[e("span"),e("span"),e("span")])]),e("div",{staticClass:"main"},[e("div",{staticClass:"popup-menu"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"popup-menu-mark col-12",on:{click:t.menuToggle}}),e("nav",{staticClass:"popup-menu-nav col-8 col-sm-5"},[e("ul",[e("li",[e("router-link",{attrs:{to:"/"}},[e("span",[t._v(" HOME | 首頁")]),e("i",{staticClass:"icon icon-left-dir"})])],1),e("li",[e("router-link",{attrs:{to:"/serve"}},[e("span",[t._v(" SERVE | 服務")]),e("i",{staticClass:"icon icon-left-dir"})])],1),e("li",[e("router-link",{attrs:{to:"/popularCut"}},[e("span",[t._v(" POPULAR CUT | 熱門髮型")]),e("i",{staticClass:"icon icon-left-dir"})])],1),e("li",[e("router-link",{attrs:{to:"/location"}},[e("span",[t._v("LOATION | 店址")]),e("i",{staticClass:"icon icon-left-dir"})])],1),e("li",[e("a",{attrs:{href:"javascript:;"},on:{click:t.FB}},[e("span",[t._v("FB | 粉絲專頁")]),e("i",{staticClass:"icon icon-left-dir"})])]),e("li",[e("router-link",{attrs:{to:"/reservation"}},[e("span",[t._v("RESERVATION | 線上預約")]),e("i",{staticClass:"icon icon-left-dir"})])],1)])])])]),e("router-view")],1)])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"loading"},[s("h1",[t._v("Loading...")]),s("img",{attrs:{src:e("c520"),alt:""}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"log"},[s("img",{attrs:{src:e("c520"),alt:"LOGO"}})])}],r=e("1157"),c=e.n(r),o={data:function(){return{pre:0}},methods:{menuToggle:function(){c()(".js-scroll").toggleClass("active"),c()(".popup-menu").fadeToggle(),c()(".popup-menu  nav").toggleClass("nav-active")},FB:function(){alert("敬請期待")},scrollEvent:function(){var t=this;c()(window).on("scroll",(function(){var a=c()(window).scrollTop();a>=200&&a>t.pre&&c()(".js-scroll").addClass("fading"),a<t.pre&&c()(".js-scroll").removeClass("fading"),t.pre=a}))}},mounted:function(){c()(".popup-menu").hide(),this.scrollEvent(),setTimeout((function(){c()(".loading").fadeOut()}),3e3)},updated:function(){c()(".js-scroll").removeClass("active"),c()(".popup-menu").fadeOut(),c()(".popup-menu  nav").removeClass("nav-active")}},l=o,d=(e("5c0b"),e("2877")),u=Object(d["a"])(l,i,n,!1,null,null,null),p=u.exports,v=(e("d3b7"),e("8c4f")),f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home mainArea"},[e("Banner"),e("HotInfo"),e("Award"),e("Recommend"),t._m(0),e("HomeFooter")],1)},m=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"youtube"},[e("div",{staticClass:"container"},[e("div",{staticClass:"youtube-inner"},[e("iframe",{attrs:{width:"1060px",height:"596px",src:"https://www.youtube.com/embed/PbTQQFdbEL4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])}],g=(e("99af"),e("4989"),e("40cf")),b=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"hotInfo"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t._m(0),s("div",{staticClass:"col-12 col-lg-8 inner-pic"},[s("div",{staticClass:"btn-group mr-2 order-lg-1",attrs:{role:"group","aria-label":"First group"}},[s("button",{staticClass:"btn btn-secondary",class:{active:t.sex_active},attrs:{type:"button"},on:{click:function(a){t.sex_active=!0}}},[t._v("女 ")]),s("button",{staticClass:"btn btn-secondary",class:{active:!t.sex_active},attrs:{type:"button"},on:{click:function(a){t.sex_active=!1}}},[t._v("男")])]),s("div",{staticClass:"box"},[s("transition",{attrs:{mode:"out-in"}},[t.sex_active?s("div",{key:"girl",staticClass:"row"},[s("div",{staticClass:"col-6 col-md-4 pic-item"},[s("img",{attrs:{src:e("213f"),alt:"女髮1"}})]),s("div",{staticClass:"col-6 col-md-4 pic-item"},[s("img",{attrs:{src:e("828c"),alt:"女髮2"}})]),s("div",{staticClass:"col-6 col-md-4 pic-item"},[s("img",{attrs:{src:e("bbce"),alt:"女髮3"}})]),s("div",{staticClass:"col-6 col-md-4 pic-item"},[s("img",{attrs:{src:e("d0ba"),alt:"女髮4"}})]),s("div",{staticClass:"col-6 col-md-4 pic-item pic-item-ex"},[s("img",{attrs:{src:e("4163"),alt:"女髮3"}})]),s("div",{staticClass:"col-6 col-md-4 pic-item pic-item-ex"},[s("img",{attrs:{src:e("9e51"),alt:"女髮4"}})])]):s("div",{key:"boy",staticClass:"row"},[s("div",{staticClass:"col-6 col-md-4 pic-item"},[s("img",{attrs:{src:e("1d0a"),alt:"男髮1"}})]),s("div",{staticClass:"col-6 col-md-4 pic-item"},[s("img",{attrs:{src:e("0b5c"),alt:"男髮2"}})]),s("div",{staticClass:"col-6 col-md-4 pic-item"},[s("img",{attrs:{src:e("4e59"),alt:"男髮3"}})]),s("div",{staticClass:"col-6 col-md-4 pic-item"},[s("img",{attrs:{src:e("f2e1"),alt:"男髮4"}})]),s("div",{staticClass:"col-6 col-md-4 pic-item pic-item-ex"},[s("img",{attrs:{src:e("dec6"),alt:"男髮3"}})]),s("div",{staticClass:"col-6 col-md-4 pic-item pic-item-ex"},[s("img",{attrs:{src:e("1bda"),alt:"男髮4"}})])])])],1)])])]),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 100",preserveAspectRatio:"none"}},[s("path",{staticClass:"elementor-shape-fill",attrs:{d:"M500.2,94.7L0,0v100h1000V0L500.2,94.7z"}})])])},C=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-12 col-lg-4 inner-text"},[e("h2",[t._v("今夏熱門造型")]),e("i",{staticClass:"icon icon-scissors"}),e("p",[t._v("千變萬化-看見新的自己")]),e("p",[t._v("我們一同，探索時尚 ")])])}],h={data:function(){return{sex_active:!0,box_height:0}},mounted:function(){var t=c()(".container").width();this.box_height=t<930?t:t/2*.85,c()(".box").height(this.box_height+"px")}},A=h,E=(e("d9d6"),Object(d["a"])(A,b,C,!1,null,"0ca96579",null)),k=E.exports,x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Recomment"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 100",preserveAspectRatio:"none"}},[e("path",{staticClass:"elementor-shape-fill",attrs:{d:"M500.2,94.7L0,0v100h1000V0L500.2,94.7z"}})]),t._m(0)])},_=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("h2",{staticClass:"subtitle "},[t._v("看看他們怎麼說")]),s("div",{staticClass:"Recommend_group"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"Recommend_card  wow flipInY",attrs:{"data-wow-duration":"1s"}},[s("div",{staticClass:"Recommend_card_inner"},[s("p",{staticClass:"Recommend_card_text"},[t._v(" 第一次體驗玩髮的服務就讓我驚艷，"),s("br"),t._v(" 設計師很有耐心聽我的想法，還會提出造型建議。"),s("br"),t._v(" 這邊的服務專業又多樣，大家一定要試試。 ")]),s("h4",{staticClass:"Recommend_card_title"},[t._v("華盛頓時尚教主 "),s("span",[t._v("--")]),t._v(" Jane Yu")])]),s("div",{staticClass:"Recommend_card_icon"},[s("img",{attrs:{src:e("bdc1"),alt:"設計師1"}})])])]),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"Recommend_card wow flipInY",attrs:{"data-wow-duration":"1s","data-wow-delay":"0.5s"}},[s("div",{staticClass:"Recommend_card_inner"},[s("p",{staticClass:"Recommend_card_text"},[t._v(" 當初選擇了玩髮，作為改變的開始，"),s("br"),t._v(" 才讓我知道時尚也能這麼簡單。"),s("br"),t._v(" 揚名國際的高品質，可謂是時尚界的一大福音! ")]),s("h4",{staticClass:"Recommend_card_title"},[t._v("翰柏企業CEO "),s("span",[t._v("--")]),t._v(" Memory Square")])]),s("div",{staticClass:"Recommend_card_icon"},[s("img",{attrs:{src:e("97ac"),alt:"設計師2"}})])])]),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"Recommend_card wow flipInY",attrs:{"data-wow-duration":"1s","data-wow-delay":"1s"}},[s("div",{staticClass:"Recommend_card_inner"},[s("p",{staticClass:"Recommend_card_text"},[t._v(" 從沒有想過能有CP值這麼高的服務，"),s("br"),t._v(" 實惠的價格卻擁有卓越的水準，"),s("br"),t._v(" 玩髮讓我在繁忙的生活中依然保持著時尚。 ")]),s("h4",{staticClass:"Recommend_card_title"},[t._v("Taiwan Psy會長 "),s("span",[t._v("--")]),t._v(" Wei Cheng")])]),s("div",{staticClass:"Recommend_card_icon"},[s("img",{attrs:{src:e("d28f"),alt:"設計師3"}})])])]),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"Recommend_card wow flipInY",attrs:{"data-wow-duration":"1s","data-wow-delay":"1.5s"}},[s("div",{staticClass:"Recommend_card_inner "},[s("p",{staticClass:"Recommend_card_text"},[t._v(" 好奇為什麼閨蜜會那麼漂亮，陪同下來到玩髮，"),s("br"),t._v(" 體驗一整套洗剪染燙，結果真的很滿意!"),s("br"),t._v(" 從此之後，玩髮是我打理自己的唯一選擇。 ")]),s("h4",{staticClass:"Recommend_card_title"},[t._v("日本暢銷作家 "),s("span",[t._v("--")]),t._v(" Shimodate Yuu")])]),s("div",{staticClass:"Recommend_card_icon"},[s("img",{attrs:{src:e("4978"),alt:"設計師4"}})])])])])])])}],w=(e("3d13"),{}),P=Object(d["a"])(w,x,_,!1,null,"a3b2cd96",null),I=P.exports,y=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"award"},[s("div",{staticClass:"mark"}),s("div",{staticClass:"container"},[s("h2",[t._v("玩髮二十年，值得您信賴")]),s("p",{staticClass:"title-content"},[t._v("1998年台北總店成立迄今，榮獲各大好評")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-10 col-md-4 item"},[s("div",{staticClass:"img-box"},[s("img",{attrs:{src:e("7f58"),alt:""}})]),s("p",[t._v("2019全美時尚之星")]),s("p",[t._v("美容造型組 TOP1 優勝")])]),s("div",{staticClass:"col-10 col-md-4 item"},[s("div",{staticClass:"img-box "},[s("img",{attrs:{src:e("a0fd"),alt:""}})]),s("p",[t._v("2017~2019連續蟬聯")]),s("p",[t._v("模擬設計-亞洲區大賽冠軍")])]),s("div",{staticClass:"col-10 col-md-4 item"},[s("div",{staticClass:"img-box "},[s("img",{attrs:{src:e("1fe1"),alt:""}})]),s("p",[t._v("享譽各大社群媒體")]),s("p",[t._v("粉絲成長速度世界第一")])])])])])}],j=(e("a68e"),{}),B=Object(d["a"])(j,y,R,!1,null,"386bff4a",null),Q=B.exports,O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer"},[t._m(0),e("div",{staticClass:"container"},[e("nav",[e("router-link",{attrs:{to:"/serve"}},[t._v("服務")]),e("router-link",{attrs:{to:"/popularCut"}},[t._v("髮型")]),e("router-link",{attrs:{to:"/location"}},[t._v("店址")]),e("a",{attrs:{href:"javascript:;"},on:{click:t.FB}},[t._v("粉絲專頁")]),e("router-link",{attrs:{to:"/reservation"}},[t._v("線上預約")])],1)]),t._m(1)])},S=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"info"},[s("div",{staticClass:"row"},[s("div",{staticClass:"qrCode"},[s("img",{attrs:{src:e("65e2"),alt:""}})]),s("div",{staticClass:"info-inner"},[s("p",[t._v(" 玩髮-實現你的想法"),s("br"),t._v(" 提供各種造型、髮質護理服務，"),s("br",{staticClass:"sp-br"}),t._v("給您既舒適又滿意的高品質。 ")]),s("p",[t._v(" 平日晚上與假日顧客較多，"),s("br",{staticClass:"sp-br"}),t._v("請先來電或線上預約"),s("br"),s("span",[t._v("Weekdays and holidays, please call or make an online reservation.")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"coyRight"},[s("img",{attrs:{src:e("0d3b"),alt:""}}),t._v(" 玩髮 - 模擬專案 Copyright © YunTao.Lin ｜"),s("a",{attrs:{href:"https://github.com/YunTaoLin/play-hair"}},[t._v(" Github ")])])}],X={methods:{FB:function(){alert("敬請期待")}}},L=X,T=(e("e53c"),Object(d["a"])(L,O,S,!1,null,"62f46d73",null)),F=T.exports,H={name:"home",components:{Banner:g["default"],HotInfo:k,Recommend:I,Award:Q,HomeFooter:F},mounted:function(){window.scrollTo(0,0);var t=document.querySelector(".mainArea").getAttribute("class");t=t.concat(" updatePage"),document.querySelector(".mainArea").setAttribute("class",t)}},J=H,D=(e("509a"),Object(d["a"])(J,f,m,!1,null,"35de36bf",null)),U=D.exports;s["a"].use(v["a"]);var z=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:U},{path:"/serve",name:"serve",component:function(){return e.e("chunk-9b11f710").then(e.bind(null,"0c33"))}},{path:"/popularCut",name:"popularCut",component:function(){return e.e("chunk-0ad67b4b").then(e.bind(null,"5b75"))}},{path:"/location",name:"location",component:function(){return e.e("chunk-7b0a37f0").then(e.bind(null,"8e3a"))}},{path:"/reservation",name:"reservation",component:function(){return e.e("chunk-2e5c50db").then(e.bind(null,"2b83"))}}],N=new v["a"]({routes:z}),K=N;s["a"].config.productionTip=!1,new s["a"]({router:K,render:function(t){return t(p)}}).$mount("#app")},5888:function(t,a,e){"use strict";var s=e("7afa"),i=e.n(s);i.a},"5c0b":function(t,a,e){"use strict";var s=e("9c0c"),i=e.n(s);i.a},"5f01":function(t,a,e){},"65e2":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAYAAAA8uqNSAAAIDklEQVR4Xu2d25LbMAxDm///6HTaXDrxrn0IgYqzFfpKiiJBEJKdbHq5Xq/XX/kXBHYQuIQg4cYRAiFI+HGIQAgSgoQg4cA4AlGQceyWWBmCLNHm8SJDkHHsllgZgizR5vEiQ5Bx7JZYWSbI5XJ5KyDdL3gpf9pvu578VbAoPzUe+VfzD0HuSBJgIQhQ7lMZTpPysFP+Icj3SEZBoiA9b1LfLbHbiVb3d/2rylT1+zSFonyeylv9NFcFvArc3hEQgvR+C2O0f8NHTJWBVaJQAWTf7uP6V/Ou+hFear7VfasDuBcvBLkjQ5dYtSFb/+UJogLsHiFqw2bnR/FdglB8IuSoQrUpyFkFVIkyOz+KH4KIb1qjIK/UpgknAkZBqlKx4zcbYIofBTlZQdQGkT9NpPvUpK538yWFmv4Uc1YBo6/S3XzVBpMAUgPdfCl+CLL58x8X8BBkgwAx0AWc4qsTSEeEm28I8mEEURtKBJnd4O791fq7nhJ/zHsQFaDuBnUrmEpQtf4QhDq2sbuPmbQdNdDdn+LTQIwe4VGQO7KjAI4+RS2nIDRhZHcb5AJOE+7GnzXhhOsegav1tilINdHd5+3Ni7ZqAaPxXELSejoSuu4IVdwp3+nvQaqJjjZUjU+AkJ32o/UhSPPvzhDg1DD3CFAVi/JdniBqw1R/VYLVhn16fBUv1b86EMN3EDUh1f/TGzg7PxUv1T8Egc9eZjfYja82XPUPQUKQQ860E0Rl6Gx/unPQ/u4lkuKTvdogijPbXr6DzE5EjR+CqIiN+YcgO7jRHWIM7n+roiAugrA+CjIZ4Hv4soJQQ2bbCQ7aX12/9SdFma0Ian2q/x4+IchjUuBL1yGIKenEWNeuKoA60e5Tjbof1bO1E36ufxREHIAcMTcEykeMy3ha70q4OmE0cUQQqofiv7veUXxCkME7SAiiIrDxpzOdJlRlvOpPE075qfBQfmSnfOkOpMZ/7BcFiYIccr2NICpDSWG6z2iaeJpAd4JpPSkW4Ut4Unz7KYYApgJmA6TGHwXsKb3md2ipoeqAULzReqMgd+SiIN9LQAgSgrznDqJKPE2sKpkkoe4RSJJPRzDVOxs/df/Tn2Io4RDk+D9PUPEj/+mX1NkTQBMaBXlFQFXMEER86iCAVYVTJ5jiUzzKvzpw0y6pNNGq4nTHI4ApP1pPDZpNADd++x3ETYjWhyDaEUJ4EsFDEPFPR0kRVMVxG0j5uPFDkBCkdA2ZdgepSlgpyz9fXIFLpjox3fFIQap1PvwIP8qf8qH40xWkmkAVOAIkBDn+/2UIv+mPuaMJhCDfI0ADpuKt+kdBmo8skvTqIPzYI+bdEt79WEvxqD5arxKACKV+9uP620cMAUgJkp0AViVXjUf1hSCAKAFIBCC72lCaQDUe1ReChCDEqRc7KZoU7A2P8aMEH34PQhNHikEA061b3V9VHMpfBZzydeNRvoS3fQfpBpgSDkG89xqEX1XhoiA7SNFEuhNPDeoeIIoXBdkgQJIfgtwAO01B1AkiySQ77ecSxiXU2ft/nIJQwwhw1U77nd2gs/cPQT7sMZ4ITnccUkyVcCFICDL0HqftDkK3ZGI8PUarE0dHihqP6qP9qD5SDHe9iv9jvxDkjkSXJFeJ4u6nrg9Bqp25+0VBjl/ERUHE/2g5R4w4gapkkSSqZ7CY7hd3NX/aT41H/oQXEdZdf7qCEOAEAK0nOzWI1tOlkfKn/d0Gu+tDEPFPMYkw1HCVUG6D3fUhSAhCnP9rLz/m0oR0MfbJXPOnsd07jVtvCf1GJ3oqoyNvL5UQZAeZEOQGTAgSghzqWAgSgvQQhG7h6nFKZ6YbT11P/uodi/xpP7KP3iko7pc+Xwd3cgEIQdRWvfoPtk3etHzEREG0H5VzB4g6GYIQQhv7bMCo4d2KSOXPrvf5umH0iKECuu3UIHc/tcHUIMqX1pNiq/lu41X3Hz5i3Iao6wlwNR4BRvsRwO76EETsKAEuhvvirk5kCOIi3rw+BHm9JKuEJsXca1f5iJndILUAyocAJLvKbzUe+ZOd8FLxCUHMXxQiwnQ3tDseESoECUFeOEB3KPkxlySLJky1UwGUD00g2d18352fWg/haxOkukEVaPp4ffZjH0mw2nA1X8JJ3V/Fs/2ICUFeISU83IaFIOJXAAlwApQmtluyKV/Kh+qhfInAURDqwMZOgNORlCNG/MMjApQmTLXTftRAd71KMJG/v0gRCK/qfsMvylwAaL1rdxvsrqf8qw3a8wtBQKHUBqiAhiA3BKIgdyaol0A6olQCq4qiEp78p19SCWCayK4zc7dQ803qKMCPfNT6CE8ioJvvM+/qF4aoQCooBDn+NJYU6Sz8fswRo0owAU4TSA1R86EBo3wpHzV+Nf8QpOkOQoCrDSRFJoIvd8QQYNSgbkCp4WSnfNV6iRCj+fwYBVEBmy3JBDjZQxBAQJ3oEOQY0CgI/BwETaRKSIpHCkF2NT75fzxBqACydwNKgL07H9qP8lXxUf2nvygjAMjuFuSup8dMaiCtp/opvlqf6h+CUIc2dhdg9c4UgkCDuhtCgBNfuvOh/ShfNR/Vv11BqGDXrl4qaWIpXvdjMeWj7kf+6hFHhHzEG34P4hKA1lNDyU6AUgMpPgFM8bvzC0GaP42lBoYgN8pFQXakLAQRCUJHQuz/JwJlBfk/y09VhEAIQggtbg9BFicAlR+CEEKL20OQxQlA5YcghNDi9hBkcQJQ+SEIIbS4PQRZnABU/m95bXsdc+fYDQAAAABJRU5ErkJggg=="},"6f4e":function(t,a,e){"use strict";var s=e("1bde"),i=e.n(s);a["default"]=i.a},"7afa":function(t,a,e){},"7f58":function(t,a,e){t.exports=e.p+"img/獎盃2.b11463ee.png"},"828c":function(t,a,e){t.exports=e.p+"img/girl2.d0aa817c.jpg"},"97ac":function(t,a,e){t.exports=e.p+"img/設計師2.61b9ef22.jpeg"},"9c0c":function(t,a,e){},"9e51":function(t,a,e){t.exports=e.p+"img/girl6.48af361b.jpg"},a0fd:function(t,a,e){t.exports=e.p+"img/獎盃.56c221b2.png"},a68e:function(t,a,e){"use strict";var s=e("5f01"),i=e.n(s);i.a},a86f:function(t,a,e){},ab36:function(t,a,e){},bbce:function(t,a,e){t.exports=e.p+"img/girl3.2621f4e6.jpg"},bdc1:function(t,a,e){t.exports=e.p+"img/設計師1.56ca17b1.jpeg"},c520:function(t,a,e){t.exports=e.p+"img/LOGO.ba5df7e8.jpg"},d0ba:function(t,a,e){t.exports=e.p+"img/girl4.9b340a93.jpg"},d28f:function(t,a,e){t.exports=e.p+"img/設計師3.5c8f3ebf.jpeg"},d5b3:function(t,a,e){t.exports=e.p+"img/test.7a696ba9.webp"},d9d6:function(t,a,e){"use strict";var s=e("320d"),i=e.n(s);i.a},dec6:function(t,a,e){t.exports=e.p+"img/boy5.aa1a6273.jpg"},e05d:function(t,a,e){t.exports=e.p+"img/理髮廳3.cdb6a4c0.jpg"},e53c:function(t,a,e){"use strict";var s=e("e719"),i=e.n(s);i.a},e719:function(t,a,e){},ebeb:function(t,a,e){t.exports=e.p+"img/test2.111f5773.jpg"},f2e1:function(t,a,e){t.exports=e.p+"img/boy4.309b66b1.jpg"}});
//# sourceMappingURL=app.12800d9d.js.map