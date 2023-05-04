# Macro Library

[Scriban-based](../macros/scriban-based/index.md) and [C#-based](../macros/csharp-based/index.md) macros allow us to do a lot of things that would otherwise only be possible as compiler extensions.

Thus the compiler comes with an open-source library of various macros that you can use.

Our ultimate goal is to move as much functionality from the compiler to the macro APIs as possible. This allows for end-users like you or us to easily extend or modify the provided functionality.

For example, [`[Singleton]`](./singleton.md) was once a built-in compiler extension, until we added the necessary APIs that allowed it to be implemented via a [C#-based macro](../macros/csharp-based/index.md).

As a consequence, now it is quite easy to modify the `[Singleton]` macro if it does not suit your needs perfectly, producing `[OurSingleton]` that does exactly what you need.