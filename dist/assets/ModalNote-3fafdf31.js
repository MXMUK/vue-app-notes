import{T as h}from"./TodoList-fd2a5001.js";import{r as u,o as d,c as a,d as e,a as c,w as _,f as N,g as p,v as g,h as v,t as w}from"./index-d29b5b0f.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const b={components:{TodoList:h},data(){let s=[];const t=localStorage.getItem("notes")||"[]";try{s=JSON.parse(t)}catch{}const n=s.find(r=>r.id===+this.$route.params.id.slice(1));return{selectedNote:n,notes:s,newNoteTitle:n.title,newTodoTitle:"",editingNote:!1}},methods:{deleteNote(){localStorage.setItem("notes",JSON.stringify(this.notes.filter(s=>s.id!==this.selectedNote.id)))},rename(){this.selectedNote.title=this.newNoteTitle,this.editingNote=!1},saveChanges(){const s=this.notes.filter(t=>t.id!==this.selectedNote.id);s.unshift(this.selectedNote),localStorage.setItem("notes",JSON.stringify(s)),this.$router.go(-1)},edit(){this.newNoteTitle=this.selectedNote.title,this.editingNote=!0,this.$nextTick(()=>{this.$refs["title-field"].focus()})}}},y={className:"modal is-active"},k=e("div",{className:"modal-background"},null,-1),S={className:"modal-card"},x={className:"modal-card-head is-justify-content-space-between"},C=e("span",{class:"icon is-small"},[e("i",{class:"fas fa-check"})],-1),D=e("span",null,"Save",-1),L=[C,D],B=e("button",{class:"button is-danger is-outlined"},[e("span",null,"Delete"),e("span",{class:"icon is-small"},[e("i",{class:"fas fa-times"})])],-1),I=e("p",{class:"control"},[e("button",{class:"button"},"Cancel")],-1),J={className:"modal-card-body"},M=e("p",{class:"noteapp__todo"},[e("strong",null,"Todo:")],-1),O={class:"noteapp__content"};function V(s,t,n,r,o,l){const m=u("RouterLink"),f=u("TodoList");return d(),a("div",y,[k,e("div",S,[e("header",x,[e("button",{class:"button is-success",onClick:t[0]||(t[0]=i=>l.saveChanges())},L),c(m,{to:`/delete/:${o.selectedNote.id}`},{default:_(()=>[B]),_:1},8,["to"]),c(m,{to:"/"},{default:_(()=>[I]),_:1})]),e("div",J,[o.editingNote?(d(),a("form",{key:0,onSubmit:t[3]||(t[3]=N((...i)=>l.rename&&l.rename(...i),["prevent"]))},[p(e("input",{type:"text",class:"note__title-field",placeholder:"Empty todo will be deleted","onUpdate:modelValue":t[1]||(t[1]=i=>o.newNoteTitle=i),ref:"title-field",onKeyup:t[2]||(t[2]=v(i=>o.editingNote=!1,["esc"]))},null,544),[[g,o.newNoteTitle]])],32)):(d(),a("h1",{key:1,class:"content is-large",onDblclick:t[4]||(t[4]=i=>o.editingNote=!0)},w(o.selectedNote.title),33)),M,e("div",O,[c(f,{todos:o.selectedNote.todos},null,8,["todos"])])])])])}const R=T(b,[["render",V]]);export{R as default};