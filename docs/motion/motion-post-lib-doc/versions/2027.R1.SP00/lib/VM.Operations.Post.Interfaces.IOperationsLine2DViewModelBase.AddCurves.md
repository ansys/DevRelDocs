# Method AddCurves
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.AddCurves.md" download="VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.AddCurves.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_AddCurves_System_String_VM_Models_OutputReader_PlotParameters_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_AddCurves_System_String_VM_Models_OutputReader_PlotParameters_"></a> AddCurves\(string, PlotParameters\)

Adds curves to the chart by reading data from the specified file path and using [`PlotParameters`](VM.Models.OutputReader.PlotParameters.md). For details about preparing target values, see [Operation API Example - Creating Curves](../document/operation-api/example/example_chart_for_operation_api.md#creating-curves).

For a complete operations, see [Operation API Example - Creating Curves](../document/operation-api/example/example_chart_for_operation_api.md#creating-curves).

```csharp
IOperationsLineDataSeriesViewModelBase[] AddCurves(string filepath, PlotParameters parameters)
```

### Parameters

`filepath` string

The path to the file containing the curve data.

`parameters` [PlotParameters](VM.Models.OutputReader.PlotParameters.md)

Plot parameters defining the target entity, data paths, coordinate system, and data type used to add the curves.

### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\[\]

An array containing the added [`IOperationsLineDataSeriesViewModelBase`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md) objects in the order created.

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
```

### Remarks

The method reads data from the specified file path and adds the resulting curves to the chart using the provided plot parameters. An empty array is returned when no curves are added.
