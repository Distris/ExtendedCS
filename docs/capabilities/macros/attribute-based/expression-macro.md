---
sidebar_position: 2
---

# ExpressionMacro

`[ExpressionMacro]` is an attribute that allows you to replace the invocation of a function with a specified body that returns an expression.

:::note
An expression is any section of the code that evaluates to a value, such as `3`, `a + b + c`, `computeValue()` or `condition ? ifTrue() : ifFalse()`.
:::

:::info
This only supports bodies that are expressions. If you need to have statement bodies, use [`[StatementMacro]`](./statement-macro.md) instead.
:::

For example, if we define such macro function:
```cs
using GenerationAttributes;

public static class AnyExts {
  /// <summary>Returns "expression=evaluated expression" string.</summary>
  [ExpressionMacro(@"(""{{a}}="" + ({{a}}))")]
  public static string echo<A>(this A a) => throw new MacroException();
}
```

Then this code:
```cs
var error = $"No such {index.echo()}. {list.Count.echo()}";
```

Will be compiled to:
```cs
var error = $"No such {("index=" + (index))}. {("list.Count=" + list.Count)}";
```

Which is equivalent to:
```cs
var error = $"No such index={index}. list.Count={list.Count}";
```

## Syntax

The pattern for `ExpressionMacro` is evaluated with [scriban](https://github.com/scriban/scriban) templating language.

```cs
[ExpressionMacro("scriban goes here")]
```

### Parameters

These parameters (accessible via the `{{ parameter }}` syntax) are exported to the template:
- `argumentName` - refers to function argument named `argumentName`.

  For example this type signature has two parameters, accessible as `{{ dict }}` and `{{ key }}` respectively:
  ```cs
  public static V getOrThrowM<K, V>(this IReadOnlyDictionary<K, V> dict, K key)
  ```

- `uniqueId` - unique identifier for this macro call, can be used as a temporary variable name:

  For example:
  ```cs
  [ExpressionMacro(@"
    {{ dict }}.TryGetValue({{ key }}, out var {{ uniqueId }})
      ? {{ uniqueId }}
      : throw new System.Exception(""Can not find "" + {{ key }} + "" in the dictionary."")
  ")]
  public static V getOrThrowM<K, V>(this IReadOnlyDictionary<K, V> dict, K key) => 
    throw new MacroException();
  ```

- `returnType` - resolved return type of the invoked method.

  ```cs
  [ExpressionMacro(@"({{ a }}, ""The type of this method is {{ returnType }}."")")]
  static (A, string) identify<A>(A a) => throw new MacroException();

  var tpl = identify(5);
  ```

  Compiles to:
  ```cs
  var tpl = (5, "The type of this method is (int, string).");
  ```

- `genericX` - resolved generic type of a generic argument named `X`.

  ```cs
  [ExpressionMacro(@"({{ a }}, ""The type of {{ a  }} is {{ genericA }}."")")]
  static (A, string) identify<A>(A a) => throw new MacroException();

  var tpl = identify(5);
  ```

  Compiles to:
  ```cs
  var tpl = (5, "The type of 5 is int.");
  ```

### Functions

- `inline(string functionName, string[] args...)` - inlines an anonymous function from the argument named `functionName`.

  Example:
  ```cs
  [ExpressionMacro(
    @"(({{opt}}).valueOut(out var {{uniqueId}}) ? ({{inline 'ifSome' uniqueId}}) : ({{inline 'ifNone'}}))"
  )]
  public static void foldM<A, R>(
    this Option<A> opt, Func<R> ifNone, Func<A, R> ifSome
  ) => throw new MacroException();

  public class Example {
    public int test(Option<int> opt) => opt.foldM(
      ifNone: () => {
        Console.WriteLine("Warning, no value!");
        Console.Beep();
        return -1;
      },
      ifSome: value => {
        Console.WriteLine("Received a value!");
        Console.WriteLine(value);
        return value;
      }
    );
  }
  ```

  Compiles to:
  ```cs
  public class Example {
    public int test(Option<int> opt) {
      return ((opt).valueOut(out var id_373_660) 
        ? (_LOCAL_ifSome_527_653(id_373_660)) 
        : (_LOCAL_ifNone_399_510()));

      int _LOCAL_ifNone_399_510() {
        Console.WriteLine("Warning, no value!");
        Console.Beep();
        return -1;
      }

      int _LOCAL_ifSome_527_653(int value) {
        Console.WriteLine("Received a value!");
        Console.WriteLine(value);
        return value;
      }
    }
  }
  ```

## Use Cases

Expression macros are incredibly useful in:
- Reducing boilerplace: often used pieces of code can be encoded as macro functions.

  Some examples:
  ```cs
  /// <summary>
  /// Allows you to write `Ref.refMacro(RenderTexture.active)` instead of
  /// `Ref.a(() => RenderTexture.active, v => RenderTexture.active = v)`.
  /// </summary>
  [ExpressionMacro("Ref.a(() => ${a}, v => ${a} = v)")]
  public static Ref<A> refMacro<A>(A a) => throw new MacroException();

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

- Giving new language capabilities to C#.

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
    public WeaponStatePtr inHandsPtr() => throw new MacroException();
  }
  ```

  And then you can invoke it:
  ```cs
  var weaponStatePtr = c->CharacterEF->inventory.inHandsPtr()
  ```

- Providing great developer experience while retaining performance of imperative code.

  `inline` allows us to have nice anonymous-function based APIs which are then compiled down to imperative code and the cost of closure allocation and virtual delegate dispatch are eliminated.

- Inlining performance-sensitive code with `inline`.

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
  static AssetObject findOrNull(AssetGuid id) => throw new MacroException();
  ```