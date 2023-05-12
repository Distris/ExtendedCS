# ExtractXMLDocIntoConst

**Usable on:** `field`, `property`, `class`, `struct`

Extracts the XML documentation from this member to a `const string` in a partial definition of this type.

This is useful when you want to share the XML documentation with another attribute, like [Odin Inspectors](https://odininspector.com/) `[InfoBoxAttribute]`.

```cs title="Example"
public partial class ExtractXMLDocIntoConstAttributeTest {
  /// <summary>Example docs.</summary>
  [ExtractXMLDocIntoConst] public string testField;
}

public class OtherClass {
  [OdinInspector.InfoBox(ExtractXMLDocIntoConstAttributeTest.XML_DOC_testField)] 
  public string otherField;
}

// OR

/// <summary>My documentation</summary>
[
  ExtractXMLDocIntoConst, OdinInspector.TypeInfoBox(XML_DOC_ShowTooltipComponent)
] public partial class ShowTooltipComponent {}
```