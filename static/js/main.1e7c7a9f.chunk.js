(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{81:function(A,t,e){"use strict";e.r(t);var n={};e.r(n),e.d(n,"fetchAuthors",(function(){return F}));var c={};e.r(c),e.d(c,"fetchBooks",(function(){return nA}));var r,i,a,o,l,u=e(23),s=e(3),d=e(4),b=Object(d.a)(r||(r=Object(s.a)(["\n*{\n  outline: none;\n}\nbody {\n  background-color: #FFCCFF;\n  font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  text-decoration: none;\n  width: 100vw;\n  height: 100vh;\n}\nli{\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\nh1, h2, h3, h4, h5, h6, p, ul {\n  margin: 0;\n  padding: 0;\n}\n"]))),j=d.b.div(i||(i=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n"]))),p=e(11),h=d.b.header(a||(a=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  height: 60px;\n  background: #ff99ff;\n  width: 100%;\n"]))),O=d.b.span(o||(o=Object(s.a)(["\n  font-size: 18px;\n  letter-spacing: 0.2rem;\n  text-transform: uppercase;\n  transition: color 1s;\n  color: #fff;\n  &:hover {\n    color: #99ccff;\n    transition: color 1s;\n  }\n"]))),f=e(1),x=function(){return Object(f.jsx)(h,{children:Object(f.jsx)(p.b,{to:"/garpix",children:Object(f.jsx)(O,{children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})})})},v=e(0),y=e(9),m=e(18),g=e(2),k=e(25),S=e.n(k),T=e(28);!function(A){A.FETCH_AUTHOR="FETCH_AUTHOR"}(l||(l={}));var E,X=[{id:1,last_name:"Ivanov",first_name:"Ivan"},{id:2,last_name:"Stepanov",first_name:"Ruslan"},{id:3,last_name:"Putin",first_name:"Dmitry"},{id:4,last_name:"Medvedev",first_name:"Vovan"}],q=[{id:1,title:"\u0422\u0430\u0439\u043f\u0441\u043a\u0440\u0438\u043f\u0442 \u0434\u043b\u044f \u0447\u0430\u0439\u043d\u0438\u043a\u043e\u0432, \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043e\u0441\u043d\u043e\u0432\u044b \u0438 \u043e\u0441\u043d\u043e\u0432\u044b \u0431\u0430\u0437\u044b",author_id:1,created_at:2018},{id:2,title:"\u0422\u0430\u0439\u043f\u0441\u043a\u0440\u0438\u043f\u0442 \u0434\u043b\u044f \u043a\u0438\u043f\u044f\u0442\u0438\u043b\u044c\u043d\u0438\u043a\u043e\u0432, \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043e\u0441\u043d\u043e\u0432\u044b \u0438 \u043e\u0441\u043d\u043e\u0432\u044b \u0431\u0430\u0437\u044b",author_id:1,created_at:2019},{id:3,title:"\u0414\u0436\u0430\u0432\u0430\u0441\u043a\u0440\u0438\u043f\u0442 \u0434\u043b\u044f \u0447\u0430\u0439\u043d\u0438\u043a\u043e\u0432, \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043e\u0441\u043d\u043e\u0432\u044b \u0438 \u043e\u0441\u043d\u043e\u0432\u044b \u0431\u0430\u0437\u044b",author_id:2,created_at:2016},{id:4,title:"\u0414\u0436\u0430\u0432\u0430\u0441\u043a\u0440\u0438\u043f\u0442 \u0434\u043b\u044f \u043a\u0438\u043f\u044f\u0442\u0438\u043b\u044c\u043d\u0438\u043a\u043e\u0432, \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043e\u0441\u043d\u043e\u0432\u044b \u0438 \u043e\u0441\u043d\u043e\u0432\u044b \u0431\u0430\u0437\u044b",author_id:2,created_at:2019},{id:5,title:"\u0414\u0438\u0437\u0430\u0439\u043d \u0434\u043b\u044f \u0447\u0430\u0439\u043d\u0438\u043a\u043e\u0432, \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043e\u0441\u043d\u043e\u0432\u044b \u0438 \u043e\u0441\u043d\u043e\u0432\u044b \u0431\u0430\u0437\u044b",author_id:3,created_at:2018},{id:6,title:"\u0414\u0438\u0437\u0430\u0439\u043d \u0434\u043b\u044f \u043a\u0438\u043f\u044f\u0442\u0438\u043b\u044c\u043d\u0438\u043a\u043e\u0432, \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043e\u0441\u043d\u043e\u0432\u044b \u0438 \u043e\u0441\u043d\u043e\u0432\u044b \u0431\u0430\u0437\u044b",author_id:3,created_at:2014},{id:7,title:"\u0414\u0435\u043c\u043e\u043a\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u0447\u0430\u0439\u043d\u0438\u043a\u043e\u0432, \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043e\u0441\u043d\u043e\u0432\u044b \u0438 \u043e\u0441\u043d\u043e\u0432\u044b \u0431\u0430\u0437\u044b",author_id:4,created_at:2e3},{id:8,title:"\u0421\u0432\u0435\u0442\u0441\u043a\u043e\u0435 \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u0447\u0430\u0439\u043d\u0438\u043a\u043e\u0432, \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043e\u0441\u043d\u043e\u0432\u044b \u0438 \u043e\u0441\u043d\u043e\u0432\u044b \u0431\u0430\u0437\u044b",author_id:4,created_at:2e3}],R=["\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0430\u0432\u0442\u043e\u0440\u0430","\u0418\u043c\u044f \u0430\u0432\u0442\u043e\u0440\u0430","\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0430\u0432\u0442\u043e\u0440\u0430","\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0432\u0442\u043e\u0440\u0430","\u041a\u043d\u043e\u043f\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0430\u0432\u0442\u043e\u0440\u0430"],V=["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438","\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0430\u0432\u0442\u043e\u0440\u0430","\u0418\u043c\u044f \u0430\u0432\u0442\u043e\u0440\u0430","\u041f\u0435\u0440\u0432\u0430\u044f \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f","\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u043a\u043d\u0438\u0433\u0438","\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438","\u041a\u043d\u043e\u043f\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u043d\u0438\u0433\u0438"],F=function(){return function(){var A=Object(T.a)(S.a.mark((function A(t){return S.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:t({type:l.FETCH_AUTHOR,payload:X});case 1:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}()};!function(A){A.FETCH_BOOKS="FETCH_BOOKS"}(E||(E={}));var w,C,N,K,W,L,H,z,B,G,U,J,Z,P,Y,M,D,Q,_,I,$,AA,tA,eA,nA=function(){return function(){var A=Object(T.a)(S.a.mark((function A(t){return S.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:t({type:E.FETCH_BOOKS,payload:q});case 1:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}()},cA=Object(g.a)(Object(g.a)({},n),c),rA=function(){var A=function(){var A=Object(y.b)();return Object(m.b)(cA,A)}(),t=A.fetchAuthors,e=A.fetchBooks;Object(v.useEffect)((function(){t(),e()}))},iA=e(6),aA=y.c,oA=d.b.div(w||(w=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  width: 100%;\n  height: 100%;\n"]))),lA=d.b.table(C||(C=Object(s.a)(["\n  border-collapse: collapse;\n  overflow: hidden;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n"]))),uA=d.b.th(N||(N=Object(s.a)(["\n  padding: 15px;\n  background-color: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  text-align: left;\n  background-color: #55608f;\n"]))),sA=d.b.td(K||(K=Object(s.a)(["\n  padding: 15px;\n  background-color: rgba(255, 255, 255, 0.2);\n  color: #000;\n  position: relative;\n  text-align: ",";\n  background: ",";\n  cursor: ",";\n"])),(function(A){return A.onClick?"center":"left"}),(function(A){return A.onClick?"rgba(255, 255, 255, 0.5)":" "}),(function(A){return A.onClick?"pointer":" "})),dA=d.b.tr(W||(W=Object(s.a)(["\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.3);\n  }\n"]))),bA=e(83),jA=d.b.div(L||(L=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  width: 100%;\n  height: 100%;\n"]))),pA=d.b.table(H||(H=Object(s.a)(["\n  border-collapse: collapse;\n  overflow: hidden;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n"]))),hA=d.b.th(z||(z=Object(s.a)(["\n  padding: 15px;\n  background-color: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  text-align: left;\n  background-color: #55608f;\n"]))),OA=d.b.td(B||(B=Object(s.a)(["\n  padding: 15px;\n  position: relative;\n  background-color: rgba(255, 255, 255, 0.2);\n  color: #000;\n  text-align: ",";\n  background: ",";\n  cursor: ",";\n"])),(function(A){return A.onClick?"center":"left"}),(function(A){return A.onClick?"rgba(255, 255, 255, 0.5)":" "}),(function(A){return A.onClick?"pointer":" "})),fA=d.b.tr(G||(G=Object(s.a)(["\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.3);\n  }\n"]))),xA=d.b.h2(U||(U=Object(s.a)(["\n  font-weight: normal;\n  font-size: 40px;\n  color: #fafafa;\n"]))),vA=function(A){var t=A.children;return Object(f.jsx)(xA,{children:t})},yA=d.b.div(J||(J=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 400px;\n  height: 400px;\n  background: #fafafa;\n  border-radius: 10px;\n  border: 1px solid #808080;\n"]))),mA=function(A){var t=A.children;return Object(f.jsx)(yA,{children:t})},gA=d.b.div(Z||(Z=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  height: 80vh;\n"]))),kA=e(5),SA=d.b.div(P||(P=Object(s.a)(["\n  position: absolute;\n  top: 50px;\n  left: 0;\n  font-size: 8px;\n  color: red;\n"]))),TA=function(A){var t=A.children;return Object(f.jsx)(SA,{children:t})},EA=d.b.form(Y||(Y=Object(s.a)(["\ndisplay:flex;\nflex-direction column;\nalign-items: flex-start;\njustify-content: space-around;\nwidth: 200px;\nheight: 250px;\n"]))),XA=function(A){var t=A.children;return Object(f.jsx)(EA,{children:t})},qA=function(A){var t=A.create,e=Object(iA.f)(),n=Object(iA.g)(),c=Object(y.b)(),r=aA((function(A){return A.dataAuthors})).dataAuthors,i=Object(v.useState)(""),a=Object(kA.a)(i,2),o=a[0],u=a[1],s=Object(v.useState)(!1),d=Object(kA.a)(s,2),b=d[0],j=d[1],p=Object(v.useState)("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),h=Object(kA.a)(p,2),O=h[0],x=h[1],m=Object(v.useState)(""),g=Object(kA.a)(m,2),k=g[0],S=g[1],T=Object(v.useState)(!1),E=Object(kA.a)(T,2),X=E[0],q=E[1],R=Object(v.useState)("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),V=Object(kA.a)(R,2),F=V[0],w=V[1],C=Object(v.useState)(!1),N=Object(kA.a)(C,2),K=N[0],W=N[1],L=Object(v.useCallback)((function(A){u(A.target.value),A.target.value.length?x(""):x("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")}),[u]),H=Object(v.useCallback)((function(A){S(A.target.value),A.target.value.length?w(""):w("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")}),[S]),z=function(A){switch(A.target.value){case o:j(!0);break;case k:q(!0)}};Object(v.useEffect)((function(){W(!O&&!F)}),[O,F]);var B=r.find((function(A){return A.id===+n.id})),G=Object(v.useCallback)((function(A){A.preventDefault();var t=r.map((function(A){return A.id===+n.id?{id:+n.id,last_name:k,first_name:o}:A}));c({type:l.FETCH_AUTHOR,payload:t}),e.push("../authors")}),[r,c,o,e,k,n.id]),U=Object(v.useCallback)((function(A){A.preventDefault();var t=r[r.length-1].id,n={first_name:o,last_name:k,id:t+1};r.push(n),c({type:l.FETCH_AUTHOR,payload:r}),e.push("../authors")}),[r,c,e,o,k]);return Object(f.jsxs)(XA,{children:[Object(f.jsxs)("label",{style:{margin:"5px 0",position:"relative"},children:[t?"\u0418\u043c\u044f \u0430\u0432\u0442\u043e\u0440\u0430":null===B||void 0===B?void 0:B.first_name,Object(f.jsx)("input",{value:o,onChange:function(A){return L(A)},onBlur:function(A){return z(A)},placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043c\u044f \u0430\u0432\u0442\u043e\u0440\u0430"}),b&&O&&Object(f.jsx)(TA,{children:O})]}),Object(f.jsxs)("label",{style:{margin:"5px 0",position:"relative"},children:[t?"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0430\u0432\u0442\u043e\u0440\u0430":null===B||void 0===B?void 0:B.last_name,Object(f.jsx)("input",{value:k,onChange:function(A){return H(A)},onBlur:function(A){return z(A)},placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e \u0430\u0432\u0442\u043e\u0440\u0430"}),X&&F&&Object(f.jsx)(TA,{children:F})]}),t?Object(f.jsx)("button",{disabled:!K,onClick:U,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}):Object(f.jsx)("button",{disabled:!K,onClick:G,children:"\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]})},RA=d.b.div(M||(M=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  height: 80vh;\n"]))),VA=function(A){var t=A.create,e=Object(iA.f)(),n=Object(iA.g)(),c=Object(y.b)(),r=aA((function(A){return A.dataBooks})).dataBooks,i=aA((function(A){return A.dataAuthors})).dataAuthors,a=Object(v.useState)(""),o=Object(kA.a)(a,2),l=o[0],u=o[1],s=Object(v.useState)(!1),d=Object(kA.a)(s,2),b=d[0],j=d[1],p=Object(v.useState)("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),h=Object(kA.a)(p,2),O=h[0],x=h[1],m=Object(v.useState)(""),g=Object(kA.a)(m,2),k=g[0],S=g[1],T=Object(v.useState)(!1),X=Object(kA.a)(T,2),q=X[0],R=X[1],V=Object(v.useState)("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),F=Object(kA.a)(V,2),w=F[0],C=F[1],N=Object(v.useState)(!1),K=Object(kA.a)(N,2),W=K[0],L=K[1],H=Object(v.useCallback)((function(A){u(A.target.value),A.target.value.length?x(""):x("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")}),[u]),z=Object(v.useCallback)((function(A){S(A.target.value),"number"!==typeof A.target.value?C("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e"):C(""),A.target.value.length?C(""):C("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")}),[S]),B=function(A){switch(A.target.value){case l:j(!0);break;case k:R(!0)}};Object(v.useEffect)((function(){L(!O&&!w)}),[O,w]);var G=Object(v.useState)("1"),U=Object(kA.a)(G,2),J=U[0],Z=U[1],P=Object(v.useCallback)((function(A){Z(A.target.value)}),[Z]),Y=Object(v.useCallback)((function(A){A.preventDefault();var t=r.map((function(A){return A.id===+n.id?{id:+n.id,title:l,created_at:k,author_id:+J}:A}));c({type:E.FETCH_BOOKS,payload:t}),e.push("../books")}),[r,c,e,k,n.id,J,l]),M=Object(v.useCallback)((function(A){A.preventDefault();var t=r[r.length-1].id,n=parseInt(k.slice(0,4)),i={id:t+1,title:l,created_at:n,author_id:+J};r.push(i),c({type:E.FETCH_BOOKS,payload:r}),e.push("../books")}),[r,c,e,k,J,l]);return Object(f.jsxs)(XA,{children:[Object(f.jsxs)("label",{style:{margin:"5px 0",position:"relative"},children:["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438",Object(f.jsx)("input",{value:l,onChange:function(A){return H(A)},onBlur:function(A){return B(A)},placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438"}),b&&O&&Object(f.jsx)(TA,{children:O})]}),"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0432\u0442\u043e\u0440\u0430",Object(f.jsx)("select",{onChange:P,value:J,children:i.map((function(A){return Object(f.jsx)("option",{value:A.id,children:A.last_name})}))}),Object(f.jsxs)("label",{style:{margin:"5px 0",position:"relative"},children:["\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0433\u043e\u0434 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",Object(f.jsx)("input",{value:k,type:"date",onChange:function(A){return z(A)},onBlur:function(A){return B(A)},placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0433\u043e\u0434 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"}),q&&w&&Object(f.jsx)(TA,{children:w})]}),t?Object(f.jsx)("button",{disabled:!W,onClick:Y,children:"\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}):Object(f.jsx)("button",{disabled:!W,onClick:M,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})},FA=d.b.p(D||(D=Object(s.a)(["\n  font-size: 30px;\n  letter-spacing: 10px;\n"]))),wA=function(A){var t=A.children;return Object(f.jsx)(FA,{children:t})},CA=d.b.div(Q||(Q=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  height: 80vh;\n"]))),NA=d.b.p(_||(_=Object(s.a)(["\n  text-decoration: underline;\n  font-size: 24px;\n"]))),KA=(e(42),d.b.div(I||(I=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  height: 80vh;\n"])))),WA=d.b.div($||($=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  height: 80vh;\n"]))),LA=d.b.div(AA||(AA=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  height: 80vh;\n"]))),HA=e.p+"static/media/books.eb4f5570.jpg",zA=d.b.ul(tA||(tA=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n"]))),BA=d.b.img(eA||(eA=Object(s.a)(["\n  width: 200px;\n  height: 300px;\n"]))),GA=[{path:"/garpix",exact:!0,component:function(){return Object(f.jsxs)(zA,{children:[Object(f.jsx)(p.c,{to:"/books",children:Object(f.jsx)(BA,{src:HA,alt:"Books"})}),Object(f.jsx)(p.c,{to:"/authors",children:Object(f.jsx)(BA,{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/4QBsRXhpZgAASUkqAAgAAAADADEBAgAHAAAAMgAAABICAwACAAAAAgACAGmHBAABAAAAOgAAAAAAAABQaWNhc2EAAAMAAJAHAAQAAAAwMjIwAqAEAAEAAABUAQAAA6AEAAEAAAC9AQAAAAAAAP/uAA5BZG9iZQBkwAAAAAH/2wCEABQQEBkSGScXFycyJh8mMi4mJiYmLj41NTU1NT5EQUFBQUFBREREREREREREREREREREREREREREREREREREREQBFRkZIBwgJhgYJjYmICY2RDYrKzZERERCNUJERERERERERERERERERERERERERERERERERERERERERERERERERP/AABEIAb0BVAMBIgACEQEDEQH/xACBAAEAAwADAQAAAAAAAAAAAAAABQYHAgMEAQEBAAAAAAAAAAAAAAAAAAAAABAAAgECBAMFBAUJBwQDAAAAAAECEQMhMQQFQRIGUWFxIhOBkTIUobHxQlLwwdFisiMzFRZygpKi4qNkwtJjJFNzNBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AuYAAAAAAAAAAAAAAAABX913jQc0rF+++WKnG7ZtxfneGHOsqYppSVW6SdE0BIazetFoZenfuqMvwqsmvFRTpnhXPgeex1Nt16fpq6ouuDmnFPCtavBdmNMV4VirfV23aaPLp7E4JtNxjCEVwq8HnT34KqzK9vmt0OslblorTtNKSn5YxTyphFtdoGnAybS7rq9HRWLs4qNaRrWOP6r8v0Z45ndf3/cNRTnvzVPweT9mlfaBqM5xhFzm0opVbeSRFf1Jt3P6frKteXKXL/ipy076041oZgAND3Lq3T6OXp2o+s8HzRnHkp4rmda8Gl25UrV9R1VuN5ypcUIyVOWEUqYcG6y+nwIezdlZnG7bdJQalF96xROx6k+aUbW52YX7a++ly3FVp1TWGXBctcKvMDqh1VuUZJu6pJP4XCNH3YJP3MsOg6z091KOqi7cuMo+aGWf4lV8KSphiVvdtLoIW4ajQ3W/Uf8CWMoZ1q+FMEk61zUpI8UddJ2PlbqU7ablbr8UG/wAL7G6c0XVPhyy8wGsWr0L0VctSU4vKUXVe9HMzfpvfFtlx271XYuNc2fkf4qftccF2UejQnGcVODTi1VNZNAcgAAAA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",alt:"Authors"})})]})}},{path:"/authors",exact:!0,component:function(){var A=Object(iA.f)(),t=Object(y.b)(),e=aA((function(A){return A.dataAuthors})).dataAuthors,n=Object(v.useCallback)((function(A){e.splice(e.findIndex((function(t){return t.id===A})),1),t({type:l.FETCH_AUTHOR,payload:e})}),[e,t]);return Object(f.jsx)(oA,{children:Object(f.jsxs)(lA,{children:[Object(f.jsx)("thead",{children:Object(f.jsx)(dA,{children:R.map((function(A){return Object(f.jsx)(uA,{children:A},A)}))})}),Object(f.jsxs)("tbody",{children:[e.map((function(t){return Object(f.jsxs)(dA,{children:[Object(f.jsx)(sA,{children:t.last_name}),Object(f.jsx)(sA,{children:t.first_name}),Object(f.jsx)(sA,{children:Object(f.jsx)(bA.a,{onClick:function(){return A.push("/authors/".concat(t.id))},children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0430\u0432\u0442\u043e\u0440\u0430"})}),Object(f.jsx)(sA,{children:Object(f.jsx)(bA.a,{onClick:function(){return A.push("/editauthor/".concat(t.id))},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0432\u0442\u043e\u0440\u0430"})}),Object(f.jsx)(sA,{children:Object(f.jsx)(bA.a,{onClick:function(){return n(t.id)},children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435"})})]},t.id)})),Object(f.jsx)(dA,{style:{textAlign:"center"},children:Object(f.jsx)(bA.a,{type:"primary",style:{width:"100%",height:"60px",borderRadius:"10px"},onClick:function(){return A.push("/createauthor")},children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0430\u0432\u0442\u043e\u0440\u0430"})})]})]})})}},{path:"/authors/:id",component:function(){var A=Object(iA.f)(),t=Object(iA.g)(),e=aA((function(A){return A.dataAuthors})).dataAuthors.find((function(A){return A.id===+t.id}));return Object(f.jsxs)(CA,{children:[Object(f.jsx)(bA.a,{style:{position:"absolute",top:"40px",left:"40px",alignSelf:"flex-start"},onClick:function(){return A.push("/authors")},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(f.jsx)(vA,{children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0430\u0432\u0442\u043e\u0440\u0430"}),Object(f.jsxs)(mA,{children:[Object(f.jsx)(NA,{children:"\u0418\u043c\u044f"}),Object(f.jsx)(wA,{children:null===e||void 0===e?void 0:e.first_name}),Object(f.jsx)(NA,{children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(f.jsx)(wA,{children:null===e||void 0===e?void 0:e.last_name})]})]})}},{path:"/books",exact:!0,component:function(){var A=aA((function(A){return A.dataBooks})).dataBooks,t=aA((function(A){return A.dataAuthors})).dataAuthors,e=Object(iA.f)(),n=Object(y.b)(),c=Object(v.useCallback)((function(t){A.splice(A.findIndex((function(A){return A.id===t})),1),n({type:E.FETCH_BOOKS,payload:A})}),[A,n]);return Object(f.jsx)(jA,{children:Object(f.jsxs)(pA,{children:[Object(f.jsx)("thead",{children:Object(f.jsx)(fA,{children:V.map((function(A){return Object(f.jsx)(hA,{children:A},A)}))})}),Object(f.jsxs)("tbody",{children:[A.map((function(A){return Object(f.jsxs)(fA,{children:[Object(f.jsx)(OA,{children:A.title}),Object(f.jsx)(OA,{children:t.map((function(t){return t.id===A.author_id&&Object(f.jsx)(OA,{children:t.last_name})}))}),Object(f.jsx)(OA,{children:t.map((function(t){return t.id===A.author_id&&Object(f.jsx)(OA,{children:t.first_name})}))}),Object(f.jsx)(OA,{children:A.created_at}),Object(f.jsx)(OA,{children:Object(f.jsx)(bA.a,{onClick:function(){return e.push("/books/".concat(A.id))},children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"})}),Object(f.jsx)(OA,{children:Object(f.jsx)(bA.a,{onClick:function(){return e.push("/editbook/".concat(A.id))},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"})}),Object(f.jsx)(OA,{children:Object(f.jsx)(bA.a,{onClick:function(){return c(A.id)},children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438"})})]},A.id)})),Object(f.jsx)(fA,{style:{textAlign:"center"},children:Object(f.jsx)(bA.a,{type:"primary",style:{width:"100%",height:"60px",borderRadius:"10px"},onClick:function(){return e.push("/createbook")},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u043d\u0438\u0433\u0443"})})]})]})})}},{path:"/books/:id",component:function(){var A=Object(iA.f)(),t=Object(iA.g)(),e=aA((function(A){return A.dataBooks})).dataBooks,n=aA((function(A){return A.dataAuthors})).dataAuthors,c=e.find((function(A){return A.id===+t.id}));return Object(f.jsxs)(KA,{children:[Object(f.jsx)(bA.a,{style:{position:"absolute",top:"40px",left:"40px",alignSelf:"flex-start"},onClick:function(){return A.push("/books")},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(f.jsxs)(mA,{children:[Object(f.jsx)("p",{children:null===c||void 0===c?void 0:c.title}),Object(f.jsx)("p",{children:n.map((function(A){return A.id===(null===c||void 0===c?void 0:c.author_id)&&A.last_name}))}),Object(f.jsx)("p",{children:n.map((function(A){return A.id===(null===c||void 0===c?void 0:c.author_id)&&A.first_name}))}),Object(f.jsx)("p",{children:null===c||void 0===c?void 0:c.created_at})]})]})}},{path:"/editauthor/:id",component:function(){var A=Object(iA.f)();return Object(f.jsxs)(WA,{children:[Object(f.jsx)(bA.a,{style:{position:"absolute",top:"40px",left:"40px",alignSelf:"flex-start"},onClick:function(){return A.push("/authors")},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(f.jsx)(vA,{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0432\u0442\u043e\u0440\u0430"}),Object(f.jsx)(mA,{children:Object(f.jsx)(qA,{})})]})}},{path:"/editbook/:id",component:function(){var A=Object(iA.f)();return Object(f.jsxs)(LA,{children:[Object(f.jsx)(bA.a,{style:{position:"absolute",top:"40px",left:"40px",alignSelf:"flex-start"},onClick:function(){return A.push("/books")},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(f.jsx)(vA,{children:"\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043d\u0438\u0433\u0443"}),Object(f.jsx)(mA,{children:Object(f.jsx)(VA,{})})]})}},{path:"/createauthor",component:function(){var A=Object(iA.f)();return Object(f.jsxs)(gA,{children:[Object(f.jsx)(bA.a,{style:{position:"absolute",top:"40px",left:"40px",alignSelf:"flex-start"},onClick:function(){return A.push("/authors")},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(f.jsx)(vA,{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u0432\u0442\u043e\u0440\u0430"}),Object(f.jsx)(mA,{children:Object(f.jsx)(qA,{create:!0})})]})}},{path:"/createbook",component:function(){var A=Object(iA.f)();return Object(f.jsxs)(RA,{children:[Object(f.jsx)(bA.a,{style:{position:"absolute",top:"40px",left:"40px",alignSelf:"flex-start"},onClick:function(){return A.push("/books")},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(f.jsx)(vA,{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443"}),Object(f.jsx)(mA,{children:Object(f.jsx)(VA,{create:!0})})]})}}],UA=function(){return Object(f.jsx)(iA.c,{children:GA.map((function(A,t){return Object(f.jsx)(iA.a,Object(g.a)({},A),t)}))})},JA=function(){return rA(),Object(f.jsxs)(j,{children:[Object(f.jsx)(b,{}),Object(f.jsx)(x,{}),Object(f.jsx)(UA,{})]})},ZA=e(60),PA={dataBooks:[]},YA={dataAuthors:[]},MA=Object(m.c)({dataAuthors:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:YA,t=arguments.length>1?arguments[1]:void 0;return t.type===l.FETCH_AUTHOR?{dataAuthors:t.payload}:A},dataBooks:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:PA,t=arguments.length>1?arguments[1]:void 0;return t.type===E.FETCH_BOOKS?{dataBooks:t.payload}:A}}),DA=Object(m.d)(MA,Object(m.a)(ZA.a)),QA=document.querySelector("#root");Object(u.render)(Object(f.jsx)(y.a,{store:DA,children:Object(f.jsx)(p.a,{children:Object(f.jsx)(JA,{})})}),QA)}},[[81,1,2]]]);
//# sourceMappingURL=main.1e7c7a9f.chunk.js.map