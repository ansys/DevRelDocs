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

 [ExportHeatMapData\(string\)](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.ExportHeatMapData.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapBaseViewModel\_ExportHeatMapData\_System\_String\_)

Exports the heat-map view's own X, Y, and Z grid values to a specified file path.

The heat-map view holds a single heat map, so the file always contains one X, Y, and Z table.

The column separator is chosen from the file extension of <code class="paramref">filepath</code>, so the created file takes one of the following forms.

A `.csv` path is written as a comma-separated table.

```text
Time (sec),Frequency (Hz),Z
1.250000000003e-002,-3.051757812500e-002,2.119873428345e+001
3.750000000008e-002,-3.051757812500e-002,2.119873428345e+001
...
```

The header row holds the X-axis title, the Y-axis title, and `Z`.
```
        ┌─────┬─────┬─────┬─────┐
        │     │     │     │     │   ④
        ├─────┼─────┼─────┼─────┤
        │     │     │     │     │   ③
    Y ↑ ├─────┼─────┼─────┼─────┤
        │     │     │     │     │   ②
        ├─────┼─────┼─────┼─────┤
Start → │  →  │  →  │  →  │  →  │   ①
        └─────┴─────┴─────┴─────┘
                   X →
```

Starting from the bottommost row, the values are written in order along the X direction. After one row is filled, the output moves to the next row in the Y direction, and every row is written the same way.

Every numeric value is written in exponential notation with 12 fractional digits regardless of the file extension.

A `.txt` path is written as a tab-separated table.

```text
Time (sec)	Frequency (Hz)	Z
1.250000000003e-002	-3.051757812500e-002	2.119873428345e+001
3.750000000008e-002	-3.051757812500e-002	2.119873428345e+001
...
```

The columns and iteration order are identical to the `.csv` form, and only the separator differs, using a tab character between columns.
