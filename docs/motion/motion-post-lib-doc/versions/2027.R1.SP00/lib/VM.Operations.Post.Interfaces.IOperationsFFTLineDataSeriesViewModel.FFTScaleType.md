# Property FFTScaleType
<a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_FFTScaleType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_FFTScaleType"></a> FFTScaleType

Gets or sets the scale selected from [`ScaleType`](VM.Models.Post.ScaleType.md) to present FFT values.

```csharp
ScaleType FFTScaleType { get; set; }
```

### Property Value

 [ScaleType](VM.Models.Post.ScaleType.md)

### Remarks

Changing this value refreshes the generated curve. For magnitude results, the original, logarithmic, or decibel scale changes the Y values. When [`FFTType`](VM.Operations.Post.Interfaces.IOperationsFFTLineDataSeriesViewModel.FFTType.md) selects phase, the result is expressed in degrees and logarithmic or decibel scaling is not applied.
