# Interface IOperationsSignalProcessingLineDataSeriesViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the signalprocessing line data series.

```csharp
public interface IOperationsSignalProcessingLineDataSeriesViewModel
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationsSignalProcessingLineDataSeriesViewModel.py
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
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_CutOffFrequency"></a> CutOffFrequency

Gets or sets the value of the cut-off frequency.

```csharp
double CutOffFrequency { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the value of the cut-off frequency.

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_FilteringType"></a> FilteringType

Gets or sets the filtering type of signal processing.

```csharp
FilteringType FilteringType { get; set; }
```

#### Property Value

 FilteringType

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the filtering type of signal processing.
The supported types are:
<ul><li><xref href="VM.Models.Post.FilteringType.LowPass" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FilteringType.HighPass" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FilteringType.BandPass" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FilteringType.BandStop" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_FrequencyAxisType"></a> FrequencyAxisType

Gets or sets the type of frequency axis.

```csharp
FrequencyAxisType FrequencyAxisType { get; set; }
```

#### Property Value

 FrequencyAxisType

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the type of frequency axis.
The supported types are:
<ul><li><xref href="VM.Models.Post.FrequencyAxisType.X" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FrequencyAxisType.Y" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_HighCutOffFrequency"></a> HighCutOffFrequency

Gets or sets the value of the high cut-off frequency.

```csharp
double HighCutOffFrequency { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the value of the high cut-off frequency.

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_LowCutOffFrequency"></a> LowCutOffFrequency

Gets or sets the value of the low cut-off frequency.

```csharp
double LowCutOffFrequency { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the value of the low cut-off frequency.

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_Order"></a> Order

Gets or sets the order of the filter, which represents the points of the window.

```csharp
int Order { get; set; }
```

#### Property Value

 int

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the order of the filter, which determines the points of the window.

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_PointsOfWindow"></a> PointsOfWindow

Gets or sets the points of the window.

```csharp
int PointsOfWindow { get; set; }
```

#### Property Value

 int

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the points of the window.

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_PolynomialOrder"></a> PolynomialOrder

Gets or sets the value of the polynomial order.

```csharp
int PolynomialOrder { get; set; }
```

#### Property Value

 int

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the value of the polynomial order.

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_SignalProcessingType"></a> SignalProcessingType

Gets or sets the type of signal processing.

```csharp
SignalProcessingType SignalProcessingType { get; set; }
```

#### Property Value

 SignalProcessingType

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the type of signal processing.
The supported types are:
<ul><li><xref href="VM.Models.Post.SignalProcessingType.Filtering" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SignalProcessingType.Smoothing" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SignalProcessingType.FrequencyWeighting" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_SmoothingType"></a> SmoothingType

Gets or sets the type of smoothing.

```csharp
SmoothingType SmoothingType { get; set; }
```

#### Property Value

 SmoothingType

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the type of smoothing.
The supported types are:
<ul><li><xref href="VM.Models.Post.SmoothingType.MovingWindowAveraging" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SmoothingType.SavitzkyGloay" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_WeightingType"></a> WeightingType

Gets or sets the type of weighting.

```csharp
WeightingType WeightingType { get; set; }
```

#### Property Value

 WeightingType

#### Examples

For an example that includes this property, see the [Interface IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the type of weighting.
The supported types are:
<ul><li><xref href="VM.Models.Post.WeightingType.AWeighting" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.WeightingType.BWeighting" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.WeightingType.CWeighting" data-throw-if-not-resolved="false"></xref></li></ul>

