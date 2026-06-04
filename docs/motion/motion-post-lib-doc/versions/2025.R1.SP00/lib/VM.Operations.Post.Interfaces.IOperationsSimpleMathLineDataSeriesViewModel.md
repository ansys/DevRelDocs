#  Interface IOperationsSimpleMathLineDataSeriesViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the simplemath line data series.

```csharp
public interface IOperationsSimpleMathLineDataSeriesViewModel
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsSimpleMathLineDataSeriesViewModel_MathType"></a> MathType

Gets or sets the type of simple math operation.

```csharp
SimpleMathType MathType { get; set; }
```

#### Property Value

 SimpleMathType

#### Examples

The following example demonstrates how to use the <code>MathType</code> property:
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
simplemathcurves = chart.CreateSimpleMath(series, SimpleMathType.Add, 100);
simplemathcurves.MathType = SimpleMathType.Subtract;</code></pre>

#### Remarks

Use this property to specify or retrieve the type of simple math operation.
The supported types are:
<ul><li><xref href="VM.Models.Post.SimpleMathType.Add" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SimpleMathType.Subtract" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.SimpleMathType.Multiply" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_Interfaces_IOperationsSimpleMathLineDataSeriesViewModel_Points"></a> Points

Gets or sets the number of data points for interpolation.

```csharp
int Points { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

The following example demonstrates how to use the <code>Points</code> property:
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
simplemathcurves = chart.CreateSimpleMath(series, SimpleMathType.Add, 100);
simplemathcurves.Points = 200;</code></pre>

#### Remarks

Use this property to specify or retrieve the number of data points to be used for interpolation.

