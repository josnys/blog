(self.webpackChunk=self.webpackChunk||[]).push([[605],{605:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});n(7294),n(3935);var r=n(1636),o=n(4593),i=n(3508),a=n(8920),s=n(8033),c=n(1329),u=n(5893);const l=function(){var e=(0,r.qt)().props.app,t=(0,r.cI)({fisrt_name:"",last_name:"",username:"",email:"",password:"",password_confirmation:""}),n=t.data,l=t.setData,f=t.post,p=t.processing,d=t.errors;return(0,u.jsxs)("div",{className:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0",children:[(0,u.jsx)(o.Z,{children:(0,u.jsx)("title",{children:"".concat(e.name," | Register")})}),(0,u.jsx)(c.Z,{className:"w-12 h-12"}),(0,u.jsx)(i.Z,{children:(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(route("register"))},children:[(0,u.jsx)(a.Z,{className:"",label:"First Name",name:"first_name",type:"text",disable:!1,readonly:!1,must:!0,errors:d.first_name,value:n.first_name,onChange:function(e){return l("first_name",e.target.value)}}),(0,u.jsx)(a.Z,{className:"",label:"Last Name",name:"last_name",type:"text",disable:!1,readonly:!1,must:!0,errors:d.last_name,value:n.last_name,onChange:function(e){return l("last_name",e.target.value)}}),(0,u.jsx)(a.Z,{className:"mt-4",label:"Username",name:"username",type:"text",disable:!1,readonly:!1,must:!0,errors:d.username,value:n.username,onChange:function(e){return l("username",e.target.value)}}),(0,u.jsx)(a.Z,{className:"mt-4",label:"Email",name:"email",type:"email",disable:!1,readonly:!1,must:!0,errors:d.email,value:n.email,onChange:function(e){return l("email",e.target.value)}}),(0,u.jsx)(a.Z,{className:"mt-4",label:"Password",name:"password",type:"password",disable:!1,readonly:!1,must:!0,errors:d.password,value:n.password,onChange:function(e){return l("password",e.target.value)}}),(0,u.jsx)(a.Z,{className:"mt-4",label:"Confirm Password",name:"password_confirmation",type:"password",disable:!1,readonly:!1,must:!0,errors:d.password_confirmation,value:n.password_confirmation,onChange:function(e){return l("password_confirmation",e.target.value)}}),(0,u.jsxs)("div",{className:"flex items-center justify-end mt-4",children:[(0,u.jsx)(r.ZQ,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900",children:"Already registered?"}),(0,u.jsx)(s.Z,{type:"submit",loading:p,className:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4",children:"Register"})]})]})})]})}},3508:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});n(7294);var r=n(5893);const o=function(e){var t=e.children;return(0,r.jsx)("div",{className:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-xl overflow-hidden sm:rounded-lg leading-loose",children:t})}},8291:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});n(7294);var r=n(5893),o=["color","size"];function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a=function(e){var t=e.color,n=e.size;i(e,o);return(0,r.jsxs)("span",{className:"flex mx-2",children:[(0,r.jsx)("span",{className:"animate-ping absolute inline-flex h-".concat(n," w-").concat(n," rounded-full bg-").concat(t,"-300 opacity-75")}),(0,r.jsx)("span",{className:"relative inline-flex rounded-full h-".concat(n," w-").concat(n," bg-").concat(t,"-500")})]})}},8033:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(7294),o=n(4764),i=n(8291),a=n(5893),s=["loading","className","children"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p=function(e){var t=e.loading,n=e.className,c=e.children,l=f(e,s);return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsxs)(o.vk,{children:[(0,a.jsx)("button",u(u({disabled:t,className:"focus:outline-none flex items-center ".concat(n," ").concat(t?"hidden":"block")},l),{},{children:c})),(0,a.jsxs)("div",{className:"focus:outline-none flex items-center ".concat(n," ").concat(t?"block":"hidden"),children:[(0,a.jsx)(i.Z,{color:"gray",size:"3"}),"Wait a minute.."]})]}),(0,a.jsx)(o.B6,{children:(0,a.jsx)("div",{className:"inline-flex items-center px-4 py-2 bg-red-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest animate-pulse",children:"Please, connect to the internet to continue"})})]})}},1329:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});n(7294);var r=n(5893);const o=function(e){return(0,r.jsx)("div",{className:"text-center text-lg text-gray-500 w-full max-w-xl leading-loose",children:(0,r.jsx)("h1",{className:"text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-500",children:"JS CMS"})})}},8920:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(7294),o=n(5893),i=["label","name","className","errors","disable","readonly","must","focus","autocomplete"];function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l=function(e){var t=e.label,n=e.name,a=e.className,c=e.errors,l=void 0===c?[]:c,f=e.disable,p=e.readonly,d=e.must,y=e.focus,h=e.autocomplete,m=u(e,i),b=(0,r.useRef)();return(0,r.useEffect)((function(){y&&b.current.focus()}),[]),(0,o.jsxs)("div",{className:a,children:[t&&(0,o.jsxs)("label",{className:"block font-medium text-sm text-gray-600",htmlFor:n,children:[t," ",1==d&&(0,o.jsx)("span",{className:"text-red-700",children:"*"})]}),(0,o.jsx)("input",s(s({ref:b,id:n,name:n},m),{},{className:"shadow-none appearance-none border rounded w-full py-2 px-2 text-gray-500 leading-tight focus:outline-none focus:border-gray-300 ".concat(l.length?"border border-red-500":""),disabled:f,readOnly:p,autoComplete:h?"on":"off"})),l&&(0,o.jsx)("div",{className:"text-red-500 text-xs italic",children:l[0]})]})}},2703:(e,t,n)=>{"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:(e,t,n)=>{e.exports=n(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4764:(e,t,n)=>{"use strict";t.B6=t.vk=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(7294),a=n(5697),s=(r=a)&&r.__esModule?r:{default:r};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f="undefined"!=typeof navigator,p=function(e){var t=e.url,n=e.timeout;return new Promise((function(e){var r=function(){return e(!1)},o=new XMLHttpRequest;o.onerror=r,o.ontimeout=r,o.onreadystatechange=function(){o.readyState===o.HEADERS_RECEIVED&&(o.status?e(!0):r())},o.open("GET",t),o.timeout=n,o.send()}))},d={children:s.default.node,onChange:s.default.func,polling:s.default.oneOfType([s.default.shape({url:s.default.string,interval:s.default.number,timeout:s.default.number}),s.default.bool]),wrapperType:s.default.string},y={polling:!0,wrapperType:"span"},h={enabled:f&&/Windows.*Chrome|Windows.*Firefox|Linux.*Chrome/.test(navigator.userAgent),url:"https://httpbin.org/get",timeout:5e3,interval:5e3},m=function(e){function t(){c(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={online:!f||"boolean"!=typeof navigator.onLine||navigator.onLine},e.goOnline=e.goOnline.bind(e),e.goOffline=e.goOffline.bind(e),e}return l(t,e),o(t,[{key:"componentDidMount",value:function(){window.addEventListener("online",this.goOnline),window.addEventListener("offline",this.goOffline),this.getPollingConfig().enabled&&this.startPolling()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("online",this.goOnline),window.removeEventListener("offline",this.goOffline),this.pollingId&&this.stopPolling()}},{key:"renderChildren",value:function(){var e=this.props,t=e.children,n=e.wrapperType;return(0,i.isValidElement)(t)?t:t?i.createElement.apply(void 0,[n,{}].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(i.Children.toArray(t)))):null}},{key:"getPollingConfig",value:function(){switch(this.props.polling){case!0:return h;case!1:return{enabled:!1};default:return Object.assign({},h,this.props.polling)}}},{key:"goOnline",value:function(){this.state.online||(this.callOnChangeHandler(!0),this.setState({online:!0}))}},{key:"goOffline",value:function(){this.state.online&&(this.callOnChangeHandler(!1),this.setState({online:!1}))}},{key:"callOnChangeHandler",value:function(e){this.props.onChange&&this.props.onChange(e)}},{key:"startPolling",value:function(){var e=this,t=this.getPollingConfig().interval;this.pollingId=setInterval((function(){var t=e.getPollingConfig(),n=t.url,r=t.timeout;p({url:n,timeout:r}).then((function(t){t?e.goOnline():e.goOffline()}))}),t)}},{key:"stopPolling",value:function(){clearInterval(this.pollingId)}}]),t}(i.Component);m.propTypes=d,m.defaultProps=y;var b=t.vk=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),o(t,[{key:"render",value:function(){return this.state.online?this.renderChildren():null}}]),t}(m);b.propTypes=d,b.defaultProps=y;var g=t.B6=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),o(t,[{key:"render",value:function(){return this.state.online?null:this.renderChildren()}}]),t}(m);g.propTypes=d,g.defaultProps=y;var v=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),o(t,[{key:"render",value:function(){return this.props.render({online:this.state.online})}}]),t}(m);v.propTypes=Object.assign({},d,{render:s.default.func.isRequired}),v.defaultProps=y},9590:e=>{var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,c,u,l;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!i(e[u[c]],a[u[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},4593:(e,t,n)=>{"use strict";n.d(t,{Z:()=>me});var r,o,i,a,s=n(5697),c=n.n(s),u=n(3524),l=n.n(u),f=n(9590),p=n.n(f),d=n(7294),y=n(7418),h=n.n(y),m="bodyAttributes",b="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",T="href",j="http-equiv",x="innerHTML",C="itemprop",P="name",E="property",S="rel",A="src",k="target",_={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",I="defer",L="encodeSpecialCharacters",R="onChangeClientState",M="titleTemplate",D=Object.keys(_).reduce((function(e,t){return e[_[t]]=t,e}),{}),H=[v.NOSCRIPT,v.SCRIPT,v.STYLE],Z="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,v.TITLE),n=Q(e,M);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,N);return t||r||void 0},V=function(e){return Q(e,R)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],c=s.toLowerCase();-1===t.indexOf(c)||n===S&&"canonical"===e[n].toLowerCase()||c===S&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||s!==x&&s!==w&&s!==C||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],c=h()({},r[s],o[s]);r[s]=c}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ce(v.BODY,r),ce(v.HTML,o),se(f,p);var d={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,i),metaTags:ue(v.META,a),noscriptTags:ue(v.NOSCRIPT,s),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,l)},y={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),c(e,y,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ce(v.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Z),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var c=a[s],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===o.indexOf(c)&&o.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(Z):n.getAttribute(Z)!==a.join(",")&&n.setAttribute(Z,a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===x)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(Z,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Z]=!0,o=fe(n,r),[d.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+z(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case m:case b:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[Z]=!0,r);return Object.keys(t).forEach((function(e){var n=_[e]||e;if(n===x||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),d.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===x||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(v.BASE,t,r),bodyAttributes:pe(m,n,r),htmlAttributes:pe(b,o,r),link:pe(v.LINK,i,r),meta:pe(v.META,a,r),noscript:pe(v.NOSCRIPT,s,r),script:pe(v.SCRIPT,c,r),style:pe(v.STYLE,u,r),title:pe(v.TITLE,{title:f,titleAttributes:p},r)}},ye=l()((function(e){return{baseTag:G([T,k],e),bodyAttributes:$(m,e),defer:Q(e,I),encode:Q(e,L),htmlAttributes:$(b,e),linkTags:J(v.LINK,[S,T],e),metaTags:J(v.META,[P,O,j,E,C],e),noscriptTags:J(v.NOSCRIPT,[x],e),onChangeClientState:V(e),scriptTags:J(v.SCRIPT,[A,x],e),styleTags:J(v.STYLE,[w],e),title:K(e),titleAttributes:$(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),he=(o=ye,a=i=function(e){function t(){return q(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return U({},o,((t={})[r.type]=a,t.titleAttributes=U({},i),t));case v.BODY:return U({},o,{bodyAttributes:U({},i)});case v.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.createElement(o,r)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;const me=he},3524:(e,t,n)=>{"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function l(){c=e(u.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",s),f}}}}]);
//# sourceMappingURL=605.js.map?id=8e881cc6e18c3e17