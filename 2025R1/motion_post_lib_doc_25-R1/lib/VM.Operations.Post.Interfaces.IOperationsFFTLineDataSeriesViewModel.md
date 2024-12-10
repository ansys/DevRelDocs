#  Interface IOperationsFFTLineDataSeriesViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the fft line data series.

```csharp
public interface IOperationsFFTLineDataSeriesViewModel
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_End"></a> End

Gets or sets the end time for using FFT on the target data series.

```csharp
double End { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>End</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ()
curvePaths.Add(r'Displacement/Magnitude')
curvePaths.Add(r'Acceleration/Magnitude')
# Set a Curve Parameter
parameters = PlotParameters()
parameters.Paths = curvePaths
parameters.Target = "BD_001"
curves = chart.AddCurves(filepath, parameters)
fft = chart.CreateFFT(curves, FFTType.Magnitude, FFTWindowType.Rectangular, ScaleType.Original, 128, 0, 1.0);
fft.End = 1;</code></pre>

#### Remarks

Use this property to specify or retrieve the end time for performing FFT on the target data series.

### <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_FFTScaleType"></a> FFTScaleType

Gets or sets the scale type of FFT.

```csharp
ScaleType FFTScaleType { get; set; }
```

#### Property Value

 ScaleType

#### Examples

The following example demonstrates how to use the <code>FFTScaleType</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ()
curvePaths.Add(r'Displacement/Magnitude')
curvePaths.Add(r'Acceleration/Magnitude')
# Set a Curve Parameter
parameters = PlotParameters()
parameters.Paths = curvePaths
parameters.Target = "BD_001"
curves = chart.AddCurves(filepath, parameters)
fft = chart.CreateFFT(curves, FFTType.Magnitude, FFTWindowType.Rectangular, ScaleType.Original, 128, 0, 1.0);
fft.FFTScaleType = ScaleType.Decibel;</code></pre>

#### Remarks

Use this property to specify or retrieve the scale type for FFT.
The supported types are:
<ul><li><xref href="VM.Models.Post.ScaleType.Decibel" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ScaleType.Logarithm" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ScaleType.Original" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_FFTType"></a> FFTType

Gets or sets the type of FFT.

```csharp
FFTType FFTType { get; set; }
```

#### Property Value

 FFTType

#### Examples

The following example demonstrates how to use the <code>FFTType</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ()
curvePaths.Add(r'Displacement/Magnitude')
curvePaths.Add(r'Acceleration/Magnitude')
# Set a Curve Parameter
parameters = PlotParameters()
parameters.Paths = curvePaths
parameters.Target = "BD_001"
curves = chart.AddCurves(filepath, parameters)
fft = chart.CreateFFT(curves, FFTType.Magnitude, FFTWindowType.Rectangular, ScaleType.Original, 128, 0, 1.0);
fft.FFTType = FFTType.Phase;</code></pre>

#### Remarks

Use this property to specify or retrieve the type of FFT.
The supported types are:
<ul><li><xref href="VM.Models.Post.FFTType.Magnitude" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTType.Phase" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_FFTWindowType"></a> FFTWindowType

Gets or sets the window type of FFT.

```csharp
FFTWindowType FFTWindowType { get; set; }
```

#### Property Value

 FFTWindowType

#### Examples

The following example demonstrates how to use the <code>FFTWindowType</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ()
curvePaths.Add(r'Displacement/Magnitude')
curvePaths.Add(r'Acceleration/Magnitude')
# Set a Curve Parameter
parameters = PlotParameters()
parameters.Paths = curvePaths
parameters.Target = "BD_001"
curves = chart.AddCurves(filepath, parameters)
fft = chart.CreateFFT(curves, FFTType.Magnitude, FFTWindowType.Rectangular, ScaleType.Original, 128, 0, 1.0);
fft.FFTWindowType = FFTWindowType.Triangular;</code></pre>

#### Remarks

Use this property to specify or retrieve the window type for FFT.
The supported types are:
<ul><li><xref href="VM.Models.Post.FFTWindowType.Bartlett" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.BlackMan" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Hamming" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Hanning" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.None" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Rectangular" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Triangular" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Welch" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_SelectedPoints"></a> SelectedPoints

Gets or sets the number of data points for FFT.

```csharp
int SelectedPoints { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

The following example demonstrates how to use the <code>SelectedPoints</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ()
curvePaths.Add(r'Displacement/Magnitude')
curvePaths.Add(r'Acceleration/Magnitude')
# Set a Curve Parameter
parameters = PlotParameters()
parameters.Paths = curvePaths
parameters.Target = "BD_001"
curves = chart.AddCurves(filepath, parameters)
fft = chart.CreateFFT(curves, FFTType.Magnitude, FFTWindowType.Rectangular, ScaleType.Original, 128, 0, 1.0);
fft.SelectedPoints = 512;</code></pre>

#### Remarks

Use this property to specify or retrieve the number of data points to be used for FFT.

### <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_Start"></a> Start

Gets or sets the start time for using FFT on the target data series.

```csharp
double Start { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>Start</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ()
curvePaths.Add(r'Displacement/Magnitude')
curvePaths.Add(r'Acceleration/Magnitude')
# Set a Curve Parameter
parameters = PlotParameters()
parameters.Paths = curvePaths
parameters.Target = "BD_001"
curves = chart.AddCurves(filepath, parameters)
fft = chart.CreateFFT(curves, FFTType.Magnitude, FFTWindowType.Rectangular, ScaleType.Original, 128, 0, 1.0);
fft.Start = 0.01;</code></pre>

#### Remarks

Use this property to specify or retrieve the start time for performing FFT on the target data series.

