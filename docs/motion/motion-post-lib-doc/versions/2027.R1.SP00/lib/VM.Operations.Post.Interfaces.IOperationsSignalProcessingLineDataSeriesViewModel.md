# Interface IOperationsSignalProcessingLineDataSeriesViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides signal-processing settings for a calculated curve created from an existing curve.

```csharp
public interface IOperationsSignalProcessingLineDataSeriesViewModel
```

## Properties

 [CutOffFrequency](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.CutOffFrequency.md\#VM\_Operations\_Post\_Interfaces\_IOperationsSignalProcessingLineDataSeriesViewModel\_CutOffFrequency)

Gets or sets the cutoff frequency, in the frequency unit of the source curve, for low-pass or high-pass filtering.

 [FilteringType](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.FilteringType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsSignalProcessingLineDataSeriesViewModel\_FilteringType)

Gets or sets the filter mode selected from [`FilteringType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.FilteringType.md) for signal processing.

 [FrequencyAxisType](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.FrequencyAxisType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsSignalProcessingLineDataSeriesViewModel\_FrequencyAxisType)

Gets or sets the frequency axis selected from [`FrequencyAxisType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.FrequencyAxisType.md) during frequency weighting.

 [HighCutOffFrequency](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.HighCutOffFrequency.md\#VM\_Operations\_Post\_Interfaces\_IOperationsSignalProcessingLineDataSeriesViewModel\_HighCutOffFrequency)

Gets or sets the upper cutoff frequency, in the frequency unit of the source curve, for band-pass or band-stop filtering.

 [LowCutOffFrequency](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.LowCutOffFrequency.md\#VM\_Operations\_Post\_Interfaces\_IOperationsSignalProcessingLineDataSeriesViewModel\_LowCutOffFrequency)

Gets or sets the lower cutoff frequency, in the frequency unit of the source curve, for band-pass or band-stop filtering.

 [Order](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.Order.md\#VM\_Operations\_Post\_Interfaces\_IOperationsSignalProcessingLineDataSeriesViewModel\_Order)

Gets or sets the filter order passed to the filtering calculation.

 [PointsOfWindow](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.PointsOfWindow.md\#VM\_Operations\_Post\_Interfaces\_IOperationsSignalProcessingLineDataSeriesViewModel\_PointsOfWindow)

Gets or sets the number of points used by the smoothing calculation.

 [PolynomialOrder](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.PolynomialOrder.md\#VM\_Operations\_Post\_Interfaces\_IOperationsSignalProcessingLineDataSeriesViewModel\_PolynomialOrder)

Gets or sets the polynomial order passed to Savitzky-Golay smoothing.

 [SignalProcessingType](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.SignalProcessingType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsSignalProcessingLineDataSeriesViewModel\_SignalProcessingType)

Gets or sets the signal-processing operation selected from [`SignalProcessingType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.SignalProcessingType.md) and applied to the source curve.

 [SmoothingType](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.SmoothingType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsSignalProcessingLineDataSeriesViewModel\_SmoothingType)

Gets or sets the smoothing method selected from [`SmoothingType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.SmoothingType.md).

 [WeightingType](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.WeightingType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsSignalProcessingLineDataSeriesViewModel\_WeightingType)

Gets or sets the frequency-weighting method selected from [`WeightingType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.WeightingType.md).
