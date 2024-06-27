# Interface IOperationsTransformLineDataSeriesViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsTransformLineDataSeriesViewModel
```

## Properties

### Align

Get or Set the type of align. It has Zero, Curve.

```csharp
AlignType Align { get; set; }
```

#### Property Value

 AlignType

### AlignBase

Get or Set value for align data series.

```csharp
double AlignBase { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Base

Get or Set the base of log.

```csharp
string Base { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Coefficient

Get or Set the coefficient of log.

```csharp
double Coefficient { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### IsDecibel

Get or Set the flag for decibel scale.

```csharp
bool IsDecibel { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OffsetX

Get or Set the value for offset X.

```csharp
double OffsetX { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### OffsetY

Get or Set the value for offset X.

```csharp
double OffsetY { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ScaleX

Get or Set the value for scale X.

```csharp
double ScaleX { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ScaleY

Get or Set the value for scale Y.

```csharp
double ScaleY { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SelectedTransformType

Get or Set the type of transform. It has Translate, LinearScale, Absolute, Align, LogScale.

```csharp
string SelectedTransformType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Sign

Get or Set the tpye of sign. It has Positive, Negative.

```csharp
SignType Sign { get; set; }
```

#### Property Value

 SignType


