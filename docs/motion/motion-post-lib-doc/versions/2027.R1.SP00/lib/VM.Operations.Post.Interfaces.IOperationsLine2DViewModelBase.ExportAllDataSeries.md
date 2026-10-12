# Method ExportAllDataSeries
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ExportAllDataSeries"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ExportAllDataSeries"></a> ExportAllDataSeries\(\)

Exports all curves included in the chart.

The created file uses the same text table format as [ExportAllCurves\(string\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.ExportAllCurves.md).

```csharp
void ExportAllDataSeries()
```

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
chart.AddCurves(RESULT_FILE_PATH, parameters)

# Export all data series.
chart.ExportAllDataSeries()
```

### Remarks

This method exports all curves contained in the chart. When used via the OperationAPI, a file dialog appears 
on the screen to specify the file save location. Therefore, it is not recommended for repetitive tasks or 
scenarios requiring automation. Instead, use the method `ExportAllCurves(string)`, 
which does not display a file save dialog.

> [!NOTE]
> Use `ExportAllCurves(string)` when the output path must be supplied programmatically.