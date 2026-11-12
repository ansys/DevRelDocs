# Property TrackingCurve
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.TrackingCurve.md" download="VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.TrackingCurve.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
