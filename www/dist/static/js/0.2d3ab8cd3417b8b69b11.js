webpackJsonp([0],{Ls0E:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o("Xxa5"),i=o.n(e),r=o("exGp"),a=o.n(r),s=o("yKuP"),u=o.n(s),c={middleware:"guest",data:function(){return{form:new u.a({aid:"",password:""})}},methods:{login:function(){var t=this;return a()(i.a.mark(function n(){var o,e;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.form.post("http://192.168.33.101:82/api/login");case 2:o=n.sent,e=o.data,t.$store.dispatch("auth/saveToken",{token:e.token}),t.$router.push({name:"home"});case 6:case"end":return n.stop()}},n,t)}))()}}},l={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("ion-page",[o("ion-grid",[o("ion-row",{attrs:{"align-items-center":""}},[o("ion-col",[o("ion-row",[o("ion-col",[o("ion-img",{staticStyle:{height:"50px"},attrs:{src:"~images/fortuna.png"}})],1)],1),t._v(" "),o("ion-row",[o("ion-col",[o("h4",{attrs:{"text-center":""}},[t._v("Требуется вход")])])],1),t._v(" "),o("form",{on:{submit:function(n){return n.preventDefault(),t.login(n)},keydown:function(n){t.form.onKeydown(n)}}},[o("ion-row",[o("ion-col",[o("div",[o("ion-item",[o("ion-label",{attrs:{position:"floating"}},[t._v("Лицевой счёт")]),t._v(" "),o("ion-input",{attrs:{type:"text",value:t.form.aid},on:{input:function(n){t.form.aid=n.target.value}}})],1)],1)])],1),t._v(" "),o("ion-row",[o("ion-col",[o("div",[o("ion-item",[o("ion-label",{attrs:{position:"floating"}},[t._v("Пароль")]),t._v(" "),o("ion-input",{attrs:{type:"password",value:t.form.password},on:{input:function(n){t.form.password=n.target.value}}})],1)],1)])],1),t._v(" "),o("ion-row",[o("ion-col",[o("ion-button",{attrs:{type:"submit",loading:t.form.busy}},[t._v("Войти")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var p=o("VU/8")(c,l,!1,function(t){o("bU7r")},null,null);n.default=p.exports},bU7r:function(t,n){}});