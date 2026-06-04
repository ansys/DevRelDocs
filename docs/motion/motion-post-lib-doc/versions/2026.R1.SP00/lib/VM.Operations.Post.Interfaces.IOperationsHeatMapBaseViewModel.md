# Interface IOperationsHeatMapBaseViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Base interface for managing operations related to the STFT (Short-Time Fourier Transform) view.

```csharp
public interface IOperationsHeatMapBaseViewModel
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationsHeatMapBaseViewModel.py
import sys

# Get the current file's path and set the path for external modules.
current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'
sys.path.append(external_modules_path)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
result_file_path = get_result_file_path()

# Set array about result file
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
applicationHandler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = applicationHandler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
chartView = page.CreateChart("Chart")

# Set array about combination of characteristic and component
curvePaths = List[str]()
curvePaths.Add(r'Displacement/Magnitude')

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
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

stfts[0].STFT2DViewModel.IsAutoRange = False
stfts[0].STFT2DViewModel.LegendFontColor = Colors.Red
stfts[0].STFT2DViewModel.LegendFontSize = 15

if stfts[0].STFT2DViewModel.IsAutoRange == False:
    stfts[0].STFT2DViewModel.Min = 0
    stfts[0].STFT2DViewModel.Max = 100

# The output path is 'examples/Output'.
output_dir = get_output_directory()
export_filepath = combine_path(output_dir, r'ExportAllCurves.txt')
stfts[0].STFT2DViewModel.ExportAllCurves(export_filepath)

# Close the Pages
page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_IsAutoRange"></a> IsAutoRange

Gets or sets a value indicating whether the Min and Max values of the legend are set automatically.

```csharp
bool IsAutoRange { get; set; }
```

#### Property Value

 bool

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapBaseViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.md).

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

 Color

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapBaseViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.md).

#### Remarks

This property allows you to set the font color of the legend.
In the UI, this property is represented under the "Legend" category with the property name "Font Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_LegendFontSize"></a> LegendFontSize

Gets or sets the font size of the legend.

```csharp
double LegendFontSize { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapBaseViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.md).

#### Remarks

This property allows you to set the font size of the legend.
In the UI, this property is represented under the "Legend" category with the property name "Font Size".

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_Max"></a> Max

Gets or sets the maximum value of the legend.

```csharp
double Max { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapBaseViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.md).

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

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapBaseViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.md).

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

`filepath` string

The file path where the curves will be saved.

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapBaseViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.md).

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

For an example that includes this property, see the [Interface IOperationsHeatMapBaseViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.md).

#### Remarks

This method exports all curves contained in the chart. When used via the OperationAPI, a file dialog appears 
on the screen to specify the file save location. Therefore, it is not recommended for repetitive tasks or 
scenarios requiring automation. Instead, it is recommended to use the <xref href="VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.ExportAllCurves(System.String)" data-throw-if-not-resolved="false"></xref> method, 
which does not display a file save dialog.

