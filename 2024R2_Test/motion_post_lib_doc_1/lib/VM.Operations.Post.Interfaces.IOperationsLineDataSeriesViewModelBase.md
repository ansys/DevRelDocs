# Interface IOperationsLineDataSeriesViewModelBase

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsLineDataSeriesViewModelBase : ILineDataSeriesViewModelBase, IHasSourceViewModel, IViewModel, IObservableObject, IDisposableObject, IEnabled, IExpanded, ISelected, IVisible, IThicknessProperty, IOperationsBase
```

#### Implements

ILineDataSeriesViewModelBase, 
IHasSourceViewModel, 
IViewModel, 
IObservableObject, 
IDisposableObject, 
IEnabled, 
IExpanded, 
ISelected, 
IVisible, 
IThicknessProperty, 
[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Properties

### Color

Get or Set the color of line.

```csharp
Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

### IsRefresh

Get or Set the flag for refreshing data.

```csharp
bool IsRefresh { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LineStyle

Get or Get the style of line. It has Solid, Dot, Dash, DashDot, DashDotDot.

```csharp
LineStyleType LineStyle { get; set; }
```

#### Property Value

 LineStyleType

### PointSize

Get or Set the value of point size.

```csharp
double PointSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### PointType

Get or Set the type of point.

```csharp
PointType PointType { get; set; }
```

#### Property Value

 PointType

### SeriesName

Get or Set the name of series.

```csharp
string SeriesName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SeriesType

Get or Set the type of line.

```csharp
SeriesType SeriesType { get; set; }
```

#### Property Value

 SeriesType

### TargetName

Get or Set the name of the target.

```csharp
string TargetName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Thickness

Get or Set the thickness of series.

```csharp
int Thickness { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)


