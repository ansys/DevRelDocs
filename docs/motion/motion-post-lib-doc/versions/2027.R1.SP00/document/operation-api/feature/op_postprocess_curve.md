# Postprocess a Curve
This feature covers creating new curve data with [`IOperationsLine2DViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.md) from curves already in [`IOperationsLine2DViewModelBase`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md). Each new curve stays in the chart, so it can be found or exported like any other curve, see [Manage a Curve](op_manage_curve.md), and its look can be set through [Curve Properties](op_curve_properties.md).

## Simple Math
Create a curve from a simple arithmetic operation with [`CreateSimpleMath(IEnumerable<string>, SimpleMathType, int)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSimpleMath.md) or [`CreateSimpleMath(IEnumerable<IOperationsLineDataSeriesViewModelBase>, SimpleMathType, int)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSimpleMath.md).

## Transform
Create shifted curves with [`CreateTranslate(IEnumerable<string>, double, double)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateTranslate.md) or [`CreateTranslate(IEnumerable<IOperationsLineDataSeriesViewModelBase>, double, double)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateTranslate.md).

Create scaled curves with [`CreateScale(IEnumerable<string>, double, double)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateScale.md) or [`CreateScale(IEnumerable<IOperationsLineDataSeriesViewModelBase>, double, double)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateScale.md).

Create curves with only positive or only negative values with [`CreateAbsolute(IEnumerable<string>, SignType)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateAbsolute.md) or [`CreateAbsolute(IEnumerable<IOperationsLineDataSeriesViewModelBase>, SignType)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateAbsolute.md).

Create aligned curves with [`CreateAlign(IEnumerable<string>, AlignType)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateAlign.md) or [`CreateAlign(IEnumerable<IOperationsLineDataSeriesViewModelBase>, AlignType)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateAlign.md).

Create curves on a logarithmic scale with [`CreateLogScale(IEnumerable<string>, double, double, bool)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateLogScale.md) or [`CreateLogScale(IEnumerable<IOperationsLineDataSeriesViewModelBase>, double, double, bool)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateLogScale.md).

## Interpolation
Create interpolated curves with [`CreateInterpolation(IEnumerable<string>, int)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateInterpolation.md) or [`CreateInterpolation(IEnumerable<IOperationsLineDataSeriesViewModelBase>, int)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateInterpolation.md).

## Calculus
Create differentiated curves with [`CreateDifferentiatedCurve(IEnumerable<string>)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateDifferentiatedCurve.md) or [`CreateDifferentiatedCurve(IEnumerable<IOperationsLineDataSeriesViewModelBase>)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateDifferentiatedCurve.md).

Create integrated curves with [`CreateIntegratedCurve(IEnumerable<string>)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateIntegratedCurve.md) or [`CreateIntegratedCurve(IEnumerable<IOperationsLineDataSeriesViewModelBase>)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateIntegratedCurve.md).

## Signal Processing
Create filtered curves with [`CreateFiltering(IEnumerable<string>, FilteringType, int, double, double)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateFiltering.md) or [`CreateFiltering(IEnumerable<IOperationsLineDataSeriesViewModelBase>, FilteringType, int, double, double)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateFiltering.md).

Create smoothed curves with [`CreateSmoothing(IEnumerable<string>, SmoothingType, int, int)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSmoothing.md) or [`CreateSmoothing(IEnumerable<IOperationsLineDataSeriesViewModelBase>, SmoothingType, int, int)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSmoothing.md).

Create frequency-weighted curves with [`CreateFrequencyWeighting(IEnumerable<string>, WeightingType, FrequencyAxisType)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateFrequencyWeighting.md) or [`CreateFrequencyWeighting(IEnumerable<IOperationsLineDataSeriesViewModelBase>, WeightingType, FrequencyAxisType)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateFrequencyWeighting.md).

## FFT
Create a frequency-domain curve with [`CreateFFT(IEnumerable<string>, FFTType, FFTWindowType, ScaleType, int, double, double)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateFFT.md) or [`CreateFFT(IEnumerable<IOperationsLineDataSeriesViewModelBase>, FFTType, FFTWindowType, ScaleType, int, double, double)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateFFT.md).

## STFT
Create a short-time frequency result with [`CreateSTFT(ISTFTParameters, IList<string>)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSTFT.md) or [`CreateSTFT(ISTFTParameters, IEnumerable<IOperationsLineDataSeriesViewModelBase>)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSTFT.md).