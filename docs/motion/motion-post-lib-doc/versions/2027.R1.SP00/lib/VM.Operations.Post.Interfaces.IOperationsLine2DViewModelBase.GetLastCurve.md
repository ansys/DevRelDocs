# Method GetLastCurve
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetLastCurve"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetLastCurve"></a> GetLastCurve\(\)

Gets the most recently added curve from the chart view.

```csharp
IOperationsLineDataSeriesViewModelBase GetLastCurve()
```

### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

Most recently added [`IOperationsLineDataSeriesViewModelBase`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md), or `null` if no curves are present.

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

# Get the last curve.
curve = chart.GetLastCurve()
```

### Remarks

This method retrieves the curve that was added last to the chart view.
