# Method ExportAllDataSeries
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_ExportAllDataSeries"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_ExportAllDataSeries"></a> ExportAllDataSeries\(\)

Exports all curves included in the heat-map view.

```csharp
void ExportAllDataSeries()
```

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

# Create an STFT heat-map and export all data series.
data = HeatMapSTFTDataViewModel()
stfts = chart.CreateSTFT(data, fft_names)
heatmap = stfts[0].STFT2DViewModel
heatmap.ExportAllDataSeries()
```

### Remarks

The operation opens a file-save dialog and exports all heat-map curves to the selected location. Use [ExportAllCurves\(string\)](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.ExportAllCurves.md) when the output path must be supplied programmatically.
