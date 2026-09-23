# Property TransformationOffsetPosition
<a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_TransformationOffsetPosition"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_TransformationOffsetPosition"></a> TransformationOffsetPosition

Gets or sets the position offset applied to the parent reference position.

```csharp
Vector TransformationOffsetPosition { get; set; }
```

### Property Value

 [Vector](VM.Vector.md)

### Remarks

Changing this value changes the coordinate-system position relative to the parent frame at each animation frame.
