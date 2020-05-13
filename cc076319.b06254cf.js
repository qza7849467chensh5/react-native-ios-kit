(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{165:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(1),o=r(9),a=(r(0),r(179)),i=r(180),c={id:"progress-bar",title:"ProgressBar"},s={id:"progress-bar",title:"ProgressBar",description:"Displays horizontal progress bar.",source:"@site/docs/progress-view.md",permalink:"/react-native-ios-kit/docs/progress-bar",editUrl:"https://github.com/callstack/react-native-ios-kit/edit/master/website/docs/progress-view.md",sidebar:"docs",previous:{title:"PageControlView",permalink:"/react-native-ios-kit/docs/page-control-view"},next:{title:"RowItem",permalink:"/react-native-ios-kit/docs/row-item"}},p=[{value:"Example usage:",id:"example-usage",children:[]},{value:"Theme",id:"theme",children:[]},{value:"Props",id:"props",children:[{value:"<code>progress</code>",id:"progress",children:[]},{value:"<code>theme</code> (optional)",id:"theme-optional",children:[]}]}],l={rightToc:p};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Displays horizontal progress bar."),Object(a.b)("img",{alt:"ProgressBar component ",src:Object(i.a)("img/progress-bar.gif")}),Object(a.b)("h3",{id:"example-usage"},"Example usage:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { ProgressBar } from 'react-native-ios-kit';\n\n<ProgressBar progress={this.state.progress} />\n")),Object(a.b)("h2",{id:"theme"},"Theme"),Object(a.b)("p",null,"Uses following ",Object(a.b)("inlineCode",{parentName:"p"},"theme")," properties:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"primaryColor")," - color of the progress bar.")),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("h3",{id:"progress"},Object(a.b)("inlineCode",{parentName:"h3"},"progress")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"type:")," ",Object(a.b)("inlineCode",{parentName:"p"},"number")," (in range from ",Object(a.b)("inlineCode",{parentName:"p"},"0")," to ",Object(a.b)("inlineCode",{parentName:"p"},"1"),")  "),Object(a.b)("p",null,"Current value of progress."),Object(a.b)("h3",{id:"theme-optional"},Object(a.b)("inlineCode",{parentName:"h3"},"theme")," (optional)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"type:")," ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"theme.html"}),Object(a.b)("inlineCode",{parentName:"a"},"Theme"))),Object(a.b)("p",null,"Custom theme for component. By default provided by the ThemeProvider."))}u.isMDXComponent=!0},178:function(e,t,r){"use strict";var n=r(0),o=r(52);t.a=function(){return Object(n.useContext)(o.a)}},179:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return r?o.a.createElement(d,c({ref:t},p,{components:r})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},180:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(181);var n=r(178);function o(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},181:function(e,t,r){"use strict";var n=r(12),o=r(24),a=r(182),i="".startsWith;n(n.P+n.F*r(183)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,r):t.slice(r,r+n.length)===n}})},182:function(e,t,r){var n=r(79),o=r(25);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},183:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);