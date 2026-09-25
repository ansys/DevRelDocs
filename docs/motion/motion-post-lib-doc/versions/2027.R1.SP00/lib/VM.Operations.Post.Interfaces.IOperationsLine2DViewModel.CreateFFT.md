# Method CreateFFT
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFFT_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_FFTType_VM_Models_Post_FFTWindowType_VM_Models_Post_ScaleType_System_Int32_System_Double_System_Double_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFFT_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_FFTType_VM_Models_Post_FFTWindowType_VM_Models_Post_ScaleType_System_Int32_System_Double_System_Double_"></a> CreateFFT\(IEnumerable<string\>, FFTType, FFTWindowType, ScaleType, int, double, double\)

Applies FFT (Fast Fourier Transform) to curve data as part of the chart tab's functionality.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFFT(IEnumerable<string> lstSeriesName, FFTType fftType, FFTWindowType fftWindowType, ScaleType scaleType, int points, double start, double end)
```

### Parameters

`lstSeriesName` IEnumerable<string\>

The list of curve names to perform the operation on.

`fftType` [FFTType](VM.Models.Post.FFTType.md)

The type of FFT to apply.

`fftWindowType` [FFTWindowType](VM.Models.Post.FFTWindowType.md)

The window type to use for FFT.

`scaleType` [ScaleType](VM.Models.Post.ScaleType.md)

The scale type to apply.

`points` int

The number of data points for FFT.

`start` double

The start time for using FFT on target curves.

`end` double

The end time for using FFT on target curves.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with FFT applied.

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

# Create the FFT curve.
fft_type = FFTType.Magnitude
fft_window_type = FFTWindowType.Rectangular
scale_type = ScaleType.Original
points = 128
start = 0.0
end = 1.0
chart.CreateFFT(series_names, fft_type, fft_window_type, scale_type, points, start, end)
```

### Remarks

This function performs FFT on each curve specified in <code class="paramref">lstSeriesName</code> within the provided start and end time range,
using the specified FFT type, window type, scale type, and number of points.

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFFT_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__VM_Models_Post_FFTType_VM_Models_Post_FFTWindowType_VM_Models_Post_ScaleType_System_Int32_System_Double_System_Double_"></a> CreateFFT\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, FFTType, FFTWindowType, ScaleType, int, double, double\)

Applies FFT (Fast Fourier Transform) to curve data as part of the chart tab's functionality.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFFT(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, FFTType fftType, FFTWindowType fftWindowType, ScaleType scaleType, int points, double start, double end)
```

### Parameters

`seriesViewModels` IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

Curves used as operation inputs.

`fftType` [FFTType](VM.Models.Post.FFTType.md)

The type of FFT to apply.

`fftWindowType` [FFTWindowType](VM.Models.Post.FFTWindowType.md)

The window type to use for FFT.

`scaleType` [ScaleType](VM.Models.Post.ScaleType.md)

The scale type to apply.

`points` int

The number of data points for FFT.

`start` double

The start time for using FFT on target curves.

`end` double

The end time for using FFT on target curves.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of curves with FFT applied.

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

# Create the FFT curve.
fft_type = FFTType.Magnitude
fft_window_type = FFTWindowType.Rectangular
scale_type = ScaleType.Original
points = 128
start = 0.0
end = 1.0
chart.CreateFFT(curves, fft_type, fft_window_type, scale_type, points, start, end)
```

### Remarks

This function performs FFT on each curve specified in <code class="paramref">seriesViewModels</code> within the provided start and end time range,
using the specified FFT type, window type, scale type, and number of points.
