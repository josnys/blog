(self.webpackChunk=self.webpackChunk||[]).push([[6006],{6006:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(7294),o=n(4593),a=n(1636),i=n(8920),s=n(5172),l=n(8395),c=n(4953),u=n(4498),f=n(8033),d=n(5893);const p=function(){var e=(0,a.qt)().props,t=e.auth,n=e.user,p=e.info,m=(0,a.cI)({fname:n.fname||"",lname:n.lname||"",dob:n.dob||"",sex:n.sex||"",identification:n.identification||"",identificationType:n.identificationType||"",phone:n.phone||"",address:n.address||"",username:n.username||"",current_username:n.username||"",email:n.email||"",avatar:null,selectedAvatar:null,currentAvatar:n.avatar,current_email:n.email||""}),h=m.data,y=m.setData,b=m.post,g=m.processing,v=m.errors;m.transform;return(0,d.jsxs)(r.Fragment,{children:[(0,d.jsx)(o.Z,{children:(0,d.jsx)("title",{children:"Profile"})}),(0,d.jsxs)(c.Z,{children:[(0,d.jsx)("div",{className:"md:col-span-1",children:(0,d.jsxs)("div",{className:"px-4 sm:px-0",children:[(0,d.jsx)("h3",{className:"text-lg font-medium text-gray-900",children:"Profile Information"}),(0,d.jsx)("p",{className:"mt-1 text-sm text-gray-600",children:"Update your account's profile information and email address."}),(0,d.jsxs)("div",{className:"w-full mt-3",children:[(0,d.jsx)("h3",{className:"text-md text-center text-gray-700",children:"Current Photo"}),!n.currentAvatar&&(0,d.jsx)("img",{src:"https://ui-avatars.com/api/?name=".concat(t.user.name,"&amp;color=7F9CF5&amp;background=EBF4FF"),className:"mx-auto rounded-full h-20 w-20"}),n.currentAvatar&&(0,d.jsx)("img",{src:"".concat(n.currentAvatar),className:"mx-auto rounded-full h-20 w-20"})]})]})}),(0,d.jsx)(u.Z,{children:(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b(route("admin.profile.save",n.id))},children:[(0,d.jsx)("div",{className:"px-4 py-5 sm:p-6",children:(0,d.jsx)("div",{className:"grid grid-cols-6 gap-6",children:(0,d.jsxs)("div",{className:"col-span-6 sm:col-span-4",children:[(0,d.jsx)("label",{className:"block font-medium text-sm text-gray-700",htmlFor:"avatar",children:(0,d.jsxs)("span",{children:["Avatar ",h.selectedAvatar]})}),(0,d.jsx)("div",{className:"mt-2",children:h.selectedAvatar&&(0,d.jsx)("img",{src:"".concat(h.selectedAvatar),className:"rounded-full h-20 w-20"})}),(0,d.jsx)(l.Z,{className:"w-full lg:w-1/2",label:"Select Image",name:"avatar",accept:"image/.jpg,.jpeg,.png",errors:v.avatar,value:h.avatar,onChange:function(e,t){y("selectedAvatar",t),y("avatar",e)}}),(0,d.jsx)(i.Z,{className:"form-input rounded-md shadow-sm mt-4 block w-full",label:"First Name",name:"fname",type:"text",disable:!1,readonly:!1,must:!0,errors:v.fname,value:h.fname,onChange:function(e){return y("fname",e.target.value)}}),(0,d.jsx)(i.Z,{className:"form-input rounded-md shadow-sm mt-4 block w-full",label:"Last Name",name:"lname",type:"text",disable:!1,readonly:!1,must:!0,errors:v.lname,value:h.lname,onChange:function(e){return y("lname",e.target.value)}}),(0,d.jsx)(i.Z,{className:"form-input rounded-md shadow-sm mt-4 block w-full",label:"Date of Birth",name:"dob",type:"date",disable:!1,readonly:!1,must:!0,errors:v.dob,value:h.dob,onChange:function(e){return y("dob",e.target.value)}}),(0,d.jsxs)(s.Z,{className:"flex-shrink w-5/6 inline-block relative mt-4 mr-2",label:"Sex",name:"sex",must:!1,errors:v.sex,value:h.sex,onChange:function(e){return y("sex",e.target.value)},children:[(0,d.jsx)("option",{value:"",children:"Select Sex"}),p.sexes.map((function(e,t){return(0,d.jsx)("option",{value:e.code,children:e.name},"s".concat(t))}))]}),(0,d.jsxs)(s.Z,{className:"flex-shrink w-5/6 inline-block relative mt-4 mr-2",label:"Identification Type",name:"identificationType",must:!1,errors:v.identificationType,value:h.identificationType,onChange:function(e){return y("identityType",e.target.value)},children:[(0,d.jsx)("option",{value:"",children:"Select Identification Type"}),p.identityType.map((function(e,t){return(0,d.jsx)("option",{value:e.code,children:e.name},"it".concat(t))}))]}),(0,d.jsx)(i.Z,{className:"form-input rounded-md shadow-sm mt-4 block w-full",label:"Identification No",name:"identification",type:"text",disable:!1,readonly:!1,must:!0,errors:v.identification,value:h.identification,onChange:function(e){return y("identification",e.target.value)}}),(0,d.jsx)(i.Z,{className:"form-input rounded-md shadow-sm mt-4 block w-full",label:"Phone",name:"phone",type:"text",disable:!1,readonly:!1,must:!0,errors:v.phone,value:h.phone,onChange:function(e){return y("phone",e.target.value)}}),(0,d.jsx)(i.Z,{className:"form-input rounded-md shadow-sm mt-4 block w-full",label:"Address",name:"address",type:"text",disable:!1,readonly:!1,must:!0,errors:v.address,value:h.address,onChange:function(e){return y("address",e.target.value)}}),(0,d.jsx)(i.Z,{className:"form-input rounded-md shadow-sm mt-4 block w-full",label:"Username",name:"username",type:"text",disable:!1,readonly:!1,must:!0,errors:v.username,value:h.username,onChange:function(e){return y("username",e.target.value)}}),(0,d.jsx)(i.Z,{className:"form-input rounded-md shadow-sm mt-4 block w-full",label:"Email",name:"email",type:"email",disable:!1,readonly:!1,must:!0,errors:v.email,value:h.email,onChange:function(e){return y("email",e.target.value)}})]})})}),(0,d.jsx)("div",{className:"flex items-center justify-end px-4 py-3 bg-gray-100 text-right sm:px-6 rounded-b",children:(0,d.jsx)(f.Z,{type:"submit",loading:g,className:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4",children:"Save"})})]})})]})]},"uprofile")}},4498:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});n(7294);var r=n(5893);const o=function(e){var t=e.children;return(0,r.jsx)("div",{className:"mt-5 md:mt-0 md:col-span-2 rounded bg-white shadow-md",children:t})}},8395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7294),o=n(8537),a=n(5893);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=function(e){var t=e.text,n=e.onClick;return(0,a.jsx)("button",{type:"button",className:"focus:outline-none px-4 py-1 bg-gray-600 hover:bg-gray-700 rounded-sm text-xs font-medium text-white",onClick:n,children:t})};const c=function(e){var t=e.className,n=e.name,s=e.label,c=e.accept,u=e.errors,f=void 0===u?[]:u,d=e.onChange,p=(0,r.useRef)(),m=i((0,r.useState)(null),2),h=m[0],y=m[1],b=i((0,r.useState)(null),2),g=(b[0],b[1]);return(0,a.jsxs)("div",{className:t,children:[(0,a.jsxs)("div",{className:"form-input p-0 ".concat(f.length&&"error"),children:[(0,a.jsx)("input",{id:n,ref:p,accept:c,type:"file",className:"hidden",onChange:function(e){var t=e.target.files[0],n=URL.createObjectURL(event.target.files[0]);y(t),g(n),d(t,n)}}),!h&&(0,a.jsx)("div",{className:"py-2",children:(0,a.jsx)(l,{text:s,onClick:function(){p.current.click()}})}),h&&(0,a.jsxs)("div",{className:"flex items-center justify-between p-2",children:[(0,a.jsxs)("div",{className:"flex-1 pr-1",children:[h.name,(0,a.jsxs)("span",{className:"text-gray-600 text-xs ml-1",children:["(",(0,o.Gw)(h.size),")"]})]}),(0,a.jsx)(l,{text:"Clear",onClick:function(){y(null),g(null),d(null,null),p.current.value=null}})]})]}),f.length>0&&(0,a.jsx)("div",{className:"text-red-500 text-xs italic",children:f[0]})]})}},8291:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});n(7294);var r=n(5893),o=["color","size"];function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i=function(e){var t=e.color,n=e.size;a(e,o);return(0,r.jsxs)("span",{className:"flex mx-2",children:[(0,r.jsx)("span",{className:"animate-ping absolute inline-flex h-".concat(n," w-").concat(n," rounded-full bg-").concat(t,"-300 opacity-75")}),(0,r.jsx)("span",{className:"relative inline-flex rounded-full h-".concat(n," w-").concat(n," bg-").concat(t,"-500")})]})}},8033:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(7294),o=n(4764),a=n(8291),i=n(5893),s=["loading","className","children"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const d=function(e){var t=e.loading,n=e.className,l=e.children,u=f(e,s);return(0,i.jsxs)(r.Fragment,{children:[(0,i.jsxs)(o.vk,{children:[(0,i.jsx)("button",c(c({disabled:t,className:"focus:outline-none flex items-center ".concat(n," ").concat(t?"hidden":"block")},u),{},{children:l})),(0,i.jsxs)("div",{className:"focus:outline-none flex items-center ".concat(n," ").concat(t?"block":"hidden"),children:[(0,i.jsx)(a.Z,{color:"gray",size:"3"}),"Wait a minute.."]})]}),(0,i.jsx)(o.B6,{children:(0,i.jsx)("div",{className:"inline-flex items-center px-4 py-2 bg-red-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest animate-pulse",children:"Please, connect to the internet to continue"})})]})}},4953:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});n(7294);var r=n(5893);const o=function(e){var t=e.children;return(0,r.jsx)("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:t})}},5172:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(7294);var r=n(5893),o=["label","name","className","disable","readonly","must","focus","autocomplete","children","errors"];function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c=function(e){var t=e.label,n=e.name,a=e.className,s=e.disable,c=e.readonly,u=e.must,f=(e.focus,e.autocomplete),d=e.children,p=e.errors,m=void 0===p?[]:p,h=l(e,o);return(0,r.jsxs)("div",{className:a,children:[t&&(0,r.jsxs)("label",{className:"block font-medium text-sm text-gray-600",htmlFor:n,children:[t," ",u&&(0,r.jsx)("span",{className:"text-red-700",children:"*"})]}),(0,r.jsx)("select",i(i({id:n,name:n,disabled:s,readOnly:c,autoComplete:f?"on":"off"},h),{},{className:"shadow-none appearance-none border rounded w-full py-2 px-2 text-gray-500 leading-tight focus:outline-none focus:shadow ".concat(m.length?"border border-red-500":""),children:d})),m&&(0,r.jsx)("div",{className:"text-red-500 text-xs italic",children:m[0]})]})}},8920:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(7294),o=n(5893),a=["label","name","className","errors","disable","readonly","must","focus","autocomplete"];function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u=function(e){var t=e.label,n=e.name,i=e.className,l=e.errors,u=void 0===l?[]:l,f=e.disable,d=e.readonly,p=e.must,m=e.focus,h=e.autocomplete,y=c(e,a),b=(0,r.useRef)();return(0,r.useEffect)((function(){m&&b.current.focus()}),[]),(0,o.jsxs)("div",{className:i,children:[t&&(0,o.jsxs)("label",{className:"block font-medium text-sm text-gray-600",htmlFor:n,children:[t," ",1==p&&(0,o.jsx)("span",{className:"text-red-700",children:"*"})]}),(0,o.jsx)("input",s(s({ref:b,id:n,name:n},y),{},{className:"shadow-none appearance-none border rounded w-full py-2 px-2 text-gray-500 leading-tight focus:outline-none focus:border-gray-300 ".concat(u.length?"border border-red-500":""),disabled:f,readOnly:d,autoComplete:h?"on":"off"})),u&&(0,o.jsx)("div",{className:"text-red-500 text-xs italic",children:u[0]})]})}},8537:(e,t,n)=>{"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){var t=Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,t)).toFixed(2)+" "+["B","kB","MB","GB","TB"][t]}function a(e){var t;if(0==e.length)return"";for(var n=(r(t={á:"a",à:"a",ä:"a",â:"a",Á:"A",À:"A",Â:"A",Ä:"A",é:"e",è:"e",ë:"e",ê:"e",É:"E",È:"E",Ê:"E",Ë:"E",í:"i",ì:"i",ï:"i",î:"i",Í:"I",Ì:"I",Ï:"I",Î:"I",ö:"o",ó:"o",ò:"o",ő:"o",ô:"o"},"ö","o"),r(t,"Ö","O"),r(t,"Ó","O"),r(t,"Ő","O"),r(t,"Ô","O"),r(t,"Ö","O"),r(t,"ü","u"),r(t,"ú","u"),r(t,"ù","u"),r(t,"ű","u"),r(t,"ü","u"),r(t,"û","u"),r(t,"Ü","U"),r(t,"Ú","U"),r(t,"Ù","U"),r(t,"Ű","U"),r(t,"Û","U"),r(t,"ç","c"),r(t,"Ç","C"),r(t,"'",""),r(t,"’",""),r(t," ","-"),r(t,".","-"),t),o=Object.keys(n),a=0;a<o.length;a++){var i=o[a],s=n[i];e=e.replace(i,s)}return e.toLowerCase().replace(/[^a-z0-9_-]/gi,"")}function i(e,t){return e.can.indexOf(t)>-1}function s(e,t){var n=new Intl.NumberFormat("en-US",{style:"currency",currency:t});return e=isNaN(e)?0:e,n.format(e)}n.d(t,{BT:()=>i,Gw:()=>o,OH:()=>s,qi:()=>a})},2703:(e,t,n)=>{"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},5697:(e,t,n)=>{e.exports=n(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4764:(e,t,n)=>{"use strict";t.B6=t.vk=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(7294),i=n(5697),s=(r=i)&&r.__esModule?r:{default:r};function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f="undefined"!=typeof navigator,d=function(e){var t=e.url,n=e.timeout;return new Promise((function(e){var r=function(){return e(!1)},o=new XMLHttpRequest;o.onerror=r,o.ontimeout=r,o.onreadystatechange=function(){o.readyState===o.HEADERS_RECEIVED&&(o.status?e(!0):r())},o.open("GET",t),o.timeout=n,o.send()}))},p={children:s.default.node,onChange:s.default.func,polling:s.default.oneOfType([s.default.shape({url:s.default.string,interval:s.default.number,timeout:s.default.number}),s.default.bool]),wrapperType:s.default.string},m={polling:!0,wrapperType:"span"},h={enabled:f&&/Windows.*Chrome|Windows.*Firefox|Linux.*Chrome/.test(navigator.userAgent),url:"https://httpbin.org/get",timeout:5e3,interval:5e3},y=function(e){function t(){l(this,t);var e=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={online:!f||"boolean"!=typeof navigator.onLine||navigator.onLine},e.goOnline=e.goOnline.bind(e),e.goOffline=e.goOffline.bind(e),e}return u(t,e),o(t,[{key:"componentDidMount",value:function(){window.addEventListener("online",this.goOnline),window.addEventListener("offline",this.goOffline),this.getPollingConfig().enabled&&this.startPolling()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("online",this.goOnline),window.removeEventListener("offline",this.goOffline),this.pollingId&&this.stopPolling()}},{key:"renderChildren",value:function(){var e=this.props,t=e.children,n=e.wrapperType;return(0,a.isValidElement)(t)?t:t?a.createElement.apply(void 0,[n,{}].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(a.Children.toArray(t)))):null}},{key:"getPollingConfig",value:function(){switch(this.props.polling){case!0:return h;case!1:return{enabled:!1};default:return Object.assign({},h,this.props.polling)}}},{key:"goOnline",value:function(){this.state.online||(this.callOnChangeHandler(!0),this.setState({online:!0}))}},{key:"goOffline",value:function(){this.state.online&&(this.callOnChangeHandler(!1),this.setState({online:!1}))}},{key:"callOnChangeHandler",value:function(e){this.props.onChange&&this.props.onChange(e)}},{key:"startPolling",value:function(){var e=this,t=this.getPollingConfig().interval;this.pollingId=setInterval((function(){var t=e.getPollingConfig(),n=t.url,r=t.timeout;d({url:n,timeout:r}).then((function(t){t?e.goOnline():e.goOffline()}))}),t)}},{key:"stopPolling",value:function(){clearInterval(this.pollingId)}}]),t}(a.Component);y.propTypes=p,y.defaultProps=m;var b=t.vk=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),o(t,[{key:"render",value:function(){return this.state.online?this.renderChildren():null}}]),t}(y);b.propTypes=p,b.defaultProps=m;var g=t.B6=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),o(t,[{key:"render",value:function(){return this.state.online?null:this.renderChildren()}}]),t}(y);g.propTypes=p,g.defaultProps=m;var v=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),o(t,[{key:"render",value:function(){return this.props.render({online:this.state.online})}}]),t}(y);v.propTypes=Object.assign({},p,{render:s.default.func.isRequired}),v.defaultProps=m},9590:e=>{var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var s,l,c,u;if(Array.isArray(e)){if((s=e.length)!=i.length)return!1;for(l=s;0!=l--;)if(!a(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!a(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((s=e.length)!=i.length)return!1;for(l=s;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!a(e[c[l]],i[c[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},4593:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ye});var r,o,a,i,s=n(5697),l=n.n(s),c=n(3524),u=n.n(c),f=n(9590),d=n.n(f),p=n(7294),m=n(7418),h=n.n(m),y="bodyAttributes",b="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(v).map((function(e){return v[e]})),"charset"),x="cssText",w="href",j="http-equiv",T="innerHTML",C="itemprop",P="name",A="property",S="rel",E="src",k="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",_="defer",L="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",D=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),B=[v.NOSCRIPT,v.SCRIPT,v.STYLE],F="data-react-helmet",Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=J(e,v.TITLE),n=J(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,I);return t||r||void 0},V=function(e){return J(e,M)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var s=a[i],l=s.toLowerCase();-1===t.indexOf(l)||n===S&&"canonical"===e[n].toLowerCase()||l===S&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==T&&s!==x&&s!==C||(n=s)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var s=a[i],l=h()({},r[s],o[s]);r[s]=l}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;le(v.BODY,r),le(v.HTML,o),se(f,d);var p={baseTag:ce(v.BASE,n),linkTags:ce(v.LINK,a),metaTags:ce(v.META,i),noscriptTags:ce(v.NOSCRIPT,s),scriptTags:ce(v.SCRIPT,c),styleTags:ce(v.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(v.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(F),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),s=0;s<i.length;s++){var l=i[s],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),-1===o.indexOf(l)&&o.push(l);var u=a.indexOf(l);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(F):n.getAttribute(F)!==i.join(",")&&n.setAttribute(F,i.join(","))}},ce=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(F,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[F]=!0,o=fe(n,r),[p.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[F]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===T||n===x){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),p.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===T||e===x)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.scriptTags,c=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:de(v.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(b,o,r),link:de(v.LINK,a,r),meta:de(v.META,i,r),noscript:de(v.NOSCRIPT,s,r),script:de(v.SCRIPT,l,r),style:de(v.STYLE,c,r),title:de(v.TITLE,{title:f,titleAttributes:d},r)}},me=u()((function(e){return{baseTag:$([w,k],e),bodyAttributes:G(y,e),defer:J(e,_),encode:J(e,L),htmlAttributes:G(b,e),linkTags:X(v.LINK,[S,w],e),metaTags:X(v.META,[P,O,j,A,C],e),noscriptTags:X(v.NOSCRIPT,[T],e),onChangeClientState:V(e),scriptTags:X(v.SCRIPT,[E,T],e),styleTags:X(v.STYLE,[x],e),title:K(e),titleAttributes:G(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),pe)((function(){return null})),he=(o=me,i=a=function(e){function t(){return U(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[q({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return q({},o,((t={})[r.type]=i,t.titleAttributes=q({},a),t));case v.BODY:return q({},o,{bodyAttributes:q({},a)});case v.HTML:return q({},o,{htmlAttributes:q({},a)})}return q({},o,((n={})[r.type]=q({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=q({},t);return Object.keys(e).forEach((function(t){var r;n=q({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=q({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.createElement(o,r)},H(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(p.Component),a.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;const ye=he},3524:(e,t,n)=>{"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function u(){l=e(c.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){c.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",s),f}}}}]);
//# sourceMappingURL=6006.js.map?id=3e4406c510e7c92e