# Method CreateInterpolation
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateInterpolation.md" download="VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateInterpolation.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateInterpolation_System_Collections_Generic_IEnumerable_System_String__System_Int32_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateInterpolation_System_Collections_Generic_IEnumerable_System_String__System_Int32_"></a> CreateInterpolation\(IEnumerable<string\>, int\)

Applies interpolation to curve data as part of the chart tab's Interpolation functionality.

For a complete operations, see [Operation API Example - Interpolation](../document/operation-api/example/example_chart_for_operation_api.md#interpolation).

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateInterpolation(IEnumerable<string> lstSeriesName, int points)
```

### Parameters

`lstSeriesName` IEnumerable<string\>

The list of curve names to perform the interpolation on.

`points` int

The number of data points for interpolation.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with interpolated values.

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

# Create the interpolated curve.
# The number of data points for the interpolation.
points = 200
chart.CreateInterpolation(series_names, points)
```

### Remarks

This function performs interpolation on each curve specified in <code class="paramref">lstSeriesName</code> by calculating the interpolated values
based on the specified number of points.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateInterpolation_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__System_Int32_"></a> CreateInterpolation\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, int\)

Applies interpolation to curve data as part of the chart tab's Interpolation functionality.

For a complete operations, see [Operation API Example - Interpolation](../document/operation-api/example/example_chart_for_operation_api.md#interpolation).

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateInterpolation(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, int points)
```

### Parameters

`seriesViewModels` IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

Curves used as operation inputs.

`points` int

The number of data points for interpolation.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with interpolated values.

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

# Create the interpolated curve.
# The number of data points for the interpolation.
points = 200
chart.CreateInterpolation(curves, points)
```

### Remarks

This function performs interpolation on each curve specified in <code class="paramref">seriesViewModels</code> by calculating the interpolated values
based on the specified number of points.
