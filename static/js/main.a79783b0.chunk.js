(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{19:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var r=c(2),n=c(13),s=c.n(n),a=(c(19),c(3)),l=c(0);var j=function(){return Object(l.jsx)("div",{className:"jumbotron",children:Object(l.jsx)("h1",{children:"Employee List"})})};var o=function(e){return console.log(e.employeeData),Object(l.jsx)("form",{children:Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(l.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for a employee",id:"search"}),Object(l.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3",children:"Search"})]})})};var i=function(e){return Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"id"}),Object(l.jsx)("th",{scope:"col",children:"First"}),Object(l.jsx)("th",{scope:"col",children:"Last"}),Object(l.jsx)("th",{scope:"col",children:"Phone Number"}),Object(l.jsx)("th",{scope:"col",children:"email"})]})}),Object(l.jsx)("tbody",{children:e.employeeData.map((function(e){var t=e.picture,c=e.name,r=e.phone,n=e.email;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("img",{alt:c.first+","+c.last,src:t.medium}),Object(l.jsx)("td",{children:c.first}),Object(l.jsx)("td",{children:c.last}),Object(l.jsx)("td",{children:r}),Object(l.jsx)("td",{children:n})]})}))})]})},h=c(14),b=c.n(h);var d=function(e){e.peopleInput;var t=Object(r.useState)([]),c=Object(a.a)(t,2),n=c[0],s=c[1];return Object(r.useEffect)((function(){b.a.get("https://randomuser.me/api/?results=200").then((function(e){s(e.data.results)}))}),[]),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(i,{employeeData:n})})};var u=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(j,{}),Object(l.jsx)(o,{handleInputChange:function(e){n(e.target.value),console.log(e.target.value)}}),Object(l.jsx)(d,{employeeData:c})]})};c(39);s.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a79783b0.chunk.js.map