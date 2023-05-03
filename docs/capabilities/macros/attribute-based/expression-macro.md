---
sidebar_position: 2
---

# ExpressionMacro

`[ExpressionMacro]` is an attribute that allows you to replace the invocation of a function with a specified body that returns an expression.

:::note
An expression is any section of the code that evaluates to a value (that you can assign to a variable), such as `3`, `a + b + c`, `computeValue()` or `condition ? ifTrue() : ifFalse()`.
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

See [parameters and functions](./parameters-and-functions.md) for additional information.