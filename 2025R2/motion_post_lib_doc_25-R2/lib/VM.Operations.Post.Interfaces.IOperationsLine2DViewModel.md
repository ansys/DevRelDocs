#  Interface IOperationsLine2DViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents the interface for 2D chart operations view models.

```python
public interface IOperationsLine2DViewModel : IOperationsLine2DViewModelBase, IOperationsChartViewModel, IView, IOperationsBase
```

#### Implements

[IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md), 
[IOperationsChartViewModel](VM.Operations.Post.Interfaces.IOperationsChartViewModel.md), 
[IView](VM.Operations.Post.Interfaces.IView.md), 
[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Examples

To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationsLine2DViewModel.py
import sys

current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'

sys.path.append(external_modules_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
result_file_path = get_result_file_path()

# Set array about result file
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Get Page
page = applicationHandler.GetActivePage()

# Create PlotView
chartView = page.CreateChart("Chart")

chartView.AxisX = False
chartView.AxisY = False
chartView.ShowLegend = False
chartView.ShowAnimationBar = False
chartView.TrackingCurve = False
chartView.TrackingOption = ChartAxisType.Multiple

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_AxisX"></a> AxisX

Gets or sets a value indicating whether the X-axis is visible.

```python
bool AxisX { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModel](#VM_Operations_Post_Interfaces_IOperationsLine2DViewModel).

#### Remarks

This property determines whether the X-axis is visible in the chart.
In the UI, this property is represented under the "Chart" category with the property name "Axis X".

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_AxisY"></a> AxisY

Gets or sets a value indicating whether the Y-axis is visible.

```python
bool AxisY { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModel](#VM_Operations_Post_Interfaces_IOperationsLine2DViewModel).

#### Remarks

This property determines whether the Y-axis is visible in the chart.
In the UI, this property is represented under the "Chart" category with the property name "Axis Y".

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_ShowAnimationBar"></a> ShowAnimationBar

Gets or sets a value indicating whether the Animation Bar is visible.

```python
bool ShowAnimationBar { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModel](#VM_Operations_Post_Interfaces_IOperationsLine2DViewModel).

#### Remarks

Use this property to control the visibility of the Animation Bar in the user interface.
In the UI, this property is represented under the "Data Tracking" category with the property name "Animation Bar".

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_ShowLegend"></a> ShowLegend

Gets or sets a value indicating whether the legend of the 2D chart is visible.

```python
bool ShowLegend { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModel](#VM_Operations_Post_Interfaces_IOperationsLine2DViewModel).

#### Remarks

Use this property to control the visibility of the legend in a 2D chart.
In the UI, this property is represented under the "Chart" category with the property name "Legend".

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_TrackingCurve"></a> TrackingCurve

Gets or sets a value indicating whether the Tracking Curve is visible.

```python
bool TrackingCurve { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModel](#VM_Operations_Post_Interfaces_IOperationsLine2DViewModel).

#### Remarks

This property determines whether the Tracking Curve is visible in the chart.
In the UI, this property is represented under the "Data Tracking" category with the property name "Tracking Data".

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_TrackingOption"></a> TrackingOption

Gets or sets the tracking option for displaying data points on the chart.

```python
ChartAxisType TrackingOption { get; set; }
```

#### Property Value

 ChartAxisType

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModel](#VM_Operations_Post_Interfaces_IOperationsLine2DViewModel).

#### Remarks

This property determines whether the data point values are shown for the closest curve or for all curves in the chart 
when the mouse is hovered over it. The property does not function if the Tracking Curve option is disabled.
In the UI, this property is labeled as "Tracking Type".
The supported types are:
<ul><li><xref href="VM.Models.Post.ChartAxisType.Single" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ChartAxisType.Multiple" data-throw-if-not-resolved="false"></xref></li></ul>

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateAbsolute_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_SignType_"></a> CreateAbsolute\(IEnumerable<string\>, SignType\)

Transforms data series into absolute values for the Y-Axis as part of the chart tab's Transform functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateAbsolute(IEnumerable<string> lstSeriesName, SignType signType)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of curve names to perform the operation on.

`signType` SignType

The type of absolute value transformation to apply.
The supported types are:
<ul><li><xref href="VM.Models.Post.SignType.Positive" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SignType.Negative" data-throw-if-not-resolved="false"></xref></li></ul>

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with transformed absolute values.

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

This function iterates over each series specified in <code class="paramref">lstSeriesName</code> and transforms the Y values of each point in the series 
to their absolute values based on the provided <code class="paramref">signType</code>. If <code class="paramref">signType</code> is <xref href="VM.Models.Post.SignType.Positive" data-throw-if-not-resolved="false"></xref>, 
the Y values are converted to their positive absolute values. If <code class="paramref">signType</code> is <xref href="VM.Models.Post.SignType.Negative" data-throw-if-not-resolved="false"></xref>, the Y values 
are converted to their negative absolute values.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateAbsolute_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__VM_Models_Post_SignType_"></a> CreateAbsolute\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, SignType\)

Transforms data series into absolute values for the Y-Axis as part of the chart tab's Transform functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateAbsolute(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, SignType signType)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of instances of the curves to perform the operation on.

`signType` SignType

The type of absolute value transformation to apply.
The supported types are:
<ul><li><xref href="VM.Models.Post.SignType.Positive" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SignType.Negative" data-throw-if-not-resolved="false"></xref></li></ul>

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with transformed absolute values.

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

This function iterates over each series in <code class="paramref">seriesViewModels</code> and transforms the Y values of each point in the series 
to their absolute values based on the provided <code class="paramref">signType</code>. If <code class="paramref">signType</code> is <xref href="VM.Models.Post.SignType.Positive" data-throw-if-not-resolved="false"></xref>, 
the Y values are converted to their positive absolute values. If <code class="paramref">signType</code> is <xref href="VM.Models.Post.SignType.Negative" data-throw-if-not-resolved="false"></xref>, the Y values 
are converted to their negative absolute values.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateAlign_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_AlignType_"></a> CreateAlign\(IEnumerable<string\>, AlignType\)

Aligns data series to zero or the first point of the target curve as part of the chart tab's Transform functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateAlign(IEnumerable<string> lstSeriesName, AlignType alignType)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of curve names to perform the operation on.

`alignType` AlignType

The type of alignment to apply.
The supported types are:
<ul><li><xref href="VM.Models.Post.AlignType.Zero" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.AlignType.Curve" data-throw-if-not-resolved="false"></xref></li></ul>

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with aligned values.

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

This function iterates over each series specified in <code class="paramref">lstSeriesName</code> and aligns the Y values of each point in the series 
based on the provided <code class="paramref">alignType</code>. If <code class="paramref">alignType</code> is <xref href="VM.Models.Post.AlignType.Zero" data-throw-if-not-resolved="false"></xref>, 
the Y values are aligned to zero. If <code class="paramref">alignType</code> is <xref href="VM.Models.Post.AlignType.Curve" data-throw-if-not-resolved="false"></xref>, 
the Y values are aligned to the first point of the target curve.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateAlign_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__VM_Models_Post_AlignType_"></a> CreateAlign\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, AlignType\)

Aligns data series to zero or the first point of the target curve as part of the chart tab's Transform functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateAlign(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, AlignType alignType)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of instances of the curves to perform the operation on.

`alignType` AlignType

The type of alignment to apply.
The supported types are:
<ul><li><xref href="VM.Models.Post.AlignType.Zero" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.AlignType.Curve" data-throw-if-not-resolved="false"></xref></li></ul>

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with aligned values.

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

This function iterates over each series in <code class="paramref">seriesViewModels</code> and aligns the Y values of each point in the series 
based on the provided <code class="paramref">alignType</code>. If <code class="paramref">alignType</code> is <xref href="VM.Models.Post.AlignType.Zero" data-throw-if-not-resolved="false"></xref>, 
the Y values are aligned to zero. If <code class="paramref">alignType</code> is <xref href="VM.Models.Post.AlignType.Curve" data-throw-if-not-resolved="false"></xref>, 
the Y values are aligned to the first point of the target curve.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateDifferentiatedCurve_System_Collections_Generic_IEnumerable_System_String__"></a> CreateDifferentiatedCurve\(IEnumerable<string\>\)

Differentiates data series as part of the chart tab's Calculus functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateDifferentiatedCurve(IEnumerable<string> lstSeriesName)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of curve names to perform the differentiation on.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with differentiated values.

#### Examples

For an example that includes this property, see the [Interface IOperationsCalculusLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsCalculusLineDataSeriesViewModel.md).

#### Remarks

This function iterates over each series specified in <code class="paramref">lstSeriesName</code> and applies differentiation to the Y values 
of each point in the series. The differentiation calculates the difference between consecutive points.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateDifferentiatedCurve_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__"></a> CreateDifferentiatedCurve\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>\)

Differentiates data series as part of the chart tab's Calculus functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateDifferentiatedCurve(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of instances of the curves to perform the differentiation on.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with differentiated values.

#### Examples

For an example that includes this property, see the [Interface IOperationsCalculusLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsCalculusLineDataSeriesViewModel.md).

#### Remarks

This function iterates over each series in <code class="paramref">seriesViewModels</code> and applies differentiation to the Y values 
of each point in the series. The differentiation calculates the difference between consecutive points.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFFT_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_FFTType_VM_Models_Post_FFTWindowType_VM_Models_Post_ScaleType_System_Int32_System_Double_System_Double_"></a> CreateFFT\(IEnumerable<string\>, FFTType, FFTWindowType, ScaleType, int, double, double\)

Applies FFT (Fast Fourier Transform) to data series as part of the chart tab's functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFFT(IEnumerable<string> lstSeriesName, FFTType fftType, FFTWindowType fftWindowType, ScaleType scaleType, int points, double start, double end)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of curve names to perform the operation on.

`fftType` FFTType

The type of FFT to apply.
The supported types are:
<ul><li><xref href="VM.Models.Post.FFTType.Magnitude" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTType.Phase" data-throw-if-not-resolved="false"></xref></li></ul>

`fftWindowType` FFTWindowType

The window type to use for FFT.
The supported types are:
<ul><li><xref href="VM.Models.Post.FFTWindowType.Rectangular" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Triangular" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Bartlett" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Hanning" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Hamming" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Welch" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.BlackMan" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.None" data-throw-if-not-resolved="false"></xref></li></ul>

`scaleType` ScaleType

The scale type to apply.
The supported types are:
<ul><li><xref href="VM.Models.Post.ScaleType.Original" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ScaleType.Logarithm" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ScaleType.Decibel" data-throw-if-not-resolved="false"></xref></li></ul>

`points` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of data points for FFT.

`start` [double](https://learn.microsoft.com/dotnet/api/system.double)

The start time for using FFT on target data series.

`end` [double](https://learn.microsoft.com/dotnet/api/system.double)

The end time for using FFT on target data series.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with FFT applied.

#### Examples

For an example that includes this property, see the [Interface IOperationsFFTLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsFFTLineDataSeriesViewModel.md).

#### Remarks

This function performs FFT on each series specified in <code class="paramref">lstSeriesName</code> within the provided start and end time range,
using the specified FFT type, window type, scale type, and number of points.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFFT_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__VM_Models_Post_FFTType_VM_Models_Post_FFTWindowType_VM_Models_Post_ScaleType_System_Int32_System_Double_System_Double_"></a> CreateFFT\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, FFTType, FFTWindowType, ScaleType, int, double, double\)

Applies FFT (Fast Fourier Transform) to data series as part of the chart tab's functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFFT(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, FFTType fftType, FFTWindowType fftWindowType, ScaleType scaleType, int points, double start, double end)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of instances of the curves to perform the operation on.

`fftType` FFTType

The type of FFT to apply.
The supported types are:
<ul><li><xref href="VM.Models.Post.FFTType.Magnitude" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTType.Phase" data-throw-if-not-resolved="false"></xref></li></ul>

`fftWindowType` FFTWindowType

The window type to use for FFT.
The supported types are:
<ul><li><xref href="VM.Models.Post.FFTWindowType.Rectangular" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Triangular" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Bartlett" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Hanning" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Hamming" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Welch" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.BlackMan" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.None" data-throw-if-not-resolved="false"></xref></li></ul>

`scaleType` ScaleType

The scale type to apply.
The supported types are:
<ul><li><xref href="VM.Models.Post.ScaleType.Original" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ScaleType.Logarithm" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ScaleType.Decibel" data-throw-if-not-resolved="false"></xref></li></ul>

`points` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of data points for FFT.

`start` [double](https://learn.microsoft.com/dotnet/api/system.double)

The start time for using FFT on target data series.

`end` [double](https://learn.microsoft.com/dotnet/api/system.double)

The end time for using FFT on target data series.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with FFT applied.

#### Examples

For an example that includes this property, see the [Interface IOperationsFFTLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsFFTLineDataSeriesViewModel.md).

#### Remarks

This function performs FFT on each series specified in <code class="paramref">seriesViewModels</code> within the provided start and end time range,
using the specified FFT type, window type, scale type, and number of points.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFiltering_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_FilteringType_System_Int32_System_Double_System_Double_"></a> CreateFiltering\(IEnumerable<string\>, FilteringType, int, double, double\)

Applies data filtering and smoothing to data series as part of the chart tab's Signal Processing functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFiltering(IEnumerable<string> lstSeriesName, FilteringType filteringType, int order, double frequency1, double frequency2)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of curve names to perform the operation on.

`filteringType` FilteringType

The type of filter to apply.
The supported types are:
<ul><li><xref href="VM.Models.Post.FilteringType.LowPass" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FilteringType.HighPass" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FilteringType.BandPass" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FilteringType.BandStop" data-throw-if-not-resolved="false"></xref></li></ul>

`order` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The order of the filter. As the value decreases, the output becomes smoother.

`frequency1` [double](https://learn.microsoft.com/dotnet/api/system.double)

The first frequency value for the filter.

`frequency2` [double](https://learn.microsoft.com/dotnet/api/system.double)

The second frequency value for the filter, used in band filters.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with filtering applied.

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md).

#### Remarks

This function performs filtering on each series specified in <code class="paramref">lstSeriesName</code> using the specified filtering type,
filter order, and frequency values. The filtering operation can smooth the data series based on the parameters provided.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFiltering_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__VM_Models_Post_FilteringType_System_Int32_System_Double_System_Double_"></a> CreateFiltering\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, FilteringType, int, double, double\)

Applies data filtering and smoothing to data series as part of the chart tab's Signal Processing functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFiltering(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, FilteringType filteringType, int order, double frequency1, double frequency2)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of instances of the curves to perform the operation on.

`filteringType` FilteringType

The type of filter to apply.
The supported types are:
<ul><li><xref href="VM.Models.Post.FilteringType.LowPass" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FilteringType.HighPass" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FilteringType.BandPass" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FilteringType.BandStop" data-throw-if-not-resolved="false"></xref></li></ul>

`order` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The order of the filter. As the value decreases, the output becomes smoother.

`frequency1` [double](https://learn.microsoft.com/dotnet/api/system.double)

The first frequency value for the filter.

`frequency2` [double](https://learn.microsoft.com/dotnet/api/system.double)

The second frequency value for the filter, used in band filters.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with filtering applied.

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md).

#### Remarks

This function performs filtering on each series specified in <code class="paramref">seriesViewModels</code> using the specified filtering type,
filter order, and frequency values. The filtering operation can smooth the data series based on the parameters provided.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFrequencyWeighting_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_WeightingType_VM_Models_Post_FrequencyAxisType_"></a> CreateFrequencyWeighting\(IEnumerable<string\>, WeightingType, FrequencyAxisType\)

Applies frequency weighting to data series as part of the chart tab's Signal Processing functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFrequencyWeighting(IEnumerable<string> lstSeriesName, WeightingType weightingType, FrequencyAxisType axisType)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of curve names to perform the operation on.

`weightingType` WeightingType

The type of weighting to apply.
The supported types are:
<ul><li><xref href="VM.Models.Post.WeightingType.AWeighting" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.WeightingType.BWeighting" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.WeightingType.CWeighting" data-throw-if-not-resolved="false"></xref></li></ul>

`axisType` FrequencyAxisType

Used to set the base of the log scale.
The supported types are:
<ul><li><xref href="VM.Models.Post.FrequencyAxisType.X" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FrequencyAxisType.X" data-throw-if-not-resolved="false"></xref></li></ul>

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with frequency weighting applied.

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md).

#### Remarks

This function performs frequency weighting on each series specified in <code class="paramref">lstSeriesName</code> using the specified weighting type
and axis type. A-weighting is the most commonly used to measure the sound pressure level, while B-weighting and C-weighting are alternative weighting functions.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateFrequencyWeighting_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__VM_Models_Post_WeightingType_VM_Models_Post_FrequencyAxisType_"></a> CreateFrequencyWeighting\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, WeightingType, FrequencyAxisType\)

Applies frequency weighting to data series as part of the chart tab's Signal Processing functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateFrequencyWeighting(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, WeightingType weightingType, FrequencyAxisType axisType)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of instances of the curves to perform the operation on.

`weightingType` WeightingType

The type of weighting to apply.
The supported types are:
<ul><li><xref href="VM.Models.Post.WeightingType.AWeighting" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.WeightingType.BWeighting" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.WeightingType.CWeighting" data-throw-if-not-resolved="false"></xref></li></ul>

`axisType` FrequencyAxisType

Used to set the base of the log scale.
The supported types are:
<ul><li><xref href="VM.Models.Post.FrequencyAxisType.X" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FrequencyAxisType.X" data-throw-if-not-resolved="false"></xref></li></ul>

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with frequency weighting applied.

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md).

#### Remarks

This function performs frequency weighting on each series specified in <code class="paramref">seriesViewModels</code> using the specified weighting type
and axis type. A-weighting is the most commonly used to measure the sound pressure level, while B-weighting and C-weighting are alternative weighting functions.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateIntegratedCurve_System_Collections_Generic_IEnumerable_System_String__"></a> CreateIntegratedCurve\(IEnumerable<string\>\)

Integrates data series as part of the chart tab's Calculus functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateIntegratedCurve(IEnumerable<string> lstSeriesName)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of curve names to perform the integration on.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with integrated values.

#### Examples

For an example that includes this property, see the [Interface IOperationsCalculusLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsCalculusLineDataSeriesViewModel.md).

#### Remarks

This function performs integration on each series specified in <code class="paramref">lstSeriesName</code> by calculating the cumulative sum of the Y values
of each point in the series.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateIntegratedCurve_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__"></a> CreateIntegratedCurve\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>\)

Integrates data series as part of the chart tab's Calculus functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateIntegratedCurve(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of instances of the curves to perform the operation on.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with integrated values.

#### Examples

For an example that includes this property, see the [Interface IOperationsCalculusLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsCalculusLineDataSeriesViewModel.md).

#### Remarks

This function performs integration on each series specified in <code class="paramref">seriesViewModels</code> by calculating the cumulative sum of the Y values
of each point in the series.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateInterpolation_System_Collections_Generic_IEnumerable_System_String__System_Int32_"></a> CreateInterpolation\(IEnumerable<string\>, int\)

Applies interpolation to data series as part of the chart tab's Interpolation functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateInterpolation(IEnumerable<string> lstSeriesName, int points)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of curve names to perform the interpolation on.

`points` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of data points for interpolation.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with interpolated values.

#### Examples

For an example that includes this property, see the [Interface IOperationsInterpolationLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsInterpolationLineDataSeriesViewModel.md).

#### Remarks

This function performs interpolation on each series specified in <code class="paramref">lstSeriesName</code> by calculating the interpolated values
based on the specified number of points.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateInterpolation_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__System_Int32_"></a> CreateInterpolation\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, int\)

Applies interpolation to data series as part of the chart tab's Interpolation functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateInterpolation(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, int points)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of instances of the curves to perform the operation on.

`points` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of data points for interpolation.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with interpolated values.

#### Examples

For an example that includes this property, see the [Interface IOperationsInterpolationLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsInterpolationLineDataSeriesViewModel.md).

#### Remarks

This function performs interpolation on each series specified in <code class="paramref">seriesViewModels</code> by calculating the interpolated values
based on the specified number of points.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateLogScale_System_Collections_Generic_IEnumerable_System_String__System_Double_System_Double_System_Boolean_"></a> CreateLogScale\(IEnumerable<string\>, double, double, bool\)

Applies a logarithmic scale to data series as part of the chart tab's Transform functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateLogScale(IEnumerable<string> lstSeriesName, double coefficient, double baseValue, bool decibel)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of curve names to perform the operation on.

`coefficient` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of the coefficient.

`baseValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of the base for the logarithmic scale.

`decibel` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to apply the decibel scale (20 * Log10(Y)) to the data series.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with logarithmic scaling applied.

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

This function performs a logarithmic transformation on each series specified in <code class="paramref">lstSeriesName</code> using the specified coefficient,
base value, and whether to use the decibel scale.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateLogScale_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__System_Double_System_Double_System_Boolean_"></a> CreateLogScale\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, double, double, bool\)

Applies a logarithmic scale to data series as part of the chart tab's Transform functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateLogScale(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, double coefficient, double baseValue, bool decibel)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of instances of the curves to perform the operation on.

`coefficient` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of the coefficient.

`baseValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of the base for the logarithmic scale.

`decibel` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to apply the decibel scale (20 * Log10(Y)) to the data series.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with logarithmic scaling applied.

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

This function performs a logarithmic transformation on each series specified in <code class="paramref">seriesViewModels</code> using the specified coefficient,
base value, and whether to use the decibel scale.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSTFT_VM_Models_Post_IHeatMapSTFTDataViewModel_System_Collections_Generic_IList_System_String__"></a> CreateSTFT\(IHeatMapSTFTDataViewModel, IList<string\>\)

Creates a Short Time Fourier Transform (STFT) for data series and updates the heatmap data.

```python
IOperationsHeatMapSTFTViewModel[] CreateSTFT(IHeatMapSTFTDataViewModel hitmapData, IList<string> lstSeriesName)
```

#### Parameters

`hitmapData` IHeatMapSTFTDataViewModel

The heatmap data model to update with STFT results.
<ul><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.SamplingFrequency" data-throw-if-not-resolved="false"></xref> - The value about setting the number of the interval for dividing Y direction grids on color map.</li><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.TimeSlice" data-throw-if-not-resolved="false"></xref> - The value about setting the number of the interval for dividing X direction grids on color map.</li><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.Overlap" data-throw-if-not-resolved="false"></xref> - The value of the percentage for setting overlapped intervals.</li><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.SelectedPoints" data-throw-if-not-resolved="false"></xref> - The number of data point for FFT.</li><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.Start" data-throw-if-not-resolved="false"></xref> - The start time for using FFT on target data series.</li><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.End" data-throw-if-not-resolved="false"></xref> - The end time for using FFT on target data series.</li><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.ReferenceValue" data-throw-if-not-resolved="false"></xref> - The reference value on decibel as the type of the scale.</li><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.ScaleFactor" data-throw-if-not-resolved="false"></xref> - the scale factor to change from time domain to another domain.</li><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.SelectedScaleType" data-throw-if-not-resolved="false"></xref> - An STFTScaleType enumeration value that represents the scale type for the STFT.</li></ul>

`lstSeriesName` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of curve names to perform the STFT operation on.

#### Returns

 [IOperationsHeatMapSTFTViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.md)\[\]

A collection of STFTView.

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.md).

#### Remarks

This function performs the STFT on each series specified in <code class="paramref">lstSeriesName</code> and updates the heatmap data
model with the results. The heatmap data model is defined by the <xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel" data-throw-if-not-resolved="false"></xref> interface.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSTFT_VM_Models_Post_IHeatMapSTFTDataViewModel_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__"></a> CreateSTFT\(IHeatMapSTFTDataViewModel, IEnumerable<IOperationsLineDataSeriesViewModelBase\>\)

Creates a Short Time Fourier Transform (STFT) for data series and updates the heatmap data.

```python
IOperationsHeatMapSTFTViewModel[] CreateSTFT(IHeatMapSTFTDataViewModel hitmapData, IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels)
```

#### Parameters

`hitmapData` IHeatMapSTFTDataViewModel

The heatmap data model to update with STFT results.
<ul><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.SamplingFrequency" data-throw-if-not-resolved="false"></xref> - The value about setting the number of the interval for dividing Y direction grids on color map.</li><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.TimeSlice" data-throw-if-not-resolved="false"></xref> - The value about setting the number of the interval for dividing X direction grids on color map.</li><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.Overlap" data-throw-if-not-resolved="false"></xref> - The value of the percentage for setting overlapped intervals.</li><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.SelectedPoints" data-throw-if-not-resolved="false"></xref> - The number of data point for FFT.</li><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.Start" data-throw-if-not-resolved="false"></xref> - The start time for using FFT on target data series.</li><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.End" data-throw-if-not-resolved="false"></xref> - The end time for using FFT on target data series.</li><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.ReferenceValue" data-throw-if-not-resolved="false"></xref> - The reference value on decibel as the type of the scale.</li><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.ScaleFactor" data-throw-if-not-resolved="false"></xref> - the scale factor to change from time domain to another domain.</li><li><xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.SelectedScaleType" data-throw-if-not-resolved="false"></xref> - An STFTScaleType enumeration value that represents the scale type for the STFT.</li></ul>

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of instances of the curves to perform the operation on.

#### Returns

 [IOperationsHeatMapSTFTViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.md)\[\]

A collection of STFTView.

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.md).

#### Remarks

This function performs the STFT on each series specified in <code class="paramref">seriesViewModels</code> and updates the heatmap data
model with the results. The heatmap data model is defined by the <xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel" data-throw-if-not-resolved="false"></xref> interface.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateScale_System_Collections_Generic_IEnumerable_System_String__System_Double_System_Double_"></a> CreateScale\(IEnumerable<string\>, double, double\)

Scales data series by the specified scale values as part of the chart tab's Transform functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateScale(IEnumerable<string> lstSeriesName, double scaleX, double scaleY)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of curve names to perform the operation on.

`scaleX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to scale for the X-axis.

`scaleY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to scale for the Y-axis.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with scaled values.

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

This function scales each series specified in <code class="paramref">lstSeriesName</code> by multiplying the X and Y values
of each point in the series by the specified scale values.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateScale_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__System_Double_System_Double_"></a> CreateScale\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, double, double\)

Scales data series by the specified scale values as part of the chart tab's Transform functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateScale(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, double scaleX, double scaleY)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of instances of the curves to perform the operation on.

`scaleX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to scale for the X-axis.

`scaleY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to scale for the Y-axis.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with scaled values.

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

This function scales each series specified in <code class="paramref">seriesViewModels</code> by multiplying the X and Y values
of each point in the series by the specified scale values.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSimpleMath_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_SimpleMathType_System_Int32_"></a> CreateSimpleMath\(IEnumerable<string\>, SimpleMathType, int\)

Performs simple mathematical operations (+, -, *) on data series as part of the chart tab's Simple Math functionality.

```python
IOperationsLineDataSeriesViewModelBase CreateSimpleMath(IEnumerable<string> lstSeriesName, SimpleMathType simpleMathType, int points)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of curve names to perform the operation on.

`simpleMathType` SimpleMathType

The type of simple math operation to apply.
The supported types are:
<ul><li><xref href="VM.Models.Post.SimpleMathType.Add" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SimpleMathType.Subtract" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SimpleMathType.Multiply" data-throw-if-not-resolved="false"></xref></li></ul>

`points` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of data points for interpolation.

#### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

A single data series resulting from the mathematical operation.

#### Examples

For an example that includes this property, see the [Interface IOperationsSimpleMathLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSimpleMathLineDataSeriesViewModel.md).

#### Remarks

This function performs the specified mathematical operation on each series in <code class="paramref">lstSeriesName</code> and combines the results
into a single series. The function supports addition, subtraction, and multiplication of the Y values of the data points in the series.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSimpleMath_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__VM_Models_Post_SimpleMathType_System_Int32_"></a> CreateSimpleMath\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, SimpleMathType, int\)

Performs simple mathematical operations (+, -, *) on data series as part of the chart tab's Simple Math functionality.

```python
IOperationsLineDataSeriesViewModelBase CreateSimpleMath(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, SimpleMathType simpleMathType, int points)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of instances of the curves to perform the operation on.

`simpleMathType` SimpleMathType

The type of simple math operation to apply.
The supported types are:
<ul><li><xref href="VM.Models.Post.SimpleMathType.Add" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SimpleMathType.Subtract" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SimpleMathType.Multiply" data-throw-if-not-resolved="false"></xref></li></ul>

`points` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of data points for interpolation.

#### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

A single data series resulting from the mathematical operation.

#### Examples

For an example that includes this property, see the [Interface IOperationsSimpleMathLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSimpleMathLineDataSeriesViewModel.md).

#### Remarks

This function performs the specified mathematical operation on each series in <code class="paramref">seriesViewModels</code> and combines the results
into a single series. The function supports addition, subtraction, and multiplication of the Y values of the data points in the series.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSmoothing_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_SmoothingType_System_Int32_System_Int32_"></a> CreateSmoothing\(IEnumerable<string\>, SmoothingType, int, int\)

Applies data filtering and smoothing to data series as part of the chart tab's Signal Processing functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateSmoothing(IEnumerable<string> lstSeriesName, SmoothingType smoothingType, int pointsOfWindow, int polyOrder)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of curve names to perform the operation on.

`smoothingType` SmoothingType

The type of smoothing to apply.
The supported types are:
<ul><li><xref href="VM.Models.Post.SmoothingType.SavitzkyGloay" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SmoothingType.MovingWindowAveraging" data-throw-if-not-resolved="false"></xref></li></ul>

`pointsOfWindow` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of points for the smoothing window.

`polyOrder` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The polynomial order for the smoothing operation.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with smoothing applied.

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md).

#### Remarks

This function performs smoothing on each series specified in <code class="paramref">lstSeriesName</code> using the specified smoothing type,
window size, and polynomial order. The function supports moving average and Savitzky-Golay smoothing methods.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateSmoothing_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__VM_Models_Post_SmoothingType_System_Int32_System_Int32_"></a> CreateSmoothing\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, SmoothingType, int, int\)

Applies data filtering and smoothing to data series as part of the chart tab's Signal Processing functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateSmoothing(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, SmoothingType smoothingType, int pointsOfWindow, int polyOrder)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of instances of the curves to perform the operation on.

`smoothingType` SmoothingType

The type of smoothing to apply.
The supported types are:
<ul><li><xref href="VM.Models.Post.SmoothingType.SavitzkyGloay" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SmoothingType.MovingWindowAveraging" data-throw-if-not-resolved="false"></xref></li></ul>

`pointsOfWindow` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of points for the smoothing window.

`polyOrder` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The polynomial order for the smoothing operation.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of data series with smoothing applied.

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md).

#### Remarks

This function performs smoothing on each series specified in <code class="paramref">seriesViewModels</code> using the specified smoothing type,
window size, and polynomial order. The function supports moving average and Savitzky-Golay smoothing methods.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateTranslate_System_Collections_Generic_IEnumerable_System_String__System_Double_System_Double_"></a> CreateTranslate\(IEnumerable<string\>, double, double\)

Translates data series by the specified offsets as part of the chart tab's Transform functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateTranslate(IEnumerable<string> lstSeriesName, double offsetX, double offsetY)
```

#### Parameters

`lstSeriesName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of curve names to perform the translation on.

`offsetX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The offset value to translate on the X-axis.

`offsetY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The offset value to translate on the Y-axis.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of translated data series.

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

This function translates each series specified in <code class="paramref">lstSeriesName</code> by adding the specified offsets to the X and Y values
of each point in the series.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_CreateTranslate_System_Collections_Generic_IEnumerable_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase__System_Double_System_Double_"></a> CreateTranslate\(IEnumerable<IOperationsLineDataSeriesViewModelBase\>, double, double\)

Translates data series by the specified offsets as part of the chart tab's Transform functionality.

```python
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateTranslate(IEnumerable<IOperationsLineDataSeriesViewModelBase> seriesViewModels, double offsetX, double offsetY)
```

#### Parameters

`seriesViewModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

The list of instances of the curves to perform the operation on.

`offsetX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The offset value to translate on the X-axis.

`offsetY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The offset value to translate on the Y-axis.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of translated data series.

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

This function translates each series specified in <code class="paramref">seriesViewModels</code> by adding the specified offsets to the X and Y values
of each point in the series.


