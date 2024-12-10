#  Interface IOperationsPointDisplayViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

/// Interface representing information for the point display view model.

```csharp
public interface IOperationsPointDisplayViewModel : IOperationsVectorDisplayBaseViewModel
```

#### Implements

[IOperationsVectorDisplayBaseViewModel](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsPointDisplayViewModel_SymbolSize"></a> SymbolSize

Gets or sets the size of the symbols in the vector display.

```csharp
int SymbolSize { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Examples

The following example demonstrates how to use the <code>SymbolSize</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
vector = dynamic_analysis.CreateVectorDisplay("FJ_01", "Base Force");
vector.SymbolSize = 10;</code></pre>

#### Remarks

Use this property to specify or retrieve the size of the symbols in the vector display.

