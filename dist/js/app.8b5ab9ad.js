(function(){"use strict";var e={7309:function(e,t,a){var n=a(9242),s=a(3396);const r={class:"wrapper"};function i(e,t,a,i,o,l){const c=(0,s.up)("HeaderComp"),d=(0,s.up)("router-view"),u=(0,s.up)("FooterComp");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(c),(0,s.Wm)(d,null,{default:(0,s.w5)((({Component:e,route:t})=>[(0,s.Wm)(n.uT,{name:"anim-page",mode:"out-in"},{default:(0,s.w5)((()=>[((0,s.wg)(),(0,s.iD)("div",{key:t.path},[((0,s.wg)(),(0,s.j4)((0,s.LL)(e)))]))])),_:2},1024)])),_:1}),(0,s.Wm)(u),(0,s.Wm)(n.uT,{name:"anim-page",mode:"out-in"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("button",{onClick:t[0]||(t[0]=(...e)=>l.scrollTop&&l.scrollTop(...e)),class:"go-top"},null,512),[[n.F8,o.goTop]])])),_:1})])}var o=a.p+"img/phone.6499df73.svg",l=a.p+"img/message.56487ce6.svg",c=a.p+"img/gps.7e1b38a7.svg",d=a.p+"img/tgBlack.295023f4.svg",u=a.p+"img/whatsBlack.60407a61.svg";const _={class:"footer"},m=(0,s.uE)('<div class="footer__container"><div class="footer__left"><div class="more-detailed-footer"><div class="foot">© 2023 Научно-правовой центр&quot;</div><div class="foot-dev">Сделано в <div class="CDT">CDT</div></div></div></div><div class="footer__right"><a href=""><span class="footer-phone"><img src="'+o+'" alt="Phone"></span></a><span class="footer-message"><img src="'+l+'" alt="email"></span><span class="footer-gps"><img src="'+c+'" alt="Adress"></span><span class="footer-tg"><img src="'+d+'" alt="Tg"></span><span class="footer-whats"><img src="'+u+'" alt="WhatsApp"></span></div></div>',1),g=[m];function h(e,t,a,n,r,i){return(0,s.wg)(),(0,s.iD)("footer",_,g)}var p={},v=a(89);const f=(0,v.Z)(p,[["render",h]]);var w=f,y=a(7139);const b=e=>((0,s.dD)("data-v-26c879d2"),e=e(),(0,s.Cn)(),e),D={class:"header"},$={class:"header__container"},C=b((()=>(0,s._)("img",{class:"logo",src:"/LOGO.png",height:"100",alt:""},null,-1))),k={class:"header__menu"},L={class:"header__menu-all"},A={class:"header__menu-item"},E={class:"header__menu-item"},M={class:"header__menu-item"};function T(e,t,a,r,i,o){const l=(0,s.up)("MobilMenu"),c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("header",D,[(0,s.Wm)(n.uT,{name:"phone"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(l,{onCloseMenu:o.closeMenu},null,8,["onCloseMenu"]),[[n.F8,i.PhoneMenu]])])),_:1}),(0,s._)("div",$,[(0,s.Wm)(c,{to:"/"},{default:(0,s.w5)((()=>[C])),_:1}),(0,s._)("nav",k,[(0,s._)("ul",L,[(0,s._)("li",A,[(0,s.Wm)(c,{class:(0,y.C_)(["header__menu-item__link",{"header__menu-item-active":"/"===e.$route.path}]),to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,y.zw)(e.$store.state.allContent.header.main[e.$store.state.language]),1)])),_:1},8,["class"])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$store.state.receivedData.advocatsInfo,(t=>((0,s.wg)(),(0,s.iD)("li",{class:"header__menu-item",key:t.id},[(0,s.Wm)(c,{class:(0,y.C_)(["header__menu-item__link",{"header__menu-item-active":e.$route.path==="/lawyer/"+t.id}]),to:{name:"lawyer",params:{id:t.id}}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,y.zw)(e.$store.state.allContent.lawyer[e.$store.state.language])+" "+(0,y.zw)(t.name[e.$store.state.language]),1)])),_:2},1032,["class","to"])])))),128)),(0,s._)("li",E,[(0,s.Wm)(c,{class:(0,y.C_)(["header__menu-item__link",{"header__menu-item-active":"/LegalCenter"===e.$route.path}]),to:"/LegalCenter"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,y.zw)(e.$store.state.allContent.header.ScientificAndLegalCenter[e.$store.state.language]),1)])),_:1},8,["class"])]),(0,s._)("li",M,[(0,s.Wm)(c,{class:(0,y.C_)(["header__menu-item__link",{"header__menu-item-active":"/Events"===e.$route.path}]),to:"/Events"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,y.zw)(e.$store.state.allContent.header.Events[e.$store.state.language]),1)])),_:1},8,["class"])])])]),(0,s._)("button",{class:(0,y.C_)(["header__language",{header__language__active:"rus"===e.$store.state.language}]),onClick:t[0]||(t[0]=(0,n.iM)((t=>e.$store.commit("languageUpdate","rus")),["prevent"]))}," РУС ",2),(0,s._)("button",{class:(0,y.C_)(["header__language",{header__language__active:"eng"===e.$store.state.language}]),onClick:t[1]||(t[1]=(0,n.iM)((t=>e.$store.commit("languageUpdate","eng")),["prevent"]))}," ENG ",2),(0,s._)("button",{class:"header__button-menu",onClick:t[2]||(t[2]=e=>o.openMenu())})])])}const S={class:"header__menu__phone"},H={class:"header__menu-all__phone"},P={class:"header__menu-item__phone"},x={class:"header__menu-item__phone"},W={class:"header__menu-item__phone"};function z(e,t,a,r,i,o){const l=(0,s.up)("router-link");return(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",{class:"header__phone",onTouchstart:t[4]||(t[4]=e=>o.touchStart(e.touches[0].clientX)),onTouchend:t[5]||(t[5]=e=>o.touchEnd(e.changedTouches[0].clientX))},[(0,s._)("div",{class:"header__phone__background",onClick:t[0]||(t[0]=e=>o.closeMenu())}),(0,s._)("nav",S,[(0,s._)("ul",H,[(0,s._)("li",P,[(0,s.Wm)(l,{class:(0,y.C_)(["header__menu-item__link__phone",{"header__menu-item-active":"/"===e.$route.path}]),to:{name:"home"},onClick:t[1]||(t[1]=e=>o.closeMenu())},{default:(0,s.w5)((()=>[(0,s.Uk)(" Главная")])),_:1},8,["class"])]),(0,s._)("li",x,[(0,s.Wm)(l,{class:(0,y.C_)(["header__menu-item__link__phone",{"header__menu-item-active":"/Legal_center"===e.$route.path}]),to:"/LegalCenter",onClick:t[2]||(t[2]=e=>o.closeMenu())},{default:(0,s.w5)((()=>[(0,s.Uk)(" Научно-Правовой Центр")])),_:1},8,["class"])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$store.state.receivedData.advocatsInfo,(a=>((0,s.wg)(),(0,s.iD)("li",{class:"header__menu-item__phone",key:a.id},[(0,s.Wm)(l,{class:(0,y.C_)(["header__menu-item__link__phone",{"header__menu-item-active":e.$route.path==="/lawyer/"+a.id}]),to:{name:"lawyer",params:{id:a.id}},onClick:t[3]||(t[3]=e=>o.closeMenu())},{default:(0,s.w5)((()=>[(0,s.Uk)("Адвокат "+(0,y.zw)(a.name[e.$store.state.language]),1)])),_:2},1032,["class","to"])])))),128)),(0,s._)("li",W,[(0,s.Wm)(l,{class:(0,y.C_)(["header__menu-item__link__phone",{"header__menu-item-active":"/Events"===e.$route.path}]),to:"/Events"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,y.zw)(e.$store.state.allContent.header.Events[e.$store.state.language]),1)])),_:1},8,["class"])])])])],544)),[[n.F8,i.PhoneMenu]])}var I={data(){return{PhoneMenu:!1,touchStartData:0,touchEndData:0}},computed:{},methods:{touchStart(e){this.touchStartData=e},touchEnd(e){this.touchEndData=e,this.closeMenuSwipe()},closeMenuSwipe(){this.touchStartData<.9*this.touchEndData&&this.closeMenu()},closeMenu(){this.$emit("closeMenu")}}};const Z=(0,v.Z)(I,[["render",z],["__scopeId","data-v-64a23d99"]]);var U=Z,j={components:{MobilMenu:U},data(){return{PhoneMenu:!1}},methods:{openMenu(){window.scrollTo(0,0),this.PhoneMenu=!0,document.body.style.overflow="hidden"},closeMenu(){this.PhoneMenu=!1,document.body.style.overflowY="auto"}}};const O=(0,v.Z)(j,[["render",T],["__scopeId","data-v-26c879d2"]]);var R=O,Y={components:{HeaderComp:R,FooterComp:w},data(){return{goTop:!1}},methods:{scrollTop(){window.scrollTo(0,0)}},mounted(){this.$store.dispatch("GetData")},created(){window.addEventListener("scroll",(()=>{window.scrollY>200?this.goTop=!0:this.goTop=!1}))},unmounted(){window.removeEventListener("scroll",this.handleScroll)}};const N=(0,v.Z)(Y,[["render",i]]);var F=N,q=a(2483);const B={class:"main__top__img-and-text"},K=["src"],X=["innerHTML"];function G(e,t,n,r,i,o){const l=(0,s.up)("router-link"),c=(0,s.up)("ArticlesMain");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l,{to:"/aut"},{default:(0,s.w5)((()=>[(0,s._)("div",B,[(0,s._)("img",{src:i.mobil?a(6792):a(720),alt:"",class:"main__top__img"},null,8,K),(0,s._)("p",{class:"main__top__text",innerHTML:e.$store.state.allContent.main.imgText[e.$store.state.language]},null,8,X)])])),_:1}),(0,s.Wm)(c)],64)}const V={class:"articles"},J={class:"header-articles"},Q={class:"container"},ee={class:"all-articles"},te={class:"row"};function ae(e,t,a,n,r,i){const o=(0,s.up)("HeaderItem"),l=(0,s.up)("ArticleItem");return(0,s.wg)(),(0,s.iD)("div",V,[(0,s.Wm)(o,null,{default:(0,s.w5)((()=>[(0,s._)("h4",J,(0,y.zw)(e.$store.state.allContent.main.headerArticles[e.$store.state.language]),1)])),_:1}),(0,s._)("div",Q,[(0,s._)("div",ee,[(0,s._)("div",te,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$store.state.receivedData.articles,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"col-md-6 col-lg-3 g-5",key:e.id},[(0,s.Wm)(l,{article:e},null,8,["article"])])))),128))])])])])}const ne={class:"article-item"},se={class:"article-item__text"};function re(e,t,a,n,r,i){return(0,s.wg)(),(0,s.iD)("div",ne,[(0,s._)("div",se,(0,y.zw)(a.article.text[e.$store.state.language]),1)])}var ie=a(1123),oe=a.n(ie),le={props:["article"],methods:{vanila(){const e=document.querySelectorAll(".article-item");e.forEach((e=>{oe().init(e,{reverse:!0,max:4,speed:2300,scale:1.1,glare:!0,reset:!0,perspective:500,transition:!0,"max-glare":.15,"glare-prerender":!1,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45})}))}},mounted(){this.vanila()}};const ce=(0,v.Z)(le,[["render",re],["__scopeId","data-v-028f7e40"]]);var de=ce,ue={components:{ArticleItem:de},data(){return{}}};const _e=(0,v.Z)(ue,[["render",ae],["__scopeId","data-v-69b9999c"]]);var me=_e,ge={components:{ArticlesMain:me},data(){return{mobil:!1}},created(){window.innerWidth<500?this.mobil=!0:this.mobil=!1,window.addEventListener("resize",(()=>{window.innerWidth<500?this.mobil=!0:this.mobil=!1}))}};const he=(0,v.Z)(ge,[["render",G]]);var pe=he;const ve={class:"background"},fe={class:"lawyer__info"},we={class:"container"},ye={class:"lawyer__header__container"},be={class:"lawyer__header__background"},De={class:"lawyer__header"},$e={class:"lawyer__container"},Ce={class:"lawyer__text-and-img"},ke=["src"],Le=["innerHTML"],Ae={key:0,class:"educational-publications"},Ee={class:"container"},Me={class:"educational-publications__text"},Te={class:"educational-publications__text-link"},Se=["href"],He={class:"container"},Pe={class:"lawyer__contact__header"},xe={class:"lawyer__contact__all"},We={class:"lawyer__contact__item"},ze={class:"lawyer__contact__item__title lawyer__contact__item__tel"},Ie=["href"],Ze={class:"lawyer__contact__item"},Ue={class:"lawyer__contact__item__title lawyer__contact__item__email"},je=["href"],Oe={class:"lawyer__contact__item"},Re={class:"lawyer__contact__item__title lawyer__contact__item__address"},Ye={href:""},Ne={class:"messenger"},Fe={class:"whats messenger__item"},qe=["href"],Be={class:"tg messenger__item"},Ke=["href"];function Xe(e,t,a,n,r,i){const o=(0,s.up)("HeaderSlot");return(0,s.wg)(),(0,s.iD)("div",ve,[(0,s.Wm)(o),(0,s._)("div",fe,[(0,s._)("div",we,[(0,s._)("div",ye,[(0,s._)("div",be,[(0,s._)("h1",De,(0,y.zw)(e.$store.state.allContent.lawyer[e.$store.state.language])+" "+(0,y.zw)(i.getLawyerData.fullName[e.$store.state.language]),1)])]),(0,s._)("div",$e,[(0,s._)("div",Ce,[(0,s._)("img",{class:"lawyer__img",src:`${e.$store.state.URL__DATA}${i.getLawyerData.img}`,alt:""},null,8,ke),(0,s._)("p",{class:"lawyer__text",innerHTML:i.getLawyerData.info[e.$store.state.language]},null,8,Le)])])])]),i.getLawyerData.pdf?((0,s.wg)(),(0,s.iD)("div",Ae,[(0,s._)("div",Ee,[(0,s._)("p",Me,(0,y.zw)(e.$store.state.allContent.EducationalPublications.text[e.$store.state.language]),1),(0,s._)("span",Te,(0,y.zw)(e.$store.state.allContent.EducationalPublications.textLink[e.$store.state.language]),1),(0,s._)("a",{class:"educational-publications__button",href:`${e.$store.state.URL__DATA}${i.getLawyerData.pdf}`},(0,y.zw)(e.$store.state.allContent.EducationalPublications.button[e.$store.state.language]),9,Se)])])):(0,s.kq)("",!0),(0,s._)("div",{class:(0,y.C_)(["lawyer__contact",["Abraamov_V_V"===i.getLawyerData.id?"lawyer__contact-abramov":"lawyer__contact-rudich"]])},[(0,s._)("div",He,[(0,s._)("h3",Pe,(0,y.zw)(e.$store.state.allContent.contact.header[e.$store.state.language]),1),(0,s._)("ul",xe,[(0,s._)("li",We,[(0,s._)("span",ze,(0,y.zw)(e.$store.state.allContent.contact.numberPhone[e.$store.state.language])+": ",1),(0,s._)("a",{class:"lawyer__contact__phone-link",href:i.getLawyerData.telLink},(0,y.zw)(i.getLawyerData.tel),9,Ie)]),(0,s._)("li",Ze,[(0,s._)("span",Ue,(0,y.zw)(e.$store.state.allContent.contact.email[e.$store.state.language])+":",1),(0,s._)("a",{href:i.getLawyerData.email},(0,y.zw)(i.getLawyerData.email),9,je)]),(0,s._)("li",Oe,[(0,s._)("span",Re,(0,y.zw)(e.$store.state.allContent.contact.address[e.$store.state.language])+":",1),(0,s._)("a",Ye,(0,y.zw)(i.getLawyerData.address[e.$store.state.language]),1)]),(0,s._)("li",Ne,[(0,s._)("div",Fe,[(0,s._)("a",{href:`https://wa.me/${i.getLawyerData.telLink}`},"WhatsApp",8,qe)]),(0,s._)("div",Be,[(0,s._)("a",{href:`tg://resolve?domain=${i.getLawyerData.tgNikname}`},"Telegram",8,Ke)])])])])],2)])}var Ge=a(1178),Ve={components:{HeaderSlot:Ge.Z},data(){return{lawyerData:{}}},methods:{},computed:{getLawyerData(){return this.$store.state.receivedData.advocatsInfo.find((e=>e.id===this.$route.params.id))}}};const Je=(0,v.Z)(Ve,[["render",Xe]]);var Qe=Je;const et={class:"legalCenter"},tt={class:"container"},at={class:"events-page__header"},nt={class:"slider-and-name-slide"},st={class:"events-page__slider__container"},rt={class:"events-page__event"},it={class:"row"};function ot(e,t,a,n,r,i){const o=(0,s.up)("HeaderSlot"),l=(0,s.up)("HeaderItem"),c=(0,s.up)("SliderMain"),d=(0,s.up)("EventCard"),u=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(o),(0,s._)("div",et,[(0,s._)("div",tt,[(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s._)("h4",at,(0,y.zw)(e.$store.state.allContent.EventsPage.header[e.$store.state.language]),1)])),_:1}),(0,s._)("div",nt,[(0,s._)("div",st,[(0,s.Wm)(c,{"slide-data":e.$store.state.receivedData},null,8,["slide-data"])])]),(0,s._)("div",rt,[(0,s._)("div",it,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$store.state.receivedData.lawyerEvents.slice().reverse(),(e=>((0,s.wg)(),(0,s.iD)("div",{class:"col-md-6 g-4",key:e.id},[(0,s.Wm)(u,{to:{name:"event",params:{id:e.id}}},{default:(0,s.w5)((()=>[e.img?((0,s.wg)(),(0,s.j4)(d,{key:0,item:e},null,8,["item"])):(0,s.kq)("",!0)])),_:2},1032,["to"])])))),128))])])])])],64)}const lt={class:"control-slide"},ct={class:"control-btn"},dt={class:"all-indicators"},ut=["onClick"];function _t(e,t,a,n,r,i){const o=(0,s.up)("SlideMain");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",{class:"slide-container",style:(0,y.j5)({transform:"translateX("+r.slidePosition+"%)",transition:"all .8s ease"}),onTouchstart:t[0]||(t[0]=e=>i.swaipStart(e.touches[0].clientX)),onTouchend:t[1]||(t[1]=e=>i.swaipEnd(e.changedTouches[0].clientX))},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.slideData.slideEvents.slice().reverse(),(e=>((0,s.wg)(),(0,s.j4)(o,{key:e.id,itemSlide:e,slidePosition:r.slidePosition},null,8,["itemSlide","slidePosition"])))),128))],36),(0,s._)("div",lt,[(0,s._)("div",ct,[(0,s._)("button",{class:"control-btn-left",onClick:t[2]||(t[2]=(...e)=>i.slideLeft&&i.slideLeft(...e))}),(0,s._)("button",{class:"control-btn-right",onClick:t[3]||(t[3]=(...e)=>i.slideRight&&i.slideRight(...e))})])]),(0,s._)("div",dt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$store.state.receivedData.slideEvents.slice().reverse(),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,y.C_)(["slide-indicator",{"indicator-active":-100*t==r.slidePosition}]),key:e.id,onClick:e=>r.slidePosition=-100*t},null,10,ut)))),128))])],64)}const mt=["href"],gt=["innerHTML"];function ht(e,t,a,n,r,i){return(0,s.wg)(),(0,s.iD)("div",{class:"slide",style:(0,y.j5)({backgroundImage:`url(${e.$store.state.URL__DATA}${a.itemSlide.img})`})},[(0,s._)("a",{class:"slide__link",href:`${e.$store.state.URL__DATA}${a.itemSlide.pdf}`},[(0,s._)("h2",{class:"slide__text",innerHTML:a.itemSlide.slideText[e.$store.state.language]},null,8,gt)],8,mt)],4)}var pt={props:["itemSlide","slidePosition"],data(){return{}}};const vt=(0,v.Z)(pt,[["render",ht]]);var ft=vt,wt={props:["slideData"],components:{SlideMain:ft},data(){return{slideActive:0,slidePosition:0,swaipeStartData:0,swaipeEndData:0}},computed:{},mounted(){},methods:{slideRight(){this.slidePosition>-100*this.$store.state.receivedData.slideEvents.length+100&&(this.slidePosition-=100,this.slideActive=Math.abs(this.slidePosition)/100)},slideLeft(){this.slidePosition<0&&(this.slidePosition+=100,this.slideActive=Math.abs(this.slidePosition)/100)},swaipStart(e){this.swaipeStartData=e/document.querySelector(".slide-container").offsetWidth},swaipEnd(e){this.swaipeEndData=e/document.querySelector(".slide-container").offsetWidth,this.swaip()},swaip(){.9*this.swaipeStartData>this.swaipeEndData?this.slideRight():this.swaipeStartData<.9*this.swaipeEndData&&this.slideLeft()}}};const yt=(0,v.Z)(wt,[["render",_t],["__scopeId","data-v-41b9a912"]]);var bt=yt,Dt=a(5050),$t={components:{SliderMain:bt,HeaderSlot:Ge.Z,EventCard:Dt.Z}};const Ct=(0,v.Z)($t,[["render",ot]]);var kt=Ct;const Lt={class:"event-page"},At={class:"container"},Et={class:"event-page__header"},Mt=["src"],Tt=["innerHTML"],St={class:"container"},Ht={class:"event-page__file"},Pt=["href"];function xt(e,t,a,n,r,i){const o=(0,s.up)("HeaderSlot"),l=(0,s.up)("HeaderItem");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",Lt,[(0,s.Wm)(o),(0,s._)("div",At,[(0,s._)("button",{class:"btn-go-back",onClick:t[0]||(t[0]=t=>e.$router.go(-1))}),(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s._)("h1",Et,(0,y.zw)(i.getEventData.cardHeader[e.$store.state.language]),1)])),_:1}),(0,s._)("img",{class:"event-page__img",src:`${e.$store.state.URL__DATA}${i.getEventData.img}`,alt:""},null,8,Mt),(0,s._)("p",{class:"event-page__text",innerHTML:i.getEventData.content[e.$store.state.language]},null,8,Tt)])]),(0,s._)("div",St,[(0,s._)("div",Ht,[(0,s._)("a",{target:"_blank",href:`${this.$store.state.URL__DATA}${i.getEventData.pdf}`},"здесь",8,Pt)])])],64)}var Wt={components:{HeaderSlot:Ge.Z},computed:{getEventData(){return this.$store.state.receivedData.lawyerEvents.find((e=>e.id===Number(this.$route.params.id)))}},data(){return{}},mounted(){console.log(this.getEventData)},methods:{handleDocumentRender(){this.isLoading=!1,this.pageCount=this.$refs.pdfRef.pageCount}}};const zt=(0,v.Z)(Wt,[["render",xt],["__scopeId","data-v-35a713fe"]]);var It=zt;const Zt={class:"LegalCenter"},Ut={class:"container"},jt=["innerHTML"],Ot=["innerHTML"];function Rt(e,t,a,n,r,i){const o=(0,s.up)("HeaderSlot"),l=(0,s.up)("HeaderItem");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(o),(0,s._)("section",Zt,[(0,s._)("div",Ut,[(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s._)("h4",{class:"legal-center__header",innerHTML:e.$store.state.receivedData.LegalCenter.header[e.$store.state.language]},null,8,jt)])),_:1}),(0,s._)("p",{class:"legal-center__text",innerHTML:e.$store.state.receivedData.LegalCenter.text[e.$store.state.language]},null,8,Ot)])])],64)}var Yt={components:{HeaderSlot:Ge.Z}};const Nt=(0,v.Z)(Yt,[["render",Rt]]);var Ft=Nt;const qt=[{path:"/",name:"home",component:pe},{path:"/lawyer/:id",name:"lawyer",component:Qe},{path:"/Events",name:"EventsPage",component:kt},{path:"/Event/:id",name:"event",component:It},{path:"/Event/:id",name:"event",component:It},{path:"/LegalCenter",name:"LegalCenter",component:Ft},{path:"/adminMain",name:"AdminMain",component:()=>a.e(548).then(a.bind(a,5963))},{path:"/AdminLawyer/:id",name:"AdminLawyer",component:()=>Promise.all([a.e(784),a.e(330)]).then(a.bind(a,3771))},{path:"/AdminLegalCenter",name:"AdminLegalCenter",component:()=>Promise.all([a.e(784),a.e(760)]).then(a.bind(a,9443))},{path:"/AdminEvents",name:"AdminEvents",component:()=>a.e(17).then(a.bind(a,2622))},{path:"/AdminEventsItem/:id",name:"AdminEventsItem",component:()=>Promise.all([a.e(784),a.e(906)]).then(a.bind(a,8683))},{path:"/Aut",name:"Aut",component:()=>a.e(447).then(a.bind(a,7671))},{path:"/test",name:"test",component:()=>a.e(43).then(a.bind(a,1578))}],Bt=(0,q.p7)({history:(0,q.r5)(),scrollBehavior(){return{left:0,top:0}},routes:qt});var Kt=Bt,Xt=(a(7658),a(65)),Gt=a(1076),Vt=(0,Xt.MT)({state:{language:"rus",URL__DATA:"https://api.sudural.ru/",receivedData:{},allContent:{main:{imgText:{rus:"“ Если Вы считаете, что компетентность стоит дорого,\n          то попробуйте некомпетентность — она обойдётся вам гораздо дороже. “<br><br>\n           © Йохан Стаель фон Хольстайн",eng:"“ If you think competence is expensive,\n          then try incompetence — it will cost you much more. “<br><br>\n           © Johan Stael von Holstein"},headerArticles:{rus:"Объявления",eng:"Advertisements"}},lawyer:{rus:"Адвокат",eng:"Lawyer"},header:{main:{rus:"Главная",eng:"Main"},ScientificAndLegalCenter:{rus:"Научно-Правовой центер",eng:"Scientific and Legal Center"},Events:{rus:"Мероприятия",eng:"Events"}},EventsPage:{header:{rus:"Мероприятия",eng:"Events"}},contact:{header:{rus:"Как можно связаться со мной",eng:"How can you contact me"},numberPhone:{rus:"Номер телефона",eng:"Phone number"},email:{rus:"Почта",eng:"Email"},address:{rus:"Адресс",eng:"Address"}},EducationalPublications:{text:{rus:"\n        Список опубликованных учебных изданий\n         и научных трудов доктора юридических наук,\n          адвоката Рудича Валерия Владимировича\n        ",eng:"List of published educational publications\n        and scientific works of the Doctor of Law,\n        lawyer Rudich Valery Vladimirovich"},textLink:{rus:"Ознакомиться со статьями:",eng:"Read the articles:"},button:{rus:"Открыть PDF файл",eng:"Open PDF file"},link:""}}},getters:{},mutations:{updateData(e,t){e.receivedData=t},languageUpdate(e,t){e.language=t},addEvent(e){e.lawyerEvents.push({cardHeader:{rus:"",eng:""},img:"",cardText:{rus:"",eng:""},content:{rus:"",eng:""},id:"newEvent",pdf:[]})}},actions:{GetData(e){Gt.Z.get(`${this.state.URL__DATA}api/get`).then((t=>{e.commit("updateData",t.data.pages),console.log(t.data.pages)}))}},modules:{}});const Jt={class:"header-item__container"},Qt={class:"header-item"};function ea(e,t,a,n,r,i){return(0,s.wg)(),(0,s.iD)("div",Jt,[(0,s._)("div",Qt,[(0,s.WI)(e.$slots,"default")])])}var ta={};const aa=(0,v.Z)(ta,[["render",ea]]);var na=aa;(0,n.ri)(F).use(Vt).use(Kt).component("HeaderItem",na).mount("#app")},5050:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(3396),s=a(7139);const r={class:"event-card"},i={class:"event-card__text"},o={class:"event-card__header"},l={class:"event-card__discription"},c=(0,n._)("div",{class:"event-card__details"},[(0,n.Uk)("Подробнее "),(0,n._)("span",{class:"arrow-black"})],-1);function d(e,t,a,d,u,_){return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",i,[(0,n._)("div",{class:"event-card__img",style:(0,s.j5)({backgroundImage:`url(${e.$store.state.URL__DATA}${a.item.img})`})},null,4),(0,n._)("h3",o,(0,s.zw)(a.item.cardHeader[e.$store.state.language]),1),(0,n._)("p",l,(0,s.zw)(a.item.cardText[e.$store.state.language]),1)]),c])}var u={props:["item"]},_=a(89);const m=(0,_.Z)(u,[["render",d]]);var g=m},1178:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(3396);const s={class:"header-background"};function r(e,t,a,r,i,o){return(0,n.wg)(),(0,n.iD)("div",s)}var i={},o=a(89);const l=(0,o.Z)(i,[["render",r]]);var c=l},6792:function(e,t,a){e.exports=a.p+"img/homeMobil.a4394a11.jpg"},720:function(e,t,a){e.exports=a.p+"img/slideImg1.489eeb89.jpg"}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,s,r){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],s=e[d][1],r=e[d][2];for(var o=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(o=!1,r<i&&(i=r));if(o){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,s,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+({17:"AdminEvents",43:"test",330:"AdminLawyer",447:"Aut",548:"AdminMain",760:"AdminLegalCenter",906:"AdminEventsItem"}[e]||e)+"."+{17:"f57f46b6",43:"796d9c7d",330:"02c08ca5",447:"d615c4dc",548:"5489c246",760:"565fa615",784:"72efaec1",906:"7d3ccd6c"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+{17:"AdminEvents",330:"AdminLawyer",447:"Aut",548:"AdminMain",760:"AdminLegalCenter",906:"AdminEventsItem"}[e]+"."+{17:"a6bf28d6",330:"361f403c",447:"2e0e45cd",548:"18945634",760:"c0ae94cc",906:"5c7ad7e6"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="advocate:";a.l=function(n,s,r,i){if(e[n])e[n].push(s);else{var o,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+r){o=u;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+r),o.src=n),e[n]=[s];var _=function(t,a){o.onerror=o.onload=null,clearTimeout(m);var s=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(_.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=_.bind(null,o.onerror),o.onload=_.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/Advocat/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,a,n,s){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=o,r.parentNode&&r.parentNode.removeChild(r),s(l)}};return r.onerror=r.onload=i,r.href=t,a?a.parentNode.insertBefore(r,a.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var s=a[n],r=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(r===e||r===t))return s}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){s=i[n],r=s.getAttribute("data-href");if(r===e||r===t)return s}},n=function(n){return new Promise((function(s,r){var i=a.miniCssF(n),o=a.p+i;if(t(i,o))return s();e(n,o,null,s,r)}))},s={143:0};a.f.miniCss=function(e,t){var a={17:1,330:1,447:1,548:1,760:1,906:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=n(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}}(),function(){var e={143:0};a.f.j=function(t,n){var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var r=new Promise((function(a,n){s=e[t]=[a,n]}));n.push(s[2]=r);var i=a.p+a.u(t),o=new Error,l=function(n){if(a.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",o.name="ChunkLoadError",o.type=r,o.request=i,s[1](o)}};a.l(i,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,r,i=n[0],o=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(l)var d=l(a)}for(t&&t(n);c<i.length;c++)r=i[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},n=self["webpackChunkadvocate"]=self["webpackChunkadvocate"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(7309)}));n=a.O(n)})();
//# sourceMappingURL=app.8b5ab9ad.js.map