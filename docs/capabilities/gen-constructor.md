---
sidebar_position: 1
---

# GenConstructor

`[GenConstructor]` is a weaker case of [`[Record]`](records.md).

```cs
using GenerationAttributes;

[GenConstructor]
public partial class Person {
  public string FirstName, LastName;
}
```

It generates the specified constructors for the type, without generating `Equals`, `GetHashCode` or `ToString`.

Therefore, it is essential equal to this declaration:
```cs
[Record(GenerateEquality = false, GenerateGetHashCode = false, GenerateToString = false)]
```

:::tip
You should use `[GenConstructor]` instead of `[Record]` if your type does not implement [structural equality semantics](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/equality-comparisons#value-equality).

Usually it is because the type is a mutable container with a reference-based identity.

Think two game objects: even if they have the same properties and are in the same place, they are still two distinct objects and are not equal to one another.
:::