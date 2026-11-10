# Method CreateSmoothing
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSmoothing.md" download="VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSmoothing.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSmoothing_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_SmoothingType_System_Int32_System_Int32_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSmoothing_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_SmoothingType_System_Int32_System_Int32_"></a> CreateSmoothing\(IEnumerable<string\>, SmoothingType, int, int\)

Applies data filtering and smoothing to curve data as part of the chart tab's Signal Processing functionality.

For a complete operations, see [Operation API Example - Signal Processing](../document/operation-api/example/example_chart_for_operation_api.md#signal-processing).

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateSmoothing(IEnumerable<string> lstSeriesName, SmoothingType smoothingType, int pointsOfWindow, int polyOrder)
```

### Parameters

`lstSeriesName` IEnumerable<string\>

The list of curve names to perform the operation on.

`smoothingType` [SmoothingType](VM.Models.Post.SmoothingType.md)

The type of smoothing to apply.

`pointsOfWindow` int

The number of points for the smoothing window.

`polyOrder` int

The polynomial order for the smoothing operation.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with smoothing applied.

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

# Create the smoothed curve.
# The smoothing type.
smoothing_type = SmoothingType.MovingWindowAveraging
# The number of points for the window.
points_of_window = 2
# The polynomial order.
poly_order = 2
chart.CreateSmoothing(series_names, smoothing_type, points_of_window, poly_order)
```

### Remarks

This function performs smoothing on each curve specified in <code class="paramref">lstSeriesName</code> using the specified smoothing type,
window size, and polynomial order. The function supports moving average and Savitzky-Golay smoothing methods.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSmoothing_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__VM_Models_Post_SmoothingType_System_Int32_System_Int32_"></a> CreateSmoothing\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, SmoothingType, int, int\)

Applies data filtering and smoothing to curve data as part of the chart tab's Signal Processing functionality.

For a complete operations, see [Operation API Example - Signal Processing](../document/operation-api/example/example_chart_for_operation_api.md#signal-processing).

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateSmoothing(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, SmoothingType smoothingType, int pointsOfWindow, int polyOrder)
```

### Parameters

`seriesViewModels` IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

Curves used as operation inputs.

`smoothingType` [SmoothingType](VM.Models.Post.SmoothingType.md)

The type of smoothing to apply.

`pointsOfWindow` int

The number of points for the smoothing window.

`polyOrder` int

The polynomial order for the smoothing operation.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with smoothing applied.

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

# Create the smoothed curve.
# The smoothing type.
smoothing_type = SmoothingType.MovingWindowAveraging
# The number of points for the window.
points_of_window = 2
# The polynomial order.
poly_order = 2
chart.CreateSmoothing(curves, smoothing_type, points_of_window, poly_order)
```

### Remarks

This function performs smoothing on each curve specified in <code class="paramref">seriesViewModels</code> using the specified smoothing type,
window size, and polynomial order. The function supports moving average and Savitzky-Golay smoothing methods.
