#  Interface IOperationsContourViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for the contour view model.

```csharp
public interface IOperationsContourViewModel
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_AutoRange"></a> AutoRange

Gets or sets a value indicating whether the maximum and minimum range values are set automatically.

```csharp
bool AutoRange { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>AutoRange</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.LoadAnimationFrames(50);
entities = dynamic_analysis.GetContourables(ContourMappingType.Contact);
contour = dynamic_analysis.CreateContour(entities, ContourMappingType.Contact, "Normal Force", "Average");
contour.AutoRange = False;</code></pre>

#### Remarks

Use this property to specify or retrieve whether the maximum and minimum values of the range are set automatically.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_Component"></a> Component

Gets or sets the contour component.

```csharp
string Component { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>Component</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.LoadAnimationFrames(50);
entities = dynamic_analysis.GetContourables(ContourMappingType.Contact);
contour = dynamic_analysis.CreateContour(entities, ContourMappingType.Contact, "Normal Force", "Average");
contour.Component = "Sum";</code></pre>

#### Remarks

Use this property to specify or retrieve the contour component. The available components can be referred to in the UI Contour ActionPanel.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_ComponentList"></a> ComponentList

Gets the list of available components.

```csharp
IEnumerable<string> ComponentList { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Examples

The following example demonstrates how to use the <code>ComponentList</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.LoadAnimationFrames(50);
entities = dynamic_analysis.GetContourables(ContourMappingType.Contact);
contour = dynamic_analysis.CreateContour(entities, ContourMappingType.Contact, "Normal Force", "Average");
components = contour.ComponentList;</code></pre>

#### Remarks

Use this property to retrieve the list of available components.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_Continuous"></a> Continuous

Gets or sets a value indicating whether to allow gradation between colors.

```csharp
bool Continuous { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>Continuous</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.LoadAnimationFrames(50);
entities = dynamic_analysis.GetContourables(ContourMappingType.Contact);
contour = dynamic_analysis.CreateContour(entities, ContourMappingType.Contact, "Normal Force", "Average");
contour.Continuous = False;</code></pre>

#### Remarks

Use this property to specify or retrieve whether color gradation is allowed.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_FullName"></a> FullName

Gets or sets the full name of the contour.

```csharp
string FullName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>FullName</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.LoadAnimationFrames(50);
entities = dynamic_analysis.GetContourables(ContourMappingType.Contact);
contour = dynamic_analysis.CreateContour(entities, ContourMappingType.Contact, "Normal Force", "Average");
contour.FullName = "Contour"</code></pre>

#### Remarks

Use this property to specify or retrieve the full name of the contour.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_IsEnabled"></a> IsEnabled

Gets or sets a value indicating whether the contour is enabled.

```csharp
bool IsEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>IsEnabled</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.LoadAnimationFrames(50);
entities = dynamic_analysis.GetContourables(ContourMappingType.Contact);
contour = dynamic_analysis.CreateContour(entities, ContourMappingType.Contact, "Normal Force", "Average");
contour.IsEnabled = False;</code></pre>

#### Remarks

Use this property to specify or retrieve whether the contour is enabled.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_LegendColorScheme"></a> LegendColorScheme

Gets or sets the color scheme of the legend.

```csharp
ColorSchemeType LegendColorScheme { get; set; }
```

#### Property Value

 ColorSchemeType

#### Examples

The following example demonstrates how to use the <code>LegendColorScheme</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.LoadAnimationFrames(50);
entities = dynamic_analysis.GetContourables(ContourMappingType.Contact);
contour = dynamic_analysis.CreateContour(entities, ContourMappingType.Contact, "Normal Force", "Average");
contour.LegendColorScheme = ColorSchemeType.NORMAL_INVERTED;</code></pre>

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

```csharp
Color LegendFontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>LegendFontColor</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.LoadAnimationFrames(50);
entities = dynamic_analysis.GetContourables(ContourMappingType.Contact);
contour = dynamic_analysis.CreateContour(entities, ContourMappingType.Contact, "Normal Force", "Average");
contour.LegendFontColor = Colors.Red;</code></pre>

#### Remarks

Use this property to specify or retrieve the font color of the contour legend.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_LegendVisibility"></a> LegendVisibility

Gets or sets a value indicating whether the legend is visible.

```csharp
bool LegendVisibility { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>LegendVisibility</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.LoadAnimationFrames(50);
entities = dynamic_analysis.GetContourables(ContourMappingType.Contact);
contour = dynamic_analysis.CreateContour(entities, ContourMappingType.Contact, "Normal Force", "Average");
contour.LegendVisibility = False;</code></pre>

#### Remarks

Use this property to specify or retrieve whether the legend is displayed or hidden.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_LogScale"></a> LogScale

Gets or sets a value indicating whether to scale the values using a logarithmic function.

```csharp
bool LogScale { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>LogScale</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.LoadAnimationFrames(50);
entities = dynamic_analysis.GetContourables(ContourMappingType.Contact);
contour = dynamic_analysis.CreateContour(entities, ContourMappingType.Contact, "Normal Force", "Average");
contour.LogScale = True;</code></pre>

#### Remarks

Use this property to specify or retrieve whether the values are scaled using a logarithmic function.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_Max"></a> Max

Gets or sets the maximum value of the contour.

```csharp
double Max { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>Max</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.LoadAnimationFrames(50);
entities = dynamic_analysis.GetContourables(ContourMappingType.Contact);
contour = dynamic_analysis.CreateContour(entities, ContourMappingType.Contact, "Normal Force", "Average");
contour.Max = 10;</code></pre>

#### Remarks

Use this property to specify or retrieve the maximum value of the contour when the Auto Range option is disabled.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_Min"></a> Min

Gets or sets the minimum value of the contour.

```csharp
double Min { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>Min</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.LoadAnimationFrames(50);
entities = dynamic_analysis.GetContourables(ContourMappingType.Contact);
contour = dynamic_analysis.CreateContour(entities, ContourMappingType.Contact, "Normal Force", "Average");
contour.Min = False;</code></pre>

#### Remarks

Use this property to specify or retrieve the minimum value of the contour when the Auto Range option is disabled.

### <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_MinMaxTargetType"></a> MinMaxTargetType

Gets or sets the type of extremal values to be displayed.

```csharp
ExtremalValueType MinMaxTargetType { get; set; }
```

#### Property Value

 ExtremalValueType

#### Examples

The following example demonstrates how to use the <code>MinMaxTargetType</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.LoadAnimationFrames(50);
entities = dynamic_analysis.GetContourables(ContourMappingType.Contact);
contour = dynamic_analysis.CreateContour(entities, ContourMappingType.Contact, "Normal Force", "Average");
contour.MinMaxTargetType = ExtremalValueType.Whole;</code></pre>

#### Remarks

This property allows you to change the visible state of extremes by selecting one of the predefined options. 
In the UI, this is represented as "Visible" in the "Min/Max Value" category.
The available options are:
<ul><li><xref href="VM.Models.Post.ExtremalValueType.None" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ExtremalValueType.Part" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ExtremalValueType.Whole" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ExtremalValueType.FEProperty" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.ExtremalValueType.ElementSet" data-throw-if-not-resolved="false"></xref></li></ul>

