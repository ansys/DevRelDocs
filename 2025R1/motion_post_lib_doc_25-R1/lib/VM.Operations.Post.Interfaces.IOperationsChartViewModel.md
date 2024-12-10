#  Interface IOperationsChartViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents the base interface for properties and methods that make up a chart view.

```csharp
public interface IOperationsChartViewModel : IView, IOperationsBase
```

#### Implements

[IView](VM.Operations.Post.Interfaces.IView.md), 
[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsChartViewModel_Legend"></a> Legend

Get or sets the legend for the chart.

```csharp
IOperationsLegendModifier Legend { get; }
```

#### Property Value

 [IOperationsLegendModifier](VM.Operations.Post.Interfaces.IOperationsLegendModifier.md)

#### Examples

The following example demonstrates how to use the <code>Legend</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
page = applicationHandler.GetPage("page1");
chart = page.CreateChart("CurveChart");
chart.Legend.FontColor = Colors.Red;</code></pre>

#### Remarks

The Legend property allows you to control the appearance and behavior of the chart's legend.
Through this property, you can access various attributes of the legend and adjust them to fit your
specific requirements.

