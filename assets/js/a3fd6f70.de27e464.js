"use strict";(self.webpackChunkcsharp_extended_compiler=self.webpackChunkcsharp_extended_compiler||[]).push([[9366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:4},o="Parameters and Functions",s={unversionedId:"capabilities/macros/attribute-based/parameters-and-functions",id:"capabilities/macros/attribute-based/parameters-and-functions",title:"Parameters and Functions",description:"Both expression and statement macros share the same parameters and functions that you can use in them.",source:"@site/docs/capabilities/macros/attribute-based/parameters-and-functions.md",sourceDirName:"capabilities/macros/attribute-based",slug:"/capabilities/macros/attribute-based/parameters-and-functions",permalink:"/ExtendedCS/docs/capabilities/macros/attribute-based/parameters-and-functions",draft:!1,editUrl:"https://github.com/distris/ExtendedCS/tree/main/docs/capabilities/macros/attribute-based/parameters-and-functions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"StatementMacro",permalink:"/ExtendedCS/docs/capabilities/macros/attribute-based/statement-macro"},next:{title:"Use Cases",permalink:"/ExtendedCS/docs/capabilities/macros/attribute-based/use-cases"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"argumentName",id:"argumentname",level:3},{value:"uniqueId",id:"uniqueid",level:3},{value:"returnType",id:"returntype",level:3},{value:"genericX",id:"genericx",level:3},{value:"Functions",id:"functions",level:2},{value:"inline",id:"inline",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"parameters-and-functions"},"Parameters and Functions"),(0,r.kt)("p",null,"Both ",(0,r.kt)("a",{parentName:"p",href:"/ExtendedCS/docs/capabilities/macros/attribute-based/expression-macro"},"expression")," and ",(0,r.kt)("a",{parentName:"p",href:"/ExtendedCS/docs/capabilities/macros/attribute-based/statement-macro"},"statement")," macros share the same parameters and functions that you can use in them."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"These parameters (accessible via the ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ parameter }}")," syntax) are exported to the scriban template:"),(0,r.kt)("h3",{id:"argumentname"},"argumentName"),(0,r.kt)("p",null,"Refers to function argument named ",(0,r.kt)("inlineCode",{parentName:"p"},"argumentName"),"."),(0,r.kt)("p",null,"For example this type signature has two parameters, accessible as ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ dict }}")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ key }}")," respectively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public static V getOrThrowM<K, V>(this IReadOnlyDictionary<K, V> dict, K key)\n")),(0,r.kt)("h3",{id:"uniqueid"},"uniqueId"),(0,r.kt)("p",null,"An unique identifier for this macro call, can be used as a temporary variable name:"),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[ExpressionMacro(@"\n{{ dict }}.TryGetValue({{ key }}, out var {{ uniqueId }})\n  ? {{ uniqueId }}\n  : throw new System.Exception(\n    ""Can not find "" + {{ key }} + "" in the dictionary.""\n  )\n")]\npublic static V getOrThrowM<K, V>(this IReadOnlyDictionary<K, V> dict, K key) => \n  throw new MacroException();\n')),(0,r.kt)("h3",{id:"returntype"},"returnType"),(0,r.kt)("p",null,"Resolved return type of the invoked method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[ExpressionMacro(@"({{ a }}, ""The type of this method is {{ returnType }}."")")]\nstatic (A, string) identify<A>(A a) => throw new MacroException();\n\nvar tpl = identify(5);\n')),(0,r.kt)("p",null,"Compiles to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'var tpl = (5, "The type of this method is (int, string).");\n')),(0,r.kt)("h3",{id:"genericx"},"genericX"),(0,r.kt)("p",null,"Resolved generic type of a generic argument named ",(0,r.kt)("inlineCode",{parentName:"p"},"X"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[ExpressionMacro(@"({{ a }}, ""The type of {{ a }} is {{ genericA }}."")")]\nstatic (A, string) identify<A>(A a) => throw new MacroException();\n\nvar tpl = identify(5);\n')),(0,r.kt)("p",null,"Compiles to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'var tpl = (5, "The type of 5 is int.");\n')),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"inline"},"inline"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"inline(string functionName, string[] args...)")," - inlines an anonymous function from the argument named ",(0,r.kt)("inlineCode",{parentName:"p"},"functionName"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[ExpressionMacro(@"\n  (({{opt}}).valueOut(out var {{uniqueId}}) \n    ? ({{inline \'ifSome\' uniqueId}}) \n    : ({{inline \'ifNone\'}}))"\n)]\npublic static void foldM<A, R>(\n  this Option<A> opt, Func<R> ifNone, Func<A, R> ifSome\n) => throw new MacroException();\n\npublic class Example {\n  public int test(Option<int> opt) => opt.foldM(\n    ifNone: () => {\n      Console.WriteLine("Warning, no value!");\n      Console.Beep();\n      return -1;\n    },\n    ifSome: value => {\n      Console.WriteLine("Received a value!");\n      Console.WriteLine(value);\n      return value;\n    }\n  );\n}\n')),(0,r.kt)("p",null,"Compiles to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'public class Example {\n  public int test(Option<int> opt) {\n    return ((opt).valueOut(out var id_373_660) \n      ? (_LOCAL_ifSome_527_653(id_373_660)) \n      : (_LOCAL_ifNone_399_510()));\n\n    int _LOCAL_ifNone_399_510() {\n      Console.WriteLine("Warning, no value!");\n      Console.Beep();\n      return -1;\n    }\n\n    int _LOCAL_ifSome_527_653(int value) {\n      Console.WriteLine("Received a value!");\n      Console.WriteLine(value);\n      return value;\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);