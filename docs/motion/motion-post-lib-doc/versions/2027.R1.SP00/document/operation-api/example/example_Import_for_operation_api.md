# Example
The following sample code illustrates how to create a simple example.
- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Numeric Import
Here is an example of importing curve results from a file.
```python
# OperationAPI_NumericImport.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *
import os

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
chartView = page.CreateChart(chart_name)

# Set array about combination of characteristic and component
curvePaths = List[str]()
# characteristic_path_magnitude : characteristic/component path of the curve to add, in "Characteristic/Component" format
characteristic_path_magnitude = r'Displacement/Magnitude'
curvePaths.Add(characteristic_path_magnitude)
# characteristic_path_z : characteristic/component path of the curve to add, in "Characteristic/Component" format
characteristic_path_z = r'Displacement/Z'
curvePaths.Add(characteristic_path_z)

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
curves = chartView.AddCurves(RESULT_FILE_PATH, parameters)

index = 0
for curve in curves :
    curve.SeriesName = "NameChange_{0}".format(index)
    index = index + 1

# File Dialog Open
# chart1.ExportAllDataSeries()

# use not file dialog
# OUTPUT_DIR : path to the folder where exported files are written
file_path = os.path.join(OUTPUT_DIR, r'curvedata.txt')
chartView.ExportAllCurves(export_filepath)

# Importing Numeric Data
parameters = List[INumericParameter](2)

# To create a curve from a file, create a NumericParameter.
# Name - The name of the curve to be created.
# TargetX - The name of the X-axis data.
# TargetY - The name of the Y-axis data.
# In this example, a curve named 'OrderTrackingCurve' is created, and data corresponding to the X and Y headers is retrieved from the file.
parameter = NumericParameter()
parameter.Name = r'NameChange_10'
parameter.TargetX = r'Time(sec)'
parameter.TargetY = r'NameChange_1'
parameters.Add(parameter)

# file_path - The path to the file containing the numeric data.
# parameters - The list of numeric parameters that define how to interpret the data in the file.
chartView.ImportNumeric(file_path, parameters)

# Close the Pages
page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```