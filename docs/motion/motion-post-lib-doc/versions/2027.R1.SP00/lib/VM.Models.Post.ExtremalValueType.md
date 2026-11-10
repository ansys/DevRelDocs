# Enum ExtremalValueType
<div align="right"><a href="/lib/VM.Models.Post.ExtremalValueType.md" download="VM.Models.Post.ExtremalValueType.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
