webpackJsonp([1],{"+TAp":function(t,e){},"3wkl":function(t,e){},"5MMn":function(t,e){},"9FaD":function(t,e){},BjtM:function(t,e){},FZep:function(t,e){},IrTS:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("x/+d")},null,null).exports,r=i("/ocq"),c=i("Dd8w"),o=i.n(c),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._v(" "),i("span",{staticClass:"iconfont searchIcon"},[t._v("")]),t._v(" "),i("input",{staticClass:"headerMid ",attrs:{type:"text",placeholder:"输入城市/景点/游玩主题"}}),t._v(" "),i("router-link",{attrs:{to:"/City"}},[i("div",{staticClass:"headerRight"},[t._v(t._s(this.$store.state.city)),i("span",{staticClass:"iconfont arrowIcon"},[t._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headerLeft"},[e("div",{staticClass:"iconfont backIcon"},[this._v("")])])}]};var u=i("VU/8")({name:"HomeHeader"},l,!1,function(t){i("uJJs")},"data-v-3f64e135",null).exports,d={name:"homeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"},autoplay:{delay:1500,stopOnLastSlide:!1,disableOnInteraction:!1},loop:!0,speed:800}}},computed:{showSwiper:function(){return this.list.length}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.list,function(e){return t.showSwiper?i("swiper-slide",{key:e.id},[i("img",{staticClass:"swiperImg",attrs:{src:e.imgUrl,alt:""}})]):t._e()}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var v=i("VU/8")(d,h,!1,function(t){i("FZep")},"data-v-7cb09f26",null).exports,m={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"iconImg"},[i("img",{staticClass:"iconImgContent",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("p",{staticClass:"iconDesc"},[t._v(t._s(e.desc))])])}),0)}),1)],1)},staticRenderFns:[]};var p=i("VU/8")(m,f,!1,function(t){i("WFzE")},"data-v-c09e19de",null).exports,_={name:"HomeRecommend",props:{list:Array}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommendTitle"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{to:"/detail/"+e.id,tag:"li"}},[i("img",{staticClass:"itemImg",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("div",{staticClass:"itemInfo"},[i("p",{staticClass:"itemTitle"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"itemDesc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"itemBtn"},[t._v("查看详情")])])])}),1)])},staticRenderFns:[]};var y=i("VU/8")(_,C,!1,function(t){i("OhRs")},"data-v-5ca670a8",null).exports,g={name:"HomeWeekend",props:{list:Array}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommendTitle"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"itemImgWapper"},[i("img",{staticClass:"itemImg",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"itemInfo"},[i("p",{staticClass:"itemTitle"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"itemDesc"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var k=i("VU/8")(g,w,!1,function(t){i("OH56")},"data-v-07732918",null).exports,b=i("mtWM"),x=i.n(b),S=i("NYxO"),I={name:"Home",components:{HomeHeader:u,homeSwiper:v,HomeIcon:p,HomeRecommend:y,HomeWeekend:k},computed:o()({},Object(S.b)(["city"])),methods:{getHomeInfo:function(){x.a.get("https://hhx123.github.io/travelvue/static/mock/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icon",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var A=i("VU/8")(I,L,!1,function(t){i("kheU")},null,null).exports,$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n  城市选择\n  "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont headerBack"},[this._v("")])])],1)},staticRenderFns:[]};var E=i("VU/8")({name:"CityHeader"},$,!1,function(t){i("S9Z9")},"data-v-77aa7048",null).exports,F=i("GQaK"),H={name:"CitySearch",props:{cities:Object},data:function(){return{keyWord:"",list:[],timer:null}},methods:{cityClick:function(t){this.$store.dispatch("changeCity",t),this.$router.push("/")}},mounted:function(){this.scroll=new F.a(this.$refs.searchContent)},computed:{noData:function(){return!this.list.length}},watch:{keyWord:function(){var t=this;this.timer&&clearTimeout(this.timer),""!==this.keyWord?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyWord)>-1||i.name.indexOf(t.keyWord)>-1)&&e.push(i)});t.list=e},100):this.list=[]}}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyWord,expression:"keyWord"}],staticClass:"searchInput",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyWord},on:{input:function(e){e.target.composing||(t.keyWord=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyWord,expression:"keyWord"}],ref:"searchContent",staticClass:"searchContent"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"searchItem border-bottom",on:{click:function(i){return t.cityClick(e.name)}}},[t._v(t._s(e.name))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.noData,expression:"noData"}],staticClass:"searchItem border-bottom"},[t._v("无结果")])],2)])])},staticRenderFns:[]};var U=i("VU/8")(H,R,!1,function(t){i("IrTS")},"data-v-58456f35",null).exports,O={name:"CityList",props:{cities:Object,hotcities:Array,letter:String},mounted:function(){this.scroll=new F.a(this.$refs.wrapper)},methods:{cityClick:function(t){this.$store.dispatch("changeCity",t),this.$router.push("/")}},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"buttonList"},[i("div",{staticClass:"buttonWapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.$store.state.city))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"buttonList"},t._l(t.hotcities,function(e){return i("div",{key:e.id,staticClass:"buttonWapper",on:{click:function(i){return t.cityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"itemList"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){return t.cityClick(e.name)}}},[t._v("\n        "+t._s(e.name)+"\n        ")])}),0)])})],2)])},staticRenderFns:[]};var W=i("VU/8")(O,V,!1,function(t){i("mxp8")},"data-v-6c98ff44",null).exports,j={name:"CityAlpha",props:{cities:Object},computed:{letter:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{touchStatus:!1}},methods:{handleClick:function(t){this.$emit("change",t.target.innerText)},touchStart:function(){this.touchStatus=!0},touchMove:function(t){this.touchStatus},touchEnd:function(){this.touchStatus=!0}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.cities,function(e,s){return i("li",{key:s,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleClick,touchStart:t.touchStart,touchMove:t.touchMove,touchEnd:t.touchEnd}},[t._v("\n   "+t._s(s)+"\n   ")])}),0)},staticRenderFns:[]};var T={name:"City",components:{CityHeader:E,CitySearch:U,CityList:W,CityAlpha:i("VU/8")(j,D,!1,function(t){i("+TAp")},"data-v-63a35ccd",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){x.a.get("https://hhx123.github.io/travelvue/static/mock/city.json").then(this.getCityInfoSucc)},getCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hotcities:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alpha",{attrs:{cities:t.cities},on:{change:t.handleChange}})],1)},staticRenderFns:[]};var M=i("VU/8")(T,N,!1,function(t){i("wjVf")},"data-v-77a55522",null).exports,B={name:"CommonGallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{pagination:{el:".gallary-pagination",type:"fraction"},observeParents:!0,observer:!0}}},methods:{gallaryClick:function(){this.$emit("close")}}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.gallaryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallaryImg",attrs:{src:t,alt:""}})])}),this._v(" "),e("div",{staticClass:"gallary-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var G={name:"DetailBanner",components:{CommonGallary:i("VU/8")(B,z,!1,function(t){i("p9DX")},"data-v-4635e3da",null).exports},data:function(){return{imgs:["https://img1.qunarzz.com/vs_ceph_vs_tts/fdf618dc-2903-4b60-ac89-ee524718e0fc.jpg_r_640x420x90_4ebd5f98.jpg","https://img1.qunarzz.com/vs_ceph_vs_tts/fdf618dc-2903-4b60-ac89-ee524718e0fc.jpg_r_640x420x90_4ebd5f98.jpg"],showGallary:!1}},methods:{clickBanner:function(){this.showGallary=!0},gallaryClose:function(){this.showGallary=!1}}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"banner",on:{click:this.clickBanner}},[e("img",{staticClass:"bannerImg",attrs:{src:"https://img1.qunarzz.com/vs_ceph_vs_tts/8440d8e0-c342-4891-8e32-80942aff1f46.jpg_r_640x420x90_5905cad3.jpg",alt:""}}),this._v(" "),this._m(0)]),this._v(" "),e("common-gallary",{directives:[{name:"show",rawName:"v-show",value:this.showGallary,expression:"showGallary"}],attrs:{imgs:this.imgs},on:{close:this.gallaryClose}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bannerInfo"},[e("div",{staticClass:"bannerLeft"},[this._v("1231231231312")]),this._v(" "),e("div",{staticClass:"bannerRight"},[e("span",{staticClass:"iconfont bannerIcon"},[this._v("")]),this._v("2")])])}]};var J={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handelScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},activated:function(){window.addEventListener("scroll",this.handelScroll)}},q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"headerAbs"},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont backIcon"},[this._v("")])])],1),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"headerFixed",style:this.opacityStyle},[this._v("\n    景点详情\n  "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont headerFixedBack"},[this._v("")])])],1)])},staticRenderFns:[]};var P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"commentTop"},[i("p",{staticClass:"starTitle"},[t._v("填写评分：")]),t._v(" "),i("div",{staticClass:"starwapper"},[i("ul",{staticClass:"stars"},t._l(t.starList,function(e,s){return i("li",{key:s,class:{starDefault:e.isActive,starLight:!e.isActive},on:{click:function(e){return t.clickStar(s)}}})}),0)])]),t._v(" "),i("textarea"),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btnwapper"},[e("button",[this._v("提交")])])}]};var X={name:"Detail",components:{DetailBanner:i("VU/8")(G,Z,!1,function(t){i("3wkl")},"data-v-5b24d316",null).exports,DetailHeader:i("VU/8")(J,q,!1,function(t){i("5MMn")},"data-v-11146e91",null).exports,SubmitComment:i("VU/8")({name:"SubmitComment",data:function(){return{starList:[{isActive:!0},{isActive:!0},{isActive:!0},{isActive:!0},{isActive:!0}],starNum:0}},methods:{clickStar:function(t){var e=this.starList.length;if(0===this.starNum){this.starNum=t;for(var i=0;i<e;i++)i<=t&&(this.starList[i].isActive=!this.starList[i].isActive)}else for(var s=0;s<e;s++)this.starList[s].isActive=s>t}}},P,!1,function(t){i("9FaD")},"data-v-4e9f7eee",null).exports}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner"),this._v(" "),e("detail-header"),this._v(" "),e("div",{staticClass:"content"},[e("submit-comment")],1)],1)},staticRenderFns:[]};var K=i("VU/8")(X,Q,!1,function(t){i("yZN+")},"data-v-b2d73226",null).exports;s.a.use(r.a);var Y=new r.a({routes:[{path:"/",name:"Home",component:A},{path:"/city",name:"City",component:M},{path:"/detail/:id",name:"Detail",component:K}]}),tt=i("DVXL"),et=i.n(tt),it="中山";try{localStorage.city&&(it=localStorage.city)}catch(t){}var st={city:it},nt={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(S.a);var at=new S.a.Store({state:st,actions:{changeCity:function(t,e){t.commit("changeCity",e)}},mutations:nt}),rt=(i("m0iu"),i("cjdf"),i("BjtM"),i("7QTg")),ct=i.n(rt);i("v2ns");s.a.config.productionTip=!1,et.a.attach(document.body),s.a.use(ct.a),new s.a({el:"#app",router:Y,store:at,components:{App:a},template:"<App/>"})},OH56:function(t,e){},OhRs:function(t,e){},S9Z9:function(t,e){},WFzE:function(t,e){},cjdf:function(t,e){},kheU:function(t,e){},m0iu:function(t,e){},mxp8:function(t,e){},p9DX:function(t,e){},uJJs:function(t,e){},v2ns:function(t,e){},wjVf:function(t,e){},"x/+d":function(t,e){},"yZN+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1b9d9f1e195d4ee97627.js.map