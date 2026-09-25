# Property OffsetY
<a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_OffsetY"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_OffsetY"></a> OffsetY

Gets or sets the Y offset used by the translate transform.

```csharp
double OffsetY { get; set; }
```

### Property Value

 double

### Remarks

When the transform type is `Translate`, changing this value recalculates the curve with the new Y offset.
