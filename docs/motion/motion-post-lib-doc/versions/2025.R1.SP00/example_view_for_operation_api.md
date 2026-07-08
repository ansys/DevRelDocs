# Example

This example covers topics related to views.

## Create a Page

This example demonstrates how to create a page.

```
# Example_OperationAPI_CreatePage.py
# Refer to the OperationAPI.py file
import sys
references_path = __file__.rsplit('\\', 1)[0]
sys.path.append(references_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
# Get Install Path
# The 'XX' in AWP_ROOTXXX represents the year, like 25 for the year 2025, and the leat 'X' indicates the half of the year,
# where '1' represents the first half and '2' represents the second half.
# For example, in 'AWP_ROOT251' and 'AWP_ROOT252', '25' represents the year 2025, and '1' indicates the first half of the year,
# while '2' indicates the second half.
install_path = get_env_variable("AWP_ROOTXXX")

filepath = combine_path(install_path, r'Motion\Document\Pre and Post Processor\Model\Result\Suspension.dfr')

# Set array about result file
filepaths = List[str]()
filepaths.Add(filepath)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Get Page
page = applicationHandler.AddPage("FirstPage")
```

## Finding and Deleting a Page

This example demonstrates how to find and delete a created page.

```
# Example_OperationAPI_Page.py
# Refer to the OperationAPI.py file
import sys
references_path = __file__.rsplit('\\', 1)[0]
sys.path.append(references_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
# Get Install Path
# The 'XX' in AWP_ROOTXXX represents the year, like 25 for the year 2025, and the leat 'X' indicates the half of the year,
# where '1' represents the first half and '2' represents the second half.
# For example, in 'AWP_ROOT251' and 'AWP_ROOT252', '25' represents the year 2025, and '1' indicates the first half of the year,
# while '2' indicates the second half.
install_path = get_env_variable("AWP_ROOTXXX")

filepath = combine_path(install_path, r'Motion\Document\Pre and Post Processor\Model\Result\Suspension.dfr')

# Set array about result file
filepaths = List[str]()
filepaths.Add(filepath)

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
        if animationView.DocumentFilePath == filepath and animationView.AnalysisResultType == AnalysisResultType.Dynamics :
            findViews.append(animationView)

viewCount = len(findViews)
if viewCount > 0 :
    # find a page
    page2 = applicationHandler.GetPage(findViews[0].GroupID)
    page2.FullName = "Page2"
```

## Moving a View

This example demonstrates how to move a view within a page.

```
# Example_OperationAPI_MoveToView.py
# Refer to the OperationAPI.py file
import sys
references_path = __file__.rsplit('\\', 1)[0]
sys.path.append(references_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
# Get Install Path
# The 'XX' in AWP_ROOTXXX represents the year, like 25 for the year 2025, and the leat 'X' indicates the half of the year,
# where '1' represents the first half and '2' represents the second half.
# For example, in 'AWP_ROOT251' and 'AWP_ROOT252', '25' represents the year 2025, and '1' indicates the first half of the year,
# while '2' indicates the second half.
install_path = get_env_variable("AWP_ROOTXXX")

filepath = combine_path(install_path, r'Motion\Document\Pre and Post Processor\Model\Result\Suspension.dfr')

# Set array about result file
filepaths = List[str]()
filepaths.Add(filepath)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Get Page
page = applicationHandler.GetActivePage()

# Create View
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
animation = page.CreateAnimation(dynamic_analysis, "ResultAnimation");
chart = page.CreateChart("Chart")

animation.DockTo(DockLayout.Top, chart)
```