# Method CreateSimpleMath
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSimpleMath.md" download="VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSimpleMath.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSimpleMath_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_SimpleMathType_System_Int32_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSimpleMath_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_SimpleMathType_System_Int32_"></a> CreateSimpleMath\(IEnumerable<string\>, SimpleMathType, int\)

Performs simple mathematical operations (+, -, *) on curve data as part of the chart tab's Simple Math functionality.

For a complete operations, see [Operation API Example - Simple Math](../document/operation-api/example/example_chart_for_operation_api.md#simple-math).

```csharp
IOperationsLineDataSeriesViewModelBase CreateSimpleMath(IEnumerable<string> lstSeriesName, SimpleMathType simpleMathType, int points)
```

### Parameters

`lstSeriesName` IEnumerable<string\>

The list of curve names to perform the operation on.

`simpleMathType` [SimpleMathType](VM.Models.Post.SimpleMathType.md)

The type of simple math operation to apply.

`points` int

The number of data points for interpolation.

### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

A single curve resulting from the mathematical operation.

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

# Create the simple-math curve.
# The type of the mathematical operation.
simple_math_type = SimpleMathType.Add
# The number of data points of each created curve.
points = 100
chart.CreateSimpleMath(series_names, simple_math_type, points)
```

### Remarks

This function performs the specified mathematical operation on each curve in <code class="paramref">lstSeriesName</code> and combines the results
into a single curve. The function supports addition, subtraction, and multiplication of the Y values of the data points in the curve.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSimpleMath_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__VM_Models_Post_SimpleMathType_System_Int32_"></a> CreateSimpleMath\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, SimpleMathType, int\)

Performs simple mathematical operations (+, -, *) on curve data as part of the chart tab's Simple Math functionality.

For a complete operations, see [Operation API Example - Simple Math](../document/operation-api/example/example_chart_for_operation_api.md#simple-math).

```csharp
IOperationsLineDataSeriesViewModelBase CreateSimpleMath(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, SimpleMathType simpleMathType, int points)
```

### Parameters

`seriesViewModels` IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

Curves used as operation inputs.

`simpleMathType` [SimpleMathType](VM.Models.Post.SimpleMathType.md)

The type of simple math operation to apply.

`points` int

The number of data points for interpolation.

### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

A single curve resulting from the mathematical operation.

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

# Create the simple-math curve.
# The type of the mathematical operation.
simple_math_type = SimpleMathType.Add
# The number of data points of each created curve.
points = 100
chart.CreateSimpleMath(curves, simple_math_type, points)
```

### Remarks

This function performs the specified mathematical operation on each curve in <code class="paramref">seriesViewModels</code> and combines the results
into a single curve. The function supports addition, subtraction, and multiplication of the Y values of the data points in the curve.
