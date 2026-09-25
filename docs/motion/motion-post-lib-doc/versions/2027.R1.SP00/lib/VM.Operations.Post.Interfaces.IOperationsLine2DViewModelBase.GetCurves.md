# Method GetCurves
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurves"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurves"></a> GetCurves\(\)

Gets all the curves currently included in the chart view.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> GetCurves()
```

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of all the curves currently displayed in the chart view.

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

# Get all curves.
curves = chart.GetCurves()
```

### Remarks

This method retrieves all the curves that are currently displayed in the chart view.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurves_System_String_"></a> GetCurves\(string\)

Gets all curves from the chart view that contain the specified substring in their names.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> GetCurves(string name)
```

### Parameters

`name` string

A substring to search for within the curve names.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of all curves whose names contain the specified substring.

### Examples

```python
# Get the result document.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)

# Create the chart view.
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "ChartFiltered"
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

# Get the matching curves.
curve_name = "X"
curves = chart.GetCurves(curve_name)
```

### Remarks

This method searches for and returns all curves whose names contain the specified substring.

> [!NOTE]
> If no curve name contains the specified substring, an empty collection is returned.
