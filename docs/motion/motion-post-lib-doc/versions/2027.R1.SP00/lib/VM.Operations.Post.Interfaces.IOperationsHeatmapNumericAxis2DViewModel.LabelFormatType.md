# Property LabelFormatType
<a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_LabelFormatType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_LabelFormatType"></a> LabelFormatType

Gets or sets the numeric format applied to axis labels when manual formatting is enabled.

```csharp
LabelFormatType LabelFormatType { get; set; }
```

### Property Value

 [LabelFormatType](VM.Models.Post.LabelFormatType.md)

### Remarks

Changing this value updates the numeric label format and is effective when [`General`](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.General.md) is `false`.
