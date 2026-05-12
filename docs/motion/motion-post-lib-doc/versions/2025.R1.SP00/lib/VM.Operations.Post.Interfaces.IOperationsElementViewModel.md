#  Interface IOperationsElementViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for an element view model.

```csharp
public interface IOperationsElementViewModel
```

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsElementViewModel_ChangeID_System_Int32_"></a> ChangeID\(int\)

Changes the ID of an element belonging to an FEBody.

```csharp
void ChangeID(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The new unique ID for the element. If the specified ID does not exist, the change will not be applied.

#### Examples

The following example demonstrates how to use the <code>ChangeID</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
febody = analysis.GetViewModel("FEBody_01")
element = febody.CreateElement(11)
element.ChangeID(13)</code></pre>

#### Remarks

This method changes the ID of an element within an FEBody. The provided ID must be unique and must correspond to an existing element; otherwise, the ID will not be changed.

