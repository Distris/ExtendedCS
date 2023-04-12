---
sidebar_position: 3
---

# Use Case: Library Design

Having implicit resolution in the language opens us new interesting paths on how to design developer-friendly libraries in C#.

Lets analyze a JSON serialization library. In a nutshell, a JSON serializer is essentially a function from a value of some type `A` to a `JsonValue`.

We can represent it as:
```cs
public delegate JsonValue JsonSerializer<in A>(A value);
```

When writing such a library you, as a library author, will provide the code necessary to serialize the standard types, such as `int`, `long`, `string`, etc.

However, a question rises - how do you handle serialization for custom types?

There are essentially two ways.
- Accept a value and determine whether you can serialize it in runtime.

  The type signature for this approach would be:
  ```cs
  void field<A>(string fieldName, A value);
  // or
  void field<A>(string fieldName, object value);
  ```
- Accept a value and a serializer for that value, ensuring the correctness at compile-time.

  ```cs
  void field<A>(string fieldName, A value, JsonSerializer<A> serializer);
  ```

The standard practice in C# libraries is runtime-based approach. For example, it is the approach used by [Microsoft](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/converters-how-to?pivots=dotnet-7-0) or [Newtonsoft JSON](https://www.newtonsoft.com/json/help/html/ContractResolver.htm).

We feel that this approach is:
- Brittle - you will only know if something is broken in runtime.
- Disconnected - the configuration of the serializer is somewhere far away in the code from the actual usage of the `Serialize` function.

Having implicits allow us to design our libraries around the concept of compile-time implicit resolution and still provide great developer experience.

For example, the interface for a low-level high-performance JSON serializer in our library looks like this:
```cs
/// <summary>
/// A low-level interface for effective value serialization to JSON.
/// <para/>
/// You probably want to use <see cref="JsonWriterFor{A}"/>, <see cref="StringBuilderJsonWriter"/> and
/// <see cref="JsonWriterExts.writeAsJson{A}"/>.
/// <para/>
/// Also see the `StringBuilderJsonWriterTest.cs` in the test suite for examples on how to use this.
/// </summary>
[PublicAPI] public interface JsonWriter {
  void write(bool value);
  void write(char value);
  void write(string value);
  void write(long value);
  void write(ulong value);
  void write(double value);
  void writeNull();
  
  /// <summary>
  /// Starts to write a JSON object by emitting '{'. Ends the object with '}' when the <see cref="IDisposable"/> is
  /// disposed.
  /// </summary>
  ForObject startObject();

  /// <summary>
  /// Starts to write a JSON object by emitting '['. Ends the object with ']' when the <see cref="IDisposable"/> is
  /// disposed.
  /// </summary>
  ForArray startArray();
  
  [PublicAPI] public interface ForObject : IDisposable {
    /// <summary>
    /// Emits a key-value pair into the JSON.
    /// </summary>
    /// <example>
    /// To write: <code><![CDATA["name":"John"]]></code>
    /// <br/>
    /// Use:
    /// <code><![CDATA[
    /// writer.field(nameof(name), name);
    /// ]]></code>
    /// </example>
    void field<A>(string fieldName, A value, [Implicit] JsonWriterFor<A> writerFor = null);
    
    /// <summary>
    /// Notifies that the next item we are going to write is a JSON array.
    /// </summary>
    /// <note>
    /// A preferred way to do this is to have <see cref="JsonWriterForArray{A}"/> defined for the type and then just
    /// use <see cref="field{A}"/>.
    /// </note>
    /// <example>
    /// To write: <code><![CDATA["intArray": [1, 2, 3]]]></code>
    /// <br/>
    /// Use:
    /// <code><![CDATA[
    /// using (var arrayWriter = writer.arrayField(nameof(intArray))) {
    ///   foreach (var v in intArray) arrayWriter.item(v);
    /// }
    /// ]]></code>
    /// </example>
    ForArray arrayField(string fieldName);
    
    /// <summary>
    /// Notifies that the next item we are going to write is a JSON object.
    /// </summary>
    /// <note>
    /// A preferred way to do this is to have <see cref="JsonWriterForObject{A}"/> defined for the type and then just
    /// use <see cref="field{A}"/>.
    /// </note>
    /// <example>
    /// To write: <code><![CDATA["bar":{"intVal":3,"stringVal":"some value"}]]></code>
    /// <br/>
    /// Use:
    /// <code><![CDATA[
    /// using (var objWriter = writer.objectField(nameof(bar))) {
    ///   objWriter.field(nameof(bar.intVal), bar.intVal);
    ///   objWriter.field(nameof(bar.stringVal), bar.stringVal);
    /// }
    /// ]]></code>
    /// </example>
    ForObject objectField(string fieldName);
  }
  
  [PublicAPI] public interface ForArray : IDisposable {
    /// <summary>
    /// Writes an item. Adds the item separators (',') if you invoke this more than once.
    /// </summary>
    void item<A>(A value, [Implicit] JsonWriterFor<A> writerFor = null);
    
    /// <summary>Notifies that the next item we are going to write is a JSON array.</summary>
    /// <note>
    /// A preferred way to do this is to have <see cref="JsonWriterForArray{A}"/> defined for the type and then just
    /// use <see cref="item{A}"/>.
    /// </note>
    /// <example>
    /// To write: <code><![CDATA[[1, 2, 3]]]></code>
    /// <br/>
    /// Use:
    /// <code><![CDATA[
    /// using (var arrayWriter = writer.arrayItem()) {
    ///   foreach (var v in intArray) arrayWriter.item(v);
    /// }
    /// ]]></code>
    /// </example>
    ForArray arrayItem();
    
    /// <summary>Notifies that the next item we are going to write is a JSON object.</summary>
    /// <note>
    /// A preferred way to do this is to have <see cref="JsonWriterForObject{A}"/> defined for the type and then just
    /// use <see cref="item{A}"/>.
    /// </note>
    /// <example>
    /// To write: <code><![CDATA[{"intVal":3,"stringVal":"some value"}]]></code>
    /// <br/>
    /// Use:
    /// <code><![CDATA[
    /// using (var objWriter = writer.objectItem()) {
    ///   objWriter.field(nameof(bar.intVal), bar.intVal);
    ///   objWriter.field(nameof(bar.stringVal), bar.stringVal);
    /// }
    /// ]]></code>
    /// </example>
    ForObject objectItem();
  }
}
```

The use site is very simple as well:
```cs
[Record] public sealed partial class SimpleObject {
  public readonly int intValue;
  public readonly Amount amount;
  public readonly string name;

  public sealed partial class JsonWriterFor : JsonWriterForObject<SimpleObject> {
    [Implicit] 
    public static readonly JsonWriterFor<SimpleObject> instance = new JsonWriterFor();

    public void write(SimpleObject value, JsonWriter.ForObject writer) {
      writer.field(nameof(intValue), value.intValue);
      writer.field(nameof(amount), value.amount);
      writer.field(nameof(name), value.name);
    }
  }
}

[Test] 
public void TestSimpleObject() {
  var obj = new SimpleObject(10, new Amount(5), "John Smith");
  obj.writeAsJson(writer);
  writer.toJson().shouldEqual(@"{""intValue"":10,""amount"":5,""name"":""John Smith""}");
}
```

Which then gets transformed to:
```cs
public sealed partial class JsonWriterFor : JsonWriterForObject<SimpleObject> {
  public void write(SimpleObject value, JsonWriter.ForObject writer) {
    writer.field(
      nameof(intValue), value.intValue, 
      writerFor: JsonWriterFor_.JsonWriterFor_int.instance
    );
    writer.field(
      nameof(amount), value.amount, 
      writerFor: Amount.JsonWriterFor.instance
    );
    writer.field(
      nameof(name), value.name, 
      writerFor: JsonWriterFor_.JsonWriterFor_string.instance
    );
  }
}

[Test]
public void TestSimpleObject() {
  var obj = new SimpleObject(10, new Amount(5), "John Smith");
  obj.writeAsJson(writer, writerFor: SimpleObject.JsonWriterFor.instance);
  writer.toJson().shouldEqual(@"{""intValue"":10,""amount"":5,""name"":""John Smith""}");
}
```