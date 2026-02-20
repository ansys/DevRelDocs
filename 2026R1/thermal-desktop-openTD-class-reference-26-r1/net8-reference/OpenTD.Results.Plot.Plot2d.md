# Class Plot2d

Namespace: [OpenTD.Results.Plot](OpenTD.Results.Plot.md)  
Assembly: OpenTD.Results.dll  

An abstract class representing a 2d plot. Inherit from it to take advantage of
its many helpful features, such as auto-naming, auto-creating and scaling axes, etc.
SimplePlot is a concrete definition of a Plot2d that uses the .NET charting tools.
There are methods to display the plot on the screen, save it as a bitmap, and to
output it as a table of data.

```csharp
public abstract class Plot2d
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Plot2d](OpenTD.Results.Plot.Plot2d.md)

#### Derived

[SimplePlot](OpenTD.Results.Plot.SimplePlot.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Plot2d\(string\)

```csharp
public Plot2d(string title)
```

#### Parameters

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

### Plot2d\(\)

```csharp
public Plot2d()
```

## Properties

### AutoCommenter

```csharp
protected AutoCommenter AutoCommenter { get; set; }
```

#### Property Value

 AutoCommenter

### AutoNamer

```csharp
protected AutoNamer AutoNamer { get; set; }
```

#### Property Value

 AutoNamer

### AutoScaleAxesMarginPercent

For axes that are autoscaled, this is the amount that each axis will be grown beyond
the range of the data, as a percentage of the total range. Exceptions: if the
minimum value of the data is 0, autoscaling will not extend the minimum value of the
axis below 0. If the axis is for Record Numbers, autoscaling won't extend the minimum
value of the axis below the first record number.

```csharp
public double AutoScaleAxesMarginPercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### AutoUseMarkersForNonContinuousSeries

If true, series that are detected to be non-continuous (because one or more
y-values is NaN, for example) will have markers turned on automatically,
to help spot orphaned points or small curve segments. This also applies to
series with just one point.

```csharp
public bool AutoUseMarkersForNonContinuousSeries { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### InternalSuggestedComment

```csharp
public string InternalSuggestedComment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### InternalSuggestedName

```csharp
public string InternalSuggestedName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Legend

```csharp
public Legend Legend { get; set; }
```

#### Property Value

 [Legend](OpenTD.Results.Plot.Legend.md)

### Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Plot2dStyle

```csharp
public Plot2dStyle Plot2dStyle { get; set; }
```

#### Property Value

 [Plot2dStyle](OpenTD.Results.Plot.Plot2dStyle.md)

### Series

```csharp
public Series2dCollection Series { get; set; }
```

#### Property Value

 [Series2dCollection](OpenTD.Results.Plot.Series2dCollection.md)

### Title

```csharp
public string Title { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TryToNameYAxesBasedOnSeriesSubtype

Normally, Y axes are named based on their dimension, e.g., "Temperature".
If this member is true, the plot will attempt to name them based on the subtype
of the series applied to them, e.g., "Node Temperature" or "Lump Temperature".
Defaults to false.

```csharp
public bool TryToNameYAxesBasedOnSeriesSubtype { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### XAxes

```csharp
public List<Axis> XAxes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Axis](OpenTD.Results.Plot.Axis.md)\>

### YAxes

```csharp
public List<Axis> YAxes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Axis](OpenTD.Results.Plot.Axis.md)\>

## Methods

### AddSeries\(Series2d\)

```csharp
public void AddSeries(Series2d series)
```

#### Parameters

`series` [Series2d](OpenTD.Results.Plot.Series2d.md)

### AddSeries\(DataArray, DataArray\)

```csharp
public void AddSeries(DataArray xData, DataArray yData)
```

#### Parameters

`xData` [DataArray](OpenTD.Results.Dataset.DataArray.md)

`yData` [DataArray](OpenTD.Results.Dataset.DataArray.md)

### AddSeries\(DataArray\)

```csharp
public void AddSeries(DataArray yData)
```

#### Parameters

`yData` [DataArray](OpenTD.Results.Dataset.DataArray.md)

### AddSeries\(DataArrayCollection, bool\)

```csharp
public void AddSeries(DataArrayCollection dataCollection, bool useFirstArrayAsXData = false)
```

#### Parameters

`dataCollection` [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

`useFirstArrayAsXData` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddSeries\(DataSubtype, IEnumerable<double\>, UnitsData, ItemIdentifier\)

```csharp
public void AddSeries(DataSubtype subtype, IEnumerable<double> values, UnitsData units = null, ItemIdentifier item = null)
```

#### Parameters

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`values` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

`units` UnitsData

`item` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

### AddSeries\(IEnumerable<double\>\)

```csharp
public void AddSeries(IEnumerable<double> xData)
```

#### Parameters

`xData` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### AutoNameXAxes\(\)

```csharp
public void AutoNameXAxes()
```

### AutoNameYAxesBasedOnSubtype\(\)

```csharp
public void AutoNameYAxesBasedOnSubtype()
```

### AutoScaleAxes\(\)

Scales each axis based on the series attached to it.

```csharp
public void AutoScaleAxes()
```

#### Exceptions

 OpenTDException

AutoScaleNumIntervals must be positive.

### AutoSetAxes\(\)

Makes sure each series is assigned to an axis with the correct dimension.
Throws away unused axes.

```csharp
public void AutoSetAxes()
```

### AutoSetLegend\(\)

```csharp
protected void AutoSetLegend()
```

### AutoSetMarkers\(\)

```csharp
public void AutoSetMarkers()
```

### GetAsImage\(\)

```csharp
public virtual Bitmap GetAsImage()
```

#### Returns

 [Bitmap](https://learn.microsoft.com/dotnet/api/system.drawing.bitmap)

### GetAsTable\(string, bool\)

```csharp
public string GetAsTable(string delimiter = ",", bool consolidateXData = true)
```

#### Parameters

`delimiter` [string](https://learn.microsoft.com/dotnet/api/system.string)

`consolidateXData` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetPlotStyle\(\)

```csharp
public Plot2dStyle GetPlotStyle()
```

#### Returns

 [Plot2dStyle](OpenTD.Results.Plot.Plot2dStyle.md)

### GetReadyToOutput\(\)

```csharp
protected virtual void GetReadyToOutput()
```

### GetSelfSuggestedComment\(\)

```csharp
protected virtual string GetSelfSuggestedComment()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetSelfSuggestedName\(\)

```csharp
protected virtual string GetSelfSuggestedName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetSeriesOnAxis\(Axis\)

```csharp
public List<Series2d> GetSeriesOnAxis(Axis a)
```

#### Parameters

`a` [Axis](OpenTD.Results.Plot.Axis.md)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Series2d](OpenTD.Results.Plot.Series2d.md)\>

### SaveAsImage\(string\)

```csharp
public void SaveAsImage(string pathname)
```

#### Parameters

`pathname` [string](https://learn.microsoft.com/dotnet/api/system.string)

### SaveAsTable\(string, string, bool\)

Saves the plot as a tabular data.

```csharp
public void SaveAsTable(string pathname, string delimiter = ",", bool consolidateXData = true)
```

#### Parameters

`pathname` [string](https://learn.microsoft.com/dotnet/api/system.string)

The output pathname.

`delimiter` [string](https://learn.microsoft.com/dotnet/api/system.string)

The column delimiter.

`consolidateXData` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code>, Will attempt to combine series x-values into the fewest possible
columns. Will only combine x-values if they point to exactly the same source, i.e., it
tests equality by reference, not by value.

### SetPlotStyle\(Plot2dStyle\)

```csharp
public void SetPlotStyle(Plot2dStyle ps)
```

#### Parameters

`ps` [Plot2dStyle](OpenTD.Results.Plot.Plot2dStyle.md)

### SetSeriesPaletteColor\(int, Color\)

```csharp
public void SetSeriesPaletteColor(int index, Color color)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### Show\(\)

```csharp
public virtual void Show()
```

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## See Also

[SimplePlot](OpenTD.Results.Plot.SimplePlot.md), 
IAutoName


