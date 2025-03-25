# Interface IOperationsVectorDisplayViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for the vector display view model.

```python
public interface IOperationsVectorDisplayViewModel : IOperationsVectorDisplayBaseViewModel
```

#### Implements

[IOperationsVectorDisplayBaseViewModel](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md)

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationsVectorDisplayViewModel.py
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

    # Create Vector Display
    vector = analysis.CreateVectorDisplay("TJ_01", "Base Force")
    vector.Color = Colors.Red
    vector.IsLog = True
    vector.Scale = 1.5

# Close the Pages
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### Color

Gets or sets the color of the vector display.

```python
Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

For an example that includes this property, see the [Interface IOperationsVectorDisplayViewModel](#VM_Operations_Post_Interfaces_IOperationsVectorDisplayViewModel).

#### Remarks

Use this property to specify or retrieve the color of the vector display.

### IsLog

Gets or sets a value indicating whether the log scale option is enabled.

```python
bool IsLog { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsVectorDisplayViewModel](#VM_Operations_Post_Interfaces_IOperationsVectorDisplayViewModel).

#### Remarks

Use this property to specify or retrieve whether the log scale option is enabled.

### Scale

Gets or sets the scale of the vector display.

```python
double Scale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

For an example that includes this property, see the [Interface IOperationsVectorDisplayViewModel](#VM_Operations_Post_Interfaces_IOperationsVectorDisplayViewModel).

#### Remarks

Use this property to specify or retrieve the scale of the vector display.


