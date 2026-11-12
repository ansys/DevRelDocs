# Property FFTScaleType
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsFFTLineDataSeriesViewModel.FFTScaleType.md" download="VM.Operations.Post.Interfaces.IOperationsFFTLineDataSeriesViewModel.FFTScaleType.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
