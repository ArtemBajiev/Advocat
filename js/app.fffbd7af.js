(function(){"use strict";var e={9968:function(e,t,a){var n=a(9242),s=a(3396);const r={class:"wrapper"};function i(e,t,a,i,o,l){const c=(0,s.up)("LoadingPage"),d=(0,s.up)("HeaderComp"),u=(0,s.up)("router-view"),_=(0,s.up)("FooterComp");return(0,s.wg)(),(0,s.iD)(s.HY,null,[e.$store.state.loading||e.$store.state.loadingImg?((0,s.wg)(),(0,s.j4)(c,{key:0})):(0,s.kq)("",!0),(0,s._)("div",r,[(0,s.Wm)(d),(0,s.Wm)(u,null,{default:(0,s.w5)((({Component:e,route:t})=>[(0,s.Wm)(n.uT,{name:"anim-page",mode:"out-in"},{default:(0,s.w5)((()=>[((0,s.wg)(),(0,s.iD)("div",{key:t.path},[((0,s.wg)(),(0,s.j4)((0,s.LL)(e)))]))])),_:2},1024)])),_:1}),(0,s.Wm)(_),(0,s.Wm)(n.uT,{name:"anim-page",mode:"out-in"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("button",{onClick:t[0]||(t[0]=(...e)=>l.scrollTop&&l.scrollTop(...e)),class:"go-top"},null,512),[[n.F8,o.goTop]])])),_:1})])],64)}var o=a.p+"img/phoneFooter.a3bb2c17.svg",l=a.p+"img/messageFooter.a7859d70.svg",c=a.p+"img/gpsFooter.a7d385dd.svg",d=a.p+"img/tgWhite.de5dffc3.svg",u=a.p+"img/whatsAppWhite.625343df.svg";const _={class:"footer"},m=(0,s.uE)('<div class="footer__container"><div class="footer__left"><div class="more-detailed-footer"><div class="foot">© 2023 Научно-правовой центр&quot;</div><div class="foot-dev">Сделано в <div class="CDT">CDT</div></div></div></div><div class="footer__right"><a href=""><span class="footer-phone"><img src="'+o+'" alt="Phone"></span></a><span class="footer-message"><img src="'+l+'" alt="email"></span><span class="footer-gps"><img src="'+c+'" alt="Adress"></span><span class="footer-tg"><img src="'+d+'" alt="Tg"></span><span class="footer-whats"><img src="'+u+'" alt="WhatsApp"></span></div></div>',1),g=[m];function h(e,t,a,n,r,i){return(0,s.wg)(),(0,s.iD)("footer",_,g)}var p={},v=a(89);const f=(0,v.Z)(p,[["render",h]]);var w=f,y=a(7139),b=a.p+"img/LOGO.5ba86d8d.png";const D=e=>((0,s.dD)("data-v-09807720"),e=e(),(0,s.Cn)(),e),$={class:"header"},k={class:"header__container"},C=D((()=>(0,s._)("img",{class:"logo",src:b,height:"100",alt:""},null,-1))),L={class:"header__menu"},A={class:"header__menu-all"},E={class:"header__menu-item"},M={class:"header__menu-item"},T={class:"header__menu-item"};function S(e,t,a,r,i,o){const l=(0,s.up)("MobilMenu"),c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("header",$,[(0,s.Wm)(n.uT,{name:"phone"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(l,{onCloseMenu:o.closeMenu},null,8,["onCloseMenu"]),[[n.F8,i.PhoneMenu]])])),_:1}),(0,s._)("div",k,[(0,s.Wm)(c,{to:"/"},{default:(0,s.w5)((()=>[C])),_:1}),(0,s._)("nav",L,[(0,s._)("ul",A,[(0,s._)("li",E,[(0,s.Wm)(c,{class:(0,y.C_)(["header__menu-item__link",{"header__menu-item-active":"/"===e.$route.path}]),to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,y.zw)(e.$store.state.allContent.header.main[e.$store.state.language]),1)])),_:1},8,["class"])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$store.state.receivedData.advocatsInfo,(t=>((0,s.wg)(),(0,s.iD)("li",{class:"header__menu-item",key:t.id},[(0,s.Wm)(c,{class:(0,y.C_)(["header__menu-item__link",{"header__menu-item-active":e.$route.path==="/lawyer/"+t.id}]),to:{name:"lawyer",params:{id:t.id}}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,y.zw)(e.$store.state.allContent.lawyer[e.$store.state.language])+" "+(0,y.zw)(t.name[e.$store.state.language]),1)])),_:2},1032,["class","to"])])))),128)),(0,s._)("li",M,[(0,s.Wm)(c,{class:(0,y.C_)(["header__menu-item__link",{"header__menu-item-active":"/LegalCenter"===e.$route.path}]),to:"/LegalCenter"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,y.zw)(e.$store.state.allContent.header.ScientificAndLegalCenter[e.$store.state.language]),1)])),_:1},8,["class"])]),(0,s._)("li",T,[(0,s.Wm)(c,{class:(0,y.C_)(["header__menu-item__link",{"header__menu-item-active":"/Events"===e.$route.path}]),to:"/Events"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,y.zw)(e.$store.state.allContent.header.Events[e.$store.state.language]),1)])),_:1},8,["class"])])])]),(0,s._)("button",{class:(0,y.C_)(["header__language",{header__language__active:"rus"===e.$store.state.language}]),onClick:t[0]||(t[0]=(0,n.iM)((t=>e.$store.commit("languageUpdate","rus")),["prevent"]))}," РУС ",2),(0,s._)("button",{class:(0,y.C_)(["header__language",{header__language__active:"eng"===e.$store.state.language}]),onClick:t[1]||(t[1]=(0,n.iM)((t=>e.$store.commit("languageUpdate","eng")),["prevent"]))}," ENG ",2),(0,s._)("button",{class:"header__button-menu",onClick:t[2]||(t[2]=e=>o.openMenu())})])])}const H={class:"header__menu__phone"},P={class:"header__menu-all__phone"},x={class:"header__menu-item__phone"},W={class:"header__menu-item__phone"},z={class:"header__menu-item__phone"};function I(e,t,a,r,i,o){const l=(0,s.up)("router-link");return(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",{class:"header__phone",onTouchstart:t[5]||(t[5]=e=>o.touchStart(e.touches[0].clientX)),onTouchend:t[6]||(t[6]=e=>o.touchEnd(e.changedTouches[0].clientX))},[(0,s._)("div",{class:"header__phone__background",onClick:t[0]||(t[0]=e=>o.closeMenu())}),(0,s._)("nav",H,[(0,s._)("ul",P,[(0,s._)("li",x,[(0,s.Wm)(l,{class:(0,y.C_)(["header__menu-item__link__phone",{"header__menu-item-active":"/"===e.$route.path}]),to:{name:"home"},onClick:t[1]||(t[1]=e=>o.closeMenu())},{default:(0,s.w5)((()=>[(0,s.Uk)(" Главная")])),_:1},8,["class"])]),(0,s._)("li",W,[(0,s.Wm)(l,{class:(0,y.C_)(["header__menu-item__link__phone",{"header__menu-item-active":"/Legal_center"===e.$route.path}]),to:"/LegalCenter",onClick:t[2]||(t[2]=e=>o.closeMenu())},{default:(0,s.w5)((()=>[(0,s.Uk)(" Научно-Правовой Центр")])),_:1},8,["class"])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$store.state.receivedData.advocatsInfo,(a=>((0,s.wg)(),(0,s.iD)("li",{class:"header__menu-item__phone",key:a.id},[(0,s.Wm)(l,{class:(0,y.C_)(["header__menu-item__link__phone",{"header__menu-item-active":e.$route.path==="/lawyer/"+a.id}]),to:{name:"lawyer",params:{id:a.id}},onClick:t[3]||(t[3]=e=>o.closeMenu())},{default:(0,s.w5)((()=>[(0,s.Uk)("Адвокат "+(0,y.zw)(a.name[e.$store.state.language]),1)])),_:2},1032,["class","to"])])))),128)),(0,s._)("li",z,[(0,s.Wm)(l,{onClick:t[4]||(t[4]=e=>o.closeMenu()),class:(0,y.C_)(["header__menu-item__link__phone",{"header__menu-item-active":"/Events"===e.$route.path}]),to:"/Events"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,y.zw)(e.$store.state.allContent.header.Events[e.$store.state.language]),1)])),_:1},8,["class"])])])])],544)),[[n.F8,i.PhoneMenu]])}var Z={data(){return{PhoneMenu:!1,touchStartData:0,touchEndData:0}},computed:{},methods:{touchStart(e){this.touchStartData=e},touchEnd(e){this.touchEndData=e,this.closeMenuSwipe()},closeMenuSwipe(){this.touchStartData<.9*this.touchEndData&&this.closeMenu()},closeMenu(){this.$emit("closeMenu")}}};const U=(0,v.Z)(Z,[["render",I],["__scopeId","data-v-1683b748"]]);var j=U,O={components:{MobilMenu:j},data(){return{PhoneMenu:!1}},methods:{openMenu(){window.scrollTo(0,0),this.PhoneMenu=!0,document.body.style.overflow="hidden"},closeMenu(){this.PhoneMenu=!1,document.body.style.overflowY="auto"}}};const R=(0,v.Z)(O,[["render",S],["__scopeId","data-v-09807720"]]);var Y=R;const F={class:"loader-container"},N=(0,s._)("span",{class:"loader"},null,-1),q=[N];function B(e,t,a,n,r,i){return(0,s.wg)(),(0,s.iD)("div",F,q)}var K={};const X=(0,v.Z)(K,[["render",B]]);var G=X,V={components:{HeaderComp:Y,FooterComp:w,LoadingPage:G},data(){return{goTop:!1}},methods:{scrollTop(){window.scrollTo(0,0)}},mounted(){this.$store.dispatch("GetData")},created(){window.addEventListener("scroll",(()=>{window.scrollY>200?this.goTop=!0:this.goTop=!1}))},unmounted(){window.removeEventListener("scroll",this.handleScroll)}};const J=(0,v.Z)(V,[["render",i]]);var Q=J,ee=a(2483);const te={class:"main__top__img-and-text"},ae=["src"],ne=["innerHTML"];function se(e,t,n,r,i,o){const l=(0,s.up)("router-link"),c=(0,s.up)("ArticlesMain");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l,{to:"/aut"},{default:(0,s.w5)((()=>[(0,s._)("div",te,[(0,s._)("img",{src:i.mobil?a(6792):a(720),alt:"",class:"main__top__img"},null,8,ae),(0,s._)("p",{class:"main__top__text",innerHTML:e.$store.state.allContent.main.imgText[e.$store.state.language]},null,8,ne)])])),_:1}),(0,s.Wm)(c)],64)}const re={class:"articles"},ie={class:"header-articles"},oe={class:"container"},le={class:"all-articles"},ce={class:"row"};function de(e,t,a,n,r,i){const o=(0,s.up)("HeaderItem"),l=(0,s.up)("ArticleItem");return(0,s.wg)(),(0,s.iD)("div",re,[(0,s.Wm)(o,null,{default:(0,s.w5)((()=>[(0,s._)("h4",ie,(0,y.zw)(e.$store.state.allContent.main.headerArticles[e.$store.state.language]),1)])),_:1}),(0,s._)("div",oe,[(0,s._)("div",le,[(0,s._)("div",ce,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$store.state.receivedData.articles,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"col-md-6 col-lg-3 g-5",key:e.id},[e.text.rus&&e.text.eng?((0,s.wg)(),(0,s.j4)(l,{key:0,article:e},null,8,["article"])):(0,s.kq)("",!0)])))),128))])])])])}const ue={class:"article-item"},_e={class:"article-item__text"};function me(e,t,a,n,r,i){return(0,s.wg)(),(0,s.iD)("div",ue,[(0,s._)("div",_e,(0,y.zw)(a.article.text[e.$store.state.language]),1)])}var ge=a(1123),he=a.n(ge),pe={props:["article"],methods:{vanila(){const e=document.querySelectorAll(".article-item");e.forEach((e=>{he().init(e,{reverse:!0,max:4,speed:2300,scale:1.1,glare:!0,reset:!0,perspective:500,transition:!0,"max-glare":.15,"glare-prerender":!1,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45})}))}},mounted(){this.vanila()}};const ve=(0,v.Z)(pe,[["render",me],["__scopeId","data-v-028f7e40"]]);var fe=ve,we={components:{ArticleItem:fe},data(){return{}}};const ye=(0,v.Z)(we,[["render",de],["__scopeId","data-v-7c02cc70"]]);var be=ye,De={components:{ArticlesMain:be},data(){return{mobil:!1}},methods:{},created(){window.innerWidth<500?this.mobil=!0:this.mobil=!1,window.addEventListener("resize",(()=>{window.innerWidth<500?this.mobil=!0:this.mobil=!1}))}};const $e=(0,v.Z)(De,[["render",se]]);var ke=$e;const Ce={class:"background"},Le={class:"lawyer__info"},Ae={class:"container"},Ee={class:"lawyer__header__container"},Me={class:"lawyer__header__background"},Te={class:"lawyer__header"},Se={class:"lawyer__container"},He={class:"lawyer__text-and-img"},Pe=["src"],xe=["innerHTML"],We={key:0,class:"educational-publications"},ze={class:"container"},Ie={class:"educational-publications__text"},Ze={class:"educational-publications__text-link"},Ue=["href"],je={class:"container"},Oe={class:"lawyer__contact__header"},Re={class:"lawyer__contact__all"},Ye={class:"lawyer__contact__item"},Fe={class:"lawyer__contact__item__title lawyer__contact__item__tel"},Ne=["href"],qe={class:"lawyer__contact__item"},Be={class:"lawyer__contact__item__title lawyer__contact__item__email"},Ke=["href"],Xe={class:"lawyer__contact__item"},Ge={class:"lawyer__contact__item__title lawyer__contact__item__address"},Ve={href:""},Je={class:"messenger"},Qe={class:"whats messenger__item"},et=["href"],tt={class:"tg messenger__item"},at=["href"];function nt(e,t,a,n,r,i){const o=(0,s.up)("HeaderSlot");return(0,s.wg)(),(0,s.iD)("div",Ce,[(0,s.Wm)(o),(0,s._)("div",Le,[(0,s._)("div",Ae,[(0,s._)("div",Ee,[(0,s._)("div",Me,[(0,s._)("h1",Te,(0,y.zw)(e.$store.state.allContent.lawyer[e.$store.state.language])+" "+(0,y.zw)(i.getLawyerData.fullName[e.$store.state.language]),1)])]),(0,s._)("div",Se,[(0,s._)("div",He,[(0,s._)("img",{class:"lawyer__img",src:`${e.$store.state.URL__DATA}${i.getLawyerData.img}`,alt:""},null,8,Pe),(0,s._)("p",{class:"lawyer__text",innerHTML:i.getLawyerData.info[e.$store.state.language]},null,8,xe)])])])]),i.getLawyerData.pdf?((0,s.wg)(),(0,s.iD)("div",We,[(0,s._)("div",ze,[(0,s._)("p",Ie,(0,y.zw)(e.$store.state.allContent.EducationalPublications.text[e.$store.state.language]),1),(0,s._)("span",Ze,(0,y.zw)(e.$store.state.allContent.EducationalPublications.textLink[e.$store.state.language]),1),(0,s._)("a",{class:"educational-publications__button",href:`${e.$store.state.URL__DATA}${i.getLawyerData.pdf}`},(0,y.zw)(e.$store.state.allContent.EducationalPublications.button[e.$store.state.language]),9,Ue)])])):(0,s.kq)("",!0),(0,s._)("div",{class:(0,y.C_)(["lawyer__contact",["Abraamov_V_V"===i.getLawyerData.id?"lawyer__contact-abramov":"lawyer__contact-rudich"]])},[(0,s._)("div",je,[(0,s._)("h3",Oe,(0,y.zw)(e.$store.state.allContent.contact.header[e.$store.state.language]),1),(0,s._)("ul",Re,[(0,s._)("li",Ye,[(0,s._)("span",Fe,(0,y.zw)(e.$store.state.allContent.contact.numberPhone[e.$store.state.language])+": ",1),(0,s._)("a",{class:"lawyer__contact__phone-link",href:i.getLawyerData.telLink},(0,y.zw)(i.getLawyerData.tel),9,Ne)]),(0,s._)("li",qe,[(0,s._)("span",Be,(0,y.zw)(e.$store.state.allContent.contact.email[e.$store.state.language])+":",1),(0,s._)("a",{href:i.getLawyerData.email},(0,y.zw)(i.getLawyerData.email),9,Ke)]),(0,s._)("li",Xe,[(0,s._)("span",Ge,(0,y.zw)(e.$store.state.allContent.contact.address[e.$store.state.language])+":",1),(0,s._)("a",Ve,(0,y.zw)(i.getLawyerData.address[e.$store.state.language]),1)]),(0,s._)("li",Je,[(0,s._)("div",Qe,[(0,s._)("a",{href:`https://wa.me/${i.getLawyerData.telLink}`},"WhatsApp",8,et)]),(0,s._)("div",tt,[(0,s._)("a",{href:`tg://resolve?domain=${i.getLawyerData.tgNikname}`},"Telegram",8,at)])])])])],2)])}var st=a(1178),rt={components:{HeaderSlot:st.Z},data(){return{lawyerData:{}}},methods:{},computed:{getLawyerData(){return this.$store.state.receivedData.advocatsInfo.find((e=>e.id===this.$route.params.id))}}};const it=(0,v.Z)(rt,[["render",nt]]);var ot=it;const lt={class:"legalCenter"},ct={class:"container"},dt={class:"events-page__header"},ut={class:"slider-and-name-slide"},_t={class:"events-page__slider__container"},mt={class:"events-page__event"},gt={class:"row"};function ht(e,t,a,n,r,i){const o=(0,s.up)("HeaderSlot"),l=(0,s.up)("HeaderItem"),c=(0,s.up)("SliderMain"),d=(0,s.up)("EventCard"),u=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(o),(0,s._)("div",lt,[(0,s._)("div",ct,[(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s._)("h4",dt,(0,y.zw)(e.$store.state.allContent.EventsPage.header[e.$store.state.language]),1)])),_:1}),(0,s._)("div",ut,[(0,s._)("div",_t,[(0,s.Wm)(c,{"slide-data":e.$store.state.receivedData},null,8,["slide-data"])])]),(0,s._)("div",mt,[(0,s._)("div",gt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$store.state.receivedData.lawyerEvents.slice().reverse(),(e=>((0,s.wg)(),(0,s.iD)("div",{class:"col-md-6 g-4",key:e.id},[(0,s.Wm)(u,{to:{name:"event",params:{id:e.id}}},{default:(0,s.w5)((()=>[e.img?((0,s.wg)(),(0,s.j4)(d,{key:0,item:e},null,8,["item"])):(0,s.kq)("",!0)])),_:2},1032,["to"])])))),128))])])])])],64)}const pt={class:"control-slide"},vt={class:"control-btn"},ft={class:"all-indicators"},wt=["onClick"];function yt(e,t,a,n,r,i){const o=(0,s.up)("SlideMain");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",{class:"slide-container",style:(0,y.j5)({transform:"translateX("+r.slidePosition+"%)",transition:"all .8s ease"}),onTouchstart:t[0]||(t[0]=e=>i.swaipStart(e.touches[0].clientX)),onTouchend:t[1]||(t[1]=e=>i.swaipEnd(e.changedTouches[0].clientX))},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.slideData.slideEvents.slice().reverse(),(e=>((0,s.wg)(),(0,s.j4)(o,{key:e.id,itemSlide:e,slidePosition:r.slidePosition},null,8,["itemSlide","slidePosition"])))),128))],36),(0,s._)("div",pt,[(0,s._)("div",vt,[(0,s._)("button",{class:"control-btn-left",onClick:t[2]||(t[2]=(...e)=>i.slideLeft&&i.slideLeft(...e))}),(0,s._)("button",{class:"control-btn-right",onClick:t[3]||(t[3]=(...e)=>i.slideRight&&i.slideRight(...e))})])]),(0,s._)("div",ft,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$store.state.receivedData.slideEvents.slice().reverse(),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,y.C_)(["slide-indicator",{"indicator-active":-100*t==r.slidePosition}]),key:e.id,onClick:e=>r.slidePosition=-100*t},null,10,wt)))),128))])],64)}const bt=["href"],Dt=["innerHTML"];function $t(e,t,a,n,r,i){return(0,s.wg)(),(0,s.iD)("div",{class:"slide",style:(0,y.j5)({backgroundImage:`url(${e.$store.state.URL__DATA}${a.itemSlide.img})`})},[(0,s._)("a",{class:"slide__link",href:`${e.$store.state.URL__DATA}${a.itemSlide.pdf}`},[(0,s._)("h2",{class:"slide__text",innerHTML:a.itemSlide.slideText[e.$store.state.language]},null,8,Dt)],8,bt)],4)}var kt={props:["itemSlide","slidePosition"],data(){return{}}};const Ct=(0,v.Z)(kt,[["render",$t]]);var Lt=Ct,At={props:["slideData"],components:{SlideMain:Lt},data(){return{slideActive:0,slidePosition:0,swaipeStartData:0,swaipeEndData:0}},computed:{},mounted(){},methods:{slideRight(){this.slidePosition>-100*this.$store.state.receivedData.slideEvents.length+100&&(this.slidePosition-=100,this.slideActive=Math.abs(this.slidePosition)/100)},slideLeft(){this.slidePosition<0&&(this.slidePosition+=100,this.slideActive=Math.abs(this.slidePosition)/100)},swaipStart(e){this.swaipeStartData=e/document.querySelector(".slide-container").offsetWidth},swaipEnd(e){this.swaipeEndData=e/document.querySelector(".slide-container").offsetWidth,this.swaip()},swaip(){.9*this.swaipeStartData>this.swaipeEndData?this.slideRight():this.swaipeStartData<.9*this.swaipeEndData&&this.slideLeft()}}};const Et=(0,v.Z)(At,[["render",yt],["__scopeId","data-v-ffa6afea"]]);var Mt=Et,Tt=a(7951),St={components:{SliderMain:Mt,HeaderSlot:st.Z,EventCard:Tt.Z}};const Ht=(0,v.Z)(St,[["render",ht]]);var Pt=Ht,xt=a.p+"img/link.d1a02f1d.svg";const Wt={class:"event-page"},zt={class:"container"},It={class:"event-page__btn-and-header"},Zt={class:"event-page__header"},Ut=["src"],jt=["innerHTML"],Ot={class:"container"},Rt={class:"event-page__file"},Yt=["href"],Ft=(0,s._)("img",{src:xt,alt:""},null,-1);function Nt(e,t,a,n,r,i){const o=(0,s.up)("HeaderSlot"),l=(0,s.up)("btnGoBack"),c=(0,s.up)("HeaderItem");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",Wt,[(0,s.Wm)(o),(0,s._)("div",zt,[(0,s._)("div",It,[(0,s.Wm)(l),(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s._)("h1",Zt,(0,y.zw)(i.getEventData.cardHeader[e.$store.state.language]),1)])),_:1})]),(0,s._)("img",{class:"event-page__img",src:`${e.$store.state.URL__DATA}${i.getEventData.img}`,alt:""},null,8,Ut),(0,s._)("p",{class:"event-page__text",innerHTML:i.getEventData.content[e.$store.state.language]},null,8,jt)])]),(0,s._)("div",Ot,[(0,s._)("div",Rt,[(0,s._)("a",{target:"_blank",href:`${this.$store.state.URL__DATA}${i.getEventData.pdf}`},[(0,s.Uk)((0,y.zw)(e.$store.state.allContent.contact.pdf[e.$store.state.language])+" ",1),Ft],8,Yt)])])],64)}function qt(e,t){return(0,s.wg)(),(0,s.iD)("button",{class:"btn-go-back",onClick:t[0]||(t[0]=t=>e.$router.go(-1))})}const Bt={},Kt=(0,v.Z)(Bt,[["render",qt]]);var Xt=Kt,Gt={components:{HeaderSlot:st.Z,btnGoBack:Xt},computed:{getEventData(){return this.$store.state.receivedData.lawyerEvents.find((e=>e.id===Number(this.$route.params.id)))}},data(){return{}},mounted(){console.log(this.getEventData)},methods:{handleDocumentRender(){this.isLoading=!1,this.pageCount=this.$refs.pdfRef.pageCount}}};const Vt=(0,v.Z)(Gt,[["render",Nt]]);var Jt=Vt;const Qt={class:"LegalCenter"},ea={class:"container"},ta=["innerHTML"],aa=["innerHTML"];function na(e,t,a,n,r,i){const o=(0,s.up)("HeaderSlot"),l=(0,s.up)("HeaderItem");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(o),(0,s._)("section",Qt,[(0,s._)("div",ea,[(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s._)("h4",{class:"legal-center__header",innerHTML:e.$store.state.receivedData.LegalCenter.header[e.$store.state.language]},null,8,ta)])),_:1}),(0,s._)("p",{class:"legal-center__text",innerHTML:e.$store.state.receivedData.LegalCenter.text[e.$store.state.language]},null,8,aa)])])],64)}var sa={components:{HeaderSlot:st.Z}};const ra=(0,v.Z)(sa,[["render",na]]);var ia=ra;const oa=[{path:"/",name:"home",component:ke},{path:"/lawyer/:id",name:"lawyer",component:ot},{path:"/Events",name:"EventsPage",component:Pt},{path:"/Event/:id",name:"event",component:Jt},{path:"/Event/:id",name:"event",component:Jt},{path:"/LegalCenter",name:"LegalCenter",component:ia},{path:"/adminMain",name:"AdminMain",component:()=>a.e(548).then(a.bind(a,7290))},{path:"/AdminLawyer/:id",name:"AdminLawyer",component:()=>Promise.all([a.e(601),a.e(330)]).then(a.bind(a,6391))},{path:"/AdminLegalCenter",name:"AdminLegalCenter",component:()=>Promise.all([a.e(601),a.e(760)]).then(a.bind(a,1304))},{path:"/AdminEvents",name:"AdminEvents",component:()=>a.e(17).then(a.bind(a,9877))},{path:"/AdminEventsItem/:id",name:"AdminEventsItem",component:()=>Promise.all([a.e(601),a.e(906)]).then(a.bind(a,5975))},{path:"/Aut",name:"Aut",component:()=>a.e(447).then(a.bind(a,7671))},{path:"/test",name:"test",component:()=>a.e(43).then(a.bind(a,1578))}],la=(0,ee.p7)({history:(0,ee.r5)(),scrollBehavior(){return{left:0,top:0}},routes:oa});var ca=la,da=(a(7658),a(65)),ua=a(1076),_a=(0,da.MT)({state:{language:"rus",URL__DATA:"https://api.sudural.ru/",receivedData:{},loading:!0,allContent:{main:{imgText:{rus:"“ Если Вы считаете, что компетентность стоит дорого,\n          то попробуйте некомпетентность — она обойдётся вам гораздо дороже. “<br><br>\n           © Йохан Стаель фон Хольстайн",eng:"“ If you think competence is expensive,\n          then try incompetence — it will cost you much more. “<br><br>\n           © Johan Stael von Holstein"},headerArticles:{rus:"Объявления",eng:"Advertisements"}},lawyer:{rus:"Адвокат",eng:"Lawyer"},header:{main:{rus:"Главная",eng:"Main"},ScientificAndLegalCenter:{rus:"Научно-Правовой центер",eng:"Scientific and Legal Center"},Events:{rus:"Мероприятия",eng:"Events"}},EventsPage:{header:{rus:"Мероприятия",eng:"Events"}},contact:{header:{rus:"Как можно связаться со мной",eng:"How can you contact me"},numberPhone:{rus:"Номер телефона",eng:"Phone number"},email:{rus:"Почта",eng:"Email"},address:{rus:"Адресс",eng:"Address"},pdf:{rus:"Подробнее ознакомиться с материалом вы можете по ссылке",eng:"To learn more about the material, follow the link"}},EducationalPublications:{text:{rus:"\n        Список опубликованных учебных изданий\n         и научных трудов доктора юридических наук,\n          адвоката Рудича Валерия Владимировича\n        ",eng:"List of published educational publications\n        and scientific works of the Doctor of Law,\n        lawyer Rudich Valery Vladimirovich"},textLink:{rus:"Ознакомиться со статьями:",eng:"Read the articles:"},button:{rus:"Открыть PDF файл",eng:"Open PDF file"},link:""}}},getters:{},mutations:{updateData(e,t){e.receivedData=t},loadingUpdate(e,t){e.loading=t},languageUpdate(e,t){e.language=t},addEvent(e){e.lawyerEvents.push({cardHeader:{rus:"",eng:""},img:"",cardText:{rus:"",eng:""},content:{rus:"",eng:""},id:"newEvent",pdf:[]})}},actions:{GetData(e){ua.Z.get(`${this.state.URL__DATA}api/get`).then((t=>{e.commit("updateData",t.data.pages),e.commit("loadingUpdate",!1)}))}},modules:{}});const ma={class:"header-item__container"},ga={class:"header-item"};function ha(e,t,a,n,r,i){return(0,s.wg)(),(0,s.iD)("div",ma,[(0,s._)("div",ga,[(0,s.WI)(e.$slots,"default")])])}var pa={};const va=(0,v.Z)(pa,[["render",ha]]);var fa=va;(0,n.ri)(Q).use(_a).use(ca).component("HeaderItem",fa).mount("#app")},7951:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(3396),s=a(7139);const r={class:"event-card"},i={class:"event-card__text"},o={class:"event-card__header"},l={class:"event-card__discription"},c=(0,n._)("div",{class:"event-card__details"},[(0,n.Uk)("Подробнее "),(0,n._)("span",{class:"arrow-black"})],-1);function d(e,t,a,d,u,_){return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",i,[(0,n._)("div",{class:"event-card__img",style:(0,s.j5)({backgroundImage:`url(${e.$store.state.URL__DATA}${a.item.img})`})},null,4),(0,n._)("h3",o,(0,s.zw)(a.item.cardHeader[e.$store.state.language]),1),(0,n._)("p",l,(0,s.zw)(a.item.cardText[e.$store.state.language]),1)]),c])}var u={props:["item"]},_=a(89);const m=(0,_.Z)(u,[["render",d]]);var g=m},1178:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(3396);const s={class:"header-background"};function r(e,t,a,r,i,o){return(0,n.wg)(),(0,n.iD)("div",s)}var i={},o=a(89);const l=(0,o.Z)(i,[["render",r]]);var c=l},6792:function(e,t,a){e.exports=a.p+"img/homeMobil.5b603d7c.jpg"},720:function(e,t,a){e.exports=a.p+"img/slideImg1.6169ca62.jpg"}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,s,r){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],s=e[d][1],r=e[d][2];for(var o=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(o=!1,r<i&&(i=r));if(o){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,s,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+({17:"AdminEvents",43:"test",330:"AdminLawyer",447:"Aut",548:"AdminMain",760:"AdminLegalCenter",906:"AdminEventsItem"}[e]||e)+"."+{17:"23743b13",43:"796d9c7d",330:"b23f90c8",447:"d615c4dc",548:"c6b3ff04",601:"96a191bd",760:"dc47dc97",906:"3ae644d7"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+{17:"AdminEvents",330:"AdminLawyer",447:"Aut",548:"AdminMain",760:"AdminLegalCenter",906:"AdminEventsItem"}[e]+"."+{17:"d98e66fc",330:"1efe5526",447:"2e0e45cd",548:"18945634",760:"e729c886",906:"0200b188"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="advocate:";a.l=function(n,s,r,i){if(e[n])e[n].push(s);else{var o,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+r){o=u;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+r),o.src=n),e[n]=[s];var _=function(t,a){o.onerror=o.onload=null,clearTimeout(m);var s=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(_.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=_.bind(null,o.onerror),o.onload=_.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/Advocat/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,a,n,s){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=o,r.parentNode&&r.parentNode.removeChild(r),s(l)}};return r.onerror=r.onload=i,r.href=t,a?a.parentNode.insertBefore(r,a.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var s=a[n],r=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(r===e||r===t))return s}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){s=i[n],r=s.getAttribute("data-href");if(r===e||r===t)return s}},n=function(n){return new Promise((function(s,r){var i=a.miniCssF(n),o=a.p+i;if(t(i,o))return s();e(n,o,null,s,r)}))},s={143:0};a.f.miniCss=function(e,t){var a={17:1,330:1,447:1,548:1,760:1,906:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=n(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}}(),function(){var e={143:0};a.f.j=function(t,n){var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var r=new Promise((function(a,n){s=e[t]=[a,n]}));n.push(s[2]=r);var i=a.p+a.u(t),o=new Error,l=function(n){if(a.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",o.name="ChunkLoadError",o.type=r,o.request=i,s[1](o)}};a.l(i,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,r,i=n[0],o=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(l)var d=l(a)}for(t&&t(n);c<i.length;c++)r=i[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},n=self["webpackChunkadvocate"]=self["webpackChunkadvocate"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9968)}));n=a.O(n)})();
//# sourceMappingURL=app.fffbd7af.js.map