# Property Min
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_Min"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_Min"></a> Min

Gets or sets the minimum value of the heat-map legend range used when [`IsAutoRange`](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.IsAutoRange.md) is `false`.

```csharp
double Min { get; set; }
```

### Property Value

 double

### Remarks

When [`IsAutoRange`](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.IsAutoRange.md) is `false`, changing this value updates the lower legend limit. When automatic range is enabled, the heat-map data determines the limit.
