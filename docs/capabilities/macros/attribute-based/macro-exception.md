---
sidebar_position: 1
---

# MacroException

When you use an attribute-based macro the body of the function gets replaced. However, the C# compiler still requires us to provide some body for the function, even if it will get thrown out.

For such functions you can just throw `MacroException` as the function body.

```cs
using GenerationAttributes;

public static class AnyExts {
  [ExpressionMacro(@"...replaced code...")]
  public static string echo<A>(this A a) => throw new MacroException();
}
```