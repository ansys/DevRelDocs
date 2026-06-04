# Interface IOperationsLine2DViewModelBase

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsLine2DViewModelBase : IOperationsBase
```

#### Implements

[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Properties

### Background

Get or Set the background.

```csharp
Color Background { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

### BorderColor

Get or Set the border color​.

```csharp
Color BorderColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

### ChartAxisType

Get or Set the type of Chart Axis. It has Single, Multiple.

```csharp
ChartAxisType ChartAxisType { get; set; }
```

#### Property Value

 ChartAxisType

### ChartTitle

Get or Set the title of the chart​.

```csharp
string ChartTitle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### FontColor

Get or Set the font color​.

```csharp
Color FontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

### FontFace

Get or Set font face​.

```csharp
FontFamily FontFace { get; set; }
```

#### Property Value

 [FontFamily](https://learn.microsoft.com/dotnet/api/system.windows.media.fontfamily)

### FontSize

Get or Set font size​.

```csharp
double FontSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FontStyle

Get or Set font style.

```csharp
FontStyle FontStyle { get; set; }
```

#### Property Value

 [FontStyle](https://learn.microsoft.com/dotnet/api/system.windows.fontstyle)

### FontWeight

Get or Set font weight.

```csharp
FontWeight FontWeight { get; set; }
```

#### Property Value

 [FontWeight](https://learn.microsoft.com/dotnet/api/system.windows.fontweight)

## Methods

### AddCurves\(string, PlotParameters\)

Add data series to plot view by the path of the result​.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> AddCurves(string filepath, PlotParameters parameters)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of the result to access​.

`parameters` PlotParameters

The class used as a parameter of the AddCurve function.​

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instance of the curves.​

### ExportAllCurves\(string\)

Export all curves on active view.

```csharp
void ExportAllCurves(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

the path of save

### ExportAllDataSeries\(\)

Export all curves on active view.

```csharp
void ExportAllDataSeries()
```

### GetCurve\(string\)

Get the instance of the curve by the name of curve​.

```csharp
IOperationsLineDataSeriesViewModelBase GetCurve(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the curve​.

#### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

The instance of the curve.​

### GetCurveByID\(string\)

Get the instance of the curve by the id of curve​.

```csharp
IOperationsLineDataSeriesViewModelBase GetCurveByID(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The identification​.

#### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

The instance of the curve.​

### GetCurveNameList\(\)

Get name of the curves on active view.

```csharp
IEnumerable<string> GetCurveNameList()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The names of the curves on active view​.

### GetCurves\(\)

Get the instances of the curves on active view.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> GetCurves()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instances of the curves.​

### GetCurves\(string\)

Get the instances of the curves include specified characters on active view.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> GetCurves(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

a specified character in curve name.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The instances of the curves.​

### GetLastCurve\(\)

Get end of the curve on active view.

```csharp
IOperationsLineDataSeriesViewModelBase GetLastCurve()
```

#### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

The last instance of curves.

### Remove\(string\)

Remove curve by the name of the curve​.

```csharp
void Remove(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the curve to remove​.

### Remove\(IOperationsLineDataSeriesViewModelBase\)

Remove curve by the instance of the curve.

```csharp
void Remove(IOperationsLineDataSeriesViewModelBase curve)
```

#### Parameters

`curve` [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

The instance of the curve​.


