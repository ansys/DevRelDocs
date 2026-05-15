# Interface IOperationsElementViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsElementViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for an element view model.

```csharp
public interface IOperationsElementViewModel
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationsElementViewModel.py
import sys

# Get the current file's path and set the path for external modules.
current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'
sys.path.append(external_modules_path)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
result_file_path = get_result_file_path()

# Set array about result file
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
applicationHandler.AddDocument(filepaths)

# Get all created pages.
# This retrieves all pages created in the application.
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
    # result_file_path - Get the document from the result file path.
    document = applicationHandler.GetDocument(result_file_path)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)    

    # Get a febody
    febody = analysis.GetViewModel("FEBody_01")

    # Create Element
    element = febody.CreateElement(2343)
    element.ChangeID(2601)

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
```

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsElementViewModel_ChangeID_System_Int32_"></a> ChangeID\(int\)

Changes the ID of an element belonging to an FEBody.

```csharp
void ChangeID(int id)
```

#### Parameters

`id` int

The new unique ID for the element. If the specified ID does not exist, the change will not be applied.

#### Examples

For an example that includes this property, see the [Interface IOperationsElementViewModel](VM.Operations.Post.Interfaces.IOperationsElementViewModel.md).

#### Remarks

This method changes the ID of an element within an FEBody. The provided ID must be unique and must correspond to an existing element; otherwise, the ID will not be changed.

