# Property ScaleY
<a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_ScaleY"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_ScaleY"></a> ScaleY

Gets or sets the Y scale used by the linear-scale transform.

```csharp
double ScaleY { get; set; }
```

### Property Value

 double

### Remarks

When the transform type is `LinearScale`, changing this value recalculates the curve with the new Y scale.
