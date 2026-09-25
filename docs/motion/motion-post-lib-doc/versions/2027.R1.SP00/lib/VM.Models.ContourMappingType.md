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

Selects values reported per beam group.



`ChainedSystem` 

Selects values reported per chained system.



`Contact` 

Selects values reported per contact.



`FEElement` 

Selects unaveraged finite element values reported per element.



`FEElementNode` 

Selects unaveraged finite element values reported per node within each element.



`FEMaterial` 

Selects finite element node values averaged within each material region.



`FENode` 

Selects finite element node values averaged across the entire body.



`None` 

Selects no contour mapping.



`Usersubroutine` 

Selects values reported by a user subroutine.


