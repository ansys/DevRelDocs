# Method CreateTranslate
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateTranslate_System_Collections_Generic_IEnumerable_System_String__System_Double_System_Double_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateTranslate_System_Collections_Generic_IEnumerable_System_String__System_Double_System_Double_"></a> CreateTranslate\(IEnumerable<string\>, double, double\)

Translates curve data by the specified offsets as part of the chart tab's Transform functionality.

For a complete operations, see [Operation API Example - Transform](../document/operation-api/example/example_chart_for_operation_api.md#transform).

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateTranslate(IEnumerable<string> lstSeriesName, double offsetX, double offsetY)
```

### Parameters

`lstSeriesName` IEnumerable<string\>

The list of curve names to perform the translation on.

`offsetX` double

The offset value to translate on the X-axis.

`offsetY` double

The offset value to translate on the Y-axis.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of translated curves.

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

# Create the translated curve.
offset_x = 0.0
offset_y = 100.0
chart.CreateTranslate(series_names, offset_x, offset_y)
```

### Remarks

This function translates each curve specified in <code class="paramref">lstSeriesName</code> by adding the specified offsets to the X and Y values
of each point in the curve.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateTranslate_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__System_Double_System_Double_"></a> CreateTranslate\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, double, double\)

Translates curve data by the specified offsets as part of the chart tab's Transform functionality.

For a complete operations, see [Operation API Example - Transform](../document/operation-api/example/example_chart_for_operation_api.md#transform).

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateTranslate(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, double offsetX, double offsetY)
```

### Parameters

`seriesViewModels` IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

Curves used as operation inputs.

`offsetX` double

The offset value to translate on the X-axis.

`offsetY` double

The offset value to translate on the Y-axis.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of translated curves.

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

# Create the translated curve.
offset_x = 0.0
offset_y = 100.0
chart.CreateTranslate(curves, offset_x, offset_y)
```

### Remarks

This function translates each curve specified in <code class="paramref">seriesViewModels</code> by adding the specified offsets to the X and Y values
of each point in the curve.

<a href="/lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateTranslate.md" download="VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateTranslate.md">Download this page as Markdown</a>
