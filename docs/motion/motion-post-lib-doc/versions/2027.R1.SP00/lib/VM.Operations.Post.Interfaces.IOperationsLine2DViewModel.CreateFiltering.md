# Method CreateFiltering
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFiltering_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_FilteringType_System_Int32_System_Double_System_Double_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFiltering_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_FilteringType_System_Int32_System_Double_System_Double_"></a> CreateFiltering\(IEnumerable<string\>, FilteringType, int, double, double\)

Applies data filtering and smoothing to curve data as part of the chart tab's Signal Processing functionality.

For a complete operations, see [Operation API Example - Signal Processing](../document/operation-api/example/example_chart_for_operation_api.md#signal-processing).

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFiltering(IEnumerable<string> lstSeriesName, FilteringType filteringType, int order, double frequency1, double frequency2)
```

### Parameters

`lstSeriesName` IEnumerable<string\>

The list of curve names to perform the operation on.

`filteringType` [FilteringType](VM.Models.Post.FilteringType.md)

The type of filter to apply.

`order` int

The order of the filter. As the value decreases, the output becomes smoother.

`frequency1` double

The first frequency value for the filter.

`frequency2` double

The second frequency value for the filter, used in band filters.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with filtering applied.

### Examples

```python
# Get the result document.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)

# Create the chart view.
page = application_handler.GetActivePage()
chart_name = "Chart"
chart = page.CreateChart(chart_name)

# Add curves to the chart.
curve_paths = List[str]()
curve_path = "Displacement/Magnitude"
curve_paths.Add(curve_path)
entity_name = "Crank"
parameters = PlotParameters()
parameters.Paths = curve_paths
parameters.Target = entity_name
curves = chart.AddCurves(RESULT_FILE_PATH, parameters)

# Select the source curves.
series_names = List[str]()
series_names.Add(curves[0].SeriesName)

# Create the filtered curve.
filtering_type = FilteringType.LowPass
order = 2
frequency_1 = 100.0
frequency_2 = 100.0
chart.CreateFiltering(series_names, filtering_type, order, frequency_1, frequency_2)
```

### Remarks

This function performs filtering on each curve specified in <code class="paramref">lstSeriesName</code> using the specified filtering type,
filter order, and frequency values. The filtering operation can smooth the curve data based on the parameters provided.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFiltering_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__VM_Models_Post_FilteringType_System_Int32_System_Double_System_Double_"></a> CreateFiltering\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, FilteringType, int, double, double\)

Applies data filtering and smoothing to curve data as part of the chart tab's Signal Processing functionality.

For a complete operations, see [Operation API Example - Signal Processing](../document/operation-api/example/example_chart_for_operation_api.md#signal-processing).

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFiltering(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, FilteringType filteringType, int order, double frequency1, double frequency2)
```

### Parameters

`seriesViewModels` IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

Curves used as operation inputs.

`filteringType` [FilteringType](VM.Models.Post.FilteringType.md)

The type of filter to apply.

`order` int

The order of the filter. As the value decreases, the output becomes smoother.

`frequency1` double

The first frequency value for the filter.

`frequency2` double

The second frequency value for the filter, used in band filters.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with filtering applied.

### Examples

```python
# Get the result document.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)

# Create the chart view.
page = application_handler.GetActivePage()
chart_name = "ChartSeries"
chart = page.CreateChart(chart_name)

# Add curves to the chart.
curve_paths = List[str]()
curve_path = "Displacement/Magnitude"
curve_paths.Add(curve_path)
entity_name = "Crank"
parameters = PlotParameters()
parameters.Paths = curve_paths
parameters.Target = entity_name
curves = chart.AddCurves(RESULT_FILE_PATH, parameters)

# Create the filtered curve.
filtering_type = FilteringType.LowPass
order = 2
frequency_1 = 100.0
frequency_2 = 100.0
chart.CreateFiltering(curves, filtering_type, order, frequency_1, frequency_2)
```

### Remarks

This function performs filtering on each curve specified in <code class="paramref">seriesViewModels</code> using the specified filtering type,
filter order, and frequency values. The filtering operation can smooth the curve data based on the parameters provided.

<a href="/lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateFiltering.md" download="VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateFiltering.md">Download this page as Markdown</a>
