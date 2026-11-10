# Property IsAutoRange
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.IsAutoRange.md" download="VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.IsAutoRange.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
