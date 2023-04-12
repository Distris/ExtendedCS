"use strict";(self.webpackChunkcsharp_extended_compiler=self.webpackChunkcsharp_extended_compiler||[]).push([[9754],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3203:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:3},o="Use Case: Library Design",s={unversionedId:"capabilities/implicits/library-design",id:"capabilities/implicits/library-design",title:"Use Case: Library Design",description:"Having implicit resolution in the language opens us new interesting paths on how to design developer-friendly libraries in C#.",source:"@site/docs/capabilities/implicits/library-design.md",sourceDirName:"capabilities/implicits",slug:"/capabilities/implicits/library-design",permalink:"/ExtendedCS/docs/capabilities/implicits/library-design",draft:!1,editUrl:"https://github.com/distris/ExtendedCS/tree/main/docs/capabilities/implicits/library-design.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Use Case: CallerData",permalink:"/ExtendedCS/docs/capabilities/implicits/caller-data"},next:{title:"Macros",permalink:"/ExtendedCS/docs/capabilities/macros/"}},l={},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-case-library-design"},"Use Case: Library Design"),(0,i.kt)("p",null,"Having implicit resolution in the language opens us new interesting paths on how to design developer-friendly libraries in C#."),(0,i.kt)("p",null,"Lets analyze a JSON serialization library. In a nutshell, a JSON serializer is essentially a function from a value of some type ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonValue"),"."),(0,i.kt)("p",null,"We can represent it as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public delegate JsonValue JsonSerializer<in A>(A value);\n")),(0,i.kt)("p",null,"When writing such a library you, as a library author, will provide the code necessary to serialize the standard types, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"long"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", etc."),(0,i.kt)("p",null,"However, a question rises - how do you handle serialization for custom types?"),(0,i.kt)("p",null,"There are essentially two ways."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Accept a value and determine whether you can serialize it in runtime."),(0,i.kt)("p",{parentName:"li"},"The type signature for this approach would be:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"void field<A>(string fieldName, A value);\n// or\nvoid field<A>(string fieldName, object value);\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Accept a value and a serializer for that value, ensuring the correctness at compile-time."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"void field<A>(string fieldName, A value, JsonSerializer<A> serializer);\n")))),(0,i.kt)("p",null,"The standard practice in C# libraries is runtime-based approach. For example, it is the approach used by ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/converters-how-to?pivots=dotnet-7-0"},"Microsoft")," or ",(0,i.kt)("a",{parentName:"p",href:"https://www.newtonsoft.com/json/help/html/ContractResolver.htm"},"Newtonsoft JSON"),"."),(0,i.kt)("p",null,"We feel that this approach is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Brittle - you will only know if something is broken in runtime."),(0,i.kt)("li",{parentName:"ul"},"Disconnected - the configuration of the serializer is somewhere far away in the code from the actual usage of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Serialize")," function.")),(0,i.kt)("p",null,"Having implicits allow us to design our libraries around the concept of compile-time implicit resolution and still provide great developer experience."),(0,i.kt)("p",null,"For example, the interface for a low-level high-performance JSON serializer in our library looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'/// <summary>\n/// A low-level interface for effective value serialization to JSON.\n/// <para/>\n/// You probably want to use <see cref="JsonWriterFor{A}"/>, <see cref="StringBuilderJsonWriter"/> and\n/// <see cref="JsonWriterExts.writeAsJson{A}"/>.\n/// <para/>\n/// Also see the `StringBuilderJsonWriterTest.cs` in the test suite for examples on how to use this.\n/// </summary>\n[PublicAPI] public interface JsonWriter {\n  void write(bool value);\n  void write(char value);\n  void write(string value);\n  void write(long value);\n  void write(ulong value);\n  void write(double value);\n  void writeNull();\n  \n  /// <summary>\n  /// Starts to write a JSON object by emitting \'{\'. Ends the object with \'}\' when the <see cref="IDisposable"/> is\n  /// disposed.\n  /// </summary>\n  ForObject startObject();\n\n  /// <summary>\n  /// Starts to write a JSON object by emitting \'[\'. Ends the object with \']\' when the <see cref="IDisposable"/> is\n  /// disposed.\n  /// </summary>\n  ForArray startArray();\n  \n  [PublicAPI] public interface ForObject : IDisposable {\n    /// <summary>\n    /// Emits a key-value pair into the JSON.\n    /// </summary>\n    /// <example>\n    /// To write: <code><![CDATA["name":"John"]]></code>\n    /// <br/>\n    /// Use:\n    /// <code><![CDATA[\n    /// writer.field(nameof(name), name);\n    /// ]]></code>\n    /// </example>\n    void field<A>(string fieldName, A value, [Implicit] JsonWriterFor<A> writerFor = null);\n    \n    /// <summary>\n    /// Notifies that the next item we are going to write is a JSON array.\n    /// </summary>\n    /// <note>\n    /// A preferred way to do this is to have <see cref="JsonWriterForArray{A}"/> defined for the type and then just\n    /// use <see cref="field{A}"/>.\n    /// </note>\n    /// <example>\n    /// To write: <code><![CDATA["intArray": [1, 2, 3]]]></code>\n    /// <br/>\n    /// Use:\n    /// <code><![CDATA[\n    /// using (var arrayWriter = writer.arrayField(nameof(intArray))) {\n    ///   foreach (var v in intArray) arrayWriter.item(v);\n    /// }\n    /// ]]></code>\n    /// </example>\n    ForArray arrayField(string fieldName);\n    \n    /// <summary>\n    /// Notifies that the next item we are going to write is a JSON object.\n    /// </summary>\n    /// <note>\n    /// A preferred way to do this is to have <see cref="JsonWriterForObject{A}"/> defined for the type and then just\n    /// use <see cref="field{A}"/>.\n    /// </note>\n    /// <example>\n    /// To write: <code><![CDATA["bar":{"intVal":3,"stringVal":"some value"}]]></code>\n    /// <br/>\n    /// Use:\n    /// <code><![CDATA[\n    /// using (var objWriter = writer.objectField(nameof(bar))) {\n    ///   objWriter.field(nameof(bar.intVal), bar.intVal);\n    ///   objWriter.field(nameof(bar.stringVal), bar.stringVal);\n    /// }\n    /// ]]></code>\n    /// </example>\n    ForObject objectField(string fieldName);\n  }\n  \n  [PublicAPI] public interface ForArray : IDisposable {\n    /// <summary>\n    /// Writes an item. Adds the item separators (\',\') if you invoke this more than once.\n    /// </summary>\n    void item<A>(A value, [Implicit] JsonWriterFor<A> writerFor = null);\n    \n    /// <summary>Notifies that the next item we are going to write is a JSON array.</summary>\n    /// <note>\n    /// A preferred way to do this is to have <see cref="JsonWriterForArray{A}"/> defined for the type and then just\n    /// use <see cref="item{A}"/>.\n    /// </note>\n    /// <example>\n    /// To write: <code><![CDATA[[1, 2, 3]]]></code>\n    /// <br/>\n    /// Use:\n    /// <code><![CDATA[\n    /// using (var arrayWriter = writer.arrayItem()) {\n    ///   foreach (var v in intArray) arrayWriter.item(v);\n    /// }\n    /// ]]></code>\n    /// </example>\n    ForArray arrayItem();\n    \n    /// <summary>Notifies that the next item we are going to write is a JSON object.</summary>\n    /// <note>\n    /// A preferred way to do this is to have <see cref="JsonWriterForObject{A}"/> defined for the type and then just\n    /// use <see cref="item{A}"/>.\n    /// </note>\n    /// <example>\n    /// To write: <code><![CDATA[{"intVal":3,"stringVal":"some value"}]]></code>\n    /// <br/>\n    /// Use:\n    /// <code><![CDATA[\n    /// using (var objWriter = writer.objectItem()) {\n    ///   objWriter.field(nameof(bar.intVal), bar.intVal);\n    ///   objWriter.field(nameof(bar.stringVal), bar.stringVal);\n    /// }\n    /// ]]></code>\n    /// </example>\n    ForObject objectItem();\n  }\n}\n')),(0,i.kt)("p",null,"The use site is very simple as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'[Record] public sealed partial class SimpleObject {\n  public readonly int intValue;\n  public readonly Amount amount;\n  public readonly string name;\n\n  public sealed partial class JsonWriterFor : JsonWriterForObject<SimpleObject> {\n    [Implicit] \n    public static readonly JsonWriterFor<SimpleObject> instance = new JsonWriterFor();\n\n    public void write(SimpleObject value, JsonWriter.ForObject writer) {\n      writer.field(nameof(intValue), value.intValue);\n      writer.field(nameof(amount), value.amount);\n      writer.field(nameof(name), value.name);\n    }\n  }\n}\n\n[Test] \npublic void TestSimpleObject() {\n  var obj = new SimpleObject(10, new Amount(5), "John Smith");\n  obj.writeAsJson(writer);\n  writer.toJson().shouldEqual(@"{""intValue"":10,""amount"":5,""name"":""John Smith""}");\n}\n')),(0,i.kt)("p",null,"Which then gets transformed to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'public sealed partial class JsonWriterFor : JsonWriterForObject<SimpleObject> {\n  public void write(SimpleObject value, JsonWriter.ForObject writer) {\n    writer.field(\n      nameof(intValue), value.intValue, \n      writerFor: JsonWriterFor_.JsonWriterFor_int.instance\n    );\n    writer.field(\n      nameof(amount), value.amount, \n      writerFor: Amount.JsonWriterFor.instance\n    );\n    writer.field(\n      nameof(name), value.name, \n      writerFor: JsonWriterFor_.JsonWriterFor_string.instance\n    );\n  }\n}\n\n[Test]\npublic void TestSimpleObject() {\n  var obj = new SimpleObject(10, new Amount(5), "John Smith");\n  obj.writeAsJson(writer, writerFor: SimpleObject.JsonWriterFor.instance);\n  writer.toJson().shouldEqual(@"{""intValue"":10,""amount"":5,""name"":""John Smith""}");\n}\n')))}u.isMDXComponent=!0}}]);