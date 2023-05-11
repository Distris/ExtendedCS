"use strict";(self.webpackChunkcsharp_extended_compiler=self.webpackChunkcsharp_extended_compiler||[]).push([[8157],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(b,c(c({ref:t},l),{},{components:r})):n.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9816:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},c="MacroException",i={unversionedId:"macros/attribute-based/macro-exception",id:"macros/attribute-based/macro-exception",title:"MacroException",description:"When you use an attribute-based macro the body of the function gets replaced. However, the C# compiler still requires us to provide some body for the function, even if it will get thrown out.",source:"@site/docs/macros/attribute-based/macro-exception.md",sourceDirName:"macros/attribute-based",slug:"/macros/attribute-based/macro-exception",permalink:"/docs/macros/attribute-based/macro-exception",draft:!1,editUrl:"https://github.com/distris/ExtendedCS/tree/main/docs/macros/attribute-based/macro-exception.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Attribute-Based Macros",permalink:"/docs/macros/attribute-based/"},next:{title:"ExpressionMacro",permalink:"/docs/macros/attribute-based/expression-macro"}},s={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"macroexception"},"MacroException"),(0,o.kt)("p",null,"When you use an attribute-based macro the body of the function gets replaced. However, the C# compiler still requires us to provide some body for the function, even if it will get thrown out."),(0,o.kt)("p",null,"For such functions you can just throw ",(0,o.kt)("inlineCode",{parentName:"p"},"MacroException")," as the function body, as the body will get replaced by the compiler when compiling."),(0,o.kt)("p",null,"For example this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using GenerationAttributes;\n\npublic static class AnyExts {\n  [ExpressionMacro(@"...replaced code...")]\n  public static string MacroFunction<A>(this A a) => throw new MacroException();\n}\n\nvoid UseMacroFunction() {\n  var str = foo.MacroFunction();\n}\n')),(0,o.kt)("p",null,"Will become:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"void UseMacroFunction() {\n  var str = ...replaced code...;\n}\n")),(0,o.kt)("p",null,"Thus ",(0,o.kt)("inlineCode",{parentName:"p"},"MacroException")," will never be thrown."))}d.isMDXComponent=!0}}]);