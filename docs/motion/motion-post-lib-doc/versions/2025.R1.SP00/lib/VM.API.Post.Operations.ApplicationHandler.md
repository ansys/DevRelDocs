#  Class ApplicationHandler

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

This is the class to operate the OperationAPI.

```csharp
public class ApplicationHandler
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md)

## Constructors

### <a id="VM_API_Post_Operations_ApplicationHandler__ctor"></a> ApplicationHandler\(\)

Initializes a new instance of the <xref href="VM.API.Post.Operations.ApplicationHandler" data-throw-if-not-resolved="false"></xref> class, enabling the OperationAPI to function.

```csharp
public ApplicationHandler()
```

#### Examples

The following example demonstrates how to create an instance of the <code>ApplicationHandler</code> class:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();</code></pre>

#### Remarks

This constructor sets up the necessary configurations to allow the OperationAPI to operate.

## Methods

### <a id="VM_API_Post_Operations_ApplicationHandler_AddDocument_System_Collections_Generic_IList_System_String__"></a> AddDocument\(IList<string\>\)

Imports results by adding documents to the UI.

```csharp
public void AddDocument(IList<string> filepath)
```

#### Parameters

`filepath` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

A list of file paths representing the results to be imported.

#### Examples

The following example demonstrates how to use the <code>AddDocument</code> method:
<pre><code class="lang-csharp">filepath = r'';
filepaths = List[str](1);
filepaths.Add(filepath);
applicationHandler = ApplicationHandler();
applicationHandler.AddDocument(filepaths);</code></pre>

#### Remarks

This method takes a list of file paths as input parameters and imports the corresponding results into the UI.

### <a id="VM_API_Post_Operations_ApplicationHandler_AddPage_System_String_"></a> AddPage\(string\)

Adds a new page with the specified name.

```csharp
public IPage AddPage(string name = null)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the page to be added. If no name is provided, a default name is used.

#### Returns

 IPage

An instance of <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> representing the newly added page.

#### Examples

The following example demonstrates how to use the <code>AddPage</code> method:
<pre><code class="lang-csharp">filepath = r'';
filepaths = List[str](1);
filepaths.Add(filepath);
applicationHandler = ApplicationHandler();
applicationHandler.AddDocument(filepaths);
applicationHandler.AddPage("page2");</code></pre>

#### Remarks

This method adds a new page with the given name. If no name is provided, the page is created with a default name.

### <a id="VM_API_Post_Operations_ApplicationHandler_AddPlotView"></a> AddPlotView\(\)

Adds a new plot view by creating a chart.

```csharp
[Obsolete]
public IOperationsLine2DViewModelBase AddPlotView()
```

#### Returns

 IOperationsLine2DViewModelBase

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase" data-throw-if-not-resolved="false"></xref> representing the newly added plot view.

#### Examples

The following example demonstrates the deprecated <code>AddPlotView</code> method and the recommended <code>CreateChart</code> method:
<pre><code class="lang-csharp">filepath = r'';
filepaths = List[str](1);
filepaths.Add(filepath);
applicationHandler = ApplicationHandler();
applicationHandler.AddDocument(filepaths);
applicationHandler.AddPlotView();</code></pre>

#### Remarks

This method creates a new chart. However, this method is deprecated and should no longer be used.
Instead, use the <xref href="VM.Operations.Post.Interfaces.IPage.CreateChart(System.String)" data-throw-if-not-resolved="false"></xref> method to create a chart.

### <a id="VM_API_Post_Operations_ApplicationHandler_Close"></a> Close\(\)

Closes an open application.

```csharp
public void Close()
```

#### Examples

The following example demonstrates how to use the <code>Close</code> method:
<pre><code class="lang-csharp">applicationHandler = ApplicationHandler();
applicationHandler.Close();</code></pre>

#### Remarks

This method closes an open application.

### <a id="VM_API_Post_Operations_ApplicationHandler_CloseDocument_System_String_"></a> CloseDocument\(string\)

Closes an open document by its file path.

```csharp
public void CloseDocument(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of the document to be closed.

#### Examples

The following example demonstrates how to use the <code>CloseDocument</code> method:
<pre><code class="lang-csharp">filepath = r'';
filepaths = List[str](1);
filepaths.Add(filepath);
applicationHandler = ApplicationHandler();
applicationHandler.AddDocument(filepaths);
applicationHandler.CloseDocument(filepath);</code></pre>

#### Remarks

This method closes an open document by its file path.

### <a id="VM_API_Post_Operations_ApplicationHandler_ClosePage_System_Guid_"></a> ClosePage\(Guid\)

Closes an open page by its ID.

```csharp
public void ClosePage(Guid id)
```

#### Parameters

`id` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

The ID of the page to be closed.

#### Examples

The following example demonstrates how to use the <code>ClosePage</code> method:
<pre><code class="lang-csharp">filepath = r'';
filepaths = List[str](1);
filepaths.Add(filepath);
applicationHandler = ApplicationHandler();
applicationHandler.AddDocument(filepaths);
document = applicationHandler.GetDocument(filepath);
page2 = applicationHandler.AddPage("page2");
page3 = applicationHandler.AddPage("page3");
activePage = applicationHandler.GetActivePage();;
applicationHandler.ClosePage(activePage.ID);</code></pre>

#### Remarks

This method closes an open page by its ID.

### <a id="VM_API_Post_Operations_ApplicationHandler_ClosePage_System_String_"></a> ClosePage\(string\)

Closes an open page by its name.

```csharp
public void ClosePage(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the page to be closed.

#### Examples

The following example demonstrates how to use the <code>ClosePage</code> method:
<pre><code class="lang-csharp">filepath = r'';
filepaths = List[str](1);
filepaths.Add(filepath);
applicationHandler = ApplicationHandler();
applicationHandler.AddDocument(filepaths);
document = applicationHandler.GetDocument(filepath);
page2 = applicationHandler.AddPage("page2");
page3 = applicationHandler.AddPage("page3");
activePage = applicationHandler.GetActivePage();;
applicationHandler.ClosePage("page2");</code></pre>

#### Remarks

This method closes an open page by its name.

### <a id="VM_API_Post_Operations_ApplicationHandler_ExportImage_VM_Operations_Post_Interfaces_IView_System_String_VM_Models_Post_ImageFormat_System_Nullable_System_Double__System_Nullable_System_Double__"></a> ExportImage\(IView, string, ImageFormat, double?, double?\)

Exports the current image to a specified file format. This function saves the image to the given file path.

```csharp
public void ExportImage(IView viewViewModel, string filepath, ImageFormat format, double? width = null, double? height = null)
```

#### Parameters

`viewViewModel` IView

Represents the target to be captured.

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
<pre><code class="lang-csharp">filepath = r'';
filepaths = List[str](1);
filepaths.Add(filepath);
applicationHandler = ApplicationHandler();
applicationHandler.AddDocument(filepaths);
chartview = applicationHandler.AddPlotView();
applicationHandler.ExportImage(chartview, "image.png", ImageFormat.Png, 1920, 1080)</code></pre>

#### Remarks

This method allows you to export an image to a desired file path in a specified format. Supported formats are 
Png, Jpeg, and Bmp. You can also specify the desired dimensions for the exported image. If width or height is 
not provided, the original dimensions of the image will be used.

### <a id="VM_API_Post_Operations_ApplicationHandler_ExportImage_VM_Operations_Post_Interfaces_IView_System_String_SciChart_Core_ExportType_System_Nullable_System_Double__System_Nullable_System_Double__"></a> ExportImage\(IView, string, ExportType, double?, double?\)

Exports the current image to a specified file format. This function saves the image to the given file path.

```csharp
[Obsolete]
public void ExportImage(IView lineViewModel, string filepath, ExportType exportType, double? width = null, double? height = null)
```

#### Parameters

`lineViewModel` IView

The view model to be exported.

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path where the image will be saved.

`exportType` ExportType

The type of export format (e.g., PNG, JPEG).

`width` [double](https://learn.microsoft.com/dotnet/api/system.double)?

The optional width of the exported image. If not specified, the default width is used.

`height` [double](https://learn.microsoft.com/dotnet/api/system.double)?

The optional height of the exported image. If not specified, the default height is used.

#### Examples

The following example demonstrates how to use the deprecated <code>ExportImage</code> method:
<pre><code class="lang-csharp"></code></pre>

#### Remarks

This method exports the current view to an image file. However, this method is deprecated and should no longer be used.

### <a id="VM_API_Post_Operations_ApplicationHandler_GetActiveAnimationView"></a> GetActiveAnimationView\(\)

Retrieves the active animation view from the current page.

```csharp
[Obsolete]
public IOperationsAnimation GetActiveAnimationView()
```

#### Returns

 IOperationsAnimation

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsAnimation" data-throw-if-not-resolved="false"></xref> representing the active animation view if it exists; otherwise, <code>null</code>.

#### Examples

The following example demonstrates how to use the deprecated <code>GetActiveAnimationView</code> method and the new method in <code>IPage</code>:
<pre><code class="lang-csharp"></code></pre>

#### Remarks

This method retrieves the active animation view from the current page if it exists. However, this method is deprecated and should no longer be used.
Instead, use the new method provided in the <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> interface.

### <a id="VM_API_Post_Operations_ApplicationHandler_GetActivePage"></a> GetActivePage\(\)

Retrieves the active page.

```csharp
public IPage GetActivePage()
```

#### Returns

 IPage

An instance of <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> representing the active page if one exists; otherwise, <code>null</code>.

#### Examples

The following example demonstrates how to use the <code>GetActivePage</code> method:
<pre><code class="lang-csharp">filepath = r'';
filepaths = List[str](1);
filepaths.Add(filepath);
applicationHandler = ApplicationHandler();
applicationHandler.AddDocument(filepaths);
document = applicationHandler.GetDocument(filepath);
page2 = applicationHandler.AddPage("page2");
page3 = applicationHandler.AddPage("page3");
activePage = applicationHandler.GetActivePage();;</code></pre>

#### Remarks

This method searches for the currently active page among all pages. If no active page is found, the method returns <code>null</code>.

### <a id="VM_API_Post_Operations_ApplicationHandler_GetActivePlotView"></a> GetActivePlotView\(\)

Retrieves the active chart view from the current page.

```csharp
[Obsolete]
public IOperationsLine2DViewModelBase GetActivePlotView()
```

#### Returns

 IOperationsLine2DViewModelBase

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase" data-throw-if-not-resolved="false"></xref> representing the active chart view if it exists; otherwise, <code>null</code>.

#### Examples

The following example demonstrates how to use the deprecated <code>GetActivePlotView</code> method and the new method in <code>IPage</code>:
<pre><code class="lang-csharp"></code></pre>

#### Remarks

This method retrieves the active chart view from the current page if it exists. However, this method is deprecated and should no longer be used.
Instead, use the new method provided in the <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> interface.

### <a id="VM_API_Post_Operations_ApplicationHandler_GetDocument_System_String_"></a> GetDocument\(string\)

Retrieves an open document by its file path.

```csharp
public IOperationDocument GetDocument(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of the document to be retrieved.

#### Returns

 IOperationDocument

An instance of <xref href="VM.ViewModels.Post.Interfaces.IOperationDocument" data-throw-if-not-resolved="false"></xref> representing the document if it is open; otherwise, <code>null</code>.

#### Examples

The following example demonstrates how to use the <code>GetDocument</code> method:
<pre><code class="lang-csharp">filepath = r'';
filepaths = List[str](1);
filepaths.Add(filepath);
applicationHandler = ApplicationHandler();
applicationHandler.AddDocument(filepaths);
document = applicationHandler.GetDocument(filepath);</code></pre>

#### Remarks

This method searches for an open document with the specified file path. If no such document is found, the method returns <code>null</code>.

### <a id="VM_API_Post_Operations_ApplicationHandler_GetPage_System_String_"></a> GetPage\(string\)

Retrieves a page by its name.

```csharp
public IPage GetPage(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the page to be retrieved.

#### Returns

 IPage

An instance of <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> representing the page if it is found; otherwise, <code>null</code>.

#### Examples

The following example demonstrates how to use the <code>GetPage</code> method:
<pre><code class="lang-csharp">filepath = r'';
filepaths = List[str](1);
filepaths.Add(filepath);
applicationHandler = ApplicationHandler();
applicationHandler.AddDocument(filepaths);
document = applicationHandler.GetDocument(filepath);
applicationHandler.AddPage("page2");
applicationHandler.AddPage("page3");
page2 = applicationHandler.GetPage("page2");</code></pre>

#### Remarks

This method searches for a page with the specified name. If no such page is found, the method returns <code>null</code>.

### <a id="VM_API_Post_Operations_ApplicationHandler_GetPage_System_Guid_"></a> GetPage\(Guid\)

Retrieves a page by its ID.

```csharp
public IPage GetPage(Guid id)
```

#### Parameters

`id` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

The ID of the page to be retrieved.

#### Returns

 IPage

An instance of <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> representing the page if it is found; otherwise, <code>null</code>.

#### Examples

The following example demonstrates how to use the <code>GetPage</code> method:
<pre><code class="lang-csharp">filepath = r'';
filepaths = List[str](1);
filepaths.Add(filepath);
applicationHandler = ApplicationHandler();
applicationHandler.AddDocument(filepaths);
document = applicationHandler.GetDocument(filepath);
page2 = applicationHandler.AddPage("page2");
page3 = applicationHandler.AddPage("page3");
page = applicationHandler.GetPage(page2.ID);</code></pre>

#### Remarks

This method searches for a page with the specified ID. If no such page is found, the method returns <code>null</code>.

### <a id="VM_API_Post_Operations_ApplicationHandler_GetPages"></a> GetPages\(\)

Retrieves all currently created pages.

```csharp
public IPage[] GetPages()
```

#### Returns

 IPage\[\]

An array of <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> instances representing all currently created pages.

#### Examples

The following example demonstrates how to use the <code>GetPages</code> method:
<pre><code class="lang-csharp">filepath = r'';
filepaths = List[str](1);
filepaths.Add(filepath);
applicationHandler = ApplicationHandler();
applicationHandler.AddDocument(filepaths);
document = applicationHandler.GetDocument(filepath);
page2 = applicationHandler.AddPage("page2");
page3 = applicationHandler.AddPage("page3");
activePage = applicationHandler.GetActivePage();;
pages = applicationHandler.GetPages();</code></pre>

#### Remarks

This method retrieves all currently created pages.

### <a id="VM_API_Post_Operations_ApplicationHandler_GetView_System_Int32_"></a> GetView\(int\)

Retrieves a view by its ID.

```csharp
[Obsolete]
public IView GetView(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The ID of the view to be retrieved.

#### Returns

 IView

An instance of <xref href="VM.Operations.Post.Interfaces.IView" data-throw-if-not-resolved="false"></xref> representing the view if it is found; otherwise, <code>null</code>.

#### Examples

The following example demonstrates how to use the deprecated <code>GetView</code> method and the new <code>GetView</code> method in <code>IPage</code>:
<pre><code class="lang-csharp"></code></pre>

#### Remarks

This method retrieves a view by its ID. However, this method is deprecated and should no longer be used.
The functionality has been moved to the <xref href="VM.Operations.Post.Interfaces.IPage.GetView(System.Int32)" data-throw-if-not-resolved="false"></xref> method.

### <a id="VM_API_Post_Operations_ApplicationHandler_GetView_System_String_"></a> GetView\(string\)

Retrieves a view by its name.

```csharp
[Obsolete]
public IView GetView(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the view to be retrieved.

#### Returns

 IView

An instance of <xref href="VM.Operations.Post.Interfaces.IView" data-throw-if-not-resolved="false"></xref> representing the view if it is found; otherwise, <code>null</code>.

#### Examples

The following example demonstrates how to use the deprecated <code>GetView</code> method and the new <code>GetView</code> method in <code>IPage</code>:
<pre><code class="lang-csharp"></code></pre>

#### Remarks

This method retrieves a view by its name. However, this method is deprecated and should no longer be used.
The functionality has been moved to the <xref href="VM.Operations.Post.Interfaces.IPage.GetView(System.String)" data-throw-if-not-resolved="false"></xref> method.

### <a id="VM_API_Post_Operations_ApplicationHandler_ImportNumeric_VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_System_String_System_Collections_Generic_List_VM_ViewModels_Post_INumericParameter__"></a> ImportNumeric\(IOperationsLine2DViewModelBase, string, List<INumericParameter\>\)

Import the numeric data from the file.​

```csharp
public void ImportNumeric(IOperationsLine2DViewModelBase lineViewModel, string filepath, List<INumericParameter> targets)
```

#### Parameters

`lineViewModel` IOperationsLine2DViewModelBase

The target plot view of the curve to import a numeric data​.

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path to the file containing the exported curves.

`targets` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<INumericParameter\>

A list of <xref href="VM.ViewModels.Post.INumericParameter" data-throw-if-not-resolved="false"></xref> objects that specify the parameters for the curves to be created.

#### Examples

The following example demonstrates how to use the <code>ImportNumeric</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.ExportAllCurves(r"D:\exportaAllCurves.txt");
parameters = List[INumericParameter](2);
parameter = NumericParameter();
parameter.Name = r'Curve2 : X(Hz)';
parameter.TargetX = r'X(sec)';
parameter.TargetY = r'Y(Hz)';
parameters.Add(parameter);
applicationHandler.ImportNumeric(chart, r"D:\exportaAllCurves.txt", parameters);</code></pre>

#### Remarks

This method reads curve data from the specified file and adds the corresponding curves to the chart view.
Each <xref href="VM.ViewModels.Post.INumericParameter" data-throw-if-not-resolved="false"></xref> in the <code class="paramref">targets</code> list contains the following properties:
<ul><li><span class="term">Name</span>The name of the curve to be created.</li><li><span class="term">TargetX</span>The path to the data for the X-axis.</li><li><span class="term">TargetY</span>The path to the data for the Y-axis.</li></ul>

### <a id="VM_API_Post_Operations_ApplicationHandler_RemoveDocument_System_String_"></a> RemoveDocument\(string\)

Closes an open document by its file path.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the CloseDocument function instead.", true)]
public void RemoveDocument(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of the document to be closed.

#### Examples

The following example demonstrates how to use the deprecated <code>RemoveDocument</code> method and the new <code>CloseDocument</code> method:
<pre><code class="lang-csharp"></code></pre>

#### Remarks

This method closes an open document by its file path. However, this method is deprecated and should no longer be used.
Instead, use the <xref href="VM.API.Post.Operations.ApplicationHandler.CloseDocument(System.String)" data-throw-if-not-resolved="false"></xref> method to close documents.

### <a id="VM_API_Post_Operations_ApplicationHandler_RemoveView_System_String_"></a> RemoveView\(string\)

Removes a view by its name.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the CloseView function of the Page class instead.", true)]
public void RemoveView(string viewName)
```

#### Parameters

`viewName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the view to be removed.

#### Examples

The following example demonstrates how to use the deprecated <code>RemoveView</code> method and the new <code>RemoveView</code> method in <code>IPage</code>:
<pre><code class="lang-csharp"></code></pre>

#### Remarks

This method removes a view by its name if it exists. However, this method is deprecated and should no longer be used.
The functionality has been moved to the <xref href="VM.Operations.Post.Interfaces.IPage.CloseView(System.String)" data-throw-if-not-resolved="false"></xref> method.

