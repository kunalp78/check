_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"0lIN":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/crud/blogs",function(){return t("BzMX")}])},BzMX:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),c=t.n(a),r=t("5Yp1"),o=t("vC6e"),u=t("nVAt"),l=(t("YFqc"),c.a.createElement);e.default=function(){return l(r.a,null,l(o.a,null,l("div",{className:"container"},l("div",{className:"row"},l("div",{className:"col-md-12 pt-5 pb-5"},l("h2",null,"Manage blogs")),l("div",{className:"col-md-12"},l(u.a,null))))))}},nVAt:function(n,e,t){"use strict";var a=t("q1tI"),c=t.n(a),r=t("YFqc"),o=t.n(r),u=(t("nOHt"),t("iuBY")),l=t("zycw"),s=t("wd/R"),i=t.n(s),m=c.a.createElement;e.a=function(n){var e=n.username,t=Object(a.useState)([]),r=t[0],s=t[1],b=Object(a.useState)(""),d=b[0],f=b[1],w=Object(u.c)("token");Object(a.useEffect)((function(){N()}),[]);var N=function(){Object(l.b)(e).then((function(n){n.error?console.log(n.error):s(n)}))},p=function(n){window.confirm("Are you sure you want to delete your blog?")&&function(n){Object(l.f)(n,w).then((function(n){n.error?console.log(n.error):(f(n.message),N())}))}(n)};return m(c.a.Fragment,null,m("div",{className:"row"},m("div",{className:"col-md-12"},d&&m("div",{className:"alert alert-warning"},d),r.map((function(n,e){return m("div",{key:e,className:"pb-5"},m("h3",null,n.title),m("p",{className:"mark"},"Written by ",n.postedBy.name," | Published on ",i()(n.updatedAt).fromNow()),m("button",{className:"btn btn-sm btn-danger",onClick:function(){return p(n.slug)}},"Delete"),function(n){return Object(u.e)()&&0===Object(u.e)().role?m(o.a,{href:"/user/crud/".concat(n.slug)},m("a",{className:"ml-2 btn btn-sm btn-warning"},"Update")):Object(u.e)()&&1===Object(u.e)().role?m(o.a,{href:"/admin/crud/".concat(n.slug)},m("a",{className:"ml-2 btn btn-sm btn-warning"},"Update")):void 0}(n))})))))}},vC6e:function(n,e,t){"use strict";var a=t("q1tI"),c=t.n(a),r=t("nOHt"),o=t.n(r),u=t("iuBY"),l=c.a.createElement;e.a=function(n){var e=n.children;return Object(a.useEffect)((function(){Object(u.e)()?1!==Object(u.e)().role&&o.a.push("/"):o.a.push("/signin")}),[]),l(c.a.Fragment,null,e)}}},[["0lIN",1,0,4,2,3,5]]]);