# Method AddCurves
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_AddCurves_System_String_VM_Models_OutputReader_PlotParameters_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_AddCurves_System_String_VM_Models_OutputReader_PlotParameters_"></a> AddCurves\(string, PlotParameters\)

Adds curves to the chart by reading data from the specified file path and using [`PlotParameters`](VM.Models.OutputReader.PlotParameters.md). For details about preparing target values, see [Getting Started](../document/operation-api/getting-started/getting_started_operation_api_using_py.md#how-to-input-the-value-of-the-target-into-the-function-parameter).

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
```

### Remarks

The method reads data from the specified file path and adds the resulting curves to the chart using the provided plot parameters. An empty array is returned when no curves are added.
