(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(9),i=(n(0),n(179)),a=n(180),c={id:"switch",title:"Switch"},l={id:"switch",title:"Switch",description:"A basic Switch component that should render native iOS switch.",source:"@site/docs/switch.md",permalink:"/react-native-ios-kit/docs/switch",editUrl:"https://github.com/callstack/react-native-ios-kit/edit/master/website/docs/switch.md",sidebar:"docs",previous:{title:"Stepper",permalink:"/react-native-ios-kit/docs/stepper"},next:{title:"SwitchRow",permalink:"/react-native-ios-kit/docs/switch-row"}},p=[{value:"Example usage:",id:"example-usage",children:[]},{value:"Theme",id:"theme",children:[]},{value:"Props",id:"props",children:[{value:"<code>disabled</code> (optional)",id:"disabled-optional",children:[]},{value:"<code>onValueChange</code> (optional)",id:"onvaluechange-optional",children:[]},{value:"<code>trackColor</code> (optional)",id:"trackcolor-optional",children:[]},{value:"<code>style</code> (optional)",id:"style-optional",children:[]},{value:"<code>theme</code> (optional)",id:"theme-optional",children:[]},{value:"<code>thumbTintColor</code> (optional)",id:"thumbtintcolor-optional",children:[]},{value:"<code>tintColor</code> (optional)",id:"tintcolor-optional",children:[]},{value:"<code>value</code> (optional)",id:"value-optional",children:[]}]}],b={rightToc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A basic Switch component that should render native iOS switch."),Object(i.b)("img",{alt:"Switch component ",src:Object(a.a)("img/toggle-button.png")}),Object(i.b)("h3",{id:"example-usage"},"Example usage:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { Switch } from 'react-native-ios-kit';\n\n<Switch\n  value={this.state.switchValue}\n  onValueChange={value => this.setState({ switchValue: value })}\n/>\n")),Object(i.b)("h2",{id:"theme"},"Theme"),Object(i.b)("p",null,"Uses following ",Object(i.b)("inlineCode",{parentName:"p"},"theme")," properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"positiveColor")," - selected switch background color (",Object(i.b)("inlineCode",{parentName:"li"},"trackColor"),")")),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"disabled-optional"},Object(i.b)("inlineCode",{parentName:"h3"},"disabled")," (optional)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"type:")," ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"  "),Object(i.b)("p",null,"If true, disable all interactions for this component."),Object(i.b)("h3",{id:"onvaluechange-optional"},Object(i.b)("inlineCode",{parentName:"h3"},"onValueChange")," (optional)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"type:")," ",Object(i.b)("inlineCode",{parentName:"p"},"(value: boolean) => *")),Object(i.b)("p",null,"Invoked with the new value when the value changes."),Object(i.b)("h3",{id:"trackcolor-optional"},Object(i.b)("inlineCode",{parentName:"h3"},"trackColor")," (optional)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"type:")," ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\n",Object(i.b)("strong",{parentName:"p"},"default value:")," ",Object(i.b)("inlineCode",{parentName:"p"},"positiveColor")," from ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"theme.html"}),Object(i.b)("inlineCode",{parentName:"a"},"theme"))),Object(i.b)("p",null,"Background color when the switch is turned on."),Object(i.b)("h3",{id:"style-optional"},Object(i.b)("inlineCode",{parentName:"h3"},"style")," (optional)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"type:")," ",Object(i.b)("inlineCode",{parentName:"p"},"Object"),"  "),Object(i.b)("p",null,"Switch style."),Object(i.b)("h3",{id:"theme-optional"},Object(i.b)("inlineCode",{parentName:"h3"},"theme")," (optional)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"type:")," ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"theme.html"}),Object(i.b)("inlineCode",{parentName:"a"},"Theme"))),Object(i.b)("p",null,"Custom theme for component. By default provided by the ThemeProvider."),Object(i.b)("h3",{id:"thumbtintcolor-optional"},Object(i.b)("inlineCode",{parentName:"h3"},"thumbTintColor")," (optional)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"type:")," ",Object(i.b)("inlineCode",{parentName:"p"},"string")),Object(i.b)("p",null,"Color of the foreground switch grip."),Object(i.b)("h3",{id:"tintcolor-optional"},Object(i.b)("inlineCode",{parentName:"h3"},"tintColor")," (optional)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"type:")," ",Object(i.b)("inlineCode",{parentName:"p"},"string")),Object(i.b)("p",null,"Border color when the switch is turned off."),Object(i.b)("h3",{id:"value-optional"},Object(i.b)("inlineCode",{parentName:"h3"},"value")," (optional)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"type:")," ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"  "),Object(i.b)("p",null,"Switch value."))}u.isMDXComponent=!0},178:function(e,t,n){"use strict";var o=n(0),r=n(52);t.a=function(){return Object(o.useContext)(r.a)}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=o,h=u["".concat(a,".").concat(d)]||u[d]||s[d]||i;return n?r.a.createElement(h,c({ref:t},p,{components:n})):r.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(181);var o=n(178);function r(e){var t=(Object(o.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},181:function(e,t,n){"use strict";var o=n(12),r=n(24),i=n(182),a="".startsWith;o(o.P+o.F*n(183)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),o=String(e);return a?a.call(t,o,n):t.slice(n,n+o.length)===o}})},182:function(e,t,n){var o=n(79),r=n(25);e.exports=function(e,t,n){if(o(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},183:function(e,t,n){var o=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);