# Interface IPage
<a id="VM_Operations_Post_Interfaces_IPage"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

The IPage interface manages views within a page. It provides functionalities for creating, finding, and closing views.

```csharp
public interface IPage
```

## Examples

To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IPage.py
import sys

# Get the path of the current file and append the external modules path
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

page.FullName = "Page1"

# Add a new page
# This will create a new page and activate it.
# You can specify the page name when the page is created.
page2 = applicationHandler.AddPage("Page2")
page.Activate()

# result_file_path - Get the document from the result file path.
document = applicationHandler.GetDocument(result_file_path)

# This retrieves the analysis result from the document.
# Types of Analysis Results
# - Dynamics
# - Eigenvalue
# - Statics
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

# Create an Animation View on the active page
# This will create an animation view based on the dynamic analysis.
animation = page.CreateAnimation(dynamic_analysis, "ResultAnimation")

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
chart = page.CreateChart("Chart")

page2.Activate()
page2.Close()

page.CloseView(animation)
page.CloseView(chart.ID)

# Get Active View
# This retrieves the currently active view in the page.
activeView = page.GetActiveView()
page.CloseView(activeView)

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IPage_FullName"></a> FullName

Gets or sets the name of the page.

```csharp
string FullName { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IPage](VM.Operations.Post.Interfaces.IPage.md).

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IPage.FullName" data-throw-if-not-resolved="false"></xref> property provides a simple way to manage the name of a page. 
It is a read-write property, meaning it can be both retrieved and modified.
This property is typically used in scenarios where the page's name is needed for display, logging, or processing purposes.

### <a id="VM_Operations_Post_Interfaces_IPage_ID"></a> ID

Gets the unique identifier of the page.

```csharp
Guid ID { get; }
```

#### Property Value

 Guid

#### Examples

For an example that includes this property, see the [Interface IPage](VM.Operations.Post.Interfaces.IPage.md).

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IPage.ID" data-throw-if-not-resolved="false"></xref> property provides a way to uniquely identify a page. 
It is a read-only property, meaning the value can only be retrieved and not modified. 
This unique identifier is typically used in scenarios where a distinct and consistent reference to the page is required, such as in databases or collections.

## Methods

### <a id="VM_Operations_Post_Interfaces_IPage_Activate"></a> Activate\(\)

Activates the page.

```csharp
void Activate()
```

#### Examples

For an example that includes this property, see the [Interface IPage](VM.Operations.Post.Interfaces.IPage.md).

#### Remarks

The Activate method activates the page, ensuring that it is the only active page.
When this method is called on a page, all other pages that are currently active will be deactivated, and only the selected page will remain active.
Only one page can be active at any given time.

### <a id="VM_Operations_Post_Interfaces_IPage_Close"></a> Close\(\)

Closes the current page.

```csharp
void Close()
```

#### Examples

For an example that includes this property, see the [Interface IPage](VM.Operations.Post.Interfaces.IPage.md).

#### Remarks

The Close method is used to close the current page.
When this method is called, the page will be removed from view and any resources associated with it will be released.

### <a id="VM_Operations_Post_Interfaces_IPage_CloseView_VM_Operations_Post_Interfaces_IView_"></a> CloseView\(IView\)

Closes a view within the current page.

```csharp
void CloseView(IView view)
```

#### Parameters

`view` [IView](VM.Operations.Post.Interfaces.IView.md)

The view to be closed. This can be an Animation View or a Chart View.

#### Examples

For an example that includes this property, see the [Interface IPage](VM.Operations.Post.Interfaces.IPage.md).

#### Remarks

The CloseView method is used to close a specific view within the current page.
When this method is called with the specified view, the view will be removed from the page.
The view parameter represents either an Animation View or a Chart View that is to be closed.

### <a id="VM_Operations_Post_Interfaces_IPage_CloseView_System_Int32_"></a> CloseView\(int\)

Closes a view within the current page.

```csharp
void CloseView(int id)
```

#### Parameters

`id` int

The unique identifier of the view to be closed. This can represent an Animation View or a Chart View.

#### Examples

For an example that includes this property, see the [Interface IPage](VM.Operations.Post.Interfaces.IPage.md).

#### Remarks

The CloseView method is used to close a specific view within the current page. 
When this method is called with the specified view's ID, the view will be located and removed from the page.
The viewID parameter represents the unique identifier of either an Animation View or a Chart View that is to be closed.

### <a id="VM_Operations_Post_Interfaces_IPage_CloseView_System_String_"></a> CloseView\(string\)

Closes a view within the current page.

```csharp
void CloseView(string name)
```

#### Parameters

`name` string

The name of the view to be closed. This can represent an Animation View or a Chart View.

#### Examples

For an example that includes this property, see the [Interface IPage](VM.Operations.Post.Interfaces.IPage.md).

#### Remarks

The CloseView method is used to close a specific view within the current page.
When this method is called with the specified view's name, the view will be located and removed from the page.
The name parameter represents the name of either an Animation View or a Chart View that is to be closed.

### <a id="VM_Operations_Post_Interfaces_IPage_CreateAnimation_VM_ViewModels_Post_IAnalysisResultViewModel_System_String_"></a> CreateAnimation\(IAnalysisResultViewModel, string\)

Creates an animation view to display the analyzed results on the current page.
The CreateAnimation method is used to create an animation view that displays the analyzed results on the current page.

```csharp
IOperationsAnimation CreateAnimation(IAnalysisResultViewModel analysis, string name = null)
```

#### Parameters

`analysis` IAnalysisResultViewModel

Represents one of the multiple analysis results contained within the analyzed data.

`name` string

The initial name for the animation view. If not specified, a default name will be used.

#### Returns

 [IOperationsAnimation](VM.Operations.Post.Interfaces.IOperationsAnimation.md)

An instance of IOperationsAnimation representing the created animation view.

#### Examples

For an example that includes this property, see the [Interface IPage](VM.Operations.Post.Interfaces.IPage.md).

#### Remarks

The CreateAnimation method facilitates the visualization of analyzed results by creating an animation view.
The analysis parameter specifies the particular result to be visualized, while the optional name parameter allows for naming the animation view during its creation.

### <a id="VM_Operations_Post_Interfaces_IPage_CreateChart_System_String_"></a> CreateChart\(string\)

Creates a chart view to draw a 2D curve.
The CreateChart method is used to create a chart view for drawing 2D curves.

```csharp
IOperationsLine2DViewModelBase CreateChart(string name = null)
```

#### Parameters

`name` string

The initial name for the chart view. If not specified, a default name will be used.

#### Returns

 [IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md)

An instance of IOperationsLine2DViewModelBase representing the created chart view.

#### Examples

For an example that includes this property, see the [Interface IPage](VM.Operations.Post.Interfaces.IPage.md).

#### Remarks

The CreateChartView method facilitates the creation of a chart view specifically for plotting 2D curves.
The optional name parameter allows for naming the chart view during its creation.

### <a id="VM_Operations_Post_Interfaces_IPage_GetActiveView"></a> GetActiveView\(\)

Retrieves the currently active view within the page.

```csharp
IView GetActiveView()
```

#### Returns

 [IView](VM.Operations.Post.Interfaces.IView.md)

The currently active view within the page. If no view is active, the method returns null.

#### Examples

For an example that includes this property, see the [Interface IPage](VM.Operations.Post.Interfaces.IPage.md).

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IPage.GetActiveView" data-throw-if-not-resolved="false"></xref> method is used to locate and return the view that is currently active within the current page.
If no view is currently active, the method returns null.

### <a id="VM_Operations_Post_Interfaces_IPage_GetView_System_Int32_"></a> GetView\(int\)

Finds and returns a view within the current page.
The GetView method is used to retrieve a specific view within the page by its ID.

```csharp
IView GetView(int id)
```

#### Parameters

`id` int

The unique identifier of the view to be retrieved.

#### Returns

 [IView](VM.Operations.Post.Interfaces.IView.md)

The view corresponding to the specified ID. If the view is not found, the method returns null.

#### Examples

For an example that includes this property, see the [Interface IPage](VM.Operations.Post.Interfaces.IPage.md).

#### Remarks

The GetView method is used to locate and return a specific view within the current page using its unique identifier.
If the view with the specified ID is not found, the method returns null.

### <a id="VM_Operations_Post_Interfaces_IPage_GetView_System_String_"></a> GetView\(string\)

Finds and returns a view within the current page.
The GetView method is used to retrieve a specific view within the page by its name.

```csharp
IView GetView(string name)
```

#### Parameters

`name` string

The name of the view to be retrieved.

#### Returns

 [IView](VM.Operations.Post.Interfaces.IView.md)

The view corresponding to the specified name. If the view is not found, the method returns null.

#### Examples

For an example that includes this property, see the [Interface IPage](VM.Operations.Post.Interfaces.IPage.md).

#### Remarks

The GetView method is used to locate and return a specific view within the current page using its name.
If the view with the specified name is not found, the method returns null.

### <a id="VM_Operations_Post_Interfaces_IPage_GetViews"></a> GetViews\(\)

Retrieves all views within the current page.

```csharp
IView[] GetViews()
```

#### Returns

 [IView](VM.Operations.Post.Interfaces.IView.md)\[\]

An array of views within the current page. If no views exist, the method returns an empty array.

#### Examples

For an example that includes this property, see the [Interface IPage](VM.Operations.Post.Interfaces.IPage.md).

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IPage.GetViews" data-throw-if-not-resolved="false"></xref> method is used to locate and return all views within the current page. If no views are present, the method returns an empty array.

