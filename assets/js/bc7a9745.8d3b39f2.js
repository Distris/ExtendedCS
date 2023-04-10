"use strict";(self.webpackChunkcsharp_extended_compiler=self.webpackChunkcsharp_extended_compiler||[]).push([[371],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="GenConstructor",s={unversionedId:"capabilities/gen-constructor",id:"capabilities/gen-constructor",title:"GenConstructor",description:"GenConstructor] is a weaker case of [[Record].",source:"@site/docs/capabilities/gen-constructor.md",sourceDirName:"capabilities",slug:"/capabilities/gen-constructor",permalink:"/ExtendedCS/docs/capabilities/gen-constructor",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Record",permalink:"/ExtendedCS/docs/capabilities/records"},next:{title:"LazyProperty",permalink:"/ExtendedCS/docs/capabilities/lazy-property"}},c={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"genconstructor"},"GenConstructor"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[GenConstructor]")," is a weaker case of ",(0,a.kt)("a",{parentName:"p",href:"/ExtendedCS/docs/capabilities/records"},(0,a.kt)("inlineCode",{parentName:"a"},"[Record]")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"using GenerationAttributes;\n\n[GenConstructor]\npublic partial class Person {\n  public string FirstName, LastName;\n}\n")),(0,a.kt)("p",null,"It generates the specified constructors for the type, without generating ",(0,a.kt)("inlineCode",{parentName:"p"},"Equals"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"GetHashCode")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ToString"),"."),(0,a.kt)("p",null,"Use it instead of writing this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"[Record(GenerateEquality = false, GenerateHashCode = false, GenerateToString = false)]\npublic partial class Person {\n  public string FirstName, LastName;\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You should use ",(0,a.kt)("inlineCode",{parentName:"p"},"[GenConstructor]")," instead of a record if your type does not implement ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/equality-comparisons#value-equality"},"structural equality semantics"),"."),(0,a.kt)("p",{parentName:"admonition"},"Usually it is because the type is a mutable container with a reference-based identity. Think two game objects: even if they have the same properties and are in the same place, they are still two distinct objects and are not equal to one another.")))}d.isMDXComponent=!0}}]);