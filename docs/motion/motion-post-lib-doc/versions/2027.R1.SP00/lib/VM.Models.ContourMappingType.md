# Enum ContourMappingType
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

<a href="/lib/VM.Models.ContourMappingType.md" download="VM.Models.ContourMappingType.md">Download this page as Markdown</a>
