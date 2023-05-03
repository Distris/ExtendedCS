---
sidebar_position: 4
---

# Parameters and Functions

Both [expression](./expression-macro.md) and [statement](./statement-macro.md) macros share the same parameters and functions that you can use in them.

## Parameters

These parameters (accessible via the `{{ parameter }}` syntax) are exported to the scriban template:

### argumentName

Refers to function argument named `argumentName`.

For example this type signature has two parameters, accessible as `{{ dict }}` and `{{ key }}` respectively:
```cs
public static V getOrThrowM<K, V>(this IReadOnlyDictionary<K, V> dict, K key)
```

### uniqueId

An unique identifier for this macro call, can be used as a temporary variable name:

For example:
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

Resolved return type of the invoked method.

```cs
[ExpressionMacro(@"({{ a }}, ""The type of this method is {{ returnType }}."")")]
static (A, string) identify<A>(A a) => throw new MacroException();

var tpl = identify(5);
```

Compiles to:
```cs
var tpl = (5, "The type of this method is (int, string).");
```

### genericX

Resolved generic type of a generic argument named `X`.

```cs
[ExpressionMacro(@"({{ a }}, ""The type of {{ a }} is {{ genericA }}."")")]
static (A, string) identify<A>(A a) => throw new MacroException();

var tpl = identify(5);
```

Compiles to:
```cs
var tpl = (5, "The type of 5 is int.");
```

## Functions

### inline

`inline(string functionName, string[] args...)` - inlines an anonymous function from the argument named `functionName`.

Example:
```cs
[ExpressionMacro(@"
  (({{opt}}).valueOut(out var {{uniqueId}}) 
    ? ({{inline 'ifSome' uniqueId}}) 
    : ({{inline 'ifNone'}}))"
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