# Class ApplicationHandler
<a id="VM_API_Post_Operations_ApplicationHandler"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

This is the class to operate the OperationAPI.

```csharp
public class ApplicationHandler
```

#### Inheritance

object ← 
[ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md)

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# ApplicationHandler.py
# -*- coding: utf-8 -*-
import sys

# Get the current file's path and set the path for external modules.
current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'
sys.path.append(external_modules_path)

# Import necessary modules
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
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
applicationHandler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = applicationHandler.GetActivePage()

# Change the name of the active page
page.FullName = "Page1"

# Add a new page
# This will create a new page and activate it.
# You can specify the page name when the page is created.
page2 = applicationHandler.AddPage("Page2")

# Activate the first page
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
animation = page.CreateAnimation(dynamic_analysis, "AnimationView")

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
chart = page.CreateChart("ChartView")

# The path where the image will be saved.
export_image_filepath = combine_path(output_dir, r'Image.png')

# Export the chart as an image
# chart - Export the chart view as an image. The export target can be AnimationView or ChartView.
# export_image_filepath - The path where the image will be saved.
# ImageFormat.Png - The format of the image to be exported.
# ImageFormat can be Png, Jpeg, Bmp.
# Width - The width of the exported image. The optional width for the exported image. If not specified, the original width is used.
# Height - The height of the exported image. The optional height for the exported image. If not specified, the original height is used.
applicationHandler.ExportImage(chart, export_image_filepath, ImageFormat.Png, 1920, 1080)

# Get Page - This retrieves a page by its name.
page2 = applicationHandler.GetPage("Page2")

# Activate the second page
page2.Activate()

# Creating a Chart
# Create a new Chart View on the second page
# This will create a new chart view with the specified name.
chart = page2.CreateChart("Chart")

# Create a Plot data
# For ImportNumeric, a CSV file is created with sample data.
output_dir = get_output_directory()
file_path = combine_path(output_dir, r'example.csv')
with open(file_path, 'w') as file:
    file.write("X,Y\n")
    file.write("0.1,5\n")
    file.write("0.5,35\n")
    file.write("0.95,75\n")

# Importing Numeric Data
parameters = List[INumericParameter](2)

# To create a curve from a file, create a NumericParameter.
# Name - The name of the curve to be created.
# TargetX - The name of the X-axis data.
# TargetY - The name of the Y-axis data.
# In this example, a curve named 'OrderTrackingCurve' is created, and data corresponding to the X and Y headers is retrieved from the file.
parameter = NumericParameter()
parameter.Name = r'OrderTrackingCurve'
parameter.TargetX = r'X'
parameter.TargetY = r'Y'
parameters.Add(parameter)

# file_path - The path to the file containing the numeric data.
# parameters - The list of numeric parameters that define how to interpret the data in the file.
chart.ImportNumeric(file_path, parameters)

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
```

## Constructors

### <a id="VM_API_Post_Operations_ApplicationHandler__ctor"></a> ApplicationHandler\(\)

Initializes a new instance of the <xref href="VM.API.Post.Operations.ApplicationHandler" data-throw-if-not-resolved="false"></xref> class, enabling the OperationAPI to function.

```csharp
public ApplicationHandler()
```

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This constructor sets up the necessary configurations to allow the OperationAPI to operate.

## Properties

### <a id="VM_API_Post_Operations_ApplicationHandler_IsShowMessageBox"></a> IsShowMessageBox

Gets or sets a flag that determines whether a message box should be displayed or skipped when the API is executed

```csharp
public bool IsShowMessageBox { get; set; }
```

#### Property Value

 bool

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

When set to true, the message box will be shown during the execution of the API.
When set to false, the message box will be skipped, and the process will continue without interruption. By default, the message box is not displayed.

## Methods

### <a id="VM_API_Post_Operations_ApplicationHandler_AddDocument_System_Collections_Generic_IList_System_String__"></a> AddDocument\(IList<string\>\)

Imports results by adding documents to the UI.

```csharp
public void AddDocument(IList<string> filepath)
```

#### Parameters

`filepath` IList<string\>

A list of file paths representing the results to be imported.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method takes a list of file paths as input parameters and imports the corresponding results into the UI.

### <a id="VM_API_Post_Operations_ApplicationHandler_AddPage_System_String_"></a> AddPage\(string\)

Adds a new page with the specified name.

```csharp
public IPage AddPage(string name = null)
```

#### Parameters

`name` string

The name of the page to be added. If no name is provided, a default name is used.

#### Returns

 IPage

An instance of <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> representing the newly added page.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method adds a new page with the given name. If no name is provided, the page is created with a default name.

### <a id="VM_API_Post_Operations_ApplicationHandler_AddPlotView"></a> AddPlotView\(\)

Adds a new plot view by creating a chart.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the CreateChart function of the IPage interface instead.", true)]
public IOperationsLine2DViewModelBase AddPlotView()
```

#### Returns

 IOperationsLine2DViewModelBase

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase" data-throw-if-not-resolved="false"></xref> representing the newly added plot view.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method creates a new chart. However, this method is deprecated and should no longer be used.
Instead, use the <xref href="VM.Operations.Post.Interfaces.IPage.CreateChart(System.String)" data-throw-if-not-resolved="false"></xref> method to create a chart.

### <a id="VM_API_Post_Operations_ApplicationHandler_Close"></a> Close\(\)

Closes an open application.

```csharp
public void Close()
```

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method closes an open application.

### <a id="VM_API_Post_Operations_ApplicationHandler_CloseDocument_System_String_"></a> CloseDocument\(string\)

Closes an open document by its file path.

```csharp
public void CloseDocument(string filepath)
```

#### Parameters

`filepath` string

The file path of the document to be closed.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method closes an open document by its file path.

### <a id="VM_API_Post_Operations_ApplicationHandler_ClosePage_System_Guid_"></a> ClosePage\(Guid\)

Closes an open page by its ID.

```csharp
public void ClosePage(Guid id)
```

#### Parameters

`id` Guid

The ID of the page to be closed.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method closes an open page by its ID.

### <a id="VM_API_Post_Operations_ApplicationHandler_ClosePage_System_String_"></a> ClosePage\(string\)

Closes an open page by its name.

```csharp
public void ClosePage(string name)
```

#### Parameters

`name` string

The name of the page to be closed.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method closes an open page by its name.

### <a id="VM_API_Post_Operations_ApplicationHandler_DurabilityAnalysis_VM_ViewModels_Post_IDurabilityAnalysisParameter_"></a> DurabilityAnalysis\(IDurabilityAnalysisParameter\)

Performs durability analysis based on the provided parameters.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the RunFatigueAnalysisAndGenerateContours function of the DurabilityAnalysis class instead.", true)]
public bool DurabilityAnalysis(IDurabilityAnalysisParameter parameter)
```

#### Parameters

`parameter` IDurabilityAnalysisParameter

An instance of <xref href="VM.ViewModels.Post.IDurabilityAnalysisParameter" data-throw-if-not-resolved="false"></xref> containing the parameters required for the analysis.

#### Returns

 bool

A <xref href="System.Boolean" data-throw-if-not-resolved="false"></xref> value indicating whether the durability analysis and contour generation were successful.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method first generates a fatigue analysis using the provided parameters.  
If the fatigue analysis is successful, it proceeds to generate fatigue contours.  
If either step fails, the method returns <code>false</code>.

### <a id="VM_API_Post_Operations_ApplicationHandler_ExportImage_VM_Operations_Post_Interfaces_IView_System_String_VM_Models_Post_ImageFormat_System_Nullable_System_Double__System_Nullable_System_Double__"></a> ExportImage\(IView, string, ImageFormat, double?, double?\)

Exports the current image to a specified file format. This function saves the image to the given file path.

```csharp
public void ExportImage(IView viewViewModel, string filepath, ImageFormat format, double? width = null, double? height = null)
```

#### Parameters

`viewViewModel` IView

Represents the target to be captured.

`filepath` string

The path where the image file will be saved.

`format` ImageFormat

The format in which the image will be saved. Supported formats are Png, Jpeg, and Bmp.
The available options are:
<ul><li><xref href="VM.Models.Post.ImageFormat.Bmp" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ImageFormat.Jpeg" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ImageFormat.Png" data-throw-if-not-resolved="false"></xref></li></ul>

`width` double?

The optional width for the exported image. If not specified, the original width is used.

`height` double?

The optional height for the exported image. If not specified, the original height is used.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method allows you to export an image to a desired file path in a specified format. Supported formats are 
Png, Jpeg, and Bmp. You can also specify the desired dimensions for the exported image. If width or height is 
not provided, the original dimensions of the image will be used.

### <a id="VM_API_Post_Operations_ApplicationHandler_ExportImage_VM_Operations_Post_Interfaces_IView_System_String_SciChart_Core_ExportType_System_Nullable_System_Double__System_Nullable_System_Double__"></a> ExportImage\(IView, string, ExportType, double?, double?\)

Exports the current image to a specified file format. This function saves the image to the given file path.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the ExportImage function of the IView Interface instead.", true)]
public void ExportImage(IView lineViewModel, string filepath, ExportType exportType, double? width = null, double? height = null)
```

#### Parameters

`lineViewModel` IView

The view model to be exported.

`filepath` string

The file path where the image will be saved.

`exportType` ExportType

The type of export format (e.g., PNG, JPEG).

`width` double?

The optional width of the exported image. If not specified, the default width is used.

`height` double?

The optional height of the exported image. If not specified, the default height is used.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method exports the current view to an image file. However, this method is deprecated and should no longer be used.

### <a id="VM_API_Post_Operations_ApplicationHandler_GetActiveAnimationView"></a> GetActiveAnimationView\(\)

Retrieves the active animation view from the current page.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the GetActiveView function of the IPage interface instead.", true)]
public IOperationsAnimation GetActiveAnimationView()
```

#### Returns

 IOperationsAnimation

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsAnimation" data-throw-if-not-resolved="false"></xref> representing the active animation view if it exists; otherwise, <code>null</code>.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

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

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method searches for the currently active page among all pages. If no active page is found, the method returns <code>null</code>.

### <a id="VM_API_Post_Operations_ApplicationHandler_GetActivePlotView"></a> GetActivePlotView\(\)

Retrieves the active chart view from the current page.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the GetActiveView function of the IPage interface instead.", true)]
public IOperationsLine2DViewModelBase GetActivePlotView()
```

#### Returns

 IOperationsLine2DViewModelBase

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase" data-throw-if-not-resolved="false"></xref> representing the active chart view if it exists; otherwise, <code>null</code>.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method retrieves the active chart view from the current page if it exists. However, this method is deprecated and should no longer be used.
Instead, use the new method provided in the <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> interface.

### <a id="VM_API_Post_Operations_ApplicationHandler_GetDocument_System_String_"></a> GetDocument\(string\)

Retrieves an open document by its file path.

```csharp
public IOperationDocument GetDocument(string filepath)
```

#### Parameters

`filepath` string

The file path of the document to be retrieved.

#### Returns

 IOperationDocument

An instance of <xref href="VM.ViewModels.Post.Interfaces.IOperationDocument" data-throw-if-not-resolved="false"></xref> representing the document if it is open; otherwise, <code>null</code>.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method searches for an open document with the specified file path. If no such document is found, the method returns <code>null</code>.

### <a id="VM_API_Post_Operations_ApplicationHandler_GetPage_System_String_"></a> GetPage\(string\)

Retrieves a page by its name.

```csharp
public IPage GetPage(string name)
```

#### Parameters

`name` string

The name of the page to be retrieved.

#### Returns

 IPage

An instance of <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> representing the page if it is found; otherwise, <code>null</code>.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method searches for a page with the specified name. If no such page is found, the method returns <code>null</code>.

### <a id="VM_API_Post_Operations_ApplicationHandler_GetPage_System_Guid_"></a> GetPage\(Guid\)

Retrieves a page by its ID.

```csharp
public IPage GetPage(Guid id)
```

#### Parameters

`id` Guid

The ID of the page to be retrieved.

#### Returns

 IPage

An instance of <xref href="VM.Operations.Post.Interfaces.IPage" data-throw-if-not-resolved="false"></xref> representing the page if it is found; otherwise, <code>null</code>.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

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

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method retrieves all currently created pages.

### <a id="VM_API_Post_Operations_ApplicationHandler_GetView_System_Int32_"></a> GetView\(int\)

Retrieves a view by its ID.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the GetView function of the IPage interface instead.", true)]
public IView GetView(int id)
```

#### Parameters

`id` int

The ID of the view to be retrieved.

#### Returns

 IView

An instance of <xref href="VM.Operations.Post.Interfaces.IView" data-throw-if-not-resolved="false"></xref> representing the view if it is found; otherwise, <code>null</code>.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method retrieves a view by its ID. However, this method is deprecated and should no longer be used.
The functionality has been moved to the <xref href="VM.Operations.Post.Interfaces.IPage.GetView(System.Int32)" data-throw-if-not-resolved="false"></xref> method.

### <a id="VM_API_Post_Operations_ApplicationHandler_GetView_System_String_"></a> GetView\(string\)

Retrieves a view by its name.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the GetView function of the IPage interface instead.", true)]
public IView GetView(string name)
```

#### Parameters

`name` string

The name of the view to be retrieved.

#### Returns

 IView

An instance of <xref href="VM.Operations.Post.Interfaces.IView" data-throw-if-not-resolved="false"></xref> representing the view if it is found; otherwise, <code>null</code>.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method retrieves a view by its name. However, this method is deprecated and should no longer be used.
The functionality has been moved to the <xref href="VM.Operations.Post.Interfaces.IPage.GetView(System.String)" data-throw-if-not-resolved="false"></xref> method.

### <a id="VM_API_Post_Operations_ApplicationHandler_ImportNumeric_VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_System_String_System_Collections_Generic_List_VM_ViewModels_Post_INumericParameter__"></a> ImportNumeric\(IOperationsLine2DViewModelBase, string, List<INumericParameter\>\)

Import the numeric data from the file.​

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the ImportNumeric function of the Chart class instead.", true)]
public void ImportNumeric(IOperationsLine2DViewModelBase lineViewModel, string filepath, List<INumericParameter> targets)
```

#### Parameters

`lineViewModel` IOperationsLine2DViewModelBase

The target plot view of the curve to import a numeric data​.

`filepath` string

The path to the file containing the imported curves.  Supported file formats include (*.txt, *.csv, *.out, *.rsp).

`targets` List<INumericParameter\>

A list of <xref href="VM.ViewModels.Post.INumericParameter" data-throw-if-not-resolved="false"></xref> objects that specify the parameters for the curves to be created.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

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

`filepath` string

The file path of the document to be closed.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

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

`viewName` string

The name of the view to be removed.

#### Examples

For an example that includes this property, see the [ApplicationHandler](VM.API.Post.Operations.ApplicationHandler.md).

#### Remarks

This method removes a view by its name if it exists. However, this method is deprecated and should no longer be used.
The functionality has been moved to the <xref href="VM.Operations.Post.Interfaces.IPage.CloseView(System.String)" data-throw-if-not-resolved="false"></xref> method.

