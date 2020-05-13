(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),i=n(9),a=(n(0),n(179)),o=n(180),c={id:"spinner",title:"Spinner"},p={id:"spinner",title:"Spinner",description:"Displays a circular loading indicator.",source:"@site/docs/spinner.md",permalink:"/react-native-ios-kit/docs/spinner",editUrl:"https://github.com/callstack/react-native-ios-kit/edit/master/website/docs/spinner.md",sidebar:"docs",previous:{title:"Slider",permalink:"/react-native-ios-kit/docs/slider"},next:{title:"Stepper",permalink:"/react-native-ios-kit/docs/stepper"}},l=[{value:"Example usage:",id:"example-usage",children:[]},{value:"Theme",id:"theme",children:[]},{value:"Props",id:"props",children:[{value:"<code>animating</code> (optional)",id:"animating-optional",children:[]},{value:"<code>hidesWhenStopped</code> (optional)",id:"hideswhenstopped-optional",children:[]},{value:"<code>size</code> (optional)",id:"size-optional",children:[]},{value:"<code>theme</code> (optional)",id:"theme-optional",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Displays a circular loading indicator."),Object(a.b)("img",{alt:"Spinner component ",src:Object(o.a)("img/spinner.gif")}),Object(a.b)("h3",{id:"example-usage"},"Example usage:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { Spinner } from 'react-native-ios-kit';\n\n<Spinner animating={this.state.loading} />\n")),Object(a.b)("h2",{id:"theme"},"Theme"),Object(a.b)("p",null,"Uses following ",Object(a.b)("inlineCode",{parentName:"p"},"theme")," properties:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"primaryColor")," - color of the Spinner.")),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("h3",{id:"animating-optional"},Object(a.b)("inlineCode",{parentName:"h3"},"animating")," (optional)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"type:")," ",Object(a.b)("inlineCode",{parentName:"p"},"boolean"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"default value:")," ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"  "),Object(a.b)("p",null,"Whether to show or hide the indicator."),Object(a.b)("h3",{id:"hideswhenstopped-optional"},Object(a.b)("inlineCode",{parentName:"h3"},"hidesWhenStopped")," (optional)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"type:")," ",Object(a.b)("inlineCode",{parentName:"p"},"boolean"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"default value:")," ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"  "),Object(a.b)("p",null,"Whether the indicator should hide when not animating."),Object(a.b)("h3",{id:"size-optional"},Object(a.b)("inlineCode",{parentName:"h3"},"size")," (optional)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"type:")," ",Object(a.b)("inlineCode",{parentName:"p"},"'small' | 'large'"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"default value:")," ",Object(a.b)("inlineCode",{parentName:"p"},"'small'"),"  "),Object(a.b)("p",null,"Size of the indicator."),Object(a.b)("h3",{id:"theme-optional"},Object(a.b)("inlineCode",{parentName:"h3"},"theme")," (optional)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"type:")," ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"theme.html"}),Object(a.b)("inlineCode",{parentName:"a"},"Theme"))),Object(a.b)("p",null,"Custom theme for component. By default provided by the ThemeProvider."))}s.isMDXComponent=!0},178:function(e,t,n){"use strict";var r=n(0),i=n(52);t.a=function(){return Object(r.useContext)(i.a)}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||a;return n?i.a.createElement(m,c({ref:t},l,{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(181);var r=n(178);function i(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},181:function(e,t,n){"use strict";var r=n(12),i=n(24),a=n(182),o="".startsWith;r(r.P+r.F*n(183)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return o?o.call(t,r,n):t.slice(n,n+r.length)===r}})},182:function(e,t,n){var r=n(79),i=n(25);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},183:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(i){}}return!0}}}]);