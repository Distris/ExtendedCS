---
sidebar_position: 2
---

# SimpleMethodMacro

```cs
using GenerationAttributes;

public static class AnyExts {
  /// <summary>Returns "expression=evaluated expression" string.</summary>
  [SimpleMethodMacro(@"(""${a}="" + (${a}))")]
  public static string echo<A>(this A a) => throw new MacroException();
}
```