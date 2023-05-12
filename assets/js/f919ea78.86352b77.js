"use strict";(self.webpackChunkcsharp_extended_compiler=self.webpackChunkcsharp_extended_compiler||[]).push([[9931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,d=p["".concat(s,".").concat(g)]||p[g]||u[g]||l;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},o="GenEnumFlags",i={unversionedId:"macro-library/general/gen-enum-flags",id:"macro-library/general/gen-enum-flags",title:"GenEnumFlags",description:"Creates an enum type with [Flags] attribute for the given enum type.",source:"@site/docs/macro-library/general/gen-enum-flags.md",sourceDirName:"macro-library/general",slug:"/macro-library/general/gen-enum-flags",permalink:"/docs/macro-library/general/gen-enum-flags",draft:!1,editUrl:"https://github.com/distris/ExtendedCS/tree/main/docs/macro-library/general/gen-enum-flags.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"ExtractXMLDocIntoConst",permalink:"/docs/macro-library/general/extract-xml-doc-into-const"},next:{title:"TODO: GenEnumXMLDocConstStrings",permalink:"/docs/macro-library/general/gen-enum-xml-doc-const-strings"}},s={},c=[{value:"Example",id:"example",level:4},{value:"Parameters",id:"parameters",level:2},{value:"<code>use64bits</code>",id:"use64bits",level:3}],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"genenumflags"},"GenEnumFlags"),(0,a.kt)("p",null,"Creates an ",(0,a.kt)("inlineCode",{parentName:"p"},"enum")," type with ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.flagsattribute?view=net-7.0"},(0,a.kt)("inlineCode",{parentName:"a"},"[Flags]"))," attribute for the given ",(0,a.kt)("inlineCode",{parentName:"p"},"enum")," type."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"[GenEnumFlags] enum SampleEnum { \n  A = 0, B = 1, C = 2, D = 3, E = 4 \n}\n")),(0,a.kt)("p",null,"Will generate:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"SampleEnumFlags")," definition:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"[Flags] enum SampleEnumFlags { \n  A = 1, B = 2, C = 4, D = 8, E = 16 \n}\n"))),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"SampleEnumFlags toFlags(this SampleEnum value)")," extension method that allows converting a value to a single flag.")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"use64bits"},(0,a.kt)("inlineCode",{parentName:"h3"},"use64bits")),(0,a.kt)("p",null,"Whether to use 64 bits (8 bytes) for the flags storage, allowing up to 64 flags."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default:")," false (uses 32 bits)"))}u.isMDXComponent=!0}}]);