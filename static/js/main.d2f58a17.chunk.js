(this.webpackJsonptodo_local_storage=this.webpackJsonptodo_local_storage||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(7),s=n.n(i),o=(n(13),n(8)),r=n(6),l=n(3),d=(n(14),n(0)),j=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(function(){var e=localStorage.getItem("mytodolist");return e?JSON.parse(e):[]}()),s=Object(l.a)(i,2),j=s[0],u=s[1],b=Object(c.useState)(),f=Object(l.a)(b,2),m=f[0],O=f[1],h=Object(c.useState)(!1),x=Object(l.a)(h,2),g=x[0],v=x[1],p=function(){if(n)if(n&&g)u(j.map((function(e){return e.id===m?Object(r.a)(Object(r.a)({},e),{},{name:n}):e}))),a([]),O(null),v(!1);else{var e={id:(new Date).getTime().toString(),name:n};u([].concat(Object(o.a)(j),[e])),a("")}else alert("plz fill the data")};return Object(c.useEffect)((function(){localStorage.setItem("mytodolist",JSON.stringify(j))}),[j]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"main-div",children:Object(d.jsxs)("div",{className:"child-div",children:[Object(d.jsxs)("figure",{children:[Object(d.jsx)("img",{src:"./images/todo.svg",alt:"todologo"}),Object(d.jsx)("figcaption",{children:"Add Your List Here"})]}),Object(d.jsxs)("div",{className:"addItems",children:[Object(d.jsx)("input",{type:"text",placeholder:"Add items",className:"form-control",value:n,onChange:function(e){return a(e.target.value)}}),g?Object(d.jsx)("i",{className:"fa fa-edit add-btn",onClick:p}):Object(d.jsx)("i",{className:"fa fa-plus add-btn",onClick:p})]}),Object(d.jsx)("div",{className:"showItems",children:j.map((function(e){return Object(d.jsxs)("div",{className:"eachItem",children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsxs)("div",{className:"todo-btn",children:[Object(d.jsx)("i",{className:"far fa-edit add-btn",onClick:function(){return function(e){var t=j.find((function(t){return t.id===e}));a(t.name),O(e),v(!0)}(e.id)}}),Object(d.jsx)("i",{className:"far fa-trash-alt add-btn",onClick:function(){return function(e){var t=j.filter((function(t){return t.id!==e}));u(t)}(e.id)}})]})]},e.id)}))}),Object(d.jsx)("div",{className:"showItems",children:Object(d.jsx)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){u([])},children:Object(d.jsx)("span",{children:"Checklist"})})})]})})})},u=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(j,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.d2f58a17.chunk.js.map