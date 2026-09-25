# Method Remove
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_Remove_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_Remove_System_String_"></a> Remove\(string\)

Removes a curve from the chart by its id.

```csharp
void Remove(string id)
```

### Parameters

`id` string

The id of the curve to be removed.

### Examples

```python
# Get the result document.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)

# Create the chart view.
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "ChartByID"
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

# Remove the curve by ID.
curve_id = curves[0].ID
chart.Remove(curve_id)
```

### Remarks

This method deletes the curve with the specified id from the chart. If no curve with the given id exists, no action is taken.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_Remove_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_"></a> Remove\(IOperationsLineDataSeriesViewModelBase\)

Removes a curve from the chart by its curve object.

```csharp
void Remove(IOperationsLineDataSeriesViewModelBase curve)
```

### Parameters

`curve` [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

Curve object to remove from the chart.

### Examples

```python
# Get the result document.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)

# Create the chart view.
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "ChartByCurve"
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

# Remove the curve.
curve = curves[0]
chart.Remove(curve)
```

### Remarks

This method deletes the specified curve from the chart. If the provided object does not identify a curve in the chart, no action is taken.
