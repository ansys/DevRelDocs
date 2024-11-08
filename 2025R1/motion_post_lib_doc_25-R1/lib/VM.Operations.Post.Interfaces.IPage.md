#  Interface IPage

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

The IPage interface manages views within a page. It provides functionalities for creating, finding, and closing views.

```csharp
public interface IPage
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IPage_FullName"></a> FullName

Gets or sets the name of the page.

```csharp
string FullName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>FullName</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
page = applicationHandler.GetPage("page1");
page.FullName = "page2";</code></pre>

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

 [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

#### Examples

The following example demonstrates how to use the <code>ID</code> property:
<pre><code class="lang-csharp">var applicationHandler = new ApplicationHandler();
var page = applicationHandler.GetPage("page1");
Console.WriteLine(page.ID);</code></pre>

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

The following example demonstrates how to use the <code>Activate</code> method:
<pre><code class="lang-csharp">applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
page2 = applicationHandler.AddPage("page2")
page.Activate();</code></pre>

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

The following example demonstrates how to use the <code>Close</code> method:
<pre><code class="lang-csharp">applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
page.Close();</code></pre>

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

The following example demonstrates how to use the <code>CloseView</code> method:
<pre><code class="lang-csharp">applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("Chart1");
page.CloseView(chartview);</code></pre>

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

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The unique identifier of the view to be closed. This can represent an Animation View or a Chart View.

#### Examples

The following example demonstrates how to use the <code>CloseView</code> method:
<pre><code class="lang-csharp">applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("Chart1");
page.CloseView(chartview.ID);</code></pre>

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

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the view to be closed. This can represent an Animation View or a Chart View.

#### Examples

The following example demonstrates how to use the <code>CloseView</code> method:
<pre><code class="lang-csharp">applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("Chart1");
page.CloseView(chartview.FullName);</code></pre>

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

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The initial name for the animation view. If not specified, a default name will be used.

#### Returns

 [IOperationsAnimation](VM.Operations.Post.Interfaces.IOperationsAnimation.md)

An instance of IOperationsAnimation representing the created animation view.

#### Examples

The following example demonstrates how to use the <code>CreateAnimation</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
page = applicationHandler.GetPage("page1");
page.CreateAnimation(dynamic_analysis, "ResultAnimation");</code></pre>

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

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The initial name for the chart view. If not specified, a default name will be used.

#### Returns

 [IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md)

An instance of IOperationsLine2DViewModelBase representing the created chart view.

#### Examples

The following example demonstrates how to use the <code>CreateChart</code> method:
<pre><code class="lang-csharp">applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
page.CreateChart("CurveChart");</code></pre>

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

The following example demonstrates how to use the <code>GetActiveView</code> method:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
page = applicationHandler.GetPage("page1");
activeview = page.GetActiveView();</code></pre>

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

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The unique identifier of the view to be retrieved.

#### Returns

 [IView](VM.Operations.Post.Interfaces.IView.md)

The view corresponding to the specified ID. If the view is not found, the method returns null.

#### Examples

The following example demonstrates how to use the <code>GetView</code> method:
<pre><code class="lang-csharp">applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chartView = page.CreateChart("Chart1");
chartView1 = page.GetView(chartView.ID);</code></pre>

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

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the view to be retrieved.

#### Returns

 [IView](VM.Operations.Post.Interfaces.IView.md)

The view corresponding to the specified name. If the view is not found, the method returns null.

#### Examples

The following example demonstrates how to use the <code>GetView</code> method:
<pre><code class="lang-csharp">applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
page.CreateChart("Chart1");
page.GetView("Chart1");</code></pre>

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

The following example demonstrates how to use the <code>GetViews</code> method:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
page = applicationHandler.GetPage("page1");
views = page.GetViews();</code></pre>

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IPage.GetViews" data-throw-if-not-resolved="false"></xref> method is used to locate and return all views within the current page. If no views are present, the method returns an empty array.

