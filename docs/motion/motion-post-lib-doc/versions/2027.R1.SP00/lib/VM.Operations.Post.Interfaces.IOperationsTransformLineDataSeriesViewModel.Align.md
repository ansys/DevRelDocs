# Property Align
<a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_Align"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_Align"></a> Align

Gets or sets the alignment mode selected from [`AlignType`](VM.Models.Post.AlignType.md).

```csharp
AlignType Align { get; set; }
```

### Property Value

 [AlignType](VM.Models.Post.AlignType.md)

### Remarks

When the transform type is `Align`, this value selects whether alignment uses the zero reference or another curve.
