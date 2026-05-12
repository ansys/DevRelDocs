#  Interface IOperationsFEBodyViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for an febody view model.

```csharp
public interface IOperationsFEBodyViewModel
```

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBodyViewModel_CreateElement_System_Int32_"></a> CreateElement\(int\)

Creates an element entity within an FEBody.

```csharp
IOperationsElementViewModel CreateElement(int elementID)
```

#### Parameters

`elementID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The unique ID of the element to be created.

#### Returns

 [IOperationsElementViewModel](VM.Operations.Post.Interfaces.IOperationsElementViewModel.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsNodeViewModel" data-throw-if-not-resolved="false"></xref> representing the created element entity.

#### Examples

The following example demonstrates how to use the <code>CreateElement</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
febody = analysis.GetViewModel("FEBody_01")
element = febody.CreateElement(11)</code></pre>

#### Remarks

This method creates an element entity within an FEBody using the specified element ID.

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBodyViewModel_CreateNode_System_Int32_VM_Models_PlotDataType_"></a> CreateNode\(int, PlotDataType\)

Creates a node entity within an FEBody.

```csharp
IOperationsNodeViewModel CreateNode(int nodeID, PlotDataType fileType = PlotDataType.DEFAULT)
```

#### Parameters

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The unique ID of the node to be created.

`fileType` PlotDataType

The type of plot data file. Default is <xref href="VM.Models.PlotDataType.DEFAULT" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [IOperationsNodeViewModel](VM.Operations.Post.Interfaces.IOperationsNodeViewModel.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsNodeViewModel" data-throw-if-not-resolved="false"></xref> representing the created node entity.

#### Examples

The following example demonstrates how to use the <code>CreateNode</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
febody = analysis.GetViewModel("FEBody_01")
node = febody.CreateNode(11)</code></pre>

#### Remarks

This method creates a node entity within an FEBody using the specified node ID and plot data file type.

