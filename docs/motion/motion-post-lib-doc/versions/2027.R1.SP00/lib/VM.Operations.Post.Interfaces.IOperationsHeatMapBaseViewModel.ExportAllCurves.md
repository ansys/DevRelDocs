# Method ExportAllCurves
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_ExportAllCurves_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_ExportAllCurves_System_String_"></a> ExportAllCurves\(string\)

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

```csharp
void ExportAllCurves(string filepath)
```

### Parameters

`filepath` string

Output file path used to store the exported heat-map grid. A `.csv` path writes a comma-separated file, and a `.txt` path writes a tab-separated file.

### Examples

```python
# Get the chart page and create a heat-map view.
page = application_handler.GetActivePage()
chart_name = "Chart"
chart = page.CreateChart(chart_name)

# Create a source curve for the STFT heat-map.
curve_paths = List[str]()
source_curve_name = "Displacement/Magnitude"
curve_paths.Add(source_curve_name)
plot_parameters = PlotParameters()
plot_parameters.Paths = curve_paths
entity_name = "Crank"
plot_parameters.Target = entity_name

# RESULT_FILE_PATH : .dfr result file path
curves = chart.AddCurves(RESULT_FILE_PATH, plot_parameters)
source_names = List[str]()
source_names.Add(curves[0].SeriesName)

# Create an STFT heat-map directly from the source curve.
stft_parameters = STFTParameters()
stft_parameters.SamplingFrequency = 100
stft_parameters.TimeSlice = 0.05
stft_parameters.Overlap = 50
stft_parameters.SelectedPoints = 16384
stft_parameters.Start = 0.0
stft_parameters.End = 1.0
stft_parameters.ReferenceValue = 1E-05
stft_parameters.ScaleFactor = 1.0
stft_parameters.SelectedScaleType = STFTScaleType.Original
stfts = chart.CreateSTFT(stft_parameters, source_names)
heatmap = stfts[0].STFT2DViewModel

# Export heat-map data to a file.
# PATH : path to the folder where exported files are written
# HEATMAP_OUTPUT_FILENAME : output filename for the exported heatmap data
output_path = Path.Combine(PATH, HEATMAP_OUTPUT_FILENAME)
heatmap.ExportAllCurves(output_path)
```

### Remarks

The operation writes the heat-map data directly to <code class="paramref">filepath</code> without opening a file-save dialog.