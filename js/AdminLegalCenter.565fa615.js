"use strict";(self["webpackChunkadvocate"]=self["webpackChunkadvocate"]||[]).push([[760],{9443:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(3396),r=a(9242);const l=e=>((0,n.dD)("data-v-ddb6fede"),e=e(),(0,n.Cn)(),e),s={class:"container"},o={name:"admin-legal-center"},d={class:"admin-legal-center__header"},i={for:""},u={for:""},c=l((()=>(0,n._)("hr",null,null,-1)));function g(e,t,a,l,g,h){const m=(0,n.up)("HeaderSlot"),C=(0,n.up)("AdminMenu"),f=(0,n.up)("TextEditor");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(m),(0,n._)("div",s,[(0,n._)("section",o,[(0,n.Wm)(C),(0,n._)("div",d,[(0,n._)("label",i,[(0,n.Uk)("rus "),(0,n.wy)((0,n._)("textarea",{name:"",id:"","onUpdate:modelValue":t[0]||(t[0]=e=>h.legalCenterData.header.rus=e),class:"form-control",cols:"100",rows:"2"},null,512),[[r.nr,h.legalCenterData.header.rus]])]),(0,n._)("label",u,[(0,n.Uk)("eng "),(0,n.wy)((0,n._)("textarea",{name:"",id:"","onUpdate:modelValue":t[1]||(t[1]=e=>h.legalCenterData.header.eng=e),class:"form-control",cols:"100",rows:"2"},null,512),[[r.nr,h.legalCenterData.header.eng]])])]),(0,n.Wm)(f,{ref:"textEditorRus",content:h.legalCenterData.text.rus},null,8,["content"]),c,(0,n.Wm)(f,{ref:"textEditorEng",content:h.legalCenterData.text.eng},null,8,["content"]),(0,n._)("button",{class:"btn btn-primary admin__btn-save",onClick:t[2]||(t[2]=(...e)=>h.saveLegalCenter&&h.saveLegalCenter(...e))},"Сохранить")])])],64)}var h=a(743),m=a(1178),C=a(3263),f=a(6565),p={components:{TextEditor:h.Z,HeaderSlot:m.Z,AdminMenu:C.Z},data(){return{}},methods:{saveData(){this.legalCenterData.text.rus=this.$refs.textEditorRus.editor.getHTML(),this.legalCenterData.text.eng=this.$refs.textEditorEng.editor.getHTML()},saveLegalCenter(){this.saveData(),f.Z.post(`${this.$store.state.URL__DATA}api/update`,{arrayName:"LegalCenter",id:null,data:JSON.stringify(this.legalCenterData)}).then((()=>{alert("Данные обновлены"),this.$store.dispatch("GetData")})).catch((e=>alert(`Ошибка при выполнении запроса. Код ошибки: ${e.response.status}`)))}},computed:{legalCenterData(){return this.$store.state.receivedData.LegalCenter}},beforeUnmount(){}},D=a(89);const _=(0,D.Z)(p,[["render",g],["__scopeId","data-v-ddb6fede"]]);var v=_}}]);
//# sourceMappingURL=AdminLegalCenter.565fa615.js.map