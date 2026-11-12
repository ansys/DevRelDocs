# Method CreateLogScale
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateLogScale.md" download="VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateLogScale.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# Create the chart view.
page = application_handler.GetActivePage()
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart = page.CreateChart(chart_name)

# Add curves to the chart.
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

# Select the source curves.
# The names of the curves to process.
series_names = List[str]()
series_names.Add(curves[0].SeriesName)

# Create the log-scale curve.
# The value of the coefficient.
coefficient = 10.0
# The value of the base.
base_value = 10.0
# True to take the decibel scale for the curves (20Log_10(Y)).
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
# Create the chart view.
page = application_handler.GetActivePage()
# The name of the new chart view.
chart_name = "ChartSeries"
# The chart view created on the page.
chart = page.CreateChart(chart_name)

# Add curves to the chart.
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

# Create the log-scale curve.
# The value of the coefficient.
coefficient = 10.0
# The value of the base.
base_value = 10.0
# True to take the decibel scale for the curves (20Log_10(Y)).
decibel = False
chart.CreateLogScale(curves, coefficient, base_value, decibel)
```

### Remarks

This function performs a logarithmic transformation on each curve specified in <code class="paramref">seriesViewModels</code> using the specified coefficient,
base value, and whether to use the decibel scale.
