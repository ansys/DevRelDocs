# Method CreateSimpleMath
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSimpleMath_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_SimpleMathType_System_Int32_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSimpleMath_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_SimpleMathType_System_Int32_"></a> CreateSimpleMath\(IEnumerable<string\>, SimpleMathType, int\)

Performs simple mathematical operations (+, -, *) on curve data as part of the chart tab's Simple Math functionality.

```csharp
IOperationsLineDataSeriesViewModelBase CreateSimpleMath(IEnumerable<string> lstSeriesName, SimpleMathType simpleMathType, int points)
```

### Parameters

`lstSeriesName` IEnumerable<string\>

The list of curve names to perform the operation on.

`simpleMathType` [SimpleMathType](VM.Models.Post.SimpleMathType.md)

The type of simple math operation to apply.

`points` int

The number of data points for interpolation.

### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

A single curve resulting from the mathematical operation.

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

# Create the simple-math curve.
simple_math_type = SimpleMathType.Add
points = 100
chart.CreateSimpleMath(series_names, simple_math_type, points)
```

### Remarks

This function performs the specified mathematical operation on each curve in <code class="paramref">lstSeriesName</code> and combines the results
into a single curve. The function supports addition, subtraction, and multiplication of the Y values of the data points in the curve.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSimpleMath_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__VM_Models_Post_SimpleMathType_System_Int32_"></a> CreateSimpleMath\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, SimpleMathType, int\)

Performs simple mathematical operations (+, -, *) on curve data as part of the chart tab's Simple Math functionality.

```csharp
IOperationsLineDataSeriesViewModelBase CreateSimpleMath(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, SimpleMathType simpleMathType, int points)
```

### Parameters

`seriesViewModels` IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

Curves used as operation inputs.

`simpleMathType` [SimpleMathType](VM.Models.Post.SimpleMathType.md)

The type of simple math operation to apply.

`points` int

The number of data points for interpolation.

### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

A single curve resulting from the mathematical operation.

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

# Create the simple-math curve.
simple_math_type = SimpleMathType.Add
points = 100
chart.CreateSimpleMath(curves, simple_math_type, points)
```

### Remarks

This function performs the specified mathematical operation on each curve in <code class="paramref">seriesViewModels</code> and combines the results
into a single curve. The function supports addition, subtraction, and multiplication of the Y values of the data points in the curve.
