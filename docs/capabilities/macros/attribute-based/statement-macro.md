---
sidebar_position: 3
---

# StatementMacro

`[StatementMacro]` is very similar to [`[ExpressionMacro]`](./expression-macro.md), however where `[ExpressionMacro]` produces expressions, `[StatementMacro]` produces statements.

:::note
An expression is anything that can be assigned to a variable, while a statement is a free-standing piece of code that cannot be assigned to a variable.

Examples of statements include `return`, `while`, `if / else` or calling functions that return `void` (such as `Console.WriteLine(string s)`).
:::

:::info
This only supports bodies that are statements. If you need to have expression bodies, use [`[ExpressionMacro]`](./expression-macro.md) instead.
:::

For example, if we define such macro function:
```cs
using GenerationAttributes;

public static class NullableExts {
  [StatementMacro(@"
var {{ uniqueId }} = {{ opt }};
if (({{ uniqueId }}).HasValue) {
  {{ inline 'ifSome' uniqueId + '.Value' }};
} else {
  {{ inline 'ifNone' }};
}
")]
  public static void voidFoldM<A>(
    this A? opt, Action ifNone, Action<A> ifSome
  ) => 
    throw new MacroException();
}
```

Then this code:
```cs
void run(int? maybeValue) {
  maybeValue.voidFoldM(
    ifNone: () => {
      Console.WriteLine("No value.")
    }, 
    ifSome: value => {
      Console.WriteLine($"Received value: {value}");
    }
  );
}
```

Will be compiled to:
```cs
void run(int? maybeValue) {
  var id_542_671 = maybeValue;
  if ((id_542_671).HasValue) {
    _LOCAL_ifSome_601_670(id_542_671.Value);
  }
  else {
    Console.WriteLine("No value.");
  }

  void _LOCAL_ifSome_601_670(int value) {
    Console.WriteLine($"Received value: {value}");
  }
}
```

## Syntax

The pattern for `StatementMacro` is evaluated with [scriban](https://github.com/scriban/scriban) templating language.

```cs
[StatementMacro("scriban goes here")]
```

See [parameters and functions](./parameters-and-functions.md) for additional information.