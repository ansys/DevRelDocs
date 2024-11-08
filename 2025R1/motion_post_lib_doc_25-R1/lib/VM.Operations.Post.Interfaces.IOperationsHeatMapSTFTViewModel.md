#  Interface IOperationsHeatMapSTFTViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents an interface that manages both 2D and 3D views of the Short-Time Fourier Transform (STFT).

```csharp
public interface IOperationsHeatMapSTFTViewModel : IOperationsLine2DViewModelBase, IView, IOperationsBase
```

#### Implements

[IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md), 
[IView](VM.Operations.Post.Interfaces.IView.md), 
[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel_IsWaterfallType"></a> IsWaterfallType

Gets or sets a value indicating whether the view type is set to Waterfall, enabling 2D to 3D conversion.

```csharp
bool IsWaterfallType { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>IsWaterfallType</code> property:
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
stftviews[0].IsWaterfallType = True</code></pre>

#### Remarks

This flag determines whether the view type is set to Waterfall, which enables conversion between 2D and 3D views.

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel_STFT2DViewModel"></a> STFT2DViewModel

Gets the 2D view model of the Short-Time Fourier Transform (STFT).

```csharp
IHeatMapSTFTView2DViewModel STFT2DViewModel { get; }
```

#### Property Value

 IHeatMapSTFTView2DViewModel

#### Examples

The following example demonstrates how to access the <code>STFT2DViewModel</code> property:
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
stftviews = chart.CreateSTFT(data, series);</code></pre>

#### Remarks

This property provides access to the 2D view model of the Short-Time Fourier Transform (STFT).

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel_STFT3DViewModel"></a> STFT3DViewModel

Gets the 3D view model of the Short-Time Fourier Transform (STFT).

```csharp
IHeatMapSTFTView3DViewModel STFT3DViewModel { get; }
```

#### Property Value

 IHeatMapSTFTView3DViewModel

#### Examples

The following example demonstrates how to access the <code>STFT3DViewModel</code> property:
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
stftviews = chart.CreateSTFT(data, series);</code></pre>

#### Remarks

This property provides access to the 3D view model of the Short-Time Fourier Transform (STFT).

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel_ExportAllDataSeries"></a> ExportAllDataSeries\(\)

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
stftviews[0].ExportAllDataSeries();</code></pre>

#### Remarks

This method exports all curves contained in the chart. When used via the OperationAPI, a file dialog appears 
on the screen to specify the file save location. Therefore, it is not recommended for repetitive tasks or 
scenarios requiring automation. Instead, it is recommended to use the <xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.ExportAllDataSeries" data-throw-if-not-resolved="false"></xref> method, 
which does not display a file save dialog.

