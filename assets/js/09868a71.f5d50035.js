"use strict";(self.webpackChunkcsharp_extended_compiler=self.webpackChunkcsharp_extended_compiler||[]).push([[5637],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,b=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return r?a.createElement(b,l(l({ref:t},m),{},{components:r})):a.createElement(b,l({ref:t},m))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2331:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:2},l="Use Case: CallerData",o={unversionedId:"capabilities/implicits/caller-data",id:"capabilities/implicits/caller-data",title:"Use Case: CallerData",description:"C# provides us with [CallerMemberNameAttribute], [CallerFilePathAttribute] and [CallerLineNumberAttribute] to get compile time information about where the function is being called from.",source:"@site/docs/capabilities/implicits/caller-data.md",sourceDirName:"capabilities/implicits",slug:"/capabilities/implicits/caller-data",permalink:"/ExtendedCS/docs/capabilities/implicits/caller-data",draft:!1,editUrl:"https://github.com/distris/ExtendedCS/tree/main/docs/capabilities/implicits/caller-data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Use Case: Dependency Injection",permalink:"/ExtendedCS/docs/capabilities/implicits/dependency-injection"},next:{title:"Use Case: Library Design",permalink:"/ExtendedCS/docs/capabilities/implicits/library-design"}},s={},c=[],m={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-case-callerdata"},"Use Case: CallerData"),(0,n.kt)("p",null,"C# provides us with ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/caller-information"},(0,n.kt)("inlineCode",{parentName:"a"},"[CallerMemberNameAttribute]"),", ",(0,n.kt)("inlineCode",{parentName:"a"},"[CallerFilePathAttribute]")," and ",(0,n.kt)("inlineCode",{parentName:"a"},"[CallerLineNumberAttribute]"))," to get compile time information about where the function is being called from."),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"interface Logger {\n  void Log(\n    string message,\n    [CallerMemberNameAttribute] string memberName = default,\n    [CallerFilePathAttribute] string filePath = default,\n    [CallerLineNumberAttribute] string lineNumber = default\n  );\n}\n")),(0,n.kt)("p",null,"This is very convenient, however, if you want to pass this information around, it is not as nice:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'void Run2(\n  [CallerMemberNameAttribute] string memberName = default,\n  [CallerFilePathAttribute] string filePath = default,\n  [CallerLineNumberAttribute] string lineNumber = default\n) {\n  logger.Log(\n    "It was really invoked from the other place.",\n    // ReSharper disable ExplicitCallerInfoArgument\n    memberName: memberName, filePath: filePath, lineNumber: lineNumber\n    // ReSharper restore ExplicitCallerInfoArgument\n  );\n}\n')),(0,n.kt)("p",null,"Using implicits, we can define a data structure like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'/// <summary>\n/// Conveniently packages data from <see cref="CallerMemberNameAttribute"/>, \n/// <see cref="CallerFilePathAttribute"/> and <see cref="CallerLineNumberAttribute"/>.\n/// </summary>\n[Record(GenerateToString = false), PublicAPI] \npublic readonly partial struct CallerData {\n  public readonly string memberName;\n  public readonly string filePath;\n  public readonly int lineNumber;\n\n  public string asString() => $"{memberName} @ {filePath}:{lineNumber}";\n  public string asShortString() => $"{memberName} @ {fileName}:{lineNumber}";\n  public override string ToString() => asString();\n\n  /// <summary>\n  /// The file name from the <see cref="filePath"/>.\n  /// <para/>\n  /// For example, if <see cref="filePath"/> is "C:\\foo\\bar\\baz.cs" then this will\n  /// be "baz.cs".\n  /// </summary>\n  public string fileName => Path.GetFileName(filePath); \n\n  /// <summary>\n  /// Creates <see cref="CallerData"/> which records the invocation line.\n  /// </summary>\n  [Implicit] public static CallerData createAtThisLine(\n    [CallerMemberName] string callerMemberName = "",\n    [CallerFilePath] string callerFilePath = "",\n    [CallerLineNumber] int callerLineNumber = 0\n  ) => new CallerData(\n    memberName: callerMemberName, \n    filePath: callerFilePath, \n    lineNumber: callerLineNumber\n  );\n}\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Take note that ",(0,n.kt)("inlineCode",{parentName:"p"},"CallerData")," also has a pretty sensible ",(0,n.kt)("inlineCode",{parentName:"p"},"ToString")," method that renders the location nicely! ;)")),(0,n.kt)("p",null,"And then redefine the ",(0,n.kt)("inlineCode",{parentName:"p"},"Logger")," like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"interface Logger {\n  void Log(string message, [Implicit] CallerData callerData = default);\n}\n")),(0,n.kt)("p",null,"Then it becomes much easier to pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"CallerData")," around:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'void Run2([Implicit] CallerData callerData = default) {\n  logger.Log("It was really invoked from the other place.");\n}\n')),(0,n.kt)("p",null,"Or even:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'[ImplicitPassThrough]\nvoid Run2() {\n  logger.Log("It was really invoked from the other place.");\n}\n')))}u.isMDXComponent=!0}}]);