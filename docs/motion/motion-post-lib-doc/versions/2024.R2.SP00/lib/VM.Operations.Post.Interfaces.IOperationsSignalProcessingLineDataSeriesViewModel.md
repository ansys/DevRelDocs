# Interface IOperationsSignalProcessingLineDataSeriesViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsSignalProcessingLineDataSeriesViewModel
```

## Properties

### CutOffFrequency

Get or Set the value of the cut off frequency.

```csharp
double CutOffFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FilteringType

Get or Set the filtering type of signal processing. It has LowPass, HighPass, BandPass, BandStop.

```csharp
FilteringType FilteringType { get; set; }
```

#### Property Value

 FilteringType

### FrequencyAxisType

Get or Set the type of frequency axis. It has X, Y.

```csharp
FrequencyAxisType FrequencyAxisType { get; set; }
```

#### Property Value

 FrequencyAxisType

### HighCutOffFrequency

Get or Set the value of the high cut off frequency.

```csharp
double HighCutOffFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LowCutOffFrequency

Get or Set the value of the low cut off frequency.

```csharp
double LowCutOffFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Order

Get or Set the value of the order. As decreasing value, output would be more smooth.

```csharp
int Order { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PointsOfWindow

Get or Set the points of window.

```csharp
int PointsOfWindow { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PolynomialOrder

Get or Set the value of the polynomial order.

```csharp
int PolynomialOrder { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SignalProcessingType

Get or Set the type of signal processing. It has Filtering, Smoothing, Frequency Weighting.

```csharp
SignalProcessingType SignalProcessingType { get; set; }
```

#### Property Value

 SignalProcessingType

### SmoothingType

Get or Set the type of smoothing. It has MovingWindowAveraging, SavitzkyGloay.

```csharp
SmoothingType SmoothingType { get; set; }
```

#### Property Value

 SmoothingType

### WeightingType

Get or Set the type of weighting. It has AWeighting, BWighting, CWeighting.

```csharp
WeightingType WeightingType { get; set; }
```

#### Property Value

 WeightingType


