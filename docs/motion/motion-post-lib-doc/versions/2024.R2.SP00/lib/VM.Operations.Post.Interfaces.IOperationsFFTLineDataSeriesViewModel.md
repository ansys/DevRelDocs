# Interface IOperationsFFTLineDataSeriesViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsFFTLineDataSeriesViewModel
```

## Properties

### End

Get or Set the end time for using FFT on target data series.

```csharp
double End { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FFTScaleType

Get or Set the scale type of FFT. It has Original, Logarithm, Decibel.

```csharp
ScaleType FFTScaleType { get; set; }
```

#### Property Value

 ScaleType

### FFTType

Get or Set the type of FFT. It has Magnitude, Phase.

```csharp
FFTType FFTType { get; set; }
```

#### Property Value

 FFTType

### FFTWindowType

Get or Set the window type of FFT. It has Rectangular, Triangular, Bartlett, Hanning, Hamming, Welch, BalckMan, None.

```csharp
FFTWindowType FFTWindowType { get; set; }
```

#### Property Value

 FFTWindowType

### SelectedPoints

Get or Set the number of data point for FFT.

```csharp
int SelectedPoints { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Start

Get or Set the start time for using FFT on target data series.

```csharp
double Start { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)


