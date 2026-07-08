# Chart
The following sample code illustrates how to create a simple example.
* The examples provided below can be found within the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' compressed file.

## Create a ChartView
This example demonstrates how to create a chart view.
Chart view is useful for analyzing simulation results by using a graph which is composed of data points. If you want to know more details about the OperationAPI Namespace included in this example, click the [OperationAPI](./getting_started_operation_api_using_py.md#how-to-write-an-api-example) link.
```python
# OperationAPI_CreatingAChartView.py
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

# Set Background
chartView.Background = Colors.Blue
chartView.Legend.FontColor = Colors.Black
chartView.Legend.ItemsInFilter = "Visible Curves"

# Close the Page
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## Creating Curves
This example demonstrates how to create a curve. A graph can be added to the activated chart view. 
For combinations of paths(Characteristic, Component) on the curve, refer to Common Settings in [Getting started with the Operation API using Python language](getting_started_operation_api_using_py.md).
```python
# OperationAPI_CreatingCurves.py
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

# Documentation Example
# Set array about combination of characteristic and component
curvePaths = List[str]()
curvePaths.Add(r'Displacement/Magnitude')
curvePaths.Add(r'Displacement/Z')

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
count = len(curves)
if count > 0 :
    curves[0].SeriesName = r'Crank_DM'
    curves[0].Color = Colors.Blue
    curves[0].LineStyle = LineStyleType.Dot

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```
## Simple Math
This example demonstrates how to create a simple math.
It is perform addition, subtraction and multiplication between graphs in the chart view. At least two graphs must be selected for the operation.
```python
# OperationAPI_CreatingAPage.py
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

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
curvePaths = List[str]()
curvePaths.Add(r'Displacement/Magnitude')
curvePaths.Add(r'Displacement/Z')

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

# SeriesNames - A list of curve names.
# SimpleMathType - The types of the simple math are as follows.
# Points - The number of data points for interpolation.

# SimpleMath - Add
chartView.CreateSimpleMath(curves, SimpleMathType.Add, 100)

# SimpleMath - Subtract
chartView.CreateSimpleMath(curves, SimpleMathType.Subtract, 100)

# SimpleMath - Multiply
chartView.CreateSimpleMath(curves, SimpleMathType.Multiply, 100)

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```
## Transform
This example demonstrates how to create a transform.
It is transform graphs through translate, align, scale, and absolute in the chart view.
```python
# OperationAPI_CreatingATransform.py
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

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
curvePaths = List[str]()
curvePaths.Add(r'Displacement/Magnitude')
curvePaths.Add(r'Displacement/Z')

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
# Transform - Translate
# OffsetX - The value to translate for X- axis.
# OffsetY - The value to translate for Y- axis.
chartView.CreateTranslate(curves, 0, 100)

# Transform - Scale
# ScaleX - The value to scale for X- axis.
# ScaleY - The value to scale for Y- axis.
chartView.CreateScale(curves, 2, 2)

# Transform - Absolute
# SignType - The types of the absolute value are as follows.
chartView.CreateAbsolute(curves, SignType.Positive)

# Transform - Align (Zero, Curve)
# AlignType - The types of the alignment are as follows.
chartView.CreateAlign(curves, AlignType.Curve)

# Transform - Log Scale
# Coeficient - The value of the coefficient.
# BaseValue - The value of the base.
# Decibel - Taking the decibel scale for the list of the curve (20Log_10(Y)).
chartView.CreateLogScale(curves, 10, 10, False)

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```
## Interpolation
This example demonstrates how to create a interpolation.
It is interpolate graphs with the desired number of data points in the chart view.
```python
# OperationAPI_CreatingAInterpolation.py
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

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
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
# SeriesName - A list of curve names.
# Points - The number of the data points for interpolation.
chartView.CreateInterpolation(curves, 200)

# Close the Page
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## Calculus
This example demonstrates how to create a calculus.
It is integrate or differentiate graphs in the chart view.
```python
# OperationAPI_CreatingACalculus.py
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

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
curvePaths = List[str]()
curvePaths.Add(r'Displacement/Magnitude')

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
parameters.Target = "Crank"
parameters.Paths = curvePaths

# Add Curves (FilePath, Curve Parameter)
# FilePath - The path of the result to access.
# parameters - The class used as a parameter of the AddCurve function.
# The instance of the curve.
curves = chartView.AddCurves(result_file_path, parameters)

# Documentation Example
# Calculus - Differentiation
chartView.CreateDifferentiatedCurve(curves)

# Calculus - Integration
chartView.CreateIntegratedCurve(curves)

# Close the Page
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## Signal Processing
This example demonstrates how to create a signal processing.
It is perform data filtering and smoothing of graphs in the chart view.
```python
# OperationAPI_SignalProcessing.py
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

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
curvePaths = List[str]()
curvePaths.Add(r'Displacement/Magnitude')
curvePaths.Add(r'Displacement/Z')

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
# Signal Processing
# SeriesName - A list of curve names.
# FilteringType - The types of the filter are as follows.
# Order - As decreasing value, output would be more smooth.
# Cut off Frequency(Hz) (Low Cut off Frequency(Hz)) - The value of frequency1.
# High Cut off Frequency(Hz) - The value of frequency2.
chartView.CreateFiltering(curves, FilteringType.LowPass, 2, 100, 100)

# Signal Processing - Smoothing
# SeriesName - A list of curve names.
# SmoothingType - The types of the sommthing are as follows.
# PointsOfWindow - The number of points for window.
# PolyOrder - The value of polyOrder.
# chartView.CreateSmoothing(curves, SmoothingType.MovingWindowAveraging, 8, 2)

# Signal Processing - FrequencyWeighting
# SeriesName - # SeriesName - A list of curve names.
# WeightingType - The types of the weighting are as follows.
# AxisType - The types of the axis are as follows. chartView.CreateFrequencyWeighting(series, WeightingType.AWeighting, FrequencyAxisType.X)
chartView.CreateFrequencyWeighting(curves, WeightingType.AWeighting, FrequencyAxisType.X)

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## FFT
This example demonstrates how to create a fft.
It is transform data in the time domain to the frequency domain by using the Fast Fourier Transformation method (FFT) in the chart view.
```python
# OperationAPI_CreatingAFFT.py
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

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
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
# SeriesNames - A list of curve names.
# FFTType - Magnitude, Phase
# FFTWindowType - Rectangular, Triangular, Bartlett, Hanning, Hamming, Welch, BlackMan, None
# ScaleType - Original, Logarithm, Decibel
# Points - The number of data point for FFT
# Start - The start time for using FFT on target data series
# End - The end time for using FFT on target data series
chartView.CreateFFT(curves, FFTType.Magnitude, FFTWindowType.Rectangular, ScaleType.Original, 128, 0, 1.0)

# Close the Page
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## STFT
This example demonstrates how to create a stft.
The short time furrier transformation method(STFT) can transform the data in time domain to the frequency domain. this example describes how to create the STFT.
* The color map plot is supported through this operation.
```python
# OperationAPI_CreatingSTFT.py
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

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
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
chartView.CreateSTFT(data, fftNames)

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```