# Property SourceX
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
