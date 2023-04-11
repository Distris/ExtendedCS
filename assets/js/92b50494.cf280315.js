"use strict";(self.webpackChunkcsharp_extended_compiler=self.webpackChunkcsharp_extended_compiler||[]).push([[2232],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,m=u["".concat(p,".").concat(d)]||u[d]||y[d]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},i="LazyProperty",c={unversionedId:"capabilities/lazy-property",id:"capabilities/lazy-property",title:"LazyProperty",description:"[LazyProperty] makes the property calculated only on first access and then cached as a field in the type.",source:"@site/docs/capabilities/lazy-property.md",sourceDirName:"capabilities",slug:"/capabilities/lazy-property",permalink:"/ExtendedCS/docs/capabilities/lazy-property",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"GenConstructor",permalink:"/ExtendedCS/docs/capabilities/gen-constructor"},next:{title:"Implicits",permalink:"/ExtendedCS/docs/capabilities/implicits/"}},p={},l=[],s={toc:l},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lazyproperty"},"LazyProperty"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[LazyProperty]")," makes the property calculated only on first access and then cached as a field in the type."),(0,a.kt)("p",null,"Therefore, this code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public class People {\n  public readonly ImmutableList<Person> Everyone;\n\n  [LazyProperty] public int TotalAge => Everyone.Select(p => p.Age).Sum();\n}\n")),(0,a.kt)("p",null,"Gets transformed into:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public class People {\n  public readonly ImmutableList<Person> Everyone;\n\n  int? __lazy_value_TotalAge;\n  public int TotalAge => __lazy_value_TotalAge ??= Everyone.Select(p => p.Age).Sum();\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The caching is not thread-safe."),(0,a.kt)("p",{parentName:"admonition"},"However, given that your get-only properties should not do any side-effects, the worst thing that can happen is that, if two threads access it at the same time, it will be calculated twice, wasting some CPU cycles.")))}y.isMDXComponent=!0}}]);