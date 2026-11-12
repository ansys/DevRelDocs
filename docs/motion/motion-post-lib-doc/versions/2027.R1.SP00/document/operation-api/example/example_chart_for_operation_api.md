# Chart
<div align="right"><a href="/document/operation-api/example/example_chart_for_operation_api.md" download="example_chart_for_operation_api.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

The following sample code illustrates how to create a simple example.
- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Create a ChartView
This example demonstrates how to create a chart view.
Chart view is useful for analyzing simulation results by using a graph which is composed of data points.

Running this example creates a chart view named Chart on the active page with a blue background.
The legend font color is set to black and the legend items filter is set to Visible Curves.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_CreatingAChartView.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart_view = page.CreateChart(chart_name)

# Set Background
chart_view.Background = Colors.Blue
chart_view.Legend.FontColor = Colors.Black
chart_view.Legend.ItemsInFilter = "Visible Curves"
```

## Creating Curves
This example demonstrates how to create a curve. A graph can be added to the activated chart view.

Running this example creates a chart view named Chart on the active page and adds the Displacement/Magnitude and Displacement/Z curves of Crank to it.
The first curve is renamed Crank_DM and displayed in blue with a dotted line.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_CreatingCurves.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart_view = page.CreateChart(chart_name)

# Create a list of characteristic/component paths of the curves
# The characteristic/component paths of the curves to add, in "Characteristic/Component" format.
curve_paths = List[str]()
# Characteristic/component path of the curve to add, in "Characteristic/Component" format.
characteristic_path_magnitude = r'Displacement/Magnitude'
curve_paths.Add(characteristic_path_magnitude)
# Characteristic/component path of the curve to add, in "Characteristic/Component" format.
characteristic_path_z = r'Displacement/Z'
curve_paths.Add(characteristic_path_z)

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
# The name of the target entity.
entity_name = "Crank"
parameters.Target = entity_name

# Add Curves
# The curves added to the chart view.
curves = chart_view.AddCurves(RESULT_FILE_PATH, parameters)
# The number of curves added to the chart view.
count = len(curves)
if count > 0 :
    curves[0].SeriesName = r'Crank_DM'
    curves[0].Color = Colors.Blue
    curves[0].LineStyle = LineStyleType.Dot
```

## Simple Math
This example demonstrates how to create a simple math.
It performs addition, subtraction and multiplication between graphs in the chart view. At least two graphs must be selected for the operation.

Running this example creates a chart view named Chart on the active page and adds the Displacement/Magnitude and Displacement/Z curves of Crank to it.
It then creates three curves with 100 points each by adding, subtracting, and multiplying the two curves.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_CreatingASimpleMath.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart_view = page.CreateChart(chart_name)

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
# The characteristic/component paths of the curves to add, in "Characteristic/Component" format.
curve_paths = List[str]()
# Characteristic/component path of the curve to add, in "Characteristic/Component" format.
characteristic_path_magnitude = r'Displacement/Magnitude'
curve_paths.Add(characteristic_path_magnitude)
# Characteristic/component path of the curve to add, in "Characteristic/Component" format.
characteristic_path_z = r'Displacement/Z'
curve_paths.Add(characteristic_path_z)

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
# The name of the target entity.
entity_name = "Crank"
parameters.Target = entity_name

# Add Curves
# The curves added to the chart view.
curves = chart_view.AddCurves(RESULT_FILE_PATH, parameters)

# The number of data points of each created curve.
point_count = 100

# Create a curve by adding the curves
chart_view.CreateSimpleMath(curves, SimpleMathType.Add, point_count)

# Create a curve by subtracting the curves
chart_view.CreateSimpleMath(curves, SimpleMathType.Subtract, point_count)

# Create a curve by multiplying the curves
chart_view.CreateSimpleMath(curves, SimpleMathType.Multiply, point_count)
```

## Transform
This example demonstrates how to create a transform.
It transforms graphs through translate, align, scale, and absolute in the chart view.

Running this example creates a chart view named Chart on the active page and adds the Displacement/Magnitude and Displacement/Z curves of Crank to it.
It then creates transformed curves from the two curves with translate, scale, absolute, align, and log scale operations.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_CreatingATransform.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart_view = page.CreateChart(chart_name)

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
# The characteristic/component paths of the curves to add, in "Characteristic/Component" format.
curve_paths = List[str]()
# Characteristic/component path of the curve to add, in "Characteristic/Component" format.
characteristic_path_magnitude = r'Displacement/Magnitude'
curve_paths.Add(characteristic_path_magnitude)
# Characteristic/component path of the curve to add, in "Characteristic/Component" format.
characteristic_path_z = r'Displacement/Z'
curve_paths.Add(characteristic_path_z)

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
# The name of the target entity.
entity_name = "Crank"
parameters.Target = entity_name

# Add Curves
# The curves added to the chart view.
curves = chart_view.AddCurves(RESULT_FILE_PATH, parameters)

# Translate the curves
# The value to translate for X- axis.
offset_x = 0
# The value to translate for Y- axis.
offset_y = 100
chart_view.CreateTranslate(curves, offset_x, offset_y)

# Scale the curves
# The value to scale for X- axis.
scale_x = 2
# The value to scale for Y- axis.
scale_y = 2
chart_view.CreateScale(curves, scale_x, scale_y)

# Take the absolute value of the curves
# The sign type can be Positive or Negative.
chart_view.CreateAbsolute(curves, SignType.Positive)

# Align the curves
# The align type can be Zero or Curve.
chart_view.CreateAlign(curves, AlignType.Curve)

# Apply a log scale to the curves
# The value of the coefficient.
coefficient = 10
# The value of the base.
base_value = 10
# True to take the decibel scale for the curves (20Log_10(Y)).
is_decibel = False
chart_view.CreateLogScale(curves, coefficient, base_value, is_decibel)
```

## Interpolation
This example demonstrates how to create an interpolation.
It interpolates graphs with the desired number of data points in the chart view.

Running this example creates a chart view named Chart on the active page and adds the Displacement/Magnitude curve of Crank to it.
It then creates an interpolated curve with 200 data points from that curve.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_CreatingAInterpolation.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart_view = page.CreateChart(chart_name)

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
# The characteristic/component paths of the curves to add, in "Characteristic/Component" format.
curve_paths = List[str]()
# Characteristic/component path of the curve to add, in "Characteristic/Component" format.
characteristic_path_magnitude = r'Displacement/Magnitude'
curve_paths.Add(characteristic_path_magnitude)

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
# The name of the target entity.
entity_name = "Crank"
parameters.Target = entity_name

# Add Curves
# The curves added to the chart view.
curves = chart_view.AddCurves(RESULT_FILE_PATH, parameters)

# Create an interpolated curve of the curves
# The number of the data points for the interpolation.
point_count = 200
chart_view.CreateInterpolation(curves, point_count)
```

## Calculus
This example demonstrates how to create a calculus.
It integrates or differentiates graphs in the chart view.

Running this example creates a chart view named Chart on the active page and adds the Displacement/Magnitude curve of Crank to it.
It then creates a differentiated curve and an integrated curve from that curve.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_CreatingACalculus.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart_view = page.CreateChart(chart_name)

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
# The characteristic/component paths of the curves to add, in "Characteristic/Component" format.
curve_paths = List[str]()
# Characteristic/component path of the curve to add, in "Characteristic/Component" format.
characteristic_path_magnitude = r'Displacement/Magnitude'
curve_paths.Add(characteristic_path_magnitude)

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
# The name of the target entity.
entity_name = "Crank"
parameters.Target = entity_name
parameters.Paths = curve_paths

# Add Curves
# The curves added to the chart view.
curves = chart_view.AddCurves(RESULT_FILE_PATH, parameters)

# Create a differentiated curve of the curves
chart_view.CreateDifferentiatedCurve(curves)

# Create an integrated curve of the curves
chart_view.CreateIntegratedCurve(curves)
```

## Signal Processing
This example demonstrates how to create a signal processing.
It performs data filtering and smoothing of graphs in the chart view.

Running this example creates a chart view named Chart on the active page and adds the Displacement/Magnitude and Displacement/Z curves of Crank to it.
It then creates curves from the two curves with low-pass filtering, moving window averaging smoothing, and A-weighting frequency weighting.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_SignalProcessing.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart_view = page.CreateChart(chart_name)

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
# The characteristic/component paths of the curves to add, in "Characteristic/Component" format.
curve_paths = List[str]()
# Characteristic/component path of the curve to add, in "Characteristic/Component" format.
characteristic_path_magnitude = r'Displacement/Magnitude'
curve_paths.Add(characteristic_path_magnitude)
# Characteristic/component path of the curve to add, in "Characteristic/Component" format.
characteristic_path_z = r'Displacement/Z'
curve_paths.Add(characteristic_path_z)

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
# The name of the target entity.
entity_name = "Crank"
parameters.Target = entity_name

# Add Curves
# The curves added to the chart view.
curves = chart_view.AddCurves(RESULT_FILE_PATH, parameters)

# Signal Processing - Filtering
# The filtering type can be LowPass, HighPass, BandPass, or BandStop.
# As the value decreases, the output becomes smoother.
order = 2
# The value of the cut off frequency(Hz) (low cut off frequency(Hz)).
low_cutoff_frequency = 100
# The value of the high cut off frequency(Hz).
high_cutoff_frequency = 100
chart_view.CreateFiltering(curves, FilteringType.LowPass, order, low_cutoff_frequency, high_cutoff_frequency)

# Signal Processing - Smoothing
# The smoothing type can be MovingWindowAveraging or SavitzkyGloay.
# The number of points for the window.
points_of_window = 8
# The polynomial order.
poly_order = 2
chart_view.CreateSmoothing(curves, SmoothingType.MovingWindowAveraging, points_of_window, poly_order)

# Signal Processing - FrequencyWeighting
# The weighting type can be AWeighting, BWeighting, or CWeighting.
# The axis type can be X or Y.
chart_view.CreateFrequencyWeighting(curves, WeightingType.AWeighting, FrequencyAxisType.X)
```

## FFT
This example demonstrates how to create an FFT.
It transforms data in the time domain to the frequency domain by using the Fast Fourier Transformation method (FFT) in the chart view.

Running this example creates a chart view named Chart on the active page and adds the Displacement/Magnitude curve of Crank to it.
It then creates an FFT magnitude curve from that curve with a rectangular window and 128 points over the range from 0 to 1.0.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_CreatingAFFT.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart_view = page.CreateChart(chart_name)

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
# The characteristic/component paths of the curves to add, in "Characteristic/Component" format.
curve_paths = List[str]()
# Characteristic/component path of the curve to add, in "Characteristic/Component" format.
characteristic_path_magnitude = r'Displacement/Magnitude'
curve_paths.Add(characteristic_path_magnitude)

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
# The name of the target entity.
entity_name = "Crank"
parameters.Target = entity_name

# Add Curves
# The curves added to the chart view.
curves = chart_view.AddCurves(RESULT_FILE_PATH, parameters)

# Create an FFT of the curves
# The FFT type can be Magnitude or Phase.
# The window type can be Rectangular, Triangular, Bartlett, Hanning, Hamming, Welch, BlackMan, or None.
# The scale type can be Original, Logarithm, or Decibel.
# The number of data points for the FFT.
point_count = 128
# The start time for using the FFT on the target curves.
start = 0
# The end time for using the FFT on the target curves.
end = 1.0
chart_view.CreateFFT(curves, FFTType.Magnitude, FFTWindowType.Rectangular, ScaleType.Original, point_count, start, end)
```

## STFT
This example demonstrates how to create an STFT.
The short time Fourier transformation method (STFT) can transform the data in time domain to the frequency domain. This example describes how to create the STFT.
* The color map plot is supported through this operation.

Running this example creates a chart view named Chart on the active page and adds the Displacement/Magnitude curve of Crank to it.
It then creates an STFT of that curve with a sampling frequency of 100 and a time slice of 0.05.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_CreatingSTFT.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart_view = page.CreateChart(chart_name)

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
# The characteristic/component paths of the curves to add, in "Characteristic/Component" format.
curve_paths = List[str]()
# Characteristic/component path of the curve to add, in "Characteristic/Component" format.
characteristic_path_magnitude = r'Displacement/Magnitude'
curve_paths.Add(characteristic_path_magnitude)

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
# The name of the target entity.
entity_name = "Crank"
parameters.Target = entity_name

# Add Curves
# The curves added to the chart view.
curves = chart_view.AddCurves(RESULT_FILE_PATH, parameters)

# The list of the curve names to perform the operation.
curve_names = List[str]()
for curve in curves :
    curve_names.Add(curve.SeriesName)

# The STFT parameters.
stft_parameters = STFTParameters()
# The number of the interval for dividing Y direction grids on color map.
stft_parameters.SamplingFrequency = 100
# The number of the interval for dividing X direction grids on color map.
stft_parameters.TimeSlice = 0.05
# The value of the percentage for setting overlapped intervals.
stft_parameters.Overlap = 50
# The number of data point for FFT.
stft_parameters.SelectedPoints = 16384
# The start time for using FFT on target data series.
stft_parameters.Start = 0
# The end time for using FFT on target data series.
stft_parameters.End = 1.000000000001
# The reference value on decibel as the type of the scale.
stft_parameters.ReferenceValue = 1E-05
# The scale factor to change from time domain to another domain.
stft_parameters.ScaleFactor = 1.0
# The scale type of STFT. STFT Scale Type has Original, Decibel.
stft_parameters.SelectedScaleType = STFTScaleType.Original
chart_view.CreateSTFT(stft_parameters, curve_names)
```
