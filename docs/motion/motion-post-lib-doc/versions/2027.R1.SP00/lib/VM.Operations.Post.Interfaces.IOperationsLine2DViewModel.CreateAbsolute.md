# Method CreateAbsolute
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateAbsolute_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_SignType_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateAbsolute_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_SignType_"></a> CreateAbsolute\(IEnumerable<string\>, SignType\)

Transforms curve data into absolute values for the Y-Axis as part of the chart tab's Transform functionality.

For a complete operations, see [Operation API Example - Transform](../document/operation-api/example/example_chart_for_operation_api.md#transform).

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateAbsolute(IEnumerable<string> lstSeriesName, SignType signType)
```

### Parameters

`lstSeriesName` IEnumerable<string\>

The list of curve names to perform the operation on.

`signType` [SignType](VM.Models.Post.SignType.md)

The type of absolute value transformation to apply.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with transformed absolute values.

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

# Create the absolute-value curve.
sign_type = SignType.Positive
chart.CreateAbsolute(series_names, sign_type)
```

### Remarks

This function iterates over each curve specified in <code class="paramref">lstSeriesName</code> and converts the Y values of each point
to absolute values. The <code class="paramref">signType</code> selects whether the positive or negative absolute values are produced.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateAbsolute_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__VM_Models_Post_SignType_"></a> CreateAbsolute\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, SignType\)

Transforms curve data into absolute values for the Y-Axis as part of the chart tab's Transform functionality.

For a complete operations, see [Operation API Example - Transform](../document/operation-api/example/example_chart_for_operation_api.md#transform).

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateAbsolute(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, SignType signType)
```

### Parameters

`seriesViewModels` IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

Curves used as operation inputs.

`signType` [SignType](VM.Models.Post.SignType.md)

The type of absolute value transformation to apply.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with transformed absolute values.

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

# Create the absolute-value curve.
sign_type = SignType.Positive
chart.CreateAbsolute(curves, sign_type)
```

### Remarks

This function iterates over each curve in <code class="paramref">seriesViewModels</code> and converts the Y values of each point
to absolute values. The <code class="paramref">signType</code> selects whether the positive or negative absolute values are produced.

<a href="/lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateAbsolute.md" download="VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateAbsolute.md">Download this page as Markdown</a>
