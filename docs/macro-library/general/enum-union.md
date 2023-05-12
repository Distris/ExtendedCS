# EnumUnion

**Usable on**: `struct`, `class`

Creates a union from the enums that you specify in `toMerge`.

The types of the enums must match and the cases must not have same values.

:::note
Because enums can't be `partial` in C# we must attach this attribute onto a `struct` or a `class` and an `enum` is generated inside that.
:::

#### Example

```cs
public enum BuildRegularType { 
  Development = 0, Stage = 1, Production = 2
}
public enum BuildSpecialType {
  MapEditor = 100
}

[EnumUnion(toMerge: new[] { typeof(BuildRegularType), typeof(BuildSpecialType) })]
public static partial class BuildType {}
```

This will generate:
- Enum `BuildType.Value` that will have `Development`, `Stage`, `Production`, `MapEditor` cases.
- Extension methods `toBuildType` that can convert `BuildRegularType` and `BuildSpecialType` to `BuildType.Value`.
- Extension methods `toBuildRegularType` and `toBuildSpecialType` that can convert the `BuildType.Value` to `BuildRegularType?` and `BuildSpecialType?` respectively.
- An inlined `foldM` extension method:

  ```cs
  R foldM<R>(
    this BuildType.Value value, 
    Func<BuildRegularType, R> onBuildRegularType,
    Func<BuildSpecialType, R> onBuildSpecialType
  )
  ```

## Parameters

### `name`

Specifies the name of the generated union enum.

**Default:** `Value`

```cs
[EnumUnion(
  name: "MergedEnum",
  toMerge: new[] { typeof(BuildRegularType), typeof(BuildSpecialType) }
)]
public static partial class BuildType {}
```

### `accessibilityModifier`

If specified changes the accessibility of the generated enum. 

**Default:** same accessibility as the type that the attribute is attached to.

```cs
[EnumUnion(
  accessibilityModifier: "protected",
  toMerge: new[] { typeof(BuildRegularType), typeof(BuildSpecialType) }
)]
public static partial class BuildType {}
```