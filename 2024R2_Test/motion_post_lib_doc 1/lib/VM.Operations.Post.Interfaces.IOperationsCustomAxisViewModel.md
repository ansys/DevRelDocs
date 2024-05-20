# Interface IOperationsCustomAxisViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsCustomAxisViewModel : IOperationsAxisViewModelBase
```

#### Implements

[IOperationsAxisViewModelBase](VM.Operations.Post.Interfaces.IOperationsAxisViewModelBase.md)

## Properties

### AxisType

Get or Set the AxisType of axis scale. It has Linear, PositiveLogarithmic, NegativeLogarithmic.

```csharp
AxisType AxisType { get; set; }
```

#### Property Value

 AxisType

### Color

```csharp
Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

### Decimal

Get or Set the color of label.

```csharp
int Decimal { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Default

Get or Set the flag for the default of label format.

```csharp
bool Default { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FontFace

Get or Set the font family of font.

```csharp
FontFamily FontFace { get; set; }
```

#### Property Value

 [FontFamily](https://learn.microsoft.com/dotnet/api/system.windows.media.fontfamily)

### IsAuto

Get or Set the flag for auto range of scale.

```csharp
bool IsAuto { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LabelFormatType

Get or Set the LabelFormatType of label format. It has Exponential, Number.

```csharp
LabelFormatType LabelFormatType { get; set; }
```

#### Property Value

 LabelFormatType

### LabelSize

```csharp
double LabelSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LabelWeight

```csharp
FontWeight LabelWeight { get; set; }
```

#### Property Value

 [FontWeight](https://learn.microsoft.com/dotnet/api/system.windows.fontweight)

### LineColor

Get or Set the size of label.

```csharp
Color LineColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

### LineStyle

Get or Set the LineStyle of Grid Line.
It has GeneralLine, CalculusLine, FFTLine, FrequencyResponseLine, FrequencySequenceLine, FrequencyTimeLine, HeatmapLine,
InterpolationLine, NumericLine, PointLine3D, SignalProcessingLine,
SimpleMathLine, SoundPressureLevelLine, TransformLine, DynamicPPTELine, HarmonicTELine, SuttlingForceLine

```csharp
LineStyleType LineStyle { get; set; }
```

#### Property Value

 LineStyleType

### LineWidth

Get or Set the value for the line width of Grid Line.

```csharp
double LineWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LogarithmicBase

Get or Set the base of Logarithmic axis scale

```csharp
string LogarithmicBase { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ScaleInterval

Get or Set the value for the interval of scale.

```csharp
double ScaleInterval { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ScaleMax

Get or Set the value for the maximum of scale.

```csharp
double ScaleMax { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ScaleMin

Get or Set the value for the minimum of scale.

```csharp
double ScaleMin { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Style

Get or Set the font style of font.

```csharp
FontStyle Style { get; set; }
```

#### Property Value

 [FontStyle](https://learn.microsoft.com/dotnet/api/system.windows.fontstyle)

### TextFormatting

Get or Set the text format for the label of label format.

```csharp
string TextFormatting { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Unit

Get or Set the unit of UNIT

```csharp
string Unit { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)


