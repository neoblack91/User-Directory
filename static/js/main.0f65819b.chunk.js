(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var s=a(3),r=a(13),n=a.n(r),i=(a(53),a(54),a(6));var c=function(){return Object(i.jsx)("div",{className:"jumbotron",children:Object(i.jsx)("h1",{children:"Employee List"})})},l=a(49),o=a(42),d=a.n(o),u=a(48),m=function(e){var t=e.employeeData,a=t.map((function(e){return{image:Object(i.jsx)("img",{alt:e.name.first+","+e.name.last,src:e.picture.medium}),first:e.name.first,last:e.name.last,email:e.email,phone:e.phone}})),s=a.length>0;console.log(t);var r={columns:[{label:"Image",field:"image",sort:"asc",width:150},{label:"First",field:"first",sort:"asc",width:150},{label:"Last",field:"last",sort:"asc",width:270},{label:"Phone",field:"phone",sort:"asc",width:200},{label:"Email",field:"email",sort:"asc",width:100}],rows:s&&a};return Object(i.jsx)(u.c,{striped:!0,bordered:!0,small:!0,data:r})};var j=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(s.useEffect)((function(){d.a.get("https://randomuser.me/api/?results=200").then((function(e){r(e.data.results)}))}),[]),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(m,{employeeData:a})})};var b=function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(c,{}),Object(i.jsx)(j,{DatatablePage:!0})]})};a(100);n.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))},53:function(e,t,a){},54:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.0f65819b.chunk.js.map