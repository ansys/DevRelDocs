#  Interface IOperationsCalculusLineDataSeriesViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the calculus line data series.

```csharp
public interface IOperationsCalculusLineDataSeriesViewModel
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsCalculusLineDataSeriesViewModel_CalculusType"></a> CalculusType

Gets or sets the type of calculus operation.

```csharp
CalculusType CalculusType { get; set; }
```

#### Property Value

 CalculusType

#### Examples

The following example demonstrates how to use the <code>CalculusType</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
# Set array about combination of characteristic and component
curvePaths = List[str] ()
curvePaths.Add(r'Displacement/Magnitude')
curvePaths.Add(r'Acceleration/Magnitude')
# Set a Curve Parameter
parameters = PlotParameters()
parameters.Paths = curvePaths
parameters.Target = "BD_001"
curves = chart.AddCurves(filepath, parameters)
calculus = chart.CreateDifferentiatedCurve(curves);
calculus.CalculusType = CalculusType.Integration;</code></pre>

#### Remarks

Use this property to specify or retrieve the type of calculus operation.
The supported types are:
<ul><li><xref href="VM.Models.Post.CalculusType.Differentiation" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.CalculusType.Integration" data-throw-if-not-resolved="false"></xref></li></ul>

