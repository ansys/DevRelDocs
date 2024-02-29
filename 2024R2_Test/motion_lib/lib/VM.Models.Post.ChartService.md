# <a id="VM_Models_Post_ChartService"></a> Class ChartService

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public static class ChartService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ChartService](VM.Models.Post.ChartService.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_ChartService_CalculateCalculusDifferentiate_VM_Point2D___"></a> CalculateCalculusDifferentiate\(Point2D\[\]\)

```csharp
public static Point2D[] CalculateCalculusDifferentiate(Point2D[] originalPoints)
```

#### Parameters

`originalPoints` Point2D\[\]

#### Returns

 Point2D\[\]

### <a id="VM_Models_Post_ChartService_CalculateCalculusIntegrate_VM_Point2D___"></a> CalculateCalculusIntegrate\(Point2D\[\]\)

```csharp
public static Point2D[] CalculateCalculusIntegrate(Point2D[] originalPoints)
```

#### Parameters

`originalPoints` Point2D\[\]

#### Returns

 Point2D\[\]

### <a id="VM_Models_Post_ChartService_CalculateDynamicPPTE_VM_Models_Post_ResultDocument_System_String_System_Double_System_Int32_"></a> CalculateDynamicPPTE\(ResultDocument, string, double, int\)

```csharp
public static Point2D[] CalculateDynamicPPTE(ResultDocument document, string selectedObjectFullPath, double start, int slice)
```

#### Parameters

`document` [ResultDocument](VM.Models.Post.ResultDocument.md)

`selectedObjectFullPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`start` [double](https://learn.microsoft.com/dotnet/api/system.double)

`slice` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 Point2D\[\]

### <a id="VM_Models_Post_ChartService_CalculateFFT_System_Double___System_Double___VM_Models_Post_FFTType_VM_Models_Post_FFTWindowType_VM_Models_Post_ScaleType_System_Int32_System_Double_System_Double_System_Boolean_System_Func_System_Boolean__"></a> CalculateFFT\(double\[\], double\[\], FFTType, FFTWindowType, ScaleType, int, double, double, bool, Func<bool\>\)

```csharp
public static Point2D[] CalculateFFT(double[] originalXValues, double[] originalYValues, FFTType fftType, FFTWindowType fftWindowType, ScaleType scaleType, int desiredPointCount, double start, double end, bool isFullData, Func<bool> proceedIfXisDuplicate = null)
```

#### Parameters

`originalXValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`originalYValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`fftType` [FFTType](VM.Models.Post.FFTType.md)

`fftWindowType` [FFTWindowType](VM.Models.Post.FFTWindowType.md)

`scaleType` [ScaleType](VM.Models.Post.ScaleType.md)

`desiredPointCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`start` [double](https://learn.microsoft.com/dotnet/api/system.double)

`end` [double](https://learn.microsoft.com/dotnet/api/system.double)

`isFullData` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`proceedIfXisDuplicate` [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

#### Returns

 Point2D\[\]

### <a id="VM_Models_Post_ChartService_CalculateFrequencyResponseAnalysis_VM_Models_Post_ResultDocument_System_UInt32_System_Double_System_Double_System_Int32_System_String_System_Collections_Generic_IEnumerable_System_String__"></a> CalculateFrequencyResponseAnalysis\(ResultDocument, uint, double, double, int, string, IEnumerable<string\>\)

```csharp
public static Point2D[] CalculateFrequencyResponseAnalysis(ResultDocument document, uint samplingTimeSequence, double from, double to, int step, string outputChannel, IEnumerable<string> inputChannels)
```

#### Parameters

`document` [ResultDocument](VM.Models.Post.ResultDocument.md)

`samplingTimeSequence` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`from` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [double](https://learn.microsoft.com/dotnet/api/system.double)

`step` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`outputChannel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`inputChannels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 Point2D\[\]

### <a id="VM_Models_Post_ChartService_CalculateHarmonicTE_VM_Models_Post_ResultDocument_System_String_VM_Models_Post_FFTType_VM_Models_Post_ScaleType_System_Int32_System_Double_System_Double_"></a> CalculateHarmonicTE\(ResultDocument, string, FFTType, ScaleType, int, double, double\)

```csharp
public static Point2D[] CalculateHarmonicTE(ResultDocument document, string selectedObjectFullPath, FFTType selectedFFTType, ScaleType selectedScaleType, int point, double start, double end)
```

#### Parameters

`document` [ResultDocument](VM.Models.Post.ResultDocument.md)

`selectedObjectFullPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`selectedFFTType` [FFTType](VM.Models.Post.FFTType.md)

`selectedScaleType` [ScaleType](VM.Models.Post.ScaleType.md)

`point` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`start` [double](https://learn.microsoft.com/dotnet/api/system.double)

`end` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 Point2D\[\]

### <a id="VM_Models_Post_ChartService_CalculateInterpolation_System_Double___System_Double___System_Int32_"></a> CalculateInterpolation\(double\[\], double\[\], int\)

```csharp
public static Point2D[] CalculateInterpolation(double[] originalXValues, double[] originalYValues, int points)
```

#### Parameters

`originalXValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`originalYValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`points` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 Point2D\[\]

### <a id="VM_Models_Post_ChartService_CalculateShuttlingForce_VM_Models_Post_ResultDocument_System_String_System_Double_System_Int32_"></a> CalculateShuttlingForce\(ResultDocument, string, double, int\)

```csharp
public static Point2D[] CalculateShuttlingForce(ResultDocument document, string selectedObjectFullPath, double start, int slice)
```

#### Parameters

`document` [ResultDocument](VM.Models.Post.ResultDocument.md)

`selectedObjectFullPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`start` [double](https://learn.microsoft.com/dotnet/api/system.double)

`slice` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 Point2D\[\]

### <a id="VM_Models_Post_ChartService_CalculateSignalProcessingFiltering_System_Double___System_Double___VM_Models_Post_FilteringType_System_Int32_System_Double_System_Double_"></a> CalculateSignalProcessingFiltering\(double\[\], double\[\], FilteringType, int, double, double\)

```csharp
public static Point2D[] CalculateSignalProcessingFiltering(double[] originalXValues, double[] originalYValues, FilteringType filteringType, int order, double frequency1, double frequency2)
```

#### Parameters

`originalXValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`originalYValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`filteringType` [FilteringType](VM.Models.Post.FilteringType.md)

`order` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`frequency1` [double](https://learn.microsoft.com/dotnet/api/system.double)

`frequency2` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 Point2D\[\]

### <a id="VM_Models_Post_ChartService_CalculateSignalProcessingFrequencyWeighting_System_Double___System_Double___VM_Models_Post_WeightingType_VM_Models_Post_FrequencyAxisType_"></a> CalculateSignalProcessingFrequencyWeighting\(double\[\], double\[\], WeightingType, FrequencyAxisType\)

```csharp
public static Point2D[] CalculateSignalProcessingFrequencyWeighting(double[] originalXValues, double[] originalYValues, WeightingType weightingType, FrequencyAxisType axisType)
```

#### Parameters

`originalXValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`originalYValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`weightingType` [WeightingType](VM.Models.Post.WeightingType.md)

`axisType` [FrequencyAxisType](VM.Models.Post.FrequencyAxisType.md)

#### Returns

 Point2D\[\]

### <a id="VM_Models_Post_ChartService_CalculateSignalProcessingSmoothing_System_Double___System_Double___VM_Models_Post_SmoothingType_System_Int32_System_Int32_"></a> CalculateSignalProcessingSmoothing\(double\[\], double\[\], SmoothingType, int, int\)

```csharp
public static Point2D[] CalculateSignalProcessingSmoothing(double[] originalXValues, double[] originalYValues, SmoothingType smoothingType, int pointsOfWindow, int polyOrder)
```

#### Parameters

`originalXValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`originalYValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`smoothingType` [SmoothingType](VM.Models.Post.SmoothingType.md)

`pointsOfWindow` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`polyOrder` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 Point2D\[\]

### <a id="VM_Models_Post_ChartService_CalculateSimpleMath_System_Collections_Generic_IEnumerable_VM_Models_Post_ISeries__VM_Models_Post_SimpleMathType_System_Int32_"></a> CalculateSimpleMath\(IEnumerable<ISeries\>, SimpleMathType, int\)

```csharp
public static (string Expression, string InnerExpression, string XDimension, string YDimension, Point2D[] Points) CalculateSimpleMath(IEnumerable<ISeries> series, SimpleMathType simpleMathType, int pointCount)
```

#### Parameters

`series` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ISeries](VM.Models.Post.ISeries.md)\>

`simpleMathType` [SimpleMathType](VM.Models.Post.SimpleMathType.md)

`pointCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 \([string](https://learn.microsoft.com/dotnet/api/system.string) [Expression](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.string,system.string,system.string,vm.point2d\[\]\-.expression), [string](https://learn.microsoft.com/dotnet/api/system.string) [InnerExpression](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.string,system.string,system.string,vm.point2d\[\]\-.innerexpression), [string](https://learn.microsoft.com/dotnet/api/system.string) [XDimension](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.string,system.string,system.string,vm.point2d\[\]\-.xdimension), [string](https://learn.microsoft.com/dotnet/api/system.string) [YDimension](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.string,system.string,system.string,vm.point2d\[\]\-.ydimension), Point2D\[\] [Points](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.string,system.string,system.string,vm.point2d\[\]\-.points)\)

