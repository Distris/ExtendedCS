# Macros

Macros are programs that are ran during the compilation. These programs get access to the source code that is being compiled and can do anything that a regular program does. They can:
- Generate new code based on existing code (like [`[Record]`](../records.md) does).
- Change the existing code (like [`[LazyProperty]`](../lazy-property.md) does).
- Validate the existing code. For example, you could validate the SQL queries being compiled by connecting to the database and checking them against the database schema.
- Anything else, really.

C# introduced their own version of macros called [source generators](https://learn.microsoft.com/en-us/dotnet/csharp/roslyn-sdk/source-generators-overview), however, our version has these advantages:
- Currently source generators can only generate new code, while our macros are able to transform existing code as well.
- To use source generators you must define a separate C# project for it (same as with our C#-based macros). Our macros also support rapid inline prototyping in the same assembly using the [scriban](https://github.com/scriban/scriban) templating language.
- We provide various macro-based capabilities, such as anonymous function inlining which are not provided by the source generators.

## Macro Types

We provide support for three types of macros:
- [Attribute based macros](./attribute-based/index.md) - these are the simplest macros which you can use by just attaching an attribute to a type or a function.
- Scriban based macros - middle ground between ability and complexity.
- C# based macros - the most complex and most powerful version of the macros.

:::note
To understand how macros work, it is useful (though not necessary) to have an approximate understanding of [how the compiler performs the compilation](./csharp-compilation-process.md).
:::