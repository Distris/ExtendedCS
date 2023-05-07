---
sidebar_position: 1
---

# Introduction

**Introducing ExtendedCS: Turbocharge Your C# Development with Our Advanced Compiler**

In today's fast-paced technology landscape, efficiency and productivity are crucial to the success of your business. ExtendedCS is a cutting-edge compiler extension, designed to elevate your C# development experience by augmenting the [official open-source C# compiler, Roslyn](https://github.com/dotnet/roslyn). Our primary focus is to help companies streamline their software development process and reduce long-term maintenance costs.

## Key Benefits of ExtendedCS

- **Seamless Integration with Unity and .NET Projects:** ExtendedCS empowers both [Unity and regular .NET framework/.NET core projects](./supported-targets.md) to utilize the latest C# version, unlocking access to the most recent language advancements for your development team.

- **Improved Developer Experience:** Our [implicit parameter resolution](./capabilities/implicits/index.md) feature enables the creation of libraries that provide an enhanced developer experience, making them more user-friendly and less prone to misuse.

- **Advanced Abstractions and Optimization:** [Macros](./macros/index.md) in ExtendedCS allow you to introduce abstractions that transcend vanilla C# limitations and optimize your code for peak performance.

- **Reduced Boilerplate Code with Ready-to-Use Macro Library**: Tools like [`[Record]`](./capabilities/record/index.md), [`[LazyProperty]`](./capabilities/lazy-property.md), [`PublicAccessor`](./capabilities/public-accessor.md), [exhaustive matching](./capabilities/exhaustive-matching.md) minimize boilerplate code, while our [library of ready-to-use macros](./macro-library/index.md) for common tasks simplifies the development process. This not only increases productivity but also boosts the overall happiness of your engineering team.

- **Enhanced Code Quality**: ExtendedCS reduces friction in the development process, encouraging software engineers to implement robust solutions rather than resorting to quick, dirty code. This significantly lowers long-term maintenance costs and ensures a more sustainable software architecture.

Embrace ExtendedCS today and propel your C# development to new heights. Give your team the tools they need to excel, and experience the tangible benefits of increased productivity and code quality.

## The Birth of ExtendedCS

_Our Journey and the Heart Behind ExtendedCS_

In this section, we'd like to share with you the story of how ExtendedCS came to be, the passion behind its development, and the challenges we faced along the way, providing an in-depth account of our experiences.

Our journey began in 2013 when we started making games with the Unity game engine. Despite its use of C#, we quickly realized that Unity wasn't up to date with the latest version of the language. As developers coming from languages like Scala, F#, Idris, and Rust, we found ourselves longing for the innovative features we had grown accustomed to in those languages.

Then, one day, we discovered a community effort to integrate the new Roslyn compiler with Unity. Excited by this prospect, we jumped on board and updated our codebase to utilize the latest C# features. To our delight, our productivity soared.

However, we still faced some challenges. Our adoption of functional programming tools meant that we created numerous one-off types, each tailored to a specific aspect of our domain. Writing and updating these types was not only time-consuming but also quite boring. We tried using tools like ReSharper and Rider to generate the code, but we still had to manually update the generated code whenever we added a new field to a type. This process was error-prone, as it was easy to forget to regenerate all of the code or make a subtle mistake in the update.

That's when we had an idea: since we were already replacing the default compiler and Roslyn was open-source, why not create our own extensions and incorporate them into Roslyn? Inspired by this thought, we rolled up our sleeves and started hacking away at the compiler, eventually giving birth to the first versions of ExtendedCS.

Over time, we developed patterns to eliminate boilerplate code, such as `[LazyProperty]` for caching expensive computations and `[PublicAccessor]` to prevent exposing mutable Unity-serialized fields while reducing the need to write public getters for private fields.

We designed our game logic using discriminated unions (also known as algebraic data types), which are a powerful way to represent different variations of data within a single type. However, we faced challenges with C#'s switch statement, specifically its non-exhaustiveness. This limitation meant that the compiler did not enforce the handling of all possible cases of a given type, potentially leading to unhandled cases or errors when new cases were introduced later. The non-exhaustive nature of the switch statement resulted in less reliable code, as it was easy to overlook a case during development or maintenance. Thus to address this issue, we developed the [Matcher] pattern.

In our codebase, we utilized the `Either` type to avoid [problems with using exceptions for control flow](https://wiki.c2.com/?DontUseExceptionsForFlowControl) (similar to [Rust's `Result`](https://doc.rust-lang.org/std/result/)) and wondered if we could incorporate something like the [`?` operator](https://doc.rust-lang.org/std/result/#the-question-mark-operator-) into our code. Although C# offered LINQ expressions, they allocated new objects, which increased garbage collection and hindered performance—significant concerns in game development. Our experience with `[LazyProperty]` led us to explore code rewriting, ultimately giving birth to the first macros.

We continued to innovate, introducing ergonomic log statements that didn't allocate objects when the log level was off. During a code migration, we identified the need for logic in our macros, giving rise to scriban-based macros.

Over time, we found that some macros had become increasingly complex, making them cumbersome to write in scriban. This led us to implement C#-based macros, which provided the full power and expressiveness of C# to macro authors.

After over seven years of rigorous testing and using the compiler ourselves, we're excited to share ExtendedCS with the world, granting you access to the same productivity-enhancing tools we've enjoyed.

With love, the ExtendedCS team.