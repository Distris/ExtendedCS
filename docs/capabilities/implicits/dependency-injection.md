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

Only the `person` parameter is actual data. `store` and `serializer` are dependencies, which we need to provide. In general, this pattern is called [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection) and 

There has been multiple dependency-injection frameworks developed for C#, with [NInject](http://www.ninject.org/) for general-purpose C# and [Zenject](https://github.com/modesttree/Zenject) for Unity.