# Method GetCurveByID
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurveByID_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurveByID_System_String_"></a> GetCurveByID\(string\)

Gets a curve from the chart by its ID.

```csharp
IOperationsLineDataSeriesViewModelBase GetCurveByID(string id)
```

### Parameters

`id` string

The ID of the curve to retrieve.

### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

Matching [`IOperationsLineDataSeriesViewModelBase`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md), or `null` if no such curve exists.

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

# Get the curve by ID.
curve_id = curves[0].ID
curve = chart.GetCurveByID(curve_id)
```

### Remarks

This method searches for and returns the curve with the given ID from the chart. If no curve with the specified ID is found, it returns `null`.
