# Method CreateAlign
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateAlign_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_AlignType_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateAlign_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_AlignType_"></a> CreateAlign\(IEnumerable<string\>, AlignType\)

Aligns curve data to zero or the first point of the target curve as part of the chart tab's Transform functionality.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateAlign(IEnumerable<string> lstSeriesName, AlignType alignType)
```

### Parameters

`lstSeriesName` IEnumerable<string\>

The list of curve names to perform the operation on.

`alignType` [AlignType](VM.Models.Post.AlignType.md)

The type of alignment to apply.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with aligned values.

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

# Select the source curves.
series_names = List[str]()
series_names.Add(curves[0].SeriesName)

# Create the aligned curve.
align_type = AlignType.Curve
chart.CreateAlign(series_names, align_type)
```

### Remarks

This function iterates over each curve specified in <code class="paramref">lstSeriesName</code> and aligns the Y values of each point.
The <code class="paramref">alignType</code> selects whether the curve is aligned to zero or to the first point of the target curve.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateAlign_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__VM_Models_Post_AlignType_"></a> CreateAlign\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, AlignType\)

Aligns curve data to zero or the first point of the target curve as part of the chart tab's Transform functionality.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateAlign(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, AlignType alignType)
```

### Parameters

`seriesViewModels` IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

Curves used as operation inputs.

`alignType` [AlignType](VM.Models.Post.AlignType.md)

The type of alignment to apply.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with aligned values.

### Examples

```python
# Get the result document.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)

# Create the chart view.
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "ChartSeries"
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

# Create the aligned curve.
align_type = AlignType.Curve
chart.CreateAlign(curves, align_type)
```

### Remarks

This function iterates over each curve in <code class="paramref">seriesViewModels</code> and aligns the Y values of each point.
The <code class="paramref">alignType</code> selects whether the curve is aligned to zero or to the first point of the target curve.
