(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{74:function(e,a,t){e.exports=t(85)},85:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),i=t.n(l),o=t(38),c=t(27),m=t(12),u=t(115),s=t(117),d=t(133),p=t(41),g=t(129),E=t(120),f=t(121),b=t(47),v=t.n(b),h=t(61),O=Object(h.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),S=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],l=a[1],i=Object(n.useState)(""),o=Object(m.a)(i,2),b=o[0],h=o[1],S=Object(n.useState)(!1),j=Object(m.a)(S,2),x=j[0],C=j[1],w=O(),y=Object(c.f)(),N=JSON.parse(localStorage.getItem("data"))||[];return r.a.createElement(u.a,{component:"main",maxWidth:"xs"},r.a.createElement(s.a,null),r.a.createElement("div",{className:w.paper},r.a.createElement(d.a,{className:w.avatar},r.a.createElement(v.a,null)),r.a.createElement(p.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("div",{className:w.form},r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,value:t,onChange:function(e){return l(e.target.value)},fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,value:b,onChange:function(e){return h(e.target.value)},fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),x&&r.a.createElement("div",{style:{color:"red"}},"Incorrect email or password"),r.a.createElement(E.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){var e=N.find((function(e){return e.email===t&&e.password===b}));e?(localStorage.setItem("userrr",JSON.stringify(e)),y.push("/")):C(!0)},className:w.submit},"Sign In"),r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{onClick:function(){return y.push("/signup")}},"Don't have an account? Sign Up"))))))},j=t(30),x=Object(h.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),C=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],l=a[1],i=Object(n.useState)(""),o=Object(m.a)(i,2),b=o[0],h=o[1],O=Object(n.useState)(""),S=Object(m.a)(O,2),C=S[0],w=S[1],y=Object(n.useState)(""),N=Object(m.a)(y,2),I=N[0],k=N[1],J=JSON.parse(localStorage.getItem("data"))||[],T=x(),W=Object(c.f)();return r.a.createElement(u.a,{component:"main",maxWidth:"xs"},r.a.createElement(s.a,null),r.a.createElement("div",{className:T.paper},r.a.createElement(d.a,{className:T.avatar},r.a.createElement(v.a,null)),r.a.createElement(p.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("div",{className:T.form},r.a.createElement(f.a,{container:!0,spacing:2},r.a.createElement(f.a,{item:!0,xs:12,sm:6},r.a.createElement(g.a,{autoComplete:"fname",name:"firstName",value:t,onChange:function(e){return l(e.target.value)},variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(f.a,{item:!0,xs:12,sm:6},r.a.createElement(g.a,{variant:"outlined",required:!0,value:b,onChange:function(e){return h(e.target.value)},fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(g.a,{variant:"outlined",required:!0,value:C,onChange:function(e){return w(e.target.value)},fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(g.a,{variant:"outlined",required:!0,value:I,onChange:function(e){return k(e.target.value)},fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}))),r.a.createElement(E.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){var e={id:J.length&&J[J.length-1].id+1||1,firstName:t,lastName:b,email:C,password:I,data:[]};localStorage.setItem("data",JSON.stringify([].concat(Object(j.a)(J),[e]))),localStorage.setItem("userrr",JSON.stringify(e)),W.push("/")},className:T.submit},"Sign Up"),r.a.createElement(f.a,{container:!0,justify:"flex-end"},r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{onClick:function(){return W.push("/signin")}},"Don't have an account? Sign Up"))))))},w=t(49),y=function(e){var a=e.saveTodo,t=Object(n.useState)(""),l=Object(m.a)(t,2),i=l[0],o=l[1],c=function(e){e.preventDefault(),a(i),o("")};return r.a.createElement("form",{onSubmit:c},r.a.createElement(g.a,{variant:"outlined",placeholder:"Add todo",margin:"normal",onChange:function(e){return o(e.target.value)},value:i}),r.a.createElement(E.a,{variant:"contained",color:"primary",onClick:c,style:{marginTop:"25px"}},"Submit"))},N=t(119),I=t(125),k=t(131),J=t(127),T=t(128),W=t(126),D=t(65),q=t.n(D),F=t(64),A=t.n(F),U=t(132),L=t(122),P=t(123),B=t(124),R=function(e){var a=e.showEditDialog,t=e.setShowDialog,l=e.editElement,i=Object(n.useState)(a.item),o=Object(m.a)(i,2),c=o[0],u=o[1],s=function(){t({show:!1,index:null,item:""})};return r.a.createElement("div",null,r.a.createElement(U.a,{open:a.show,onClose:s,"aria-labelledby":"form-dialog-title"},r.a.createElement(L.a,{id:"form-dialog-title"},"Edit Item"),r.a.createElement(P.a,null,r.a.createElement(g.a,{value:c,onChange:function(e){return u(e.target.value)},autoFocus:!0,margin:"dense",id:"name",label:"Edit Item",type:"edit",fullWidth:!0})),r.a.createElement(B.a,null,r.a.createElement(E.a,{onClick:s,color:"primary"},"Cancel"),r.a.createElement(E.a,{onClick:function(){l(a.index,c),s()},color:"primary",disabled:!c},"Confirm"))))},z=function(e){var a=e.todos,t=e.deleteTodo,l=e.setTodo,i=e.editElement,o=Object(n.useState)({show:!1,index:null,item:""}),c=Object(m.a)(o,2),u=c[0],s=c[1];return r.a.createElement(n.Fragment,null,u.show&&r.a.createElement(R,{showEditDialog:u,setShowDialog:s,editElement:i}),r.a.createElement(N.a,null,a.map((function(e,a,n){return r.a.createElement(I.a,{key:a.toString(),dense:!0,button:!0},r.a.createElement(k.a,{tabIndex:-1,disableRipple:!0,checked:e.done,onClick:function(){var t=n;t[a]={done:!e.done,text:e.text},l(Object(j.a)(t))}}),r.a.createElement(J.a,{primary:e.text}),r.a.createElement(T.a,null,r.a.createElement(W.a,{onClick:function(){s({show:!0,index:a,item:e.text})}},r.a.createElement(A.a,null)),r.a.createElement(W.a,{"aria-label":"Delete",onClick:function(){t(a)}},r.a.createElement(q.a,null))))}))))},G=function(){var e=JSON.parse(localStorage.getItem("userrr"))||{},a=Object(n.useState)(e.data||[]),t=Object(m.a)(a,2),l=t[0],i=t[1];Object(n.useEffect)((function(){var a=JSON.parse(localStorage.getItem("data"));a&&(localStorage.setItem("userrr",JSON.stringify(Object(w.a)({},e,{data:l}))),localStorage.setItem("data",JSON.stringify(a.map((function(a){return a.id===e.id?Object(w.a)({},e,{data:l}):a})))))}),[l]);return r.a.createElement("div",null,r.a.createElement(y,{saveTodo:function(e){var a={done:!1,text:e.trim()};a.text.length>0&&i([].concat(Object(j.a)(l),[a]))}}),r.a.createElement(z,{todos:l,deleteTodo:function(e){var a=l.filter((function(a,t){return t!==e}));i(a)},setTodo:i,editElement:function(e,a){l[e]=Object(w.a)({},l[e],{text:a}),i(Object(j.a)(l))}}))},H=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,"Navigation:",r.a.createElement(o.b,{exact:!0,to:"/signin"},"Logout")),r.a.createElement("main",null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:G}),r.a.createElement(c.a,{exact:!0,path:"/signin",component:S}),r.a.createElement(c.a,{exact:!0,path:"/signup",component:C})))))};i.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.a0570c3e.chunk.js.map