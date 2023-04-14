"use strict";(self.webpackChunkcsharp_extended_compiler=self.webpackChunkcsharp_extended_compiler||[]).push([[5704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="C# Compilation Process",l={unversionedId:"capabilities/macros/csharp-compilation-process",id:"capabilities/macros/csharp-compilation-process",title:"C# Compilation Process",description:"Compilation Process",source:"@site/docs/capabilities/macros/csharp-compilation-process.md",sourceDirName:"capabilities/macros",slug:"/capabilities/macros/csharp-compilation-process",permalink:"/ExtendedCS/docs/capabilities/macros/csharp-compilation-process",draft:!1,editUrl:"https://github.com/distris/ExtendedCS/tree/main/docs/capabilities/macros/csharp-compilation-process.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Macros",permalink:"/ExtendedCS/docs/capabilities/macros/"},next:{title:"Attribute-Based Macros",permalink:"/ExtendedCS/docs/capabilities/macros/attribute-based/"}},s={},p=[{value:"Reading source code",id:"reading-source-code",level:2},{value:"Parsing the syntax tree",id:"parsing-the-syntax-tree",level:2},{value:"Computing the symbol tree",id:"computing-the-symbol-tree",level:2},{value:"Emitting the IL",id:"emitting-the-il",level:2},{value:"Where do our macros fit in?",id:"where-do-our-macros-fit-in",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"c-compilation-process"},"C# Compilation Process"),(0,a.kt)("p",null,"When Roslyn, the C# compiler, compiles your code, it roughly goes through these phases:"),(0,a.kt)("h2",{id:"reading-source-code"},"Reading source code"),(0,a.kt)("p",null,"The compiler reads your ",(0,a.kt)("inlineCode",{parentName:"p"},".cs")," files into the memory."),(0,a.kt)("h2",{id:"parsing-the-syntax-tree"},"Parsing the syntax tree"),(0,a.kt)("p",null,"The compiler turns the raw text into a syntax tree. Syntax items are data structures that represent the keywords and other syntax in the ",(0,a.kt)("inlineCode",{parentName:"p"},".cs")," file."),(0,a.kt)("p",null,"To see into what syntax tree the code is turned we can use the excellent ",(0,a.kt)("a",{parentName:"p",href:"https://roslynquoter.azurewebsites.net/"},"Roslyn Quoter")," or ",(0,a.kt)("a",{parentName:"p",href:"https://sharplab.io/#v2:C4LghgzsA0AmIGoA+BtA4gUwHYGED2WUATgK4DGweRAugLABQAAgMwAEADmEcAJZgA2rRgCZWABQxEIBVgG8GrIW0YBGAAysAYjynAAcmAC2GaKwAykfUYwBuBgF8gA="},"SharpLab")," tools."),(0,a.kt)("p",null,"This code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"[GenConstructor]\npublic partial class Person {\n  public string FirstName, LastName;\n}\n")),(0,a.kt)("p",null,"Turns into this syntax tree:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'CompilationUnit()\n.WithMembers(\n  SingletonList<MemberDeclarationSyntax>(\n      ClassDeclaration("Person")\n      .WithAttributeLists(\n          SingletonList<AttributeListSyntax>(\n              AttributeList(\n                  SingletonSeparatedList<AttributeSyntax>(\n                      Attribute(\n                          IdentifierName("GenConstructor")\n                      )\n                  )\n              )\n          )\n      )\n      .WithModifiers(\n          TokenList(\n              new []{\n                  Token(SyntaxKind.PublicKeyword),\n                  Token(SyntaxKind.PartialKeyword)\n              }\n          )\n      )\n      .WithMembers(\n          SingletonList<MemberDeclarationSyntax>(\n              FieldDeclaration(\n                  VariableDeclaration(\n                      PredefinedType(\n                          Token(SyntaxKind.StringKeyword)\n                      )\n                  )\n                  .WithVariables(\n                      SeparatedList<VariableDeclaratorSyntax>(\n                          new SyntaxNodeOrToken[]{\n                              VariableDeclarator(\n                                  Identifier("FirstName")\n                              ),\n                              Token(SyntaxKind.CommaToken),\n                              VariableDeclarator(\n                                  Identifier("LastName")\n                              )\n                          }\n                      )\n                  )\n              )\n              .WithModifiers(\n                  TokenList(\n                      Token(SyntaxKind.PublicKeyword)\n                  )\n              )\n          )\n      )\n  )\n)\n.NormalizeWhitespace()\n')),(0,a.kt)("p",null,"We can see that each part of the code is represented by a different node in the syntax tree:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Source Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Syntax Tree"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"class Person")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'ClassDeclaration("Person")'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"public partial")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".WithModifiers(TokenList(new []{ Token(SyntaxKind.PublicKeyword), Token(SyntaxKind.PartialKeyword) }))"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"[GenConstructor]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'.WithAttributeLists(SingletonList<AttributeListSyntax>(AttributeList(SingletonSeparatedList<AttributeSyntax>(Attribute(IdentifierName("GenConstructor"))))))'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FirstName, LastName")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'SeparatedList<VariableDeclaratorSyntax>(new SyntaxNodeOrToken[]{ VariableDeclarator(Identifier("FirstName")), Token(SyntaxKind.CommaToken), VariableDeclarator(Identifier("LastName")) })'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"public string ...")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FieldDeclaration(VariableDeclaration(PredefinedType(Token(SyntaxKind.StringKeyword))).WithVariables(...)).WithModifiers(TokenList(Token(SyntaxKind.PublicKeyword)))"))))),(0,a.kt)("h2",{id:"computing-the-symbol-tree"},"Computing the symbol tree"),(0,a.kt)("p",null,"While the syntax tree is a representation of the ",(0,a.kt)("inlineCode",{parentName:"p"},".cs")," file as compiler data structures, it has no logical relations in it. You can refer to non-existent types or fields and the syntax tree parser is happy about it."),(0,a.kt)("p",null,"Meanwhile the symbol tree is built by following the logical relations in the code. For example the compiler would know that ",(0,a.kt)("inlineCode",{parentName:"p"},"interface Foo<A>")," is a generic interface without known type parameters, while ",(0,a.kt)("inlineCode",{parentName:"p"},"void DoThings(Foo<int> foo) { ... }")," takes in an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"Foo<A>")," with a known type parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"A = int"),"."),(0,a.kt)("h2",{id:"emitting-the-il"},"Emitting the IL"),(0,a.kt)("p",null,"At this phase the compiler has your source code parsed and logically analyzed and can start emitting the IL (intermediate Language) code that makes up the resulting ",(0,a.kt)("inlineCode",{parentName:"p"},".dll")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".exe")," file."),(0,a.kt)("h2",{id:"where-do-our-macros-fit-in"},"Where do our macros fit in?"),(0,a.kt)("p",null,"We interject ourselves right before emitting the IL and allow you to modify the code that will be compiled."))}m.isMDXComponent=!0}}]);