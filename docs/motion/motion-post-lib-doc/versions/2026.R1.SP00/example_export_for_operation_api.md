# Example
The following sample code illustrates how to create a simple example.
* The examples provided below can be found within the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' compressed file.

## Export All Curves
Export all curves on active plot view.
```python
# OperationAPI_ExportAllCurves.py
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

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
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

# Change the name of the curves
index = 0
for curve in curves :
    curve.SeriesName = "NameChange_{0}".format(index)
    index = index + 1

# Exporting All Curves
# The output path is 'examples/Output'.
# file_path - The path to the file where the curve data will be exported.
# This function exports all curves in the chart view to a specified file.
output_dir = get_output_directory()
export_filepath = combine_path(output_dir, r'curvedata.txt')
chartView.ExportAllCurves(export_filepath)

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## Export Contour Result To File
This example demonstrates how to export contour results to a file.
```python
# Export.py
# -*- coding: utf-8 -*-
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

# Set array about result file - There may be multiple result files.
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
applicationHandler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = applicationHandler.GetActivePage()

# Get Active View
# This retrieves the currently active view in the page.
activeView = page.GetActiveView()

# Loading Animation - Use this only when the current Active View is an Animation View.
# This method is used to load the animation in the active view.
applicationHandler.LoadingAnimation()

# Get instance of entity
# The GetViewModelByName method retrieves the target by its name.
febody = activeView.GetViewModelByName("FEBody_01")

# Check if the FEBody is found
if febody is None:
    sys.exit(1)

# Set Ouput Path - The path where the output will be saved.
output_path = combine_path(get_output_directory(), "Displacement.txt")

# A boolean indicating whether to export the full frame or not.
# If True, the full frame will be exported; if False, only the current frame will be exported.
is_full_frame = True

# Set the febody fullname as the target for export
targetNames = List[str]()
targetNames.Add(febody.FullName)

# Set Contour Mapping Type
# ContourMappingType can be one of the following:
# - ContourMappingType.None - None
# - ContourMappingType.FENode - Node (Averaged across body)
# - ContourMappingType.FEElement - Element (Unaveraged)
# - ContourMappingType.FEElementNode - Node (Unaveraged)
# - ContourMappingType.FEMaterial - Node (Averaged within material)
# - ContourMappingType.BeamGroup - Beam Group
# - ContourMappingType.Contact - Contact
# - ContourMappingType.ChainedSystem - Chained System
# - ContourMappingType.Usersubroutine - Usersubroutine
contour_mapping_type = ContourMappingType.FENode

# Set Characteristic Path
characteristic_path = "Displacement"

# Set Component Path
component_path = "X"

# Combine Characteristic and Component Path
combined_characteristic_component_path = characteristic_path + "/" + component_path

# Export Contour Result to File - When the Animation View is the Active View
# result_file_path - The path to the result file.
# output_path - The path to the output file where the contour results will be saved.
# targetNames - The list of target names for which the contour results will be exported.
# is_full_frame - A boolean indicating whether to export the full frame or not.
# contour_mapping_type - The type of contour mapping to be used.
# characteristic_component_path - The path to the characteristic and component for which the contour results will be exported.
# AnalysisType - The default value is AnalysisResultType.Dynamics. If you want to change it, please set the AnalysisType.
# FileFormatType - The format of the output file. The default is FileFormatType.Text. The format type can be set to TXT or BINARY.
Export.ExportContourResultToFile(result_file_path, output_path, targetNames, is_full_frame, contour_mapping_type, combined_characteristic_component_path)

# Close the Pages
# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)

```