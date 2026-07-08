#  Interface IOperationsAxisViewModelBase

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing common information for an axis view model.

```python
public interface IOperationsAxisViewModelBase
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationsAxisViewModelBase.py
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
axis.Title = "YAxis"
axis.TitleSize = 16
axis.TitleWeight = OperationAPIService.GetFontWeightFromString("Bold")

# Close the Pages
page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsAxisViewModelBase_Title"></a> Title

Gets or sets the title of the axis.

```python
string Title { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

For an example that includes this property, see the [Interface IOperationsAxisViewModelBase](VM.Operations.Post.Interfaces.IOperationsAxisViewModelBase.md).

#### Remarks

Use this property to specify or retrieve the title of the axis.

### <a id="VM_Operations_Post_Interfaces_IOperationsAxisViewModelBase_TitleSize"></a> TitleSize

Gets or sets the font size of the title.

```python
double TitleSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsAxisViewModelBase](VM.Operations.Post.Interfaces.IOperationsAxisViewModelBase.md).

#### Remarks

Use this property to specify or retrieve the font size of the title.

### <a id="VM_Operations_Post_Interfaces_IOperationsAxisViewModelBase_TitleWeight"></a> TitleWeight

Gets or sets the font weight of the title.

```python
FontWeight TitleWeight { get; set; }
```

#### Property Value

 [FontWeight](https://learn.microsoft.com/dotnet/api/system.windows.fontweight)

#### Examples

For an example that includes this property, see the [Interface IOperationsAxisViewModelBase](VM.Operations.Post.Interfaces.IOperationsAxisViewModelBase.md).

#### Remarks

Use this property to specify or retrieve the font weight of the title.
The available options are:
<ul><li><xref href="System.Windows.FontWeights.Bold" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontWeights.Normal" data-throw-if-not-resolved="false"></xref></li></ul>


