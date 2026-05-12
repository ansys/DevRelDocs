#  Interface IOperationsHeatmapNumericAxis2DViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface for managing axes in a 2D Numeric Heatmap related to STFT.

```csharp
public interface IOperationsHeatmapNumericAxis2DViewModel
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_Digit"></a> Digit

Gets or sets the number of digits for the label format.

```csharp
int Digit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

The following example demonstrates how to use the <code>Digit</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.Digit = 3;</code></pre>

#### Remarks

Use this property to specify or retrieve the number of digits displayed in the labels on the axis.

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_FontColor"></a> FontColor

Gets or sets the font color of the axis.

```csharp
Color FontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>FontColor</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.FontColor = Colors.Red;</code></pre>

#### Remarks

This property is part of the "Chart" category and allows you to customize the appearance of the axis by changing its font color.
You can set this property to any valid <xref href="System.Windows.Media.Color" data-throw-if-not-resolved="false"></xref> value.

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_FontFace"></a> FontFace

Gets or sets the font family for the axis labels.

```csharp
FontFamily FontFace { get; set; }
```

#### Property Value

 [FontFamily](https://learn.microsoft.com/dotnet/api/system.windows.media.fontfamily)

#### Examples

The following example demonstrates how to use the <code>FontFace</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.FontFace = new FontFamily("Arial");</code></pre>

#### Remarks

Use this property to specify or retrieve the font family used for the labels on the axis.

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_FontSize"></a> FontSize

Gets or sets the font size of the labels on the axis.

```csharp
double FontSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>FontSize</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.FontSize = 12.0;</code></pre>

#### Remarks

Use this property to specify or retrieve the font size of the labels displayed on the axis.

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_FontStyle"></a> FontStyle

Gets or sets the font style for the axis.

```csharp
FontStyle FontStyle { get; set; }
```

#### Property Value

 [FontStyle](https://learn.microsoft.com/dotnet/api/system.windows.fontstyle)

#### Examples

The following example demonstrates how to use the <code>FontStyle</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.Style = FontStyle.Italic;</code></pre>

#### Remarks

Use this property to specify or retrieve the font style used for the axis. 
The available options are:
<ul><li><xref href="System.Windows.FontStyles.Italic" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontStyles.Normal" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontStyles.Oblique" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_FontWeight"></a> FontWeight

Gets or sets the font weight for the labels on the axis.

```csharp
FontWeight FontWeight { get; set; }
```

#### Property Value

 [FontWeight](https://learn.microsoft.com/dotnet/api/system.windows.fontweight)

#### Examples

The following example demonstrates how to use the <code>FontWeight</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.FontWeight = FontWeight.Bold;</code></pre>

#### Remarks

Use this property to specify or retrieve the font weight of the labels displayed on the axis.
The available options are:
<ul><li><xref href="System.Windows.FontWeights.Bold" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontWeights.Normal" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_General"></a> General

Gets or sets a value indicating whether the label format is set automatically or manually.

```csharp
bool General { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>General</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.General = true;</code></pre>

#### Remarks

If this property is set to <code>true</code>, the <xref href="VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.Digit" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.LabelFormatType" data-throw-if-not-resolved="false"></xref> properties cannot be set.
Use this property to specify whether the label format should be determined automatically or manually.

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_LabelFormatType"></a> LabelFormatType

Gets or sets the format type for the labels on the axis.

```csharp
LabelFormatType LabelFormatType { get; set; }
```

#### Property Value

 LabelFormatType

#### Examples

The following example demonstrates how to use the <code>LabelFormatType</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.LabelFormatType = LabelFormatType.Number;</code></pre>

#### Remarks

Use this property to specify or retrieve the format type for the decimal values displayed in the labels on the axis.
The available options are:
<ul><li><xref href="VM.Models.Post.LabelFormatType.Exponential" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LabelFormatType.General" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LabelFormatType.Number" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_ScaleInterval"></a> ScaleInterval

Gets or sets the scale interval of the axis.

```csharp
double ScaleInterval { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>ScaleInterval</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.IsAuto = false;
axis.ScaleInterval = 5.0;</code></pre>

#### Remarks

Use this property to manually set the intervals for the axis range.

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_ScaleMax"></a> ScaleMax

Gets or sets the maximum value of the axis scale.

```csharp
double ScaleMax { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>ScaleMax</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.IsAuto = false;
axis.ScaleMax = 100.0;</code></pre>

#### Remarks

Use this property to manually set the maximum value for the axis scale.

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel_ScaleMin"></a> ScaleMin

Gets or sets the minimum value of the axis scale.

```csharp
double ScaleMin { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>ScaleMin</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.IsAuto = false;
axis.ScaleMin = 0.0;</code></pre>

#### Remarks

Use this property to manually set the minimum value for the axis scale.

