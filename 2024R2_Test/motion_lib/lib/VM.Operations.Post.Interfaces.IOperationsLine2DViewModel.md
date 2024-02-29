# <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel"></a> Interface IOperationsLine2DViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsLine2DViewModel : IOperationsLine2DViewModelBase, IOperationsBase
```

#### Implements

[IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md), 
[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_AxisX"></a> AxisX

Get or Set the visibility of Axis X.

```csharp
bool AxisX { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_AxisY"></a> AxisY

Get or Set  the visibility of Axis Y.

```csharp
bool AxisY { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_Legend"></a> Legend

Get or Set  the visibility of legend.

```csharp
bool Legend { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_ShowAnimationBar"></a> ShowAnimationBar

Get or Set the visibility of animation bar.

```csharp
bool ShowAnimationBar { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_TrackingCurve"></a> TrackingCurve

Get or Set  the visibility of the tracking bar.

```csharp
bool TrackingCurve { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_TrackingOption"></a> TrackingOption

Get or Set the Tracking Option of Chart.

```csharp
ChartAxisType TrackingOption { get; set; }
```

#### Property Value

 ChartAxisType

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateAbsolute_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_SignType_"></a> CreateAbsolute\(IEnumerable<string\>, SignType\)

Create a function to transform data series into absolute values for Y-Axis.

```csharp
void CreateAbsolute(IEnumerable<string> lstSeriesName, SignType signType)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`signType` SignType

The types of the absolute value are as follows.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateAlign_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_AlignType_"></a> CreateAlign\(IEnumerable<string\>, AlignType\)

Create a function to align data series to zero or the first point of the target curve.

```csharp
void CreateAlign(IEnumerable<string> lstSeriesName, AlignType alignType)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`alignType` AlignType

The types of the alignment are as follows.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateDifferentiatedCurve_System_Collections_Generic_IEnumerable_System_String__"></a> CreateDifferentiatedCurve\(IEnumerable<string\>\)

Create a function to use Calculus(Different) for data series.

```csharp
void CreateDifferentiatedCurve(IEnumerable<string> lstSeriesName)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFFT_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_FFTType_VM_Models_Post_FFTWindowType_VM_Models_Post_ScaleType_System_Int32_System_Double_System_Double_"></a> CreateFFT\(IEnumerable<string\>, FFTType, FFTWindowType, ScaleType, int, double, double\)

Create a function to use FFT(Fast Fourier Transform) for data series.

```csharp
void CreateFFT(IEnumerable<string> lstSeriesName, FFTType fftType, FFTWindowType fftWindowType, ScaleType scaleType, int points, double start, double end)
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

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFiltering_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_FilteringType_System_Int32_System_Double_System_Double_"></a> CreateFiltering\(IEnumerable<string\>, FilteringType, int, double, double\)

Create a function to use data filtering and smoothing for data series.

```csharp
void CreateFiltering(IEnumerable<string> lstSeriesName, FilteringType filteringType, int order, double frequency1, double frequency2)
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

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFrequencyWeighting_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_WeightingType_VM_Models_Post_FrequencyAxisType_"></a> CreateFrequencyWeighting\(IEnumerable<string\>, WeightingType, FrequencyAxisType\)

Create a function to use data filtering and smoothing for data series.

```csharp
void CreateFrequencyWeighting(IEnumerable<string> lstSeriesName, WeightingType weightingType, FrequencyAxisType axisType)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`weightingType` WeightingType

The types of the weighting are as follows.

`axisType` FrequencyAxisType

The types of the axis are as follows.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateIntegratedCurve_System_Collections_Generic_IEnumerable_System_String__"></a> CreateIntegratedCurve\(IEnumerable<string\>\)

Create a function to use Calculus(Integration) for data series.

```csharp
void CreateIntegratedCurve(IEnumerable<string> lstSeriesName)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateInterpolation_System_Collections_Generic_IEnumerable_System_String__System_Int32_"></a> CreateInterpolation\(IEnumerable<string\>, int\)

Create a function to use interpolation for data series.

```csharp
void CreateInterpolation(IEnumerable<string> lstSeriesName, int points)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`points` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of the data points for interpolation.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateLogScale_System_Collections_Generic_IEnumerable_System_String__System_Double_System_Double_System_Boolean_"></a> CreateLogScale\(IEnumerable<string\>, double, double, bool\)

Create a function to use the logarithm scale for data series.

```csharp
void CreateLogScale(IEnumerable<string> lstSeriesName, double coeficient, double baseValue, bool decibel)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`coeficient` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of the coefficient.

`baseValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of the base.

`decibel` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Taking the decibel scale for the list of the curve (20𝐿𝑜𝑔_10(Y)).

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSTFT_VM_Models_Post_IHeatMapSTFTDataViewModel_System_Collections_Generic_IList_System_String__"></a> CreateSTFT\(IHeatMapSTFTDataViewModel, IList<string\>\)

Create a function to use STFT(Short Time Fourier Transform) for data series.

```csharp
void CreateSTFT(IHeatMapSTFTDataViewModel hitmapData, IList<string> lstSeriesName)
```

#### Parameters

`hitmapData` IHeatMapSTFTDataViewModel

The list of the curve name to perform the operation.

`lstSeriesName` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The interface includes STFT information.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateScale_System_Collections_Generic_IEnumerable_System_String__System_Double_System_Double_"></a> CreateScale\(IEnumerable<string\>, double, double\)

Create a function to scale data series by the scale value.

```csharp
void CreateScale(IEnumerable<string> lstSeriesName, double scaleX, double scaleY)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`scaleX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to scale for X- axis.

`scaleY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to scale for Y- axis.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSimpleMath_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_SimpleMathType_System_Int32_"></a> CreateSimpleMath\(IEnumerable<string\>, SimpleMathType, int\)

Create a function to add, subtract and multiple between curves.

```csharp
void CreateSimpleMath(IEnumerable<string> lstSeriesName, SimpleMathType simpleMathType, int points)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`simpleMathType` SimpleMathType

The types of the simple math are as follows.

`points` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of data points for interpolation.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSmoothing_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_SmoothingType_System_Int32_System_Int32_"></a> CreateSmoothing\(IEnumerable<string\>, SmoothingType, int, int\)

Create a function to use data filtering and smoothing for data series.

```csharp
void CreateSmoothing(IEnumerable<string> lstSeriesName, SmoothingType smoothingType, int pointsOfWindow, int polyOrder)
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

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSoundPressureLevelLineSeries_System_String_System_String_VM_Point2D___System_String_System_String_"></a> CreateSoundPressureLevelLineSeries\(string, string, Point2D\[\], string, string\)

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

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateTranslate_System_Collections_Generic_IEnumerable_System_String__System_Double_System_Double_"></a> CreateTranslate\(IEnumerable<string\>, double, double\)

Create a function to translate data series by the offset.

```csharp
void CreateTranslate(IEnumerable<string> lstSeriesName, double offsetX, double offsetY)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

`offsetX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to translate for X- axis.

`offsetY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to translate for Y- axis.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_ExportToAnsysSound_System_Collections_Generic_IEnumerable_System_String__"></a> ExportToAnsysSound\(IEnumerable<string\>\)

Export data series to Ansys Sound.

```csharp
void ExportToAnsysSound(IEnumerable<string> lstSeriesName)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the curve name to perform the operation.

