# Method GetCurve
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetCurve.md" download="VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetCurve.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurve_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurve_System_String_"></a> GetCurve\(string\)

Gets a curve from the chart by its name.

```csharp
IOperationsLineDataSeriesViewModelBase GetCurve(string name)
```

### Parameters

`name` string

The name of the curve to retrieve.

### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

Matching [`IOperationsLineDataSeriesViewModelBase`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md), or `null` if no such curve exists.

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

# Get the curve by name.
# The name of the curve.
curve_name = "Displacement/Magnitude"
# The curve with the specified name.
curve = chart.GetCurve(curve_name)
```

### Remarks

This method searches for and returns the curve with the given name from the chart. If no curve with the specified name is found, it returns `null`.
