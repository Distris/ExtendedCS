---
sidebar_position: 6
---

# Exhaustive Matching

In modern languages like [Scala](https://docs.scala-lang.org/scala3/reference/enums/adts.html), [Rust](https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html), [Kotlin](https://kotlinlang.org/docs/sealed-classes.html) or [F#](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/discriminated-unions), it is trivial to declare discriminated unions, also known as [algebraic data types (ADTs)](https://jrsinclair.com/articles/2019/algebraic-data-types-what-i-wish-someone-had-explained-about-functional-programming/).

C# does not have this built in, however you can represent them using existing C# constructs: enumerations, `abtract class + classes` or `interface + classes`.

Lets take a look at each implementation:

```cs title="ADT using enum"
enum MyADT { Case1, Case2, Case3 }
```

```cs title="ADT using abstract classes"
abstract class MyADT {
  [Record] public sealed partial class Case1 : MyADT {
    public readonly string Data;
  }

  [Record] public sealed partial class Case2 : MyADT {
    public readonly int Data;
  }

  [Singleton] public sealed partial class Case3 : MyADT {}
}
```

```cs title="ADT using interfaces"
interface IMyADT {}
static class MyADT {
  [Record] public sealed partial class Case1 : IMyADT {
    public readonly string Data;
  }

  [Record] public sealed partial class Case2 : IMyADT {
    public readonly int Data;
  }

  [Singleton] public sealed partial class Case3 : IMyADT {}
}
```

When should each representation be used?

1. If your ADT does not contain any data, the simplest option is to use an `enum`.

  :::tip
  If you think that it is likely that cases holding data will appear later down the line, you should use the
  `abstract class` or `interface` representation where all cases without data are `[Singleton]`s.

  This will save you from refactoring the `enum` based code to `abstract class` / `interface` based code in the future.
  :::

2. If it does contain data then either `abstract class` or `interface` representation should be used.

  :::tip
  Due to the way C# handles [implicit conversions with interface types](https://github.com/vkhorikov/CSharpFunctionalExtensions/issues/354), we recommend using the `abstract class` approach.

  All examples from this point forward will be using the `abstract class` approach, although `interface` approach is uses same code.
  :::

## Exhaustive Matching

Exhaustive matching is an idea that all variants of your ADT are declared in your source code and therefore, when you receive a `MyADT` as a function parameter, it can only be in one of N forms (in our case `N` is `3`: `Case1, Case2, Case3`).

Lets take a look how it looks in practice:

```cs title="Using an enum-based ADT"
int UseMyEnumADT(MyADT adt) =>
  adt switch {
    MyADT.Case1 => 1,
    MyADT.Case2 => 2,
    MyADT.Case3 => 3,
    var other => throw new Exception($"Unknown value: {other}")
  };
```

```cs title="Using a class-based ADT"
int UseMyClassADT(MyADT adt) =>
  adt switch {
    MyADT.Case1 c => c.Data.Length,
    MyADT.Case2 c => c.Data,
    MyADT.Case3 _ => 3,
    _ => throw new Exception($"Unknown value: {adt}")
  };
```

What happens when we decide to add `Case4` to our ADT later down the line? Well, in standard C# - not much. The compiler will not help you and instead you will start getting exceptions from the functions when they will receive the `Case4`.

Ideally, after adding `Case4`, we would want the compiler to point us to all the places in the code where ADT cases are being checked and raise a compile-time error where this checking is non-exhaustive (not checking all of the possible cases).

To achieve that, there are two solutions:
1. [`ExhaustiveMatching` Roslyn analyzer plugin from `WalkerCodeRanger`](https://github.com/WalkerCodeRanger/ExhaustiveMatching).

  This relies on existing C# `switch` syntax to perform exhaustive checking and you still need to write the `default` case that does `throw ExhaustiveMatch.Failed(value)`.
2. Use the `[Matcher]` attribute from our compiler, which generates code using inlined anonymous functions.

### `[Matcher]`

`[Matcher]` allows you to annotate an `enum`, `abstract class` or `interface` to generate code for exhaustive pattern matching.

It generates two extension methods for the specified ADT:
1. `match` - a function when you want to return a value based on the ADT case.
2. `voidMatch` - a function when you do not want to return any value (the return type is `void`) and just want to run some code based on the ADT case.

For example:
```cs title="Using an enum-based ADT"
[Matcher] enum MyADT { Case1, Case2, Case3 }

int UseMyEnumADT(MyADT adt) {
  // Just run some code based on the case.
  adt.voidMatch(
    case1: () => { Console.WriteLine("Case1, yeah!"); },
    case2: () => { Console.WriteLine("Got Case 2."); },
    case3: () => { Console.WriteLine("Case 3 in the house!"); }
  );

  // Return a value based on the case.
  return adt.match(
    case1: () => 1,
    case2: () => 2,
    case3: () => 3
  );
}
```

```cs title="Using a class-based ADT"
[Matcher] enum MyADT { Case1, Case2, Case3 }

int UseMyEnumADT(MyADT adt) {
  // Just run some code based on the case.
  adt.voidMatch(
    case1: () => { Console.WriteLine("Case1, yeah!"); },
    case2: () => { Console.WriteLine("Got Case 2."); },
    case3: () => { Console.WriteLine("Case 3 in the house!"); }
  );

  // Return a value based on the case.
  return adt.match(
    case1: () => 1,
    case2: () => 2,
    case3: () => 3
  );
}
```

### `[MatcherFor]`

TODO