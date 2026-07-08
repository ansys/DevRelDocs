#  Interface IOperationsHeatMapBaseViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Base interface for managing operations related to the STFT (Short-Time Fourier Transform) view.

```csharp
public interface IOperationsHeatMapBaseViewModel
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_IsAutoRange"></a> IsAutoRange

Gets or sets a value indicating whether the Min and Max values of the legend are set automatically.

```csharp
bool IsAutoRange { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>IsAutoRange</code> property:
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
stftview[0].STFT2DViewModel.IsAutoRange = False;</code></pre>

#### Remarks

This flag determines whether the Min and Max values of the legend are set automatically or manually. 
If this property is set to <code>true</code>, the Min and Max values cannot be set manually.
In the UI, this property is represented under the "Legend" category with the property name "AutoRange".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_LegendFontColor"></a> LegendFontColor

Gets or sets the font color of the legend.

```csharp
Color LegendFontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>LegendFontColor</code> property:
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
stftviews[0].STFT2DViewModel.LegendFontColor = Colors.Red;</code></pre>

#### Remarks

This property allows you to set the font color of the legend.
In the UI, this property is represented under the "Legend" category with the property name "Font Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_LegendFontSize"></a> LegendFontSize

Gets or sets the font size of the legend.

```csharp
double LegendFontSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>LegendFontSize</code> property:
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
stftviews[0].STFT2DViewModel.LegendFontSize = 15;</code></pre>

#### Remarks

This property allows you to set the font size of the legend.
In the UI, this property is represented under the "Legend" category with the property name "Font Size".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_Max"></a> Max

Gets or sets the maximum value of the legend.

```csharp
double Max { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>Max</code> property:
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
stftviews[0].STFT2DViewModel.Max = 100;</code></pre>

#### Remarks

This property allows you to set the maximum value of the legend manually if <xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.IsAutoRange" data-throw-if-not-resolved="false"></xref> is <code>false</code>.
If <xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.IsAutoRange" data-throw-if-not-resolved="false"></xref> is <code>true</code>, the maximum value is determined automatically.
In the UI, this property is represented under the "Legend" category with the property name "Max".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_Min"></a> Min

Gets or sets the minimum value of the legend.

```csharp
double Min { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>Min</code> property:
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
stftviews[0].STFT2DViewModel.Min = 10;</code></pre>

#### Remarks

This property allows you to set the minimum value of the legend manually if <xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.IsAutoRange" data-throw-if-not-resolved="false"></xref> is <code>false</code>.
If <xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.IsAutoRange" data-throw-if-not-resolved="false"></xref> is <code>true</code>, the minimum value is determined automatically.
In the UI, this property is represented under the "Legend" category with the property name "Min".

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_ExportAllCurves_System_String_"></a> ExportAllCurves\(string\)

Exports all curves contained in the chart to the specified file path without displaying a file save dialog.

```csharp
void ExportAllCurves(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path where the curves will be saved.

#### Examples

The following example demonstrates how to use the <code>ExportAllCurves</code> method:
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
stftviews[0].STFT2DViewModel.ExportAllCurves(r"D:\allcurves.txt");</code></pre>

#### Remarks

This method exports all data series contained in the chart without displaying a file save dialog. 
It accepts a file path as a parameter and saves the curves directly to that location. 
This method is recommended for use with the OperationAPI, especially for repetitive tasks or scenarios 
requiring automation.

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_ExportAllDataSeries"></a> ExportAllDataSeries\(\)

Exports all data series included in the chart.

```csharp
void ExportAllDataSeries()
```

#### Examples

The following example demonstrates how to use the <code>ExportAllDataSeries</code> method:
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
stftviews[0].STFT2DViewModel.ExportAllDataSeries();</code></pre>

#### Remarks

This method exports all curves contained in the chart. When used via the OperationAPI, a file dialog appears 
on the screen to specify the file save location. Therefore, it is not recommended for repetitive tasks or 
scenarios requiring automation. Instead, it is recommended to use the <xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.ExportAllCurves(System.String)" data-throw-if-not-resolved="false"></xref> method, 
which does not display a file save dialog.

