"use strict";(self["webpackChunkadvocate"]=self["webpackChunkadvocate"]||[]).push([[548],{6565:function(a,t,e){var n=e(1076);const i=n.Z.create({baseURL:"https://api.sudural.ru/api"});i.interceptors.request.use((a=>(a.headers.Authorization=`Bearer ${localStorage.getItem("userAccesKey")}`,a))),t["Z"]=i},778:function(a,t,e){e.d(t,{Z:function(){return g}});var n=e(3396),i=e(9242),s=e(7139),d=e(466);const r={class:"admin--menu"},m=(0,n._)("img",{width:"20",src:d,alt:""},null,-1),l=[m],u={class:"admin--menu__list"},o={class:"admin-menu__list-item"},c={class:"admin-menu__list-item"},_={class:"admin-menu__list-item"};function p(a,t,e,d,m,p){const v=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("button",{class:"btn-admin-menu",onClick:t[0]||(t[0]=a=>m.adminMenu=!0)},"Меню"),(0,n.Wm)(i.uT,{name:"btn-admin-menu",mode:"out-in"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("nav",r,[(0,n._)("button",{class:"btn-admin-menu-close",onClick:t[1]||(t[1]=a=>m.adminMenu=!1)},l),(0,n._)("ul",u,[(0,n._)("li",o,[(0,n.Wm)(v,{to:"/adminMain"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Главная ")])),_:1})]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.$store.state.receivedData.advocatsInfo,(a=>((0,n.wg)(),(0,n.iD)("li",{class:"admin-menu__list-item",key:a.id},[(0,n.Wm)(v,{to:{name:"AdminLawyer",params:{id:a.id}}},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(a.name.rus),1)])),_:2},1032,["to"])])))),128)),(0,n._)("li",c,[(0,n.Wm)(v,{to:"/AdminLegalCenter"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Научно-Правовой центр ")])),_:1})]),(0,n._)("li",_,[(0,n.Wm)(v,{to:"/AdminEvents"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Мероприятия ")])),_:1})])])],512),[[i.F8,m.adminMenu]])])),_:1})],64)}var v={data(){return{adminMenu:!1}}},w=e(89);const D=(0,w.Z)(v,[["render",p]]);var g=D},6509:function(a,t,e){e.r(t),e.d(t,{default:function(){return f}});var n=e(3396),i=e(9242);const s=a=>((0,n.dD)("data-v-43ac7542"),a=a(),(0,n.Cn)(),a),d={class:"container"},r={class:"admin__main__cards"},m=["onUpdate:modelValue"],l=s((()=>(0,n._)("hr",null,null,-1))),u={class:"admin__main__cards"},o=["onUpdate:modelValue"],c=s((()=>(0,n._)("button",{type:"submit",class:"btn btn-primary btn-admin-center"},"Сохранить",-1)));function _(a,t,e,s,_,p){const v=(0,n.up)("HeaderSlot"),w=(0,n.up)("AdminMenu");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(v),(0,n.Wm)(w),(0,n._)("div",d,[(0,n._)("form",{onSubmit:t[0]||(t[0]=(0,i.iM)(((...a)=>p.saveMainCardData&&p.saveMainCardData(...a)),["prevent"])),class:"admin__main__articles",action:""},[(0,n._)("div",r,[(0,n.Uk)(" rus "),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(p.mainCardData,(a=>((0,n.wg)(),(0,n.iD)("div",{class:"admin__main__card-item",key:a.id},[(0,n.wy)((0,n._)("textarea",{class:"admin__main__card__input",type:"text","onUpdate:modelValue":t=>a.text.rus=t},null,8,m),[[i.nr,a.text.rus]])])))),128))]),l,(0,n.Uk)(" eng "),(0,n._)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(p.mainCardData,(a=>((0,n.wg)(),(0,n.iD)("div",{class:"admin__main__card-item",key:a.id},[(0,n.wy)((0,n._)("textarea",{class:"admin__main__card__input",type:"text","onUpdate:modelValue":t=>a.text.eng=t},null,8,o),[[i.nr,a.text.eng]])])))),128))]),c],32)])],64)}var p=e(1178),v=e(778),w=e(6565),D={components:{AdminMenu:v.Z,HeaderSlot:p.Z},data(){return{}},methods:{saveMainCardData(){this.$store.commit("loadingUpdate",!0),w.Z.post(`${this.$store.state.URL__DATA}api/update`,{arrayName:"articles",id:null,data:JSON.stringify(this.mainCardData)}).then((()=>{alert("Данные обновлены"),this.$store.dispatch("GetData"),this.$store.commit("loadingUpdate",!1)})).catch((a=>{alert(`Ошибка при выполнении запроса. Код ошибки: ${a.response.status}`),this.$store.commit("loadingUpdate",!1)}))}},computed:{mainCardData(){return this.$store.state.receivedData.articles}}},g=e(89);const h=(0,g.Z)(D,[["render",_],["__scopeId","data-v-43ac7542"]]);var f=h}}]);
//# sourceMappingURL=AdminMain.075f81fe.js.map