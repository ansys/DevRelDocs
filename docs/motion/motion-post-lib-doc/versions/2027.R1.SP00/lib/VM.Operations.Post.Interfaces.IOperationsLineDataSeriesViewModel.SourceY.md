# Property SourceY
<a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_SourceY"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_SourceY"></a> SourceY

Gets or sets [`ILineDataSeriesAxisViewModel`](VM.ViewModels.Post.ILineDataSeriesAxisViewModel.md) used to obtain Y values for the curve.

```csharp
ILineDataSeriesAxisViewModel SourceY { get; set; }
```

### Property Value

 [ILineDataSeriesAxisViewModel](VM.ViewModels.Post.ILineDataSeriesAxisViewModel.md)

### Remarks

Changing this value updates the user-defined Y source metadata and recalculates the curve when the X source is also available.
