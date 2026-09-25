# Method CreateDifferentiatedCurve
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateDifferentiatedCurve_System_Collections_Generic_IEnumerable_System_String__"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateDifferentiatedCurve_System_Collections_Generic_IEnumerable_System_String__"></a> CreateDifferentiatedCurve\(IEnumerable<string\>\)

Differentiates curve data as part of the chart tab's Calculus functionality.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateDifferentiatedCurve(IEnumerable<string> lstSeriesName)
```

### Parameters

`lstSeriesName` IEnumerable<string\>

The list of curve names to perform the differentiation on.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with differentiated values.

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

# Create the differentiated curve.
chart.CreateDifferentiatedCurve(series_names)
```

### Remarks

This function iterates over each curve specified in <code class="paramref">lstSeriesName</code> and applies differentiation to the Y values
of each point in the curve. The differentiation calculates the difference between consecutive points.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateDifferentiatedCurve_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__"></a> CreateDifferentiatedCurve\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>\)

Differentiates curve data as part of the chart tab's Calculus functionality.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateDifferentiatedCurve(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels)
```

### Parameters

`seriesViewModels` IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

Curves that are differentiated.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with differentiated values.

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

# Create the differentiated curve.
chart.CreateDifferentiatedCurve(curves)
```

### Remarks

This function iterates over each curve in <code class="paramref">seriesViewModels</code> and applies differentiation to the Y values
of each point in the curve. The differentiation calculates the difference between consecutive points.
