(this["webpackJsonpcps-app"]=this["webpackJsonpcps-app"]||[]).push([[0],{15:function(t,e,c){},16:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c.n(n),a=c(7),i=c.n(a),j=(c(15),c(10)),u=c(2),r=(c(16),c(20)),b=c(1);function o(t){var e=t.result,c=t.cpsRevealed;return Object(b.jsx)(r.a,{children:c&&Object(b.jsxs)("p",{children:["You got a CPS of ",e.clicks]})})}var O=[];var l=function(){var t=Object(n.useState)(0),e=Object(u.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)(15),i=Object(u.a)(a,2),r=i[0],l=i[1],d=Object(n.useState)(-1),p=Object(u.a)(d,2),f=p[0],h=p[1],v=Object(n.useState)(O[0]),x=Object(u.a)(v,2),S=x[0],k=x[1],m=Object(n.useState)(!0),C=Object(u.a)(m,2),Y=C[0],g=C[1],w=Object(n.useState)(!1),E=Object(u.a)(w,2),I=(E[0],E[1]),J=Object(n.useState)(!1),N=Object(u.a)(J,2),R=N[0],y=N[1],A=Object(n.useState)(O),B=Object(u.a)(A,2),M=B[0],P=B[1],q=function(){var t;t={time:15,clicks:c,cps:c/15},P([].concat(Object(j.a)(M),[t])),h(f+1),k(M[f]),g(!0),I(!1),y(!0),l(0)};return Object(n.useEffect)((function(){if(document.title="You clicked ".concat(c," times"),r<=0)return function(){return q()}})),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("p",{children:r}),Object(b.jsxs)("p",{children:["You clicked ",c," times!"]}),Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:function(){s(0),g(!1),I(!0),y(!1);setInterval((function(){l((function(t){return t-1}))}),1e3)},children:"Start"}),Object(b.jsx)("button",{disabled:Y,onClick:function(){return s(c+1)},children:"Click me"})]}),Object(b.jsx)(o,{result:S,cpsRevealed:R})]})};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(l,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7c2eba05.chunk.js.map