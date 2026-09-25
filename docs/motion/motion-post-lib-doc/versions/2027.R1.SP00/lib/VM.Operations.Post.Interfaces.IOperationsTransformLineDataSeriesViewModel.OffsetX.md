# Property OffsetX
<a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_OffsetX"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_OffsetX"></a> OffsetX

Gets or sets the X offset used by the translate transform.

```csharp
double OffsetX { get; set; }
```

### Property Value

 double

### Remarks

When the transform type is `Translate`, changing this value recalculates the curve with the new X offset.
