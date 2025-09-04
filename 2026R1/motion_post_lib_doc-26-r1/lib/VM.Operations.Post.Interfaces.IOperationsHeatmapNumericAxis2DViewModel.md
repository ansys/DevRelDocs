#  Interface IOperationsHeatmapNumericAxis2DViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface for managing axes in a 2D Numeric Heatmap related to STFT.

```python
public interface IOperationsHeatmapNumericAxis2DViewModel
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationsHeatmapNumericAxis2DViewModel.py
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
stftViews = chartView.CreateSTFT(data, fftNames)

axis = stftViews[0].STFT2DViewModel.GetAxis("Frequency (Hz)")
axis.FontColor = Colors.Red
axis.FontFace = FontFamily("Arial")
axis.FontSize = 16
axis.FontStyle = OperationAPIService.GetFontStyleFromString("Italic")
axis.FontWeight = OperationAPIService.GetFontWeightFromString("Bold")
axis.ScaleInterval = 5.0
axis.ScaleMax = 100
axis.ScaleMin = 10

if axis.General == False :
    axis.Digit = 2
    axis.LabelFormatType = LabelFormatType.Number

# Close the Pages
page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_Digit"></a> Digit

Gets or sets the number of digits for the label format.

```python
int Digit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatmapNumericAxis2DViewModel](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.md).

#### Remarks

Use this property to specify or retrieve the number of digits displayed in the labels on the axis.

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_FontColor"></a> FontColor

Gets or sets the font color of the axis.

```python
Color FontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatmapNumericAxis2DViewModel](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.md).

#### Remarks

This property is part of the "Chart" category and allows you to customize the appearance of the axis by changing its font color.
You can set this property to any valid <xref href="System.Windows.Media.Color" data-throw-if-not-resolved="false"></xref> value.

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_FontFace"></a> FontFace

Gets or sets the font family for the axis labels.

```python
FontFamily FontFace { get; set; }
```

#### Property Value

 [FontFamily](https://learn.microsoft.com/dotnet/api/system.windows.media.fontfamily)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatmapNumericAxis2DViewModel](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.md).

#### Remarks

Use this property to specify or retrieve the font family used for the labels on the axis.

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_FontSize"></a> FontSize

Gets or sets the font size of the labels on the axis.

```python
double FontSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatmapNumericAxis2DViewModel](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.md).

#### Remarks

Use this property to specify or retrieve the font size of the labels displayed on the axis.

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_FontStyle"></a> FontStyle

Gets or sets the font style for the axis.

```python
FontStyle FontStyle { get; set; }
```

#### Property Value

 [FontStyle](https://learn.microsoft.com/dotnet/api/system.windows.fontstyle)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatmapNumericAxis2DViewModel](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.md).

#### Remarks

Use this property to specify or retrieve the font style used for the axis. 
The available options are:
<ul><li><xref href="System.Windows.FontStyles.Italic" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontStyles.Normal" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontStyles.Oblique" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_FontWeight"></a> FontWeight

Gets or sets the font weight for the labels on the axis.

```python
FontWeight FontWeight { get; set; }
```

#### Property Value

 [FontWeight](https://learn.microsoft.com/dotnet/api/system.windows.fontweight)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatmapNumericAxis2DViewModel](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.md).

#### Remarks

Use this property to specify or retrieve the font weight of the labels displayed on the axis.
The available options are:
<ul><li><xref href="System.Windows.FontWeights.Bold" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontWeights.Normal" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_General"></a> General

Gets or sets a value indicating whether the label format is set automatically or manually.

```python
bool General { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatmapNumericAxis2DViewModel](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.md).

#### Remarks

If this property is set to <code>true</code>, the <xref href="VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.Digit" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.LabelFormatType" data-throw-if-not-resolved="false"></xref> properties cannot be set.
Use this property to specify whether the label format should be determined automatically or manually.

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_LabelFormatType"></a> LabelFormatType

Gets or sets the format type for the labels on the axis.

```python
LabelFormatType LabelFormatType { get; set; }
```

#### Property Value

 LabelFormatType

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatmapNumericAxis2DViewModel](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.md).

#### Remarks

Use this property to specify or retrieve the format type for the decimal values displayed in the labels on the axis.
The available options are:
<ul><li><xref href="VM.Models.Post.LabelFormatType.Exponential" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LabelFormatType.General" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LabelFormatType.Number" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_ScaleInterval"></a> ScaleInterval

Gets or sets the scale interval of the axis.

```python
double ScaleInterval { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatmapNumericAxis2DViewModel](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.md).

#### Remarks

Use this property to manually set the intervals for the axis range.

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_ScaleMax"></a> ScaleMax

Gets or sets the maximum value of the axis scale.

```python
double ScaleMax { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatmapNumericAxis2DViewModel](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.md).

#### Remarks

Use this property to manually set the maximum value for the axis scale.

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_ScaleMin"></a> ScaleMin

Gets or sets the minimum value of the axis scale.

```python
double ScaleMin { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatmapNumericAxis2DViewModel](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.md).

#### Remarks

Use this property to manually set the minimum value for the axis scale.


