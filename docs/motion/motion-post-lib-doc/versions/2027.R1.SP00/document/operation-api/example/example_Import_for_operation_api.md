# Import
This example covers topics related to importing data.
- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Import Numeric Data
Here is an example of importing curve results from a file.
```python
# Example_OperationAPI_ImportNumeric.py
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
parameter.TargetY = r'Value'
numeric_parameters.Add(parameter)

# NUMERIC_INPUT_FILENAME : The path to the file containing the numeric data.
# parameters : The list of numeric parameters that define how to interpret the data in the file.
chart_view.ImportNumeric(NUMERIC_INPUT_FILENAME, numeric_parameters)

# Close the Pages
page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

<a href="/document/operation-api/example/example_Import_for_operation_api.md" download="example_Import_for_operation_api.md">Download this page as Markdown</a>
