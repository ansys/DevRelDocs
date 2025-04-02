#  Interface IView

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view in the application, providing functionalities to manage and interact with views.

```python
public interface IView : IOperationsBase
```

#### Implements

[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Examples

To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IView.py
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

page.FullName = "Page1"

page2 = applicationHandler.AddPage("Page2")
page.Activate()

# Create View
document = applicationHandler.GetDocument(result_file_path)
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

animation = page.CreateAnimation(dynamic_analysis, "ResultAnimation")

chart = page.CreateChart("Chart")
chart.FullName = "Chart1"
animation.DockTo(DockLayout.Top, chart)

page2.Activate()
chart.GroupName = "Page2"

page.Activate()
activeView = page.GetActiveView()
page.CloseView(activeView)

# Close the Pages
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### <a id="VM_Operations_Post_Interfaces_IView_FullName"></a> FullName

Gets or sets the name of the view.

```python
string FullName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

For an example that includes this property, see the [Interface IView](#VM_Operations_Post_Interfaces_IView).

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IView.FullName" data-throw-if-not-resolved="false"></xref> property provides a simple way to manage the name of a view. 
It is a read-write property, meaning it can be both retrieved and modified.
This property is typically used in scenarios where the view's name is needed for display, logging, or processing purposes.

### <a id="VM_Operations_Post_Interfaces_IView_GroupID"></a> GroupID

Gets the ID of the page that the current view belongs to.

```python
Guid GroupID { get; }
```

#### Property Value

 [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

#### Examples

For an example that includes this property, see the [Interface IView](#VM_Operations_Post_Interfaces_IView).

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IView.GroupID" data-throw-if-not-resolved="false"></xref> property provides the ID of the page to which the current view belongs.
This property is read-only and is set when the view is associated with a page. It allows for identifying the parent page of a view.

### <a id="VM_Operations_Post_Interfaces_IView_GroupName"></a> GroupName

Gets or sets the name of the page that the current view belongs to.

```python
string GroupName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

For an example that includes this property, see the [Interface IView](#VM_Operations_Post_Interfaces_IView).

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IView.GroupName" data-throw-if-not-resolved="false"></xref> property allows getting or setting the name of the page to which the current view belongs.
When accessed, it retrieves the name of the parent page. When set, it updates the name of the parent page, allowing the name of the page to be changed from the context of the current view.

### <a id="VM_Operations_Post_Interfaces_IView_ID"></a> ID

Gets the unique identifier of the view.

```python
int ID { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

For an example that includes this property, see the [Interface IView](#VM_Operations_Post_Interfaces_IView).

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IView.ID" data-throw-if-not-resolved="false"></xref> property provides the unique identifier for the view.
This identifier is generated at the time of the view's creation and remains constant for the lifetime of the view.
The property is read-only and ensures each view can be uniquely identified.

### <a id="VM_Operations_Post_Interfaces_IView_ViewType"></a> ViewType

Gets the type of the view, indicating whether it is an Animation or Chart type.
Supported view types include:
<ul><li>Animation</li><li>Chart</li></ul>

```python
ViewType ViewType { get; }
```

#### Property Value

 ViewType

#### Examples

For an example that includes this property, see the [Interface IView](#VM_Operations_Post_Interfaces_IView).

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IView.ViewType" data-throw-if-not-resolved="false"></xref> property provides information about the type of the view.
It indicates whether the view is an Animation type or a Chart type.
This can be useful when searching for specific types of views within a page.
The available options are:
<ul><li><xref href="VM.Models.Post.ViewType.Animation" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ViewType.Chart" data-throw-if-not-resolved="false"></xref></li></ul>

## Methods

### <a id="VM_Operations_Post_Interfaces_IView_Activate"></a> Activate\(\)

Activates the view.

```python
void Activate()
```

#### Examples

For an example that includes this property, see the [Interface IView](#VM_Operations_Post_Interfaces_IView).

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IView.Activate" data-throw-if-not-resolved="false"></xref> method is used to activate the selected view.
When this method is called, it deactivates any currently active views within the same page and sets the selected view as the only active view.
There can be only one active view at a time.

### <a id="VM_Operations_Post_Interfaces_IView_DockTo_VM_Models_Post_DockLayout_VM_Operations_Post_Interfaces_IView_"></a> DockTo\(DockLayout, IView\)

Moves the view to a specified position relative to another view.

```python
void DockTo(DockLayout dockLayout, IView target)
```

#### Parameters

`dockLayout` DockLayout

Specifies the position where the current view should be docked relative to the target view. 
The available options are:
<ul><li><xref href="VM.Models.Post.DockLayout.Left" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.DockLayout.Top" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.DockLayout.Right" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.DockLayout.Bottom" data-throw-if-not-resolved="false"></xref></li></ul>

`target` [IView](VM.Operations.Post.Interfaces.IView.md)

The view relative to which the current view will be docked.

#### Examples

For an example that includes this property, see the [Interface IView](#VM_Operations_Post_Interfaces_IView).

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IView.DockTo(VM.Models.Post.DockLayout%2cVM.Operations.Post.Interfaces.IView)" data-throw-if-not-resolved="false"></xref> method is used to move the current view to a new position relative to another view.
The position is specified using the <code class="paramref">dockLayout</code> parameter, which determines the direction (Top, Bottom, Left, Right) 
where the current view will be docked in relation to the target view.

### <a id="VM_Operations_Post_Interfaces_IView_ExportImage_System_String_VM_Models_Post_ImageFormat_System_Nullable_System_Double__System_Nullable_System_Double__"></a> ExportImage\(string, ImageFormat, double?, double?\)

Exports the image to the specified file path in the specified format.

```python
void ExportImage(string filepath, ImageFormat format, double? width = null, double? height = null)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path where the image file will be saved.

`format` ImageFormat

The format in which the image will be saved. Supported formats are Png, Jpeg, and Bmp.
The available options are:
<ul><li><xref href="VM.Models.Post.ImageFormat.Bmp" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ImageFormat.Jpeg" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ImageFormat.Png" data-throw-if-not-resolved="false"></xref></li></ul>

`width` [double](https://learn.microsoft.com/dotnet/api/system.double)?

The optional width for the exported image. If not specified, the original width is used.

`height` [double](https://learn.microsoft.com/dotnet/api/system.double)?

The optional height for the exported image. If not specified, the original height is used.

#### Examples

For an example that includes this property, see the [Interface IView](#VM_Operations_Post_Interfaces_IView).

#### Remarks

This method allows you to export an image to a desired file path in a specified format. Supported formats are 
Png, Jpeg, and Bmp. You can also specify the desired dimensions for the exported image. If width or height is 
not provided, the original dimensions of the image will be used.


