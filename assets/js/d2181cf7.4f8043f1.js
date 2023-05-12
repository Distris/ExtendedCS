"use strict";(self.webpackChunkcsharp_extended_compiler=self.webpackChunkcsharp_extended_compiler||[]).push([[1145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},c="ExtractXMLDocIntoConst",i={unversionedId:"macro-library/general/extract-xml-doc-into-const",id:"macro-library/general/extract-xml-doc-into-const",title:"ExtractXMLDocIntoConst",description:"Usable on: field, property, class, struct",source:"@site/docs/macro-library/general/extract-xml-doc-into-const.md",sourceDirName:"macro-library/general",slug:"/macro-library/general/extract-xml-doc-into-const",permalink:"/docs/macro-library/general/extract-xml-doc-into-const",draft:!1,editUrl:"https://github.com/distris/ExtendedCS/tree/main/docs/macro-library/general/extract-xml-doc-into-const.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"EnumUnion",permalink:"/docs/macro-library/general/enum-union"},next:{title:"GenEnumFlags",permalink:"/docs/macro-library/general/gen-enum-flags"}},l={},s=[],p={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extractxmldocintoconst"},"ExtractXMLDocIntoConst"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usable on:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"property"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"class"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"struct")),(0,o.kt)("p",null,"Extracts the XML documentation from this member to a ",(0,o.kt)("inlineCode",{parentName:"p"},"const string")," in a partial definition of this type."),(0,o.kt)("p",null,"This is useful when you want to share the XML documentation with another attribute, like ",(0,o.kt)("a",{parentName:"p",href:"https://odininspector.com/"},"Odin Inspectors")," ",(0,o.kt)("inlineCode",{parentName:"p"},"[InfoBoxAttribute]"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Example"',title:'"Example"'},"public partial class ExtractXMLDocIntoConstAttributeTest {\n  /// <summary>Example docs.</summary>\n  [ExtractXMLDocIntoConst] public string testField;\n}\n\npublic class OtherClass {\n  [OdinInspector.InfoBox(ExtractXMLDocIntoConstAttributeTest.XML_DOC_testField)] \n  public string otherField;\n}\n\n// OR\n\n/// <summary>My documentation</summary>\n[\n  ExtractXMLDocIntoConst, OdinInspector.TypeInfoBox(XML_DOC_ShowTooltipComponent)\n] public partial class ShowTooltipComponent {}\n")))}u.isMDXComponent=!0}}]);