# Class ApplicationHandler

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

This is the class to operate the OperationAPI.

```python
public class ApplicationHandler
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ??
[ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md)

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># ApplicationHandler.py
import sys

current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'
sys.path.append(external_modules_path)

from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# The MessageBox will not be shown while the API is running.
applicationHandler.IsShowMessageBox = False

# Import result file
result_file_path = get_result_file_path()

# Set array about result file
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Get Active Page
page = applicationHandler.GetActivePage()

page.FullName = "Page1"

page2 = applicationHandler.AddPage("Page2")
page.Activate()

# Create View
document = applicationHandler.GetDocument(result_file_path)
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

animation = page.CreateAnimation(dynamic_analysis, "ResultAnimation")

chart = page.CreateChart("Chart")

# The output path is 'examples/Output'.
output_dir = get_output_directory()
export_image_filepath = combine_path(output_dir, r'Image.png')
applicationHandler.ExportImage(chart, export_image_filepath, ImageFormat.Png, 1920, 1080)

# Get Page
page2 = applicationHandler.GetPage("Page2")
page2.Activate()

# Creating a Chart
chart = page2.CreateChart("Chart")

file_path = combine_path(output_dir, r'example.csv')
with open(file_path, 'w') as file:
    file.write("X,Y\n")
    file.write("0.1,5\n")
    file.write("0.5,35\n")
    file.write("0.95,75\n")

# Documentation Example
parameters = List[INumericParameter](2)
parameter = NumericParameter()
parameter.Name = r'OrderTrackingCurve'
parameter.TargetX = r'X'
parameter.TargetY = r'Y'
parameters.Add(parameter)
chart.ImportNumeric(file_path, parameters)

# Add Page
page3 = applicationHandler.AddPage("Page3")
page3.Activate()

# Close the Pages
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Constructors

### ApplicationHandler\(\)

Initializes a new instance of the <xref href="VM.API.Post.Operations.ApplicationHandler" data-throw-if-not-resolved="false"></xref> class, enabling the OperationAPI to function.

```python
public ApplicationHandler()
```

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This constructor sets up the necessary configurations to allow the OperationAPI to operate.

## Properties

### IsShowMessageBox

Gets or sets a flag that determines whether a message box should be displayed or skipped when the API is executed

```python
public bool IsShowMessageBox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

When set to true, the message box will be shown during the execution of the API.
When set to false, the message box will be skipped, and the process will continue without interruption. By default, the message box is not displayed.

## Methods

### AddDocument\(IList<string\>\)

Imports results by adding documents to the UI.

```python
public void AddDocument(IList<string> filepath)
```

#### Parameters

`filepath` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

A list of file paths representing the results to be imported.

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method takes a list of file paths as input parameters and imports the corresponding results into the UI.

### AddPage\(string\)

Adds a new page with the specified name.

```python
public IPage AddPage(string name = null)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the page to be added. If no name is provided, a default name is used.

#### Returns

 IPage

An instance of <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> representing the newly added page.

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method adds a new page with the given name. If no name is provided, the page is created with a default name.

### AddPlotView\(\)

Adds a new plot view by creating a chart.

```python
[Obsolete]
public IOperationsLine2DViewModelBase AddPlotView()
```

#### Returns

 IOperationsLine2DViewModelBase

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase" data-throw-if-not-resolved="false"></xref> representing the newly added plot view.

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method creates a new chart. However, this method is deprecated and should no longer be used.
Instead, use the <xref href="VM.Operations.Post.Interfaces.IPage.CreateChart(System.String)" data-throw-if-not-resolved="false"></xref> method to create a chart.

### Close\(\)

Closes an open application.

```python
public void Close()
```

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method closes an open application.

### CloseDocument\(string\)

Closes an open document by its file path.

```python
public void CloseDocument(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of the document to be closed.

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method closes an open document by its file path.

### ClosePage\(Guid\)

Closes an open page by its ID.

```python
public void ClosePage(Guid id)
```

#### Parameters

`id` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

The ID of the page to be closed.

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method closes an open page by its ID.

### ClosePage\(string\)

Closes an open page by its name.

```python
public void ClosePage(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the page to be closed.

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method closes an open page by its name.

### ExportImage\(IView, string, ImageFormat, double?, double?\)

Exports the current image to a specified file format. This function saves the image to the given file path.

```python
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

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method allows you to export an image to a desired file path in a specified format. Supported formats are 
Png, Jpeg, and Bmp. You can also specify the desired dimensions for the exported image. If width or height is 
not provided, the original dimensions of the image will be used.

### ExportImage\(IView, string, ExportType, double?, double?\)

Exports the current image to a specified file format. This function saves the image to the given file path.

```python
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

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method exports the current view to an image file. However, this method is deprecated and should no longer be used.

### GetActiveAnimationView\(\)

Retrieves the active animation view from the current page.

```python
[Obsolete]
public IOperationsAnimation GetActiveAnimationView()
```

#### Returns

 IOperationsAnimation

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsAnimation" data-throw-if-not-resolved="false"></xref> representing the active animation view if it exists; otherwise, <code>null</code>.

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method retrieves the active animation view from the current page if it exists. However, this method is deprecated and should no longer be used.
Instead, use the new method provided in the <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> interface.

### GetActivePage\(\)

Retrieves the active page.

```python
public IPage GetActivePage()
```

#### Returns

 IPage

An instance of <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> representing the active page if one exists; otherwise, <code>null</code>.

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method searches for the currently active page among all pages. If no active page is found, the method returns <code>null</code>.

### GetActivePlotView\(\)

Retrieves the active chart view from the current page.

```python
[Obsolete]
public IOperationsLine2DViewModelBase GetActivePlotView()
```

#### Returns

 IOperationsLine2DViewModelBase

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase" data-throw-if-not-resolved="false"></xref> representing the active chart view if it exists; otherwise, <code>null</code>.

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method retrieves the active chart view from the current page if it exists. However, this method is deprecated and should no longer be used.
Instead, use the new method provided in the <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> interface.

### GetDocument\(string\)

Retrieves an open document by its file path.

```python
public IOperationDocument GetDocument(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of the document to be retrieved.

#### Returns

 IOperationDocument

An instance of <xref href="VM.ViewModels.Post.Interfaces.IOperationDocument" data-throw-if-not-resolved="false"></xref> representing the document if it is open; otherwise, <code>null</code>.

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method searches for an open document with the specified file path. If no such document is found, the method returns <code>null</code>.

### GetPage\(string\)

Retrieves a page by its name.

```python
public IPage GetPage(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the page to be retrieved.

#### Returns

 IPage

An instance of <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> representing the page if it is found; otherwise, <code>null</code>.

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method searches for a page with the specified name. If no such page is found, the method returns <code>null</code>.

### GetPage\(Guid\)

Retrieves a page by its ID.

```python
public IPage GetPage(Guid id)
```

#### Parameters

`id` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

The ID of the page to be retrieved.

#### Returns

 IPage

An instance of <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> representing the page if it is found; otherwise, <code>null</code>.

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method searches for a page with the specified ID. If no such page is found, the method returns <code>null</code>.

### GetPages\(\)

Retrieves all currently created pages.

```python
public IPage[] GetPages()
```

#### Returns

 IPage\[\]

An array of <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> instances representing all currently created pages.

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method retrieves all currently created pages.

### GetView\(int\)

Retrieves a view by its ID.

```python
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

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method retrieves a view by its ID. However, this method is deprecated and should no longer be used.
The functionality has been moved to the <xref href="VM.Operations.Post.Interfaces.IPage.GetView(System.Int32)" data-throw-if-not-resolved="false"></xref> method.

### GetView\(string\)

Retrieves a view by its name.

```python
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

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method retrieves a view by its name. However, this method is deprecated and should no longer be used.
The functionality has been moved to the <xref href="VM.Operations.Post.Interfaces.IPage.GetView(System.String)" data-throw-if-not-resolved="false"></xref> method.

### ImportNumeric\(IOperationsLine2DViewModelBase, string, List<INumericParameter\>\)

Import the numeric data from the file.??

```python
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the ImportNumeric function of the Chart class instead.", true)]
public void ImportNumeric(IOperationsLine2DViewModelBase lineViewModel, string filepath, List<INumericParameter> targets)
```

#### Parameters

`lineViewModel` IOperationsLine2DViewModelBase

The target plot view of the curve to import a numeric data??

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path to the file containing the imported curves.  Supported file formats include (*.txt, *.csv, *.out, *.rsp).

`targets` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<INumericParameter\>

A list of <xref href="VM.ViewModels.Post.INumericParameter" data-throw-if-not-resolved="false"></xref> objects that specify the parameters for the curves to be created.

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method reads curve data from the specified file and adds the corresponding curves to the chart view.
Each <xref href="VM.ViewModels.Post.INumericParameter" data-throw-if-not-resolved="false"></xref> in the <code class="paramref">targets</code> list contains the following properties:
<ul><li><span class="term">Name</span>The name of the curve to be created.</li><li><span class="term">TargetX</span>The path to the data for the X-axis.</li><li><span class="term">TargetY</span>The path to the data for the Y-axis.</li></ul>

### RemoveDocument\(string\)

Closes an open document by its file path.

```python
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the CloseDocument function instead.", true)]
public void RemoveDocument(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of the document to be closed.

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method closes an open document by its file path. However, this method is deprecated and should no longer be used.
Instead, use the <xref href="VM.API.Post.Operations.ApplicationHandler.CloseDocument(System.String)" data-throw-if-not-resolved="false"></xref> method to close documents.

### RemoveView\(string\)

Removes a view by its name.

```python
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the CloseView function of the Page class instead.", true)]
public void RemoveView(string viewName)
```

#### Parameters

`viewName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the view to be removed.

#### Examples

For an example that includes this property, see the [ApplicationHandler](#VM_API_Post_Operations_ApplicationHandler).

#### Remarks

This method removes a view by its name if it exists. However, this method is deprecated and should no longer be used.
The functionality has been moved to the <xref href="VM.Operations.Post.Interfaces.IPage.CloseView(System.String)" data-throw-if-not-resolved="false"></xref> method.


