---
sidebar_position: 5
---

# Use Cases

[Expression](./expression-macro.md) and [statement](./statement-macro.md) macros are incredibly useful in these scenarios.

## Reducing boilerplate

Frequently used pieces of code can be encoded as macro functions.

Some examples:
```cs
/// <summary>
/// Allows you to write `Ref.refMacro(RenderTexture.active)` instead of
/// `Ref.a(() => RenderTexture.active, v => RenderTexture.active = v)`.
/// </summary>
[ExpressionMacro("Ref.a(() => ${a}, v => ${a} = v)")]
public static Ref<A> refMacro<A>(A a) => 
  throw new MacroException();

/// <summary>
/// Uses a macro to capture an address of the given parameter.
/// <para/>
/// Equivalent to <![CDATA[ `PtrOf.a(&value)` ]]>. 
/// </summary>
[ExpressionMacro(@"PtrOf.a(&${a})")]
public static PtrOf<A> toPtrOf<A>(this A a) where A : unmanaged => 
  throw new MacroException();

/// <summary>
/// Returns <see cref="ArgumentOutOfRangeException"/> that references a given value.
/// </summary>
/// <example><code><![CDATA[
/// var type = stringValue switch {
///   "Steve" => ..., 
///   "Bob" => ..., 
///   _ => throw stringValue.argumentOutOfRange()
/// };
/// ]]></code></example>
[ExpressionMacro(
  @"new System.ArgumentOutOfRangeException(""${a}"", ${a}, ""unknown value"")"
)]
public static ArgumentOutOfRangeException argumentOutOfRange<A>(this A a) => 
  throw new MacroException();
```

## Giving new language capabilities to C#

For example, C# does not support extension methods on pointers, however we can do this:
```cs
struct Inventory { 
  // This requires a pointer.
  public static WeaponStatePtr inHandsInner(Inventory* inventory) {
    ...
  }

  /// <summary>
  /// This function only works if <see cref="Inventory"/> is a pointer.
  /// </summary>
  [ExpressionMacro(@"Inventory." + nameof(inHandsInner) + "(&${this})")]
  public WeaponStatePtr inHandsPtr() => 
    throw new MacroException();
}
```

And then you can invoke it:
```cs
var weaponStatePtr = c->CharacterEF->inventory.inHandsPtr()
```

Another example of this is giving C# the [`?` operator from Rust](https://doc.rust-lang.org/std/result/#the-question-mark-operator-).

```cs
public static class EitherExts {
  /// <summary>
  /// Uses a macro to rewrite code so it:
  /// <list type="bullet">
  /// <item>
  ///   If the <see cref="Either{A,B}"/> is `Right`, assigns the value
  ///   in `Right` to the `var`.
  /// </item>
  /// <item>
  ///   If the <see cref="Either{A,B}"/> is `Left`, return value in 
  ///   `Left` from the scope.
  /// </item>
  /// </list>
  /// This method is useful when you need this specific pattern because the resulting code 
  /// after macro rewrite is very fast imperative code. 
  /// </summary>
  [VarMacro(@"
    var {{ uniqueId }} = {{ either }};
    if (!{{ uniqueId }}.rightValueOut(out {{ varType }} {{ varName }})) 
      return {{ uniqueId }}.__unsafeGetLeft;"
  )]
  public static B rightOr_RETURN<A, B>(this Either<A, B> either) => 
    throw new MacroException();
}
```

Which is then usable like this:
```cs
public string getString(Either<string, int> either) {
  // Will return the `string` in the `Left` side if the `Either` is a `Left`.
  var someInt = either.rightOr_RETURN();
  return someInt.ToString();
}

// `getString` is equivalent to this method:
public string getStringImperative(Either<string, int> either) {
  if (!either.rightValueOut(out var someInt)) return either.__unsafeGetLeft;
  return someInt.ToString();
}
```

## Providing great developer experience while retaining performance of imperative code

`inline` allows us to have nice anonymous-function based APIs which are then compiled down to imperative code and the cost of closure allocation and virtual delegate dispatch are eliminated.

## Inlining performance-sensitive code with `inline`

```cs
/// <summary>
/// Code copied from <see cref="FrameBase.TryFindAsset{T}(Quantum.AssetGuid,out T)"/>, 
/// inlined with a macro for maximum performance. Note that <see cref="id"/> must be 
/// an already resolved value, as it is inlined.
/// </summary>
/// <returns>Will return `null` if the asset is not found.</returns>
[ExpressionMacro(
  @"({{ id }}.IsDynamic 
    ? _dynamicAssetDB.FindAsset({{ id }}) 
    : Context.AssetDB.FindAsset({{ id }}, mainThread: true))"
)]
static AssetObject findOrNull(AssetGuid id) => 
  throw new MacroException();
```