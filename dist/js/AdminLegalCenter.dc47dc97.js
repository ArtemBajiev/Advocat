"use strict";(self["webpackChunkadvocate"]=self["webpackChunkadvocate"]||[]).push([[760],{1304:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(3396),r=a(9242);const l=e=>((0,n.dD)("data-v-94c1b1f2"),e=e(),(0,n.Cn)(),e),s={class:"container"},o={name:"admin-legal-center"},d={class:"admin-legal-center__header"},i={for:""},c={for:""},u=l((()=>(0,n._)("hr",null,null,-1)));function g(e,t,a,l,g,m){const h=(0,n.up)("HeaderSlot"),p=(0,n.up)("AdminMenu"),C=(0,n.up)("TextEditor");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(h),(0,n._)("div",s,[(0,n._)("section",o,[(0,n.Wm)(p),(0,n._)("div",d,[(0,n._)("label",i,[(0,n.Uk)("rus "),(0,n.wy)((0,n._)("textarea",{name:"",id:"","onUpdate:modelValue":t[0]||(t[0]=e=>m.legalCenterData.header.rus=e),class:"form-control",cols:"100",rows:"2"},null,512),[[r.nr,m.legalCenterData.header.rus]])]),(0,n._)("label",c,[(0,n.Uk)("eng "),(0,n.wy)((0,n._)("textarea",{name:"",id:"","onUpdate:modelValue":t[1]||(t[1]=e=>m.legalCenterData.header.eng=e),class:"form-control",cols:"100",rows:"2"},null,512),[[r.nr,m.legalCenterData.header.eng]])])]),(0,n.Wm)(C,{ref:"textEditorRus",content:m.legalCenterData.text.rus},null,8,["content"]),u,(0,n.Wm)(C,{ref:"textEditorEng",content:m.legalCenterData.text.eng},null,8,["content"]),(0,n._)("button",{class:"btn btn-primary admin__btn-save",onClick:t[2]||(t[2]=(...e)=>m.saveLegalCenter&&m.saveLegalCenter(...e))},"Сохранить")])])],64)}var m=a(4851),h=a(1178),p=a(3263),C=a(6565),f={components:{TextEditor:m.Z,HeaderSlot:h.Z,AdminMenu:p.Z},data(){return{}},methods:{saveData(){this.legalCenterData.text.rus=this.$refs.textEditorRus.editor.getHTML(),this.legalCenterData.text.eng=this.$refs.textEditorEng.editor.getHTML()},saveLegalCenter(){this.$store.commit("loadingUpdate",!0),this.saveData(),C.Z.post(`${this.$store.state.URL__DATA}api/update`,{arrayName:"LegalCenter",id:null,data:JSON.stringify(this.legalCenterData)}).then((()=>{alert("Данные обновлены"),this.$store.dispatch("GetData"),this.$store.commit("loadingUpdate",!1)})).catch((e=>{this.$store.commit("loadingUpdate",!1),alert(`Ошибка при выполнении запроса. Код ошибки: ${e.response.status}`)}))}},computed:{legalCenterData(){return this.$store.state.receivedData.LegalCenter}},beforeUnmount(){}},D=a(89);const _=(0,D.Z)(f,[["render",g],["__scopeId","data-v-94c1b1f2"]]);var v=_}}]);
//# sourceMappingURL=AdminLegalCenter.dc47dc97.js.map