(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b0a37f0"],{"076e":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("nav",[a("router-link",{attrs:{to:"/home"}},[t._v("首頁")]),a("router-link",{attrs:{to:"/serve"}},[t._v("服務")]),a("router-link",{attrs:{to:"/popularCut"}},[t._v("髮型")]),a("router-link",{attrs:{to:"/location"}},[t._v("店址")]),a("a",{attrs:{href:"javascript:;"},on:{click:t.FB}},[t._v("粉絲專頁")]),a("router-link",{attrs:{to:"/reservation"}},[t._v("線上預約")])],1)]),t._m(0)])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"coyRight"},[i("img",{attrs:{src:a("0d3b"),alt:""}}),t._v(" 玩髮 - 模擬專案 Copyright © YunTao.Lin ｜"),i("a",{attrs:{href:"https://github.com/YunTaoLin/play-hair"}},[t._v(" Github ")])])}],s={methods:{FB:function(){alert("敬請期待")}}},m=s,o=(a("1b1e"),a("2877")),n=Object(o["a"])(m,i,r,!1,null,"49fdf657",null);e["a"]=n.exports},"1b1e":function(t,e,a){"use strict";var i=a("b43f"),r=a.n(i);r.a},"46cd":function(t,e,a){},"4de4":function(t,e,a){"use strict";var i=a("23e7"),r=a("b727").filter,s=a("1dde");i({target:"Array",proto:!0,forced:!s("filter")},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"53c9":function(t,e,a){"use strict";var i=a("46cd"),r=a.n(i);r.a},"8e3a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"location mainArea"},[a("div",{staticClass:"container"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.area,expression:"area"}],staticClass:"area",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.area=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"tw"}},[t._v("全部")]),a("option",{attrs:{value:"tp"}},[t._v("北部地區")]),a("option",{attrs:{value:"tz"}},[t._v("中部地區")]),a("option",{attrs:{value:"tn"}},[t._v("南部地區")]),a("option",{attrs:{value:"other"}},[t._v("海外分部")])]),t._l(t.nowObj,(function(e){return a("div",{key:e.title,staticClass:"item"},[a("div",{staticClass:"row item-inner"},[a("div",{staticClass:"col-12 col-lg-6 info"},[a("h2",[t._v(t._s(e.title))]),a("p",[t._v(" 地址："),a("br",{staticClass:"onlySM"}),t._v(t._s(e.location)),a("br"),t._v(" 電話："+t._s(e.tel))]),a("div",{staticClass:"openTime"},[a("P",[a("span",[t._v(" 營業時間：")]),a("br"),t._v(" "+t._s(e.time1)+" "),a("br"),t._v(" "+t._s(e.time2)+" "),a("br"),t._v(" "+t._s(e.time3)+" "),a("br")])],1)]),a("div",{staticClass:"col-12 col-lg-6 "},[a("div",{staticClass:"map"},[a("iframe",{staticStyle:{border:"0"},attrs:{src:e.mapScr,width:"600",height:"450",frameborder:"0",allowfullscreen:""}})])])])])}))],2),a("MyFooter")],1)},r=[],s=(a("99af"),a("4de4"),a("076e")),m={components:{MyFooter:s["a"]},data:function(){return{area:"tp",obj:[{area:"tp",title:"台北總店",location:"110台北市信義區信義路五段0號",tel:"(02)2025-1234",time1:"週一-週五 09:00-21:30",time2:"週六-週日 11:00-22:00 ",time3:"營業結束前半小時停止排隊",mapScr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0337982990195!2d121.56491741537876!3d25.03292704448771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb11842c25d%3A0x97ce9970c747522!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5L-h576p6Lev5LqU5q61!5e0!3m2!1szh-TW!2stw!4v1572788478958!5m2!1szh-TW!2stw"},{area:"tp",title:"忠孝復興旗艦店",location:"100台北市中正區忠孝東路二段0號",tel:"(02)2025-4567",time1:"週一-週五 09:00-21:30",time2:"週六-週日 11:00-22:00 ",time3:"營業結束前半小時停止排隊",mapScr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.6824908309022!2d121.52924222921584!3d25.04323661402378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97b12b447d1%3A0x106b5b44a3baa5f0!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A5b-g5a2d5p2x6Lev5LqM5q61!5e0!3m2!1szh-TW!2stw!4v1572832253735!5m2!1szh-TW!2stw"},{area:"tz",title:"台中一中街門市",location:"404台中北區一中商圈0號",tel:"(04)881-4567",time1:"週一-週五 09:00-21:00",time2:"週六-週日 11:00-21:30 ",time3:"營業結束前半小時停止排隊",mapScr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.6434543456526!2d120.68281741536751!3d24.149156479342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d68e69dfb63%3A0x913519f67c42519a!2z5LiA5Lit5ZWG5ZyI!5e0!3m2!1szh-TW!2stw!4v1572832489514!5m2!1szh-TW!2stw"},{area:"tz",title:"台中逢甲門市",location:"407台中市西屯區文華路",tel:"(04)881-7788",time1:"週一-週五 09:00-21:00",time2:"週六-週日 11:00-21:30 ",time3:"營業結束前半小時停止排隊",mapScr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.805583879826!2d120.64407926536785!3d24.17855017820123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469162259b6852b%3A0xf1a08e8dacfe639!2z6YCi55Sy5aSc5biC!5e0!3m2!1szh-TW!2stw!4v1572838151564!5m2!1szh-TW!2stw"},{area:"tn",title:"台南站前門市",location:"700台南市中西區中山路0段0號",tel:"(06)6901-457",time1:"週一-週五 09:00-20:40",time2:"週六-週日 11:00-21:00 ",time3:"營業結束前半小時停止排隊",mapScr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7900234164485!2d120.20638151535364!3d22.994747623136867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e76897d8fd83d%3A0x14910a6123330ea4!2zNzAw5Y-w5Y2X5biC5Lit6KW_5Y2A5Lit5bGx6Lev!5e0!3m2!1szh-TW!2stw!4v1572834612678!5m2!1szh-TW!2stw"},{area:"tn",title:"高雄漢神門市",location:"813高雄市左營區博愛二路0號",tel:"(07)520-4567",time1:"週一-週五 09:00-20:40",time2:"週六-週日 11:00-21:00 ",time3:"營業結束前半小時停止排隊",mapScr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.75176944696!2d120.3011071153499!3d22.663041935355338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0503fd408409%3A0x96599d9865afe589!2zODEz6auY6ZuE5biC5bem54ef5Y2A5Y2a5oSb5LqM6Lev!5e0!3m2!1szh-TW!2stw!4v1572837887154!5m2!1szh-TW!2stw"},{area:"other",title:"日本東京旗艦店",location:"110-0005日本東京都文京區湯島二丁目",tel:"(012)345-6789",time1:"週一-週五 09:00-22:00",time2:"週六-週日 08:00-22:30 ",time3:"營業結束前半小時停止排隊",mapScr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12958.719527897656!2d139.756963218293!3d35.70949440688833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c2474a30781%3A0x1d604f9a127ca6fd!2zNCBDaG9tZSDmua_ls7bmlofkuqzljYDmnbHkuqzpg73ml6XmnKw!5e0!3m2!1szh-TW!2stw!4v1572835368479!5m2!1szh-TW!2stw"},{area:"other",title:"美國紐約旗艦店",location:"Second Ave. bet, New York, NY 10022",tel:"202-609-9675",time1:"週一-週五 09:00-22:00",time2:"週六-週日 08:00-22:30 ",time3:"營業結束前半小時停止排隊",mapScr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12088.128543323335!2d-73.95953190881451!3d40.761317922090555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e66c9885cb%3A0xb876db932621447b!2sTramway%20Plaza!5e0!3m2!1szh-TW!2stw!4v1572835716629!5m2!1szh-TW!2stw"}]}},computed:{nowObj:function(){var t=this;if("tw"==this.area)return this.obj;var e=this.obj.filter((function(e){return e.area==t.area}));return e}},mounted:function(){window.scrollTo(0,0);var t=document.querySelector(".mainArea").getAttribute("class");t=t.concat(" updatePage"),document.querySelector(".mainArea").setAttribute("class",t)}},o=m,n=(a("53c9"),a("2877")),c=Object(n["a"])(o,i,r,!1,null,"34da11e4",null);e["default"]=c.exports},b43f:function(t,e,a){},b727:function(t,e,a){var i=a("f8c2"),r=a("44ad"),s=a("7b0b"),m=a("50c4"),o=a("65f0"),n=[].push,c=function(t){var e=1==t,a=2==t,c=3==t,l=4==t,f=6==t,d=5==t||f;return function(u,v,p,b){for(var w,h,_=s(u),g=r(_),z=i(v,p,3),x=m(g.length),A=0,T=b||o,C=e?T(u,x):a?T(u,0):void 0;x>A;A++)if((d||A in g)&&(w=g[A],h=z(w,A,_),t))if(e)C[A]=h;else if(h)switch(t){case 3:return!0;case 5:return w;case 6:return A;case 2:n.call(C,w)}else if(l)return!1;return f?-1:c||l?l:C}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}}}]);
//# sourceMappingURL=chunk-7b0a37f0.9fc5e14c.js.map