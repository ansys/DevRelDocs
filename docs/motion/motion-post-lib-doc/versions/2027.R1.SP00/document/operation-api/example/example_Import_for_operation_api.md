# Import
<div align="right"><a href="/document/operation-api/example/example_Import_for_operation_api.md" download="example_Import_for_operation_api.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

This example covers topics related to importing data.
- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Import Numeric Data
Here is an example of importing curve results from a file.

Running this example creates a chart view named Chart on the active page and imports the numeric file numeric_data.csv as a curve named OrderTrackingCurve, using Time(sec) for the X values and Value for the Y values.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_ImportNumeric.py
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

# Importing Numeric Data
# The numeric parameters that define how to interpret the data in the file.
numeric_parameters = List[INumericParameter](2)

# To create a curve from a file, create a NumericParameter.
# In this example, a curve named 'OrderTrackingCurve' is created, and data corresponding to the X and Y headers is retrieved from the file.
parameter = NumericParameter()
# The name of the curve to be created.
parameter.Name = r'OrderTrackingCurve'
# The name of the X-axis data.
parameter.TargetX = r'Time(sec)'
# The name of the Y-axis data.
parameter.TargetY = r'Value'
numeric_parameters.Add(parameter)

# NUMERIC_INPUT_FILENAME : path to the numeric input file (e.g., D:\PostprocessorAPI\Input\numeric_data.csv)
chart_view.ImportNumeric(NUMERIC_INPUT_FILENAME, numeric_parameters)
```
