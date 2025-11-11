# Interface IOperationsHeatmapLineDataSeriesViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsHeatmapLineDataSeriesViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the heatmap line data series.

```csharp
public interface IOperationsHeatmapLineDataSeriesViewModel : IOperationsLineDataSeriesViewModelBase, ILineDataSeriesViewModelBase, IHasSourceViewModel, IViewModel, IObservableObject, IDisposableObject, IEnabled, IExpanded, ISelected, IVisible, IThicknessProperty
```

#### Implements

[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md), 
ILineDataSeriesViewModelBase, 
IHasSourceViewModel, 
IViewModel, 
IObservableObject, 
IDisposableObject, 
IEnabled, 
IExpanded, 
ISelected, 
IVisible, 
IThicknessProperty

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationsHeatmapLineDataSeriesViewModel.py
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
data.SelectedPoints = 256
data.Start = 0
data.End = 0.5
data.ReferenceValue = 1E-05
data.ScaleFactor = 1.0
data.SelectedScaleType = STFTScaleType.Original
stfts = chartView.CreateSTFT(data, curves)

# Importing Numeric Data
parameters = List[INumericParameter](2)

# To create a curve from a file, create a NumericParameter.
# Name - The name of the curve to be created.
# TargetX - The name of the X-axis data.
# TargetY - The name of the Y-axis data.
# In this example, a curve named 'OrderTrackingCurve' is created, and data corresponding to the X and Y headers is retrieved from the file.
parameter = NumericParameter()
parameter.Name = r'Y'
parameter.TargetX = r'X'
parameter.TargetY = r'Y'
parameters.Add(parameter)

# file_path - The path to the file containing the numeric data.
# parameters - The list of numeric parameters that define how to interpret the data in the file.
output_dir = get_output_directory()
file_path = combine_path(output_dir, r'example.csv')
applicationHandler.ImportNumeric(stfts[0], file_path, parameters)

curves = stfts[0].STFT2DViewModel.GetCurves("Y")
curves[0].Harmonic = 5
curves[0].Interval = 0.3

# Close the Pages
page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapLineDataSeriesViewModel_Harmonic"></a> Harmonic

Gets or sets the slope of the curve at the start point.

```csharp
double Harmonic { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatmapLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsHeatmapLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the slope of the curve at the start point.

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapLineDataSeriesViewModel_Interval"></a> Interval

Gets or sets the value of the interval.

```csharp
double Interval { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsHeatmapLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsHeatmapLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the value of the interval.

