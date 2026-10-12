# Method ExportAllDataSeries
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_ExportAllDataSeries"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_ExportAllDataSeries"></a> ExportAllDataSeries\(\)

Exports the heat-map view's own X, Y, and Z grid values.

The created file uses the same text table format as [ExportAllCurves\(string\)](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.ExportAllCurves.md).

```csharp
void ExportAllDataSeries()
```

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
stft_parameters = STFTParameters()
stft_parameters.SamplingFrequency = 100
stft_parameters.TimeSlice = 0.05
stft_parameters.Overlap = 50
stft_parameters.SelectedPoints = 16384
stft_parameters.Start = start_time
stft_parameters.End = end_time
stft_parameters.ReferenceValue = 1E-05
stft_parameters.ScaleFactor = 1.0
stft_parameters.SelectedScaleType = STFTScaleType.Original
stfts = chart.CreateSTFT(stft_parameters, fft_names)
heatmap = stfts[0].STFT2DViewModel
heatmap.ExportAllDataSeries()
```

### Remarks

The operation opens a file-save dialog and exports the heat-map data to the selected location. Use `ExportAllCurves(string)` when the output path must be supplied programmatically.