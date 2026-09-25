# Method ExportAllCurves
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ExportAllCurves_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ExportAllCurves_System_String_"></a> ExportAllCurves\(string\)

Exports all curves contained in the chart to the specified file path without displaying a file save dialog.

```csharp
void ExportAllCurves(string filepath)
```

### Parameters

`filepath` string

The file path where the curves will be saved.

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

# Export all curves to a file.
# PATH : path to the folder where exported files are written
# CURVE_EXPORT_FILENAME : output filename for exported curve data
output_path = os.path.join(PATH, CURVE_EXPORT_FILENAME)
chart.ExportAllCurves(output_path)
```

### Remarks

This method exports all curves contained in the chart without displaying a file save dialog. 
It accepts a file path as a parameter and saves the curves directly to that location. 
This method is recommended for use with the OperationAPI, especially for repetitive tasks or scenarios 
requiring automation.
