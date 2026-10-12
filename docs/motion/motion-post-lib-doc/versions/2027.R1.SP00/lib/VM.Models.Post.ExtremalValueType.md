# Enum ExtremalValueType
<a id="VM_Models_Post_ExtremalValueType"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Specifies the scope used to calculate an extremal result value.

```csharp
public enum ExtremalValueType
```

## Fields

`ElementSet` 

Description: "Each ElementSet"

Calculates the value separately for each element set.



`FEProperty` 

Description: "Each Property"

Calculates the value separately for each finite-element property.



`None` 

Description: "None"

Does not calculate an extremal value.



`Part` 

Description: "Each Part"

Calculates the value separately for each part.



`Whole` 

Description: "Whole"

Calculates the value across the whole result.


