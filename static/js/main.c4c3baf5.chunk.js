(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{34:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(23),a=c.n(n),s=c(2),i=(c(32),c(33),c(34),c(8)),r=c(17),b=c.n(r),j=c(3),l=function(e){var t,c=e.tab,n=e.selectedTabId;return Object(j.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":(t=c,t.id===n)}),children:Object(j.jsx)(i.a,{to:"".concat(c.id),children:c.title})})},d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){var e=Object(s.q)().tabId,t=void 0===e?null:e,c=d.find((function(e){return e.id===t}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"tabs is-boxed",children:Object(j.jsx)("ul",{children:d.map((function(e){return Object(j.jsx)(l,{tab:e,selectedTabId:t},e.id)}))})}),Object(j.jsx)("div",{className:"block","data-cy":"TabContent",children:c?c.content:"Please select a tab"})]})},x=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"Tabs page"}),Object(j.jsx)(o,{})]})},h=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{className:"title",children:"Page not found"})})},m=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{className:"title",children:"Home page"})})},u=function(e){var t=e.to,c=e.text;return Object(j.jsx)(i.b,{to:t,className:function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})},children:c})},O=function(){return Object(j.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(u,{to:"/",text:"Home"}),Object(j.jsx)(u,{to:"tabs",text:"Tabs"})]})})})},v=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,{}),Object(j.jsx)("div",{className:"section",children:Object(j.jsx)(s.b,{})})]})},f=Object(i.c)([{path:"/",element:Object(j.jsx)(v,{}),children:[{index:!0,element:Object(j.jsx)(m,{})},{path:"home",element:Object(j.jsx)(s.a,{to:"/",replace:!0})},{path:"tabs",element:Object(j.jsx)(x,{}),children:[{path:":tabId",element:Object(j.jsx)(x,{})}]},{path:"*",element:Object(j.jsx)(h,{})}]}]);a.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(s.d,{router:f}))}},[[37,1,2]]]);
//# sourceMappingURL=main.c4c3baf5.chunk.js.map