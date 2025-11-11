# Interface IOperationsDynamicAnalysisResultViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for the dynamic analysis result view model.

```csharp
public interface IOperationsDynamicAnalysisResultViewModel : IOperationAnalysisResult
```

#### Implements

[IOperationAnalysisResult](VM.Operations.Post.Interfaces.IOperationAnalysisResult.md)

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationsDynamicAnalysisResultViewModel.py
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

stateIDs = dynamic_analysis.GetStateIDArray()
py_stateIDs= list(stateIDs)

skipIDs = List[int]()
for i in range(0, len(py_stateIDs), 2) :
    skipIDs.Add(py_stateIDs[i])

# Should the specific frame be loaded?
isFlagActive = True
if isFlagActive:
    dynamic_analysis.SetAnimationFrame(skipIDs)
else:
    timeArray = dynamic_analysis.GetReferenceTimeArray()
    py_timearray = list(timeArray)
    dynamic_analysis.SetAnimationFrame(len(py_timearray))

    # Moves the animation to the specified frame.
    dynamic_analysis.MoveToAnimationFrame(len(py_timearray) - 1)

# Create Vector Display
vector = dynamic_analysis.CreateVectorDisplay("TJ_01", "Base Force")
vector.IsLabel = True
vector.IsVisible = True
vector.LabelBackgroundColor = OperationAPIService.GetColorFrameRGB(255,255,255)
vector.LabelTextColor = OperationAPIService.GetColorFrameRGB(0,0,0)
vector.FullName = "TJ_VectorDisplay"
vector.IsLog = False
vector.Scale = 1000
vector.SetCharacteristic("Base Torque")
vector.Color = Colors.Blue

# Create Expression
expression = dynamic_analysis.CreateExpression("expression")
expression.Expression = "DM(\"Crank/CM\")"

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
```

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_CreateExpression_System_String_"></a> CreateExpression\(string\)

Creates a new function expression in the Motion Postprocessor.

```csharp
IOperationsPythonExpressionViewModel CreateExpression(string newName)
```

#### Parameters

`newName` string

The name of the new function expression to be created.

#### Returns

 [IOperationsPythonExpressionViewModel](VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel" data-throw-if-not-resolved="false"></xref> representing the created function expression.

#### Examples

For an example that includes this property, see the [Interface IOperationsDynamicAnalysisResultViewModel](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.md).

#### Remarks

This method allows the creation of a new function expression within the Motion Postprocessor.
The <code class="paramref">newName</code> parameter specifies the name of the new function expression instance.

### <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_CreateVectorDisplay_System_String_System_String_"></a> CreateVectorDisplay\(string, string\)

Creates a vector display for the specified entity and characteristic. Please refer to this [here](../getting_started_operation_api_using_py.md#how-to-input-the-value-of-the-target-into-the-function-parameter) link.

```csharp
IOperationsVectorDisplayBaseViewModel CreateVectorDisplay(string entityName, string characteristic)
```

#### Parameters

`entityName` string

The name of the target entity for the vector display.

`characteristic` string

The name of the characteristic. Refer to the UI for Vector Display for available characteristics.

#### Returns

 [IOperationsVectorDisplayBaseViewModel](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel" data-throw-if-not-resolved="false"></xref> representing the created vector display.

#### Examples

For an example that includes this property, see the [Interface IOperationsDynamicAnalysisResultViewModel](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.md).

#### Remarks

This method allows the creation of a vector display based on the specified entity and characteristic.
The <code class="paramref">entityName</code> parameter specifies the target entity for the vector display.
The <code class="paramref">characteristic</code> parameter specifies the characteristic to be displayed, which can be referred to in the UI for Vector Display.

### <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_SetAnimationFrame_System_Int32_"></a> SetAnimationFrame\(int\)

Sets a specified number of animation frames.

```csharp
void SetAnimationFrame(int nFrames)
```

#### Parameters

`nFrames` int

The number of frames to load. This parameter should be within the range of 0 to the total number of frames available.

#### Examples

For an example that includes this property, see the [Interface IOperationsDynamicAnalysisResultViewModel](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.md).

#### Remarks

This method sets the specified number of frames for the animation.
The number of frames to load is specified by the <code class="paramref">nFrames</code> parameter.

### <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_SetAnimationFrame_System_Collections_Generic_IEnumerable_System_Int32__"></a> SetAnimationFrame\(IEnumerable<int\>\)

Sets the specified animation frames based on the provided state IDs.

```csharp
void SetAnimationFrame(IEnumerable<int> stateIDs)
```

#### Parameters

`stateIDs` IEnumerable<int\>

An enumerable collection of state IDs representing the frames to load.

#### Examples

For an example that includes this property, see the [Interface IOperationsDynamicAnalysisResultViewModel](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.md).

#### Remarks

This method sets only the specified frames for the animation, as indicated by the <code class="paramref">stateIDs</code> parameter.

