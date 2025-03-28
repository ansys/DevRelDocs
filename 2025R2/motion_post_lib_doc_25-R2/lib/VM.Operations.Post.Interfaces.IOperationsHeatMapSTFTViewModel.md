# Interface IOperationsHeatMapSTFTViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents an interface that manages both 2D and 3D views of the Short-Time Fourier Transform (STFT).

```python
public interface IOperationsHeatMapSTFTViewModel : IOperationsLine2DViewModelBase, IOperationsChartViewModel, IView, IOperationsBase
```

#### Implements

[IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md), 
[IOperationsChartViewModel](VM.Operations.Post.Interfaces.IOperationsChartViewModel.md), 
[IView](VM.Operations.Post.Interfaces.IView.md), 
[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Examples

To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationsHeatMapSTFTViewModel.py
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

stfts[0].IsWaterfallType = True

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### IsWaterfallType

Gets or sets a value indicating whether the view type is set to Waterfall, enabling 2D to 3D conversion.

```python
bool IsWaterfallType { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTViewModel](#VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel).

#### Remarks

This flag determines whether the view type is set to Waterfall, which enables conversion between 2D and 3D views.

### STFT2DViewModel

Gets the 2D view model of the Short-Time Fourier Transform (STFT).

```python
IHeatMapSTFTView2DViewModel STFT2DViewModel { get; }
```

#### Property Value

 IHeatMapSTFTView2DViewModel

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTViewModel](#VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel).

#### Remarks

This property provides access to the 2D view model of the Short-Time Fourier Transform (STFT).

### STFT3DViewModel

Gets the 3D view model of the Short-Time Fourier Transform (STFT).

```python
IHeatMapSTFTView3DViewModel STFT3DViewModel { get; }
```

#### Property Value

 IHeatMapSTFTView3DViewModel

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTViewModel](#VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel).

#### Remarks

This property provides access to the 3D view model of the Short-Time Fourier Transform (STFT).


