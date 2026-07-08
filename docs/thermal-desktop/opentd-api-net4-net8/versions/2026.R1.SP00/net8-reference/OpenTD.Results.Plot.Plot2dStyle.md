# Class Plot2dStyle

Namespace: [OpenTD.Results.Plot](OpenTD.Results.Plot.md)  
Assembly: OpenTD.Results.dll  

```csharp
public class Plot2dStyle
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Plot2dStyle](OpenTD.Results.Plot.Plot2dStyle.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Plot2dStyle\(\)

```csharp
public Plot2dStyle()
```

## Properties

### AutoHideLegend

If true, plots with one series will hide the legend.

```csharp
public bool AutoHideLegend { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AutoMarkerStyle

Marker style to use if AutoUseMarkersForNonContinuousSeries is true and
non-continuous series are found.

```csharp
public MarkerStyle AutoMarkerStyle { get; set; }
```

#### Property Value

 [MarkerStyle](https://github.com/kirsan31/winforms\-datavisualization/blob/3229fd69de931778b8e872dc2d5ecab468ab24dd/src/WinForms.DataVisualization.Utilities/Enums.cs)

### CustomPalette

```csharp
public Color[] CustomPalette { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\[\]

### LegendStyle

```csharp
public LegendStyle LegendStyle { get; set; }
```

#### Property Value

 [LegendStyle](OpenTD.Results.Plot.LegendStyle.md)

### Palette

```csharp
public ChartColorPalette Palette { get; set; }
```

#### Property Value

 [ChartColorPalette](https://github.com/kirsan31/winforms\-datavisualization/blob/3229fd69de931778b8e872dc2d5ecab468ab24dd/src/WinForms.DataVisualization.Utilities/ColorPalette.cs)

### Series2dStyles

```csharp
public List<Series2dStyle> Series2dStyles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Series2dStyle](OpenTD.Results.Plot.Series2dStyle.md)\>

### Size

```csharp
public Size Size { get; set; }
```

#### Property Value

 [Size](https://learn.microsoft.com/dotnet/api/system.drawing.size)

### TitleColor

```csharp
public Color TitleColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### TitleEnabled

```csharp
public bool TitleEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TitleFont

```csharp
public Font TitleFont { get; set; }
```

#### Property Value

 [Font](https://learn.microsoft.com/dotnet/api/system.drawing.font)

### TitlePosition

```csharp
public Docking TitlePosition { get; set; }
```

#### Property Value

 Docking

### UseCustomPalette

```csharp
public bool UseCustomPalette { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### XAxesStyles

```csharp
public List<AxisStyle> XAxesStyles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[AxisStyle](OpenTD.Results.Plot.AxisStyle.md)\>

### YAxesStyles

```csharp
public List<AxisStyle> YAxesStyles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[AxisStyle](OpenTD.Results.Plot.AxisStyle.md)\>

## Methods

### CheckPalette\(\)

```csharp
public virtual void CheckPalette()
```


