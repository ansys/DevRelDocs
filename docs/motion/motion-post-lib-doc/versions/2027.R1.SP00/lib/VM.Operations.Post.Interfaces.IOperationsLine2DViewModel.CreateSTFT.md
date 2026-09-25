# Method CreateSTFT
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSTFT_VM_Models_Post_ISTFTParameters_System_Collections_Generic_IList_System_String__"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSTFT_VM_Models_Post_ISTFTParameters_System_Collections_Generic_IList_System_String__"></a> CreateSTFT\(ISTFTParameters, IList<string\>\)

Creates a Short Time Fourier Transform (STFT) for curve data and updates the heatmap data.

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
# Get the result document.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)

# Create the chart view.
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "Chart"
chart = page.CreateChart(chart_name)

# Add curves to the chart.
curve_paths = List[str]()
curve_path = "Displacement/Magnitude"
curve_paths.Add(curve_path)
target_name = "FEBody_01"
parameters = PlotParameters()
parameters.Paths = curve_paths
parameters.Target = target_name
curves = chart.AddCurves(RESULT_FILE_PATH, parameters)

# Select the source curves.
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
# Get the result document.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)

# Create the chart view.
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "ChartSeries"
chart = page.CreateChart(chart_name)

# Add curves to the chart.
curve_paths = List[str]()
curve_path = "Displacement/Magnitude"
curve_paths.Add(curve_path)
target_name = "FEBody_01"
parameters = PlotParameters()
parameters.Paths = curve_paths
parameters.Target = target_name
curves = chart.AddCurves(RESULT_FILE_PATH, parameters)

# Select the source curves.
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
