# Method ExportOrderTrackingCurve
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.ExportOrderTrackingCurve.md" download="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.ExportOrderTrackingCurve.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart = page.CreateChart(chart_name)

# Create a source curve for the STFT view.
# The characteristic/component paths of the curves to add, in "Characteristic/Component" format.
curve_paths = List[str]()
# The name of the source curve.
source_curve_name = "Displacement/Magnitude"
curve_paths.Add(source_curve_name)
# The parameters that specify the target and curve paths of the plot.
plot_parameters = PlotParameters()
plot_parameters.Paths = curve_paths
# The name of the target entity.
entity_name = "Crank"
plot_parameters.Target = entity_name

# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The curves added to the chart view.
curves = chart.AddCurves(RESULT_FILE_PATH, plot_parameters)
# The FFT type.
fft_type = FFTType.Magnitude
# The window type of the FFT.
window_type = FFTWindowType.Rectangular
# The scale type of the FFT.
scale_type = ScaleType.Original
# The number of data points for the FFT.
point_count = 128
# The start time of the range to be analyzed.
start_time = 0.0
# The end time of the range to be analyzed.
end_time = 1.0
# The FFT curves created from the curves.
fft_curves = chart.CreateFFT(curves, fft_type, window_type, scale_type, point_count, start_time, end_time)
# The names of the FFT curves.
fft_names = List[str]()
fft_names.Add(fft_curves[0].SeriesName)
# The STFT parameters.
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
# The STFT views created from the curves.
stfts = chart.CreateSTFT(stft_parameters, fft_names)

# Export the selected STFT curve to order tracking.
curve_name = fft_curves[0].SeriesName
stfts[0].STFT2DViewModel.ExportOrderTrackingCurve(curve_name)
```

### Remarks

The operation intersects the curve with the heat-map grid, creates XZ and YZ curve data, and adds the resulting curves to a chart. If no matching curve or heat-map data exists, no curve is exported.
