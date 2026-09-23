# Property IsAutoRange
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_IsAutoRange"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_IsAutoRange"></a> IsAutoRange

Gets or sets whether the heat-map legend range is calculated automatically. `true` calculates [`Min`](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.Min.md) and [`Max`](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.Max.md) automatically; `false` uses assigned values.

```csharp
bool IsAutoRange { get; set; }
```

### Property Value

 bool

### Remarks

When this property is `true`, the displayed range is calculated from heat-map data and manual [`Min`](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.Min.md) and [`Max`](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.Max.md) values do not control it. When it is `false`, those properties define the displayed range.
