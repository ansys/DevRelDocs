# Method GetCurveNameList
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurveNameList"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurveNameList"></a> GetCurveNameList\(\)

Gets a list of names of all curves in the chart view.

```csharp
IEnumerable<string> GetCurveNameList()
```

### Returns

 IEnumerable<string\>

A collection of the names of all curves currently displayed in the chart view.

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
chart.AddCurves(RESULT_FILE_PATH, parameters)

# Get the curve name list.
name_list = chart.GetCurveNameList()
```

### Remarks

This method retrieves the names of all the curves that are currently displayed in the chart view.
