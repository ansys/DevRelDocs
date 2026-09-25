# Method CreateInterpolation
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateInterpolation_System_Collections_Generic_IEnumerable_System_String__System_Int32_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateInterpolation_System_Collections_Generic_IEnumerable_System_String__System_Int32_"></a> CreateInterpolation\(IEnumerable<string\>, int\)

Applies interpolation to curve data as part of the chart tab's Interpolation functionality.

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

# Create the interpolated curve.
points = 200
chart.CreateInterpolation(series_names, points)
```

### Remarks

This function performs interpolation on each curve specified in <code class="paramref">lstSeriesName</code> by calculating the interpolated values
based on the specified number of points.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateInterpolation_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__System_Int32_"></a> CreateInterpolation\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, int\)

Applies interpolation to curve data as part of the chart tab's Interpolation functionality.

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

# Create the interpolated curve.
points = 200
chart.CreateInterpolation(curves, points)
```

### Remarks

This function performs interpolation on each curve specified in <code class="paramref">seriesViewModels</code> by calculating the interpolated values
based on the specified number of points.
