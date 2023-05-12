# DelegateToInterface

**Usable on:** `class`, `struct`

Delegates all properties and methods from the `delegatedInterface` to a field or property `delegateTo`.

Implements the `delegatedInterface` on the type.

This is essentially the [delegation feature from Kotlin language](https://kotlinlang.org/docs/delegation.html).

#### Example

```cs
interface MyInterface {
  int GetAge(Person person);
}

[DelegateToInterface(
  delegatedInterface = typeof(MyInterface),
  delegateTo = nameof(implementer)
)]
public partial class TestClass {
  public MyInterface implementer;
}
```

Will generate:
```cs
public partial class TestClass : MyInterface {
  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public int GetAge(Person person) => implementer.GetAge(person);
}
```