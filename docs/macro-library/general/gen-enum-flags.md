# GenEnumFlags

Creates an `enum` type with [`[Flags]`](https://learn.microsoft.com/en-us/dotnet/api/system.flagsattribute?view=net-7.0) attribute for the given `enum` type.

#### Example

```cs
[GenEnumFlags] enum SampleEnum { 
  A = 0, B = 1, C = 2, D = 3, E = 4 
}
```

Will generate:
- The `SampleEnumFlags` definition:
  ```cs
  [Flags] enum SampleEnumFlags { 
    A = 1, B = 2, C = 4, D = 8, E = 16 
  }
  ```
- The `SampleEnumFlags toFlags(this SampleEnum value)` extension method that allows converting a value to a single flag.

## Parameters

### `use64bits`

Whether to use 64 bits (8 bytes) for the flags storage, allowing up to 64 flags.

**Default:** false (uses 32 bits)