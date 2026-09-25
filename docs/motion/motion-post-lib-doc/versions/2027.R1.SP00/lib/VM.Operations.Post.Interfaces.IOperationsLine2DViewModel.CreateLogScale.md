# Method CreateLogScale
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateLogScale_System_Collections_Generic_IEnumerable_System_String__System_Double_System_Double_System_Boolean_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateLogScale_System_Collections_Generic_IEnumerable_System_String__System_Double_System_Double_System_Boolean_"></a> CreateLogScale\(IEnumerable<string\>, double, double, bool\)

Applies a logarithmic scale to curve data as part of the chart tab's Transform functionality.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateLogScale(IEnumerable<string> lstSeriesName, double coefficient, double baseValue, bool decibel)
```

### Parameters

`lstSeriesName` IEnumerable<string\>

The list of curve names to perform the operation on.

`coefficient` double

The value of the coefficient.

`baseValue` double

The value of the base for the logarithmic scale.

`decibel` bool

Indicates whether to apply the decibel scale (20 * Log10(Y)) to the curve data.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with logarithmic scaling applied.

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

# Create the log-scale curve.
coefficient = 10.0
base_value = 10.0
decibel = False
chart.CreateLogScale(series_names, coefficient, base_value, decibel)
```

### Remarks

This function performs a logarithmic transformation on each curve specified in <code class="paramref">lstSeriesName</code> using the specified coefficient,
base value, and whether to use the decibel scale.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateLogScale_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__System_Double_System_Double_System_Boolean_"></a> CreateLogScale\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, double, double, bool\)

Applies a logarithmic scale to curve data as part of the chart tab's Transform functionality.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateLogScale(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, double coefficient, double baseValue, bool decibel)
```

### Parameters

`seriesViewModels` IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

Curves used as operation inputs.

`coefficient` double

The value of the coefficient.

`baseValue` double

The value of the base for the logarithmic scale.

`decibel` bool

Indicates whether to apply the decibel scale (20 * Log10(Y)) to the curve data.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with logarithmic scaling applied.

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

# Create the log-scale curve.
coefficient = 10.0
base_value = 10.0
decibel = False
chart.CreateLogScale(curves, coefficient, base_value, decibel)
```

### Remarks

This function performs a logarithmic transformation on each curve specified in <code class="paramref">seriesViewModels</code> using the specified coefficient,
base value, and whether to use the decibel scale.
