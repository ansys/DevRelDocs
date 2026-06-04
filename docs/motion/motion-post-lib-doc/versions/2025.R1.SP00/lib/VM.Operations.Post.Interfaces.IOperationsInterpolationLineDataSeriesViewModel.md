#  Interface IOperationsInterpolationLineDataSeriesViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a view model for the interpolation line data series.

```csharp
public interface IOperationsInterpolationLineDataSeriesViewModel
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsInterpolationLineDataSeriesViewModel_Points"></a> Points

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
curvePaths = List[str] ()
curvePaths.Add(r'Displacement/Magnitude')
curvePaths.Add(r'Acceleration/Magnitude')
# Set a Curve Parameter
parameters = PlotParameters()
parameters.Paths = curvePaths
parameters.Target = "BD_001"
curves = chart.AddCurves(filepath, parameters)
interpolation = chart.CreateInterpolation(curves, 200);
interpolation.Points = 500;</code></pre>

#### Remarks

Use this property to specify or retrieve the number of data points to be used for interpolation.

