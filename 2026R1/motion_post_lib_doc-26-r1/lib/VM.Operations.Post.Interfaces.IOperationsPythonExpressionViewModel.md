# Interface IOperationsPythonExpressionViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsPythonExpressionViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

/// Interface representing information for the python expression view model.

```csharp
public interface IOperationsPythonExpressionViewModel
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationsPythonExpressionViewModel.py
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

    expression = analysis.CreateExpression("expression")
    expression.Expression = "DM(\"Crank/CM\")"

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsPythonExpressionViewModel_Expression"></a> Expression

Gets or sets the formula in the expression properties.

```csharp
string Expression { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationsPythonExpressionViewModel](VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.md).

#### Remarks

Use this property to specify or retrieve the formula in the expression properties.
The formula should result in a single real value.

### <a id="VM_Operations_Post_Interfaces_IOperationsPythonExpressionViewModel_FullName"></a> FullName

Gets or sets the full name of the expression.

```csharp
string FullName { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationsPythonExpressionViewModel](VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.md).

#### Remarks

Use this property to specify or retrieve the full name of the expression.

