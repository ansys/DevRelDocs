# Property Positions
<a id="VM_Models_OutputReader_IVectorDisplayAnimationData_Positions"></a>

Namespace: [VM.Models.OutputReader](VM.Models.OutputReader.md)  
Assembly: VM.Models.OutputReader.dll  

## <a id="VM_Models_OutputReader_IVectorDisplayAnimationData_Positions"></a> Positions

Gets or sets the position or start point of each display item for each frame.

```csharp
List<List<double[]>> Positions { get; set; }
```

### Property Value

 List<List<double\[\]\>\>

### Remarks

The outer list index is the frame count, the inner list index is the vector count, and each array holds the x, y, and z components.

vector type:position, position type:point, line type:start point
