# Export
<div align="right"><a href="/document/operation-api/example/example_export_for_operation_api.md" download="example_export_for_operation_api.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

The following sample code illustrates how to create a simple example.
- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Export All Curves
Export all curves on active plot view.

Running this example creates a chart view named Chart on the active page, adds the Displacement/Magnitude and Displacement/Z curves of Crank to it, and renames the curves NameChange_0 and NameChange_1.
It then saves all curves in the chart view to curvedata.txt, a text file in OUTPUT_DIR.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_ExportAllCurves.py
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart_view = page.CreateChart(chart_name)

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
# The characteristic/component paths of the curves to add, in "Characteristic/Component" format.
curve_paths = List[str]()
# Characteristic/component path of the curve to add, in "Characteristic/Component" format.
characteristic_path_magnitude = r'Displacement/Magnitude'
curve_paths.Add(characteristic_path_magnitude)
# Characteristic/component path of the curve to add, in "Characteristic/Component" format.
characteristic_path_z = r'Displacement/Z'
curve_paths.Add(characteristic_path_z)

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
parameters.Paths = curve_paths
# The name of the target entity.
entity_name = "Crank"
parameters.Target = entity_name

# Add Curves
# The curves added to the chart view.
curves = chart_view.AddCurves(RESULT_FILE_PATH, parameters)

# Change the name of the curves
# The counter used to build the new curve names.
index = 0
for curve in curves :
    curve.SeriesName = "NameChange_{0}".format(index)
    index = index + 1

# Exporting All Curves
# This function exports all curves in the chart view to a specified file.
# OUTPUT_DIR : path to the folder where exported files are written (e.g., D:\PostprocessorAPI\Output)
# CURVE_DATA_FILENAME : output filename for the exported curve data (e.g., curvedata.txt)
# The path of the exported curve data file.
export_filepath = Path.Combine(OUTPUT_DIR, CURVE_DATA_FILENAME)
chart_view.ExportAllCurves(export_filepath)
```

## Export Contour Result To File
This example demonstrates how to export contour results to a file.

Running this example saves the Displacement contour result with the X component of FEBody_01 for every animation frame to Displacement.txt, a tab-separated text file in OUTPUT_DIR.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_ExportContourResultToFile.py
# -*- coding: utf-8 -*-
import sys

# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
application_handler = ApplicationHandler()

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = application_handler.GetActivePage()

# Get Active View
# This retrieves the currently active view in the page.
active_view = page.GetActiveView()

# Loading Animation - Use this only when the current Active View is an Animation View.
# This method is used to load the animation in the active view.
application_handler.LoadingAnimation()

# Get instance of entity
# The GetViewModelByName method retrieves the target by its name.
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The finite-element body with the specified name.
febody = active_view.GetViewModelByName(entity_name)

# Check if the FEBody is found
if febody is None:
    sys.exit(1)

# OUTPUT_DIR : path to the folder where exported files are written (e.g., D:\PostprocessorAPI\Output)
# CONTOUR_OUTPUT_FILENAME : output filename for the exported contour result (e.g., Displacement.txt)
# The path of the exported contour result file.
output_path = Path.Combine(OUTPUT_DIR, CONTOUR_OUTPUT_FILENAME)

# A boolean indicating whether to export the full frame or not.
# If True, the full frame will be exported; if False, only the current frame will be exported.
# True to export all frames, or False to export only the current frame.
is_full_frame = True

# Set the febody fullname as the target for export
# The names of the targets to export.
target_names = List[str]()
target_names.Add(febody.FullName)

# Set Contour Mapping Type
# ContourMappingType can be one of the following:
# - ContourMappingType.None : None
# - ContourMappingType.FENode : Node (Averaged across body)
# - ContourMappingType.FEElement : Element (Unaveraged)
# - ContourMappingType.FEElementNode : Node (Unaveraged)
# - ContourMappingType.FEMaterial : Node (Averaged within material)
# - ContourMappingType.BeamGroup : Beam Group
# - ContourMappingType.Contact : Contact
# - ContourMappingType.ChainedSystem : Chained System
# - ContourMappingType.Usersubroutine : Usersubroutine
# The type of the contour mapping.
contour_mapping_type = ContourMappingType.FENode

# Set Characteristic Path
# The name of the characteristic.
characteristic_name = "Displacement"

# Set Component Path
# The name of the component.
component_name = "X"

# Combine Characteristic and Component Path
# The characteristic/component path of the result to export, in "Characteristic/Component" format.
combined_characteristic_component_path = characteristic_name + "/" + component_name

# Export Contour Result to File - When the Animation View is the Active View
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The analysis type argument is optional. The default value is AnalysisResultType.Dynamics.
# The file format type argument is optional. The default is FileFormatType.TXT. The format type can be set to TXT or BINARY.
Export.ExportContourResultToFile(RESULT_FILE_PATH, output_path, target_names, is_full_frame, contour_mapping_type, combined_characteristic_component_path)
```
