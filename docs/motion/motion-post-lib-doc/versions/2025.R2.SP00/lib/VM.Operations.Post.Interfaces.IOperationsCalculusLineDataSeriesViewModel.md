#  Interface IOperationsCalculusLineDataSeriesViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the calculus line data series.

```python
public interface IOperationsCalculusLineDataSeriesViewModel
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationsCalculusLineDataSeriesViewModel.py
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
# Calculus - Differentiation
calculusCurves = chartView.CreateDifferentiatedCurve(curves)

# Calculus - Integration
calculusCurves[0].CalculusType = CalculusType.Integration

# Close the Pages
page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsCalculusLineDataSeriesViewModel_CalculusType"></a> CalculusType

Gets or sets the type of calculus operation.

```python
CalculusType CalculusType { get; set; }
```

#### Property Value

 CalculusType

#### Examples

For an example that includes this property, see the [Interface IOperationsCalculusLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsCalculusLineDataSeriesViewModel.md).

#### Remarks

Use this property to specify or retrieve the type of calculus operation.
The supported types are:
<ul><li><xref href="VM.Models.Post.CalculusType.Differentiation" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.CalculusType.Integration" data-throw-if-not-resolved="false"></xref></li></ul>


