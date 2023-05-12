"use strict";(self.webpackChunkcsharp_extended_compiler=self.webpackChunkcsharp_extended_compiler||[]).push([[7104],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(y,i(i({ref:r},p),{},{components:t})):n.createElement(y,i({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},51:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const a={},i="Macro Library",c={unversionedId:"macro-library/index",id:"macro-library/index",title:"Macro Library",description:"Scriban-based and C#-based macros allow us to do a lot of things that would otherwise only be possible as compiler extensions.",source:"@site/docs/macro-library/index.md",sourceDirName:"macro-library",slug:"/macro-library/",permalink:"/docs/macro-library/",draft:!1,editUrl:"https://github.com/distris/ExtendedCS/tree/main/docs/macro-library/index.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"C# Compilation Process",permalink:"/docs/macros/csharp-compilation-process"},next:{title:"General",permalink:"/docs/macro-library/general/"}},s={},l=[],p={toc:l},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"macro-library"},"Macro Library"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/macros/scriban-based/"},"Scriban-based")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/macros/csharp-based/"},"C#-based")," macros allow us to do a lot of things that would otherwise only be possible as compiler extensions."),(0,o.kt)("p",null,"Thus the compiler comes with an open-source library of various macros that you can use."),(0,o.kt)("p",null,"Our ultimate goal is to move as much functionality from the compiler to the macro APIs as possible. This allows for end-users like you or us to easily extend or modify the provided functionality."),(0,o.kt)("p",null,"For example, ",(0,o.kt)("a",{parentName:"p",href:"/docs/macro-library/general/singleton"},(0,o.kt)("inlineCode",{parentName:"a"},"[Singleton]"))," was once a built-in compiler extension, until we added the necessary APIs that allowed it to be implemented via a ",(0,o.kt)("a",{parentName:"p",href:"/docs/macros/csharp-based/"},"C#-based macro"),"."),(0,o.kt)("p",null,"As a consequence, now it is quite easy to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"[Singleton]")," macro if it does not suit your needs perfectly, producing ",(0,o.kt)("inlineCode",{parentName:"p"},"[OurSingleton]")," that does exactly what you need."))}d.isMDXComponent=!0}}]);