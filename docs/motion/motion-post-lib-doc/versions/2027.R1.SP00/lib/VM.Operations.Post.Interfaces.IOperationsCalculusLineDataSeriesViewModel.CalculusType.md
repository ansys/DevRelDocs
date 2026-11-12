# Property CalculusType
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsCalculusLineDataSeriesViewModel.CalculusType.md" download="VM.Operations.Post.Interfaces.IOperationsCalculusLineDataSeriesViewModel.CalculusType.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsCalculusLineDataSeriesViewModel_CalculusType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCalculusLineDataSeriesViewModel_CalculusType"></a> CalculusType

Gets or sets the calculus operation selected from `CalculusType` for the calculated curve.

```csharp
CalculusType CalculusType { get; set; }
```

### Property Value

 [CalculusType](VM.Models.Post.CalculusType.md)

### Remarks

Changing `CalculusType` recalculates points from the original curve. Differentiation produces derivative points, while integration produces accumulated points.

The calculated curve raises a change notification after recalculation.
