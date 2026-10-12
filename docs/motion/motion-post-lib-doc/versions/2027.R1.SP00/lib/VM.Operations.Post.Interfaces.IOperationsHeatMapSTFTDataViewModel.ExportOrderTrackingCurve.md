# Method ExportOrderTrackingCurve
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_ExportOrderTrackingCurve_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_ExportOrderTrackingCurve_System_String_"></a> ExportOrderTrackingCurve\(string\)

Exports a selected STFT heat-map curve as order-tracking curve data.

```csharp
void ExportOrderTrackingCurve(string name)
```

### Parameters

`name` string

Series name of a curve in the STFT heat-map view. Obtain it from the selected or existing curve.

### Examples

```python
# Get the chart page and create an STFT heat-map.
page = application_handler.GetActivePage()
chart_name = "Chart"
chart = page.CreateChart(chart_name)

# Create a source curve for the STFT view.
curve_paths = List[str]()
source_curve_name = "Displacement/Magnitude"
curve_paths.Add(source_curve_name)
plot_parameters = PlotParameters()
plot_parameters.Paths = curve_paths
entity_name = "Crank"
plot_parameters.Target = entity_name

# RESULT_FILE_PATH : .dfr result file path
curves = chart.AddCurves(RESULT_FILE_PATH, plot_parameters)
fft_type = FFTType.Magnitude
window_type = FFTWindowType.Rectangular
scale_type = ScaleType.Original
point_count = 128
start_time = 0.0
end_time = 1.0
fft_curves = chart.CreateFFT(curves, fft_type, window_type, scale_type, point_count, start_time, end_time)
fft_names = List[str]()
fft_names.Add(fft_curves[0].SeriesName)
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

# Export the selected STFT curve to order tracking.
curve_name = fft_curves[0].SeriesName
stfts[0].STFT2DViewModel.ExportOrderTrackingCurve(curve_name)
```

### Remarks

The operation intersects the curve with the heat-map grid, creates XZ and YZ curve data, and adds the resulting curves to a chart. If no matching curve or heat-map data exists, no curve is exported.
