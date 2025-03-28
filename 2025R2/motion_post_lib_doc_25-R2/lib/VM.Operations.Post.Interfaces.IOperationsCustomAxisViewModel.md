# Interface IOperationsCustomAxisViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Defines the properties for a custom axis view model in an operations.

```python
public interface IOperationsCustomAxisViewModel : IOperationsAxisViewModelBase
```

#### Implements

[IOperationsAxisViewModelBase](VM.Operations.Post.Interfaces.IOperationsAxisViewModelBase.md)

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationsCustomAxisViewModel.py
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

# Set Background
axis = chartView.GetAxis("Y")
axis.LabelSize = 16
axis.LabelWeight = OperationAPIService.GetFontWeightFromString("Bold")
axis.FontColor = Colors.Red
axis.FontFace = FontFamily("Arial")
axis.Style = OperationAPIService.GetFontStyleFromString("Italic")

if axis.Default == False :
    axis.Decimal = 2
    axis.LabelFormatType = LabelFormatType.Number

if axis.IsAuto == False:
    axis.ScaleInterval = 5.0
    axis.ScaleMax = 100
    axis.ScaleMin = 10

axis.AxisType = AxisType.PositiveLogarithmic
if axis.AxisType == AxisType.PositiveLogarithmic:
    axis.LogarithmicBase = "10"

# Close the Pages
page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### AxisType

Gets or sets the scale type for the axis.

```python
AxisType AxisType { get; set; }
```

#### Property Value

 AxisType

#### Examples

For an example that includes this property, see the [Interface IOperationsCustomAxisViewModel](#VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel).

#### Remarks

Use this property to specify or retrieve the scale type for the axis. The available options are:
<ul><li><xref href="VM.Models.Post.AxisType.Linear" data-throw-if-not-resolved="false"></xref> - Linear scale.</li><li><xref href="VM.Models.Post.AxisType.PositiveLogarithmic" data-throw-if-not-resolved="false"></xref> - Positive logarithmic scale.</li><li><xref href="VM.Models.Post.AxisType.NegativeLogarithmic" data-throw-if-not-resolved="false"></xref> - Negative logarithmic scale.</li></ul>

### Decimal

Gets or sets the number of decimal places for the labels on the axis.

```python
int Decimal { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

For an example that includes this property, see the [Interface IOperationsCustomAxisViewModel](#VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel).

#### Remarks

Use this property to specify or retrieve the number of decimal places displayed in the labels on the axis.

### Default

Gets or sets a value indicating whether the decimal value for the axis labels is set automatically or manually.

```python
bool Default { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsCustomAxisViewModel](#VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel).

#### Remarks

Use this property to specify whether the decimal value for the axis labels should be set automatically or manually.
If set to <code>false</code>, you can manually set the <xref href="VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.Decimal" data-throw-if-not-resolved="false"></xref> property to determine the number of decimal places.

### FontColor

Gets or sets the color of the labels on the axis.

```python
Color FontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

For an example that includes this property, see the [Interface IOperationsCustomAxisViewModel](#VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel).

#### Remarks

Use this property to specify or retrieve the color of the labels displayed on the axis.

### FontFace

Gets or sets the font family for the axis labels.

```python
FontFamily FontFace { get; set; }
```

#### Property Value

 [FontFamily](https://learn.microsoft.com/dotnet/api/system.windows.media.fontfamily)

#### Examples

For an example that includes this property, see the [Interface IOperationsCustomAxisViewModel](#VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel).

#### Remarks

Use this property to specify or retrieve the font family used for the labels on the axis.

### IsAuto

Gets or sets a value indicating whether the axis range intervals are set automatically or manually.

```python
bool IsAuto { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsCustomAxisViewModel](#VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel).

#### Remarks

Use this property to specify whether the axis range intervals should be set automatically or manually.
If set to <code>false</code>, you can manually set the intervals for the axis range.

### LabelFormatType

Gets or sets the format type for the labels on the axis.

```python
LabelFormatType LabelFormatType { get; set; }
```

#### Property Value

 LabelFormatType

#### Examples

For an example that includes this property, see the [Interface IOperationsCustomAxisViewModel](#VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel).

#### Remarks

Use this property to specify or retrieve the format type for the decimal values displayed in the labels on the axis.
The available options are:
<ul><li><xref href="VM.Models.Post.LabelFormatType.Exponential" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LabelFormatType.Number" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LabelFormatType.General" data-throw-if-not-resolved="false"></xref></li></ul>

### LabelSize

Gets or sets the font size of the labels on the axis.

```python
double LabelSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsCustomAxisViewModel](#VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel).

#### Remarks

Use this property to specify or retrieve the font size of the labels displayed on the axis.

### LabelWeight

Gets or sets the font weight of the labels on the axis.

```python
FontWeight LabelWeight { get; set; }
```

#### Property Value

 [FontWeight](https://learn.microsoft.com/dotnet/api/system.windows.fontweight)

#### Examples

For an example that includes this property, see the [Interface IOperationsCustomAxisViewModel](#VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel).

#### Remarks

Use this property to specify or retrieve the font weight of the labels displayed on the axis.
The available options are:
<ul><li><xref href="System.Windows.FontWeights.Bold" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontWeights.Normal" data-throw-if-not-resolved="false"></xref></li></ul>

### LogarithmicBase

Gets or sets the base for the logarithmic scale of the axis.

```python
string LogarithmicBase { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

For an example that includes this property, see the [Interface IOperationsCustomAxisViewModel](#VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel).

#### Remarks

This property is only applicable when the <xref href="VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.AxisType" data-throw-if-not-resolved="false"></xref> is set to <xref href="VM.Models.Post.AxisType.PositiveLogarithmic" data-throw-if-not-resolved="false"></xref> or <xref href="VM.Models.Post.AxisType.NegativeLogarithmic" data-throw-if-not-resolved="false"></xref>. 
Use this property to specify or retrieve the base value for the logarithmic scale displayed on the axis.
Supported values are:
- "2"
- "3"
- "4"
- "5"
- "10"
- "E"

### ScaleInterval

Gets or sets the scale interval of the axis.

```python
double ScaleInterval { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsCustomAxisViewModel](#VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel).

#### Remarks

This property is only applicable when <xref href="VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.IsAuto" data-throw-if-not-resolved="false"></xref> is set to <code>false</code>. 
Use this property to manually set the intervals for the axis range.

### ScaleMax

Gets or sets the maximum value of the axis scale.

```python
double ScaleMax { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsCustomAxisViewModel](#VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel).

#### Remarks

This property is only applicable when <xref href="VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.IsAuto" data-throw-if-not-resolved="false"></xref> is set to <code>false</code>. 
Use this property to manually set the maximum value for the axis scale.

### ScaleMin

Gets or sets the minimum value of the axis scale.

```python
double ScaleMin { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsCustomAxisViewModel](#VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel).

#### Remarks

This property is only applicable when <xref href="VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.IsAuto" data-throw-if-not-resolved="false"></xref> is set to <code>false</code>. 
Use this property to manually set the minimum value for the axis scale.

### Style

Gets or sets the font style for the axis.

```python
FontStyle Style { get; set; }
```

#### Property Value

 [FontStyle](https://learn.microsoft.com/dotnet/api/system.windows.fontstyle)

#### Examples

For an example that includes this property, see the [Interface IOperationsCustomAxisViewModel](#VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel).

#### Remarks

Use this property to specify or retrieve the font style used for the axis.
The available options are:
<ul><li><xref href="System.Windows.FontStyles.Italic" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontStyles.Normal" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontStyles.Oblique" data-throw-if-not-resolved="false"></xref></li></ul>

### Unit

Gets the unit of the axis.

```python
string Unit { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

For an example that includes this property, see the [Interface IOperationsCustomAxisViewModel](#VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel).

#### Remarks

Use this property to specify or retrieve the unit displayed on the axis.


