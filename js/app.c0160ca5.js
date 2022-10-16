(function(){"use strict";var e={4861:function(e,t,i){i.d(t,{Z:function(){return l}});var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"modal fade",attrs:{id:"modal"+e.doctor.id,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-dialog-centered"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e._v(" "+e._s(e.doctor.name+" "+e.doctor.title)+" ")]),i("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),i("div",{staticClass:"modal-body"},[i("router-link",{attrs:{to:{name:"clinics",params:{branch:e.doctor.branch}}}},[i("div",{staticClass:"tag tag-link",attrs:{"data-bs-dismiss":"modal","aria-label":"Close"}},[e._v(" "+e._s(e.branchValuePair[e.doctor.branch]+"診所")+" ")])]),e.doctor.experience.length>0?i("ul",{staticClass:"my-3"},e._l(e.doctor.experience,(function(t){return i("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0):i("div",{staticClass:"my-3"},[e._v("（尚無資料）")])],1)])])])},s=[],r={props:{doctor:{type:Object},branchValuePair:{type:Object}}},a=r,o=i(1001),c=(0,o.Z)(a,n,s,!1,null,"07e37842",null),l=c.exports},9550:function(e,t,i){var n=i(8935),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("WebBackground",{attrs:{isCovered:e.isCovered},on:{"lift-screen":e.liftScreen}}),i("NavBar",{attrs:{isCovered:e.isCovered}}),i("div",{staticClass:"view",class:[{cover:e.isCovered}],attrs:{id:"view"}},[i("main",[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view",{key:e.$route.name,on:{"lift-screen":e.liftScreen}})],1)],1),i("Footer")],1)],1)},r=[],a=(i(8837),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"web-background"},[i("img",{staticClass:"web-background__tree",attrs:{src:"./background.jpg",alt:""}}),i("div",{class:["web-background__green-screen",{cover:e.isCovered}]}),i("div",{class:["web-background__white-screen",{cover:e.isCovered}]}),i("button",{class:["cover-btn",{cover:e.isCovered}],on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.liftScreen.apply(null,arguments)}}},[i("svg",{staticClass:"cover-btn__text",attrs:{viewBox:"0 0 65.257599 69.1996"}},[i("g",{attrs:{transform:"matrix(1.3333333,0,0,-1.3333333,0,69.1996)"}},[i("g",{attrs:{transform:"translate(46.8173,49.7737)"}},[i("path",{staticStyle:{fill:"none",stroke:"#ffffff","stroke-width":"4.25199986","stroke-linecap":"round","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{id:"path22",d:"M 0,0 -22.346,-22.346 -44.691,0"}})]),i("g",{attrs:{transform:"translate(46.8173,25.3523)"}},[i("path",{staticStyle:{fill:"none",stroke:"#ffffff","stroke-width":"4.25199986","stroke-linecap":"round","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{id:"path26",d:"M 0,0 -22.346,-22.346 -44.691,0"}})])])])])])}),o=[],c={props:{isCovered:{type:Boolean,default:!0}},methods:{liftScreen:function(){this.$emit("lift-screen")}}},l=c,d=i(1001),u=(0,d.Z)(l,a,o,!1,null,"159810de",null),m=u.exports,v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{class:["nav-bar","container",{cover:e.isCovered}]},[i("router-link",{class:["navbar__brand",{cover:e.isCovered}],attrs:{to:{path:"/"}}},[i("div",{staticClass:"navbar__gov-health-logo"},[i("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/ROC_National_Health_Insurance_Emblem.svg/1200px-ROC_National_Health_Insurance_Emblem.svg.png",alt:""}})]),i("div",{staticClass:"navbar__brand-logo",on:{click:function(t){return e.handleCheck(!1)}}},[i("svg",{staticStyle:{"enable-background":"new 0 0 181.5 211.7"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 181.5 211.7","xml:space":"preserve"},domProps:{innerHTML:e._s(e.logoSVG)}})]),i("div",{staticClass:"navbar__brand-name",on:{click:function(t){return e.handleCheck(!1)}}},[e._v(" 戴良恭聯合洗腎中心 ")]),i("div",{staticClass:"navbar__brand-slogan"},[e._v("全北區最優質洗腎診所")])]),i("div",{class:["navbar__items",{cover:e.isCovered},{checked:e.isChecked}],on:{click:function(t){return e.handleCheck(!e.isChecked)},blur:function(t){return e.handleCheck(!1)}}},[i("ul",{},[i("li",{staticClass:"navbar__item"},[i("router-link",{class:{active:"clinics"===e.$route.name},attrs:{to:"/clinics"}},[e._v("分院")])],1),i("li",{staticClass:"navbar__item"},[i("router-link",{attrs:{to:"/team"}},[e._v("醫生團隊")])],1),i("li",{staticClass:"navbar__item"},[i("router-link",{attrs:{to:"/services"}},[e._v("服務項目")])],1),i("li",{staticClass:"navbar__item"},[i("router-link",{attrs:{to:"/learningResources"}},[e._v("衛教專欄")])],1),i("li",{staticClass:"navbar__item"},[i("router-link",{attrs:{to:"/about"}},[e._v("我們的故事")])],1)])]),i("div",{class:["navbar__hamburger",{checked:e.isChecked}],domProps:{innerHTML:e._s(e.hamburgerSVG)},on:{click:function(t){return e.handleCheck(!e.isChecked)}}})],1)},h=[],p=JSON.parse('{"M0":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" version=\\"1.1\\" id=\\"圖層_1\\" x=\\"0px\\" y=\\"0px\\" viewBox=\\"0 0 74 60\\" style=\\"enable-background: new 0 0 74 60\\" xml:space=\\"preserve\\" ><line style=\\" fill: none; stroke: #ffffff; stroke-width: 4; stroke-linecap: round; stroke-miterlimit: 10; \\" x1=\\"2\\" y1=\\"2\\" x2=\\"72\\" y2=\\"2\\" /> <line style=\\" fill: none; stroke: #ffffff; stroke-width: 4; stroke-linecap: round; stroke-miterlimit: 10; \\" x1=\\"2\\" y1=\\"30\\" x2=\\"72\\" y2=\\"30\\" /> <line style=\\" fill: none; stroke: #ffffff; stroke-width: 4; stroke-linecap: round; stroke-miterlimit: 10; \\" x1=\\"2\\" y1=\\"58\\" x2=\\"72\\" y2=\\"58\\" /></svg>","jY":"<g><path d=\\"M171.9,20.5c-16.9-28.1-50.2-25-58.8-4.5c-6.6,15.6,3.2,24.6,8.2,28l0,0c4.6,1.1,11,1.6,18.3-1.1   c-0.2,0.1-6.4,3.6-13.5,4.3c-2.5,0.2-4.6,1.8-5.5,4c-0.9,2.2-1.4,4.4-1.5,6.6c-8.7,1.3-11.8-0.5-12.9-1.7c-2.6-2.7-0.5-8.1-0.5-8.2   c0.6-1.5-0.1-3.3-1.7-3.9c-1.5-0.6-3.3,0.1-4,1.7c-0.1,0.4-3.6,9,1.7,14.6c2.6,2.7,6.5,4.1,11.9,4.1c1.8,0,3.7-0.2,5.7-0.4   c0,0.1,0,0.2,0,0.3c-5,0.1-10.7,1.2-14.7,4.4c-3.2,2.6-4.8,6.4-4.8,10.9c0,18.8,0.6,128,0.6,129.1c0,1.7,1.4,3,3,3c0,0,0,0,0,0   c1.7,0,3-1.4,3-3c0-1.1-0.6-110.3-0.6-129.1c0-2.7,0.9-4.8,2.6-6.2c3-2.5,8.1-3.1,12.5-3.1c0.8,2.1,1.7,3.8,2.4,4.9   c3.9,0.4,8.6,0,13.6-1.9c-0.2,0.1-5.3,3-11.7,4.1c-2.2,0.4-4.3,1.6-5.5,3.5c-9.5,14-4.7,45.6,28.1,37.2   C185,108.6,188.8,48.6,171.9,20.5z\\" style=\\"fill:white\\"/><path d=\\"M67.9,64.4c5.4,0,9.3-1.4,11.9-4.1c5.2-5.6,1.8-14.2,1.7-14.6c-0.6-1.5-2.4-2.3-4-1.7   c-1.5,0.6-2.3,2.4-1.7,3.9c0,0.1,2.1,5.5-0.5,8.2c-1.1,1.1-4.2,3-12.9,1.7c-0.2-2.1-0.6-4.4-1.5-6.6c-0.9-2.3-3.1-3.8-5.5-4   c-7.2-0.7-13.3-4.2-13.5-4.3c7.3,2.7,13.7,2.2,18.3,1.1l0,0c5-3.4,14.8-12.4,8.2-28C59.8-4.5,26.6-7.6,9.6,20.5   c-16.9,28.1-13.1,88.1,23.9,97.6c32.8,8.4,37.6-23.2,28.1-37.2c-1.3-1.9-3.3-3.1-5.5-3.5c-6.3-1.1-11.5-4-11.7-4.1   c5.1,1.9,9.7,2.2,13.6,1.9c0.6-1.1,1.5-2.8,2.4-4.9c4.4,0,9.6,0.6,12.5,3.1c1.8,1.5,2.6,3.5,2.6,6.2c0,18.8-0.6,128-0.6,129.1   c0,1.7,1.3,3,3,3c0,0,0,0,0,0c1.7,0,3-1.3,3-3c0-1.1,0.6-110.4,0.6-129.1c0-4.5-1.7-8.3-4.8-10.9c-4-3.3-9.7-4.3-14.7-4.4   c0-0.1,0-0.2,0-0.3C64.3,64.2,66.2,64.4,67.9,64.4z\\" style=\\"fill:white\\"/></g>","wu":"<svg height=\\"1rem\\" width=\\"1rem\\"><circle cx=\\".5rem\\" cy=\\".5rem\\" r=\\".4rem\\" fill=\\"#36747d\\" /></svg>"}'),f={props:{isCovered:{type:Boolean,default:!0}},data(){return{isChecked:!1,hamburgerSVG:p.M0,logoSVG:p.jY}},methods:{handleCheck:function(e){window.innerWidth<992&&(this.isChecked=e)}}},b=f,_=(0,d.Z)(b,v,h,!1,null,"64921178",null),g=_.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",{staticClass:"container"},[e._v("版權所有 Copyright© 戴良恭聯合洗腎中心")])},k=[],C={},E=(0,d.Z)(C,w,k,!1,null,"3aa49498",null),x=E.exports,y={name:"App",components:{WebBackground:m,NavBar:g,Footer:x},data(){return{isCovered:!0}},methods:{liftScreen:function(){this.isCovered=!1,window.removeEventListener("click",this.liftScreen),window.removeEventListener("keydown",this.liftScreen),window.removeEventListener("wheel",this.liftScreen),window.removeEventListener("touchmove",this.liftScreen,{passive:!0})}},created(){window.addEventListener("click",this.liftScreen),window.addEventListener("keydown",this.liftScreen),window.addEventListener("wheel",this.liftScreen),window.addEventListener("touchmove",this.liftScreen,{passive:!0})}},S=y,M=(0,d.Z)(S,s,r,!1,null,null,null),j=M.exports,B=i(2809),A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container d-flex flex-column"},[i("h3",{staticClass:"mt-4 p-0"},[e._v("戴良恭聯合洗腎中心")]),i("div",{staticClass:"mt-3"},[e._m(0),i("div",{staticClass:"service-list text-center mt-5"},[i("ul",{staticClass:"service-items d-flex flex-row flex-wrap justify-content-center mx-auto"},[i("li",{staticClass:"service-item"},[i("router-link",{attrs:{to:"/services"}},[e._v("專車接送")])],1),i("li",{staticClass:"service-item"},[i("router-link",{attrs:{to:"/services"}},[e._v("疾病預防")])],1),i("li",{staticClass:"service-item"},[i("router-link",{attrs:{to:"/services"}},[e._v("生化檢查")])],1),i("li",{staticClass:"service-item"},[i("router-link",{attrs:{to:"/team"}},[e._v("專業醫護")])],1),i("li",[i("router-link",{staticClass:"more-service",attrs:{to:"/services"}},[e._v("更多特色 +")])],1)])])]),i("div",{staticClass:"to-clinics-btn text-center mt-3 flex-grow-1"},[i("router-link",{staticClass:"btn",attrs:{to:{path:"/clinics"}}},[e._v("查看所有分院")])],1)])},T=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"brand-intro"},[i("p",{staticClass:"mt-1"},[e._v(" 我們是經營最完善最專業的優質團隊。20多年的寒暑，兢兢業業全心投入洗腎的領域，精神和熱忱始終如一！ 我們有專業的專科醫師，定期接受培訓的護理人員，隨時為腎友衛教宣導，以確保提供腎友最高品質的透析服務。 ")]),i("p",{staticClass:"mt-1"},[e._v(" 另外，我們為腎友們提供最貼心的專車接送，視病如親的醫療團隊，讓所有接受洗腎服務的腎友們，能在溫馨安全的環境中，接受最好的照護和治療。 ")]),i("p",{staticClass:"mt-3"},[e._v(" 專治：尿毒搔癢症 不寧腿 腎性貧血 腎性骨病變 任何洗腎相關疾病 ")]),i("p",{staticClass:"my-3 highlight"},[e._v(" ※ 本院積極推廣 C肝治療，達成院內 C肝清零，杜絕染病風險 ")])])}],L=i(8247),P={name:"Home",mixins:[L.n,L.P],data(){return{handleScreenSize:this.throttle(this.checkScreenSize,200)}},methods:{checkScreenSize(){window.innerWidth>768&&this.$router.push("/clinics")}},created(){window.addEventListener("resize",this.handleScreenSize)},destroyed(){window.removeEventListener("resize",this.handleScreenSize)},beforeRouteEnter(e,t,i){window.innerWidth>768&&i("/clinics"),i()}},z=P,H=(0,d.Z)(z,A,T,!1,null,"9322c430",null),V=H.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"clinics container"},[i("Header",{directives:[{name:"show",rawName:"v-show",value:!e.isMobile,expression:"!isMobile"}]}),i("h3",{staticClass:"mt-3 mt-sm-0 mt-lg-3 p-0 ms-0 border-top"},[e._v("分院介紹")]),i("ClinicsNavTabs",{attrs:{"is-mobile":e.isMobile,branch:e.branch,"branch-value-pair":e.branchValuePair}}),i("div",{staticClass:"clinic-info"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("ClinicDetails",{key:e.branch,attrs:{branch:e.branch,clinic:e.clinics[e.branch],"is-mobile":e.isMobile}})],1),e._l(e.allDoctors,(function(t){return i("DoctorModal",{key:t.id,attrs:{doctor:t,"branch-value-pair":e.branchValuePair}})}))],2)],1)},$=[],D=(i(6699),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"header mt-3"},[i("div",{staticClass:"row"},[e._m(0),i("div",{staticClass:"strength-list col-12 col-lg-4 d-flex"},[i("ul",{staticClass:"strength-items d-flex flex-row"},[i("li",{staticClass:"strength-item"},[i("router-link",{attrs:{to:"/services"}},[e._v("專車接送")])],1),i("li",{staticClass:"strength-item"},[i("router-link",{attrs:{to:"/services"}},[e._v("疾病預防")])],1),i("li",{staticClass:"strength-item"},[i("router-link",{attrs:{to:"/services"}},[e._v("生化檢查")])],1),i("li",{staticClass:"strength-item"},[i("router-link",{attrs:{to:"/team"}},[e._v("專業醫護")])],1)]),i("router-link",{staticClass:"more-strength",attrs:{to:"/services"}},[e._v("更多特色 +")])],1)])])}),G=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"center-intro col-12 col-lg-8"},[i("p",{staticClass:"mt-1"},[e._v(" 我們是經營最完善最專業的優質團隊。20多年的寒暑，兢兢業業全心投入洗腎的領域，精神和熱忱始終如一！ 我們有專業的專科醫師，定期接受培訓的護理人員，隨時為腎友衛教宣導，以確保提供腎友最高品質的透析服務。 ")]),i("p",{staticClass:"mt-1"},[e._v(" 另外，我們為腎友們提供最貼心的免費專車接送，視病如親的醫療團隊，讓所有接受洗腎服務的腎友們，能在溫馨安全的環境中，接受最好的照護和治療。 ")]),i("p",{staticClass:"mt-3"},[e._v(" 專治：尿毒搔癢症 不寧腿 腎性貧血 腎性骨病變 任何洗腎相關疾病 ")]),i("p",{staticClass:"my-3 highlight"},[e._v(" ※ 本院積極推廣 C肝治療，達成院內 C肝清零，杜絕染病風險 ")])])}],N={},W=(0,d.Z)(N,D,G,!1,null,"61737d1e",null),Z=W.exports,F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dropdown"},[i("a",{directives:[{name:"show",rawName:"v-show",value:e.isMobile,expression:"isMobile"}],staticClass:"btn btn-dropdown dropdown-toggle my-3",attrs:{href:"#",role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown","aria-expanded":"false"}},[e._v(" "+e._s(e.branchValuePair[e.branch])+"診所 ")]),i("ul",{class:["mt-3",{nav:!e.isMobile},{"nav-tabs":!e.isMobile},{"dropdown-menu":e.isMobile}],attrs:{"aria-labelledby":{dropdownMenuLink:e.isMobile}}},[i("li",{staticClass:"nav-item"},[i("router-link",{class:[{"nav-link":!e.isMobile},{"dropdown-item":e.isMobile}],staticStyle:{"--i":"5"},attrs:{"aria-current":"page",to:"/clinics/lkdiang"}},[e._v("戴良恭診所 (永和)")])],1),i("li",{staticClass:"nav-item"},[i("router-link",{class:[{"nav-link":!e.isMobile},{"dropdown-item":e.isMobile}],staticStyle:{"--i":"4"},attrs:{to:"/clinics/shinhe"}},[e._v("欣禾診所 (中和)")])],1),i("li",{staticClass:"nav-item"},[i("router-link",{class:[{"nav-link":!e.isMobile},{"dropdown-item":e.isMobile}],staticStyle:{"--i":"3"},attrs:{to:"/clinics/shikang"}},[e._v("世康診所 (汐止)")])],1),i("li",{staticClass:"nav-item"},[i("router-link",{class:[{"nav-link":!e.isMobile},{"dropdown-item":e.isMobile}],staticStyle:{"--i":"2"},attrs:{to:"/clinics/kanghe"}},[e._v("康禾診所 (南港)")])],1),i("li",{staticClass:"nav-item"},[i("router-link",{class:[{"nav-link":!e.isMobile},{"dropdown-item":e.isMobile}],staticStyle:{"--i":"1"},attrs:{to:"/clinics/jingan"}},[e._v("景安診所 (文山)")])],1)])])},R=[],I={props:{isMobile:{type:Boolean,default:!1},branchValuePair:{type:Object},branch:{type:String,default:"lkdiang"}}},q=I,K=(0,d.Z)(q,F,R,!1,null,"eb1117b6",null),J=K.exports,Y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"clinic-info__main-content col-12 col-lg-7 pe-lg-5"},[i("div",{staticClass:"clinic-info__description"},[i("h1",{directives:[{name:"show",rawName:"v-show",value:!e.isMobile,expression:"!isMobile"}]},[e._v(e._s(e.clinic.name)+"診所")]),i("p",{staticClass:"mt-1",domProps:{innerHTML:e._s(e.clinic.description)}})]),i("div",{staticClass:"clinic-info__contact mt-4 mt-sm-5"},[i("div",{staticClass:"clinic-info__contact-item mt-2"},[e._v(" 地址："+e._s(e.clinic.address)+" ")]),i("div",{staticClass:"clinic-info__contact-item mt-2"},[e._v(" 電話："),e._l(e.clinic.phone,(function(t){return i("a",{key:t,staticClass:"me-1",attrs:{href:"tel:"+t}},[e._v(e._s(t))])}))],2),i("div",{staticClass:"clinic-info__contact-item mt-2"},[e._v(" 臉書："),i("a",{attrs:{href:e.clinic.facebook.url}},[e._v(e._s(e.clinic.facebook.name))])])]),i("div",{staticClass:"clinic-info__business-hour mt-4 mt-sm-5"},[i("div",[e._v(" 門診時間： "),e._l(e.clinic.workingHours,(function(t,n){return i("div",{key:n,staticClass:"d-inline-block me-2"},[e._v(" "+e._s(n+" "+t)+" ")])}))],2),i("table",{staticClass:"table table-hover text-center mt-3"},[e._m(0),i("tbody",[i("tr",[i("th",{attrs:{scope:"row"}},[e._v("早上")]),i("td",{domProps:{innerHTML:e._s(e.circleSVG)}}),i("td",{domProps:{innerHTML:e._s(e.circleSVG)}}),i("td",{domProps:{innerHTML:e._s(e.circleSVG)}}),i("td",{domProps:{innerHTML:e._s(e.circleSVG)}}),i("td",{domProps:{innerHTML:e._s(e.circleSVG)}}),i("td",{domProps:{innerHTML:e._s(e.circleSVG)}}),i("td",[e._v("-")])]),i("tr",[i("th",{attrs:{scope:"row"}},[e._v("下午")]),i("td",{domProps:{innerHTML:e._s(e.circleSVG)}}),i("td",{domProps:{innerHTML:e._s(e.circleSVG)}}),i("td",{domProps:{innerHTML:e._s(e.circleSVG)}}),i("td",{domProps:{innerHTML:e._s(e.circleSVG)}}),i("td",{domProps:{innerHTML:e._s(e.circleSVG)}}),i("td",{domProps:{innerHTML:e._s(e.circleSVG)}}),i("td",[e._v("-")])]),i("tr",[i("th",{attrs:{scope:"row"}},[e._v("晚上")]),i("td",{domProps:{innerHTML:e._s(e.circleSVG)}}),i("td",[e._v("-")]),i("td",{domProps:{innerHTML:e._s(e.circleSVG)}}),i("td",[e._v("-")]),i("td",{domProps:{innerHTML:e._s(e.circleSVG)}}),i("td",[e._v("-")]),i("td",[e._v("-")])])])])])]),i("div",{staticClass:"clinic-info__side-content col-12 col-lg-5 ps-3 ps-lg-5 order-1 order-lg-0 d-flex flex-column"},[i("div",{staticClass:"clinic-info__album mt-5 order-1 order-lg-0"},[i("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleIndicators","data-bs-ride":"carousel"}},[i("div",{staticClass:"carousel-indicators"},e._l(e.clinic.photos,(function(e,t){return i("button",{key:e,class:{active:0===t},attrs:{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":t,"aria-current":0===t,"aria-label":"Slide "+(t+1)}})})),0),i("div",{staticClass:"carousel-inner"},e._l(e.clinic.photos,(function(t,n){return i("div",{key:t,class:["carousel-item",{active:0===n}]},[i("img",{staticClass:"d-block w-100",attrs:{src:"./images/"+e.branch+"/"+t,alt:e.clinic.name}})])})),0),e._m(1),e._m(2)])]),i("div",{staticClass:"clinic-info__team-members mt-4 mt-sm-5"},[i("div",[e._v("醫生團隊：")]),i("ul",{staticClass:"d-flex flex-wrap"},e._l(e.clinic.doctors,(function(t){return i("li",{key:t.id,staticClass:"clinic-info__team-member d-flex mt-2 me-3",attrs:{"data-bs-toggle":"modal","data-bs-target":"#modal"+t.id}},[i("div",{staticClass:"clinic-info__team-member-text text-center"},[e._v(" "+e._s(t.name+" "+t.title)+" ")])])})),0)])]),i("div",{staticClass:"clinic-info__transportation mt-4 mt-sm-5 mb-0 mb-lg-5"},[i("div",[e._v("地圖：")]),i("div",{staticClass:"ratio ratio-16x9"},[i("iframe",{attrs:{src:e.clinic.googleMaps,allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])])])},U=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",[i("tr",[i("th",{attrs:{scope:"col"}},[e._v("時間")]),i("th",{attrs:{scope:"col"}},[e._v("一")]),i("th",{attrs:{scope:"col"}},[e._v("二")]),i("th",{attrs:{scope:"col"}},[e._v("三")]),i("th",{attrs:{scope:"col"}},[e._v("四")]),i("th",{attrs:{scope:"col"}},[e._v("五")]),i("th",{attrs:{scope:"col"}},[e._v("六")]),i("th",{attrs:{scope:"col"}},[e._v("日")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"carousel-control-prev",attrs:{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev"}},[i("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"visually-hidden"},[e._v("Previous")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"carousel-control-next",attrs:{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next"}},[i("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"visually-hidden"},[e._v("Next")])])}],X={data(){return{circleSVG:p.wu}},props:{isMobile:{type:Boolean,default:!1},branch:{type:String,default:"lkdiang"},clinic:{type:Object,required:!0}}},Q=X,ee=(0,d.Z)(Q,Y,U,!1,null,"50c84fdb",null),te=ee.exports,ie=i(4861),ne=i(5983);const se=Object.keys(ne);var re={name:"Clinics",mixins:[L.n,L.P],components:{Header:Z,ClinicsNavTabs:J,ClinicDetails:te,DoctorModal:ie.Z},data(){return{branch:"",clinics:ne,branchValuePair:{},allDoctors:[],isMobile:window.innerWidth<768,handleResize:this.throttle(this.updateSize,200)}},methods:{updateSize(){this.isMobile=window.innerWidth<768}},created(){window.addEventListener("resize",this.handleResize),this.branch=this.$route.params.branch,Object.entries(ne).forEach((([e,t])=>{this.allDoctors=[...this.allDoctors,...t.doctors],this.branchValuePair[e]=t.name})),se.includes(this.branch)||this.$router.push({name:"not-found"})},destroyed(){window.removeEventListener("resize",this.handleResize)},beforeRouteUpdate(e,t,i){this.branch=e.params.branch,se.includes(this.branch)||i({name:"not-found"}),i()}},ae=re,oe=(0,d.Z)(ae,O,$,!1,null,"c49bfe04",null),ce=oe.exports;n.Z.use(B.Z);const le=[{path:"/",name:"root",component:V},{path:"/clinics",redirect:"/clinics/lkdiang"},{path:"/clinics/:branch",name:"clinics",component:ce},{path:"/team",name:"team",component:()=>i.e(413).then(i.bind(i,4413))},{path:"/services",name:"services",component:()=>i.e(395).then(i.bind(i,4395))},{path:"/learningResources",name:"learning-resources",component:()=>i.e(197).then(i.bind(i,1197))},{path:"/about",name:"about",component:()=>i.e(122).then(i.bind(i,7122))},{path:"/*",name:"not-found",component:()=>i.e(580).then(i.bind(i,2580))}],de=new B.Z({mode:"history",base:"/luensen-demo/",linkExactActiveClass:"active",routes:le});var ue=de;n.Z.config.productionTip=!1,new n.Z({router:ue,render:e=>e(j)}).$mount("#app")},8247:function(e,t,i){i.d(t,{P:function(){return s},n:function(){return n}});const n={created(){document.getElementById("view").scrollTop=0}},s={methods:{throttle(e,t){let i=!1,n=null;function s(){null!==n?(e(...n),n=null,setTimeout(s,t)):i=!1}return(...r)=>{i?n=r:(e(...r),i=!0,setTimeout(s,t))}}}}},5983:function(e){e.exports=JSON.parse('{"lkdiang":{"name":"戴良恭","description":"戴良恭診所成立於民國85年8月2日，是中永和經營最久最專業的洗腎室。我們秉持著專業的知識和技術，20多年的寒暑，在地深耕始終如一！<br/>我們的團隊在戴良恭院長、陳慧言醫師及黎彩欣醫師等專科醫師的帶領下，定期培訓護理人員，隨時為腎友衛教宣導，以確保提供腎友最高品質的透析服務。<br/>不同於一般的洗腎中心，我們的洗腎室位於一樓平面，寬敞無障礙的空間，為腎友及家屬的進出接送，帶來便利和安心！另外，我們也為腎友們提供最貼心的專人專車免費接送服務。<br/>視病如親的醫療團隊，讓所有接受洗腎服務的腎友們，能在溫馨安全的環境中，接受最好的照護和治療。","address":"新北市永和區中正路237號","phone":["(02)2949-9482","(02)2948-4477"],"facebook":{"name":"戴良恭洗腎診所 永和洗腎中心","url":"https://www.facebook.com/%E6%88%B4%E8%89%AF%E6%81%AD%E6%B4%97%E8%85%8E%E8%A8%BA%E6%89%80-%E6%B0%B8%E5%92%8C%E6%B4%97%E8%85%8E%E4%B8%AD%E5%BF%83-351239505294446/"},"workingHours":{"一三五":"07:00 - 23:00","二四六":"07:00 - 17:00"},"googleMaps":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.0163864758333!2d121.51516301537822!3d24.999559145824396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9e12ede493b%3A0x5398f0e91305815c!2zMjM05paw5YyX5biC5rC45ZKM5Y2A5Lit5q2j6LevMjM36Jmf!5e0!3m2!1szh-TW!2stw!4v1653671101899!5m2!1szh-TW!2stw","doctors":[{"id":1,"name":"戴良恭","title":"院長","branch":"lkdiang","experience":["基層透析院所協會理事","台灣腎臟醫學會監事","中華民國內科","腎臟科","家醫科專科醫師","榮獲一九九六年歐洲腎臟醫學會優良醫師論文獎","台灣透析醫療院所協會監事/理事","美國哈佛大學腎臟學進修美國醫師執照考試及格","國際腎臟醫學會會員","美國腎臟醫學會會員","腎臟專科指導醫師","教育部部定講師","三總內科","腎臟科主治醫師"]},{"id":2,"name":"陳慧言","title":"醫師","branch":"lkdiang","experience":["中華民國內科專科醫師","亞東醫院腎臟專科醫師"]},{"id":3,"name":"黎彩欣","title":"醫師","branch":"lkdiang","experience":["中華民國內科專科醫師","雙和醫院腎臟科"]}],"photos":["S__155607071.jpeg","S__155607073.jpeg","01-picture-01j.jpg","01-picture-02j.jpg"]},"shinhe":{"name":"欣禾","description":"欣禾診所成立於民國89年9月15日，是深耕中永和的優質洗腎室。我們秉持著專業的知識和技術，20多年的努力經營，敬業樂業的精神始終如一！我們的團隊在宋玉峰院長、張立美醫師、林瑾如醫師等專科醫師的帶領下，定期培訓護理人員，隨時為腎友衛教宣導，以確保提供腎友最高品質的透析服務。<br/>不同於一般的洗腎中心，我們的洗腎室位於一樓平面，寬敞無障礙的空間，為腎友及家屬的進出接送，帶來便利和安心！<br/>另外，我們也為腎友們提供最貼心的專人專車免費接送服務。視病如親的醫療團隊，讓所有接受洗腎服務的腎友們，能在溫馨安全的環境中，接受最好的照護和治療。","address":"新北市中和區景平路416號","phone":["(02)2949-3538","(02)2949-3539"],"facebook":{"name":"欣禾診所中和洗腎中心","url":"https://www.facebook.com/%E6%AC%A3%E7%A6%BE%E8%A8%BA%E6%89%80%E4%B8%AD%E5%92%8C%E6%B4%97%E8%85%8E%E4%B8%AD%E5%BF%83-284668722114894 "},"workingHours":{"一三五":"06:30 - 23:00","二四六":"06:30 - 17:00"},"googleMaps":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.1980614210656!2d121.50576911537817!3d24.993385046071527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468027698f41989%3A0x6b4af7600e46bd84!2z5qyj56a-6Ki65omA!5e0!3m2!1szh-TW!2stw!4v1653751765356!5m2!1szh-TW!2stw","doctors":[{"id":4,"name":"宋玉峰","title":"院長","branch":"shinhe","experience":["中華民國內科專科醫師","中華民國腎臟科專科醫師","三總內科","腎臟科主治醫師","國際腎臟醫學會會員","美國腎臟醫學會會員"]},{"id":5,"name":"張立美 ","title":"醫師","branch":"shinhe","experience":["中華民國內科專科醫師","馬偕腎臟專科醫師","美國醫師執照考試通過"]},{"id":6,"name":"林瑾如 ","title":"醫師","branch":"shinhe","experience":["中華民國內科專科醫師","三總腎臟科醫師"]}],"photos":["02-picture-01j.jpg"]},"shikang":{"name":"世康","description":"世康診所成立於民國95年1月18日，是汐止地區優質的洗腎室。我們秉持著專業的知識和技術，長年的努力經營，敬業樂業的精神始終如一！我們的團隊在郭建偉院長、鄭安勳醫師、顧乃永醫師等專科醫師的帶領下，定期培訓護理人員，隨時為腎友衛教宣導，以確保提供腎友最高品質的透析服務。<br/>我們的洗腎室位於3樓樓層，備有電梯，寬敞無障礙的空間，為腎友及家屬的進出接送，帶來便利和安心！<br/>另外，我們也為腎友們提供最貼心的專人專車免費接送服務。視病如親的醫療團隊，讓所有接受洗腎服務的腎友們，能在溫馨安全的環境中，接受最好的照護和治療。","address":"新北市汐止區中興路86號3樓","phone":["(02)2641-0051","(02)2641-0501"],"facebook":{"name":"世康診所汐止洗腎中心","url":" https://www.facebook.com/%E4%B8%96%E5%BA%B7%E8%A8%BA%E6%89%80-%E6%B4%97%E8%85%8E-%E6%B1%90%E6%AD%A2-109143335070799 "},"workingHours":{"一三五":"06:30 - 23:00","二四六":"06:30 - 17:00"},"googleMaps":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.1664236719616!2d121.63264131537908!3d25.062347843307595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d5351e5ee09b1%3A0x9946d3e521a0c9c2!2z5LiW5bq36Ki65omA!5e0!3m2!1szh-TW!2stw!4v1653751829107!5m2!1szh-TW!2stw","doctors":[{"id":7,"name":"郭建偉","title":"院長","branch":"shikang","experience":["中華民國內科專科醫師","腎臟專科醫師","教育部指定講師","三總腎臟科主治醫師","美國哈佛大學腎臟學進修","國際腎臟醫學會會員","美國腎臟醫學會會員"]},{"id":8,"name":"鄭安勳","title":"醫師","branch":"shikang","experience":["中華民國內科專科醫師","馬偕腎臟專科醫師"]},{"id":9,"name":"顧乃永","title":"醫師","branch":"shikang","experience":["中華民國內科專科醫師","台大腎臟專科醫師"]}],"photos":["03-picture-01j.jpg","03-picture-02j.jpg","03-picture-03j.jpg"]},"kanghe":{"name":"康禾","description":"康禾診所成立於民國104年4月3日，是南港地區優質的洗腎室。我們秉持著專業的知識和技術，服務松山南港內湖地區的腎友們，長年的努力經營，敬業樂業的精神始終如一！我們的團隊在黃寶瓊院長、劉代燃醫師的帶領下，定期培訓護理人員，隨時為腎友衛教宣導，以確保提供腎友最高品質的透析服務。<br/>不同於一般的洗腎中心，我們的洗腎室位於一樓平面，寬敞無障礙的空間，為腎友及家屬的進出接送，帶來便利和安心！<br/>另外，我們也為腎友們提供最貼心的專人專車免費接送服務。視病如親的醫療團隊，讓所有接受洗腎服務的腎友們，能在溫馨安全的環境中，接受最好的照護和治療。","address":"台北市南港區忠孝東路七段551號1樓","phone":["(02)2785-5629"],"fax":["(02)2785-3629"],"facebook":{"name":"康禾診所 南港洗腎丶松山洗腎中心","url":" https://www.facebook.com/%E5%BA%B7%E7%A6%BE%E8%A8%BA%E6%89%80-%E5%8D%97%E6%B8%AF%E6%B4%97%E8%85%8E%E4%B8%B6%E6%9D%BE%E5%B1%B1%E6%B4%97%E8%85%8E%E4%B8%AD%E5%BF%83-422043204870111 "},"workingHours":{"一三五":"07:00 - 23:00","二四六":"07:00 - 17:00"},"googleMaps":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28915.52042383785!2d121.57833317910158!3d25.053069999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab597279496b%3A0xbb571efc1d953ac3!2z5bq356a-6Ki65omA!5e0!3m2!1szh-TW!2stw!4v1653751949476!5m2!1szh-TW!2stw","doctors":[{"id":10,"name":"黃寶瓊","title":"院長","branch":"kanghe","experience":["中華民國內科專科醫師","美國醫師執照考試通過","榮總腎臟專科醫師"]},{"id":11,"name":"劉代燃","title":"醫師","branch":"kanghe","experience":["中華民國內科專科醫師","台大腎臟專科醫師"]}],"photos":["S__155607075.jpg","04-picture-01j.jpg","S__155607074.jpeg"]},"jingan":{"name":"景安","description":"景安診所成立於民國96年10月30日，是文山區優質的洗腎室。我們秉持著專業的知識和技術，長年的努力經營，敬業樂業的精神始終如一！<br/>我們的團隊在林素珍院長、呂婷婷醫師的帶領下，定期培訓護理人員，隨時為腎友衛教宣導，以確保提供腎友最高品質的透析服務。<br/>不同於一般的洗腎中心，我們的洗腎室位於一樓平面，寬敞無障礙的空間，為腎友及家屬的進出接送，帶來便利和安心！另外，我們也為腎友們提供最貼心的專人專車免費接送服務。視病如親的醫療團隊，讓所有接受洗腎服務的腎友們，能在溫馨安全的環境中，接受最好的照護和治療。","address":"台北市文山區羅斯福路六段136號2樓","phone":["(02)2933-0551"],"facebook":{"name":"景安診所 景美洗腎 文山區洗腎中心","url":"https://www.facebook.com/%E6%99%AF%E5%AE%89%E8%A8%BA%E6%89%80-%E6%99%AF%E7%BE%8E%E6%B4%97%E8%85%8E-%E6%96%87%E5%B1%B1%E5%8D%80%E6%B4%97%E8%85%8E%E4%B8%AD%E5%BF%83-872631849592405/"},"workingHours":{"一三五":"07:00 - 23:00","二四六":"07:00 - 17:00"},"googleMaps":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.099203396761!2d121.5385129153782!3d24.996744845937002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa03bad126f5%3A0x9b261ac9678717d6!2z5pmv5a6J6Ki65omA!5e0!3m2!1szh-TW!2stw!4v1653751859023!5m2!1szh-TW!2stw","doctors":[{"id":12,"name":"林素珍","title":"醫師","branch":"jingan","experience":["中華民國內科專科醫師","中華民國腎臟專科醫師","中華民國超音波學會專科醫師","前台北榮民總醫院腎臟專科醫師"]},{"id":13,"name":"呂婷婷","title":"醫師","branch":"jingan","experience":["中華民國內科專科醫師","榮民總醫院腎臟專科醫師"]}],"photos":["05-picture-05j.jpg","05-picture-01j.jpg","05-picture-02j.jpg","05-picture-03j.jpg","05-picture-04j.jpg"]}}')}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,i),r.exports}i.m=e,function(){var e=[];i.O=function(t,n,s,r){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],s=e[d][1],r=e[d][2];for(var o=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(o=!1,r<a&&(a=r));if(o){e.splice(d--,1);var l=s();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,s,r]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/"+e+"."+{122:"4a505c1f",197:"977adeaf",395:"f883dbd7",413:"ca0c896e",580:"87c3835c"}[e]+".js"}}(),function(){i.miniCssF=function(e){return"css/"+e+"."+{122:"8ef780ea",197:"846a3342",395:"6c57e32f",413:"d91f3500"}[e]+".css"}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="luensen-v1:";i.l=function(n,s,r,a){if(e[n])e[n].push(s);else{var o,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+r){o=u;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.setAttribute("data-webpack",t+r),o.src=n),e[n]=[s];var m=function(t,i){o.onerror=o.onload=null,clearTimeout(v);var s=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(e){return e(i)})),t)return t(i)},v=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/luensen-demo/"}(),function(){var e=function(e,t,i,n){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var r=function(r){if(s.onerror=s.onload=null,"load"===r.type)i();else{var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=o,s.parentNode.removeChild(s),n(c)}};return s.onerror=s.onload=r,s.href=t,document.head.appendChild(s),s},t=function(e,t){for(var i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var s=i[n],r=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(r===e||r===t))return s}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){s=a[n],r=s.getAttribute("data-href");if(r===e||r===t)return s}},n=function(n){return new Promise((function(s,r){var a=i.miniCssF(n),o=i.p+a;if(t(a,o))return s();e(n,o,s,r)}))},s={143:0};i.f.miniCss=function(e,t){var i={122:1,197:1,395:1,413:1};s[e]?t.push(s[e]):0!==s[e]&&i[e]&&t.push(s[e]=n(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}(),function(){var e={143:0};i.f.j=function(t,n){var s=i.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var r=new Promise((function(i,n){s=e[t]=[i,n]}));n.push(s[2]=r);var a=i.p+i.u(t),o=new Error,c=function(n){if(i.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,s[1](o)}};i.l(a,c,"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,r,a=n[0],o=n[1],c=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(s in o)i.o(o,s)&&(i.m[s]=o[s]);if(c)var d=c(i)}for(t&&t(n);l<a.length;l++)r=a[l],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(d)},n=self["webpackChunkluensen_v1"]=self["webpackChunkluensen_v1"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(9550)}));n=i.O(n)})();
//# sourceMappingURL=app.c0160ca5.js.map