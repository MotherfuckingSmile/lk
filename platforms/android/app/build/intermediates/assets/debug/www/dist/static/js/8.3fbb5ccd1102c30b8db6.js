webpackJsonp([8],{rzGZ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Gu7T"),a=n.n(i),s=n("Xxa5"),r=n.n(s),l=n("exGp"),c=n.n(l),o=n("mtWM"),u=n.n(o),d={data:function(){return{limit:10,offset:0,balances:[]}},created:function(){var t=this;return c()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("meta/setTitle","Изменения баланса");case 2:return e.next=4,t.$store.dispatch("meta/setLink","cabinet.account");case 4:case"end":return e.stop()}},e,t)}))()},methods:{infiniteHandler:function(t){var e=this;u.a.get("/cabinet/balances/get",{params:{limit:this.limit,offset:this.offset}}).then(function(n){var i,s=n.data;s.length?(e.offset+=e.limit,(i=e.balances).push.apply(i,a()(s)),t.loaded()):t.complete()})}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-content"},[t._l(t.balances,function(e){return n("div",{key:e.date},[n("div",{staticClass:"item item-divider text-center"},[t._v(t._s(e.date))]),t._v(" "),n("div",{staticClass:"list list-borderless hl-list list-ios"},[n("list-item",{attrs:{title:"Операция",content:e.operation}}),t._v(" "),n("list-item",{attrs:{title:"Примечание",content:e.note}}),t._v(" "),n("list-item",{attrs:{title:"Сумма",content:e.sum+" руб."}}),t._v(" "),n("list-item",{attrs:{title:"Баланс",content:e.balance+" руб."}})],1)])}),t._v(" "),n("infinite-loading",{on:{infinite:t.infiniteHandler}})],2)},staticRenderFns:[]},m=n("VU/8")(d,f,!1,null,null,null);e.default=m.exports}});