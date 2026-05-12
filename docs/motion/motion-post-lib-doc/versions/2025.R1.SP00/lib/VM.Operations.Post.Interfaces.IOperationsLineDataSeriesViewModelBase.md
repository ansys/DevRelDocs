#  Interface IOperationsLineDataSeriesViewModelBase

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the line data series.

```csharp
public interface IOperationsLineDataSeriesViewModelBase : ILineDataSeriesViewModelBase, IHasSourceViewModel, IViewModel, IObservableObject, IDisposableObject, IEnabled, IExpanded, ISelected, IVisible, IThicknessProperty, IOperationsBase
```

#### Implements

ILineDataSeriesViewModelBase, 
IHasSourceViewModel, 
IViewModel, 
IObservableObject, 
IDisposableObject, 
IEnabled, 
IExpanded, 
ISelected, 
IVisible, 
IThicknessProperty, 
[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_Color"></a> Color

Gets or sets the color of the line in the series.

```csharp
Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>Color</code> property:
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
curves.Color = Colors.Blue;</code></pre>

#### Remarks

Use this property to specify or retrieve the color of the line in the series.

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_LineStyle"></a> LineStyle

Gets or sets the style of the line.

```csharp
LineStyleType LineStyle { get; set; }
```

#### Property Value

 LineStyleType

#### Examples

The following example demonstrates how to use the <code>LineStyle</code> property:
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
curves.LineStyle = LineStyleType.Dot;</code></pre>

#### Remarks

Use this property to specify or retrieve the style of the line.
The available options are:
<ul><li><xref href="VM.Models.Post.LineStyleType.Solid" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LineStyleType.Dot" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LineStyleType.Dash" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LineStyleType.DashDot" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.LineStyleType.DashDotDot" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_PointSize"></a> PointSize

Gets or sets the size of the points in the series.

```csharp
double PointSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>PointSize</code> property:
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
curves.PointSize = 5.0;</code></pre>

#### Remarks

Use this property to specify or retrieve the size of the points in the series.

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_PointType"></a> PointType

Gets or sets the type of the points in the series.

```csharp
PointType PointType { get; set; }
```

#### Property Value

 PointType

#### Examples

The following example demonstrates how to use the <code>PointType</code> property:
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
curves.PointType = PointType.Circle;</code></pre>

#### Remarks

Use this property to specify or retrieve the type of the points in the series.
The supported types are:
<ul><li><xref href="VM.Models.Post.PointType.Square" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.PointType.Triangle" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.PointType.Ellipse" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_SeriesName"></a> SeriesName

Gets or sets the name of the series.

```csharp
string SeriesName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>SeriesName</code> property:
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
curves.SeriesName = "DisplacementSeries";</code></pre>

#### Remarks

Use this property to specify or retrieve the name of the series.

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_SeriesType"></a> SeriesType

Gets or sets the type of the series.

```csharp
SeriesType SeriesType { get; set; }
```

#### Property Value

 SeriesType

#### Examples

The following example demonstrates how to use the <code>SeriesType</code> property:
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
curves.SeriesType = SeriesType.Line;</code></pre>

#### Remarks

Use this property to specify or retrieve the type of the series.
The supported types are:
<ul><li><xref href="VM.Models.Post.SeriesType.Line" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SeriesType.Bar" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SeriesType.Point" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SeriesType.StackedColumn100" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SeriesType.StackedColumn" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_Thickness"></a> Thickness

Gets or sets the thickness of the series.

```csharp
int Thickness { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

The following example demonstrates how to use the <code>Thickness</code> property:
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
curves.Thickness = 3;</code></pre>

#### Remarks

Use this property to specify or retrieve the thickness of the series.

