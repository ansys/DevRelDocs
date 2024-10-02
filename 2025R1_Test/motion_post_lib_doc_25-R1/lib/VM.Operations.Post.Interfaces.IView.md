#  Interface IView

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view in the application, providing functionalities to manage and interact with views.

```csharp
public interface IView : IOperationsBase
```

#### Implements

[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Properties

### <a id="VM_Operations_Post_Interfaces_IView_FullName"></a> FullName

Gets or sets the name of the view.

```csharp
string FullName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>FullName</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
dynamicAnalysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
view = page.CreateAnimation(dynamicAnalysis, "ResultAnimation");
view.FullName = "Animation2";</code></pre>

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IView.FullName" data-throw-if-not-resolved="false"></xref> property provides a simple way to manage the name of a view. 
It is a read-write property, meaning it can be both retrieved and modified.
This property is typically used in scenarios where the view's name is needed for display, logging, or processing purposes.

### <a id="VM_Operations_Post_Interfaces_IView_GroupID"></a> GroupID

Gets the ID of the page that the current view belongs to.

```csharp
Guid GroupID { get; }
```

#### Property Value

 [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

#### Examples

The following example demonstrates how to use the <code>GroupID</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
dynamicAnalysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
view = page.CreateAnimation(dynamicAnalysis, "ResultAnimation");
applicationHandler.AddPage("page2");
findpage = applicationHandler.GetPage(view.GroupID);
findpage.Activate()</code></pre>

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IView.GroupID" data-throw-if-not-resolved="false"></xref> property provides the ID of the page to which the current view belongs.
This property is read-only and is set when the view is associated with a page. It allows for identifying the parent page of a view.

### <a id="VM_Operations_Post_Interfaces_IView_GroupName"></a> GroupName

Gets or sets the name of the page that the current view belongs to.

```csharp
string GroupName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>GroupName</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
dynamicAnalysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
view = page.CreateAnimation(dynamicAnalysis, "ResultAnimation");
view.GroupName = "page2";</code></pre>

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IView.GroupName" data-throw-if-not-resolved="false"></xref> property allows getting or setting the name of the page to which the current view belongs.
When accessed, it retrieves the name of the parent page. When set, it updates the name of the parent page, allowing the name of the page to be changed from the context of the current view.

### <a id="VM_Operations_Post_Interfaces_IView_ID"></a> ID

Gets the unique identifier of the view.

```csharp
int ID { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

The following example demonstrates how to use the <code>ID</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
dynamicAnalysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
view = page.CreateAnimation(dynamicAnalysis, "ResultAnimation");
findview = page.GetView(view.ID)</code></pre>

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IView.ID" data-throw-if-not-resolved="false"></xref> property provides the unique identifier for the view.
This identifier is generated at the time of the view's creation and remains constant for the lifetime of the view.
The property is read-only and ensures each view can be uniquely identified.

### <a id="VM_Operations_Post_Interfaces_IView_ViewType"></a> ViewType

Gets the type of the view, indicating whether it is an Animation or Chart type.
Supported view types include:
<ul><li>Animation</li><li>Chart</li></ul>

```csharp
ViewType ViewType { get; }
```

#### Property Value

 ViewType

#### Examples

The following example demonstrates how to use the <code>ViewType</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
dynamicAnalysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
view = page.CreateAnimation(dynamicAnalysis, "ResultAnimation");</code></pre>

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IView.ViewType" data-throw-if-not-resolved="false"></xref> property provides information about the type of the view.
It indicates whether the view is an Animation type or a Chart type.
This can be useful when searching for specific types of views within a page.
The available options are:
<ul><li><xref href="VM.Models.Post.ViewType.Animation" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ViewType.Chart" data-throw-if-not-resolved="false"></xref></li></ul>

## Methods

### <a id="VM_Operations_Post_Interfaces_IView_Activate"></a> Activate\(\)

Activates the view.

```csharp
void Activate()
```

#### Examples

The following example demonstrates how to use the <code>Activate</code> method:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
dynamicAnalysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
view = page.CreateAnimation(dynamicAnalysis, "ResultAnimation");
view.Activate();</code></pre>

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IView.Activate" data-throw-if-not-resolved="false"></xref> method is used to activate the selected view.
When this method is called, it deactivates any currently active views within the same page and sets the selected view as the only active view.
There can be only one active view at a time.

### <a id="VM_Operations_Post_Interfaces_IView_DockTo_VM_Models_Post_DockLayout_VM_Operations_Post_Interfaces_IView_"></a> DockTo\(DockLayout, IView\)

Moves the view to a specified position relative to another view.

```csharp
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

The following example demonstrates how to use the <code>DockTo</code> method:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
dynamicAnalysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
currentView = page.CreateAnimation(dynamicAnalysis, "ResultAnimation");
targetView = page.CreateChart("ChartView");
currentView.DockTo(DockLayout.Top, targetView);</code></pre>

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IView.DockTo(VM.Models.Post.DockLayout%2cVM.Operations.Post.Interfaces.IView)" data-throw-if-not-resolved="false"></xref> method is used to move the current view to a new position relative to another view.
The position is specified using the <code class="paramref">dockLayout</code> parameter, which determines the direction (Top, Bottom, Left, Right) 
where the current view will be docked in relation to the target view.

### <a id="VM_Operations_Post_Interfaces_IView_ExportImage_System_String_VM_Models_Post_ImageFormat_System_Nullable_System_Double__System_Nullable_System_Double__"></a> ExportImage\(string, ImageFormat, double?, double?\)

Exports the image to the specified file path in the specified format.

```csharp
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

The following example demonstrates how to use the <code>ExportImage</code> method:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
dynamicAnalysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
currentView = page.CreateAnimation(dynamicAnalysis, "ResultAnimation");
currentView.ExportImage("image.png", ImageFormat.Png, 1920, 1080);</code></pre>

#### Remarks

This method allows you to export an image to a desired file path in a specified format. Supported formats are 
Png, Jpeg, and Bmp. You can also specify the desired dimensions for the exported image. If width or height is 
not provided, the original dimensions of the image will be used.

