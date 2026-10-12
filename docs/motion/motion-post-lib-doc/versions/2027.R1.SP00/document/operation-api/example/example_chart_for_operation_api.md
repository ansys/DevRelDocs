# Chart
The following sample code illustrates how to create a simple example.
- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Create a ChartView
This example demonstrates how to create a chart view.
Chart view is useful for analyzing simulation results by using a graph which is composed of data points.
```python
# Example_OperationAPI_CreatingAChartView.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
chart_name = "Chart"
chart_view = page.CreateChart(chart_name)

# Set Background
chart_view.Background = Colors.Blue
chart_view.Legend.FontColor = Colors.Black
chart_view.Legend.ItemsInFilter = "Visible Curves"

# Close the Page
page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

## Creating Curves
This example demonstrates how to create a curve. A graph can be added to the activated chart view.
```python
# Example_OperationAPI_CreatingCurves.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
chart_name = "Chart"
chart_view = page.CreateChart(chart_name)

# Documentation Example
# Set array about combination of characteristic and component
curve_paths = List[str]()
# characteristic_path_magnitude : characteristic/component path of the curve to add, in "Characteristic/Component" format
characteristic_path_magnitude = r'Displacement/Magnitude'
curve_paths.Add(characteristic_path_magnitude)
# characteristic_path_z : characteristic/component path of the curve to add, in "Characteristic/Component" format
characteristic_path_z = r'Displacement/Z'
curve_paths.Add(characteristic_path_z)

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
entity_name = "Crank"
parameters.Target = entity_name

# Add Curves (FilePath, Curve Parameter)
# FilePath : The path of the result to access.
# parameters : The class used as a parameter of the AddCurve function.
# The instance of the curve.
curves = chart_view.AddCurves(RESULT_FILE_PATH, parameters)
count = len(curves)
if count > 0 :
    curves[0].SeriesName = r'Crank_DM'
    curves[0].Color = Colors.Blue
    curves[0].LineStyle = LineStyleType.Dot

# Close the Pages
page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```
## Simple Math
This example demonstrates how to create a simple math.
It is perform addition, subtraction and multiplication between graphs in the chart view. At least two graphs must be selected for the operation.
```python
# Example_OperationAPI_CreatingAPage.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Add a new page
# AddDocument already created a default page. This will create another page and activate it.
# You can specify the page name when the page is created.
page_name = "FirstPage"
page = application_handler.AddPage(page_name)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()
for page in pages :
    page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```
## Transform
This example demonstrates how to create a transform.
It is transform graphs through translate, align, scale, and absolute in the chart view.
```python
# Example_OperationAPI_CreatingATransform.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
chart_name = "Chart"
chart_view = page.CreateChart(chart_name)

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
curve_paths = List[str]()
# characteristic_path_magnitude : characteristic/component path of the curve to add, in "Characteristic/Component" format
characteristic_path_magnitude = r'Displacement/Magnitude'
curve_paths.Add(characteristic_path_magnitude)
# characteristic_path_z : characteristic/component path of the curve to add, in "Characteristic/Component" format
characteristic_path_z = r'Displacement/Z'
curve_paths.Add(characteristic_path_z)

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
entity_name = "Crank"
parameters.Target = entity_name

# Add Curves (FilePath, Curve Parameter)
# FilePath : The path of the result to access.
# parameters : The class used as a parameter of the AddCurve function.
# The instance of the curve.
curves = chart_view.AddCurves(RESULT_FILE_PATH, parameters)

# Documentation Example
# Transform : Translate
# OffsetX : The value to translate for X- axis.
# OffsetY : The value to translate for Y- axis.
offset_x = 0
offset_y = 100
chart_view.CreateTranslate(curves, offset_x, offset_y)

# Transform : Scale
# ScaleX : The value to scale for X- axis.
# ScaleY : The value to scale for Y- axis.
scale_x = 2
scale_y = 2
chart_view.CreateScale(curves, scale_x, scale_y)

# Transform : Absolute
# SignType : The types of the absolute value are as follows.
chart_view.CreateAbsolute(curves, SignType.Positive)

# Transform : Align (Zero, Curve)
# AlignType : The types of the alignment are as follows.
chart_view.CreateAlign(curves, AlignType.Curve)

# Transform : Log Scale
# Coeficient : The value of the coefficient.
# BaseValue : The value of the base.
# Decibel : Taking the decibel scale for the list of the curve (20Log_10(Y)).
chart_view.CreateLogScale(curves, 10, 10, False)

# Close the Pages
page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```
## Interpolation
This example demonstrates how to create a interpolation.
It is interpolate graphs with the desired number of data points in the chart view.
```python
# Example_OperationAPI_CreatingAInterpolation.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
chart_name = "Chart"
chart_view = page.CreateChart(chart_name)

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
curve_paths = List[str]()
# characteristic_path_magnitude : characteristic/component path of the curve to add, in "Characteristic/Component" format
characteristic_path_magnitude = r'Displacement/Magnitude'
curve_paths.Add(characteristic_path_magnitude)

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
entity_name = "Crank"
parameters.Target = entity_name

# Add Curves (FilePath, Curve Parameter)
# FilePath : The path of the result to access.
# parameters : The class used as a parameter of the AddCurve function.
# The instance of the curve.
curves = chart_view.AddCurves(RESULT_FILE_PATH, parameters)

# Documentation Example
# SeriesName : A list of curve names.
# Points : The number of the data points for interpolation.
point_count = 200
chart_view.CreateInterpolation(curves, point_count)

# Close the Page
page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

## Calculus
This example demonstrates how to create a calculus.
It is integrate or differentiate graphs in the chart view.
```python
# Example_OperationAPI_CreatingACalculus.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
chart_name = "Chart"
chart_view = page.CreateChart(chart_name)

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
curve_paths = List[str]()
# characteristic_path_magnitude : characteristic/component path of the curve to add, in "Characteristic/Component" format
characteristic_path_magnitude = r'Displacement/Magnitude'
curve_paths.Add(characteristic_path_magnitude)

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
entity_name = "Crank"
parameters.Target = entity_name
parameters.Paths = curve_paths

# Add Curves (FilePath, Curve Parameter)
# FilePath : The path of the result to access.
# parameters : The class used as a parameter of the AddCurve function.
# The instance of the curve.
curves = chart_view.AddCurves(RESULT_FILE_PATH, parameters)

# Documentation Example
# Calculus : Differentiation
chart_view.CreateDifferentiatedCurve(curves)

# Calculus : Integration
chart_view.CreateIntegratedCurve(curves)

# Close the Page
page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

## Signal Processing
This example demonstrates how to create a signal processing.
It is perform data filtering and smoothing of graphs in the chart view.
```python
# Example_OperationAPI_SignalProcessing.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
chart_name = "Chart"
chart_view = page.CreateChart(chart_name)

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
curve_paths = List[str]()
# characteristic_path_magnitude : characteristic/component path of the curve to add, in "Characteristic/Component" format
characteristic_path_magnitude = r'Displacement/Magnitude'
curve_paths.Add(characteristic_path_magnitude)
# characteristic_path_z : characteristic/component path of the curve to add, in "Characteristic/Component" format
characteristic_path_z = r'Displacement/Z'
curve_paths.Add(characteristic_path_z)

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
entity_name = "Crank"
parameters.Target = entity_name

# Add Curves (FilePath, Curve Parameter)
# FilePath : The path of the result to access.
# parameters : The class used as a parameter of the AddCurve function.
# The instance of the curve.
curves = chart_view.AddCurves(RESULT_FILE_PATH, parameters)

# Documentation Example
# Signal Processing
# SeriesName : A list of curve names.
# FilteringType : The types of the filter are as follows.
# Order : As decreasing value, output would be more smooth.
# Cut off Frequency(Hz) (Low Cut off Frequency(Hz)) : The value of frequency1.
# High Cut off Frequency(Hz) : The value of frequency2.
chart_view.CreateFiltering(curves, FilteringType.LowPass, 2, 100, 100)

# Signal Processing - Smoothing
# SeriesName : A list of curve names.
# SmoothingType : The types of the sommthing are as follows.
# PointsOfWindow : The number of points for window.
# PolyOrder : The value of polyOrder.
chart_view.CreateSmoothing(curves, SmoothingType.MovingWindowAveraging, 8, 2)

# Signal Processing - FrequencyWeighting
# SeriesName : A list of curve names.
# WeightingType : The types of the weighting are as follows.
# AxisType : The types of the axis are as follows. chart_view.CreateFrequencyWeighting(series, WeightingType.AWeighting, FrequencyAxisType.X)
chart_view.CreateFrequencyWeighting(curves, WeightingType.AWeighting, FrequencyAxisType.X)

# Close the Pages
page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

## FFT
This example demonstrates how to create a fft.
It is transform data in the time domain to the frequency domain by using the Fast Fourier Transformation method (FFT) in the chart view.
```python
# Example_OperationAPI_CreatingAFFT.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
chart_name = "Chart"
chart_view = page.CreateChart(chart_name)

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
curve_paths = List[str]()
# characteristic_path_magnitude : characteristic/component path of the curve to add, in "Characteristic/Component" format
characteristic_path_magnitude = r'Displacement/Magnitude'
curve_paths.Add(characteristic_path_magnitude)

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
entity_name = "Crank"
parameters.Target = entity_name

# Add Curves (FilePath, Curve Parameter)
# FilePath : The path of the result to access.
# parameters : The class used as a parameter of the AddCurve function.
# The instance of the curve.
curves = chart_view.AddCurves(RESULT_FILE_PATH, parameters)

# Documentation Example
# create_fft.py
# SeriesNames : A list of curve names.
# FFTType : Magnitude, Phase
# FFTWindowType : Rectangular, Triangular, Bartlett, Hanning, Hamming, Welch, BlackMan, None
# ScaleType : Original, Logarithm, Decibel
# Points : The number of data point for FFT
# Start : The start time for using FFT on target data series
# End : The end time for using FFT on target data series
point_count = 128
start = 0
end = 1.0
chart_view.CreateFFT(curves, FFTType.Magnitude, FFTWindowType.Rectangular, ScaleType.Original, point_count, start, end)

# Close the Page
page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

## STFT
This example demonstrates how to create a stft.
The short time furrier transformation method(STFT) can transform the data in time domain to the frequency domain. this example describes how to create the STFT.
* The color map plot is supported through this operation.
```python
# Example_OperationAPI_CreatingSTFT.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
chart_name = "Chart"
chart_view = page.CreateChart(chart_name)

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
curve_paths = List[str]()
# characteristic_path_magnitude : characteristic/component path of the curve to add, in "Characteristic/Component" format
characteristic_path_magnitude = r'Displacement/Magnitude'
curve_paths.Add(characteristic_path_magnitude)

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
entity_name = "Crank"
parameters.Target = entity_name

# Add Curves (FilePath, Curve Parameter)
# FilePath : The path of the result to access.
# parameters : The class used as a parameter of the AddCurve function.
# The instance of the curve.
curves = chart_view.AddCurves(RESULT_FILE_PATH, parameters)

# Documentation Example
# SeriesNames : The list of the curve name to perform the operation
curve_names = List[str]()
for curve in curves :
    curve_names.Add(curve.SeriesName)

# SamplingFrequency : the number of the interval for dividing Y direction grids on color map.
# TimeSlice : the number of the interval for dividing  X direction grids on color map.
# Overlap : the value of the percentage for setting overlapped intervals.
# SelectedPoints : the number of data point for FFT.
# Start : the start time for using FFT on target data series.
# End : the end time for using FFT on target data series.
# ReferenceValue : the reference value on decibel as the type of the scale.
# ScaleFactor : the scale factor to change from time domain to another domain.
# SelectedScaleType : the scale type of STFT. STFT Scale Type has Original, Decibel.
stft_parameters = STFTParameters()
stft_parameters.SamplingFrequency = 100
stft_parameters.TimeSlice = 0.05
stft_parameters.Overlap = 50
stft_parameters.SelectedPoints = 16384
stft_parameters.Start = 0
stft_parameters.End = 1.000000000001
stft_parameters.ReferenceValue = 1E-05
stft_parameters.ScaleFactor = 1.0
stft_parameters.SelectedScaleType = STFTScaleType.Original
chart_view.CreateSTFT(stft_parameters, curve_names)

# Close the Pages
page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```
