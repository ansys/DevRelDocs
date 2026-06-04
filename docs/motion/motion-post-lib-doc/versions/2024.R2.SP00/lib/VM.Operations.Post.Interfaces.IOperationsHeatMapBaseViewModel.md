# Interface IOperationsHeatMapBaseViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsHeatMapBaseViewModel
```

## Properties

### IsAutoRange

Get or Set the flag for auto range.

```csharp
bool IsAutoRange { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRefresh

Get or Set the flag for refreshing data.

```csharp
bool IsRefresh { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LegendFontColor

Get or set legend font color.

```csharp
Color LegendFontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

### LegendFontSize

Get or Set legend font size.

```csharp
double LegendFontSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Max

Get or Set the value of the maximum.

```csharp
double Max { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Min

Get or Set the value of the minimum.

```csharp
double Min { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### ExportAllCurves\(string\)

Export all curves on active view.

```csharp
void ExportAllCurves(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### ExportAllDataSeries\(\)

Export all curves on active view.

```csharp
void ExportAllDataSeries()
```


