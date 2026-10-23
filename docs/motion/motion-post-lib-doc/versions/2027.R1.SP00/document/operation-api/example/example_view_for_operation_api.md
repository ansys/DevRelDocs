# View
This example covers topics related to views.
- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Create a Page
This example demonstrates how to create a page.
```python
# Example_OperationAPI_CreatingAPage.py
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

# Add a new page
# AddDocument already created a default page. This will create another page and activate it.
# You can specify the page name when the page is created.
page_name = "FirstPage"
page = application_handler.AddPage(page_name)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()
for page in pages :
    page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

## Finding and Deleting a Page
This example demonstrates how to find and delete a created page.
```python
# Example_OperationAPI_FindingAndDeletingAPage.py
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

# Add a new page
# AddDocument already created a default page. This will create another page and activate it.
# You can specify the page name when the page is created.
page_name = "FirstPage"
application_handler.AddPage(page_name)

# Find a page
page_name = "FirstPage"
page = application_handler.GetPage(page_name)

# Close a page
application_handler.ClosePage(page.ID)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()

find_views = list()
for page in pages :
    views = page.GetViews()
    animation_views = [view for view in views if view.ViewType == ViewType.Animation]
    for animation_view in animation_views :
        if animation_view.DocumentFilePath == RESULT_FILE_PATH and animation_view.AnalysisResultType == AnalysisResultType.Dynamics :
            find_views.append(animation_view)

# Get all created pages.
# This retrieves all pages created in the application.
pages = application_handler.GetPages()
for page in pages :
    page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

## Moving a View
This example demonstrates how to move a view within a page.
```python
# Example_OperationAPI_MovingAView.py
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

# Get the Animation View that AddDocument created on the active page.
animation = page.GetActiveView()

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
chart_name = "Chart"
chart = page.CreateChart(chart_name)

# Moving a View
animation.DockTo(DockLayout.Top, chart)

# Close the Pages
page.Close()

# Close the Document
application_handler.CloseDocument(RESULT_FILE_PATH)
```

<a href="/document/operation-api/example/example_view_for_operation_api.md" download="example_view_for_operation_api.md">Download this page as Markdown</a>
