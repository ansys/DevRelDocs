#  Interface IOperationsFEBodyViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for an febody view model.

```python
public interface IOperationsFEBodyViewModel
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationsFEBodyViewModel.py
import sys

current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'

sys.path.append(external_modules_path)
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
result_file_path = get_result_file_path()

# Set array about result file
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
pages = applicationHandler.GetPages()

findViews = list()
for page in pages :
    views = page.GetViews()
    animationViews = [view for view in views if view.ViewType == ViewType.Animation]
    for animationView in animationViews :
        if animationView.DocumentFilePath == result_file_path and animationView.AnalysisResultType == AnalysisResultType.Dynamics :
            findViews.append(animationView)

viewCount = len(findViews)
if viewCount > 0 :
    document = applicationHandler.GetDocument(result_file_path)
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)    

    # Get a febody
    febody = analysis.GetViewModel("FEBody_01")

    # Create Node
    node = febody.CreateNode(754)
    node.ChangeID(755)

    # Create Element
    element = febody.CreateElement(2343)
    element.ChangeID(2601)

# Close the Pages
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBodyViewModel_CreateElement_System_Int32_"></a> CreateElement\(int\)

Creates an element entity within an FEBody.

```python
IOperationsElementViewModel CreateElement(int elementID)
```

#### Parameters

`elementID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The unique ID of the element to be created.

#### Returns

 [IOperationsElementViewModel](VM.Operations.Post.Interfaces.IOperationsElementViewModel.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsNodeViewModel" data-throw-if-not-resolved="false"></xref> representing the created element entity.

#### Examples

For an example that includes this property, see the [Interface IOperationsFEBodyViewModel](VM.Operations.Post.Interfaces.IOperationsFEBodyViewModel.md).

#### Remarks

This method creates an element entity within an FEBody using the specified element ID.

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBodyViewModel_CreateNode_System_Int32_VM_Models_PlotDataType_"></a> CreateNode\(int, PlotDataType\)

Creates a node entity within an FEBody.

```python
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

For an example that includes this property, see the [Interface IOperationsFEBodyViewModel](VM.Operations.Post.Interfaces.IOperationsFEBodyViewModel.md).

#### Remarks

This method creates a node entity within an FEBody using the specified node ID and plot data file type.


