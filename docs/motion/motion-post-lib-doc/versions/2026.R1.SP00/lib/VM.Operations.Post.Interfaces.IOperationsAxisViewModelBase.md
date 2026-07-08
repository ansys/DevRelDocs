# Interface IOperationsAxisViewModelBase
<a id="VM_Operations_Post_Interfaces_IOperationsAxisViewModelBase"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing common information for an axis view model.

```csharp
public interface IOperationsAxisViewModelBase
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationsAxisViewModelBase.py
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
axis = chartView.GetAxis("Y")
axis.Title = "YAxis"
axis.TitleSize = 16
axis.TitleWeight = OperationAPIService.GetFontWeightFromString("Bold")

# Close the Pages
page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsAxisViewModelBase_Title"></a> Title

Gets or sets the title of the axis.

```csharp
string Title { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationsAxisViewModelBase](VM.Operations.Post.Interfaces.IOperationsAxisViewModelBase.md).

#### Remarks

Use this property to specify or retrieve the title of the axis.

### <a id="VM_Operations_Post_Interfaces_IOperationsAxisViewModelBase_TitleSize"></a> TitleSize

Gets or sets the font size of the title.

```csharp
double TitleSize { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsAxisViewModelBase](VM.Operations.Post.Interfaces.IOperationsAxisViewModelBase.md).

#### Remarks

Use this property to specify or retrieve the font size of the title.

### <a id="VM_Operations_Post_Interfaces_IOperationsAxisViewModelBase_TitleWeight"></a> TitleWeight

Gets or sets the font weight of the title.

```csharp
FontWeight TitleWeight { get; set; }
```

#### Property Value

 FontWeight

#### Examples

For an example that includes this property, see the [Interface IOperationsAxisViewModelBase](VM.Operations.Post.Interfaces.IOperationsAxisViewModelBase.md).

#### Remarks

Use this property to specify or retrieve the font weight of the title.
The available options are:
<ul><li><xref href="System.Windows.FontWeights.Bold" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontWeights.Normal" data-throw-if-not-resolved="false"></xref></li></ul>

