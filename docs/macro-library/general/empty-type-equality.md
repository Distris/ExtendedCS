# EmptyTypeEquality

**Usable on:** `struct`, `class`

Generates equality members for a type that has no fields (like `struct Unit {}`).

#### Example

```cs
using System;

[EmptyTypeEquality] 
public readonly partial struct Unit : IEquatable<Unit> {}
```

## Parameters

### `ignoredFields`

Specifies fields that should be ignored when checking whether this type has no fields.

One case where this is useful is when the fields are only used as fillers for struct alignment and the data in
them is never accessed.