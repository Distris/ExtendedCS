"use strict";(self.webpackChunkcsharp_extended_compiler=self.webpackChunkcsharp_extended_compiler||[]).push([[882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:0},i="Record",l={unversionedId:"capabilities/records",id:"capabilities/records",title:"Record",description:"C# 9 introduced record types into the language, while C# 10 added support for struct records as well.",source:"@site/docs/capabilities/records.md",sourceDirName:"capabilities",slug:"/capabilities/records",permalink:"/ExtendedCS/docs/capabilities/records",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Compiler Capabilities",permalink:"/ExtendedCS/docs/capabilities/"},next:{title:"GenConstructor",permalink:"/ExtendedCS/docs/capabilities/gen-constructor"}},s={},p=[{value:"Basic syntax",id:"basic-syntax",level:3},{value:"Customization",id:"customization",level:2},{value:"ConstructorFlags",id:"constructorflags",level:3},{value:"Primary Constructor",id:"primary-constructor",level:4},{value:"Apply Constructor",id:"apply-constructor",level:4},{value:"Copy constructor",id:"copy-constructor",level:4},{value:"With constructors",id:"with-constructors",level:4},{value:"Specifying multiple ConstructorFlags",id:"specifying-multiple-constructorflags",level:4},{value:"Generate* Settings",id:"generate-settings",level:3},{value:"Excluding Fields",id:"excluding-fields",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"record"},"Record"),(0,r.kt)("p",null,"C# 9 introduced ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record"},"record types")," into the language, while C# 10 added support for struct records as well."),(0,r.kt)("p",null,"While these are great, they also have a few drawbacks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"They are only available ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/2021.3/Documentation/Manual/CSharpCompiler.html"},"from Unity 2021"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"They rely on properties, which are implemented via methods accessing fields. Our records allow you to use fields\ndirectly.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"They cannot extend other classes, only other records.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Record structs cannot have mutable fields.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You cannot make a partial class or struct that was generated by an external tool into a record. For example, this\nis impossible:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"title=Foo.generated.cs",title:"Foo.generated.cs"},"public partial struct Foo {\n  // ...\n}\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"title=Foo.user.cs",title:"Foo.user.cs"},"public partial record Foo();\n")))),(0,r.kt)("p",null,"Our implementation of records provide you with a wide variety of use cases and customization options to suit\nevery situation."),(0,r.kt)("h3",{id:"basic-syntax"},"Basic syntax"),(0,r.kt)("p",null,"A record is any class or struct, annotated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"[Record]")," attribute. Conceptually you can think about records as immutable data containers which have ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/equality-comparisons#value-equality"},"structural equality semantics")," (also known as value equality)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Simple record definition"',title:'"Simple',record:!0,'definition"':!0},"using GenerationAttributes;\nusing System.Collections.Immutable;\n\n[Record]\npublic class Person {\n  public readonly string FirstName, LastName;\n  public readonly int Age;\n  public readonly ImmutableArray<Person> Children;\n}\n")),(0,r.kt)("p",null,"The compiler analyzes the type at compile time and by default:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generates a constructor that assigns all fields (read-only or mutable) and properties."),(0,r.kt)("li",{parentName:"ul"},"Implements the ",(0,r.kt)("inlineCode",{parentName:"li"},"IEquatable<Person>")," interface and provides the necessary ",(0,r.kt)("inlineCode",{parentName:"li"},"Equals")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"GetHashCode")," methods."),(0,r.kt)("li",{parentName:"ul"},"Generates a ",(0,r.kt)("inlineCode",{parentName:"li"},"ToString")," method that renders ",(0,r.kt)("inlineCode",{parentName:"li"},"IEnumerable"),"s properly.")),(0,r.kt)("p",null,"This is how the default generated code looks like for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," class defined above."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The generated code is formatted by the Roslyn compiler.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"title=Person.1.partials.cs",title:"Person.1.partials.cs"},'// ReSharper disable all\nusing GenerationAttributes;\nusing System.Collections.Immutable;\n\npublic partial class Person : System.IEquatable<Person>\n{\n    // Generated by: RecordAttribute\n    public Person(string FirstName, string LastName, int Age, System.Collections.Immutable.ImmutableArray<Person> Children)\n    {\n        this.FirstName = FirstName;\n        this.LastName = LastName;\n        this.Age = Age;\n        this.Children = Children;\n    }\n\n    public override string ToString() => "Person(FirstName: " + FirstName + ", LastName: " + LastName + ", Age: " + Age + ", Children: [" + GenerationAttributes.Helpers.enumerableToString(Children) + "])";\n\n    public override int GetHashCode()\n    {\n        unchecked\n        {\n            var hashCode = 0;\n            hashCode = (hashCode * 397) ^ (FirstName == null ? 0 : FirstName.GetHashCode());\n            hashCode = (hashCode * 397) ^ (LastName == null ? 0 : LastName.GetHashCode());\n            hashCode = (hashCode * 397) ^ (int)Age;\n            hashCode = (hashCode * 397) ^ Children.GetHashCode();\n            return hashCode;\n        }\n    }\n\n    public bool Equals(Person other)\n    {\n        if (ReferenceEquals(null, other))\n            return false;\n        if (ReferenceEquals(this, other))\n            return true;\n        return System.Object.Equals(FirstName, other.FirstName) && System.Object.Equals(LastName, other.LastName) && Age == other.Age && Children.Equals(other.Children);\n    }\n\n    public override bool Equals(object obj)\n    {\n        if (ReferenceEquals(null, obj))\n            return false;\n        if (ReferenceEquals(this, obj))\n            return true;\n        return obj is Person && Equals((Person)obj);\n    }\n\n    public static bool operator ==(Person left, Person right) => System.Object.Equals(left, right);\n    public static bool operator !=(Person left, Person right) => !System.Object.Equals(left, right);\n}\n')),(0,r.kt)("h2",{id:"customization"},"Customization"),(0,r.kt)("p",null,"While the default settings for the ",(0,r.kt)("inlineCode",{parentName:"p"},"[Record]")," usually suffice, records can customized in multiple ways."),(0,r.kt)("h3",{id:"constructorflags"},"ConstructorFlags"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ConstructorFlags")," parameter allows you to change what kind of constructors are generated."),(0,r.kt)("p",null,"There are 4 types of constructors: ",(0,r.kt)("inlineCode",{parentName:"p"},"primary"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"apply"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"copy")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"with"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Definition of ConstructorFlags"',title:'"Definition',of:!0,'ConstructorFlags"':!0},"[Flags] public enum ConstructorFlags {\n  /// <summary> Does not generate any constructors </summary>\n  None        = 0,\n  /// <summary> Generates basic constructor </summary>\n  Constructor = 1 << 0,\n  /// <summary> Generates basic constructor and `apply` constructor </summary>\n  Apply       = (1 << 1) | Constructor,\n  /// <summary> Generates basic constructor and `copy` extension </summary>\n  Copy        = (1 << 2) | Constructor,\n  /// <summary> Generates basic constructor and `with` extensions </summary>\n  Withers     = (1 << 3) | Constructor,\n  /// <summary> \n  /// Generates basic constructor, `copy` extension, `with` extensions and `apply` \n  /// constructor.\n  /// </summary>\n  All         = Constructor | Apply | Copy | Withers,\n}\n")),(0,r.kt)("h4",{id:"primary-constructor"},"Primary Constructor"),(0,r.kt)("p",null,"This is your standard constructor that you invoke using ",(0,r.kt)("inlineCode",{parentName:"p"},"new Person(...)"),"."),(0,r.kt)("h4",{id:"apply-constructor"},"Apply Constructor"),(0,r.kt)("p",null,"A static method named ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," (short for ",(0,r.kt)("inlineCode",{parentName:"p"},"apply"),") that is generated in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"if the type is non-generic: in the same type.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"if the type is generic: in a partial non-generic type."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"Person<TValue>")," would get its apply constructor generated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," type.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Apply Constructor"',title:'"Apply','Constructor"':!0},"[Record(ConstructorFlags.Apply)]\npublic partial class Person {\n  // ...\n}\n\nvar person = Person.a(/* ... */);\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Apply constructors are very useful when the type is generic. For example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[Record(ConstructorFlags.Apply)]\npublic partial class SetOf3<TValue> {\n  public readonly TValue Value1, Value2, Value3;\n}\n")),(0,r.kt)("p",{parentName:"admonition"},"If you would use the default constructor, you have to specify the generic type manually:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"var set = new SetOf3<Person>(person1, person2, person3);\n")),(0,r.kt)("p",{parentName:"admonition"},"However, the apply constructor allows you to infer the generic type from the constructor arguments:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"var set = SetOf3.a(person1, person2, person3);\n")),(0,r.kt)("p",{parentName:"admonition"},"This is especially useful, when the generic type is something long or complicated, like ",(0,r.kt)("inlineCode",{parentName:"p"},"ImmutableHashSet<Either<Person, Animal>>"),".")),(0,r.kt)("h4",{id:"copy-constructor"},"Copy constructor"),(0,r.kt)("p",null,"Copy constructors allow you to easily make copies of existing records with one or more fields changed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[Record(ConstructorFlags.Copy)] \npublic partial class Person {\n  public readonly string FirstName, LastName;\n  public readonly int Age;\n}\n\nvar p = new Person("John", "Smith", 30);\nvar p2 = p.copy(FirstName: "Steve", Age: 42);\nAssert.Equal(p2, new Person("Steve", "Smith", 42));\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you pass a nullable value (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," for reference types and ",(0,r.kt)("inlineCode",{parentName:"p"},"(System.Nullable<A>) null")," for value types) the copy constructor will keep the original field value. Thus if you want to be able to set the field value to ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", you need to use either a regular, apply or ",(0,r.kt)("inlineCode",{parentName:"p"},"with")," constructor.")),(0,r.kt)("h4",{id:"with-constructors"},"With constructors"),(0,r.kt)("p",null,"If you specify ",(0,r.kt)("inlineCode",{parentName:"p"},"ConstructorFlags.Withers"),", with-constructors will be generated. They are a specialized case of copy constructors which only replace a single field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[Record(ConstructorFlags.Withers)] \npublic partial class Person {\n  public readonly string FirstName, LastName;\n  public readonly int Age;\n}\n\nvar p = new Person("John", "Smith", 30);\nvar p2 = p.withFirstName("Steve").withAge(42);\nAssert.Equal(p2, new Person("Steve", "Smith", 42));\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Whether to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Withers")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Copy")," is usually a matter of preference. If you are changing a single field, the ",(0,r.kt)("inlineCode",{parentName:"p"},"with*")," constructor will be a tiny bit faster, as it does not have to determine which fields you want to actually replace.")),(0,r.kt)("h4",{id:"specifying-multiple-constructorflags"},"Specifying multiple ConstructorFlags"),(0,r.kt)("p",null,"You can specify any combination of ",(0,r.kt)("inlineCode",{parentName:"p"},"ConstructorFlags"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[Record(ConstructorFlags.Copy | ConstructorFlags.Apple)] \npublic partial class Person {\n  // ...\n}\n")),(0,r.kt)("h3",{id:"generate-settings"},"Generate* Settings"),(0,r.kt)("p",null,"There are 3 settings that can toggle generation of different parts of code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GenerateToString")," - controls whether ",(0,r.kt)("inlineCode",{parentName:"p"},"ToString")," should be generated."),(0,r.kt)("p",{parentName:"li"},"This is useful when you want to provide your own implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"ToString"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"title=\"Record a with manually written 'ToString()'\"",title:'"Record',a:!0,with:!0,manually:!0,written:!0,"'ToString()'\"":!0},'[Record(GenerateToString = false)]\npublic readonly partial struct Vector2 {\n  public readonly float X, Y;\n\n  public override string ToString() => $"({X}, {Y})";\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GenerateEquality")," - controls whether the type should implement ",(0,r.kt)("inlineCode",{parentName:"p"},"IEquatable")," and whether ",(0,r.kt)("inlineCode",{parentName:"p"},"Equals")," should be generated."),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is mostly useful when extending code which was generated by some 3rd-party tool which already generated the equality code."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GenerateGetHashCode")," - controls whether ",(0,r.kt)("inlineCode",{parentName:"p"},"GetHashCode")," should be generated."),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is mostly useful when extending code which was generated by some 3rd-party tool which already generated the hashing code.")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you find yourself setting all three of these to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", check out the ",(0,r.kt)("a",{parentName:"p",href:"/ExtendedCS/docs/capabilities/gen-constructor"},(0,r.kt)("inlineCode",{parentName:"a"},"[GenConstructor]"))," attribute.")),(0,r.kt)("h3",{id:"excluding-fields"},"Excluding Fields"),(0,r.kt)("p",null,"If you want to prevent a field from being included into the set of record fields, there are two ways to do that."),(0,r.kt)("p",null,"You can either use the ",(0,r.kt)("inlineCode",{parentName:"p"},"[RecordExclude]")," attribute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[Record]\npublic partial class People {\n    public readonly ImmutableList<Person> Everyone;\n\n    [RecordExclude] int? _TotalAge;\n    public int TotalAge => _TotalAge ??= Everyone.Select(p => p.Age).Sum();\n}\n")),(0,r.kt)("p",null,"Or you can list the fields you want to exclude as the parameters to the attribute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[Record(ExcludeNames = new []{ nameof(_TotalAge) })]\npublic partial class People {\n    public readonly ImmutableList<Person> Everyone;\n\n    int? _TotalAge;\n    public int TotalAge => _TotalAge ??= Everyone.Select(p => p.Age).Sum();\n}\n")))}d.isMDXComponent=!0}}]);