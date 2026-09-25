# Interface IOperationsHeatMapBaseViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides legend range, legend appearance, and curve export operations for a heat-map view.

```csharp
public interface IOperationsHeatMapBaseViewModel
```

## Properties

 [IsAutoRange](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.IsAutoRange.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapBaseViewModel\_IsAutoRange)

Gets or sets whether the heat-map legend range is calculated automatically. `true` calculates [`Min`](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.Min.md) and [`Max`](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.Max.md) automatically; `false` uses assigned values.

 [LegendFontColor](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.LegendFontColor.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapBaseViewModel\_LegendFontColor)

Gets or sets the font color used to render heat-map legend text.

 [LegendFontSize](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.LegendFontSize.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapBaseViewModel\_LegendFontSize)

Gets or sets the font size used to render heat-map legend text.

 [Max](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.Max.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapBaseViewModel\_Max)

Gets or sets the maximum value of the heat-map legend range used when [`IsAutoRange`](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.IsAutoRange.md) is `false`.

 [Min](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.Min.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapBaseViewModel\_Min)

Gets or sets the minimum value of the heat-map legend range used when [`IsAutoRange`](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.IsAutoRange.md) is `false`.

## Methods

 [ExportAllCurves\(string\)](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.ExportAllCurves.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapBaseViewModel\_ExportAllCurves\_System\_String\_)

Exports all curves in the heat-map view to a specified file path.

 [ExportAllDataSeries\(\)](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.ExportAllDataSeries.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapBaseViewModel\_ExportAllDataSeries)

Exports all curves included in the heat-map view.
