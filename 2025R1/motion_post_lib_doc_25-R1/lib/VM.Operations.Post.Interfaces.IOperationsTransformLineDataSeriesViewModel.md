#  Interface IOperationsTransformLineDataSeriesViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the transform line data series.

```csharp
public interface IOperationsTransformLineDataSeriesViewModel
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_Align"></a> Align

Gets or sets the type of alignment.

```csharp
AlignType Align { get; set; }
```

#### Property Value

 AlignType

#### Examples

The following example demonstrates how to use the <code>Align</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
transformcurves = chart.CreateAlign(curves, AlignType.Curve);
transformcurves.Align = AlignType.Zero;</code></pre>

#### Remarks

Use this property to specify or retrieve the type of alignment.
The supported types are:
<ul><li><xref href="VM.Models.Post.AlignType.Zero" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.AlignType.Curve" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_AlignBase"></a> AlignBase

Gets or sets the base value for aligning the data series.

```csharp
double AlignBase { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>AlignBase</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
transformcurves = chart.CreateAlign(curves, AlignType.Curve);
transformcurves.AlignBase = 1.0;</code></pre>

#### Remarks

Use this property to specify or retrieve the base value for aligning the data series.

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_Base"></a> Base

Gets or sets the base of the logarithm.

```csharp
string Base { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>Base</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
transformcurves = chart.CreateLogScale(series, 10, 10, False);
transformcurves.Base = "10";</code></pre>

#### Remarks

Use this property to specify or retrieve the base value for the logarithm.
Supported values are:
- "2"
- "3"
- "4"
- "5"
- "10"
- "E"

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_Coefficient"></a> Coefficient

Gets or sets the coefficient of the logarithm.

```csharp
double Coefficient { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>Coefficient</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
transformcurves = chart.CreateLogScale(series, 10, 10, False);
transformcurves.Coefficient = 2.0;</code></pre>

#### Remarks

Use this property to specify or retrieve the coefficient value for the logarithm.

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_IsDecibel"></a> IsDecibel

Gets or sets a value indicating whether the decibel scale is used.

```csharp
bool IsDecibel { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>IsDecibel</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
transformcurves = chart.CreateLogScale(series, 10, 10, False);
transformcurves.IsDecibel = True;</code></pre>

#### Remarks

Use this property to specify or retrieve whether the decibel scale is used.

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_OffsetX"></a> OffsetX

Gets or sets the value for the X offset.

```csharp
double OffsetX { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>OffsetX</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
transformcurves = chart.CreateTranslate(curves, 0, 100);
transformcurves.OffsetX = 10.0;</code></pre>

#### Remarks

Use this property to specify or retrieve the value for the X offset.

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_OffsetY"></a> OffsetY

Gets or sets the value for the Y offset.

```csharp
double OffsetY { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>OffsetY</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
transformcurves = chart.CreateTranslate(curves, 0, 100);
transformcurves.OffsetY = 5.0;</code></pre>

#### Remarks

Use this property to specify or retrieve the value for the Y offset.

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_ScaleX"></a> ScaleX

Gets or sets the value for the X scale.

```csharp
double ScaleX { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>ScaleX</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
transformcurves = chart.CreateScale(curves, 2, 2);
transformcurves.ScaleX = 1.5;</code></pre>

#### Remarks

Use this property to specify or retrieve the value for the X scale.

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_ScaleY"></a> ScaleY

Gets or sets the value for the Y scale.

```csharp
double ScaleY { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>ScaleY</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
transformcurves = chart.CreateScale(curves, 2, 2);
transformcurves.ScaleY = 2.0;</code></pre>

#### Remarks

Use this property to specify or retrieve the value for the Y scale.

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_SelectedTransformType"></a> SelectedTransformType

Gets or sets the type of transform.

```csharp
string SelectedTransformType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>SelectedTransformType</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
transformcurves = chart.CreateScale(curves, 2, 2);
transformcurves.SelectedTransformType = "Align";</code></pre>

#### Remarks

Use this property to specify or retrieve the type of transform.
The supported types are:
<ul><li><xref href="VM.Models.Post.TransformType.Translate" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.TransformType.LinearScale" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.TransformType.Absolute" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.TransformType.Align" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.TransformType.LogScale" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_Sign"></a> Sign

Gets or sets the type of sign.

```csharp
SignType Sign { get; set; }
```

#### Property Value

 SignType

#### Examples

The following example demonstrates how to use the <code>Sign</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ();
curvePaths.Add(r'Displacement/Magnitude');
curvePaths.Add(r'Acceleration/Magnitude');
# Set a Curve Parameter
parameters = PlotParameters();
parameters.Paths = curvePaths;
parameters.Target = "BD_001";
curves = chart.AddCurves(filepath, parameters);
transformcurves = chart.CreateAbsolute(series, SignType.Positive);
transformcurves.Sign = SignType.Positive;</code></pre>

#### Remarks

Use this property to specify or retrieve the type of sign.
The supported types are:
<ul><li><xref href="VM.Models.Post.SignType.Positive" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SignType.Negative" data-throw-if-not-resolved="false"></xref></li></ul>

