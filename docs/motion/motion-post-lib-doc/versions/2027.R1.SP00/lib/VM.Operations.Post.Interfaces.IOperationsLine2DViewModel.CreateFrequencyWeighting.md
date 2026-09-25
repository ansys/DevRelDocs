# Method CreateFrequencyWeighting
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFrequencyWeighting_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_WeightingType_VM_Models_Post_FrequencyAxisType_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFrequencyWeighting_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_WeightingType_VM_Models_Post_FrequencyAxisType_"></a> CreateFrequencyWeighting\(IEnumerable<string\>, WeightingType, FrequencyAxisType\)

Applies frequency weighting to curve data as part of the chart tab's Signal Processing functionality.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFrequencyWeighting(IEnumerable<string> lstSeriesName, WeightingType weightingType, FrequencyAxisType axisType)
```

### Parameters

`lstSeriesName` IEnumerable<string\>

The list of curve names to perform the operation on.

`weightingType` [WeightingType](VM.Models.Post.WeightingType.md)

The type of weighting to apply.

`axisType` [FrequencyAxisType](VM.Models.Post.FrequencyAxisType.md)

Used to set the base of the log scale.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with frequency weighting applied.

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

# Create the frequency-weighted curve.
weighting_type = WeightingType.AWeighting
frequency_axis_type = FrequencyAxisType.X
chart.CreateFrequencyWeighting(series_names, weighting_type, frequency_axis_type)
```

### Remarks

This function performs frequency weighting on each curve specified in <code class="paramref">lstSeriesName</code> using the specified weighting type
and axis type. A-weighting is the most commonly used to measure the sound pressure level, while B-weighting and C-weighting are alternative weighting functions.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFrequencyWeighting_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__VM_Models_Post_WeightingType_VM_Models_Post_FrequencyAxisType_"></a> CreateFrequencyWeighting\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, WeightingType, FrequencyAxisType\)

Applies frequency weighting to curve data as part of the chart tab's Signal Processing functionality.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFrequencyWeighting(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, WeightingType weightingType, FrequencyAxisType axisType)
```

### Parameters

`seriesViewModels` IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

Curves used as operation inputs.

`weightingType` [WeightingType](VM.Models.Post.WeightingType.md)

The type of weighting to apply.

`axisType` [FrequencyAxisType](VM.Models.Post.FrequencyAxisType.md)

Used to set the base of the log scale.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with frequency weighting applied.

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

# Create the frequency-weighted curve.
weighting_type = WeightingType.AWeighting
frequency_axis_type = FrequencyAxisType.X
chart.CreateFrequencyWeighting(curves, weighting_type, frequency_axis_type)
```

### Remarks

This function performs frequency weighting on each curve specified in <code class="paramref">seriesViewModels</code> using the specified weighting type
and axis type. A-weighting is the most commonly used to measure the sound pressure level, while B-weighting and C-weighting are alternative weighting functions.
