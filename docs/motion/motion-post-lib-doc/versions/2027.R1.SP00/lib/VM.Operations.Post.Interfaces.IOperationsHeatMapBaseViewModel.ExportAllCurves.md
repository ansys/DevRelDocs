# Method ExportAllCurves
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_ExportAllCurves_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_ExportAllCurves_System_String_"></a> ExportAllCurves\(string\)

Exports all curves in the heat-map view to a specified file path.

```csharp
void ExportAllCurves(string filepath)
```

### Parameters

`filepath` string

Output file path used to store the exported curves.

### Examples

```python
# Get the chart page and create a heat-map view.
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "Chart"
chart = page.CreateChart(chart_name)

# Create a source curve for the STFT heat-map.
curve_paths = List[str]()
source_curve_name = "Displacement/Magnitude"
curve_paths.Add(source_curve_name)
plot_parameters = PlotParameters()
plot_parameters.Paths = curve_paths
target_name = "Crank"
plot_parameters.Target = target_name

# RESULT_FILE_PATH : .dfr result file path
curves = chart.AddCurves(RESULT_FILE_PATH, plot_parameters)

# Create an FFT input curve.
fft_type = FFTType.Magnitude
window_type = FFTWindowType.Rectangular
scale_type = ScaleType.Original
point_count = 128
start_time = 0.0
end_time = 1.0
fft_curves = chart.CreateFFT(curves, fft_type, window_type, scale_type, point_count, start_time, end_time)
fft_names = List[str]()
fft_names.Add(fft_curves[0].SeriesName)

# Create an STFT heat-map.
data = HeatMapSTFTDataViewModel()
stfts = chart.CreateSTFT(data, fft_names)
heatmap = stfts[0].STFT2DViewModel

# Export heat-map curves to a file.
# PATH : path to the folder where exported files are written
# HEATMAP_OUTPUT_FILENAME : output filename for the exported heatmap curves
output_path = os.path.join(PATH, HEATMAP_OUTPUT_FILENAME)
heatmap.ExportAllCurves(output_path)
```

### Remarks

The operation writes all heat-map curve data directly to <code class="paramref">filepath</code> without opening a file-save dialog.
