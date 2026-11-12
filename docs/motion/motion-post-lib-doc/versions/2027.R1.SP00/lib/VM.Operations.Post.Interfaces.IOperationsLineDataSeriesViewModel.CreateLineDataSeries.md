# Method CreateLineDataSeries
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.CreateLineDataSeries.md" download="VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.CreateLineDataSeries.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
page = application_handler.GetActivePage()
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart = page.CreateChart(chart_name)

# Add a curve to the chart from the result file.
# The characteristic/component paths of the curves to add, in "Characteristic/Component" format.
curve_paths = List[str]()
# The characteristic/component path of the curve to add, in "Characteristic/Component" format.
curve_path = "Displacement/Magnitude"
curve_paths.Add(curve_path)
# The name of the target entity.
entity_name = "Crank"
# The parameters that specify the target and curve paths of the plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
parameters.Target = entity_name
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The curves added to the chart view.
curves = chart.AddCurves(RESULT_FILE_PATH, parameters)

# Create axis data for the curve from the selected result target.
# The name of the characteristic.
characteristic_name = "Displacement"
# The name of the component.
component_name = "Y"
# The name of the new coordinate system.
coordinate_system_name = "Inertia"
# The line data series created from the result file.
line_data_series = curves[0].CreateLineDataSeries(RESULT_FILE_PATH, entity_name, characteristic_name, component_name, coordinate_system_name)
```

### Remarks

The returned axis data can be assigned to [`SourceX`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.SourceX.md) or [`SourceY`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.SourceY.md).

## <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel_CreateLineDataSeries_System_String_System_String_System_String_System_String_System_String_System_String_System_String_"></a> CreateLineDataSeries\(string, string, string, string, string, string, string\)

Creates source-axis data through an obsolete overload with separate parent and child target names.

```csharp
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
