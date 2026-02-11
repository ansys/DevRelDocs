# <a id="OpenTD_Results_Plot_SimplePlot"></a> Class SimplePlot

Namespace: [OpenTD.Results.Plot](OpenTD.Results.Plot.md)  
Assembly: OpenTD.Results.dll  

An implementation of Plot2d using the .NET charting tools.
Use this class to create 2d plots of solution data.
One limitation: currently SimplePlot only allows one axis in each position,
i.e., a primary and secondary x axis, and a primary and secondary y axis.
If you try to plot more axes, it will throw an exception.

```csharp
public class SimplePlot : Plot2d
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Plot2d](OpenTD.Results.Plot.Plot2d.md) ← 
[SimplePlot](OpenTD.Results.Plot.SimplePlot.md)

#### Inherited Members

[Plot2d.SetSeriesPaletteColor\(int, Color\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_SetSeriesPaletteColor\_System\_Int32\_System\_Drawing\_Color\_), 
[Plot2d.SetPlotStyle\(Plot2dStyle\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_SetPlotStyle\_OpenTD\_Results\_Plot\_Plot2dStyle\_), 
[Plot2d.GetPlotStyle\(\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_GetPlotStyle), 
[Plot2d.Plot2dStyle](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_Plot2dStyle), 
[Plot2d.Title](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_Title), 
[Plot2d.Series](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_Series), 
[Plot2d.XAxes](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_XAxes), 
[Plot2d.YAxes](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_YAxes), 
[Plot2d.Legend](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_Legend), 
[Plot2d.AutoScaleAxesMarginPercent](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_AutoScaleAxesMarginPercent), 
[Plot2d.AutoUseMarkersForNonContinuousSeries](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_AutoUseMarkersForNonContinuousSeries), 
[Plot2d.TryToNameYAxesBasedOnSeriesSubtype](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_TryToNameYAxesBasedOnSeriesSubtype), 
[Plot2d.AutoSetMarkers\(\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_AutoSetMarkers), 
[Plot2d.AutoSetAxes\(\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_AutoSetAxes), 
[Plot2d.AutoScaleAxes\(\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_AutoScaleAxes), 
[Plot2d.AutoNameXAxes\(\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_AutoNameXAxes), 
[Plot2d.AutoNameYAxesBasedOnSubtype\(\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_AutoNameYAxesBasedOnSubtype), 
[Plot2d.AddSeries\(Series2d\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_AddSeries\_OpenTD\_Results\_Plot\_Series2d\_), 
[Plot2d.AddSeries\(DataArray, DataArray\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_AddSeries\_OpenTD\_Results\_Dataset\_DataArray\_OpenTD\_Results\_Dataset\_DataArray\_), 
[Plot2d.AddSeries\(DataArray\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_AddSeries\_OpenTD\_Results\_Dataset\_DataArray\_), 
[Plot2d.AddSeries\(DataArrayCollection, bool\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_AddSeries\_OpenTD\_Results\_Dataset\_DataArrayCollection\_System\_Boolean\_), 
[Plot2d.AddSeries\(DataSubtype, IEnumerable<double\>, UnitsData, ItemIdentifier\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_AddSeries\_OpenTD\_Results\_Dataset\_DataSubtype\_System\_Collections\_Generic\_IEnumerable\_System\_Double\_\_OpenTD\_UnitsData\_OpenTD\_Results\_Dataset\_ItemIdentifier\_), 
[Plot2d.AddSeries\(IEnumerable<double\>\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_AddSeries\_System\_Collections\_Generic\_IEnumerable\_System\_Double\_\_), 
[Plot2d.GetSeriesOnAxis\(Axis\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_GetSeriesOnAxis\_OpenTD\_Results\_Plot\_Axis\_), 
[Plot2d.GetAsImage\(\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_GetAsImage), 
[Plot2d.SaveAsImage\(string\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_SaveAsImage\_System\_String\_), 
[Plot2d.GetAsTable\(string, bool\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_GetAsTable\_System\_String\_System\_Boolean\_), 
[Plot2d.SaveAsTable\(string, string, bool\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_SaveAsTable\_System\_String\_System\_String\_System\_Boolean\_), 
[Plot2d.Show\(\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_Show), 
[Plot2d.ToString\(\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_ToString), 
[Plot2d.GetReadyToOutput\(\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_GetReadyToOutput), 
[Plot2d.AutoSetLegend\(\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_AutoSetLegend), 
[Plot2d.AutoNamer](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_AutoNamer), 
[Plot2d.Name](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_Name), 
[Plot2d.InternalSuggestedName](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_InternalSuggestedName), 
[Plot2d.GetSelfSuggestedName\(\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_GetSelfSuggestedName), 
[Plot2d.AutoCommenter](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_AutoCommenter), 
[Plot2d.Comment](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_Comment), 
[Plot2d.InternalSuggestedComment](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_InternalSuggestedComment), 
[Plot2d.GetSelfSuggestedComment\(\)](OpenTD.Results.Plot.Plot2d.md\#OpenTD\_Results\_Plot\_Plot2d\_GetSelfSuggestedComment), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Results_Plot_SimplePlot__ctor_System_String_"></a> SimplePlot\(string\)

```csharp
public SimplePlot(string title)
```

#### Parameters

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_SimplePlot__ctor"></a> SimplePlot\(\)

```csharp
public SimplePlot()
```

## Methods

### <a id="OpenTD_Results_Plot_SimplePlot_CheckData"></a> CheckData\(\)

```csharp
protected void CheckData()
```

### <a id="OpenTD_Results_Plot_SimplePlot_GetAsImage"></a> GetAsImage\(\)

```csharp
public override Bitmap GetAsImage()
```

#### Returns

 [Bitmap](https://learn.microsoft.com/dotnet/api/system.drawing.bitmap)

### <a id="OpenTD_Results_Plot_SimplePlot_Show"></a> Show\(\)

```csharp
public override void Show()
```

## See Also

[Plot2d](OpenTD.Results.Plot.Plot2d.md)

