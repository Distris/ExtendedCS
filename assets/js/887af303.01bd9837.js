"use strict";(self.webpackChunkcsharp_extended_compiler=self.webpackChunkcsharp_extended_compiler||[]).push([[5726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},i="Code Generation vs Transformation",l={unversionedId:"generation-and-transformation/index",id:"generation-and-transformation/index",title:"Code Generation vs Transformation",description:"Our compiler can do two things:",source:"@site/docs/generation-and-transformation/index.md",sourceDirName:"generation-and-transformation",slug:"/generation-and-transformation/",permalink:"/ExtendedCS/docs/generation-and-transformation/",draft:!1,editUrl:"https://github.com/distris/ExtendedCS/tree/main/docs/generation-and-transformation/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"TODO: Supported Targets",permalink:"/ExtendedCS/docs/supported-targets"},next:{title:"Compiler Capabilities",permalink:"/ExtendedCS/docs/capabilities/"}},s={},d=[{value:"Code Generation",id:"code-generation",level:2},{value:"Code Transformation",id:"code-transformation",level:2},{value:"Attaching the generated and transformed code to the IDE",id:"attaching-the-generated-and-transformed-code-to-the-ide",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"code-generation-vs-transformation"},"Code Generation vs Transformation"),(0,r.kt)("p",null,"Our compiler can do two things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate extra code to augment the compilation."),(0,r.kt)("li",{parentName:"ul"},"Rewrite existing code to transform the compilation.")),(0,r.kt)("h2",{id:"code-generation"},"Code Generation"),(0,r.kt)("p",null,"Code generation is a process when additional code is added to the source code when compiling. These could be new classes, structs or functions. For example, ",(0,r.kt)("a",{parentName:"p",href:"/ExtendedCS/docs/capabilities/record/"},(0,r.kt)("inlineCode",{parentName:"a"},"[Record]"))," attribute generates extra code, but does not touch existing code."),(0,r.kt)("p",null,"This is done by generating ",(0,r.kt)("inlineCode",{parentName:"p"},"*.partials.cs")," files which contain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"partial")," definitions of ",(0,r.kt)("inlineCode",{parentName:"li"},"class"),"es and ",(0,r.kt)("inlineCode",{parentName:"li"},"struct"),"s containing extra functions and types."),(0,r.kt)("li",{parentName:"ul"},"standalone types, such as compiler-generated ",(0,r.kt)("inlineCode",{parentName:"li"},"enum"),"s.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example generated partial file",src:n(282).Z,width:"354",height:"88"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The generated files are stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"generated-by-compiler/CS_PROJECT_NAME/partials/")," directory.")),(0,r.kt)("p",null,"The process looks like this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Analyze the source files."),(0,r.kt)("li",{parentName:"ol"},"Generate the ",(0,r.kt)("inlineCode",{parentName:"li"},".partials.cs")," files."),(0,r.kt)("li",{parentName:"ol"},"Attach them to the compilation."),(0,r.kt)("li",{parentName:"ol"},"Continue compiling.")),(0,r.kt)("h2",{id:"code-transformation"},"Code Transformation"),(0,r.kt)("p",null,"Meanwhile code transformation is a process where existing code gets rewritten. See ",(0,r.kt)("a",{parentName:"p",href:"/ExtendedCS/docs/capabilities/lazy-property"},(0,r.kt)("inlineCode",{parentName:"a"},"[LazyProperty]"))," for an example."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example transformed file",src:n(1668).Z,width:"352",height:"88"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The generated files are stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"generated-by-compiler/CS_PROJECT_NAME/macros/")," directory.")),(0,r.kt)("p",null,"The process looks like this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Analyze the source files."),(0,r.kt)("li",{parentName:"ol"},"Generate the ",(0,r.kt)("inlineCode",{parentName:"li"},".transformed.cs")," files."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Replace")," the source files with the ",(0,r.kt)("inlineCode",{parentName:"li"},".transformed.cs")," files."),(0,r.kt)("li",{parentName:"ol"},"Continue compiling.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Debugging transformed code")),(0,r.kt)("p",{parentName:"admonition"},"Take note that because your source files are ",(0,r.kt)("strong",{parentName:"p"},"not")," actually included in the compilation, nothing will happen if you will put debugger breakpoints on them."),(0,r.kt)("p",{parentName:"admonition"},"Instead you have to put the debugger breakpoints in the ",(0,r.kt)("inlineCode",{parentName:"p"},".transformed.cs")," files, as that is the code that actually got compiled.")),(0,r.kt)("h2",{id:"attaching-the-generated-and-transformed-code-to-the-ide"},"Attaching the generated and transformed code to the IDE"),(0,r.kt)("p",null,"TODO: what you need to do so that IDE would see the files."))}m.isMDXComponent=!0},282:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/partials-f78bb0ca46be55b68b17be48afaab03d.png"},1668:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transformed-8a185b05c0cb901507b87d910832cf0c.png"}}]);