---
sidebar_position: 1
---

# C# Compilation Process

When Roslyn, the C# compiler, compiles your code, it roughly goes through these phases:

## Reading source code

The compiler reads your `.cs` files into the memory.

## Parsing the syntax tree

The compiler turns the raw text into a syntax tree. Syntax items are data structures that represent the keywords and other syntax in the `.cs` file.
  
To see into what syntax tree the code is turned we can use the excellent [Roslyn Quoter](https://roslynquoter.azurewebsites.net/) or [SharpLab](https://sharplab.io/#v2:C4LghgzsA0AmIGoA+BtA4gUwHYGED2WUATgK4DGweRAugLABQAAgMwAEADmEcAJZgA2rRgCZWABQxEIBVgG8GrIW0YBGAAysAYjynAAcmAC2GaKwAykfUYwBuBgF8gA=) tools.

This code:
```cs
[GenConstructor]
public partial class Person {
  public string FirstName, LastName;
}
```

Turns into this syntax tree:
```cs
CompilationUnit()
.WithMembers(
  SingletonList<MemberDeclarationSyntax>(
      ClassDeclaration("Person")
      .WithAttributeLists(
          SingletonList<AttributeListSyntax>(
              AttributeList(
                  SingletonSeparatedList<AttributeSyntax>(
                      Attribute(
                          IdentifierName("GenConstructor")
                      )
                  )
              )
          )
      )
      .WithModifiers(
          TokenList(
              new []{
                  Token(SyntaxKind.PublicKeyword),
                  Token(SyntaxKind.PartialKeyword)
              }
          )
      )
      .WithMembers(
          SingletonList<MemberDeclarationSyntax>(
              FieldDeclaration(
                  VariableDeclaration(
                      PredefinedType(
                          Token(SyntaxKind.StringKeyword)
                      )
                  )
                  .WithVariables(
                      SeparatedList<VariableDeclaratorSyntax>(
                          new SyntaxNodeOrToken[]{
                              VariableDeclarator(
                                  Identifier("FirstName")
                              ),
                              Token(SyntaxKind.CommaToken),
                              VariableDeclarator(
                                  Identifier("LastName")
                              )
                          }
                      )
                  )
              )
              .WithModifiers(
                  TokenList(
                      Token(SyntaxKind.PublicKeyword)
                  )
              )
          )
      )
  )
)
.NormalizeWhitespace()
```

We can see that each part of the code is represented by a different node in the syntax tree:

| Source Code | Syntax Tree |
| --- | --- |
| `class Person` | `ClassDeclaration("Person")` |
| `public partial` | `.WithModifiers(TokenList(new []{ Token(SyntaxKind.PublicKeyword), Token(SyntaxKind.PartialKeyword) }))` |
| `[GenConstructor]` | `.WithAttributeLists(SingletonList<AttributeListSyntax>(AttributeList(SingletonSeparatedList<AttributeSyntax>(Attribute(IdentifierName("GenConstructor"))))))` |
| `FirstName, LastName` | `SeparatedList<VariableDeclaratorSyntax>(new SyntaxNodeOrToken[]{ VariableDeclarator(Identifier("FirstName")), Token(SyntaxKind.CommaToken), VariableDeclarator(Identifier("LastName")) })` |
| `public string ...` | ```FieldDeclaration(VariableDeclaration(PredefinedType(Token(SyntaxKind.StringKeyword))).WithVariables(...)).WithModifiers(TokenList(Token(SyntaxKind.PublicKeyword)))``` |

## Computing the symbol tree

While the syntax tree is a representation of the `.cs` file as compiler data structures, it has no logical relations in it. You can refer to non-existent types or fields and the syntax tree parser is happy about it.

Meanwhile the symbol tree is built by following the logical relations in the code. For example the compiler would know that `interface Foo<A>` is a generic interface without known type parameters, while `void DoThings(Foo<int> foo) { ... }` takes in an instance of `Foo<A>` with a known type parameter `A = int`.

## Emitting the IL

At this phase the compiler has your source code parsed and logically analyzed and can start emitting the IL (intermediate Language) code that makes up the resulting `.dll` or `.exe` file.

## Where do our macros fit in?

We interject ourselves right before emitting the IL and allow you to modify the code that will be compiled.