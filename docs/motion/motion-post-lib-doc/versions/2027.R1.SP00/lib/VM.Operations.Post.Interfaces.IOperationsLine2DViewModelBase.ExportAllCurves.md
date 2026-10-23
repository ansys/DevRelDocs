# Method ExportAllCurves
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ExportAllCurves_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ExportAllCurves_System_String_"></a> ExportAllCurves\(string\)

Exports all curves contained in the chart to the specified file path without displaying a file save dialog.

For a complete operations, see [Operation API Example - Export All Curves](../document/operation-api/example/example_export_for_operation_api.md#export-all-curves).

The column separator is chosen from the file extension of <code class="paramref">filepath</code>, so the created file takes one of the following forms.

A `.csv` path is written as a comma-separated table.

```text
Time(sec),Curve1:Crank/Displacement/Magnitude(mm)
0.000000000000e+000,2.163136200665e+001
2.100000000000e-003,2.163136200665e+001
...
```

The first row is a header that starts with the time-axis column and then has one column per exported curve.

The time-axis column is named after the X-axis title, such as `Time(sec)`.

Each curve column is named after that curve's [`SeriesName`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.SeriesName.md). A curve's default `SeriesName` combines its creation-order label, its target and characteristic path, and its unit, such as `Curve1:Crank/Displacement/Magnitude(mm)`.

Each later row holds one sample. The row starts with the time value and then has one value per curve, in the same column order.

Every numeric value is written in exponential notation with 12 fractional digits regardless of the file extension.

A `.txt` path is written as a tab-separated table.

```text
Time(sec)	Curve1:Crank/Displacement/Magnitude(mm)
0.000000000000e+000	2.163136200665e+001
2.100000000000e-003	2.163136200665e+001
...
```

The columns, naming, and numeric format are identical to the `.csv` form, and only the separator differs, using a tab character between columns.

```csharp
void ExportAllCurves(string filepath)
```

### Parameters

`filepath` string

The file path where the curves will be saved. A `.csv` path writes a comma-separated file, and a `.txt` path writes a tab-separated file.

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

# Export all curves to a file.
# PATH : path to the folder where exported files are written
# CURVE_EXPORT_FILENAME : output filename for exported curve data
output_path = Path.Combine(PATH, CURVE_EXPORT_FILENAME)
chart.ExportAllCurves(output_path)
```

### Remarks

This method exports all curves contained in the chart without displaying a file save dialog. 
It accepts a file path as a parameter and saves the curves directly to that location. 
This method is recommended for use with the OperationAPI, especially for repetitive tasks or scenarios 
requiring automation.

<a href="/lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.ExportAllCurves.md" download="VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.ExportAllCurves.md">Download this page as Markdown</a>
