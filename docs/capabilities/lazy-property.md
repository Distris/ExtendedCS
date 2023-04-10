---
sidebar_position: 3
---

# LazyProperty

`[LazyProperty]` makes the property calculated only on first access and then cached as a field in the type.

Therefore, this code:
```cs
public class People {
  public readonly ImmutableList<Person> Everyone;

  [LazyProperty] public int TotalAge => Everyone.Select(p => p.Age).Sum();
}
```

Gets transformed into:
```cs
public class People {
  public readonly ImmutableList<Person> Everyone;

  int? __lazy_value_TotalAge;
  public int TotalAge => __lazy_value_TotalAge ??= Everyone.Select(p => p.Age).Sum();
}
```

:::info
The caching is not thread-safe.

However, given that your get-only properties should not do any side-effects, the worst thing that can happen is that, if two threads access it at the same time, it will be calculated twice, wasting some CPU cycles.
:::