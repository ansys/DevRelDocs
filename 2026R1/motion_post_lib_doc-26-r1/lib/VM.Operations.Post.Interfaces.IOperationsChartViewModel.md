# Interface IOperationsChartViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsChartViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents the base interface for properties and methods that make up a chart view.

```csharp
public interface IOperationsChartViewModel : IView
```

#### Implements

[IView](VM.Operations.Post.Interfaces.IView.md)

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationsChartViewModel.py
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

chartView.Legend.Background = Colors.Red
chartView.Legend.FontColor = Colors.Black
chartView.Legend.FontFace = FontFamily("Arial")
chartView.Legend.FontSize = 15
chartView.Legend.FontStyle = OperationAPIService.GetFontStyleFromString("Italic")
chartView.Legend.FontWeight = OperationAPIService.GetFontWeightFromString("Bold")
chartView.Legend.LegendPlacement = LegendPlacementType.Bottom
chartView.Legend.ItemsInFilter = "Visible Curves"

# Close the Pages
page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsChartViewModel_Legend"></a> Legend

Get or sets the legend for the chart.

```csharp
IOperationsLegendModifier Legend { get; }
```

#### Property Value

 [IOperationsLegendModifier](VM.Operations.Post.Interfaces.IOperationsLegendModifier.md)

#### Examples

For an example that includes this property, see the [Interface IOperationsChartViewModel](VM.Operations.Post.Interfaces.IOperationsChartViewModel.md).

#### Remarks

The Legend property allows you to control the appearance and behavior of the chart's legend.
Through this property, you can access various attributes of the legend and adjust them to fit your
specific requirements.

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsChartViewModel_ImportNumeric_System_String_System_Collections_Generic_List_VM_ViewModels_Post_INumericParameter__"></a> ImportNumeric\(string, List<INumericParameter\>\)

Imports curve data from an external file and adds the curves to the chart view.

```csharp
void ImportNumeric(string filepath, List<INumericParameter> targets)
```

#### Parameters

`filepath` string

The path to the file containing the exported curves. Supported file formats include (*.txt, *.csv, *.out, *.rsp).

`targets` List<INumericParameter\>

A list of <xref href="VM.ViewModels.Post.INumericParameter" data-throw-if-not-resolved="false"></xref> objects that specify the parameters for the curves to be created.

#### Examples

For an example that includes this property, see the [Interface ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method reads curve data from the specified file and adds the corresponding curves to the chart view.
Each <xref href="VM.ViewModels.Post.INumericParameter" data-throw-if-not-resolved="false"></xref> in the <code class="paramref">targets</code> list contains the following properties:
<ul><li><span class="term">Name</span>The name of the curve to be created.</li><li><span class="term">TargetX</span>The path to the data for the X-axis.</li><li><span class="term">TargetY</span>The path to the data for the Y-axis.</li></ul>

