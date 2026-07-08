#  Interface IOperationsFrequencyViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for the frequency view model.

```csharp
public interface IOperationsFrequencyViewModel
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsFrequencyViewModel_Enable"></a> Enable

Gets or sets a value indicating whether the frequency entity is enabled.

```csharp
bool Enable { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>Enable</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
eigenval_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Eigenvalue);
frequency = eigenval_analysis.GetFrequency(3);
frequency.Enable = True</code></pre>

#### Remarks

Use this property to specify or retrieve the enabled status of the frequency entity.

