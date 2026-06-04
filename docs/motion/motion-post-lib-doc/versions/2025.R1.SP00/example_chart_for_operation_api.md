# Chart

The following sample code illustrates how to create a simple example.

* Refer to  operationapi.py in "Ansys installed path/Motion/Document/Postprocessor API for Python.zip"
* The example was created using "Ansys installed path/Motion/Document/Pre and Post Processor.zip"

## Create a ChartView

This example demonstrates how to create a chart view.
Chart view is useful for analyzing simulation results by using a graph which is composed of data points.

```
# Example_OperationAPI_CreateChart.py
# Refer to the OperationAPI.py file
import sys
references_path = __file__.rsplit('\\', 1)[0]
sys.path.append(references_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
# Get Install Path
# The 'XX' in AWP_ROOTXXX represents the year, like 25 for the year 2025, and the leat 'X' indicates the half of the year,
# where '1' represents the first half and '2' represents the second half.
# For example, in 'AWP_ROOT251' and 'AWP_ROOT252', '25' represents the year 2025, and '1' indicates the first half of the year,
# while '2' indicates the second half.
install_path = get_env_variable("AWP_ROOTXXX")

filepath = combine_path(install_path, r'Motion\Document\Pre and Post Processor\Model\Result\Suspension.dfr')

# Set array about result file
filepaths = List[str]()
filepaths.Add(filepath)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Get Page
page = applicationHandler.GetActivePage()

# Create PlotView
chartView = page.CreateChart("Chart")
chartView.Background = Colors.Blue
chartView.Legend.FontColor = Colors.Black
chartView.Legend.ItemsInFilter = "Visible Curves"
```

## Creating Curves

This example demonstrates how to create a curve. A graph can be added to the activated chart view. 
For combinations of paths(Characteristic, Component) on the curve, refer to Common settings in [Getting started with the Operation API using Python language](getting_started_operation_api_using_py.md).

```
# Example_OperationAPI_CreateCurve.py
# Set array about combination of characteristic and component
curvePaths = List[str]()
curvePaths.Add(r'Displacement/Magnitude')
curvePaths.Add(r'Displacement/Z')

# Set a Curve Parameter
parameters = PlotParameters()
parameters.Paths = curvePaths
parameters.Target = "Rack"

# Add Curves (FilePath, Curve Parameter)
# FilePath - The path of the result to access.
# parameters - The class used as a parameter of the AddCurve function.
# Return an array of curve instances.
curves = chartView.AddCurves(filepath, parameters)
count = len(curves)
if count > 0 :
    curves[0].SeriesName = r'Rack_DM'
    curves[0].Color = Colors.Blue
    curves[0].LineStyle = LineStyleType.Dot
```

## Simple Math

This example demonstrates how to create a simple math.
It is perform addition, subtraction and multiplication between graphs in the chart view. At least two graphs must be selected for the operation.
Refer to [Creating Curves](#create-curve) for curve generation.

```
# Example_OperationAPI_CreateSimpleMath.py
# seriesNames - The list of the curve name to perform the operation.
# simpleMathType - The types of the simple math are as follows.
# points - The number of data points for interpolation.

# Add
chartView.CreateSimpleMath(curves, SimpleMathType.Add, 100)

# Subtract
chartView.CreateSimpleMath(curves, SimpleMathType.Subtract, 100)

# Multiply
chartView.CreateSimpleMath(curves, SimpleMathType.Multiply, 100)
```

## Transform

This example demonstrates how to create a transform.
It is transform graphs through translate, align, scale, and absolute in the chart view.
Refer to [Creating Curves](#create-curve) for curve generation.

```
# Example_OperationAPI_CreateTransform.py
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
```

## Interpolation

This example demonstrates how to create a interpolation.
It is interpolate graphs with the desired number of data points in the chart view.
Refer to [Creating Curves](#create-curve) for curve generation.
```
# Example_OperationAPI_CreateInterpolation.py
# SeriesName - The list of the curve name to perform the operation.
# Points - The number of the data points for interpolation.
chartView.CreateInterpolation(curves, 200)
```

## Calculus

This example demonstrates how to create a calculus.
It is integrate or differentiate graphs in the chart view.
Refer to [Creating Curves](#create-curve) for curve generation.
```
# Example_OperationAPI_CreateCalculus.py
# Calculus - Differentiation
chartView.CreateDifferentiatedCurve(curves)

# Calculus - Integration
chartView.CreateIntegratedCurve(curves)
```

## Signal Processing

This example demonstrates how to create a signal processing.
It is perform data filtering and smoothing of graphs in the chart view.
Refer to [Creating Curves](#create-curve) for curve generation.
```
# Example_OperationAPI_CreateSignalProcessing.py
# Signal Processing - Filtering (LowPass, HighPass, BandPass, BandStop)
# SeriesName - The list of the curve name to perform the operation.
# FilteringType - The types of the filter are as follows.
# Order - As decreasing value, output would be more smooth.
# Cut off Frequency(Hz) (Low Cut off Frequency(Hz)) - The value of frequency1.
# High Cut off Frequency(Hz) - The value of frequency2.
chartView.CreateFiltering(curves, FilteringType.LowPass, 2, 100, 100)

# Signal Processing - Smoothing
# SeriesName - The list of the curve name to perform the operation. 
# SmoothingType - The types of the sommthing are as follows.
# PointsOfWindow - The number of points for window.
# PolyOrder - The value of polyOrder.
chartView.CreateSmoothing(curves, SmoothingType.MovingWindowAveraging, 8, 2)

# Signal Processing - FrequencyWeighting
# SeriesName - The list of the curve name to perform the operation.
# WeightingType - The types of the weighting are as follows.
# AxisType - The types of the axis are as follows. chartView.CreateFrequencyWeighting(series, WeightingType.AWeighting, FrequencyAxisType.X)
chartView.CreateFrequencyWeighting(curves, WeightingType.AWeighting, FrequencyAxisType.X)
```

## FFT

This example demonstrates how to create a fft.
It is transform data in the time domain to the frequency domain by using the Fast Fourier Transformation method (FFT) in the chart view.
Refer to [Creating Curves](#create-curve) for curve generation.
```
# Example_OperationAPI_CreateFFT.py
# SeriesNames - The list of the curve name to perform the operation
# FFTType - Magnitude, Phase
# FFTWindowType - Rectangular, Triangular, Bartlett, Hanning, Hamming, Welch, BlackMan, None
# ScaleType - Original, Logarithm, Decibel
# Points - The number of data point for FFT
# Start - The start time for using FFT on target data series
# End - The end time for using FFT on target data series
chartView.CreateFFT(curves, FFTType.Magnitude, FFTWindowType.Rectangular, ScaleType.Original, 128, 0, 1.0)
```

## STFT

This example demonstrates how to create a stft.
The short time furrier transformation method(STFT) can transform the data in time domain to the frequency domain. this example describes how to create the STFT.

* The color map plot is supported through this operation.
* Refer to [Creating Curves](#create-curve) for curve generation.
  
```
# Example_OperationAPI_CreateSTFT.py
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
```