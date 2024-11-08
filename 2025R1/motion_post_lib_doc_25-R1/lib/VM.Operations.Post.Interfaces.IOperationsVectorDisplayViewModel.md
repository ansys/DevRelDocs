#  Interface IOperationsVectorDisplayViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for the vector display view model.

```csharp
public interface IOperationsVectorDisplayViewModel : IOperationsVectorDisplayBaseViewModel
```

#### Implements

[IOperationsVectorDisplayBaseViewModel](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayViewModel_Color"></a> Color

Gets or sets the color of the vector display.

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

Use this property to specify or retrieve the color of the vector display.

### <a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayViewModel_IsLog"></a> IsLog

Gets or sets a value indicating whether the log scale option is enabled.

```csharp
bool IsLog { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>IsLog</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
vector = dynamic_analysis.CreateVectorDisplay("FJ_01", "Base Force");
vector.IsLog = True;</code></pre>

#### Remarks

Use this property to specify or retrieve whether the log scale option is enabled.

### <a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayViewModel_Scale"></a> Scale

Gets or sets the scale of the vector display.

```csharp
double Scale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>Scale</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
vector = dynamic_analysis.CreateVectorDisplay("FJ_01", "Base Force");
vector.Scale = 1.5;</code></pre>

#### Remarks

Use this property to specify or retrieve the scale of the vector display.

