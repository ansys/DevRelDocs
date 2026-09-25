# Property TrackingOption
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_TrackingOption"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_TrackingOption"></a> TrackingOption

Gets or sets [`ChartAxisType`](VM.Models.Post.ChartAxisType.md) mode used when tracking displays data points over the chart. `Single` tracks one curve and `Multiple` tracks several curves.

```csharp
ChartAxisType TrackingOption { get; set; }
```

### Property Value

 [ChartAxisType](VM.Models.Post.ChartAxisType.md)

### Remarks

When [`TrackingCurve`](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.TrackingCurve.md) is enabled, `Single` tracks the nearest curve and `Multiple` tracks all applicable curves at the hovered position.
