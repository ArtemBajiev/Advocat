"use strict";(self["webpackChunkadvocate"]=self["webpackChunkadvocate"]||[]).push([[906],{9857:function(t,e,a){a.r(e),a.d(e,{default:function(){return L}});var n=a(3396),s=a(9242),o=a(7139);const r=t=>((0,n.dD)("data-v-7046a1c4"),t=t(),(0,n.Cn)(),t),l={class:"container"},d={class:"admin__card-form"},i={class:"admin__card-form__input-container"},c={for:""},m={for:""},p={for:""},u={for:""},f={for:"img"},_=["src"],h=r((()=>(0,n._)("button",{type:"submit",class:"btn btn-primary"},"Загрузить картинку",-1))),v=r((()=>(0,n._)("p",null,"РУС",-1))),D=r((()=>(0,n._)("hr",null,null,-1))),g=r((()=>(0,n._)("p",null,"ENG",-1))),I={class:"admin-events__control-form"},b={key:0},y=["href"],w={for:""},$=r((()=>(0,n._)("br",null,null,-1))),x=["textContent"];function T(t,e,a,r,T,U){const A=(0,n.up)("HeaderSlot"),E=(0,n.up)("AdminMenu"),P=(0,n.up)("TextEditor");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(A),(0,n.Wm)(E),(0,n._)("div",l,[(0,n._)("fieldset",d,[(0,n._)("div",i,[(0,n._)("div",null,[(0,n._)("label",c,[(0,n.Uk)("Заголовок рус "),(0,n.wy)((0,n._)("input",{class:"form-control",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>U.eventsItemData.cardHeader.rus=t)},null,512),[[s.nr,U.eventsItemData.cardHeader.rus]])]),(0,n._)("label",m,[(0,n.Uk)("Заголовок eng "),(0,n.wy)((0,n._)("input",{class:"form-control",type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>U.eventsItemData.cardHeader.eng=t)},null,512),[[s.nr,U.eventsItemData.cardHeader.eng]])])]),(0,n._)("div",null,[(0,n._)("label",p,[(0,n.Uk)("Текс отображаемый на карточке рус "),(0,n.wy)((0,n._)("textarea",{class:"form-control",name:"",id:"","onUpdate:modelValue":e[2]||(e[2]=t=>U.eventsItemData.cardText.rus=t),cols:"50",rows:"5"},null,512),[[s.nr,U.eventsItemData.cardText.rus]])]),(0,n._)("label",u,[(0,n.Uk)("Текс отображаемый на карточке eng "),(0,n.wy)((0,n._)("textarea",{class:"form-control",name:"",id:"","onUpdate:modelValue":e[3]||(e[3]=t=>U.eventsItemData.cardText.eng=t),cols:"50",rows:"5"},null,512),[[s.nr,U.eventsItemData.cardText.eng]])])])]),(0,n._)("form",{class:"admin-events__load-img",onSubmit:e[5]||(e[5]=(0,s.iM)(((...t)=>U.uploadImage&&U.uploadImage(...t)),["prevent"])),action:""},[(0,n._)("label",f,[(0,n._)("img",{height:"200",src:t.$store.state.URL__DATA+""+U.eventsItemData.img,alt:"pzs"},null,8,_),(0,n._)("input",{id:"img",onChange:e[4]||(e[4]=(...t)=>U.loadImage&&U.loadImage(...t)),type:"file"},null,32)]),h],32)]),v,(0,n.Wm)(P,{ref:"textEditorRus",content:U.eventsItemData.content.rus},null,8,["content"]),D,g,(0,n.Wm)(P,{ref:"textEditorEng",content:U.eventsItemData.content.eng},null,8,["content"]),(0,n._)("div",I,[U.eventsItemData.pdf?((0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("a",{href:t.$store.state.URL__DATA+""+U.eventsItemData.pdf},"Загруженный файл",8,y)])):(0,n.kq)("",!0),(0,n._)("form",{onSubmit:e[8]||(e[8]=(0,s.iM)(((...t)=>U.uploadPdf&&U.uploadPdf(...t)),["prevent"])),action:""},[(0,n._)("label",w,[(0,n.Uk)("Выбрать файл PDF "),(0,n._)("input",{type:"file",onChange:e[6]||(e[6]=(...t)=>U.loadPdf&&U.loadPdf(...t))},null,32)]),$,(0,n._)("button",{type:"submit",class:"btn btn-primary",textContent:(0,o.zw)(U.eventsItemData.pdf?"Заменить PDF":"Добавить PDF")},null,8,x),(0,n._)("button",{onClick:e[7]||(e[7]=(0,s.iM)(((...t)=>U.delPdf&&U.delPdf(...t)),["prevent"])),class:"btn btn-danger"},"Удалить")],32)]),(0,n._)("button",{class:"btn btn-primary admin__btn-save",onClick:e[9]||(e[9]=(...t)=>U.uploadObject&&U.uploadObject(...t))},"Сохранить")])],64)}var U=a(1178),A=a(3263),E=a(4851),P=a(6565),k={components:{TextEditor:E.Z,HeaderSlot:U.Z,AdminMenu:A.Z},data(){return{adminAdvocatData:[],selectedImg:"",selectedPdf:null,fileUrl:""}},methods:{saveData(){this.eventsItemData.content.rus=this.$refs.textEditorRus.editor.getHTML(),this.eventsItemData.content.eng=this.$refs.textEditorEng.editor.getHTML(),console.log(this.$refs.textEditorRus.editor.getHTML())},loadPdf(t){this.selectedPdf=t.target.files[0]},loadImage(t){this.selectedImg=t.target.files[0],console.log(this.selectedImg)},uploadImage(){const t=new FormData;t.append("file",this.selectedImg),t.append("id",this.eventsItemData.id),t.append("fileFormat","img"),t.append("arrayName","lawyerEvents"),P.Z.post(`${this.$store.state.URL__DATA}api/upload/file`,t,{headers:{"Content-Type":"multipart/form-data"}}).then((t=>{console.log("Файл успешно загружен:",t.data),this.$store.dispatch("GetData")})).catch((t=>{console.error("Ошибка при загрузке файла:",t)}))},uploadPdf(){const t=new FormData;t.append("file",this.selectedPdf),t.append("id",this.eventsItemData.id),t.append("fileFormat","pdf"),t.append("arrayName","lawyerEvents"),P.Z.post(`${this.$store.state.URL__DATA}api/upload/file`,t,{headers:{"Content-Type":"multipart/form-data"}}).then((t=>{console.log("Файл успешно загружен:",t.data),this.$store.dispatch("GetData")})).catch((t=>{console.error("Ошибка при загрузке файла:",t)}))},uploadObject(){this.saveData();const t=new FormData;t.append("arrayName","lawyerEvents"),t.append("id",this.eventsItemData.id),t.append("data",JSON.stringify(this.eventsItemData)),P.Z.post(`${this.$store.state.URL__DATA}api/update`,t).then((t=>{alert("Данные обновлены:",t.data),console.log(t),this.$store.dispatch("GetData")})).catch((t=>{alert("Ошибка обновления:",t),console.error("Ошибка обновления:",t)}))},delPdf(){P.Z.post(`${this.$store.state.URL__DATA}api/delete/pdf`,{arrayName:"lawyerEvents",id:this.eventsItemData.id}).then((()=>{this.$store.dispatch("GetData")}))}},computed:{eventsItemData(){return this.$store.state.receivedData.lawyerEvents.find((t=>t.id===Number(this.$route.params.id)))}},beforeUnmount(){}},C=a(89);const H=(0,C.Z)(k,[["render",T],["__scopeId","data-v-7046a1c4"]]);var L=H}}]);
//# sourceMappingURL=AdminEventsItem.59f93544.js.map