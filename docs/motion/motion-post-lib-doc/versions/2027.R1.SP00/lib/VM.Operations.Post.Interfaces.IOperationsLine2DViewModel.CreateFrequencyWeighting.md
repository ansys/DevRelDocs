# Method CreateFrequencyWeighting
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateFrequencyWeighting.md" download="VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateFrequencyWeighting.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFrequencyWeighting_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_WeightingType_VM_Models_Post_FrequencyAxisType_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFrequencyWeighting_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_WeightingType_VM_Models_Post_FrequencyAxisType_"></a> CreateFrequencyWeighting\(IEnumerable<string\>, WeightingType, FrequencyAxisType\)

Applies frequency weighting to curve data as part of the chart tab's Signal Processing functionality.

For a complete operations, see [Operation API Example - Signal Processing](../document/operation-api/example/example_chart_for_operation_api.md#signal-processing).

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFrequencyWeighting(IEnumerable<string> lstSeriesName, WeightingType weightingType, FrequencyAxisType axisType)
```

### Parameters

`lstSeriesName` IEnumerable<string\>

The list of curve names to perform the operation on.

`weightingType` [WeightingType](VM.Models.Post.WeightingType.md)

The type of weighting to apply.

`axisType` [FrequencyAxisType](VM.Models.Post.FrequencyAxisType.md)

Used to set the base of the log scale.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with frequency weighting applied.

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
# The names of the curves to process.
series_names = List[str]()
series_names.Add(curves[0].SeriesName)

# Create the frequency-weighted curve.
# The weighting type.
weighting_type = WeightingType.AWeighting
# The axis of the frequency weighting.
frequency_axis_type = FrequencyAxisType.X
chart.CreateFrequencyWeighting(series_names, weighting_type, frequency_axis_type)
```

### Remarks

This function performs frequency weighting on each curve specified in <code class="paramref">lstSeriesName</code> using the specified weighting type
and axis type. A-weighting is the most commonly used to measure the sound pressure level, while B-weighting and C-weighting are alternative weighting functions.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFrequencyWeighting_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__VM_Models_Post_WeightingType_VM_Models_Post_FrequencyAxisType_"></a> CreateFrequencyWeighting\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, WeightingType, FrequencyAxisType\)

Applies frequency weighting to curve data as part of the chart tab's Signal Processing functionality.

For a complete operations, see [Operation API Example - Signal Processing](../document/operation-api/example/example_chart_for_operation_api.md#signal-processing).

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFrequencyWeighting(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, WeightingType weightingType, FrequencyAxisType axisType)
```

### Parameters

`seriesViewModels` IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

Curves used as operation inputs.

`weightingType` [WeightingType](VM.Models.Post.WeightingType.md)

The type of weighting to apply.

`axisType` [FrequencyAxisType](VM.Models.Post.FrequencyAxisType.md)

Used to set the base of the log scale.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with frequency weighting applied.

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

# Create the frequency-weighted curve.
# The weighting type.
weighting_type = WeightingType.AWeighting
# The axis of the frequency weighting.
frequency_axis_type = FrequencyAxisType.X
chart.CreateFrequencyWeighting(curves, weighting_type, frequency_axis_type)
```

### Remarks

This function performs frequency weighting on each curve specified in <code class="paramref">seriesViewModels</code> using the specified weighting type
and axis type. A-weighting is the most commonly used to measure the sound pressure level, while B-weighting and C-weighting are alternative weighting functions.
