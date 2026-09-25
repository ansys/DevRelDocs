# Property Start
<a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_Start"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_Start"></a> Start

Gets or sets the start time of the source interval used for FFT.

```csharp
double Start { get; set; }
```

### Property Value

 double

### Remarks

Changing this value refreshes the FFT calculation when the referenced source curve exists. The calculation requires `Start` to be no greater than [`End`](VM.Operations.Post.Interfaces.IOperationsFFTLineDataSeriesViewModel.End.md) and the interval to overlap the source X range.
