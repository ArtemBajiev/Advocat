"use strict";(self["webpackChunkadvocate"]=self["webpackChunkadvocate"]||[]).push([[906],{5975:function(t,e,a){a.r(e),a.d(e,{default:function(){return F}});var n=a(3396),s=a(9242),o=a(7139);const d=t=>((0,n.dD)("data-v-44c97926"),t=t(),(0,n.Cn)(),t),r={class:"container"},l={class:"admin__card-form"},i={class:"admin__card-form__input-container"},m={for:""},p={for:""},c={for:""},u={for:""},f={for:"img"},h=["src"],_=d((()=>(0,n._)("button",{type:"submit",class:"btn btn-primary"},"Загрузить картинку",-1))),v=d((()=>(0,n._)("p",null,"РУС",-1))),g=d((()=>(0,n._)("hr",null,null,-1))),D=d((()=>(0,n._)("p",null,"ENG",-1))),I={class:"admin-events__control-form"},b={key:0},$=["href"],U={for:""},y=d((()=>(0,n._)("br",null,null,-1))),w=["textContent"];function x(t,e,a,d,x,T){const A=(0,n.up)("HeaderSlot"),P=(0,n.up)("AdminMenu"),E=(0,n.up)("TextEditor");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(A),(0,n.Wm)(P),(0,n._)("div",r,[(0,n._)("fieldset",l,[(0,n._)("div",i,[(0,n._)("div",null,[(0,n._)("label",m,[(0,n.Uk)("Заголовок рус "),(0,n.wy)((0,n._)("input",{class:"form-control",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>T.eventsItemData.cardHeader.rus=t)},null,512),[[s.nr,T.eventsItemData.cardHeader.rus]])]),(0,n._)("label",p,[(0,n.Uk)("Заголовок eng "),(0,n.wy)((0,n._)("input",{class:"form-control",type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>T.eventsItemData.cardHeader.eng=t)},null,512),[[s.nr,T.eventsItemData.cardHeader.eng]])])]),(0,n._)("div",null,[(0,n._)("label",c,[(0,n.Uk)("Текс отображаемый на карточке рус "),(0,n.wy)((0,n._)("textarea",{class:"form-control",name:"",id:"","onUpdate:modelValue":e[2]||(e[2]=t=>T.eventsItemData.cardText.rus=t),cols:"50",rows:"5"},null,512),[[s.nr,T.eventsItemData.cardText.rus]])]),(0,n._)("label",u,[(0,n.Uk)("Текс отображаемый на карточке eng "),(0,n.wy)((0,n._)("textarea",{class:"form-control",name:"",id:"","onUpdate:modelValue":e[3]||(e[3]=t=>T.eventsItemData.cardText.eng=t),cols:"50",rows:"5"},null,512),[[s.nr,T.eventsItemData.cardText.eng]])])])]),(0,n._)("form",{class:"admin-events__load-img",onSubmit:e[5]||(e[5]=(0,s.iM)(((...t)=>T.uploadImage&&T.uploadImage(...t)),["prevent"])),action:""},[(0,n._)("label",f,[(0,n._)("img",{height:"200",src:t.$store.state.URL__DATA+""+T.eventsItemData.img,alt:"pzs"},null,8,h),(0,n._)("input",{id:"img",onChange:e[4]||(e[4]=(...t)=>T.loadImage&&T.loadImage(...t)),type:"file"},null,32)]),_],32)]),v,(0,n.Wm)(E,{ref:"textEditorRus",content:T.eventsItemData.content.rus},null,8,["content"]),g,D,(0,n.Wm)(E,{ref:"textEditorEng",content:T.eventsItemData.content.eng},null,8,["content"]),(0,n._)("div",I,[T.eventsItemData.pdf?((0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("a",{href:t.$store.state.URL__DATA+""+T.eventsItemData.pdf},"Загруженный файл",8,$)])):(0,n.kq)("",!0),(0,n._)("form",{onSubmit:e[8]||(e[8]=(0,s.iM)(((...t)=>T.uploadPdf&&T.uploadPdf(...t)),["prevent"])),action:""},[(0,n._)("label",U,[(0,n.Uk)("Выбрать файл PDF "),(0,n._)("input",{type:"file",onChange:e[6]||(e[6]=(...t)=>T.loadPdf&&T.loadPdf(...t))},null,32)]),y,(0,n._)("button",{type:"submit",class:"btn btn-primary",textContent:(0,o.zw)(T.eventsItemData.pdf?"Заменить PDF":"Добавить PDF")},null,8,w),(0,n._)("button",{onClick:e[7]||(e[7]=(0,s.iM)(((...t)=>T.delPdf&&T.delPdf(...t)),["prevent"])),class:"btn btn-danger"},"Удалить")],32)]),(0,n._)("button",{class:"btn btn-primary admin__btn-save",onClick:e[9]||(e[9]=(...t)=>T.uploadObject&&T.uploadObject(...t))},"Сохранить")])],64)}var T=a(1178),A=a(778),P=a(549),E=a(6565),k={components:{TextEditor:P.Z,HeaderSlot:T.Z,AdminMenu:A.Z},data(){return{adminAdvocatData:[],selectedImg:"",selectedPdf:null,fileUrl:""}},methods:{saveData(){this.eventsItemData.content.rus=this.$refs.textEditorRus.editor.getHTML(),this.eventsItemData.content.eng=this.$refs.textEditorEng.editor.getHTML()},loadPdf(t){this.selectedPdf=t.target.files[0]},loadImage(t){this.selectedImg=t.target.files[0]},uploadImage(){this.$store.commit("loadingUpdate",!0);const t=new FormData;t.append("file",this.selectedImg),t.append("id",this.eventsItemData.id),t.append("fileFormat","img"),t.append("arrayName","lawyerEvents"),E.Z.post(`${this.$store.state.URL__DATA}api/upload/file`,t,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{alert("Файл успешно загружен:"),this.$store.dispatch("GetData"),this.$store.commit("loadingUpdate",!1)})).catch((t=>{alert("Ошибка при загрузке файла:",t),this.$store.commit("loadingUpdate",!1)}))},uploadPdf(){this.$store.commit("loadingUpdate",!0);const t=new FormData;t.append("file",this.selectedPdf),t.append("id",this.eventsItemData.id),t.append("fileFormat","pdf"),t.append("arrayName","lawyerEvents"),E.Z.post(`${this.$store.state.URL__DATA}api/upload/file`,t,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{alert("Файл успешно загружен:"),this.$store.dispatch("GetData"),this.$store.commit("loadingUpdate",!1)})).catch((t=>{alert("Ошибка при загрузке файла:",t),this.$store.commit("loadingUpdate",!1)}))},uploadObject(){this.$store.commit("loadingUpdate",!0),this.saveData();const t=new FormData;t.append("arrayName","lawyerEvents"),t.append("id",this.eventsItemData.id),t.append("data",JSON.stringify(this.eventsItemData)),E.Z.post(`${this.$store.state.URL__DATA}api/update`,t).then((t=>{alert("Данные обновлены:",t.data),this.$store.dispatch("GetData"),this.$store.commit("loadingUpdate",!1)})).catch((t=>{alert("Ошибка обновления:",t),this.$store.commit("loadingUpdate",!1)}))},delPdf(){this.$store.commit("loadingUpdate",!0),E.Z.post(`${this.$store.state.URL__DATA}api/delete/pdf`,{arrayName:"lawyerEvents",id:this.eventsItemData.id}).then((()=>{this.$store.dispatch("GetData"),this.$store.commit("loadingUpdate",!1)})).catch((t=>alert("Ошибка",t)))}},computed:{eventsItemData(){return this.$store.state.receivedData.lawyerEvents.find((t=>t.id===Number(this.$route.params.id)))}},beforeUnmount(){}},C=a(89);const H=(0,C.Z)(k,[["render",x],["__scopeId","data-v-44c97926"]]);var F=H}}]);
//# sourceMappingURL=AdminEventsItem.23b7ddc4.js.map