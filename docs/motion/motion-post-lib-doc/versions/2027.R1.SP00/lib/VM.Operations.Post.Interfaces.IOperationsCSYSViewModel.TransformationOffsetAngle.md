# Property TransformationOffsetAngle
<a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_TransformationOffsetAngle"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_TransformationOffsetAngle"></a> TransformationOffsetAngle

Gets or sets the angular offset applied to the parent reference orientation. The value is interpreted with [`TransformationOffsetRotationType`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TransformationOffsetRotationType.md) and [`TransformationOffsetRotationAxis`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TransformationOffsetRotationAxis.md).

```csharp
Vector TransformationOffsetAngle { get; set; }
```

### Property Value

 [Vector](VM.Vector.md)

### Remarks

Changing this value changes the coordinate-system orientation relative to the parent frame at each animation frame.
