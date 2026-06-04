# Interface IOperationsLegendModifier
<a id="VM_Operations_Post_Interfaces_IOperationsLegendModifier"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

This interface contains properties that modify the attributes of the Legend.

```csharp
public interface IOperationsLegendModifier
```

## Examples

To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationsLegendModifier.py
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

chartView.Legend.Background = Colors.Red
chartView.Legend.FontColor = Colors.Black
chartView.Legend.FontFace = FontFamily("Arial")
chartView.Legend.FontSize = 15
chartView.Legend.FontStyle = OperationAPIService.GetFontStyleFromString("Italic")
chartView.Legend.FontWeight = OperationAPIService.GetFontWeightFromString("Bold")
chartView.Legend.LegendPlacement = LegendPlacementType.Bottom
chartView.Legend.ItemsInFilter = "Visible Curves"

# Close the Pages
page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsLegendModifier_Background"></a> Background

Gets or sets the background color of the legend.

```csharp
Color Background { get; set; }
```

#### Property Value

 Color

#### Examples

For an example that includes this property, see the [Interface IOperationsLegendModifier](VM.Operations.Post.Interfaces.IOperationsLegendModifier.md).

#### Remarks

This property allows you to set the background color of the legend.
In the UI, this property is represented under the "Font" category with the property name "Background".

### <a id="VM_Operations_Post_Interfaces_IOperationsLegendModifier_FontColor"></a> FontColor

Gets or sets the font color of the legend.

```csharp
Color FontColor { get; set; }
```

#### Property Value

 Color

#### Examples

For an example that includes this property, see the [Interface IOperationsLegendModifier](VM.Operations.Post.Interfaces.IOperationsLegendModifier.md).

#### Remarks

This property allows you to set the font color of the legend.
In the UI, this property is represented under the "Font" category with the property name "Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsLegendModifier_FontFace"></a> FontFace

Gets or sets the font face of the chart title.

```csharp
FontFamily FontFace { get; set; }
```

#### Property Value

 FontFamily

#### Examples

For an example that includes this property, see the [Interface IOperationsLegendModifier](VM.Operations.Post.Interfaces.IOperationsLegendModifier.md).

#### Remarks

This property allows you to set the font face of the chart title.
In the UI, this property is represented under the "Font" category with the property name "Face".

### <a id="VM_Operations_Post_Interfaces_IOperationsLegendModifier_FontSize"></a> FontSize

Gets or sets the font size of the chart title.

```csharp
double FontSize { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsLegendModifier](VM.Operations.Post.Interfaces.IOperationsLegendModifier.md).

#### Remarks

This property allows you to set the font size of the chart title.
In the UI, this property is represented under the "Font" category with the property name "Size".

### <a id="VM_Operations_Post_Interfaces_IOperationsLegendModifier_FontStyle"></a> FontStyle

Gets or sets the font style of the chart title.

```csharp
FontStyle FontStyle { get; set; }
```

#### Property Value

 FontStyle

#### Examples

For an example that includes this property, see the [Interface IOperationsLegendModifier](VM.Operations.Post.Interfaces.IOperationsLegendModifier.md).

#### Remarks

This property allows you to set the font style of the chart title.
In the UI, this property is represented under the "Font" category with the property name "Style".
The supported types are:
<ul><li><xref href="System.Windows.FontStyles.Italic" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontStyles.Normal" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontStyles.Oblique" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsLegendModifier_FontWeight"></a> FontWeight

Gets or sets the font weight of the chart title.

```csharp
FontWeight FontWeight { get; set; }
```

#### Property Value

 FontWeight

#### Examples

For an example that includes this property, see the [Interface IOperationsLegendModifier](VM.Operations.Post.Interfaces.IOperationsLegendModifier.md).

#### Remarks

This property allows you to set the font weight of the chart title.
In the UI, this property is represented under the "Font" category with the property name "Weight".
The available options are:
<ul><li><xref href="System.Windows.FontWeights.Bold" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontWeights.Normal" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsLegendModifier_ItemsInFilter"></a> ItemsInFilter

Gets or sets the filter option for displaying curves in the chart.

```csharp
string ItemsInFilter { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationsLegendModifier](VM.Operations.Post.Interfaces.IOperationsLegendModifier.md).

#### Remarks

The ItemsInFilter property allows you to control which curves are shown in the chart.
By specifying either AllSeries or AllVisibleSeries, you can choose to display all curves or only the visible ones.
The available options are:
<ul><li>"All Curves"</li><li>"Visible Curves"</li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsLegendModifier_LegendPlacement"></a> LegendPlacement

Gets or sets the position of the legend in the chart.

```csharp
LegendPlacementType LegendPlacement { get; set; }
```

#### Property Value

 LegendPlacementType

#### Examples

For an example that includes this property, see the [Interface IOperationsLegendModifier](VM.Operations.Post.Interfaces.IOperationsLegendModifier.md).

#### Remarks

Use this property to control the placement of the legend within or outside the chart area.
By default, the legend is placed inside the chart area.
The placement can be adjusted to improve the visibility and layout of the chart.

