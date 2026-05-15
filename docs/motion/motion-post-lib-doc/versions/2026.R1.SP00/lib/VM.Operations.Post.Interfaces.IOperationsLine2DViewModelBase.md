# Interface IOperationsLine2DViewModelBase
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents the base interface for properties and methods that make up a 2D chart view.

```csharp
public interface IOperationsLine2DViewModelBase : IOperationsChartViewModel, IView
```

#### Implements

[IOperationsChartViewModel](VM.Operations.Post.Interfaces.IOperationsChartViewModel.md), 
[IView](VM.Operations.Post.Interfaces.IView.md)

## Examples

To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationsLine2DViewModelBase.py
import sys

# Get the current file's path and set the path for external modules.
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

# Creating a Chart
# Create a new Chart View on the page
# This will create a new chart view with the specified name.
chartView = page.CreateChart("Chart")
chartView.Background = Colors.Gray
chartView.BorderColor = Colors.Red
chartView.FontColor = Colors.White
chartView.ChartTitle = "Chart"
chartView.ChartAxisType = ChartAxisType.Single
chartView.FontFace = FontFamily("Arial")
chartView.FontSize = 16
chartView.FontStyle = OperationAPIService.GetFontStyleFromString("Italic")
chartView.FontWeight = OperationAPIService.GetFontWeightFromString("Bold")

# Documentation Example
# Set array about combination of characteristic and component
curvePaths = List[str]()
curvePaths.Add(r'Displacement/Magnitude')
curvePaths.Add(r'Displacement/X')
curvePaths.Add(r'Displacement/Y')
curvePaths.Add(r'Displacement/Z')

# Create a PlotParameters object to specify the parameters for the plot.
# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
parameters = PlotParameters()
parameters.Paths = curvePaths
parameters.Target = "Crank"

# Add Curves (FilePath, Curve Parameter)
# FilePath - The path of the result to access.
# parameters - The class used as a parameter of the AddCurve function.
# The instance of the curve.
curves = chartView.AddCurves(result_file_path, parameters)

chartView.Remove(curves[3].ID)
chartView.Remove(curves[2])

curves[0].SeriesName = "Crank_Curve"

curveByName = chartView.GetCurve("Crank_Curve")
curveByName.SeriesName = "Crank_Displacement_Magnitude"

curveByID = chartView.GetCurveByID(curves[1].ID)
curveByID.SeriesName = "Crank_Displacement_X"

curvelist = chartView.GetCurves()

index = 0
for curve in curvelist:
    curve.SeriesName = "{0}({1})".format(curve.SeriesName, index)
    index = index + 1

curvelist = chartView.GetCurves("X")

index = 0
for curve in curvelist:
    curve.SeriesName = "{0}({1})".format(curve.SeriesName, index)
    index = index + 1

last_curve = chartView.GetLastCurve()
last_curve.SeriesName = "{0}_Last".format(last_curve.SeriesName)

name_list = chartView.GetCurveNameList()
name_array = list(name_list)

curveByName = chartView.GetCurve(name_array[0])
curveByName.SeriesName = "{0}_By_NameList".format(curveByName.SeriesName)

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_Background"></a> Background

Gets or sets the background color of the chart view.

```csharp
Color Background { get; set; }
```

#### Property Value

 Color

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This property allows you to set the background color of the chart view.
In the UI, this property is represented under the "Color" category with the property name "Back Ground".

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_BorderColor"></a> BorderColor

Gets or sets the border color of the chart view.

```csharp
Color BorderColor { get; set; }
```

#### Property Value

 Color

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This property allows you to set the border color of the chart view.
In the UI, this property is represented under the "Color" category with the property name "Border Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ChartAxisType"></a> ChartAxisType

Gets or sets the axis type of the chart, indicating whether to display the chart's axis as single or multiple.

```csharp
ChartAxisType ChartAxisType { get; set; }
```

#### Property Value

 ChartAxisType

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This property allows you to set the axis type of the chart. It indicates whether the chart's axis is displayed as single or multiple.
In the UI, this property is represented under the "Axis" category with the property name "Axis Type".
The available options are:
<ul><li><xref href="VM.Models.Post.ChartAxisType.Single" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ChartAxisType.Multiple" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ChartTitle"></a> ChartTitle

Gets or sets the title of the chart view.

```csharp
string ChartTitle { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This property allows you to set the title of the chart view.
In the UI, this property is represented under the "Chart" category with the property name "Title".

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_FontColor"></a> FontColor

Gets or sets the font color of the chart view's title.

```csharp
Color FontColor { get; set; }
```

#### Property Value

 Color

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This property allows you to set the font color of the chart view's title.
In the UI, this property is represented under the "Chart" category with the property name "Font Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_FontFace"></a> FontFace

Gets or sets the font face of the chart title.

```csharp
FontFamily FontFace { get; set; }
```

#### Property Value

 FontFamily

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This property allows you to set the font face of the chart title.
In the UI, this property is represented under the "Font" category with the property name "Face".

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_FontSize"></a> FontSize

Gets or sets the font size of the chart title.

```csharp
double FontSize { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This property allows you to set the font size of the chart title.
In the UI, this property is represented under the "Font" category with the property name "Size".

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_FontStyle"></a> FontStyle

Gets or sets the font style of the chart title.

```csharp
FontStyle FontStyle { get; set; }
```

#### Property Value

 FontStyle

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This property allows you to set the font style of the chart title.
In the UI, this property is represented under the "Font" category with the property name "Style".
The supported types are:
<ul><li><xref href="System.Windows.FontStyles.Italic" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontStyles.Normal" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontStyles.Oblique" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_FontWeight"></a> FontWeight

Gets or sets the font weight of the chart title.

```csharp
FontWeight FontWeight { get; set; }
```

#### Property Value

 FontWeight

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This property allows you to set the font weight of the chart title.
In the UI, this property is represented under the "Font" category with the property name "Weight".
The available options are:
<ul><li><xref href="System.Windows.FontWeights.Bold" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontWeights.Normal" data-throw-if-not-resolved="false"></xref></li></ul>

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_AddCurves_System_String_VM_Models_OutputReader_PlotParameters_"></a> AddCurves\(string, PlotParameters\)

Adds curves to the chart by reading data from the specified file path and using the given plot parameters. Please refer to this [here](../getting_started_operation_api_using_py.md#how-to-input-the-value-of-the-target-into-the-function-parameter) link.

```csharp
IOperationsLineDataSeriesViewModelBase[] AddCurves(string filepath, PlotParameters parameters)
```

#### Parameters

`filepath` string

The path to the file containing the curve data.

`parameters` [PlotParameters](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.OutputReader/Models/PlotParameters.cs)

The parameters used for plotting the curves, including target entity, data paths, coordinate system, and plot data type.
<ul><li><xref href="VM.Models.OutputReader.PlotParameters.Target" data-throw-if-not-resolved="false"></xref> - The target entity for plotting the curves.</li><li><xref href="VM.Models.OutputReader.PlotParameters.PlotDataType" data-throw-if-not-resolved="false"></xref> - Default or Plot Data.</li><li><xref href="VM.Models.OutputReader.PlotParameters.Paths" data-throw-if-not-resolved="false"></xref> - An Paths representing the paths to the data to be read. This is a combination of characteristic and component.</li><li><xref href="VM.Models.OutputReader.PlotParameters.CSYS" data-throw-if-not-resolved="false"></xref> - The coordinate system to be used.</li></ul>

#### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\[\]

An array of <xref href="VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase" data-throw-if-not-resolved="false"></xref> representing the added curves.

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This method reads data from the specified file path and adds curves to the chart using the provided plot parameters.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ExportAllCurves_System_String_"></a> ExportAllCurves\(string\)

Exports all curves contained in the chart to the specified file path without displaying a file save dialog.

```csharp
void ExportAllCurves(string filepath)
```

#### Parameters

`filepath` string

The file path where the curves will be saved.

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This method exports all data series contained in the chart without displaying a file save dialog. 
It accepts a file path as a parameter and saves the curves directly to that location. 
This method is recommended for use with the OperationAPI, especially for repetitive tasks or scenarios 
requiring automation.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_ExportAllDataSeries"></a> ExportAllDataSeries\(\)

Exports all data series included in the chart.

```csharp
void ExportAllDataSeries()
```

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This method exports all curves contained in the chart. When used via the OperationAPI, a file dialog appears 
on the screen to specify the file save location. Therefore, it is not recommended for repetitive tasks or 
scenarios requiring automation. Instead, it is recommended to use the <xref href="VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.ExportAllCurves(System.String)" data-throw-if-not-resolved="false"></xref> method, 
which does not display a file save dialog.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetAxis_System_String_"></a> GetAxis\(string\)

Retrieves an axis by its name.

```csharp
IOperationsAxisViewModelBase GetAxis(string name)
```

#### Parameters

`name` string

The name of the axis to be retrieved.

#### Returns

 [IOperationsAxisViewModelBase](VM.Operations.Post.Interfaces.IOperationsAxisViewModelBase.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsAxisViewModelBase" data-throw-if-not-resolved="false"></xref> representing the axis with the specified name,
or <code>null</code> if no such axis exists.

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This method searches for an axis with the given name and returns the corresponding instance.
If no axis with the specified name is found, the method returns <code>null</code>.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurve_System_String_"></a> GetCurve\(string\)

Gets a curve from the chart by its name.

```csharp
IOperationsLineDataSeriesViewModelBase GetCurve(string name)
```

#### Parameters

`name` string

The name of the curve to retrieve.

#### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase" data-throw-if-not-resolved="false"></xref> representing the curve with the specified name, or <code>null</code> if no such curve exists.

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This method searches for and returns the curve with the given name from the chart. If no curve with the specified name is found, it returns <code>null</code>.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurveByID_System_String_"></a> GetCurveByID\(string\)

Gets a curve from the chart by its ID.

```csharp
IOperationsLineDataSeriesViewModelBase GetCurveByID(string id)
```

#### Parameters

`id` string

The ID of the curve to retrieve.

#### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase" data-throw-if-not-resolved="false"></xref> representing the curve with the specified ID, or <code>null</code> if no such curve exists.

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This method searches for and returns the curve with the given ID from the chart. If no curve with the specified ID is found, it returns <code>null</code>.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurveNameList"></a> GetCurveNameList\(\)

Gets a list of names of all curves in the chart view.

```csharp
IEnumerable<string> GetCurveNameList()
```

#### Returns

 IEnumerable<string\>

A collection of the names of all curves currently displayed in the chart view.

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This method retrieves the names of all the curves that are currently displayed in the chart view.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurves"></a> GetCurves\(\)

Gets all the curves currently included in the chart view.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> GetCurves()
```

#### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of all the curves currently displayed in the chart view.

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This method retrieves all the curves that are currently displayed in the chart view.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetCurves_System_String_"></a> GetCurves\(string\)

Gets all curves from the chart view that contain the specified substring in their names.

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> GetCurves(string name)
```

#### Parameters

`name` string

A substring to search for within the curve names.

#### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

A collection of all curves whose names contain the specified substring.

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This method searches for and returns all curves whose names contain the specified substring.
If no such curves are found, an empty collection is returned.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetLastCurve"></a> GetLastCurve\(\)

Gets the most recently added curve from the chart view.

```csharp
IOperationsLineDataSeriesViewModelBase GetLastCurve()
```

#### Returns

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase" data-throw-if-not-resolved="false"></xref> representing the last added curve, or <code>null</code> if no curves are present.

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This method retrieves the curve that was added last to the chart view. If no curves have been added, it returns <code>null</code>.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_Remove_System_String_"></a> Remove\(string\)

Removes a curve from the chart by its id.

```csharp
void Remove(string id)
```

#### Parameters

`id` string

The id of the curve to be removed.

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This method deletes the curve with the specified id from the chart. If no curve with the given id exists, no action is taken.

### <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_Remove_VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_"></a> Remove\(IOperationsLineDataSeriesViewModelBase\)

Removes a curve from the chart by its instance.

```csharp
void Remove(IOperationsLineDataSeriesViewModelBase curve)
```

#### Parameters

`curve` [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

The instance of the curve to be removed.

#### Examples

For an example that includes this property, see the [Interface IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

#### Remarks

This method deletes the specified curve instance from the chart. If the provided curve instance does not exist in the chart, no action is taken.

