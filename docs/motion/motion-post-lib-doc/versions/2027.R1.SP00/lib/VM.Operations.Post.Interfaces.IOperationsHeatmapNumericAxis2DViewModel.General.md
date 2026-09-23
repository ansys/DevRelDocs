# Property General
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
