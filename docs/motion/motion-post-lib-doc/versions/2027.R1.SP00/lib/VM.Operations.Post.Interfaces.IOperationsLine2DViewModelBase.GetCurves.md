# Method GetCurves
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetCurves.md" download="VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetCurves.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurves"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurves"></a> GetCurves\(\)

Gets all the curves currently included in the chart view.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> GetCurves()
```

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of all the curves currently displayed in the chart view.

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
chart.AddCurves(RESULT_FILE_PATH, parameters)

# Get all curves.
curves = chart.GetCurves()
```

### Remarks

This method retrieves all the curves that are currently displayed in the chart view.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurves_System_String_"></a> GetCurves\(string\)

Gets all curves from the chart view that contain the specified substring in their names.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> GetCurves(string name)
```

### Parameters

`name` string

A substring to search for within the curve names.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of all curves whose names contain the specified substring.

### Examples

```python
# Create the chart view.
page = application_handler.GetActivePage()
# The name of the new chart view.
chart_name = "ChartFiltered"
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
chart.AddCurves(RESULT_FILE_PATH, parameters)

# Get the matching curves.
# The name of the curve.
curve_name = "X"
# The curves currently included in the chart view.
curves = chart.GetCurves(curve_name)
```

### Remarks

This method searches for and returns all curves whose names contain the specified substring.

<Note>
If no curve name contains the specified substring, an empty collection is returned.
</Note>
