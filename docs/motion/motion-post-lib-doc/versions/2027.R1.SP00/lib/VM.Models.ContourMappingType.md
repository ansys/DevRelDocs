# Enum ContourMappingType
<div align="right"><a href="/lib/VM.Models.ContourMappingType.md" download="VM.Models.ContourMappingType.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_ContourMappingType"></a>

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.dll  

Identifies how result values are mapped to the color scale of a contour created with [CreateContour\(IList<string\>, ContourMappingType, string, string, string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.CreateContour.md).

```csharp
public enum ContourMappingType
```

## Fields

`BeamGroup = 5` 

Description: "Beam Group"

Selects values reported per beam group.



`ChainedSystem = 7` 

Description: "Chained System"

Selects values reported per chained system.



`Contact = 6` 

Description: "Contact"

Selects values reported per contact.



`FEElement = 2` 

Description: "Element (Unaveraged)"

Selects unaveraged finite element values reported per element.



`FEElementNode = 3` 

Description: "Node (Unaveraged)"

Selects unaveraged finite element values reported per node within each element.



`FEMaterial = 4` 

Description: "Node (Averaged within material)"

Selects finite element node values averaged within each material region.



`FENode = 1` 

Description: "Node (Averaged across body)"

Selects finite element node values averaged across the entire body.



`None = 0` 

Description: "None"

Selects no contour mapping.



`Usersubroutine = 8` 

Description: "Usersubroutine"

Selects values reported by a user subroutine.
