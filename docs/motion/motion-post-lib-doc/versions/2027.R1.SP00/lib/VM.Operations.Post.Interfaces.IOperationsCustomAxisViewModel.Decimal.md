# Property Decimal
<a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_Decimal"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_Decimal"></a> Decimal

Gets or sets the number of decimal places, from `0` through `16`, used in axis labels when manual decimal formatting is enabled.

```csharp
int Decimal { get; set; }
```

### Property Value

 int

### Remarks

Changing this value updates the axis text format together with [`LabelFormatType`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.LabelFormatType.md).
