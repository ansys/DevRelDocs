# Enum ContourMappingType
<a id="VM_Models_ContourMappingType"></a>

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.dll  

Identifies how result values are mapped to the color scale of a contour created with [CreateContour\(IList<string\>, ContourMappingType, string, string, string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.CreateContour.md).

```csharp
public enum ContourMappingType
```

## Fields

`BeamGroup` 

Description: "Beam Group"

Selects values reported per beam group.



`ChainedSystem` 

Description: "Chained System"

Selects values reported per chained system.



`Contact` 

Description: "Contact"

Selects values reported per contact.



`FEElement` 

Description: "Element (Unaveraged)"

Selects unaveraged finite element values reported per element.



`FEElementNode` 

Description: "Node (Unaveraged)"

Selects unaveraged finite element values reported per node within each element.



`FEMaterial` 

Description: "Node (Averaged within material)"

Selects finite element node values averaged within each material region.



`FENode` 

Description: "Node (Averaged across body)"

Selects finite element node values averaged across the entire body.



`None` 

Description: "None"

Selects no contour mapping.



`Usersubroutine` 

Description: "Usersubroutine"

Selects values reported by a user subroutine.


