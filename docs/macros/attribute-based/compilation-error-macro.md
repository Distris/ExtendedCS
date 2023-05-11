---
sidebar_position: 5
---

# CompilationErrorMacro

Fails the compilation with the specified message.

This might seem useless, but it is very useful in "banning" methods if you do not have a setting that prevents `[Obsolete]` methods from being used.

For example:
```cs
using GenerationAttributes;

[CompilationErrorMacro("Do not use `orElse`, instead use the `|` operator.")]
public static Option<A> orElse<A>(this Option<A> o1, Option<A> o2) =>
  throw new MacroException();
```

This will fail the compilation, while still allowing other methods marked with `[Obsolete]` to work.

In addition - no one will be able to define the `orElse` method with the same signature, because it is already
defined, thus it will prevent them from thinking "I will add it, because it seems like a great idea!".