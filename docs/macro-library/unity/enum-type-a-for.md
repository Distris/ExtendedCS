# TODO: EnumTypeAFor

**Usable on:** `struct`, `class`

This attribute generates a partial class or struct with serializable fields for each given enum's value.

Make sure each enum value have a numerical value assigned (`EnumValue = 1, ...`), because they are serialized using
that numerical value. This allows us to easily rename enum values.

You need to put this attribute on the partial class or struct which will later have code generated inside of it.

:::info
This is similar to [`[EnumTypeA]`](./enum-type-a.md), however this allows you to put the attribute on your own type which is useful if you want to generate the data structure for `enum` which you can not modify.
:::

```cs title="Example"
[Serializable, EnumTypeAFor(enumType: typeof(EnumType))]
public partial class EnumTypeClassA<A> {}

// OR

[Serializable, EnumTypeAFor(
  enumType: typeof(RangedWeaponType),
  serializationMappingFro: new[]{"previousNameFoo", "previousNameBar"},
  serializationMappingTo: new Type[]{RangedWeaponType.Primary, RangedWeaponType.Secondary}
)]
public partial class EnumTypeClassA<A> {}
```