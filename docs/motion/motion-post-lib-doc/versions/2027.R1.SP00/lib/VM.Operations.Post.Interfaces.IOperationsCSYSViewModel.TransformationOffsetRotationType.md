# Property TransformationOffsetRotationType
<a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_TransformationOffsetRotationType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_TransformationOffsetRotationType"></a> TransformationOffsetRotationType

Gets or sets how angular offsets are interpreted, using a value from [`RotationTypes`](VM.Models.Post.RotationTypes.md).

```csharp
RotationTypes TransformationOffsetRotationType { get; set; }
```

### Property Value

 [RotationTypes](VM.Models.Post.RotationTypes.md)

### Remarks

This value determines how [`TransformationOffsetAngle`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TransformationOffsetAngle.md) is applied before the coordinate system is rendered.
