# Interface IOperationsFFTLineDataSeriesViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides the time range, window, scale, result, and sample-count settings used to regenerate a calculated FFT curve.

```csharp
public interface IOperationsFFTLineDataSeriesViewModel
```

## Properties

 [End](VM.Operations.Post.Interfaces.IOperationsFFTLineDataSeriesViewModel.End.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFFTLineDataSeriesViewModel\_End)

Gets or sets the end time of the source interval used for FFT.

 [FFTScaleType](VM.Operations.Post.Interfaces.IOperationsFFTLineDataSeriesViewModel.FFTScaleType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFFTLineDataSeriesViewModel\_FFTScaleType)

Gets or sets the scale selected from [`ScaleType`](VM.Models.Post.ScaleType.md) to present FFT values.

 [FFTType](VM.Operations.Post.Interfaces.IOperationsFFTLineDataSeriesViewModel.FFTType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFFTLineDataSeriesViewModel\_FFTType)

Gets or sets the FFT result component selected from [`FFTType`](VM.Operations.Post.Interfaces.IOperationsFFTLineDataSeriesViewModel.FFTType.md).

 [FFTWindowType](VM.Operations.Post.Interfaces.IOperationsFFTLineDataSeriesViewModel.FFTWindowType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFFTLineDataSeriesViewModel\_FFTWindowType)

Gets or sets the window function selected from [`FFTWindowType`](VM.Operations.Post.Interfaces.IOperationsFFTLineDataSeriesViewModel.FFTWindowType.md) and applied before FFT.

 [SelectedPoints](VM.Operations.Post.Interfaces.IOperationsFFTLineDataSeriesViewModel.SelectedPoints.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFFTLineDataSeriesViewModel\_SelectedPoints)

Gets or sets the number of source data points used to generate the FFT curve.

 [Start](VM.Operations.Post.Interfaces.IOperationsFFTLineDataSeriesViewModel.Start.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFFTLineDataSeriesViewModel\_Start)

Gets or sets the start time of the source interval used for FFT.
