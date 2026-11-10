# Property SourceX
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.SourceX.md" download="VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.SourceX.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_SourceX"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_SourceX"></a> SourceX

Gets or sets [`ILineDataSeriesAxisViewModel`](VM.ViewModels.Post.ILineDataSeriesAxisViewModel.md) used to obtain X values for the curve.

```csharp
ILineDataSeriesAxisViewModel SourceX { get; set; }
```

### Property Value

 [ILineDataSeriesAxisViewModel](VM.ViewModels.Post.ILineDataSeriesAxisViewModel.md)

### Remarks

Changing this value updates the user-defined X source metadata and recalculates the curve when the Y source is also available.
