# Example
The following sample code illustrates how to create a simple example.
* The examples provided below can be found within the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' compressed file.

## Export All Curves
Export all curves on active plot view.
```
# OperationAPI_ExportAllCurves.py
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
curvePaths.Add(r'Displacement/Z')

# Set a Curve Parameter
parameters = PlotParameters()
parameters.Paths = curvePaths
parameters.Target = "Crank"

# Add Curves (FilePath, Curve Parameter)
# FilePath - The path of the result to access.
# parameters - The class used as a parameter of the AddCurve function.
# The instance of the curve.
curves = chartView.AddCurves(result_file_path, parameters)

index = 0
for curve in curves :
    curve.SeriesName = "NameChange_{0}".format(index)
    index = index + 1

# Documentation Example
# use not file dialog
output_dir = get_output_directory()
export_filepath = combine_path(output_dir, r'curvedata.txt')
chartView.ExportAllCurves(export_filepath)

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## Numeric Import
Here is an example of importing curve results from a file.
```
# OperationAPI_NumericImport.py
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
curvePaths.Add(r'Displacement/Z')

# Set a Curve Parameter
parameters = PlotParameters()
parameters.Paths = curvePaths
parameters.Target = "Crank"

# Add Curves (FilePath, Curve Parameter)
# FilePath - The path of the result to access.
# parameters - The class used as a parameter of the AddCurve function.
# The instance of the curve.
curves = chartView.AddCurves(result_file_path, parameters)

index = 0
for curve in curves :
    curve.SeriesName = "NameChange_{0}".format(index)
    index = index + 1

# File Dialog Open
# chart1.ExportAllDataSeries()

# use not file dialog
output_dir = get_output_directory()
export_filepath = combine_path(output_dir, r'curvedata.txt')
chartView.ExportAllCurves(export_filepath)

# Documentation Example
parameters = List[INumericParameter](2)
parameter = NumericParameter()
parameter.Name = r'NameChange_10'
parameter.TargetX = r'X(sec)'
parameter.TargetY = r'NameChange_1'
parameters.Add(parameter)

# Import Numeric
chartView.ImportNumeric(export_filepath, parameters)

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```