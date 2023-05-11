---
sidebar_position: 3.5
---

# VarMacro

`[VarMacro]` is sort of a blend between [`[ExpressionMacro]`](./expression-macro.md) and [`[StatementMacro]`](./statement-macro.md).

It works by replacing `var` statements that bind to expressions (like `var x = MyMacro();`) with more statements.

For example, lets introduce the [`?` operator from Rust](https://doc.rust-lang.org/std/result/#the-question-mark-operator-) into C#.

First we need to declare the `Result<TValue, TError>` type:
```cs
public readonly struct Result<TValue, TError> {
  public readonly bool IsValue;
  public bool IsError => !IsValue;
  public readonly TValue __UnsafeValue;
  public readonly TError __UnsafeError;

  public Result(TValue value) {
    IsValue = true;
    __UnsafeValue = value;
    __UnsafeError = default;
  }

  public Result(TError error) {
    IsValue = false;
    __UnsafeValue = default;
    __UnsafeError = error;
  }
}
```

Now we can introduce the `?` operator. Because C# does not allow using custom operators, we will name it `ValueOr_RETURN`.

:::tip
We suggest using odd looking names like `_RETURN` to separate out the macro functions from regular ones.
:::

```cs
/// <summary>
/// Represents either a successful computation that resulted in a value
/// or a computation that failed with an error.
/// </summary>
public readonly struct Result<TValue, TError> {
  [VarMacro(@"
    var {{ uniqueId }} = {{ self }};
    if ({{ uniqueId }}.IsError) return {{ uniqueId }}.__UnsafeError;
    {{ varType }} {{ varName }} = {{ uniqueId }}.__UnsafeValue;
  ")]
  public TValue ValueOr_RETURN() => 
    throw new MacroException();

  // Implicit conversions are needed so we could just return the error 
  // and get it wrapped in `Result` automatically.

  public static implicit operator Result<TValue, TError>(TError error) => 
    new Result<TValue, TError>(error);

  public static implicit operator Result<TValue, TError>(TValue value) => 
    new Result<TValue, TError>(value);
}
```

Then this code:
```cs
Result<int, string> AddResults(
  Result<int, string> num1Result, 
  Result<int, string> num2Result
) {
  var num1 = num1Result.ValueOr_RETURN();
  var num2 = num2Result.ValueOr_RETURN();
  return num1 + num2;
}
```

Will be compiled to:
```cs
static Result<int, string> AddResults(
  Result<int, string> num1Result, 
  Result<int, string> num2Result
) {
  var id_1136_1163 = num1Result;
  if (id_1136_1163.IsError)
    return id_1136_1163.__UnsafeError;
  int num1 = id_1136_1163.__UnsafeValue;
  var id_1181_1208 = num2Result;
  if (id_1181_1208.IsError)
    return id_1181_1208.__UnsafeError;
  int num2 = id_1181_1208.__UnsafeValue;
  return num1 + num2;
}
```

Which gives us the same developer experience in C# as in Rust.

## Syntax

The pattern for `VarMacro` is evaluated with [scriban](https://github.com/scriban/scriban) templating language.

```cs
[VarMacro("scriban goes here")]
```

See [parameters and functions](./parameters-and-functions.md) for additional information.