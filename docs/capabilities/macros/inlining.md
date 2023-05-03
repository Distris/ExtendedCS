---
sidebar_position: 0
---

# Inlining

This is a general overview of inlining, which is a process of taking a function call and putting the code from that directly at the call-site, instead of calling a function. After inlining the inlined function does not exist anymore in the code.

Lets take a look at an example. We define a new function that will get inlined:
```cs
static class BooleanExtensions {
  /// <summary>
  /// If <see cref="condition"/> is true, then `Some(<see cref="value"/>())`,
  /// otherwise None.
  /// </summary>
  [ExpressionMacro(@"
  (({{condition}}) 
    ? new FPCSharpUnity.core.functional.Option<{{genericT}}>({{inline 'value'}}) 
    : default)
  ")]
  public static Option<T> optM<T>(this bool condition, Func<T> value) => 
    throw new MacroException();
}
```

When you call it, it would seem that the call-site has to allocate a `Func<T>` for the `value` parameter:
```cs
var maybePerson = someCondition.optM(() => {
  var person = new Person();
  // ...
  return person;
});
```

However, after the inlining, the actual code that gets compiled looks like this:
```cs
var maybePerson = ((condition) 
  ? new FPCSharpUnity.core.functional.Option<Person>(_LOCAL_value_182_262()) 
  : default);

Person _LOCAL_value_182_262() {
  var person = new Person();
  // ...
  return person;
}
```

As you can see the call to `optM` is gone and the code from it has been glued into the place where `optM` was called.

:::note
Inlining will be discussed in more detail at other sections of the documentation.
:::