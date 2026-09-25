# Interface IOperationsLine2DViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides 2D chart display settings and operations that create transformed curve data.

```csharp
public interface IOperationsLine2DViewModel : IOperationsLine2DViewModelBase, IOperationsChartViewModel, IView, IHasGuid
```

## Properties

 [AxisX](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.AxisX.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_AxisX)

Gets or sets whether the X axis is rendered in the 2D chart. `true` renders the axis and `false` hides it.

 [AxisY](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.AxisY.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_AxisY)

Gets or sets whether the Y axis is rendered in the 2D chart. `true` renders the axis and `false` hides it.

 [ShowAnimationBar](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.ShowAnimationBar.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_ShowAnimationBar)

Gets or sets whether the animation bar is rendered for the 2D chart. `true` renders the bar and `false` hides it.

 [ShowLegend](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.ShowLegend.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_ShowLegend)

Gets or sets whether the legend is rendered for the 2D chart. `true` renders it when curves are present and `false` hides it.

 [ShowVisibleMinMax](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.ShowVisibleMinMax.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_ShowVisibleMinMax)

Gets or sets whether minimum and maximum annotations are shown for visible curves. `true` shows the annotations and `false` hides them.

 [TrackingCurve](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.TrackingCurve.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_TrackingCurve)

Gets or sets whether data tracking is enabled for the 2D chart. `true` enables tracking and `false` disables it.

 [TrackingOption](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.TrackingOption.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_TrackingOption)

Gets or sets [`ChartAxisType`](VM.Models.Post.ChartAxisType.md) mode used when tracking displays data points over the chart. `Single` tracks one curve and `Multiple` tracks several curves.

## Methods

 [CreateAbsolute\(IEnumerable<string\>, SignType\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateAbsolute.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateAbsolute\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_VM\_Models\_Post\_SignType\_)

Transforms curve data into absolute values for the Y-Axis as part of the chart tab's Transform functionality.

 [CreateAbsolute\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, SignType\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateAbsolute.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateAbsolute\_System\_Collections\_Generic\_IEnumerable\_VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_\_VM\_Models\_Post\_SignType\_)

Transforms curve data into absolute values for the Y-Axis as part of the chart tab's Transform functionality.

 [CreateAlign\(IEnumerable<string\>, AlignType\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateAlign.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateAlign\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_VM\_Models\_Post\_AlignType\_)

Aligns curve data to zero or the first point of the target curve as part of the chart tab's Transform functionality.

 [CreateAlign\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, AlignType\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateAlign.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateAlign\_System\_Collections\_Generic\_IEnumerable\_VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_\_VM\_Models\_Post\_AlignType\_)

Aligns curve data to zero or the first point of the target curve as part of the chart tab's Transform functionality.

 [CreateDifferentiatedCurve\(IEnumerable<string\>\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateDifferentiatedCurve.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateDifferentiatedCurve\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_)

Differentiates curve data as part of the chart tab's Calculus functionality.

 [CreateDifferentiatedCurve\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateDifferentiatedCurve.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateDifferentiatedCurve\_System\_Collections\_Generic\_IEnumerable\_VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_\_)

Differentiates curve data as part of the chart tab's Calculus functionality.

 [CreateFFT\(IEnumerable<string\>, FFTType, FFTWindowType, ScaleType, int, double, double\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateFFT.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateFFT\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_VM\_Models\_Post\_FFTType\_VM\_Models\_Post\_FFTWindowType\_VM\_Models\_Post\_ScaleType\_System\_Int32\_System\_Double\_System\_Double\_)

Applies FFT (Fast Fourier Transform) to curve data as part of the chart tab's functionality.

 [CreateFFT\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, FFTType, FFTWindowType, ScaleType, int, double, double\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateFFT.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateFFT\_System\_Collections\_Generic\_IEnumerable\_VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_\_VM\_Models\_Post\_FFTType\_VM\_Models\_Post\_FFTWindowType\_VM\_Models\_Post\_ScaleType\_System\_Int32\_System\_Double\_System\_Double\_)

Applies FFT (Fast Fourier Transform) to curve data as part of the chart tab's functionality.

 [CreateFiltering\(IEnumerable<string\>, FilteringType, int, double, double\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateFiltering.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateFiltering\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_VM\_Models\_Post\_FilteringType\_System\_Int32\_System\_Double\_System\_Double\_)

Applies data filtering and smoothing to curve data as part of the chart tab's Signal Processing functionality.

 [CreateFiltering\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, FilteringType, int, double, double\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateFiltering.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateFiltering\_System\_Collections\_Generic\_IEnumerable\_VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_\_VM\_Models\_Post\_FilteringType\_System\_Int32\_System\_Double\_System\_Double\_)

Applies data filtering and smoothing to curve data as part of the chart tab's Signal Processing functionality.

 [CreateFrequencyWeighting\(IEnumerable<string\>, WeightingType, FrequencyAxisType\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateFrequencyWeighting.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateFrequencyWeighting\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_VM\_Models\_Post\_WeightingType\_VM\_Models\_Post\_FrequencyAxisType\_)

Applies frequency weighting to curve data as part of the chart tab's Signal Processing functionality.

 [CreateFrequencyWeighting\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, WeightingType, FrequencyAxisType\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateFrequencyWeighting.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateFrequencyWeighting\_System\_Collections\_Generic\_IEnumerable\_VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_\_VM\_Models\_Post\_WeightingType\_VM\_Models\_Post\_FrequencyAxisType\_)

Applies frequency weighting to curve data as part of the chart tab's Signal Processing functionality.

 [CreateIntegratedCurve\(IEnumerable<string\>\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateIntegratedCurve.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateIntegratedCurve\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_)

Integrates curve data as part of the chart tab's Calculus functionality.

 [CreateIntegratedCurve\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateIntegratedCurve.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateIntegratedCurve\_System\_Collections\_Generic\_IEnumerable\_VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_\_)

Integrates curve data as part of the chart tab's Calculus functionality.

 [CreateInterpolation\(IEnumerable<string\>, int\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateInterpolation.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateInterpolation\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_System\_Int32\_)

Applies interpolation to curve data as part of the chart tab's Interpolation functionality.

 [CreateInterpolation\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, int\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateInterpolation.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateInterpolation\_System\_Collections\_Generic\_IEnumerable\_VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_\_System\_Int32\_)

Applies interpolation to curve data as part of the chart tab's Interpolation functionality.

 [CreateLogScale\(IEnumerable<string\>, double, double, bool\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateLogScale.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateLogScale\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_System\_Double\_System\_Double\_System\_Boolean\_)

Applies a logarithmic scale to curve data as part of the chart tab's Transform functionality.

 [CreateLogScale\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, double, double, bool\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateLogScale.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateLogScale\_System\_Collections\_Generic\_IEnumerable\_VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_\_System\_Double\_System\_Double\_System\_Boolean\_)

Applies a logarithmic scale to curve data as part of the chart tab's Transform functionality.

 [CreateSTFT\(ISTFTParameters, IList<string\>\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSTFT.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateSTFT\_VM\_Models\_Post\_ISTFTParameters\_System\_Collections\_Generic\_IList\_System\_String\_\_)

Creates a Short Time Fourier Transform (STFT) for curve data and updates the heatmap data.

 [CreateSTFT\(ISTFTParameters, IEnumerable<IOperationsLineDataSeriesViewModelBase\>\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSTFT.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateSTFT\_VM\_Models\_Post\_ISTFTParameters\_System\_Collections\_Generic\_IEnumerable\_VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_\_)

Creates a Short Time Fourier Transform (STFT) for curve data and updates the heatmap data.

 [CreateScale\(IEnumerable<string\>, double, double\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateScale.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateScale\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_System\_Double\_System\_Double\_)

Scales curve data by the specified scale values as part of the chart tab's Transform functionality.

 [CreateScale\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, double, double\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateScale.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateScale\_System\_Collections\_Generic\_IEnumerable\_VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_\_System\_Double\_System\_Double\_)

Scales curve data by the specified scale values as part of the chart tab's Transform functionality.

 [CreateSimpleMath\(IEnumerable<string\>, SimpleMathType, int\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSimpleMath.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateSimpleMath\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_VM\_Models\_Post\_SimpleMathType\_System\_Int32\_)

Performs simple mathematical operations (+, -, *) on curve data as part of the chart tab's Simple Math functionality.

 [CreateSimpleMath\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, SimpleMathType, int\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSimpleMath.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateSimpleMath\_System\_Collections\_Generic\_IEnumerable\_VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_\_VM\_Models\_Post\_SimpleMathType\_System\_Int32\_)

Performs simple mathematical operations (+, -, *) on curve data as part of the chart tab's Simple Math functionality.

 [CreateSmoothing\(IEnumerable<string\>, SmoothingType, int, int\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSmoothing.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateSmoothing\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_VM\_Models\_Post\_SmoothingType\_System\_Int32\_System\_Int32\_)

Applies data filtering and smoothing to curve data as part of the chart tab's Signal Processing functionality.

 [CreateSmoothing\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, SmoothingType, int, int\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSmoothing.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateSmoothing\_System\_Collections\_Generic\_IEnumerable\_VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_\_VM\_Models\_Post\_SmoothingType\_System\_Int32\_System\_Int32\_)

Applies data filtering and smoothing to curve data as part of the chart tab's Signal Processing functionality.

 [CreateTranslate\(IEnumerable<string\>, double, double\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateTranslate.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateTranslate\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_System\_Double\_System\_Double\_)

Translates curve data by the specified offsets as part of the chart tab's Transform functionality.

 [CreateTranslate\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, double, double\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateTranslate.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModel\_CreateTranslate\_System\_Collections\_Generic\_IEnumerable\_VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_\_System\_Double\_System\_Double\_)

Translates curve data by the specified offsets as part of the chart tab's Transform functionality.
