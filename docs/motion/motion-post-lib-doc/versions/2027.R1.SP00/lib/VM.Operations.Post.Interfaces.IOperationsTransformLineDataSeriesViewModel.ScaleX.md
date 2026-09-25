# Property ScaleX
<a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_ScaleX"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_ScaleX"></a> ScaleX

Gets or sets the X scale used by the linear-scale transform.

```csharp
double ScaleX { get; set; }
```

### Property Value

 double

### Remarks

When the transform type is `LinearScale`, changing this value recalculates the curve with the new X scale.
