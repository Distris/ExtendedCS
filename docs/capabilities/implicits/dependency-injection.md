---
sidebar_position: 1
---

# Use Case: Dependency Injection

Lets say we have this code:
```cs
static Guid Save(
  Person person, DataStore store, JsonSerializer<Person> serializer
) {
  var json = serializer.ToJson(person);
  var guid = Guid.NewGuid();
  store.Save(guid, json);
  return guid;
}
```

Only the `person` parameter is actual data. `store` and `serializer` are dependencies, which we need to provide.

In general, this pattern is called [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection) and there has been multiple dependency-injection frameworks developed for C#, with two notable examples being [NInject](http://www.ninject.org/) for general-purpose C# and [Zenject](https://github.com/modesttree/Zenject) for Unity.

However, all of the dependency-injection frameworks rely on binding everything in runtime. Which can be a benefit, because it allows to change the bindings while the code is running, and a negative as well - because you will only know about misconfiguration when the code is ran.

If you want to avoid that and know about misconfiguration in compile time you can use implicits for compile-time dependency injection.

For example, the same method can be rewritten with the following function signature:
```cs
static Guid Save(
  Person person, 
  [Implicit] DataStore store = default, 
  [Implicit] JsonSerializer<Person> serializer = default
)
```

Then you can have the default dependency container:
```cs
public static class DefaultDependencies {
  [Implicit] public static readonly DataStore DefaultStore = /* ... */;
  [Implicit] public static readonly JsonSerializer<Person> PersonJsonSerializer = /* ... */;
}
```

And invocations to `Save` will pick these up automatically.

When you want to override them in tests, you can then provide the changed values in a higher precedence scope like this:
```cs
public abstract class TestBase {
  [Implicit] public readonly DataStore TestDataStore = /* ... */;
}

public class MyTest : TestBase {
  [Test]
  public void TestSaving() {
    var person = new Person(/* ... */);
    // This will use the `TestDataStore` instead of `DefaultDependencies.DefaultStore`
    // as the `TestBase` implicit scope is narrower than the global implicit scope.
    Save(person);
  }
}
```