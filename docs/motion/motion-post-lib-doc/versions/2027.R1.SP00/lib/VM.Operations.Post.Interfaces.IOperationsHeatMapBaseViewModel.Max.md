# Property Max
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_Max"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_Max"></a> Max

Gets or sets the maximum value of the heat-map legend range used when [`IsAutoRange`](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.IsAutoRange.md) is `false`.

```csharp
double Max { get; set; }
```

### Property Value

 double

### Remarks

When [`IsAutoRange`](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.IsAutoRange.md) is `false`, changing this value updates the upper legend limit. When automatic range is enabled, the heat-map data determines the limit.
