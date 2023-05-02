---
sidebar_position: 2
---

# GenToString

`[GenToString]` allows you to use the `ToString` generation facilities of [`[Record]`](./record/index.md) on any type.

```cs
using GenerationAttributes;

[GenToString]
public partial class Person {
  public string FirstName, LastName;
}
```

It generates the `ToString`, without generating constructors, `Equals` or `GetHashCode`.

Therefore, it is essential equal to this declaration:
```cs
[Record(
  ConstructorFlags.None, 
  GenerateEquality = false, 
  GenerateGetHashCode = false, 
  GenerateToString = true
)]
```