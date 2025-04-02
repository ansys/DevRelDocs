#  Interface IOperationsFrequencyViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for the frequency view model.

```python
public interface IOperationsFrequencyViewModel
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationsFrequencyViewModel.py
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


document = applicationHandler.GetDocument(result_file_path)
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)
dynamic_analysis.SetAnimationFrame(10)

viewCount = len(findViews)
if viewCount > 0 :
    page1 = applicationHandler.GetPage(findViews[0].GroupID)

    # Types of Analyis Results
    eigenval_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Eigenvalue)
    eigenvalue_animation = page1.CreateAnimation(eigenval_analysis, "EigenvalueAnimation")
    eigenval_analysis.Frame = 100
    
    times = eigenval_analysis.GetSamplingTimes()
    convertedtimes = list(times)
    eigenval_analysis.TargetSamplingTime = convertedtimes[0]
    frequencies = eigenval_analysis.GetFrequencies()
    frequency = eigenval_analysis.GetFrequency(1)
    # frequency.Enable = True

# Close the Pages
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsFrequencyViewModel_Enable"></a> Enable

Gets or sets a value indicating whether the frequency entity is enabled.

```python
bool Enable { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsFrequencyViewModel](#VM_Operations_Post_Interfaces_IOperationsFrequencyViewModel).

#### Remarks

Use this property to specify or retrieve the enabled status of the frequency entity.


