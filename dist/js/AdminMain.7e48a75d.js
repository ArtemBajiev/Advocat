"use strict";(self["webpackChunkadvocate"]=self["webpackChunkadvocate"]||[]).push([[548],{6565:function(a,t,e){var n=e(1076);const i=n.Z.create({baseURL:"http://api.sudural.ru/api"});i.interceptors.request.use((a=>(a.headers.Authorization=`Bearer ${localStorage.getItem("userAccesKey")}`,a))),t["Z"]=i},3263:function(a,t,e){e.d(t,{Z:function(){return f}});var n=e(3396),i=e(9242),s=e(7139),r=e.p+"img/arrowFFF.b3491c23.svg";const d={class:"admin--menu"},l=(0,n._)("img",{width:"20",src:r,alt:""},null,-1),u=[l],m={class:"admin--menu__list"},c={class:"admin-menu__list-item"},o={class:"admin-menu__list-item"},_={class:"admin-menu__list-item"};function p(a,t,e,r,l,p){const v=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("button",{class:"btn-admin-menu",onClick:t[0]||(t[0]=a=>l.adminMenu=!0)},"Меню"),(0,n.Wm)(i.uT,{name:"btn-admin-menu",mode:"out-in"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("nav",d,[(0,n._)("button",{class:"btn-admin-menu-close",onClick:t[1]||(t[1]=a=>l.adminMenu=!1)},u),(0,n._)("ul",m,[(0,n._)("li",c,[(0,n.Wm)(v,{to:"/adminMain"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Главная ")])),_:1})]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.$store.state.receivedData.advocatsInfo,(a=>((0,n.wg)(),(0,n.iD)("li",{class:"admin-menu__list-item",key:a.id},[(0,n.Wm)(v,{to:{name:"AdminLawyer",params:{id:a.id}}},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(a.name.rus),1)])),_:2},1032,["to"])])))),128)),(0,n._)("li",o,[(0,n.Wm)(v,{to:"/AdminLegalCenter"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Научно-Правовой центр ")])),_:1})]),(0,n._)("li",_,[(0,n.Wm)(v,{to:"/AdminEvents"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Мероприятия ")])),_:1})])])],512),[[i.F8,l.adminMenu]])])),_:1})],64)}var v={data(){return{adminMenu:!1}}},w=e(89);const D=(0,w.Z)(v,[["render",p]]);var f=D},5963:function(a,t,e){e.r(t),e.d(t,{default:function(){return g}});var n=e(3396),i=e(9242);const s={class:"container"},r={class:"admin__main__cards"},d=["onUpdate:modelValue"],l=(0,n._)("hr",null,null,-1),u={class:"admin__main__cards"},m=["onUpdate:modelValue"],c=(0,n._)("button",{type:"submit",class:"btn btn-primary btn-admin-center"},"Сохранить",-1);function o(a,t,e,o,_,p){const v=(0,n.up)("HeaderSlot"),w=(0,n.up)("AdminMenu");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(v),(0,n.Wm)(w),(0,n._)("div",s,[(0,n._)("form",{onSubmit:t[0]||(t[0]=(0,i.iM)(((...a)=>p.saveMainCardData&&p.saveMainCardData(...a)),["prevent"])),class:"admin__main__articles",action:""},[(0,n._)("div",r,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(p.mainCardData,(a=>((0,n.wg)(),(0,n.iD)("div",{class:"admin__main__card-item",key:a.id},[(0,n.wy)((0,n._)("textarea",{class:"admin__main__card__input",type:"text","onUpdate:modelValue":t=>a.text.rus=t},null,8,d),[[i.nr,a.text.rus]])])))),128))]),l,(0,n._)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(p.mainCardData,(a=>((0,n.wg)(),(0,n.iD)("div",{class:"admin__main__card-item",key:a.id},[(0,n.wy)((0,n._)("textarea",{class:"admin__main__card__input",type:"text","onUpdate:modelValue":t=>a.text.eng=t},null,8,m),[[i.nr,a.text.eng]])])))),128))]),c],32)])],64)}var _=e(1178),p=e(3263),v=e(6565),w={components:{AdminMenu:p.Z,HeaderSlot:_.Z},data(){return{}},methods:{saveMainCardData(){v.Z.post(`${this.$store.state.URL__DATA}api/update`,{arrayName:"articles",id:null,data:JSON.stringify(this.mainCardData)}).then((()=>{alert("Данные обновлены"),this.$store.dispatch("GetData")})).catch((a=>alert(`Ошибка при выполнении запроса. Код ошибки: ${a.response.status}`)))}},computed:{mainCardData(){return this.$store.state.receivedData.articles}}},D=e(89);const f=(0,D.Z)(w,[["render",o]]);var g=f}}]);
//# sourceMappingURL=AdminMain.7e48a75d.js.map