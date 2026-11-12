# Property Max
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.Max.md" download="VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.Max.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
