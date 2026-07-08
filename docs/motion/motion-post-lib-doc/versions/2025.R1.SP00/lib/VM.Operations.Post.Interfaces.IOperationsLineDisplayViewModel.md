#  Interface IOperationsLineDisplayViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for the line display view model.

```csharp
public interface IOperationsLineDisplayViewModel : IOperationsVectorDisplayBaseViewModel
```

#### Implements

[IOperationsVectorDisplayBaseViewModel](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDisplayViewModel_Color"></a> Color

Gets or sets the color of the arrows in the vector display.

```csharp
Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>Color</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
vector = dynamic_analysis.CreateVectorDisplay("FJ_01", "Base Force");
vector.Color = Colors.Red;</code></pre>

#### Remarks

Use this property to specify or retrieve the color of the arrows in the vector display.

### <a id="VM_Operations_Post_Interfaces_IOperationsLineDisplayViewModel_Width"></a> Width

Gets or sets the width of the arrows in the vector display.

```csharp
int Width { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

The following example demonstrates how to use the <code>Width</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
vector = dynamic_analysis.CreateVectorDisplay("FJ_01", "Base Force");
vector.Width = 10;</code></pre>

#### Remarks

Use this property to specify or retrieve the width of the arrows in the vector display.

