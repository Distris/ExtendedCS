---
sidebar_position: 2
---

# Use Case: CallerData

C# provides us with [`[CallerMemberNameAttribute]`, `[CallerFilePathAttribute]` and `[CallerLineNumberAttribute]`](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/caller-information) to get compile time information about where the function is being called from.

For example:
```cs
interface Logger {
  void Log(
    string message,
    [CallerMemberNameAttribute] string memberName = default,
    [CallerFilePathAttribute] string filePath = default,
    [CallerLineNumberAttribute] string lineNumber = default
  );
}
```

This is very convenient, however, if you want to pass this information around, it is not as nice:
```cs
void Run2(
  [CallerMemberNameAttribute] string memberName = default,
  [CallerFilePathAttribute] string filePath = default,
  [CallerLineNumberAttribute] string lineNumber = default
) {
  logger.Log(
    "It was really invoked from the other place.",
    // ReSharper disable ExplicitCallerInfoArgument
    memberName: memberName, filePath: filePath, lineNumber: lineNumber
    // ReSharper restore ExplicitCallerInfoArgument
  );
}
```

Using implicits, we can define a data structure like this:
```cs
/// <summary>
/// Conveniently packages data from <see cref="CallerMemberNameAttribute"/>, 
/// <see cref="CallerFilePathAttribute"/> and <see cref="CallerLineNumberAttribute"/>.
/// </summary>
[Record(GenerateToString = false), PublicAPI] 
public readonly partial struct CallerData {
  public readonly string memberName;
  public readonly string filePath;
  public readonly int lineNumber;

  public string asString() => $"{memberName} @ {filePath}:{lineNumber}";
  public string asShortString() => $"{memberName} @ {fileName}:{lineNumber}";
  public override string ToString() => asString();

  /// <summary>
  /// The file name from the <see cref="filePath"/>.
  /// <para/>
  /// For example, if <see cref="filePath"/> is "C:\foo\bar\baz.cs" then this will
  /// be "baz.cs".
  /// </summary>
  public string fileName => Path.GetFileName(filePath); 

  /// <summary>
  /// Creates <see cref="CallerData"/> which records the invocation line.
  /// </summary>
  [Implicit] public static CallerData createAtThisLine(
    [CallerMemberName] string callerMemberName = "",
    [CallerFilePath] string callerFilePath = "",
    [CallerLineNumber] int callerLineNumber = 0
  ) => new CallerData(
    memberName: callerMemberName, 
    filePath: callerFilePath, 
    lineNumber: callerLineNumber
  );
}
```

:::tip
Take note that `CallerData` also has a pretty sensible `ToString` method that renders the location nicely! ;)
:::

And then redefine the `Logger` like this:
```cs
interface Logger {
  void Log(string message, [Implicit] CallerData callerData = default);
}
```

Then it becomes much easier to pass the `CallerData` around:
```cs
void Run2([Implicit] CallerData callerData = default) {
  logger.Log("It was really invoked from the other place.");
}
```

Or even:
```cs
[ImplicitPassThrough]
void Run2() {
  logger.Log("It was really invoked from the other place.");
}
```