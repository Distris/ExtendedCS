---
sidebar_position: 4
---

# Parameters and Functions

[Expression](./expression-macro.md), [statement](./statement-macro.md) and [var](./var-macro.md) macros share some of the parameters and functions that you can use in them.

## Parameters

These parameters (accessible via the `{{ parameter }}` syntax) are exported to the scriban template:

### self

`{{ self }}` refers to the code that allows you to access the object.

Only defined on instance methods (not static methods).

:::info
We can not use `{{ this }}` as it is [already used by scriban](https://github.com/scriban/scriban/blob/master/doc/language.md#41-the-special-variable-this).
:::

#### Example

Given:
```cs
struct Inventory {
  /// <summary> This function only works if <see cref="Inventory"/> is a pointer. </summary>
  [ExpressionMacro(@"Inventory.inHandsInner(& {{ self }})")]
  public WeaponStatePtr inHandsPtr() => throw new MacroException();
}
```

Call to:
```cs
var weaponState = you->CharacterEF->inventory.inHandsPtr();
```

Will be replaced with:
```cs
var weaponState = Inventory.inHandsInner(&you->CharacterEF->inventory);
```

### argumentName

Refers to function argument named `argumentName`.

For example this type signature has two parameters, accessible as `{{ dict }}` and `{{ key }}` respectively:
```cs
public static V getOrThrowM<K, V>(this IReadOnlyDictionary<K, V> dict, K key)
```

### genericX

Resolved generic type of a generic argument named `X`.

#### Example

```cs
[ExpressionMacro(@"({{ a }}, ""The type of {{ a }} is {{ genericA }}."")")]
static (A, string) identify<A>(A a) => throw new MacroException();

var tpl = identify(5);
```

Compiles to:
```cs
var tpl = (5, "The type of 5 is int.");
```

### uniqueId

An unique identifier for this macro call, can be used as a temporary variable name.

#### Example

```cs
[ExpressionMacro(@"
{{ dict }}.TryGetValue({{ key }}, out var {{ uniqueId }})
  ? {{ uniqueId }}
  : throw new System.Exception(
    ""Can not find "" + {{ key }} + "" in the dictionary.""
  )
")]
public static V getOrThrowM<K, V>(this IReadOnlyDictionary<K, V> dict, K key) => 
  throw new MacroException();
```

### returnType

**Only available for:** [`[ExpressionMacro]`](./expression-macro.md)

Resolved return type of the invoked method.

#### Example

```cs
[ExpressionMacro(@"({{ a }}, ""The type of this method is {{ returnType }}."")")]
static (A, string) identify<A>(A a) => throw new MacroException();

var tpl = identify(5);
```

Compiles to:
```cs
var tpl = (5, "The type of this method is (int, string).");
```

### varType

**Only available for:** [`[VarMacro]`](./var-macro.md)

The type of `var` we are binding to.

#### Example

```cs
int MyInt = 5.MyMacroMethod();
```

In this case the `{{ varType }}` will be `int`.

### varName

**Only available for:** [`[VarMacro]`](./var-macro.md)

The name of `var` we are binding to.

#### Example

```cs
int MyInt = 5.MyMacroMethod();
```

In this case the `{{ varName }}` will be `MyInt`.

## Functions

### inline

`inline(string functionName, string[] args...)` - inlines an anonymous function from the argument named `functionName` so it would not allocate a closure on the heap.

#### Example

```cs
[ExpressionMacro(@"
  (({{ opt }}).valueOut(out var {{ uniqueId }}) 
    ? ({{ inline 'ifSome' uniqueId }}) 
    : ({{ inline 'ifNone' }}))"
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