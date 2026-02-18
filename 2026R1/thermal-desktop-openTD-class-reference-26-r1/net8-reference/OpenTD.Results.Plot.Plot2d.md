# <a id="OpenTD_Results_Plot_Plot2d"></a> Class Plot2d

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

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Plot2d](OpenTD.Results.Plot.Plot2d.md)

#### Derived

[SimplePlot](OpenTD.Results.Plot.SimplePlot.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Results_Plot_Plot2d__ctor_System_String_"></a> Plot2d\(string\)

```csharp
public Plot2d(string title)
```

#### Parameters

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Plot2d__ctor"></a> Plot2d\(\)

```csharp
public Plot2d()
```

## Properties

### <a id="OpenTD_Results_Plot_Plot2d_AutoCommenter"></a> AutoCommenter

```csharp
protected AutoCommenter AutoCommenter { get; set; }
```

#### Property Value

 AutoCommenter

### <a id="OpenTD_Results_Plot_Plot2d_AutoNamer"></a> AutoNamer

```csharp
protected AutoNamer AutoNamer { get; set; }
```

#### Property Value

 AutoNamer

### <a id="OpenTD_Results_Plot_Plot2d_AutoScaleAxesMarginPercent"></a> AutoScaleAxesMarginPercent

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

### <a id="OpenTD_Results_Plot_Plot2d_AutoUseMarkersForNonContinuousSeries"></a> AutoUseMarkersForNonContinuousSeries

If true, series that are detected to be non-continuous (because one or more
y-values is NaN, for example) will have markers turned on automatically,
to help spot orphaned points or small curve segments. This also applies to
series with just one point.

```csharp
public bool AutoUseMarkersForNonContinuousSeries { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Plot_Plot2d_Comment"></a> Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Plot2d_InternalSuggestedComment"></a> InternalSuggestedComment

```csharp
public string InternalSuggestedComment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Plot2d_InternalSuggestedName"></a> InternalSuggestedName

```csharp
public string InternalSuggestedName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Plot2d_Legend"></a> Legend

```csharp
public Legend Legend { get; set; }
```

#### Property Value

 [Legend](OpenTD.Results.Plot.Legend.md)

### <a id="OpenTD_Results_Plot_Plot2d_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Plot2d_Plot2dStyle"></a> Plot2dStyle

```csharp
public Plot2dStyle Plot2dStyle { get; set; }
```

#### Property Value

 [Plot2dStyle](OpenTD.Results.Plot.Plot2dStyle.md)

### <a id="OpenTD_Results_Plot_Plot2d_Series"></a> Series

```csharp
public Series2dCollection Series { get; set; }
```

#### Property Value

 [Series2dCollection](OpenTD.Results.Plot.Series2dCollection.md)

### <a id="OpenTD_Results_Plot_Plot2d_Title"></a> Title

```csharp
public string Title { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Plot2d_TryToNameYAxesBasedOnSeriesSubtype"></a> TryToNameYAxesBasedOnSeriesSubtype

Normally, Y axes are named based on their dimension, e.g., "Temperature".
If this member is true, the plot will attempt to name them based on the subtype
of the series applied to them, e.g., "Node Temperature" or "Lump Temperature".
Defaults to false.

```csharp
public bool TryToNameYAxesBasedOnSeriesSubtype { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Plot_Plot2d_XAxes"></a> XAxes

```csharp
public List<Axis> XAxes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Axis](OpenTD.Results.Plot.Axis.md)\>

### <a id="OpenTD_Results_Plot_Plot2d_YAxes"></a> YAxes

```csharp
public List<Axis> YAxes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Axis](OpenTD.Results.Plot.Axis.md)\>

## Methods

### <a id="OpenTD_Results_Plot_Plot2d_AddSeries_OpenTD_Results_Plot_Series2d_"></a> AddSeries\(Series2d\)

```csharp
public void AddSeries(Series2d series)
```

#### Parameters

`series` [Series2d](OpenTD.Results.Plot.Series2d.md)

### <a id="OpenTD_Results_Plot_Plot2d_AddSeries_OpenTD_Results_Dataset_DataArray_OpenTD_Results_Dataset_DataArray_"></a> AddSeries\(DataArray, DataArray\)

```csharp
public void AddSeries(DataArray xData, DataArray yData)
```

#### Parameters

`xData` [DataArray](OpenTD.Results.Dataset.DataArray.md)

`yData` [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Plot_Plot2d_AddSeries_OpenTD_Results_Dataset_DataArray_"></a> AddSeries\(DataArray\)

```csharp
public void AddSeries(DataArray yData)
```

#### Parameters

`yData` [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Plot_Plot2d_AddSeries_OpenTD_Results_Dataset_DataArrayCollection_System_Boolean_"></a> AddSeries\(DataArrayCollection, bool\)

```csharp
public void AddSeries(DataArrayCollection dataCollection, bool useFirstArrayAsXData = false)
```

#### Parameters

`dataCollection` [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

`useFirstArrayAsXData` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Plot_Plot2d_AddSeries_OpenTD_Results_Dataset_DataSubtype_System_Collections_Generic_IEnumerable_System_Double__OpenTD_UnitsData_OpenTD_Results_Dataset_ItemIdentifier_"></a> AddSeries\(DataSubtype, IEnumerable<double\>, UnitsData, ItemIdentifier\)

```csharp
public void AddSeries(DataSubtype subtype, IEnumerable<double> values, UnitsData units = null, ItemIdentifier item = null)
```

#### Parameters

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`values` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

`units` UnitsData

`item` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

### <a id="OpenTD_Results_Plot_Plot2d_AddSeries_System_Collections_Generic_IEnumerable_System_Double__"></a> AddSeries\(IEnumerable<double\>\)

```csharp
public void AddSeries(IEnumerable<double> xData)
```

#### Parameters

`xData` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_Results_Plot_Plot2d_AutoNameXAxes"></a> AutoNameXAxes\(\)

```csharp
public void AutoNameXAxes()
```

### <a id="OpenTD_Results_Plot_Plot2d_AutoNameYAxesBasedOnSubtype"></a> AutoNameYAxesBasedOnSubtype\(\)

```csharp
public void AutoNameYAxesBasedOnSubtype()
```

### <a id="OpenTD_Results_Plot_Plot2d_AutoScaleAxes"></a> AutoScaleAxes\(\)

Scales each axis based on the series attached to it.

```csharp
public void AutoScaleAxes()
```

#### Exceptions

 OpenTDException

AutoScaleNumIntervals must be positive.

### <a id="OpenTD_Results_Plot_Plot2d_AutoSetAxes"></a> AutoSetAxes\(\)

Makes sure each series is assigned to an axis with the correct dimension.
Throws away unused axes.

```csharp
public void AutoSetAxes()
```

### <a id="OpenTD_Results_Plot_Plot2d_AutoSetLegend"></a> AutoSetLegend\(\)

```csharp
protected void AutoSetLegend()
```

### <a id="OpenTD_Results_Plot_Plot2d_AutoSetMarkers"></a> AutoSetMarkers\(\)

```csharp
public void AutoSetMarkers()
```

### <a id="OpenTD_Results_Plot_Plot2d_GetAsImage"></a> GetAsImage\(\)

```csharp
public virtual Bitmap GetAsImage()
```

#### Returns

 [Bitmap](https://learn.microsoft.com/dotnet/api/system.drawing.bitmap)

### <a id="OpenTD_Results_Plot_Plot2d_GetAsTable_System_String_System_Boolean_"></a> GetAsTable\(string, bool\)

```csharp
public string GetAsTable(string delimiter = ",", bool consolidateXData = true)
```

#### Parameters

`delimiter` [string](https://learn.microsoft.com/dotnet/api/system.string)

`consolidateXData` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Plot2d_GetPlotStyle"></a> GetPlotStyle\(\)

```csharp
public Plot2dStyle GetPlotStyle()
```

#### Returns

 [Plot2dStyle](OpenTD.Results.Plot.Plot2dStyle.md)

### <a id="OpenTD_Results_Plot_Plot2d_GetReadyToOutput"></a> GetReadyToOutput\(\)

```csharp
protected virtual void GetReadyToOutput()
```

### <a id="OpenTD_Results_Plot_Plot2d_GetSelfSuggestedComment"></a> GetSelfSuggestedComment\(\)

```csharp
protected virtual string GetSelfSuggestedComment()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Plot2d_GetSelfSuggestedName"></a> GetSelfSuggestedName\(\)

```csharp
protected virtual string GetSelfSuggestedName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Plot2d_GetSeriesOnAxis_OpenTD_Results_Plot_Axis_"></a> GetSeriesOnAxis\(Axis\)

```csharp
public List<Series2d> GetSeriesOnAxis(Axis a)
```

#### Parameters

`a` [Axis](OpenTD.Results.Plot.Axis.md)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Series2d](OpenTD.Results.Plot.Series2d.md)\>

### <a id="OpenTD_Results_Plot_Plot2d_SaveAsImage_System_String_"></a> SaveAsImage\(string\)

```csharp
public void SaveAsImage(string pathname)
```

#### Parameters

`pathname` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Plot2d_SaveAsTable_System_String_System_String_System_Boolean_"></a> SaveAsTable\(string, string, bool\)

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

### <a id="OpenTD_Results_Plot_Plot2d_SetPlotStyle_OpenTD_Results_Plot_Plot2dStyle_"></a> SetPlotStyle\(Plot2dStyle\)

```csharp
public void SetPlotStyle(Plot2dStyle ps)
```

#### Parameters

`ps` [Plot2dStyle](OpenTD.Results.Plot.Plot2dStyle.md)

### <a id="OpenTD_Results_Plot_Plot2d_SetSeriesPaletteColor_System_Int32_System_Drawing_Color_"></a> SetSeriesPaletteColor\(int, Color\)

```csharp
public void SetSeriesPaletteColor(int index, Color color)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="OpenTD_Results_Plot_Plot2d_Show"></a> Show\(\)

```csharp
public virtual void Show()
```

### <a id="OpenTD_Results_Plot_Plot2d_ToString"></a> ToString\(\)

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

