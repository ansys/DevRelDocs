#  Interface IOperationsCustomAxisViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Defines the properties for a custom axis view model in an operations.

```csharp
public interface IOperationsCustomAxisViewModel : IOperationsAxisViewModelBase
```

#### Implements

[IOperationsAxisViewModelBase](VM.Operations.Post.Interfaces.IOperationsAxisViewModelBase.md)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_AxisType"></a> AxisType

Gets or sets the scale type for the axis.

```csharp
AxisType AxisType { get; set; }
```

#### Property Value

 AxisType

#### Examples

The following example demonstrates how to use the <code>AxisType</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.AxisType = AxisType.Linear;</code></pre>

#### Remarks

Use this property to specify or retrieve the scale type for the axis. The available options are:
<ul><li><xref href="VM.Models.Post.AxisType.Linear" data-throw-if-not-resolved="false"></xref> - Linear scale.</li><li><xref href="VM.Models.Post.AxisType.PositiveLogarithmic" data-throw-if-not-resolved="false"></xref> - Positive logarithmic scale.</li><li><xref href="VM.Models.Post.AxisType.NegativeLogarithmic" data-throw-if-not-resolved="false"></xref> - Negative logarithmic scale.</li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_Decimal"></a> Decimal

Gets or sets the number of decimal places for the labels on the axis.

```csharp
int Decimal { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

The following example demonstrates how to use the <code>Decimal</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.Decimal = 2;</code></pre>

#### Remarks

Use this property to specify or retrieve the number of decimal places displayed in the labels on the axis.

### <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_Default"></a> Default

Gets or sets a value indicating whether the decimal value for the axis labels is set automatically or manually.

```csharp
bool Default { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>Default</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.Default = false;
axis.Decimal = 2;</code></pre>

#### Remarks

Use this property to specify whether the decimal value for the axis labels should be set automatically or manually.
If set to <code>false</code>, you can manually set the <xref href="VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.Decimal" data-throw-if-not-resolved="false"></xref> property to determine the number of decimal places.

### <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_FontColor"></a> FontColor

Gets or sets the color of the labels on the axis.

```csharp
Color FontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>Color</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.FontColor = Colors.Red;</code></pre>

#### Remarks

Use this property to specify or retrieve the color of the labels displayed on the axis.

### <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_FontFace"></a> FontFace

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
axis.Default = false;
axis.Decimal = 2;
axis.FontFace = FontFamily("Arial");</code></pre>

#### Remarks

Use this property to specify or retrieve the font family used for the labels on the axis.

### <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_IsAuto"></a> IsAuto

Gets or sets a value indicating whether the axis range intervals are set automatically or manually.

```csharp
bool IsAuto { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>IsAuto</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.Default = false;
axis.Decimal = 2;
axis.IsAuto = true;</code></pre>

#### Remarks

Use this property to specify whether the axis range intervals should be set automatically or manually.
If set to <code>false</code>, you can manually set the intervals for the axis range.

### <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_LabelFormatType"></a> LabelFormatType

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
axis.Default = false;
axis.Decimal = 2;
axis.LabelFormatType = LabelFormatType.Number;</code></pre>

#### Remarks

Use this property to specify or retrieve the format type for the decimal values displayed in the labels on the axis.
The available options are:
<ul><li><xref href="VM.Models.Post.LabelFormatType.Exponential" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LabelFormatType.Number" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LabelFormatType.General" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_LabelSize"></a> LabelSize

Gets or sets the font size of the labels on the axis.

```csharp
double LabelSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>LabelSize</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.LabelSize = 12.0;
double labelFontSize = axis.LabelSize;</code></pre>

#### Remarks

Use this property to specify or retrieve the font size of the labels displayed on the axis.

### <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_LabelWeight"></a> LabelWeight

Gets or sets the font weight of the labels on the axis.

```csharp
FontWeight LabelWeight { get; set; }
```

#### Property Value

 [FontWeight](https://learn.microsoft.com/dotnet/api/system.windows.fontweight)

#### Examples

The following example demonstrates how to use the <code>LabelWeight</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.LabelWeight = FontWeight.Bold;</code></pre>

#### Remarks

Use this property to specify or retrieve the font weight of the labels displayed on the axis.
The available options are:
<ul><li><xref href="System.Windows.FontWeights.Bold" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontWeights.Normal" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_LogarithmicBase"></a> LogarithmicBase

Gets or sets the base for the logarithmic scale of the axis.

```csharp
string LogarithmicBase { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>LogarithmicBase</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.LogarithmicBase = "10";</code></pre>

#### Remarks

This property is only applicable when the <xref href="VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.AxisType" data-throw-if-not-resolved="false"></xref> is set to <xref href="VM.Models.Post.AxisType.PositiveLogarithmic" data-throw-if-not-resolved="false"></xref> or <xref href="VM.Models.Post.AxisType.NegativeLogarithmic" data-throw-if-not-resolved="false"></xref>. 
Use this property to specify or retrieve the base value for the logarithmic scale displayed on the axis.
Supported values are:
- "2"
- "3"
- "4"
- "5"
- "10"
- "E"

### <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_ScaleInterval"></a> ScaleInterval

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

This property is only applicable when <xref href="VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.IsAuto" data-throw-if-not-resolved="false"></xref> is set to <code>false</code>. 
Use this property to manually set the intervals for the axis range.

### <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_ScaleMax"></a> ScaleMax

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

This property is only applicable when <xref href="VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.IsAuto" data-throw-if-not-resolved="false"></xref> is set to <code>false</code>. 
Use this property to manually set the maximum value for the axis scale.

### <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_ScaleMin"></a> ScaleMin

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

This property is only applicable when <xref href="VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.IsAuto" data-throw-if-not-resolved="false"></xref> is set to <code>false</code>. 
Use this property to manually set the minimum value for the axis scale.

### <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_Style"></a> Style

Gets or sets the font style for the axis.

```csharp
FontStyle Style { get; set; }
```

#### Property Value

 [FontStyle](https://learn.microsoft.com/dotnet/api/system.windows.fontstyle)

#### Examples

The following example demonstrates how to use the <code>Style</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.Style = FontStyle.Italic;
FontStyle axisFontStyle = axis.Style;</code></pre>

#### Remarks

Use this property to specify or retrieve the font style used for the axis.
The available options are:
<ul><li><xref href="System.Windows.FontStyles.Italic" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontStyles.Normal" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontStyles.Oblique" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_Unit"></a> Unit

Gets the unit of the axis.

```csharp
string Unit { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>Unit</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.Unit;</code></pre>

#### Remarks

Use this property to specify or retrieve the unit displayed on the axis.

