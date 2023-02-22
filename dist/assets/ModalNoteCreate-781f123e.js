import{T as h}from"./TodoList-fd2a5001.js";import{r as c,o as _,c as u,d as t,a as n,w as r,f as p,g as f,v as T}from"./index-d29b5b0f.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const b={components:{TodoList:h},data(){return{noteTitle:"",todoTitle:"",todos:[]}},methods:{getNewId(o){return o.length===0?1:Math.max(...o.map(e=>+e.id))+1},deleteTodo(o){this.todos.splice(o,1)},handleSubmitTodo(){this.todos.push({id:this.getNewId(this.todos),completed:!1,name:this.todoTitle}),this.todoTitle=""},handleSubmit(){let o=[];const e=localStorage.getItem("notes")||"[]";try{o=JSON.parse(e)}catch{}const i={id:this.getNewId(o),title:this.noteTitle,todos:this.todos};this.noteTitle&&(localStorage.setItem("notes",JSON.stringify([...o,i])),this.noteTitle="",this.todoTitle="",this.todos=[],this.$router.go(-1))}}},v={className:"modal is-active","data-cy":"modal"},g=t("div",{className:"modal-background"},null,-1),w={className:"modal-card"},S={className:"modal-card-head is-justify-content-space-between"},x=t("span",{class:"icon is-small"},[t("i",{class:"fas fa-check"})],-1),k=t("span",null,"Save",-1),y=[x,k],C=t("p",{class:"control"},[t("button",{class:"button"},"Cancel")],-1),I={class:"modal-card-body"},L={class:"noteapp__content"},M={className:"modal-card-head"},B={className:"modal-card-title has-text-weight-medium"},V={class:"oteapp__content"};function j(o,e,i,D,d,a){const l=c("RouterLink"),m=c("TodoList");return _(),u("div",v,[g,t("div",w,[t("header",S,[n(l,{to:"/"},{default:r(()=>[t("button",{class:"button is-success",onClick:e[0]||(e[0]=(...s)=>a.handleSubmit&&a.handleSubmit(...s))},y)]),_:1}),n(l,{to:"/"},{default:r(()=>[C]),_:1})]),t("div",I,[t("div",L,[t("form",{onSubmit:e[2]||(e[2]=p((...s)=>a.handleSubmit&&a.handleSubmit(...s),["prevent"]))},[t("header",M,[t("div",B,[f(t("input",{type:"text",ref:"{newTodoField}",class:"noteapp__new-todo",placeholder:"Enter a name of note",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>d.noteTitle=s)},null,512),[[T,d.noteTitle]])])]),t("div",V,[n(m,{todos:d.todos},null,8,["todos"])])],32)])])])])}const R=N(b,[["render",j]]);export{R as default};