# Interface IOperationsHeatMapSTFTDataViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides the source, scaling, legend, and export settings used to calculate Short-Time Fourier Transform (STFT) heat-map data.

```csharp
public interface IOperationsHeatMapSTFTDataViewModel
```

## Properties

 [End](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.End.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapSTFTDataViewModel\_End)

Gets or sets the end of the time interval analyzed by STFT.

 [LegendColorType](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.LegendColorType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapSTFTDataViewModel\_LegendColorType)

Gets or sets [`ColorSchemeType`](VM.Models.Post.ColorSchemeType.md) used to map STFT values in the legend and heat map.

 [Overlap](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.Overlap.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapSTFTDataViewModel\_Overlap)

Gets or sets the percentage of overlap between adjacent STFT windows.

 [ReferenceValue](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.ReferenceValue.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapSTFTDataViewModel\_ReferenceValue)

Gets or sets the reference value used for STFT decibel scaling.

 [SamplingFrequency](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.SamplingFrequency.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapSTFTDataViewModel\_SamplingFrequency)

Gets or sets the sampling frequency used to build the STFT frequency axis.

 [ScaleFactor](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.ScaleFactor.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapSTFTDataViewModel\_ScaleFactor)

Gets or sets the factor applied to STFT time coordinates.

 [SelectedPoints](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.SelectedPoints.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapSTFTDataViewModel\_SelectedPoints)

Gets or sets the number of samples used for each FFT calculation.

 [SelectedScaleType](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.SelectedScaleType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapSTFTDataViewModel\_SelectedScaleType)

Gets or sets [`STFTScaleType`](VM.Models.Post.STFTScaleType.md) used for STFT values.

 [Start](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.Start.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapSTFTDataViewModel\_Start)

Gets or sets the start of the time interval analyzed by STFT.

 [TimeSlice](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.TimeSlice.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapSTFTDataViewModel\_TimeSlice)

Gets or sets the time length of each STFT window.

## Methods

 [ExportOrderTrackingCurve\(string\)](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.ExportOrderTrackingCurve.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapSTFTDataViewModel\_ExportOrderTrackingCurve\_System\_String\_)

Exports a selected STFT heat-map curve as order-tracking curve data.
