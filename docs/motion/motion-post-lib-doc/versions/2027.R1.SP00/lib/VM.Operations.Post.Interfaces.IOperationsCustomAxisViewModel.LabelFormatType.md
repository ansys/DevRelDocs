# Property LabelFormatType
<a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_LabelFormatType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_LabelFormatType"></a> LabelFormatType

Gets or sets the numeric format selected from `LabelFormatType` for custom-axis labels.

```csharp
LabelFormatType LabelFormatType { get; set; }
```

### Property Value

 [LabelFormatType](VM.Models.Post.LabelFormatType.md)

### Remarks

Changing this value rebuilds the axis text format together with [`Decimal`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.Decimal.md).
