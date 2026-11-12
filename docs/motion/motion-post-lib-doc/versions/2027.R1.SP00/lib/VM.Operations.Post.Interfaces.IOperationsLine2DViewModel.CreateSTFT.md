# Method CreateSTFT
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSTFT.md" download="VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSTFT.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSTFT_VM_Models_Post_ISTFTParameters_System_Collections_Generic_IList_System_String__"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSTFT_VM_Models_Post_ISTFTParameters_System_Collections_Generic_IList_System_String__"></a> CreateSTFT\(ISTFTParameters, IList<string\>\)

Creates a Short Time Fourier Transform (STFT) for curve data and updates the heatmap data.

For a complete operations, see [Operation API Example - STFT](../document/operation-api/example/example_chart_for_operation_api.md#stft).

```csharp
IOperationsHeatMapSTFTViewModel[] CreateSTFT(ISTFTParameters hitmapData, IList<string> lstSeriesName)
```

### Parameters

`hitmapData` [ISTFTParameters](VM.Models.Post.ISTFTParameters.md)

The heatmap data model to update with STFT results.
STFT data model that defines the time, sampling, overlap, point-count, and scale settings used for the calculation.

`lstSeriesName` IList<string\>

The list of curve names to perform the STFT operation on.

### Returns

 [IOperationsHeatMapSTFTViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.md)\[\]

A collection of STFTView.

### Examples

```python
# Create the chart view.
page = application_handler.GetActivePage()
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart = page.CreateChart(chart_name)

# Add curves to the chart.
# The characteristic/component paths of the curves to add, in "Characteristic/Component" format.
curve_paths = List[str]()
# The characteristic/component path of the curve to add, in "Characteristic/Component" format.
curve_path = "Displacement/Magnitude"
curve_paths.Add(curve_path)
# The name of the target entity.
entity_name = "Crank"
# The parameters that specify the target and curve paths of the plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
parameters.Target = entity_name
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The curves added to the chart view.
curves = chart.AddCurves(RESULT_FILE_PATH, parameters)

# Select the source curves.
# The names of the FFT curves.
fft_names = List[str]()
fft_names.Add(curves[0].SeriesName)

# Configure the STFT parameters.
stft_parameters = STFTParameters()
stft_parameters.SamplingFrequency = 100
stft_parameters.TimeSlice = 0.05
stft_parameters.Overlap = 50
stft_parameters.SelectedPoints = 16384
stft_parameters.Start = 0
stft_parameters.End = 1.0
stft_parameters.ReferenceValue = 1e-5
stft_parameters.ScaleFactor = 1.0
stft_parameters.SelectedScaleType = STFTScaleType.Original

# Create the STFT curve.
chart.CreateSTFT(stft_parameters, fft_names)
```

### Remarks

This function performs the STFT on each curve specified in <code class="paramref">lstSeriesName</code> and updates the heatmap data
model with the results. The heatmap data model is defined by [`IOperationsHeatMapSTFTDataViewModel`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.md).

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSTFT_VM_Models_Post_ISTFTParameters_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__"></a> CreateSTFT\(ISTFTParameters, IEnumerable<IOperationsLineDataSeriesViewModelBase\>\)

Creates a Short Time Fourier Transform (STFT) for curve data and updates the heatmap data.

For a complete operations, see [Operation API Example - STFT](../document/operation-api/example/example_chart_for_operation_api.md#stft).

```csharp
IOperationsHeatMapSTFTViewModel[] CreateSTFT(ISTFTParameters hitmapData, IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels)
```

### Parameters

`hitmapData` [ISTFTParameters](VM.Models.Post.ISTFTParameters.md)

The heatmap data model to update with STFT results.
STFT data model that defines the time, sampling, overlap, point-count, and scale settings used for the calculation.

`seriesViewModels` IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

Curves used as operation inputs.

### Returns

 [IOperationsHeatMapSTFTViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.md)\[\]

A collection of STFTView.

### Examples

```python
# Create the chart view.
page = application_handler.GetActivePage()
# The name of the new chart view.
chart_name = "ChartSeries"
# The chart view created on the page.
chart = page.CreateChart(chart_name)

# Add curves to the chart.
# The characteristic/component paths of the curves to add, in "Characteristic/Component" format.
curve_paths = List[str]()
# The characteristic/component path of the curve to add, in "Characteristic/Component" format.
curve_path = "Displacement/Magnitude"
curve_paths.Add(curve_path)
# The name of the target entity.
entity_name = "Crank"
# The parameters that specify the target and curve paths of the plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
parameters.Target = entity_name
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The curves added to the chart view.
curves = chart.AddCurves(RESULT_FILE_PATH, parameters)

# Select the source curves.
# The names of the FFT curves.
fft_names = List[str]()
fft_names.Add(curves[0].SeriesName)

# Configure the STFT parameters.
stft_parameters = STFTParameters()
stft_parameters.SamplingFrequency = 100
stft_parameters.TimeSlice = 0.05
stft_parameters.Overlap = 50
stft_parameters.SelectedPoints = 16384
stft_parameters.Start = 0
stft_parameters.End = 1.0
stft_parameters.ReferenceValue = 1e-5
stft_parameters.ScaleFactor = 1.0
stft_parameters.SelectedScaleType = STFTScaleType.Original

# Create the STFT curve.
chart.CreateSTFT(stft_parameters, curves)
```

### Remarks

This function performs the STFT on each curve specified in <code class="paramref">seriesViewModels</code> and updates the heatmap data
model with the results. The heatmap data model is defined by [`IOperationsHeatMapSTFTDataViewModel`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.md).
