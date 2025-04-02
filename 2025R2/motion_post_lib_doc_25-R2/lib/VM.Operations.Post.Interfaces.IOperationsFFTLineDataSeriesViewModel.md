#  Interface IOperationsFFTLineDataSeriesViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the fft line data series.

```python
public interface IOperationsFFTLineDataSeriesViewModel
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationsFFTLineDataSeriesViewModel.py
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
# SeriesNames - A list of curve names.
# FFTType - Magnitude, Phase
# FFTWindowType - Rectangular, Triangular, Bartlett, Hanning, Hamming, Welch, BlackMan, None
# ScaleType - Original, Logarithm, Decibel
# Points - The number of data point for FFT
# Start - The start time for using FFT on target data series
# End - The end time for using FFT on target data series
ffts = chartView.CreateFFT(curves, FFTType.Magnitude, FFTWindowType.Rectangular, ScaleType.Original, 128, 0, 1.0)

ffts[0].Start = 0.02
ffts[0].End = 1.0
ffts[0].FFTScaleType = ScaleType.Logarithm
ffts[0].FFTType = FFTType.Phase
ffts[0].FFTWindowType = FFTWindowType.Hanning
ffts[0].SelectedPoints = 512

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_End"></a> End

Gets or sets the end time for using FFT on the target data series.

```python
double End { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsFFTLineDataSeriesViewModel](#VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel).

#### Remarks

Use this property to specify or retrieve the end time for performing FFT on the target data series.

### <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_FFTScaleType"></a> FFTScaleType

Gets or sets the scale type of FFT.

```python
ScaleType FFTScaleType { get; set; }
```

#### Property Value

 ScaleType

#### Examples

For an example that includes this property, see the [Interface IOperationsFFTLineDataSeriesViewModel](#VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel).

#### Remarks

Use this property to specify or retrieve the scale type for FFT.
The supported types are:
<ul><li><xref href="VM.Models.Post.ScaleType.Decibel" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ScaleType.Logarithm" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ScaleType.Original" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_FFTType"></a> FFTType

Gets or sets the type of FFT.

```python
FFTType FFTType { get; set; }
```

#### Property Value

 FFTType

#### Examples

For an example that includes this property, see the [Interface IOperationsFFTLineDataSeriesViewModel](#VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel).

#### Remarks

Use this property to specify or retrieve the type of FFT.
The supported types are:
<ul><li><xref href="VM.Models.Post.FFTType.Magnitude" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTType.Phase" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_FFTWindowType"></a> FFTWindowType

Gets or sets the window type of FFT.

```python
FFTWindowType FFTWindowType { get; set; }
```

#### Property Value

 FFTWindowType

#### Examples

For an example that includes this property, see the [Interface IOperationsFFTLineDataSeriesViewModel](#VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel).

#### Remarks

Use this property to specify or retrieve the window type for FFT.
The supported types are:
<ul><li><xref href="VM.Models.Post.FFTWindowType.Bartlett" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.BlackMan" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Hamming" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Hanning" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.None" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Rectangular" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Triangular" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FFTWindowType.Welch" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_SelectedPoints"></a> SelectedPoints

Gets or sets the number of data points for FFT.

```python
int SelectedPoints { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

For an example that includes this property, see the [Interface IOperationsFFTLineDataSeriesViewModel](#VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel).

#### Remarks

Use this property to specify or retrieve the number of data points to be used for FFT.

### <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_Start"></a> Start

Gets or sets the start time for using FFT on the target data series.

```python
double Start { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsFFTLineDataSeriesViewModel](#VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel).

#### Remarks

Use this property to specify or retrieve the start time for performing FFT on the target data series.


