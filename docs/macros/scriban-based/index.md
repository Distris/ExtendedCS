# TODO: Scriban-Based Macros

You can write your own logic using the [scriban template engine](https://github.com/scriban/scriban) with `[AttributeMacro]`.

Add this `[AttributeMacro]` attribute on your own custom attribute:
```cs
using System;

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

## Parameters

These parameters are always exposed to the scriban template:

### `type`

The current type of class/struct/enum or the containing type if your attribute is attached to a field or a property.

**Parameter type:** [Type](#type-1)

### `fieldName`

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

### `field`

The field that this macro is attached to. In the example case this would be the `int MyField` field.

**Parameter type:** [Field](#field-1)

## Property Parameters

These parameters are only exposed if an attribute is added to a property:

```cs
[MyScribanMacro] public int MyProperty { get; set; }
```

### `property`

The property that this macro is attached to. In the example case this would be the `int MyProperty` property.

**Parameter type:** [Property](#property-1)

## Field or Property Parameters

These parameters are exposed if an attribute is added to a field or property:

```cs
[MyScribanMacro] public int MyField;
[MyScribanMacro] public int MyProperty { get; set; }
```

They make writing templates which work on both fields and properties easier to write.

### `field_or_prop`

**Parameter type:** [`Field`](#field-1) or [`Property`](#property-1).

The respective data from either a [`field`](#field) or [`property`](#property) parameters.

## Types

In addition to built-in scriban types, the compiler defines additional types.

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
    <td>name</td>
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
    <td>parameters</td>
    <td><a href="#prop-param"><code>PropParam[]</code></a></td>
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

### Method

  ///   <li><b>return_type</b>: Type</li>
  ///   <li><b>is_read_only</b>: bool</li>
  ///   <li><b>parameters</b>: { name: string, type: Type }</li>
  ///   <li><b>type_parameters</b>: {
  ///     name: string,
  ///     additional_constraint: string? ("struct" | "class" | "unmanaged" | null),
  ///     has_constructor_constraint: bool,
  ///     constraint_types: Type[],
  ///   }</li>
  /// 
  ///   <li><b>is_property</b>: bool - false</li>
  ///   <li><b>is_field</b>: bool - false</li>
  ///   <li><b>is_method</b>: bool - true</li>
  ///   <li><b>is_static</b>: bool</li>
  ///   <li><b>is_abstract</b>: bool</li>
  ///   <li><b>is_virtual</b>: bool</li>
  ///   <li><b>is_private</b>: bool</li>
  ///   <li><b>is_public</b>: bool</li>
  ///   <li><b>is_internal</b>: bool</li>
  ///   <li><b>is_protected</b>: bool</li>
  ///   <li><b>visibility_modifier</b>: string = "public", "private", "protected", "internal", "protected internal",
  /// "not_applicable"</li>

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

### PropParam

Parameter provided to an <a href="https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/indexers/">indexer property</a>.

```cs
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