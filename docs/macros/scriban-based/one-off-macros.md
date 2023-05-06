---
sidebar_position: 0
---

# One-Off Macros

When using scriban-based macros with [`[AttributeMacro]`](./index.md) you need to define a custom attribute that you can then attach to a class, struct, enum, field, property or method.

However, sometimes you need to use the macro just once for a particular specific case.

In those cases instead of writing an `[AttributeMacro]` you can use `[Macro]` directly.

For example this generates the `JsonWriterForValue` instances for a set of standard types:
```cs
using GenerationAttributes;

[Macro(@"
{{
  generate_for = [
    'byte', 'sbyte', 'short', 'ushort', 'int', 'uint', 'long', 'ulong', 
    'float', 'double', 'string', 'char', 'bool'
  ]
  add_using 'GenerationAttributes'
}}

{{ for type in generate_for }}
  public sealed partial class JsonWriterFor_{{ type }} : JsonWriterForValue<{{ type }}> {
    JsonWriterFor_{{ type }}() {}

    [Implicit] public static readonly JsonWriterFor<{{ type }}> instance = 
      new JsonWriterFor_{{ type }}();

    public void write({{ type }} value, JsonWriter writer) => writer.write(value);
  }
{{ end }}
")]
public static partial class JsonWriterFor_ {}
```