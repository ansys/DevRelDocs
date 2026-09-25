# Property Vectors
<a id="VM_Models_OutputReader_IVectorDisplayAnimationData_Vectors"></a>

Namespace: [VM.Models.OutputReader](VM.Models.OutputReader.md)  
Assembly: VM.Models.OutputReader.dll  

## <a id="VM_Models_OutputReader_IVectorDisplayAnimationData_Vectors"></a> Vectors

Gets or sets the vector, scalar value, or end point paired with each position for each frame.

```csharp
List<List<double[]>> Vectors { get; set; }
```

### Property Value

 List<List<double\[\]\>\>

### Remarks

The outer list index is the frame count, the inner list index is the vector count, and each array holds the x, y, and z components or a scalar value.

vector type:vector, position type:none or scala, line type:end point
