# Method CreateLineDataSeries
<a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_CreateLineDataSeries_System_String_System_String_System_String_System_String_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_CreateLineDataSeries_System_String_System_String_System_String_System_String_System_String_"></a> CreateLineDataSeries\(string, string, string, string, string\)

Creates [`IOperationsLineDataSeriesAxisViewModel`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesAxisViewModel.md) from a result file and selected result paths.

```csharp
IOperationsLineDataSeriesAxisViewModel CreateLineDataSeries(string filepath, string fullTarget, string characteristic, string component, string csys)
```

### Parameters

`filepath` string

Path to the result file containing the target data.

`fullTarget` string

Full name of the target entity in the result.

`characteristic` string

Characteristic selected for the axis data.

`component` string

Component selected for the characteristic.

`csys` string

Full name of the coordinate system used for the axis data.

### Returns

 [IOperationsLineDataSeriesAxisViewModel](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesAxisViewModel.md)

Created [`IOperationsLineDataSeriesAxisViewModel`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesAxisViewModel.md) containing the selected source metadata.

### Examples

```python
# Get the page and create a chart to hold the curve.
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "Chart"
chart = page.CreateChart(chart_name)

# Add a curve to the chart from the result file.
curve_paths = List[str]()
curve_path = "Displacement/Magnitude"
curve_paths.Add(curve_path)
target_name = "FEBody_01"
parameters = PlotParameters()
parameters.Paths = curve_paths
parameters.Target = target_name
# RESULT_FILE_PATH : .dfr result file path
curves = chart.AddCurves(RESULT_FILE_PATH, parameters)

# Create axis data for the curve from the selected result target.
full_target = "Crank"
characteristic = "Displacement"
component = "Y"
coordinate_system = "Inertia"
line_data_series = curves[0].CreateLineDataSeries(RESULT_FILE_PATH, full_target, characteristic, component, coordinate_system)
```

### Remarks

The returned axis data can be assigned to [`SourceX`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.SourceX.md) or [`SourceY`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.SourceY.md).

## <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_CreateLineDataSeries_System_String_System_String_System_String_System_String_System_String_System_String_System_String_"></a> CreateLineDataSeries\(string, string, string, string, string, string, string\)

Creates source-axis data through an obsolete overload with separate parent and child target names.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged.", true)]
IOperationsLineDataSeriesAxisViewModel CreateLineDataSeries(string filepath, string parent, string fullTarget, string subTarget, string characteristic, string component, string csys)
```

### Parameters

`filepath` string

The path of the result to access.

`parent` string

The parent entity. If the entity does not have a parent, it should be `Empty`.

`fullTarget` string

The name of the target entity.

`subTarget` string

The name of the child item such as node, element, or marker. If there is no child item, it should be `Empty`.

`characteristic` string

The name of the characteristic.

`component` string

The name of the component.

`csys` string

The name of the coordinate system.

### Returns

 [IOperationsLineDataSeriesAxisViewModel](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesAxisViewModel.md)

Created [`IOperationsLineDataSeriesAxisViewModel`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesAxisViewModel.md) containing the axis information for the curve.

### Remarks

This method is obsolete. Use `CreateLineDataSeries(string, string, string, string, string)` instead.
