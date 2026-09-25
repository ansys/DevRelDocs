# Property TransformationOffsetRotationAxis
<a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_TransformationOffsetRotationAxis"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_TransformationOffsetRotationAxis"></a> TransformationOffsetRotationAxis

Gets or sets the rotation-axis sequence selected from VM.Models.Post.RotationAxes for angular offsets.

```csharp
RotationAxes TransformationOffsetRotationAxis { get; set; }
```

### Property Value

 [RotationAxes](VM.RotationAxes.md)

### Remarks

This value determines the order of axes used to interpret [`TransformationOffsetAngle`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TransformationOffsetAngle.md).
