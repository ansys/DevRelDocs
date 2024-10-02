#  Interface IOperationsLegendModifier

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsLegendModifier
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsLegendModifier_Background"></a> Background

Gets or sets the background color of the legend.

```csharp
Color Background { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>Background</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.Background = Colors.Red;</code></pre>

#### Remarks

This property allows you to set the background color of the legend.
In the UI, this property is represented under the "Font" category with the property name "Background".

### <a id="VM_Operations_Post_Interfaces_IOperationsLegendModifier_FontColor"></a> FontColor

Gets or sets the font color of the legend.

```csharp
Color FontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>FontColor</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.FontColor = Colors.Red;</code></pre>

#### Remarks

This property allows you to set the font color of the legend.
In the UI, this property is represented under the "Font" category with the property name "Color".

### <a id="VM_Operations_Post_Interfaces_IOperationsLegendModifier_FontFace"></a> FontFace

Gets or sets the font face of the chart title.

```csharp
FontFamily FontFace { get; set; }
```

#### Property Value

 [FontFamily](https://learn.microsoft.com/dotnet/api/system.windows.media.fontfamily)

#### Examples

The following example demonstrates how to use the <code>FontFace</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.FontFace = FontFamily("Arial");</code></pre>

#### Remarks

This property allows you to set the font face of the chart title.
In the UI, this property is represented under the "Font" category with the property name "Face".

### <a id="VM_Operations_Post_Interfaces_IOperationsLegendModifier_FontSize"></a> FontSize

Gets or sets the font size of the chart title.

```csharp
double FontSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>FontSize</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.FontSize = 12;</code></pre>

#### Remarks

This property allows you to set the font size of the chart title.
In the UI, this property is represented under the "Font" category with the property name "Size".

### <a id="VM_Operations_Post_Interfaces_IOperationsLegendModifier_FontStyle"></a> FontStyle

Gets or sets the font style of the chart title.

```csharp
FontStyle FontStyle { get; set; }
```

#### Property Value

 [FontStyle](https://learn.microsoft.com/dotnet/api/system.windows.fontstyle)

#### Examples

The following example demonstrates how to use the <code>FontStyle</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.FontStyle = FontStyles.Italic;</code></pre>

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

 [FontWeight](https://learn.microsoft.com/dotnet/api/system.windows.fontweight)

#### Examples

The following example demonstrates how to use the <code>FontWeight</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.FontWeight = FontWeights.Normal;</code></pre>

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

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>FontWeight</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.ItemsInFilter = "Visible Curves";</code></pre>

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

The following example demonstrates how to use the <code>LegendPlacement</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.Placement = LegendPlacement.Inside;</code></pre>

#### Remarks

Use this property to control the placement of the legend within or outside the chart area.
By default, the legend is placed inside the chart area.
The placement can be adjusted to improve the visibility and layout of the chart.

