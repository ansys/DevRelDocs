# Interface IOperationsHeatMapSTFTDataViewModel

Namespace: [VM.Operations.Post.Interfaces.LineSeries](VM.Operations.Post.Interfaces.LineSeries.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsHeatMapSTFTDataViewModel
```

## Properties

### End

Get or Set the end time for using FFT on target data series.

```csharp
double End { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Overlap

Get or Set the value of the percentage for setting overlapped intervals.

```csharp
double Overlap { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ReferenceValue

Get or Set the reference value on decibel as the type of the scale.

```csharp
double ReferenceValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SamplingFrequency

Get or Set the value about setting the number of the interval for dividing Y direction grids on color map.

```csharp
int SamplingFrequency { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ScaleFactor

Get or Set the scale factor to change from time domain to another domain.

```csharp
double ScaleFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SelectedPoints

Get or Set the number of data point for FFT.

```csharp
int SelectedPoints { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SelectedScaleType

Get or Set the scale type of STFT. STFT Scale Type has Original, Decibel.

```csharp
STFTScaleType SelectedScaleType { get; set; }
```

#### Property Value

 STFTScaleType

### Start

Get or Set the start time for using FFT on target data series.

```csharp
double Start { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### TimeSlice

Get or Set the value about setting the number of the interval for dividing  X direction grids on color map.

```csharp
double TimeSlice { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)


