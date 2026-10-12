# Method AddCurves
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
```

### Remarks

The method reads data from the specified file path and adds the resulting curves to the chart using the provided plot parameters. An empty array is returned when no curves are added.
