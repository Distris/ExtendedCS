# TODO: EnumTypeA

**Usable on:** `enum`

This attribute generates a partial definition (see `generateDataStructureType`) with serializable fields
for each of the given enum's value.

Make sure each enum value have a numerical value assigned (`EnumValue = 1, ...`), because they are serialized using
that numerical value. This allows us to easily rename enum values.

You need to place this attribute on the enum type itself.

```cs title="Example"
[EnumTypeA(GenerateDataStructureType.Class | GenerateDataStructureType.Struct)]
public enum EnumType { A, B, C }
```

:::tip
If you do not control the `enum` you want to generate the serialization code for, see [`[EnumTypeAFor]`](./enum-type-a-for.md).
:::