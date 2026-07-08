# Interface IOperationsLine2DViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsLine2DViewModel : IOperationsLine2DViewModelBase, IOperationsBase
```

#### Implements

[IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md), 
[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Properties

### AxisX

Get or Set the visibility of Axis X.

```csharp
bool AxisX { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AxisY

Get or Set  the visibility of Axis Y.

```csharp
bool AxisY { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Legend

Get or Set  the visibility of legend.

```csharp
bool Legend { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShowAnimationBar

Get or Set the visibility of animation bar.

```csharp
bool ShowAnimationBar { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TrackingCurve

Get or Set  the visibility of the tracking bar.

```csharp
bool TrackingCurve { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TrackingOption

Get or Set the Tracking Option of Chart.

```csharp
ChartAxisType TrackingOption { get; set; }
```

#### Property Value

 ChartAxisType

## Methods

### CreateAbsolute\(IEnumerable<string\>, SignType\)

Create a function to transform data series into absolute values for Y-Axis.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateAbsolute(IEnumerable<string> lstSeriesName, SignType signType)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`signType` SignType

The types of the absolute value are as follows.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateAbsolute\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, SignType\)

Create a function to transform data series into absolute values for Y-Axis.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateAbsolute(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, SignType signType)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of the instance of the curve​s to perform the operation.

`signType` SignType

The types of the absolute value are as follows.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateAlign\(IEnumerable<string\>, AlignType\)

Create a function to align data series to zero or the first point of the target curve.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateAlign(IEnumerable<string> lstSeriesName, AlignType alignType)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`alignType` AlignType

The types of the alignment are as follows.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateAlign\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, AlignType\)

Create a function to align data series to zero or the first point of the target curve.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateAlign(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, AlignType alignType)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of the instance of the curve​s to perform the operation.

`alignType` AlignType

The types of the alignment are as follows.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateDifferentiatedCurve\(IEnumerable<string\>\)

Create a function to use Calculus(Different) for data series.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateDifferentiatedCurve(IEnumerable<string> lstSeriesName)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateDifferentiatedCurve\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>\)

Create a function to use Calculus(Different) for data series.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateDifferentiatedCurve(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of the instance of the curve​s to perform the operation.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateFFT\(IEnumerable<string\>, FFTType, FFTWindowType, ScaleType, int, double, double\)

Create a function to use FFT(Fast Fourier Transform) for data series.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFFT(IEnumerable<string> lstSeriesName, FFTType fftType, FFTWindowType fftWindowType, ScaleType scaleType, int points, double start, double end)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`fftType` FFTType

Magnitude, Phase

`fftWindowType` FFTWindowType

Rectangular, Triangular, Bartlett, Hanning, Hamming, Welch, BlackMan, None

`scaleType` ScaleType

Original, Logarithm, Decibel

`points` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of data point for FFT.

`start` [double](https://learn.microsoft.com/dotnet/api/system.double)

The start time for using FFT on target data series.

`end` [double](https://learn.microsoft.com/dotnet/api/system.double)

The end time for using FFT on target data series.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateFFT\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, FFTType, FFTWindowType, ScaleType, int, double, double\)

Create a function to use FFT(Fast Fourier Transform) for data series.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFFT(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, FFTType fftType, FFTWindowType fftWindowType, ScaleType scaleType, int points, double start, double end)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of the curve​ instance to perform the operation.

`fftType` FFTType

Magnitude, Phase

`fftWindowType` FFTWindowType

Rectangular, Triangular, Bartlett, Hanning, Hamming, Welch, BlackMan, None

`scaleType` ScaleType

Original, Logarithm, Decibel

`points` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of data point for FFT.

`start` [double](https://learn.microsoft.com/dotnet/api/system.double)

The start time for using FFT on target data series.

`end` [double](https://learn.microsoft.com/dotnet/api/system.double)

The end time for using FFT on target data series.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateFiltering\(IEnumerable<string\>, FilteringType, int, double, double\)

Create a function to use data filtering and smoothing for data series.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFiltering(IEnumerable<string> lstSeriesName, FilteringType filteringType, int order, double frequency1, double frequency2)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`filteringType` FilteringType

The types of the filter are as follows.

`order` [int](https://learn.microsoft.com/dotnet/api/system.int32)

As decreasing value, output would be more smooth.

`frequency1` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of frequency1.

`frequency2` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of frequency2.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateFiltering\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, FilteringType, int, double, double\)

Create a function to use data filtering and smoothing for data series.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFiltering(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, FilteringType filteringType, int order, double frequency1, double frequency2)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of the curve​ instance to perform the operation.

`filteringType` FilteringType

The types of the filter are as follows.

`order` [int](https://learn.microsoft.com/dotnet/api/system.int32)

As decreasing value, output would be more smooth.

`frequency1` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of frequency1.

`frequency2` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of frequency2.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateFrequencyWeighting\(IEnumerable<string\>, WeightingType, FrequencyAxisType\)

Create a function to use data filtering and smoothing for data series.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFrequencyWeighting(IEnumerable<string> lstSeriesName, WeightingType weightingType, FrequencyAxisType axisType)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`weightingType` WeightingType

The types of the weighting are as follows.

`axisType` FrequencyAxisType

The types of the axis are as follows.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateFrequencyWeighting\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, WeightingType, FrequencyAxisType\)

Create a function to use data filtering and smoothing for data series.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFrequencyWeighting(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, WeightingType weightingType, FrequencyAxisType axisType)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of the curve​ instance to perform the operation.

`weightingType` WeightingType

The types of the weighting are as follows.

`axisType` FrequencyAxisType

The types of the axis are as follows.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateIntegratedCurve\(IEnumerable<string\>\)

Create a function to use Calculus(Integration) for data series.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateIntegratedCurve(IEnumerable<string> lstSeriesName)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateIntegratedCurve\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>\)

Create a function to use Calculus(Integration) for data series.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateIntegratedCurve(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of the curve​ instance to perform the operation.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateInterpolation\(IEnumerable<string\>, int\)

Create a function to use interpolation for data series.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateInterpolation(IEnumerable<string> lstSeriesName, int points)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`points` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of the data points for interpolation.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateInterpolation\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, int\)

Create a function to use interpolation for data series.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateInterpolation(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, int points)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of the curve​ instance to perform the operation.

`points` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of the data points for interpolation.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateLogScale\(IEnumerable<string\>, double, double, bool\)

Create a function to use the logarithm scale for data series.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateLogScale(IEnumerable<string> lstSeriesName, double coefficient, double baseValue, bool decibel)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`coefficient` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of the coefficient.

`baseValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of the base.

`decibel` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Taking the decibel scale for the list of the curve (20𝐿𝑜𝑔_10(Y)).

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateLogScale\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, double, double, bool\)

Create a function to use the logarithm scale for data series.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateLogScale(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, double coefficient, double baseValue, bool decibel)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of the curve​ instance to perform the operation.

`coefficient` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of the coefficient.

`baseValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of the base.

`decibel` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Taking the decibel scale for the list of the curve (20𝐿𝑜𝑔_10(Y)).

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateSTFT\(IHeatMapSTFTDataViewModel, IList<string\>\)

Create a function to use STFT(Short Time Fourier Transform) for data series.

```csharp
void CreateSTFT(IHeatMapSTFTDataViewModel hitmapData, IList<string> lstSeriesName)
```

#### Parameters

`hitmapData` IHeatMapSTFTDataViewModel

The list of the curve name to perform the operation.

`lstSeriesName` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The interface includes STFT information.

### CreateSTFT\(IHeatMapSTFTDataViewModel, IEnumerable<IOperationsLineDataSeriesViewModelBase\>\)

Create a function to use STFT(Short Time Fourier Transform) for data series.

```csharp
void CreateSTFT(IHeatMapSTFTDataViewModel hitmapData, IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels)
```

#### Parameters

`hitmapData` IHeatMapSTFTDataViewModel

The list of the curve name to perform the operation.

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The interface includes STFT information.

### CreateScale\(IEnumerable<string\>, double, double\)

Create a function to scale data series by the scale value.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateScale(IEnumerable<string> lstSeriesName, double scaleX, double scaleY)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`scaleX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to scale for X- axis.

`scaleY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to scale for Y- axis.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateScale\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, double, double\)

Create a function to scale data series by the scale value.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateScale(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, double scaleX, double scaleY)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of the curve​ instance to perform the operation.

`scaleX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to scale for X- axis.

`scaleY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to scale for Y- axis.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateSimpleMath\(IEnumerable<string\>, SimpleMathType, int\)

Create a function to add, subtract and multiple between curves.

```csharp
IOperationsLineDataSeriesViewModelBase CreateSimpleMath(IEnumerable<string> lstSeriesName, SimpleMathType simpleMathType, int points)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`simpleMathType` SimpleMathType

The types of the simple math are as follows.

`points` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of data points for interpolation.

#### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

The instance of curve.

### CreateSimpleMath\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, SimpleMathType, int\)

Create a function to add, subtract and multiple between curves.

```csharp
IOperationsLineDataSeriesViewModelBase CreateSimpleMath(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, SimpleMathType simpleMathType, int points)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of the curve​ instance to perform the operation.

`simpleMathType` SimpleMathType

The types of the simple math are as follows.

`points` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of data points for interpolation.

#### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

The instance of curve.

### CreateSmoothing\(IEnumerable<string\>, SmoothingType, int, int\)

Create a function to use data filtering and smoothing for data series.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateSmoothing(IEnumerable<string> lstSeriesName, SmoothingType smoothingType, int pointsOfWindow, int polyOrder)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`smoothingType` SmoothingType

The types of the sommthing are as follows.

`pointsOfWindow` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of points for window.

`polyOrder` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The value of polyOrder.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateSmoothing\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, SmoothingType, int, int\)

Create a function to use data filtering and smoothing for data series.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateSmoothing(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, SmoothingType smoothingType, int pointsOfWindow, int polyOrder)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of the curve​ instance to perform the operation.

`smoothingType` SmoothingType

The types of the sommthing are as follows.

`pointsOfWindow` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of points for window.

`polyOrder` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The value of polyOrder.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateSoundPressureLevelLineSeries\(string, string, Point2D\[\], string, string\)

Create a function to use SoundPressure for data series.

```csharp
void CreateSoundPressureLevelLineSeries(string fullName, string resultDocumentFilePath, Point2D[] points, string xDimension, string yDimension)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`resultDocumentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`points` Point2D\[\]

`xDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`yDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

### CreateTranslate\(IEnumerable<string\>, double, double\)

Create a function to translate data series by the offset.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateTranslate(IEnumerable<string> lstSeriesName, double offsetX, double offsetY)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`offsetX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to translate for X- axis.

`offsetY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to translate for Y- axis.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### CreateTranslate\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, double, double\)

Create a function to translate data series by the offset.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateTranslate(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, double offsetX, double offsetY)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of the curve​ instance to perform the operation.

`offsetX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to translate for X- axis.

`offsetY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to translate for Y- axis.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of curves.

### ExportToAnsysSound\(IEnumerable<IRenderableSeries\>\)

Export data series to Ansys Sound.

```csharp
void ExportToAnsysSound(IEnumerable<IRenderableSeries> lstSeriesName)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IRenderableSeries\>

The list of the curve name to perform the operation.


