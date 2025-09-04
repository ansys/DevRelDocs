#  Interface IOperationsContourViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for the contour view model.

```python
public interface IOperationsContourViewModel
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationsContourViewModel.py
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

# Find Page
pages = applicationHandler.GetPages()

findViews = list()
for page in pages :
    views = page.GetViews()
    animationViews = [view for view in views if view.ViewType == ViewType.Animation]
    for animationView in animationViews :
        if animationView.DocumentFilePath == result_file_path and animationView.AnalysisResultType == AnalysisResultType.Dynamics :
            findViews.append(animationView)


document = applicationHandler.GetDocument(result_file_path)
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)
dynamic_analysis.SetAnimationFrame(10)

# It returns the objects available for contouring that correspond to the MappingType.
targetentities = dynamic_analysis.GetContourables(ContourMappingType.FENode)

# Create Contour
contour = dynamic_analysis.CreateContour(targetentities, ContourMappingType.FENode, "Displacement", "X")
contour.LegendColorScheme = ColorSchemeType.BLACK_TO_WHITE
contour.AutoRange = False
if contour.AutoRange == False:
    contour.Max = 4
    contour.Min = 1

contour.LegendFontColor = Colors.Red
contour.LogScale = True
contour.LegendVisibility = False
contour.Continuous = True
contour.Component = "Z"
contour.FullName = "FEBody_01_Contour_Z"
contour.MinMaxTargetType = ExtremalValueType.Part
contour.IsEnabled = False

# Close the Pages
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_AutoRange"></a> AutoRange

Gets or sets a value indicating whether the maximum and minimum range values are set automatically.

```python
bool AutoRange { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md).

#### Remarks

Use this property to specify or retrieve whether the maximum and minimum values of the range are set automatically.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_Component"></a> Component

Gets or sets the contour component.

```python
string Component { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

For an example that includes this property, see the [Interface IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md).

#### Remarks

Use this property to specify or retrieve the contour component. The available components can be referred to in the UI Contour ActionPanel.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_ComponentList"></a> ComponentList

Gets the list of available components.

```python
IEnumerable<string> ComponentList { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Examples

For an example that includes this property, see the [Interface IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md).

#### Remarks

Use this property to retrieve the list of available components.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_Continuous"></a> Continuous

Gets or sets a value indicating whether to allow gradation between colors.

```python
bool Continuous { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md).

#### Remarks

Use this property to specify or retrieve whether color gradation is allowed.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_FullName"></a> FullName

Gets or sets the full name of the contour.

```python
string FullName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

For an example that includes this property, see the [Interface IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md).

#### Remarks

Use this property to specify or retrieve the full name of the contour.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_IsEnabled"></a> IsEnabled

Gets or sets a value indicating whether the contour is enabled.

```python
bool IsEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md).

#### Remarks

Use this property to specify or retrieve whether the contour is enabled.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_LegendColorScheme"></a> LegendColorScheme

Gets or sets the color scheme of the legend.

```python
ColorSchemeType LegendColorScheme { get; set; }
```

#### Property Value

 ColorSchemeType

#### Examples

For an example that includes this property, see the [Interface IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md).

#### Remarks

The LegendColorType property specifies the color scheme used for the Legend.
This property allows you to customize the appearance of the Legend by selecting from a variety of predefined color schemes.
The supported color schemes provide different visual styles to match the needs of various applications and user preferences.
This property is included in the Legend category within the UI and is labeled as "Color" in the user interface.
By setting this property, you can ensure that the Legend is displayed with the desired color scheme, enhancing its visual appeal and readability.
This property allows you to set the color scheme of the legend. The available color schemes are:
<ul><li><xref href="VM.Models.Post.ColorSchemeType.NORMAL" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.NORMAL_INVERTED" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.BLACK_TO_WHITE" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.WHITE_TO_BLACK" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.GREEN_TO_BROWN" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.WHITE_TO_BROWN" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.METAL_CASTING" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.THERMAL_1" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.THERMAL_2" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ColorSchemeType.THERMAL_3" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_LegendFontColor"></a> LegendFontColor

Gets or sets the font color of the contour legend.

```python
Color LegendFontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

For an example that includes this property, see the [Interface IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md).

#### Remarks

Use this property to specify or retrieve the font color of the contour legend.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_LegendVisibility"></a> LegendVisibility

Gets or sets a value indicating whether the legend is visible.

```python
bool LegendVisibility { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md).

#### Remarks

Use this property to specify or retrieve whether the legend is displayed or hidden.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_LogScale"></a> LogScale

Gets or sets a value indicating whether to scale the values using a logarithmic function.

```python
bool LogScale { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md).

#### Remarks

Use this property to specify or retrieve whether the values are scaled using a logarithmic function.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_Max"></a> Max

Gets or sets the maximum value of the contour.

```python
double Max { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md).

#### Remarks

Use this property to specify or retrieve the maximum value of the contour when the Auto Range option is disabled.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_Min"></a> Min

Gets or sets the minimum value of the contour.

```python
double Min { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md).

#### Remarks

Use this property to specify or retrieve the minimum value of the contour when the Auto Range option is disabled.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_MinMaxTargetType"></a> MinMaxTargetType

Gets or sets the type of extremal values to be displayed.

```python
ExtremalValueType MinMaxTargetType { get; set; }
```

#### Property Value

 ExtremalValueType

#### Examples

For an example that includes this property, see the [Interface IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md).

#### Remarks

This property allows you to change the visible state of extremes by selecting one of the predefined options. 
In the UI, this is represented as "Visible" in the "Min/Max Value" category.
The available options are:
<ul><li><xref href="VM.Models.Post.ExtremalValueType.None" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ExtremalValueType.Part" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ExtremalValueType.Whole" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ExtremalValueType.FEProperty" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ExtremalValueType.ElementSet" data-throw-if-not-resolved="false"></xref></li></ul>


