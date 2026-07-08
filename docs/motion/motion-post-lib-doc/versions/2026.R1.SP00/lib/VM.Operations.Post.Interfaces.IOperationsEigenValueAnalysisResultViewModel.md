# Interface IOperationsEigenValueAnalysisResultViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for an eigenvalue analysis result view model.

```csharp
public interface IOperationsEigenValueAnalysisResultViewModel : IOperationAnalysisResult
```

#### Implements

[IOperationAnalysisResult](VM.Operations.Post.Interfaces.IOperationAnalysisResult.md)

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationsEigenValueAnalysisResultViewModel.py
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

# result_file_path - Get the document from the result file path.
document = applicationHandler.GetDocument(result_file_path)

# This retrieves the analysis result from the document.
# Types of Analysis Results
# - Dynamics
# - Eigenvalue
# - Statics
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)
dynamic_analysis.SetAnimationFrame(10)

viewCount = len(findViews)
if viewCount > 0 :
    page1 = applicationHandler.GetPage(findViews[0].GroupID)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    eigenval_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Eigenvalue)

    # Create an Animation View on the active page
    # This will create an animation view based on the eigenvalue analysis.
    eigenvalue_animation = page1.CreateAnimation(eigenval_analysis, "EigenvalueAnimation")
    eigenval_analysis.Frame = 100
    
    times = eigenval_analysis.GetSamplingTimes()
    convertedtimes = list(times)
    eigenval_analysis.TargetSamplingTime = convertedtimes[0]
    frequencies = eigenval_analysis.GetFrequencies()
    frequency = eigenval_analysis.GetFrequency(1)
    # frequency.Enable = True

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_Frame"></a> Frame

Gets or sets the frame number to be read when loading animation for EigenValue analysis type.

```csharp
uint Frame { get; set; }
```

#### Property Value

 uint

#### Examples

For an example that includes this property, see the [Interface IOperationsEigenValueAnalysisResultViewModel](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.md).

#### Remarks

Use this property to specify or retrieve the frame number to load for animations in EigenValue analysis.

### <a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_TargetSamplingTime"></a> TargetSamplingTime

Gets or sets the target sampling time.

```csharp
double TargetSamplingTime { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsEigenValueAnalysisResultViewModel](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.md).

#### Remarks

This property allows you to select and set one specific sampling time from multiple available sampling times.

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_GetFrequencies"></a> GetFrequencies\(\)

Retrieves all instances of frequencies.

```csharp
IEnumerable<IOperationsFrequencyViewModel> GetFrequencies()
```

#### Returns

 IEnumerable<[IOperationsFrequencyViewModel](VM.Operations.Post.Interfaces.IOperationsFrequencyViewModel.md)\>

An enumerable collection of <xref href="VM.Operations.Post.Interfaces.IOperationsFrequencyViewModel" data-throw-if-not-resolved="false"></xref> representing the frequency instances.

#### Examples

For an example that includes this property, see the [Interface IOperationsEigenValueAnalysisResultViewModel](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.md).

#### Remarks

This method finds and returns all instances of frequencies.

### <a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_GetFrequency_System_Int32_"></a> GetFrequency\(int\)

Retrieves the frequency instance for the specified sampling time index.

```csharp
IOperationsFrequencyViewModel GetFrequency(int index)
```

#### Parameters

`index` int

The index of the target sampling time.

#### Returns

 [IOperationsFrequencyViewModel](VM.Operations.Post.Interfaces.IOperationsFrequencyViewModel.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsFrequencyViewModel" data-throw-if-not-resolved="false"></xref> representing the frequency for the specified index.

#### Examples

For an example that includes this property, see the [Interface IOperationsEigenValueAnalysisResultViewModel](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.md).

#### Remarks

This method finds and returns the frequency instance corresponding to the provided sampling time index.

### <a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_GetSamplingTimes"></a> GetSamplingTimes\(\)

Retrieves an array of sampling times.

```csharp
double[] GetSamplingTimes()
```

#### Returns

 double\[\]

An array of doubles representing the available sampling times.

#### Examples

For an example that includes this property, see the [Interface IOperationsEigenValueAnalysisResultViewModel](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.md).

#### Remarks

This method extracts and returns the array of available sampling times.

