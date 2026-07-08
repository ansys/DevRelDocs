#  Interface IOperationsHeatMapSTFTDataViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

The IOperationsHeatMapSTFTDataViewModel interface defines the structure and functionalities for handling heat map data specifically for Short-Time Fourier Transform (STFT).

```python
public interface IOperationsHeatMapSTFTDataViewModel
```

## Examples

To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationsHeatMapSTFTDataViewModel.py
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

# Set array about combination of characteristic and component
curvePaths = List[str]()
curvePaths.Add(r'Displacement/Magnitude')

# Set a Curve Parameter
parameters = PlotParameters()
parameters.Paths = curvePaths
parameters.Target = "Crank"

# Add Curves (FilePath, Curve Parameter)
# FilePath - The path of the result to access.
# parameters - The class used as a parameter of the AddCurve function.
# The instance of the curve.
curves = chartView.AddCurves(result_file_path, parameters)

# Documentation Example
# create_fft.py
# SeriesNames - The list of the curve name to perform the operation
# FFTType - Magnitude, Phase
# FFTWindowType - Rectangular, Triangular, Bartlett, Hanning, Hamming, Welch, BlackMan, None
# ScaleType - Original, Logarithm, Decibel
# Points - The number of data point for FFT
# Start - The start time for using FFT on target data series
# End - The end time for using FFT on target data series
ffts = chartView.CreateFFT(curves, FFTType.Magnitude, FFTWindowType.Rectangular, ScaleType.Original, 128, 0, 1.0)

fftNames = List[str]()
fftNames.Add(ffts[0].SeriesName)

# SamplingFrequency  - the number of the interval for dividing Y direction grids on color map.
# TimeSlice - the number of the interval for dividing  X direction grids on color map.
# Overlap - the value of the percentage for setting overlapped intervals.
# SelectedPoints - the number of data point for FFT.
# Start - the start time for using FFT on target data series.
# End - the end time for using FFT on target data series.
# ReferenceValue - the reference value on decibel as the type of the scale.
# ScaleFactor - the scale factor to change from time domain to another domain.
# SelectedScaleType - the scale type of STFT. STFT Scale Type has Original, Decibel.
data = HeatMapSTFTDataViewModel()
data.SamplingFrequency = 100
data.TimeSlice = 0.05
data.Overlap = 50
data.SelectedPoints = 16384
data.Start = 0
data.End = 1.000000000001
data.ReferenceValue = 1E-05
data.ScaleFactor = 1.0
data.SelectedScaleType = STFTScaleType.Original
stfts = chartView.CreateSTFT(data, fftNames)

stfts[0].STFT2DViewModel.LegendColorType = ColorSchemeType.BLACK_TO_WHITE
stfts[0].STFT2DViewModel.Start = 0.2
stfts[0].STFT2DViewModel.End = 0.9
stfts[0].STFT2DViewModel.Overlap = 80
stfts[0].STFT2DViewModel.ReferenceValue = 1E-05
stfts[0].STFT2DViewModel.SamplingFrequency = 200
stfts[0].STFT2DViewModel.SelectedPoints = 512
stfts[0].STFT2DViewModel.SelectedScaleType = STFTScaleType.Decibel
stfts[0].STFT2DViewModel.TimeSlice = 0.01
stfts[0].STFT2DViewModel.ScaleFactor = 2.0

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_End"></a> End

Gets or sets the end time for using FFT (Fast Fourier Transform) on the target data series.

```python
double End { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTDataViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.md).

#### Remarks

This property allows you to set the end time for applying FFT on the target data series.
In the UI, this property is represented under the "Source" category with the property name "End".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_LegendColorType"></a> LegendColorType

Gets or sets the color scheme of the legend.

```python
ColorSchemeType LegendColorType { get; set; }
```

#### Property Value

 ColorSchemeType

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTDataViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.md).

#### Remarks

This property allows you to set the color scheme of the legend.
The available color schemes are:
<ul><li><xref href="VM.Models.Post.ColorSchemeType.NORMAL" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.NORMAL_INVERTED" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.BLACK_TO_WHITE" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.WHITE_TO_BLACK" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.GREEN_TO_BROWN" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.WHITE_TO_BROWN" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.METAL_CASTING" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.THERMAL_1" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.THERMAL_2" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.THERMAL_3" data-throw-if-not-resolved="false"></xref></li></ul>
In the UI, this property is represented under the "Legend" category with the property name "Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_Overlap"></a> Overlap

Gets or sets the percentage value for setting overlapped intervals.

```python
double Overlap { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTDataViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.md).

#### Remarks

This property allows you to set the percentage value for overlapped intervals.
In the UI, this property is represented under the "Source" category with the property name "Overlap".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_ReferenceValue"></a> ReferenceValue

Gets or sets the reference value for decibel scaling.

```python
double ReferenceValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTDataViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.md).

#### Remarks

This property allows you to set the reference value for decibel scaling. It is applicable only when the <xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.SelectedScaleType" data-throw-if-not-resolved="false"></xref> property is set to Decibel.
In the UI, this property is represented under the "Source" category with the property name "RefVal".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_SamplingFrequency"></a> SamplingFrequency

Gets or sets the sampling frequency, which is the number of intervals for dividing the Y direction grids on a color map.

```python
int SamplingFrequency { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTDataViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.md).

#### Remarks

This property allows you to set the number of intervals for dividing the Y direction grids on a color map.
In the UI, this property is represented under the "Source" category with the property name "Sampling Frequency".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_ScaleFactor"></a> ScaleFactor

Gets or sets the scale factor for transforming from the time domain to another domain.

```python
double ScaleFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTDataViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.md).

#### Remarks

This property allows you to set the scale factor for transforming data from the time domain to another domain.
In the UI, this property is represented under the "Source" category with the property name "Scale Factor".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_SelectedPoints"></a> SelectedPoints

Gets or sets the number of data points for FFT (Fast Fourier Transform).

```python
int SelectedPoints { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTDataViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.md).

#### Remarks

This property allows you to set the number of data points to be used for the FFT.
In the UI, this property is represented under the "Source" category with the property name "nFFT".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_SelectedScaleType"></a> SelectedScaleType

Gets or sets the scale type for the Short-Time Fourier Transform (STFT).

```python
STFTScaleType SelectedScaleType { get; set; }
```

#### Property Value

 STFTScaleType

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTDataViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.md).

#### Remarks

This property allows you to set the scale type for the STFT.
The supported types are:
<ul><li><xref href="VM.Models.Post.STFTScaleType.Original" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.STFTScaleType.Decibel" data-throw-if-not-resolved="false"></xref></li></ul>
In the UI, this property is represented under the "Source" category with the property name "Scale".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_Start"></a> Start

Gets or sets the start time for using FFT (Fast Fourier Transform) on the target data series.

```python
double Start { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTDataViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.md).

#### Remarks

This property allows you to set the start time for applying FFT on the target data series.
In the UI, this property is represented under the "Source" category with the property name "Start".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_TimeSlice"></a> TimeSlice

Gets or sets the number of intervals for dividing the X direction grids on a color map.

```python
double TimeSlice { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTDataViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.md).

#### Remarks

This property allows you to set the number of intervals for dividing the X direction grids on a color map.
In the UI, this property is represented under the "Source" category with the property name "Time Slice".

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_ExportOrderTrackingCurve_System_String_"></a> ExportOrderTrackingCurve\(string\)

Exports a curve to order tracking by creating a new chart and adding the exported curve to it.

```python
void ExportOrderTrackingCurve(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the curve to be exported.

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTDataViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.md).

#### Remarks

This method exports a specified curve to order tracking by creating a new chart and adding the exported curve to it.


