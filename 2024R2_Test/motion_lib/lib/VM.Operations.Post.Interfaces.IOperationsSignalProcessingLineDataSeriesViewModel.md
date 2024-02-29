# <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel"></a> Interface IOperationsSignalProcessingLineDataSeriesViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsSignalProcessingLineDataSeriesViewModel
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_CutOffFrequency"></a> CutOffFrequency

Get or Set the value of the cut off frequency.

```csharp
double CutOffFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_FilteringType"></a> FilteringType

Get or Set the filtering type of signal processing. It has LowPass, HighPass, BandPass, BandStop.

```csharp
FilteringType FilteringType { get; set; }
```

#### Property Value

 FilteringType

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_FrequencyAxisType"></a> FrequencyAxisType

Get or Set the type of frequency axis. It has X, Y.

```csharp
FrequencyAxisType FrequencyAxisType { get; set; }
```

#### Property Value

 FrequencyAxisType

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_HighCutOffFrequency"></a> HighCutOffFrequency

Get or Set the value of the high cut off frequency.

```csharp
double HighCutOffFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_LowCutOffFrequency"></a> LowCutOffFrequency

Get or Set the value of the low cut off frequency.

```csharp
double LowCutOffFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_Order"></a> Order

Get or Set the value of the order. As decreasing value, output would be more smooth.

```csharp
int Order { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_PointsOfWindow"></a> PointsOfWindow

Get or Set the points of window.

```csharp
int PointsOfWindow { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_PolynomialOrder"></a> PolynomialOrder

Get or Set the value of the polynomial order.

```csharp
int PolynomialOrder { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_SignalProcessingType"></a> SignalProcessingType

Get or Set the type of signal processing. It has Filtering, Smoothing, Frequency Weighting.

```csharp
SignalProcessingType SignalProcessingType { get; set; }
```

#### Property Value

 SignalProcessingType

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_SmoothingType"></a> SmoothingType

Get or Set the type of smoothing. It has MovingWindowAveraging, SavitzkyGloay.

```csharp
SmoothingType SmoothingType { get; set; }
```

#### Property Value

 SmoothingType

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_WeightingType"></a> WeightingType

Get or Set the type of weighting. It has AWeighting, BWighting, CWeighting.

```csharp
WeightingType WeightingType { get; set; }
```

#### Property Value

 WeightingType

