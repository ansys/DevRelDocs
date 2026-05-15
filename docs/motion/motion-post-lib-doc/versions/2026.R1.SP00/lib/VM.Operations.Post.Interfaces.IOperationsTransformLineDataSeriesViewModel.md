# Interface IOperationsTransformLineDataSeriesViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the transform line data series.

```csharp
public interface IOperationsTransformLineDataSeriesViewModel
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationsTransformLineDataSeriesViewModel.py
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
translates = chartView.CreateTranslate(curves, 0, 100)
translates[0].OffsetX = 10
translates[0].OffsetY = 10

# Transform - Scale
# ScaleX - The value to scale for X- axis.
# ScaleY - The value to scale for Y- axis.
scales = chartView.CreateScale(curves, 2, 2)
scales[0].ScaleX = 0.5
scales[0].ScaleY = 0.5

# Transform - Absolute
# SignType - The types of the absolute value are as follows.
absolutes = chartView.CreateAbsolute(curves, SignType.Positive)
absolutes[0].Sign = SignType.Negative

# Transform - Align (Zero, Curve)
# AlignType - The types of the alignment are as follows.
aligns = chartView.CreateAlign(curves, AlignType.Curve)
aligns[0].Align = AlignType.Zero

# Transform - Log Scale
# Coeficient - The value of the coefficient.
# BaseValue - The value of the base.
# Decibel - Taking the decibel scale for the list of the curve (20Log_10(Y)).
logscales = chartView.CreateLogScale(curves, 10, 10, False)
logscales[0].Coefficient = 2.0
logscales[0].Base = "5"
logscales[0].IsDecibel = True

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_Align"></a> Align

Gets or sets the type of alignment.

```csharp
AlignType Align { get; set; }
```

#### Property Value

 AlignType

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the type of alignment.
The supported types are:
<ul><li><xref href="VM.Models.Post.AlignType.Zero" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.AlignType.Curve" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_Base"></a> Base

Gets or sets the base of the logarithm.

```csharp
string Base { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the base value for the logarithm.
Supported values are:
- "2"
- "3"
- "4"
- "5"
- "10"
- "E"

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_Coefficient"></a> Coefficient

Gets or sets the coefficient of the logarithm.

```csharp
double Coefficient { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the coefficient value for the logarithm.

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_IsDecibel"></a> IsDecibel

Gets or sets a value indicating whether the decibel scale is used.

```csharp
bool IsDecibel { get; set; }
```

#### Property Value

 bool

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve whether the decibel scale is used.

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_OffsetX"></a> OffsetX

Gets or sets the value for the X offset.

```csharp
double OffsetX { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the value for the X offset.

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_OffsetY"></a> OffsetY

Gets or sets the value for the Y offset.

```csharp
double OffsetY { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the value for the Y offset.

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_ScaleX"></a> ScaleX

Gets or sets the value for the X scale.

```csharp
double ScaleX { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the value for the X scale.

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_ScaleY"></a> ScaleY

Gets or sets the value for the Y scale.

```csharp
double ScaleY { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the value for the Y scale.

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_SelectedTransformType"></a> SelectedTransformType

Gets or sets the type of transform.

```csharp
string SelectedTransformType { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the type of transform.
The supported types are:
<ul><li><xref href="VM.Models.Post.TransformType.Translate" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.TransformType.LinearScale" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.TransformType.Absolute" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.TransformType.Align" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.TransformType.LogScale" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_Sign"></a> Sign

Gets or sets the type of sign.

```csharp
SignType Sign { get; set; }
```

#### Property Value

 SignType

#### Examples

For an example that includes this property, see the [Interface IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the type of sign.
The supported types are:
<ul><li><xref href="VM.Models.Post.SignType.Positive" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SignType.Negative" data-throw-if-not-resolved="false"></xref></li></ul>

