# Interface IOperationsHeatMapSTFTViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents an interface that manages both 2D and 3D views of the Short-Time Fourier Transform (STFT).

```csharp
public interface IOperationsHeatMapSTFTViewModel : IOperationsLine2DViewModelBase, IOperationsChartViewModel, IView
```

#### Implements

[IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md), 
[IOperationsChartViewModel](VM.Operations.Post.Interfaces.IOperationsChartViewModel.md), 
[IView](VM.Operations.Post.Interfaces.IView.md)

## Examples

To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationsHeatMapSTFTViewModel.py
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

stfts[0].IsWaterfallType = True

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel_IsWaterfallType"></a> IsWaterfallType

Gets or sets a value indicating whether the view type is set to Waterfall, enabling 2D to 3D conversion.

```csharp
bool IsWaterfallType { get; set; }
```

#### Property Value

 bool

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.md).

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

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.md).

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

For an example that includes this property, see the [Interface IOperationsHeatMapSTFTViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.md).

#### Remarks

This property provides access to the 3D view model of the Short-Time Fourier Transform (STFT).

