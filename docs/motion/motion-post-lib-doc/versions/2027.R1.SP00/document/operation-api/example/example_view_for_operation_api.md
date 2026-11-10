# View
<div align="right"><a href="/document/operation-api/example/example_view_for_operation_api.md" download="example_view_for_operation_api.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

This example covers topics related to views.
- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Create a Page
This example demonstrates how to create a page.

Running this example opens the result file, which creates a page with an animation view, and creates another page named FirstPage.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_CreatingAPage.py
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

# Add a new page
# AddDocument already created a default page. This will create another page and activate it.
# You can specify the page name when the page is created.
# The name of the page.
page_name = "FirstPage"
application_handler.AddPage(page_name)
```

## Finding and Deleting a Page
This example demonstrates how to find and delete a created page.

Running this example opens the result file, creates a page named FirstPage, finds it, and deletes it.
Only the page created when the result file was opened remains.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_FindingAndDeletingAPage.py
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

# Add a new page
# AddDocument already created a default page. This will create another page and activate it.
# You can specify the page name when the page is created.
# The name of the page.
page_name = "FirstPage"
application_handler.AddPage(page_name)

# Find a page
page = application_handler.GetPage(page_name)

# Close a page
application_handler.ClosePage(page.ID)
```

## Moving a View
This example demonstrates how to move a view within a page.

Running this example creates a chart view named Chart on the active page and moves the animation view to the top of the chart view.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_OperationAPI_MovingAView.py
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

# Get the Animation View that AddDocument created on the active page.
animation = page.GetActiveView()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart = page.CreateChart(chart_name)

# Moving a View
animation.DockTo(DockLayout.Top, chart)
```
