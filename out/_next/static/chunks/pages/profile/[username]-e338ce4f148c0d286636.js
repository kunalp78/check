_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"0c6W":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n("LpSC"),a=n.n(r),o=n("obyI"),c=n("iuBY"),i=function(e){return a()("".concat(o.a,"/user/").concat(e),{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},u=function(e){return a()("".concat(o.a,"/user/profile"),{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},s=function(e,t){return a()("".concat(o.a,"/user/update"),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(e)},body:t}).then((function(e){return Object(c.d)(e),e.json()})).catch((function(e){return console.log(e)}))}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,u=d.length;i<u;i++){var s=d[i];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],p=r[s]||new Set;p.has(l)?o=!1:(p.add(l),r[s]=p)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},PavT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/[username]",function(){return n("k/Hk")}])},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},StKG:function(e,t,n){"use strict";var r=n("rePB"),a=n("q1tI"),o=n.n(a),c=(n("YFqc"),n("LpSC")),i=n.n(c),u=n("obyI"),s=o.a.createElement;function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.authorEmail,n=Object(a.useState)({message:"",name:"",email:"",sent:!1,buttonText:"Send Message",success:!1,error:!1}),c=n[0],l=n[1],d=c.message,f=c.name,m=c.email,h=(c.sent,c.buttonText),b=c.success,g=c.error,y=function(e){e.preventDefault(),l(p(p({},c),{},{buttonText:"Sending..."})),function(e){var t;return t=e.authorEmail?"".concat(u.a,"/contact-blog-author"):"".concat(u.a,"/contact"),i()("".concat(t),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({authorEmail:t,name:f,email:m,message:d}).then((function(e){e.error?l(p(p({},c),{},{error:e.error})):l(p(p({},c),{},{sent:!0,name:"",email:"",message:"",buttonText:"Sent",success:e.success}))}))},v=function(e){return function(t){var n;l(p(p({},c),{},(n={},Object(r.a)(n,e,t.target.value),Object(r.a)(n,"error",!1),Object(r.a)(n,"success",!1),Object(r.a)(n,"buttonText","Send Message"),n)))}};return s(o.a.Fragment,null,b&&s("div",{className:"alert alert-info"},"Thank you for contacting us."),s("div",{className:"alert alert-danger",style:{display:g?"":"none"}},g),s("form",{onSubmit:y,className:"pb-5"},s("div",{className:"form-group"},s("label",{className:"lead"},"Message"),s("textarea",{onChange:v("message"),type:"text",className:"form-control",value:d,required:!0,rows:"10"})),s("div",{className:"form-group"},s("label",{className:"lead"},"Name"),s("input",{type:"text",onChange:v("name"),className:"form-control",value:f,required:!0})),s("div",{className:"form-group"},s("label",{className:"lead"},"Email"),s("input",{type:"email",onChange:v("email"),className:"form-control",value:m,required:!0})),s("div",null,s("button",{className:"btn btn-primary"},h))))}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),p=function(e){c(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=p},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},"k/Hk":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),c=n.n(o),i=n("YFqc"),u=n.n(i),s=n("5Yp1"),l=n("0c6W"),p=n("obyI"),d=n("wd/R"),f=n.n(d),m=n("StKG"),h=a.a.createElement,b=function(e){var t=e.user,n=e.blogs,r=e.query;return h(a.a.Fragment,null,h(c.a,null,h("title",null,t.username," | ",p.b),h("meta",{name:"description",content:"Blogs by ".concat(t.username)}),h("link",{rel:"canonical",href:"".concat(p.d,"/profile/").concat(r.username)}),h("meta",{property:"og:title",content:"".concat(t.username,"| ").concat(p.b)}),h("meta",{property:"og:description",content:"Blogs by ".concat(t.username)}),h("meta",{property:"og:type",content:"webiste"}),h("meta",{property:"og:url",content:"".concat(p.d,"/profile/").concat(r.username)}),h("meta",{property:"og:site_name",content:"".concat(p.b)}),h("meta",{property:"og:image",content:"".concat(p.d,"/static/images/seoblog.jpg")}),h("meta",{property:"og:image:secure_url",content:"".concat(p.d,"/static/images/seoblog.jpg")}),h("meta",{property:"og:image:type",content:"image/jpg"}),h("meta",{property:"fb:app_id",content:"".concat(p.e)})),h(s.a,null,h("div",{className:"container"},h("div",{className:"row"},h("div",{className:"col-md-12"},h("div",{className:"card"},h("div",{className:"card-body"},h("div",{className:"row"},h("div",{className:"col-md-8"},h("h5",null,t.name),h("p",{className:"text-muted"},"Joined ",f()(t.createdAt).fromNow())),h("div",{className:"col-md-4"},h("img",{src:"".concat(p.a,"/user/photo/").concat(t.username),className:"img img-fluid img-thumbnail mb-3",style:{maxHeight:"100px",maxWidth:"100%"},alt:"user profile"})))))))),h("br",null),h("div",{className:"container pb-5"},h("div",{className:"row"},h("div",{className:"col-md-6"},h("div",{className:"card"},h("div",{className:"card-body"},h("h5",{className:"card-title bg-primary pt-4 pb-4 pl-4 pr-4 text-white"},"Recent blogs by ",t.name),n.map((function(e,t){return h("div",{className:"mt-4 mb-4",key:t},h(u.a,{href:"/blogs/".concat(e.slug)},h("a",{className:"lead"},e.title)))}))))),h("div",{className:"col-md-6"},h("div",{className:"card"},h("div",{className:"card-body"},h("h5",{className:"card-title bg-primary pt-4 pb-4 pl-4 pr-4 text-light"},"Message ",t.name),h("br",null),h(m.a,{authorEmail:t.email}))))))))};b.getInitialProps=function(e){var t=e.query;return Object(l.c)(t.username).then((function(e){if(!e.error)return{user:e.user,blogs:e.blogs,query:t};console.log(e.error)}))},t.default=b},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a}},[["PavT",1,0,4,2,3,5]]]);