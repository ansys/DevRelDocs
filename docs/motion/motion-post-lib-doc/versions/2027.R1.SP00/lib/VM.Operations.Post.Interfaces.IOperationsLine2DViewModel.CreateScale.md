# Method CreateScale
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateScale_System_Collections_Generic_IEnumerable_System_String__System_Double_System_Double_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateScale_System_Collections_Generic_IEnumerable_System_String__System_Double_System_Double_"></a> CreateScale\(IEnumerable<string\>, double, double\)

Scales curve data by the specified scale values as part of the chart tab's Transform functionality.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateScale(IEnumerable<string> lstSeriesName, double scaleX, double scaleY)
```

### Parameters

`lstSeriesName` IEnumerable<string\>

The list of curve names to perform the operation on.

`scaleX` double

The value to scale for the X-axis.

`scaleY` double

The value to scale for the Y-axis.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with scaled values.

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

# Create the scaled curve.
scale_x = 2.0
scale_y = 2.0
chart.CreateScale(series_names, scale_x, scale_y)
```

### Remarks

This function scales each curve specified in <code class="paramref">lstSeriesName</code> by multiplying the X and Y values
of each point in the curve by the specified scale values.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateScale_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__System_Double_System_Double_"></a> CreateScale\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, double, double\)

Scales curve data by the specified scale values as part of the chart tab's Transform functionality.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateScale(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, double scaleX, double scaleY)
```

### Parameters

`seriesViewModels` IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

Curves used as operation inputs.

`scaleX` double

The value to scale for the X-axis.

`scaleY` double

The value to scale for the Y-axis.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with scaled values.

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

# Create the scaled curve.
scale_x = 2.0
scale_y = 2.0
chart.CreateScale(curves, scale_x, scale_y)
```

### Remarks

This function scales each curve specified in <code class="paramref">seriesViewModels</code> by multiplying the X and Y values
of each point in the curve by the specified scale values.
