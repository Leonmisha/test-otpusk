(this["webpackJsonptest-otpusk"]=this["webpackJsonptest-otpusk"]||[]).push([[0],{15:function(e,t,n){e.exports={Main:"Main_Main__aEwJn",cardsContainer:"Main_cardsContainer__3P5ZV",cards:"Main_cards__1BYCn",search:"Main_search__YvnYq"}},19:function(e,t,n){e.exports={Auth:"Auth_Auth__3-Wh1",form:"Auth_form__2rGng",loginButton:"Auth_loginButton__DrYCx"}},20:function(e,t,n){e.exports={Header:"Header_Header__2dWng",logout:"Header_logout__2AWhG"}},21:function(e,t,n){e.exports={card:"Card_card__1tnPy"}},36:function(e,t,n){},38:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),o=n.n(r),s=(n(36),n(25)),i=n.n(s),l=n(30),u=n(7),j=(n(38),n(39),n(6)),d=n(10),b=n(19),h=n.n(b),m=n(48),O=n(49),f="qwerty",p=function(e,t){return btoa(JSON.stringify({email:e,password:t}).concat("::".concat(f)))},x=function(e){var t=atob(e).split("::"),n=Object(u.a)(t,2),a=n[0],c=n[1];return{user:JSON.parse(a),secret:c}},v=function(e){return Promise.resolve(e).then(x).then((function(e){return e.secret.includes(f)}))},g=function(e){return Promise.resolve(e).then(x).then((function(e){var t=e.user;return delete t.password,t}))},_="SAVE_LOGIN_INFO",N="USER_LOGOUT",k=function(e){var t=e.email,n=e.token;return{type:_,email:t,token:n}},S=n(2),y=function(e){var t=Object(d.b)(),n=Object(a.useState)(""),c=Object(u.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),i=Object(u.a)(s,2),l=i[0],j=i[1],b=Object(a.useState)(!1),f=Object(u.a)(b,2),x=f[0],v=f[1],g=Object(a.useState)(!1),_=Object(u.a)(g,2),N=_[0],y=_[1],w=Object(a.useState)(!1),C=Object(u.a)(w,2),E=C[0],I=C[1],M=Object(a.useState)(null),A=Object(u.a)(M,2),J=A[0],z=A[1];function D(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=!0,n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;return t=!(!e&&!r||!n.test(r)),y(!t),t}function G(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=!0;return t=!(!e&&!l||l.length<3),I(!t),t}return Object(S.jsx)("div",{className:h.a.Auth,children:Object(S.jsxs)(m.a,{className:h.a.form,children:[Object(S.jsxs)(m.a.Group,{controlId:"email",children:[Object(S.jsx)(m.a.Label,{children:"Email"}),Object(S.jsx)(m.a.Control,{type:"email",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 tourist@gmail.com",value:r,onChange:function(e){N&&D(!1),o(e.target.value)}}),N&&Object(S.jsx)(m.a.Text,{className:"text-muted",children:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430"})]}),Object(S.jsxs)(m.a.Group,{controlId:"password",children:[Object(S.jsx)(m.a.Label,{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(S.jsx)(m.a.Control,{type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:l,onChange:function(e){E&&G(!1),j(e.target.value)}}),E&&Object(S.jsx)(m.a.Text,{className:"text-muted",children:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 3 \u0438 \u0431\u043e\u043b\u0435\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]}),Object(S.jsx)(m.a.Group,{controlId:"rememberMe",children:Object(S.jsx)(m.a.Check,{type:"checkbox",label:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f",value:x,onChange:function(e){v(e.target.value)}})}),Object(S.jsx)(O.a,{variant:"primary",type:"submit",className:h.a.loginButton,onClick:function(e){if(e.preventDefault(),!(D(!1)&G(!1)))return!1;(function(e,t){return Math.random()>.5?Promise.resolve(new Response(JSON.stringify({email:e,token:p(e,t)})),{status:200}):Promise.reject(new Response(JSON.stringify({error:!0,message:"Email or password is incorrect"}),{status:401}))})(r,l).then((function(e){return e.json()})).then((function(e){if(x)try{localStorage.setItem("token",e.token)}catch(n){alert("\u041d\u0435 \u0432\u044b\u0448\u043b\u043e \u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u0432\u0430\u0441! \u0410 \u0436\u0430\u043b\u044c:(")}t(k({email:e.email,token:e.token}))})).catch((function(e){return e.json().then((function(e){z(e.message)}))}))},children:"\u0412\u043e\u0439\u0442\u0438"}),J&&Object(S.jsx)(m.a.Text,{children:J})]})})},w=n(14),C=n(15),E=n.n(C),I=n(20),M=n.n(I),A=function(e){var t=e.email,n=Object(d.b)();return Object(S.jsxs)("header",{className:M.a.Header,children:[Object(S.jsx)("div",{className:M.a.email,children:t}),Object(S.jsx)(O.a,{className:M.a.logout,onClick:function(){n({type:N})},variant:"light",children:"\u0412\u044b\u0445\u043e\u0434"})]})},J=n(21),z=n.n(J),D=function(e){var t=e.companyName,n=e.date;return Object(S.jsxs)("div",{className:z.a.card,children:[Object(S.jsx)("div",{className:z.a.companyName,children:t}),Object(S.jsx)("div",{className:z.a.date,children:n})]})},G=function(){var e=Object(d.c)((function(e){return e.token})),t=Object(d.c)((function(e){return e.email})),n=Object(a.useState)([]),c=Object(u.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(!1),i=Object(u.a)(s,2),l=i[0],j=i[1],b=Object(a.useState)(""),h=Object(u.a)(b,2),O=h[0],f=h[1],p=r.filter((function(e){if(!O)return e;var t=-1!==e.company.name.indexOf(O),n=e.company.alternativeNames.some((function(e){return-1!==e.indexOf(O)}));return t||n}));return Object(a.useEffect)((function(){(function(e){return v(e).then((function(e){return e?new Response(JSON.stringify({data:{10:{company:{alternativeNames:["Fdhjhf","\u0430\u0440\u043e\u0440\u0432\u0430","\u0410\u0420\u041e\u0420\u0412\u0410"],name:"\u0410\u0432\u0440\u043e\u0440\u0430"},date:"25-05-2021"},20:{company:{alternativeNames:[],name:"\u0410\u044d\u0440\u043e\u0444\u043b\u043e\u0442"},date:"29-05-2021"}}}),{status:200}):new Response(JSON.stringify({error:!0,message:"Forbidden"}),{status:403})}))})(e).then((function(e){return e.json()})).then((function(e){var t=[];for(var n in e.data)t.push(Object(w.a)({id:n},e.data[n]));t=t.sort((function(e,t){return new Date(e.date)-new Date(t.date)})),o(t),j(!0)}))}),[e]),Object(S.jsxs)("div",{className:E.a.Main,children:[Object(S.jsx)(A,{email:t}),Object(S.jsxs)(m.a.Group,{controlId:"search",className:E.a.search,children:[Object(S.jsx)(m.a.Label,{children:"\u041f\u043e\u0438\u0441\u043a"}),Object(S.jsx)(m.a.Control,{type:"search",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",value:O,onChange:function(e){f(e.target.value)}})]}),l&&Object(S.jsx)("div",{className:E.a.cardsContainer,children:Object(S.jsx)("div",{className:E.a.cards,children:p.map((function(e){return Object(S.jsx)(D,{companyName:e.company.name,date:e.date},e.id)}))})})]})},L=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return Boolean(e.email&&e.token)})),n=Object(j.g)(),c=Object(a.useState)(!1),r=Object(u.a)(c,2),o=r[0],s=r[1];function b(){if("/login"===n.location.pathname)return n.location;var e="/login";return console.log("/test-otpusk"),console.log(n.location.pathname),n.location.pathname&&"//test-otpusk"!==n.location.pathname?{pathname:e,search:"?redirect=".concat(n.location.pathname)}:e}function h(e){if("/login"!==n.location.pathname)return n.location;var t="/profile",a=new URLSearchParams(n.location.search).get("redirect");return null!=a&&"/login"!==a&&(t=a),t}return Object(a.useEffect)((function(){(function(){var t=Object(l.a)(i.a.mark((function t(){var a,c,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a=localStorage.getItem("token"))){t.next=24;break}return t.prev=2,t.next=5,v(a);case 5:c=t.sent,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),c=!1;case 11:if(!c){t.next=19;break}return t.next=14,g(a);case 14:r=t.sent,e(k({email:r.email,token:a})),n.push(h(2)),t.next=22;break;case 19:localStorage.removeItem("token"),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438"),n.push(b());case 22:t.next=25;break;case 24:n.push(b());case 25:s(!0);case 26:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(){return t.apply(this,arguments)}})()()}),[e,n]),Object(S.jsx)("div",{className:"App",children:o&&(t?Object(S.jsxs)(j.d,{children:[Object(S.jsx)(j.b,{path:"/profile",children:Object(S.jsx)(G,{})}),Object(S.jsx)(j.a,{from:"/login",to:h()})]}):Object(S.jsxs)(j.d,{children:[Object(S.jsx)(j.b,{path:"/login",children:Object(S.jsx)(y,{})}),Object(S.jsx)(j.a,{to:b()})]}))})},R=n(31),T={email:"",token:""};var P=Object(R.a)((function(e,t){return localStorage.removeItem("token"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(w.a)(Object(w.a)({},e),{},{email:t.email,token:t.token});default:return e}}(void 0,t)}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),B=n(18);o.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(B.a,{basename:"/test-otpusk",children:Object(S.jsx)(d.a,{store:P,children:Object(S.jsx)(L,{})})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.b45c3433.chunk.js.map