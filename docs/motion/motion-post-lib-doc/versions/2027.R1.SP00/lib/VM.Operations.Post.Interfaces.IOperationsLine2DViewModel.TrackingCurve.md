# Property TrackingCurve
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_TrackingCurve"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_TrackingCurve"></a> TrackingCurve

Gets or sets whether data tracking is enabled for the 2D chart. `true` enables tracking and `false` disables it.

```csharp
bool TrackingCurve { get; set; }
```

### Property Value

 bool

### Remarks

Changing this value updates the chart tracking control. [`TrackingOption`](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.TrackingOption.md) determines whether tracking displays one or multiple curves.
