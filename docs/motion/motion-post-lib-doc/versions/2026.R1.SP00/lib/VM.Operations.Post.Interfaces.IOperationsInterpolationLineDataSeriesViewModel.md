# Interface IOperationsInterpolationLineDataSeriesViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsInterpolationLineDataSeriesViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the interpolation line data series.

```csharp
public interface IOperationsInterpolationLineDataSeriesViewModel
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationsInterpolationLineDataSeriesViewModel.py
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
# SeriesName - A list of curve names.
# Points - The number of the data points for interpolation.
chartView.CreateInterpolation(curves, 200)

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsInterpolationLineDataSeriesViewModel_Points"></a> Points

Gets or sets the number of data points for interpolation.

```csharp
int Points { get; set; }
```

#### Property Value

 int

#### Examples

For an example that includes this property, see the [Interface IOperationsInterpolationLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsInterpolationLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the number of data points to be used for interpolation.

