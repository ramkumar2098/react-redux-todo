(this["webpackJsonpreact-redux-todo"]=this["webpackJsonpreact-redux-todo"]||[]).push([[0],{12:function(e,t,n){e.exports={toggleTheme:"ToggleTheme_toggleTheme__2y-Ae"}},14:function(e,t,n){e.exports=n(26)},19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),l=n.n(a),c=(n(19),n(2)),u=n(4),i=n(13),d=n(1),f={todo:"",todos:[],editMode:!1,editID:""};var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_TODO":return Object(d.a)(Object(d.a)({},e),{},{todo:t.payload});case"ADD_TODO":return Object(d.a)(Object(d.a)({},e),{},{todo:"",todos:[{id:t.id,todo:t.payload}].concat(Object(i.a)(e.todos))});case"EDIT_TODO":return Object(d.a)(Object(d.a)({},e),{},{todo:e.todos.find((function(e){return e.id===t.payload})).todo,editMode:!0,editID:t.payload});case"SAVE_TODO":return{todo:"",todos:e.todos.map((function(n){return n.id===e.editID?Object(d.a)(Object(d.a)({},n),{},{todo:t.payload}):n})),editMode:!1,editID:0};case"DELETE_TODO":return Object(d.a)(Object(d.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.payload}))});default:return e}},p=Object(u.b)(s);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createElement("path",{fill:"currentColor",d:"M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z"}),v=function(e){var t=e.svgRef,n=e.title,r=m(e,["svgRef","title"]);return o.a.createElement("svg",O({viewBox:"0 0 496 496",width:22,height:22,ref:t},r),n?o.a.createElement("title",null,n):null,b)},g=o.a.forwardRef((function(e,t){return o.a.createElement(v,O({svgRef:t},e))})),y=(n.p,n(12)),E=n.n(y);var h=function(){return o.a.createElement("button",{onClick:function(){return document.body.classList.toggle("darkmode")},className:E.a.toggleTheme},o.a.createElement(g,null))},j=n(28);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var D=o.a.createElement("g",null,o.a.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})),w=function(e){var t=e.svgRef,n=e.title,r=_(e,["svgRef","title"]);return o.a.createElement("svg",T({viewBox:"0 0 24 24",width:22,height:22,ref:t},r),n?o.a.createElement("title",null,n):null,D)},x=o.a.forwardRef((function(e,t){return o.a.createElement(w,T({svgRef:t},e))}));n.p;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var M=o.a.createElement("g",null,o.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})),R=function(e){var t=e.svgRef,n=e.title,r=k(e,["svgRef","title"]);return o.a.createElement("svg",C({viewBox:"0 0 24 24",width:22,height:22,ref:t},r),n?o.a.createElement("title",null,n):null,M)},I=o.a.forwardRef((function(e,t){return o.a.createElement(R,C({svgRef:t},e))})),S=(n.p,n(8)),P=n.n(S);var A=function(e){var t=e.todo,n=Object(c.b)();return o.a.createElement("div",{className:P.a.todo},o.a.createElement("input",{type:"checkbox",id:t.id}),o.a.createElement("label",{htmlFor:t.id},t.todo),o.a.createElement("div",{className:P.a.buttons},o.a.createElement("button",{onClick:function(){return n({type:"EDIT_TODO",payload:t.id})}},o.a.createElement(x,null)),o.a.createElement("button",{onClick:function(){return n({type:"DELETE_TODO",payload:t.id})}},o.a.createElement(I,null))))},N=n(9),V=n.n(N);var L=function(){var e=Object(c.c)((function(e){return e.todo})),t=Object(c.c)((function(e){return e.todos})),n=Object(c.c)((function(e){return e.editMode})),r=Object(c.b)();return o.a.createElement("div",{className:V.a.todoContainer},o.a.createElement("div",{className:V.a.head},"Todo",t[0]&&": "+t.length),o.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},o.a.createElement("input",{value:e,onChange:function(e){return e.target.value.length>200?alert("Maximum limit reached"):r(function(e){return{type:"CHANGE_TODO",payload:e}}(e.target.value))}}),t[0]&&n?o.a.createElement("button",{onClick:function(){return e.trim()&&r(function(e){return{type:"SAVE_TODO",payload:e}}(e))}},"\u2713"):o.a.createElement("input",{type:"submit",value:"+",onClick:function(){return e.trim()&&r(function(e,t){return{type:"ADD_TODO",id:e,payload:t}}(Object(j.a)(),e))}})),t[0]&&t.map((function(e){return o.a.createElement(A,{key:e.id,todo:e})})))};var z=function(){return o.a.createElement(c.a,{store:p},o.a.createElement(h,null),o.a.createElement(L,null))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(z,null)),document.getElementById("root"))},8:function(e,t,n){e.exports={todo:"Todo_todo__3r39A",buttons:"Todo_buttons__13KEj"}},9:function(e,t,n){e.exports={todoContainer:"TodoContainer_todoContainer__W4tTi",head:"TodoContainer_head__3iUI-"}}},[[14,1,2]]]);
//# sourceMappingURL=main.1dd2a883.chunk.js.map