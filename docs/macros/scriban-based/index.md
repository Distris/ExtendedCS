# Scriban-Based Macros

You can write your own logic using the [scriban template engine](https://github.com/scriban/scriban) with `[AttributeMacro]`.

Add this `[AttributeMacro]` attribute on your own custom attribute:
```cs
using System;
using GenerationAttributes;

[AttributeMacro(@"
  scriban code goes here
")]
public class MyAttribute : Attribute {}
```

Then your custom attribute (`[MyAttribute]` in this case) will generate new type members or extension methods when used on a type definition (class, struct or enum).

## Scriban

Scriban is a templating language, similar to PHP.

Reference links to the most useful documentation:
- [Language description](https://github.com/scriban/scriban/blob/master/doc/language.md) &mdash; describes how blocks, control statements, comments, templating works.
- [Built-in functions](https://github.com/scriban/scriban/blob/master/doc/builtins.md) &mdash; a comprehensive list of built-in functions available for you.

## Examples

```cs title="Example of a field macro"
using System;
using GenerationAttributes;

[
  AttributeMacro(@"
/// <summary>
/// <para>Sets the <see cref=""{{ field.name }}""/> value.</para>
/// </summary>
public {{ 
if field.is_static 
  'static' 
end 
}} void EDITOR_set{{ field.name | rename | pascal_case }}(
  {{ field.type | type_reduced_name }} value
) => {{ field.name }} = value;
  "), 
  AttributeUsage(AttributeTargets.Field)
]
public class EditorSetterAttribute : Attribute {}

class MyCharacterData {
  [SerializeField, EditorSetter] CharacterRole _type;
}
```

```cs title="Example of a class macro"
using System;
using GenerationAttributes;

[
  AttributeMacro(@"
public static TimeSpan {{ ourMethodBaseName }}(this short v) => 
  TimeSpan.{{ timeSpanMethodName }}(v);
public static TimeSpan {{ ourMethodBaseName }}(this ushort v) => 
  TimeSpan.{{ timeSpanMethodName }}(v);
public static TimeSpan {{ ourMethodBaseName }}(this int v) => 
  TimeSpan.{{ timeSpanMethodName }}(v);
public static TimeSpan {{ ourMethodBaseName }}(this uint v) => 
  TimeSpan.{{ timeSpanMethodName }}(v);
public static TimeSpan {{ ourMethodBaseName }}(this long v) => 
  TimeSpan.{{ timeSpanMethodName }}(v);
public static TimeSpan {{ ourMethodBaseName }}(this ulong v) => 
  TimeSpan.{{ timeSpanMethodName }}(v);
public static TimeSpan {{ ourMethodBaseName }}(this float v) => 
  TimeSpan.{{ timeSpanMethodName }}(v);
public static TimeSpan {{ ourMethodBaseName }}(this double v) => 
  TimeSpan.{{ timeSpanMethodName }}(v);

public static TimeSpan {{ ourMethodBaseName }}s(this short v) => 
  TimeSpan.{{ timeSpanMethodName }}(v);
public static TimeSpan {{ ourMethodBaseName }}s(this ushort v) => 
  TimeSpan.{{ timeSpanMethodName }}(v);
public static TimeSpan {{ ourMethodBaseName }}s(this int v) => 
  TimeSpan.{{ timeSpanMethodName }}(v);
public static TimeSpan {{ ourMethodBaseName }}s(this uint v) => 
  TimeSpan.{{ timeSpanMethodName }}(v);
public static TimeSpan {{ ourMethodBaseName }}s(this long v) => 
  TimeSpan.{{ timeSpanMethodName }}(v);
public static TimeSpan {{ ourMethodBaseName }}s(this ulong v) => 
  TimeSpan.{{ timeSpanMethodName }}(v);
public static TimeSpan {{ ourMethodBaseName }}s(this float v) => 
  TimeSpan.{{ timeSpanMethodName }}(v);
public static TimeSpan {{ ourMethodBaseName }}s(this double v) => 
  TimeSpan.{{ timeSpanMethodName }}(v);
  "),
  AttributeUsage(AttributeTargets.Class, AllowMultiple = true)
]
class GenTimeSpanHelpersAttribute : Attribute {
  /// <summary>Name of our extension, like 'milli'.</summary>
  public string ourMethodBaseName;
    
  /// <summary>Name on <see cref="TimeSpan"/>, like 'FromMilliseconds'.</summary>
  public string timeSpanMethodName;
}

[
  GenTimeSpanHelpers(
    ourMethodBaseName = "milli", 
    timeSpanMethodName = nameof(TimeSpan.FromMilliseconds)
  ),
  GenTimeSpanHelpers(
    ourMethodBaseName = "second", 
    timeSpanMethodName = nameof(TimeSpan.FromSeconds)
  ),
  GenTimeSpanHelpers(
    ourMethodBaseName = "minute", 
    timeSpanMethodName = nameof(TimeSpan.FromMinutes)
  ),
  GenTimeSpanHelpers(
    ourMethodBaseName = "hour", 
    timeSpanMethodName = nameof(TimeSpan.FromHours)
  ),
  GenTimeSpanHelpers(
    ourMethodBaseName = "day", 
    timeSpanMethodName = nameof(TimeSpan.FromDays)
  ),
] 
public static partial class TimeSpanExts {}
```

## Parameters

These parameters are always exposed to the scriban template:

### type

The current type of class/struct/enum or the containing type if your attribute is attached to a field or a property.

**Parameter type:** [Type](#type-1)

### fieldName

Refers to a field value of field `fieldName` on your custom attribute.

**Parameter type:** mapped from the C# type using the following mapping.

  | C# type | Scriban Type |
  | ------- | ------------ |
  | `bool` | [boolean](https://github.com/scriban/scriban/blob/master/doc/language.md#33-boolean) |
  | `string`  | [string](https://github.com/scriban/scriban/blob/master/doc/language.md#31-strings) |
  | numeric types (`int`, `uint`, etc.) | [number](https://github.com/scriban/scriban/blob/master/doc/language.md#32-numbers) |
  | arrays (`string[]`, `int[]`, etc.) | [array](https://github.com/scriban/scriban/blob/master/doc/language.md#6-arrays) |
  | `System.Type` | [Type](#type-1) |

For example:
```cs
[AttributeMacro(@"
{{
  # Note that by default the parameters are undefined.
  if !is_var_defined 'ParameterName'
    throw 'Please define a value for parameter ""ParameterName""'
  end
}}

public void newMethod(string {{ ParameterName }}) {
  System.Console.WriteLine($""Hi from {ParameterName}!"");
}
")]
public class MyAttribute : Attribute {
  public string ParameterName;
}
```

## Field Parameters

These parameters are only exposed if an attribute is added to a field:

```cs
[MyScribanMacro] public int MyField;
```

### field

The field that this macro is attached to. In the example case this would be the `int MyField` field.

**Parameter type:** [Field](#field-1)

## Property Parameters

These parameters are only exposed if an attribute is added to a property:

```cs
[MyScribanMacro] public int MyProperty { get; set; }
```

### property

The property that this macro is attached to. In the example case this would be the `int MyProperty` property.

**Parameter type:** [Property](#property-1)

## Field or Property Parameters

These parameters are exposed if an attribute is added to a field or property:

```cs
[MyScribanMacro] public int MyField;
[MyScribanMacro] public int MyProperty { get; set; }
```

They make writing templates which work on both fields and properties easier to write.

### field_or_prop

**Parameter type:** [`Field`](#field-1) or [`Property`](#property-1).

The respective data from either a [`field`](#field) or [`property`](#property) parameters.

## Types

In addition to built-in scriban types, the compiler defines additional types.

### EnumValue

One of the defined cases in an `enum MyEnum { Case1, Case2 }` declaration.

It has these properties exposed to scriban:
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>The fully qualified enum value name, for example <code>global::MyNamespace.MyEnum.Case1</code>.</td>
  </tr>
  <tr>
    <td>short_name</td>
    <td>string</td>
    <td>The case name without the namespace and enum name, for example <code>Case1</code>.</td>
  </tr>
  <tr>
    <td>value</td>
    <td>object</td>
    <td>Value assigned to this enum member, usually an <code>int</code>. Also see information about <a href="#underlying_enum_type">underlying enum types</a>.</td>
  </tr>
</table>

### Field

The `Field` type has these properties exposed to scriban:
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>The name of the field in C#, for example <code>MyField</code> for <code>string MyField;</code></td>
  </tr>
  <tr>
    <td>type</td>
    <td><a href="#type-1">Type</a></td>
    <td>The type of the field in C#, for example <code>string</code> for <code>string MyField;</code></td>
  </tr>
  <tr>
    <td>is_read_only</td>
    <td>boolean</td>
    <td>true if this is a readonly field, such as <code>readonly string MyField;</code></td>
  </tr>
  <tr>
    <td>is_const</td>
    <td>boolean</td>
    <td>true if this is a constant field, such as <code>const string MY_CONSTANT = "value";</code></td>
  </tr>
  <tr>
    <td>constant_value</td>
    <td>object?</td>
    <td>Constant value that we get from compiler API. Available for constant fields. For example, for <code>const string MY_CONSTANT = "value";</code> this would be <code>"value"</code>.</td>
  </tr>
  <tr>
    <td>is_property</td>
    <td>boolean</td>
    <td>Whether this is a property. Always <code>false</code>.</td>
  </tr>
  <tr>
    <td>is_field</td>
    <td>boolean</td>
    <td>Whether this is a field. Always <code>true</code>.</td>
  </tr>
  <tr>
    <td>is_method</td>
    <td>boolean</td>
    <td>Whether this is a method. Always <code>false</code>.</td>
  </tr>
  <tr>
    <td>is_static</td>
    <td>boolean</td>
    <td>Whether this is a static field, like <code>static int MyField;</code></td>
  </tr>
  <tr>
    <td>is_private</td>
    <td>boolean</td>
    <td>Whether this is a private field, like <code>private int MyField;</code></td>
  </tr>
  <tr>
    <td>is_protected</td>
    <td>boolean</td>
    <td>Whether this is a protected field, like <code>protected int MyField;</code></td>
  </tr>
  <tr>
    <td>is_internal</td>
    <td>boolean</td>
    <td>Whether this is an internal field, like <code>internal int MyField;</code></td>
  </tr>
  <tr>
    <td>is_public</td>
    <td>boolean</td>
    <td>Whether this is a public field, like <code>public int MyField;</code></td>
  </tr>
  <tr>
    <td>visibility_modifier</td>
    <td>string</td>
    <td>One of <code>public</code>, <code>private</code>, <code>protected</code>, <code>internal</code> or <code>protected internal</code>.</td>
  </tr>
  <tr>
    <td>is_abstract</td>
    <td>boolean</td>
    <td>As fields cannot be abstract in C# this is always <code>false</code>.</td>
  </tr>
  <tr>
    <td>is_virtual</td>
    <td>boolean</td>
    <td>As fields cannot be virtual in C# this is always <code>false</code>.</td>
  </tr>
</table>

### FieldOrProp

An internal structure for the compiler, obtainable from [`create_field_or_prop`](#create_field_or_prop) function, useable in [`generate_record_members`](#generate_record_members) function.

### Method

The `Method` type has these properties exposed to scriban:
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>The name of the the method in C#, for example <code>ComputeName</code> for <code>string ComputeName();</code></td>
  </tr>
  <tr>
    <td>return_type</td>
    <td><a href="#type-1">Type</a></td>
    <td>The return type of the method in C#, for example <code>string</code> for <code>string ComputeName();</code></td>
  </tr>
  <tr>
    <td>is_read_only</td>
    <td>boolean</td>
    <td>
      Indicates whether the method is readonly, i.e. whether the 'this' receiver parameter is 'ref readonly'.
      <p/>
      Returns true for readonly instance methods and accessors and for reduced extension methods with a 'this in' parameter.
    </td>
  </tr>
  <tr>
    <td>parameters</td>
    <td><a href="#parameter"><code>Parameter[]</code></a></td>
    <td>Array of C# parameters provided to this method.</td>
  </tr>
  <tr>
    <td>type_parameters</td>
    <td><a href="#type-parameter"><code>TypeParameter[]</code></a></td>
    <td>
      Array of C# type parameters provided to this generic method. If the method is non-generic, this is empty.
    </td>
  </tr>
  <tr>
    <td>is_property</td>
    <td>boolean</td>
    <td>Whether this is a property. Always <code>false</code>.</td>
  </tr>
  <tr>
    <td>is_field</td>
    <td>boolean</td>
    <td>Whether this is a field. Always <code>false</code>.</td>
  </tr>
  <tr>
    <td>is_method</td>
    <td>boolean</td>
    <td>Whether this is a method. Always <code>true</code>.</td>
  </tr>
  <tr>
    <td>is_static</td>
    <td>boolean</td>
    <td>Whether this is a static method, like <code>static int CalculateAge();</code></td>
  </tr>
  <tr>
    <td>is_private</td>
    <td>boolean</td>
    <td>Whether this is a static method, like <code>private int CalculateAge();</code></td>
  </tr>
  <tr>
    <td>is_protected</td>
    <td>boolean</td>
    <td>Whether this is a protected method, like <code>protected int CalculateAge();</code></td>
  </tr>
  <tr>
    <td>is_internal</td>
    <td>boolean</td>
    <td>Whether this is an internal method, like <code>internal int CalculateAge();</code></td>
  </tr>
  <tr>
    <td>is_public</td>
    <td>boolean</td>
    <td>Whether this is a public method, like <code>public int CalculateAge();</code></td>
  </tr>
  <tr>
    <td>visibility_modifier</td>
    <td>string</td>
    <td>One of <code>public</code>, <code>private</code>, <code>protected</code>, <code>internal</code> or <code>protected internal</code>.</td>
  </tr>
  <tr>
    <td>is_abstract</td>
    <td>boolean</td>
    <td>True if this is an abstract method, such as <code>abstract int CalculateAge();</code></td>
  </tr>
  <tr>
    <td>is_virtual</td>
    <td>boolean</td>
    <td>True if this is an virtual method, such as <code>public virtual int CalculateAge();</code></td>
  </tr>
</table>

### Parameter

Parameter provided to an <a href="https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/indexers/">indexer property</a> (see [`parameters` on `Property`](#property-indexer-parameters)) or a regular [`Method`](#method).

```cs title="Example of an indexer property"
class SampleCollection<T> {
  // Declare an array to store the data elements.
  private T[] arr = new T[100];

  // Define the indexer to allow client code to use [] notation.
  public T this[int idx] {
    get { return arr[idx]; }
    set { arr[idx] = value; }
  }
}
```

It has these properties exposed to scriban:
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>The name of the parameter, for example <code>idx</code>.</td>
  </tr>
  <tr>
    <td>type</td>
    <td><a href="#type-1">Type</a></td>
    <td>The type of the parameter, for example <code>int</code>.</td>
  </tr>
</table>

### Property

The `Property` type has these properties exposed to scriban:
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>The name of the property in C#, for example <code>MyProp</code> for <code>string MyProp &#123; get; set; }</code></td>
  </tr>
  <tr>
    <td>type</td>
    <td><a href="#type-1">Type</a></td>
    <td>The type of the property in C#, for example <code>string</code> for <code>string MyProp &#123; get; set; }</code></td>
  </tr>
  <tr>
    <td>is_read_only</td>
    <td>boolean</td>
    <td>Whether the property can only be read, for example <code>string MyProp &#123; get; }</code></td>
  </tr>
  <tr>
    <td>is_write_only</td>
    <td>boolean</td>
    <td>Whether the property can only be written, for example <code>string MyProp &#123; set; }</code></td>
  </tr>
  <tr>
    <td>has_getter</td>
    <td>boolean</td>
    <td>Whether the property has the <code>get;</code> part, for example <code>string MyProp &#123; get; }</code> or <code>string MyProp &#123; get; set; }</code></td>
  </tr>
  <tr>
    <td>has_setter</td>
    <td>boolean</td>
    <td>Whether the property has the <code>set;</code> part, for example <code>string MyProp &#123; set; }</code> or <code>string MyProp &#123; get; set; }</code></td>
  </tr>
  <tr>
    <td id="property-indexer-parameters">parameters</td>
    <td><a href="#parameter"><code>Parameter[]</code></a></td>
    <td>
      If this property is an <a href="https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/indexers/">indexer</a> (such as <code>int this[string key1, string key2] => ...;</code>), this returns an array of the parameters provided to the indexer.
    </td>
  </tr>
  <tr>
    <td>is_property</td>
    <td>boolean</td>
    <td>Whether this is a property. Always <code>true</code>.</td>
  </tr>
  <tr>
    <td>is_field</td>
    <td>boolean</td>
    <td>Whether this is a field. Always <code>false</code>.</td>
  </tr>
  <tr>
    <td>is_method</td>
    <td>boolean</td>
    <td>Whether this is a method. Always <code>false</code>.</td>
  </tr>
  <tr>
    <td>is_static</td>
    <td>boolean</td>
    <td>Whether this is a static property, like <code>static int MyProp &#123; get; set; }</code></td>
  </tr>
  <tr>
    <td>is_private</td>
    <td>boolean</td>
    <td>Whether this is a static property, like <code>private int MyProp &#123; get; set; }</code></td>
  </tr>
  <tr>
    <td>is_protected</td>
    <td>boolean</td>
    <td>Whether this is a protected property, like <code>protected int MyProp &#123; get; set; }</code></td>
  </tr>
  <tr>
    <td>is_internal</td>
    <td>boolean</td>
    <td>Whether this is an internal property, like <code>internal int MyProp &#123; get; set; }</code></td>
  </tr>
  <tr>
    <td>is_public</td>
    <td>boolean</td>
    <td>Whether this is a public property, like <code>public int MyProp &#123; get; set; }</code></td>
  </tr>
  <tr>
    <td>visibility_modifier</td>
    <td>string</td>
    <td>One of <code>public</code>, <code>private</code>, <code>protected</code>, <code>internal</code> or <code>protected internal</code>.</td>
  </tr>
  <tr>
    <td>is_abstract</td>
    <td>boolean</td>
    <td>True if this is an abstract property, such as <code>abstract int MyProp &#123; get; set; }</code></td>
  </tr>
  <tr>
    <td>is_virtual</td>
    <td>boolean</td>
    <td>True if this is an virtual property, such as <code>public virtual int MyProp &#123; get; set; }</code></td>
  </tr>
</table>

### Type

The `Type` type has these properties exposed to scriban:
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td id="type-name">name</td>
    <td>string</td>
    <td>The fully qualified type name, for example <code>global::System.Collections.Generic.List&lt;int&gt;</code>.</td>
  </tr>
  <tr>
    <td>short_name</td>
    <td>string</td>
    <td>The type name without the namespace and generic parameters, for example <code>List</code>.</td>
  </tr>
  <tr>
    <td>visibility_modifier</td>
    <td>string</td>
    <td>One of <code>public</code>, <code>private</code>, <code>protected</code>, <code>internal</code> or <code>protected internal</code>.</td>
  </tr>
  <tr>
    <td id="underlying_enum_type">underlying_enum_type</td>
    <td><code><a href="#type-1">Type?</a></code></td>
    <td>
      If this <code>Type</code> is an <code>enum</code>, then this will have the underlying type of that <code>enum</code>.
      <p/>
      For example, <code>enum MyEnum : byte &#123; Case1, Case2 }</code> has an underlying type of <code>byte</code>.
      <p/>
      <a href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/enums#192-enum-declarations"><code>enum</code>s that do not have an underlying type specified explicitly will use <code>int</code> as its underlying type</a>.
    </td>
  </tr>
</table>

### TypeParameter

A type parameter provided to a generic [`Method`](#method).

```cs title="Example of a generic method"
TDispatcher DoDispatch<TDispatcher, TEvent>(
  TDispatcher dispatcher, Action<TEvent> onEvent
)
  where TDispatcher : IDispatcher
{
  // ...
}
```

It has these properties exposed to scriban:
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>The name of the generic parameter, for example <code>TDispatcher</code> or <code>TEvent</code>.</td>
  </tr>
  <tr>
    <td>additional_constraint</td>
    <td>string?</td>
    <td>
      Indicates whether the generic parameter has any of these constraints:
      <ul>
        <li><code>struct</code> &mdash; for example in <code>where TEvent : struct</code></li>
        <li><code>class</code> &mdash; for example in <code>where TEvent : class</code></li>
        <li><code>unmanaged</code> &mdash; for example in <code>where TEvent : unmanaged</code></li>
        <li><code>null</code> otherwise</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>has_constructor_constraint</td>
    <td>boolean</td>
    <td>
      <code>true</code> if the generic parameter has the <code>where TEvent : new()</code> constaint.
    </td>
  </tr>
  <tr>
    <td>constraint_types</td>
    <td><a href="#type-1">Type[]</a></td>
    <td>
      Array of types that constrain this generic parameter, for example <code>where TEvent : IReadable, IWritable</code>.
    </td>
  </tr>
</table>


## Functions

In addition to the [built-in functions](https://github.com/scriban/scriban/blob/master/doc/builtins.md) we additionally add these functions to scriban templates.

### Case Changing Functions

These functions from [Soltys.ChangeCase](https://github.com/soltys/Soltys.ChangeCase) library are exposed to the scriban template.

- [`string sentence_case(string input, string replacement = " ")`](https://github.com/soltys/Soltys.ChangeCase#sentencecase)
- [`string camel_case(string input)`](https://github.com/soltys/Soltys.ChangeCase#camelcase)
- [`string pascal_case(string input)`](https://github.com/soltys/Soltys.ChangeCase#pascalcase)
- [`string upper_case_first(string input)`](https://github.com/soltys/Soltys.ChangeCase#uppercasefirst)
- [`string param_case(string input)`](https://github.com/soltys/Soltys.ChangeCase#paramcase)
- [`string dot_case(string input)`](https://github.com/soltys/Soltys.ChangeCase#dotcase)
- [`string swap_case(string input)`](https://github.com/soltys/Soltys.ChangeCase#swapcase)
- [`string title_case(string input)`](https://github.com/soltys/Soltys.ChangeCase#titlecase)
- [`string snake_case(string input)`](https://github.com/soltys/Soltys.ChangeCase#snakecase)
- [`string constant_case(string input)`](https://github.com/soltys/Soltys.ChangeCase#constantcase)

### add_extensions

**Function Signature**: `void add_extensions(string extensionsCode)`

Pass a string that contains extension methods, they will be parsed and added to a separate static class.

You can use [`capture` feature of scriban engine to do that conveniently](https://github.com/scriban/scriban/blob/master/doc/language.md#96-capture-variable--end).

```text title="Example"
{{ capture extensions }}
  {{ exts_type_name = type.name }}

  /// <summary>Converts a value to a single flag.</summary>
  public static {{exts_type_name}}Flags toFlags(this {{exts_type_name}} v) =>
    ({{exts_type_name}}Flags) (1{{shiftSuffix}} << (int) v);
{{ end }}

{{ add_extensions extensions }}
```

### add_interface

**Function Signature**: `void add_interface(string interfaceName)`

Adds an interface to a generated partial class.

```text title="Example"
{{
  add_interface 'IEquatable<' + (typeFor | type_reduced_name) + '>'
}}
```

### add_using

**Function Signature**: `void add_using(string usingName)`

Adds `using X;` C# directive to the generated file.

```text title="Example"
{{
  add_using 'FPCSharpUnity.core.json'
}}
```

### create_field_or_prop

**Function Signature**: <code>[FieldOrProp](#fieldorprop) create_field_or_prop([Type](#type-1) type, string name)</code>

Creates a [FieldOrProp](#fieldorprop) data structure from a field or property with the name `name` on a `type`. This data structure can only be passed to `generate_record_members`(#generate_record_members) function.

### fdqn_last

**Function Signature**: `string fdqn_last(string identifier)`

Returns the string without the namespace and generic parameters.

```text title="Example"
{{
  name = fdqn_last 'System.Collections.Generic.List<int>'
  # name = 'List'
}}
```

### find_type

**Function Signature**: <code>[Type?](#type-1) find_type(string fdqn, [Type?](#type-1) type_for_assembly = null)</code>

Tries to find a type in either a single assembly or whole compilation.

If `type_for_assembly` is provided, the search is only conducted in that assembly, otherwise all available assemblies are searched.

You can use the [`type_get_full_metadata_name`](#type_get_full_metadata_name) function to get the `fdqn` that is suitable for this function.

Returns `null` if not found.

```text title="Example"
{{
  maybeAssetRefFromType = 'Quantum.' + assetRefFromName | find_type
}}
```

### generate_record_members

**Function Signature**: <code>void generate_record_members(
&nbsp;&nbsp;([Field](#field-1)|[Property](#property-1)|[FieldOrProp](#fieldorprop))[] fields_and_props,
&nbsp;&nbsp;boolean generate_comparer = true,
&nbsp;&nbsp;boolean generate_to_string = true,
&nbsp;&nbsp;boolean generate_get_hash_code = true,
&nbsp;&nbsp;boolean constructor_flags = GenerationAttributes.ConstructorFlags.Default,
)</code>

Generates [record](../../capabilities/record/index.md) members (constructors and other functions) on the current type for `fields_and_props` that were given.

### is_var_defined

**Function Signature**: <code>boolean is_var_defined(string variable)</code>

Returns whether a variable is defined in scriban template root scope.

This is very useful in dealing with default parameters in the attributes.

```cs title="Example"
[AttributeMacro(@"
{{
  if !is_var_defined 'isSomeName'
    isSomeName = '__unsafeIsSome'
  end

  # ...
}}
")]
public class NullableTAttribute : Attribute {
  /// <summary>Name for the 'bool isSome' field. `__unsafeIsSome` by default.</summary>
  public string isSomeName;

  // ...
}
```


### rename_as_public_accessor

**Function Signature**: `string rename_as_public_accessor(string identifier)`

Renames the string according to [`[PublicAccessor]`](../../capabilities/public-accessor.md) naming rules.

```text title="Example"
{{
  public_name = rename_as_public_accessor '_MyField'
  # public_name = 'MyField'
}}
```

### throw

**Function Signature**: `void throw(string message)`

Fails the code generation and passes the error message to the compiler output.

```text title="Example"
{{
  if YourParameter > 6
    throw 'YourParameter can not be more than 6, you provided ' + YourParameter + '!'
  end
}}
```

### type_arguments

**Function Signature**: <code>[Type[]](#type-1) type_arguments([Type](#type-1) type)</code>

Returns an array of generic arguments if they exist on this type.

```text title="Example"
{{
  # type = typeof(System.Collection.Generic.List<int>)

  type_args = type_arguments type
  # type_args = [typeof(int)]
}}
```

### type_enum_value

**Function Signature**: <code>object type_enum_value([Type](#type-1) type, string name)</code>

Gets the underlying constant value for the `enum` case with the `name`.

```text title="Example"
{{
  # Given the definition:
  #   enum MyEnum { Case1 = 5, Case2 = 10 }
  #
  # type = typeof(MyEnum)

  enum_value = type_enum_value type 'Case1'
  # enum_value = 5
}}
```

### type_enum_values

**Function Signature**: <code>[EnumValue[]](#enumvalue) type_enum_values([Type](#type-1) type)</code>

Returns an array of `enum` values. Only available if `type` is an `enum` type.

```text title="Example"
{{
  # Given the definition:
  #   enum MyEnum { Case1, Case2 }
  #
  # type = typeof(MyEnum)

  enum_values = type_enum_values type
  # enum_values = [EnumValue(MyEnum.Case1), EnumValue(MyEnum.Case2)]
}}
```

### type_get_all_fields

**Function Signature**: <code>[Field[]](#field-1) type_get_all_fields(
&nbsp;&nbsp;[Type](#type-1) type, 
&nbsp;&nbsp;boolean public = true, 
&nbsp;&nbsp;boolean private = true, 
&nbsp;&nbsp;boolean protected = true, 
&nbsp;&nbsp;boolean instance = true, 
&nbsp;&nbsp;boolean static = false, 
&nbsp;&nbsp;boolean const = false
)</code>

Gets all fields of a Type. You can filter the list based on parameters.

Use the [named arguments syntax](https://github.com/scriban/scriban/blob/master/doc/language.md#named-arguments) to set up the filters.

```text title="Example"
{{
  fields = type_get_all_fields my_type static:true
}}
```

### type_get_all_methods

**Function Signature**: <code>[Method[]](#method) type_get_all_methods(
&nbsp;&nbsp;[Type](#type-1) type, 
&nbsp;&nbsp;boolean public = true, 
&nbsp;&nbsp;boolean private = true, 
&nbsp;&nbsp;boolean protected = true, 
&nbsp;&nbsp;boolean instance = true, 
&nbsp;&nbsp;boolean static = false, 
&nbsp;&nbsp;// Whether to include methods from base types.
&nbsp;&nbsp;boolean include_base_types = false,
&nbsp;&nbsp;// Whether to include methods from the implemented interfaces.
&nbsp;&nbsp;boolean include_interfaces = false
)</code>

Gets all methods of a Type. You can filter the list based on parameters.

```text title="Example"
{{
  methods = type_get_all_methods my_type static:true
}}
```

### type_get_all_properties

**Function Signature**: <code>[Property[]](#property-1) type_get_all_properties(
&nbsp;&nbsp;[Type](#type-1) type, 
&nbsp;&nbsp;boolean public = true, 
&nbsp;&nbsp;boolean private = true, 
&nbsp;&nbsp;boolean protected = true, 
&nbsp;&nbsp;boolean instance = true, 
&nbsp;&nbsp;boolean static = false, 
&nbsp;&nbsp;// Whether to include methods from base types.
&nbsp;&nbsp;boolean include_base_types = false,
&nbsp;&nbsp;// Whether to include methods from the implemented interfaces.
&nbsp;&nbsp;boolean include_interfaces = false
)</code>

Gets all properties of a Type. You can filter the list based on parameters.

```text title="Example"
{{
  properties = type_get_all_properties my_type static:true
}}
```

### type_get_descendants_in_assembly

**Function Signature**: <code>[Type[]](#type-1) type_get_descendants_in_assembly([Type](#type-1) type, [Type](#type-1) type_for_assembly = null, boolean collect_indirect_descendants = false)</code>

Gets all descendant types (types that extend the specified type) that are contained in a single assembly.

The assembly to check is taken from the `type_for_assembly` parameter. If `type_for_assembly` is not provided, then we take the assembly in which `type` is defined.

- **`collect_indirect_descendants`** - if `false`, this function will only collect direct (Level 1) descendants.

:::note
This function is not optimized so do not call it often.
:::

### type_get_field

**Function Signature**: <code>[Field](#field-1) type_get_field([Type](#type-1) type, string fieldName)</code>

Gets a field of a Type with a specified name.

```text title="Example"
{{
  field = type_get_field my_type 'MyField'
}}
```

### type_get_full_metadata_name

**Function Signature**: <code>string type_get_full_metadata_name([Type](#type-1) type)</code>

Gets the full C# metadata name that can be used in the [`find_type`](#find_type) function.

Implementation is taken from [this StackOverflow answer](https://stackoverflow.com/a/27106959).

```text title="Example"
{{
  type_metadata_name = type_get_full_metadata_name my_type
}}
```

### type_get_property

**Function Signature**: <code>[Property](#property) type_get_property([Type](#type-1) type, string propertyName)</code>

Gets a property of a Type with a specified name.

```text title="Example"
{{
  field = type_get_property my_type 'MyProperty'
}}
```

### type_get_record_members

**Function Signature**: <code>{
&nbsp;&nbsp;"all": ([Field](#field-1)|[Property](#property-1))[],
&nbsp;&nbsp;"fields": [Field](#field-1)[],
&nbsp;&nbsp;"properties": [Property](#property-1)[],
} type_get_record_members([Type](#type-1) type)</code>

Returns an object with 3 properties (`all`, `fields`, `properties`) containing members of a `type` retrieved using the same logic as a [`[Record]`](../../capabilities/record/index.md) would.

```text title="Example"
{{
  for member in (type_get_record_members of_type).all
    ...
  end
}}
```

### type_reduced_name

**Function Signature**: <code>string type_reduced_name([Type](#type-1) type)</code>

Returns a shortened string representation of a [Type](#type-1) name that is usable in the generated code without clashing with other types.

This is very useful to make generated code more readable by replacing types like `global::MyNamespace.MyClass.MyInnerClass` with just `MyClass.MyInnerclass`.

However, the substitution may not always be possible in the current context, then this just returns [`Type.name`](#type-name).
