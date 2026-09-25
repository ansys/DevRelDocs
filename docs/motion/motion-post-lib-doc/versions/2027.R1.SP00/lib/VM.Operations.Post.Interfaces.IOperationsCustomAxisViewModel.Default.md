# Property Default
<a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_Default"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_Default"></a> Default

Gets or sets whether axis label decimal formatting is automatic. `true` uses automatic formatting and `false` applies [`Decimal`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.Decimal.md) and [`LabelFormatType`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.LabelFormatType.md).

```csharp
bool Default { get; set; }
```

### Property Value

 bool

### Remarks

When this value is `false`, [`Decimal`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.Decimal.md) and [`LabelFormatType`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.LabelFormatType.md) provide the custom label format. When it is `true`, the axis uses its default label formatting.
