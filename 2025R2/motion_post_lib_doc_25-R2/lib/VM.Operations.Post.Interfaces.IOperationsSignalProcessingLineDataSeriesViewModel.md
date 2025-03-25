# Interface IOperationsSignalProcessingLineDataSeriesViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the signalprocessing line data series.

```python
public interface IOperationsSignalProcessingLineDataSeriesViewModel
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationsSignalProcessingLineDataSeriesViewModel.py
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
# Signal Processing
# SeriesName - A list of curve names.
# FilteringType - The types of the filter are as follows.
# Order - As decreasing value, output would be more smooth.
# Cut off Frequency(Hz) (Low Cut off Frequency(Hz)) - The value of frequency1.
# High Cut off Frequency(Hz) - The value of frequency2.
filtering = chartView.CreateFiltering(curves, FilteringType.LowPass, 2, 100, 100)
filtering[0].Order = 5
if filtering[0].FilteringType == FilteringType.LowPass:
    filtering[0].CutOffFrequency = 200
elif filtering[0].FilteringType == FilteringType.HighPass:
    filtering[0].CutOffFrequency = 200
elif filtering[0].FilteringType == FilteringType.BandPass:
    filtering[0].LowCutOffFrequency = 200
    filtering[0].HighCutOffFrequency = 200
elif filtering[0].FilteringType == FilteringType.BandStop:
    filtering[0].LowCutOffFrequency = 200
    filtering[0].HighCutOffFrequency = 200

# Signal Processing - Smoothing
# SeriesName - A list of curve names.
# SmoothingType - The types of the sommthing are as follows.
# PointsOfWindow - The number of points for window.
# PolyOrder - The value of polyOrder.
smoothing = chartView.CreateSmoothing(curves, SmoothingType.MovingWindowAveraging, 2, 2)
if smoothing[0].SmoothingType == SmoothingType.MovingWindowAveraging:
    smoothing[0].PointsOfWindow = 4
elif smoothing[0].SmoothingType == SmoothingType.SavitzkyGloay:
    smoothing[0].PointsOfWindow = 4
    smoothing[0].PolynomialOrder = 3

# Signal Processing - FrequencyWeighting
# SeriesName - # SeriesName - A list of curve names.
# WeightingType - The types of the weighting are as follows.
# AxisType - The types of the axis are as follows. chartView.CreateFrequencyWeighting(series, WeightingType.AWeighting, FrequencyAxisType.X)
frequencyWeight = chartView.CreateFrequencyWeighting(curves, WeightingType.AWeighting, FrequencyAxisType.X)
frequencyWeight[0].WeightingType = WeightingType.BWeighting
frequencyWeight[0].FrequencyAxisType = FrequencyAxisType.Y

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### CutOffFrequency

Gets or sets the value of the cut-off frequency.

```python
double CutOffFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](#VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel).

#### Remarks

Use this property to specify or retrieve the value of the cut-off frequency.

### FilteringType

Gets or sets the filtering type of signal processing.

```python
FilteringType FilteringType { get; set; }
```

#### Property Value

 FilteringType

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](#VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel).

#### Remarks

Use this property to specify or retrieve the filtering type of signal processing.
The supported types are:
<ul><li><xref href="VM.Models.Post.FilteringType.LowPass" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FilteringType.HighPass" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FilteringType.BandPass" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FilteringType.BandStop" data-throw-if-not-resolved="false"></xref></li></ul>

### FrequencyAxisType

Gets or sets the type of frequency axis.

```python
FrequencyAxisType FrequencyAxisType { get; set; }
```

#### Property Value

 FrequencyAxisType

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](#VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel).

#### Remarks

Use this property to specify or retrieve the type of frequency axis.
The supported types are:
<ul><li><xref href="VM.Models.Post.FrequencyAxisType.X" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FrequencyAxisType.Y" data-throw-if-not-resolved="false"></xref></li></ul>

### HighCutOffFrequency

Gets or sets the value of the high cut-off frequency.

```python
double HighCutOffFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](#VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel).

#### Remarks

Use this property to specify or retrieve the value of the high cut-off frequency.

### LowCutOffFrequency

Gets or sets the value of the low cut-off frequency.

```python
double LowCutOffFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](#VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel).

#### Remarks

Use this property to specify or retrieve the value of the low cut-off frequency.

### Order

Gets or sets the order of the filter, which represents the points of the window.

```python
int Order { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](#VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel).

#### Remarks

Use this property to specify or retrieve the order of the filter, which determines the points of the window.

### PointsOfWindow

Gets or sets the points of the window.

```python
int PointsOfWindow { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](#VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel).

#### Remarks

Use this property to specify or retrieve the points of the window.

### PolynomialOrder

Gets or sets the value of the polynomial order.

```python
int PolynomialOrder { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](#VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel).

#### Remarks

Use this property to specify or retrieve the value of the polynomial order.

### SignalProcessingType

Gets or sets the type of signal processing.

```python
SignalProcessingType SignalProcessingType { get; set; }
```

#### Property Value

 SignalProcessingType

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](#VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel).

#### Remarks

Use this property to specify or retrieve the type of signal processing.
The supported types are:
<ul><li><xref href="VM.Models.Post.SignalProcessingType.Filtering" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SignalProcessingType.Smoothing" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SignalProcessingType.FrequencyWeighting" data-throw-if-not-resolved="false"></xref></li></ul>

### SmoothingType

Gets or sets the type of smoothing.

```python
SmoothingType SmoothingType { get; set; }
```

#### Property Value

 SmoothingType

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](#VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel).

#### Remarks

Use this property to specify or retrieve the type of smoothing.
The supported types are:
<ul><li><xref href="VM.Models.Post.SmoothingType.MovingWindowAveraging" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SmoothingType.SavitzkyGloay" data-throw-if-not-resolved="false"></xref></li></ul>

### WeightingType

Gets or sets the type of weighting.

```python
WeightingType WeightingType { get; set; }
```

#### Property Value

 WeightingType

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](#VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel).

#### Remarks

Use this property to specify or retrieve the type of weighting.
The supported types are:
<ul><li><xref href="VM.Models.Post.WeightingType.AWeighting" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.WeightingType.BWeighting" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.WeightingType.CWeighting" data-throw-if-not-resolved="false"></xref></li></ul>


