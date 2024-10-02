#  Interface IOperationsHeatMapSTFTDataViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

The IOperationsHeatMapSTFTDataViewModel interface defines the structure and functionalities for handling heat map data specifically for Short-Time Fourier Transform (STFT).

```csharp
public interface IOperationsHeatMapSTFTDataViewModel
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_End"></a> End

Gets or sets the end time for using FFT (Fast Fourier Transform) on the target data series.

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
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
data = HitMapSTFTDataViewModel();
data.SamplingFrequency = 100;
data.TimeSlice = 0.05;
data.Overlap = 50;
data.SelectedPoints = 16384;
data.Start = 0;
data.End = 1.000000000001;
data.ReferenceValue = 1E-05;
data.ScaleFactor = 1.0;
data.SelectedScaleType = STFTScaleType.Original;
stftviews = chart.CreateSTFT(data, series);
stftviews[0].STFT2DViewModel.End = 0.9;</code></pre>

#### Remarks

This property allows you to set the end time for applying FFT on the target data series.
In the UI, this property is represented under the "Source" category with the property name "End".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_LegendColorType"></a> LegendColorType

Gets or sets the color scheme of the legend.

```csharp
ColorSchemeType LegendColorType { get; set; }
```

#### Property Value

 ColorSchemeType

#### Examples

The following example demonstrates how to use the <code>LegendColorType</code> property:
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
data = HitMapSTFTDataViewModel();
data.SamplingFrequency = 100;
data.TimeSlice = 0.05;
data.Overlap = 50;
data.SelectedPoints = 16384;
data.Start = 0;
data.End = 1.000000000001;
data.ReferenceValue = 1E-05;
data.ScaleFactor = 1.0;
data.SelectedScaleType = STFTScaleType.Original;
stftviews = chart.CreateSTFT(data, series);
stftviews[0].STFT2DViewModel.LegendColorType = ColorSchemeType.NORMAL;</code></pre>

#### Remarks

This property allows you to set the color scheme of the legend.
The available color schemes are:
<ul><li><xref href="VM.Models.Post.ColorSchemeType.NORMAL" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.NORMAL_INVERTED" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.BLACK_TO_WHITE" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.WHITE_TO_BLACK" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.GREEN_TO_BROWN" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.WHITE_TO_BROWN" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.METAL_CASTING" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.THERMAL_1" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.THERMAL_2" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.THERMAL_3" data-throw-if-not-resolved="false"></xref></li></ul>
In the UI, this property is represented under the "Legend" category with the property name "Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_Overlap"></a> Overlap

Gets or sets the percentage value for setting overlapped intervals.

```csharp
double Overlap { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>Overlap</code> property:
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
data = HitMapSTFTDataViewModel();
data.SamplingFrequency = 100;
data.TimeSlice = 0.05;
data.Overlap = 50;
data.SelectedPoints = 16384;
data.Start = 0;
data.End = 1.000000000001;
data.ReferenceValue = 1E-05;
data.ScaleFactor = 1.0;
data.SelectedScaleType = STFTScaleType.Original;
stftviews = chart.CreateSTFT(data, series);
stftviews[0].STFT2DViewModel.Overlap = 100;</code></pre>

#### Remarks

This property allows you to set the percentage value for overlapped intervals.
In the UI, this property is represented under the "Source" category with the property name "Overlap".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_ReferenceValue"></a> ReferenceValue

Gets or sets the reference value for decibel scaling.

```csharp
double ReferenceValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>ReferenceValue</code> property:
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
data = HitMapSTFTDataViewModel();
data.SamplingFrequency = 100;
data.TimeSlice = 0.05;
data.Overlap = 50;
data.SelectedPoints = 16384;
data.Start = 0;
data.End = 1.000000000001;
data.ReferenceValue = 1E-05;
data.ScaleFactor = 1.0;
data.SelectedScaleType = STFTScaleType.Original;
stftviews = chart.CreateSTFT(data, series);
stftviews[0].STFT2DViewModel.ReferenceValue = 1E-05;</code></pre>

#### Remarks

This property allows you to set the reference value for decibel scaling. It is applicable only when the <xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.SelectedScaleType" data-throw-if-not-resolved="false"></xref> property is set to Decibel.
In the UI, this property is represented under the "Source" category with the property name "RefVal".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_SamplingFrequency"></a> SamplingFrequency

Gets or sets the sampling frequency, which is the number of intervals for dividing the Y direction grids on a color map.

```csharp
int SamplingFrequency { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

The following example demonstrates how to use the <code>SamplingFrequency</code> property:
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
data = HitMapSTFTDataViewModel();
data.SamplingFrequency = 100;
data.TimeSlice = 0.05;
data.Overlap = 50;
data.SelectedPoints = 16384;
data.Start = 0;
data.End = 1.000000000001;
data.ReferenceValue = 1E-05;
data.ScaleFactor = 1.0;
data.SelectedScaleType = STFTScaleType.Original;
stftviews = chart.CreateSTFT(data, series);
stftviews[0].STFT2DViewModel.SamplingFrequency = 100;</code></pre>

#### Remarks

This property allows you to set the number of intervals for dividing the Y direction grids on a color map.
In the UI, this property is represented under the "Source" category with the property name "Sampling Frequency".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_ScaleFactor"></a> ScaleFactor

Gets or sets the scale factor for transforming from the time domain to another domain.

```csharp
double ScaleFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>ScaleFactor</code> property:
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
data = HitMapSTFTDataViewModel();
data.SamplingFrequency = 100;
data.TimeSlice = 0.05;
data.Overlap = 50;
data.SelectedPoints = 16384;
data.Start = 0;
data.End = 1.000000000001;
data.ReferenceValue = 1E-05;
data.ScaleFactor = 1.0;
data.SelectedScaleType = STFTScaleType.Original;
stftviews = chart.CreateSTFT(data, series);
stftviews[0].STFT2DViewModel.ScaleFactor = 2.0;</code></pre>

#### Remarks

This property allows you to set the scale factor for transforming data from the time domain to another domain.
In the UI, this property is represented under the "Source" category with the property name "Scale Factor".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_SelectedPoints"></a> SelectedPoints

Gets or sets the number of data points for FFT (Fast Fourier Transform).

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
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
data = HitMapSTFTDataViewModel();
data.SamplingFrequency = 100;
data.TimeSlice = 0.05;
data.Overlap = 50;
data.SelectedPoints = 16384;
data.Start = 0;
data.End = 1.000000000001;
data.ReferenceValue = 1E-05;
data.ScaleFactor = 1.0;
data.SelectedScaleType = STFTScaleType.Original;
stftviews = chart.CreateSTFT(data, series);
stftviews[0].STFT2DViewModel.SelectedPoints = 16384;</code></pre>

#### Remarks

This property allows you to set the number of data points to be used for the FFT.
In the UI, this property is represented under the "Source" category with the property name "nFFT".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_SelectedScaleType"></a> SelectedScaleType

Gets or sets the scale type for the Short-Time Fourier Transform (STFT).

```csharp
STFTScaleType SelectedScaleType { get; set; }
```

#### Property Value

 STFTScaleType

#### Examples

The following example demonstrates how to use the <code>SelectedScaleType</code> property:
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
data = HitMapSTFTDataViewModel();
data.SamplingFrequency = 100;
data.TimeSlice = 0.05;
data.Overlap = 50;
data.SelectedPoints = 16384;
data.Start = 0;
data.End = 1.000000000001;
data.ReferenceValue = 1E-05;
data.ScaleFactor = 1.0;
data.SelectedScaleType = STFTScaleType.Original;
stftviews = chart.CreateSTFT(data, series);
stftviews[0].STFT2DViewModel.SelectedScaleType = STFTScaleType.Decibel;</code></pre>

#### Remarks

This property allows you to set the scale type for the STFT.
The supported types are:
<ul><li><xref href="VM.Models.Post.STFTScaleType.Original" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.STFTScaleType.Decibel" data-throw-if-not-resolved="false"></xref></li></ul>
In the UI, this property is represented under the "Source" category with the property name "Scale".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_Start"></a> Start

Gets or sets the start time for using FFT (Fast Fourier Transform) on the target data series.

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
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
data = HitMapSTFTDataViewModel();
data.SamplingFrequency = 100;
data.TimeSlice = 0.05;
data.Overlap = 50;
data.SelectedPoints = 16384;
data.Start = 0;
data.End = 1.000000000001;
data.ReferenceValue = 1E-05;
data.ScaleFactor = 1.0;
data.SelectedScaleType = STFTScaleType.Original;
stftviews = chart.CreateSTFT(data, series);
stftviews[0].STFT2DViewModel.Start = 0.1;</code></pre>

#### Remarks

This property allows you to set the start time for applying FFT on the target data series.
In the UI, this property is represented under the "Source" category with the property name "Start".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_TimeSlice"></a> TimeSlice

Gets or sets the number of intervals for dividing the X direction grids on a color map.

```csharp
double TimeSlice { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>TimeSlice</code> property:
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
data = HitMapSTFTDataViewModel();
data.SamplingFrequency = 100;
data.TimeSlice = 0.05;
data.Overlap = 50;
data.SelectedPoints = 16384;
data.Start = 0;
data.End = 1.000000000001;
data.ReferenceValue = 1E-05;
data.ScaleFactor = 1.0;
data.SelectedScaleType = STFTScaleType.Original;
stftviews = chart.CreateSTFT(data, series);
stftviews[0].STFT2DViewModel.TimeSlice = 0.01;</code></pre>

#### Remarks

This property allows you to set the number of intervals for dividing the X direction grids on a color map.
In the UI, this property is represented under the "Source" category with the property name "Time Slice".

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_ExportOrderTrackingCurve_System_String_"></a> ExportOrderTrackingCurve\(string\)

Exports a curve to order tracking by creating a new chart and adding the exported curve to it.

```csharp
void ExportOrderTrackingCurve(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the curve to be exported.

#### Examples

The following example demonstrates how to use the <code>ExportOrderTrackingCurve</code> method:
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
data = HitMapSTFTDataViewModel();
data.SamplingFrequency = 100;
data.TimeSlice = 0.05;
data.Overlap = 50;
data.SelectedPoints = 16384;
data.Start = 0;
data.End = 1.000000000001;
data.ReferenceValue = 1E-05;
data.ScaleFactor = 1.0;
data.SelectedScaleType = STFTScaleType.Original;
stftviews = chart.CreateSTFT(data, series);
stftviews[0].STFT2DViewModel.ExportOrderTrackingCurve("curve");</code></pre>

#### Remarks

This method exports a specified curve to order tracking by creating a new chart and adding the exported curve to it.

