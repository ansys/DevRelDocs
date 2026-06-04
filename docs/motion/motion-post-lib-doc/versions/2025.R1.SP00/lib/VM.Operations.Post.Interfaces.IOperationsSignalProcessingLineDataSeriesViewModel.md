#  Interface IOperationsSignalProcessingLineDataSeriesViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the signalprocessing line data series.

```csharp
public interface IOperationsSignalProcessingLineDataSeriesViewModel
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_CutOffFrequency"></a> CutOffFrequency

Gets or sets the value of the cut-off frequency.

```csharp
double CutOffFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>CutOffFrequency</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
signalprocessingcurves = chart.CreateFiltering(series, FilteringType.LowPass, 2, 100, 100);
signalprocessingcurves.CutOffFrequency = 100;</code></pre>

#### Remarks

Use this property to specify or retrieve the value of the cut-off frequency.

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_FilteringType"></a> FilteringType

Gets or sets the filtering type of signal processing.

```csharp
FilteringType FilteringType { get; set; }
```

#### Property Value

 FilteringType

#### Examples

The following example demonstrates how to use the <code>FilteringType</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
signalprocessingcurves = chart.CreateFiltering(series, FilteringType.LowPass, 2, 100, 100);
signalprocessingcurves.FilteringType = FilteringType.HighPass;</code></pre>

#### Remarks

Use this property to specify or retrieve the filtering type of signal processing.
The supported types are:
<ul><li><xref href="VM.Models.Post.FilteringType.LowPass" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FilteringType.HighPass" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FilteringType.BandPass" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FilteringType.BandStop" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_FrequencyAxisType"></a> FrequencyAxisType

Gets or sets the type of frequency axis.

```csharp
FrequencyAxisType FrequencyAxisType { get; set; }
```

#### Property Value

 FrequencyAxisType

#### Examples

The following example demonstrates how to use the <code>FrequencyAxisType</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
signalprocessingcurves = chart.CreateFrequencyWeighting(series, WeightingType.AWeighting, FrequencyAxisType.X);
signalprocessingcurves.FrequencyAxisType = FrequencyAxisType.X;</code></pre>

#### Remarks

Use this property to specify or retrieve the type of frequency axis.
The supported types are:
<ul><li><xref href="VM.Models.Post.FrequencyAxisType.X" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FrequencyAxisType.Y" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_HighCutOffFrequency"></a> HighCutOffFrequency

Gets or sets the value of the high cut-off frequency.

```csharp
double HighCutOffFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>HighCutOffFrequency</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
signalprocessingcurves = chart.CreateFiltering(series, FilteringType.LowPass, 2, 100, 100);
signalprocessingcurves.HighCutOffFrequency = 200;</code></pre>

#### Remarks

Use this property to specify or retrieve the value of the high cut-off frequency.

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_LowCutOffFrequency"></a> LowCutOffFrequency

Gets or sets the value of the low cut-off frequency.

```csharp
double LowCutOffFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>LowCutOffFrequency</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
signalprocessingcurves = chart.CreateFiltering(series, FilteringType.LowPass, 2, 100, 100);
signalprocessingcurves.LowCutOffFrequency = 100;</code></pre>

#### Remarks

Use this property to specify or retrieve the value of the low cut-off frequency.

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_Order"></a> Order

Gets or sets the order of the filter, which represents the points of the window.

```csharp
int Order { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

The following example demonstrates how to use the <code>Order</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
signalprocessingcurves = chart.CreateFiltering(series, FilteringType.LowPass, 2, 100, 100);
signalprocessingcurves.Order = 5;</code></pre>

#### Remarks

Use this property to specify or retrieve the order of the filter, which determines the points of the window.

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_PointsOfWindow"></a> PointsOfWindow

Gets or sets the points of the window.

```csharp
int PointsOfWindow { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

The following example demonstrates how to use the <code>PointsOfWindow</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
signalprocessingcurves = chart.CreateFiltering(series, FilteringType.LowPass, 2, 100, 100);
signalprocessingcurves.PointsOfWindow = 256;</code></pre>

#### Remarks

Use this property to specify or retrieve the points of the window.

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_PolynomialOrder"></a> PolynomialOrder

Gets or sets the value of the polynomial order.

```csharp
int PolynomialOrder { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

The following example demonstrates how to use the <code>PolynomialOrder</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
signalprocessingcurves = chart.CreateFiltering(series, FilteringType.LowPass, 2, 100, 100);
signalprocessingcurves.PolynomialOrder = 3;</code></pre>

#### Remarks

Use this property to specify or retrieve the value of the polynomial order.

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_SignalProcessingType"></a> SignalProcessingType

Gets or sets the type of signal processing.

```csharp
SignalProcessingType SignalProcessingType { get; set; }
```

#### Property Value

 SignalProcessingType

#### Examples

The following example demonstrates how to use the <code>SignalProcessingType</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
signalprocessingcurves = chart.CreateFiltering(series, FilteringType.LowPass, 2, 100, 100);
signalprocessingcurves.SignalProcessingType = SignalProcessingType.Smoothing;</code></pre>

#### Remarks

Use this property to specify or retrieve the type of signal processing.
The supported types are:
<ul><li><xref href="VM.Models.Post.SignalProcessingType.Filtering" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SignalProcessingType.Smoothing" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SignalProcessingType.FrequencyWeighting" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_SmoothingType"></a> SmoothingType

Gets or sets the type of smoothing.

```csharp
SmoothingType SmoothingType { get; set; }
```

#### Property Value

 SmoothingType

#### Examples

The following example demonstrates how to use the <code>SmoothingType</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
signalprocessingcurves = chart.CreateSmoothing(curves, SmoothingType.MovingWindowAveraging, 8, 2);
signalprocessingcurves.SmoothingType = SmoothingType.SavitzkyGloay;</code></pre>

#### Remarks

Use this property to specify or retrieve the type of smoothing.
The supported types are:
<ul><li><xref href="VM.Models.Post.SmoothingType.MovingWindowAveraging" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SmoothingType.SavitzkyGloay" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_WeightingType"></a> WeightingType

Gets or sets the type of weighting.

```csharp
WeightingType WeightingType { get; set; }
```

#### Property Value

 WeightingType

#### Examples

The following example demonstrates how to use the <code>WeightingType</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
signalprocessingcurves = chart.CreateFrequencyWeighting(series, WeightingType.AWeighting, FrequencyAxisType.X);
signalprocessingcurves.WeightingType = WeightingType.CWeighting;</code></pre>

#### Remarks

Use this property to specify or retrieve the type of weighting.
The supported types are:
<ul><li><xref href="VM.Models.Post.WeightingType.AWeighting" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.WeightingType.BWeighting" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.WeightingType.CWeighting" data-throw-if-not-resolved="false"></xref></li></ul>

