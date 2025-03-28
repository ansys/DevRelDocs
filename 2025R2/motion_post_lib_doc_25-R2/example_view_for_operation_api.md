# Example
This example covers topics related to views.
* The examples provided below can be found within the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' compressed file.

## Create a Page
This example demonstrates how to create a page.
```python
# OperationAPI_CreatingAPage.py
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
page = applicationHandler.AddPage("FirstPage")

# Close the Pages
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## Finding and Deleting a Page
This example demonstrates how to find and delete a created page.
```python
# OperationAPI_FindingAndDeletingAPage.py
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

# Create a page
applicationHandler.AddPage("FirstPage")

# Find a page
page = applicationHandler.GetPage("FirstPage")

# Close a page
applicationHandler.ClosePage(page.ID)

# Find Page
pages = applicationHandler.GetPages()

findViews = list()
for page in pages :
    views = page.GetViews()
    animationViews = [view for view in views if view.ViewType == ViewType.Animation]
    for animationView in animationViews :
        if animationView.DocumentFilePath == result_file_path and animationView.AnalysisResultType == AnalysisResultType.Dynamics :
            findViews.append(animationView)

# Close the Pages
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```

## Moving a View
This example demonstrates how to move a view within a page.
```python
# OperationAPI_MovingAView.py
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

# Create View
document = applicationHandler.GetDocument(result_file_path)
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)
animation = page.CreateAnimation(dynamic_analysis, "ResultAnimation")
chart = page.CreateChart("Chart")

# Moving a View
animation.DockTo(DockLayout.Top, chart)

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)

```