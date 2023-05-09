---
sidebar_position: 4
---

# PublicAccessor

`[PublicAccessor]` generates a `public` getter in a partial type definition that allows accessing a `private` / `protected` field.

Usually you want to do this when the `private` field is effectively-immutable, however, it has to be declared as mutable due to the framework limitations.

This pattern comes up often in Unity:
```cs
class MyScript : MonoBehaviour {
  [SerializeField] int _MyValue;
  public int MyValue => _MyValue;
}
```

This can be rewritten using `[PublicAccessor]`, which generates the `public int MyValue => _MyValue;` part:
```cs
partial class MyScript : MonoBehaviour {
  [SerializeField, PublicAccessor] int _MyValue;
}
```

The name of the generated property is computed by:
- Removing underscores (`_`) from the start of the original field name.
- Adding underscores to the end of the name until there is no clash with other identifiers.

| Original Name | Public Name |
| --- | --- |
| _MyValue | MyValue |
| MyValue | MyValue_ |
