# Enum ExtremalValueType
<a id="VM_Models_Post_ExtremalValueType"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Specifies the scope used to calculate an extremal result value.

```csharp
public enum ExtremalValueType
```

## Fields

`ElementSet = 4` 

Description: "Each ElementSet"

Calculates the value separately for each element set.



`FEProperty = 3` 

Description: "Each Property"

Calculates the value separately for each finite-element property.



`None = 0` 

Description: "None"

Does not calculate an extremal value.



`Part = 1` 

Description: "Each Part"

Calculates the value separately for each part.



`Whole = 2` 

Description: "Whole"

Calculates the value across the whole result.

<a href="/lib/VM.Models.Post.ExtremalValueType.md" download="VM.Models.Post.ExtremalValueType.md">Download this page as Markdown</a>
