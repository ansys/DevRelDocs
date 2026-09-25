# Method CreateSmoothing
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSmoothing_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_SmoothingType_System_Int32_System_Int32_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSmoothing_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_SmoothingType_System_Int32_System_Int32_"></a> CreateSmoothing\(IEnumerable<string\>, SmoothingType, int, int\)

Applies data filtering and smoothing to curve data as part of the chart tab's Signal Processing functionality.

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
series_names = List[str]()
series_names.Add(curves[0].SeriesName)

# Create the smoothed curve.
smoothing_type = SmoothingType.MovingWindowAveraging
points_of_window = 2
poly_order = 2
chart.CreateSmoothing(series_names, smoothing_type, points_of_window, poly_order)
```

### Remarks

This function performs smoothing on each curve specified in <code class="paramref">lstSeriesName</code> using the specified smoothing type,
window size, and polynomial order. The function supports moving average and Savitzky-Golay smoothing methods.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSmoothing_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__VM_Models_Post_SmoothingType_System_Int32_System_Int32_"></a> CreateSmoothing\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, SmoothingType, int, int\)

Applies data filtering and smoothing to curve data as part of the chart tab's Signal Processing functionality.

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

# Create the smoothed curve.
smoothing_type = SmoothingType.MovingWindowAveraging
points_of_window = 2
poly_order = 2
chart.CreateSmoothing(curves, smoothing_type, points_of_window, poly_order)
```

### Remarks

This function performs smoothing on each curve specified in <code class="paramref">seriesViewModels</code> using the specified smoothing type,
window size, and polynomial order. The function supports moving average and Savitzky-Golay smoothing methods.
