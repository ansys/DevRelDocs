# Import
This example covers topics related to importing data.
- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Numeric Import
Here is an example of importing curve results from a file.
```python
# Example_OperationAPI_NumericImport.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Set array about result file
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
chart_name = "Chart"
chart_view = page.CreateChart(chart_name)

# Set array about combination of characteristic and component
curve_paths = List[str]()
# characteristic_path_magnitude : characteristic/component path of the curve to add, in "Characteristic/Component" format
characteristic_path_magnitude = r'Displacement/Magnitude'
curve_paths.Add(characteristic_path_magnitude)
# characteristic_path_z : characteristic/component path of the curve to add, in "Characteristic/Component" format
characteristic_path_z = r'Displacement/Z'
curve_paths.Add(characteristic_path_z)

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
entity_name = "Crank"
parameters.Target = entity_name

# Add Curves (FilePath, Curve Parameter)
# FilePath : The path of the result to access.
# parameters : The class used as a parameter of the AddCurve function.
# The instance of the curve.
curves = chart_view.AddCurves(RESULT_FILE_PATH, parameters)

index = 0
for curve in curves :
    curve.SeriesName = "NameChange_{0}".format(index)
    index = index + 1

# OUTPUT_DIR : path to the folder where exported files are written
# CURVE_DATA_FILENAME : output filename for the exported curve data
file_path = Path.Combine(OUTPUT_DIR, CURVE_DATA_FILENAME)
chart_view.ExportAllCurves(file_path)

# Importing Numeric Data
numeric_parameters = List[INumericParameter](2)

# To create a curve from a file, create a NumericParameter.
# Name : The name of the curve to be created.
# TargetX : The name of the X-axis data.
# TargetY : The name of the Y-axis data.
# In this example, a curve named 'OrderTrackingCurve' is created, and data corresponding to the X and Y headers is retrieved from the file.
parameter = NumericParameter()
parameter.Name = r'OrderTrackingCurve'
parameter.TargetX = r'Time(sec)'
parameter.TargetY = r'NameChange_1'
numeric_parameters.Add(parameter)

# file_path : The path to the file containing the numeric data.
# parameters : The list of numeric parameters that define how to interpret the data in the file.
chart_view.ImportNumeric(file_path, numeric_parameters)

# Close the Pages
page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```