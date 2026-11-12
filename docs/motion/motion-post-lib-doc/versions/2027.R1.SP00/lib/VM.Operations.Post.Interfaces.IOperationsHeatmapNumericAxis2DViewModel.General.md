# Property General
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.General.md" download="VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.General.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_General"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_General"></a> General

Gets or sets whether the label format is automatic. `true` selects general formatting and `false` uses [`Digit`](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.Digit.md) and [`LabelFormatType`](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.LabelFormatType.md).

```csharp
bool General { get; set; }
```

### Property Value

 bool

### Remarks

When this value is `true`, the axis switches to general formatting and resets the digit setting to `15`. When it is `false`, [`Digit`](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.Digit.md) and [`LabelFormatType`](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.LabelFormatType.md) define the manual format.
