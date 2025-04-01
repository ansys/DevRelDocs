# Interface IOperationAnalysisResultViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing common information for an analysis result view model.

```python
public interface IOperationAnalysisResultViewModel : IOperationsBase
```

#### Implements

[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationAnalysisResultViewModel.py
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

# It returns the objects available for contouring that correspond to the MappingType.
targetentities = dynamic_analysis.GetContourables(ContourMappingType.FENode)

# Create Contour
contour = dynamic_analysis.CreateContour(targetentities, ContourMappingType.FENode, "Displacement", "X")
contour.LegendColorScheme = ColorSchemeType.BLACK_TO_WHITE
contour.AutoRange = False
if contour.AutoRange == False:
    contour.Max = 4
    contour.Min = 1

contour.LegendFontColor = Colors.Red
contour.LogScale = True
contour.LegendVisibility = False
contour.Continuous = True
contour.Component = "Z"
contour.FullName = "FEBody_01_Contour_Z"
contour.MinMaxTargetType = ExtremalValueType.Part
contour.IsEnabled = False

# Close the Pages
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Methods

### CreateContour\(IList<string\>, ContourMappingType, string, string, string\)

Creates a contour for displaying various simulation results. Please refer to this [here](../getting_started_operation_api_using_py.md#how-to-input-the-value-of-the-target-into-the-function-parameter) link.

```python
IOperationsContourViewModel CreateContour(IList<string> entities, ContourMappingType mappingType, string characteristic, string component, string newName = null)
```

#### Parameters

`entities` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The names of the target entities.

`mappingType` ContourMappingType

The MappingType is an option to choose objects for contour display. Refer to UI for Contour.
The available options are:
<ul><li><xref href="VM.Models.ContourMappingType.None" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FENode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElement" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElementNode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEMaterial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.BeamGroup" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Contact" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.ChainedSystem" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Usersubroutine" data-throw-if-not-resolved="false"></xref></li></ul>

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the characteristic. Refer to UI for Contour.

`component` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the component. Refer to UI for Contour.

`newName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the Contour.

#### Returns

 [IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsContourViewModel" data-throw-if-not-resolved="false"></xref> representing the created contour.

#### Examples

For an example that includes this property, see the [Interface IOperationAnalysisResultViewModel](#VM_Operations_Post_Interfaces_IOperationAnalysisResultViewModel).

#### Remarks

This method allows the creation of a contour for visualizing simulation results based on various parameters. 
The target entities are specified by the <code class="paramref">entities</code> parameter, which is a list of entity names.
The <code class="paramref">mappingType</code> parameter determines the type of contour mapping to be used, with options 
including nodes, elements, and specialized groups. The <code class="paramref">characteristic</code> and <code class="paramref">component</code> 
parameters specify the characteristic and component for the contour, respectively. Optionally, a new name for 
the contour can be provided using the <code class="paramref">newName</code> parameter. If not specified, a default name will be used.

### GetContourables\(ContourMappingType\)

Retrieves the entities that are applicable for the specified contour mapping type.

```python
string[] GetContourables(ContourMappingType contourMappingType)
```

#### Parameters

`contourMappingType` ContourMappingType

The type of contour mapping.
The available options are:
<ul><li><xref href="VM.Models.ContourMappingType.None" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FENode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElement" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElementNode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEMaterial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.BeamGroup" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Contact" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.ChainedSystem" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Usersubroutine" data-throw-if-not-resolved="false"></xref></li></ul>

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

An array of strings representing the entities applicable for the specified contour mapping type.

#### Examples

For an example that includes this property, see the [Interface IOperationAnalysisResultViewModel](#VM_Operations_Post_Interfaces_IOperationAnalysisResultViewModel).

#### Remarks

This method returns the entities that correspond to the given <code class="paramref">contourMappingType</code>. 
If there are applicable entities, they are returned as an array of strings.

### GetReferenceTimeArray\(\)

Retrieves an array of time values from the result file.

```python
double[] GetReferenceTimeArray()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

An array of doubles representing the time values.

#### Examples

For an example that includes this property, see the [Interface IOperationAnalysisResultViewModel](#VM_Operations_Post_Interfaces_IOperationAnalysisResultViewModel).

#### Remarks

This method extracts and returns the array of time values from the result file. The returned array 
contains the time points relevant to the simulation or analysis.

### GetStateIDArray\(\)

Retrieves an array of state IDs from the result file.

```python
int[] GetStateIDArray()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

An array of integers representing the state IDs included in the result file.

#### Examples

For an example that includes this property, see the [Interface IOperationAnalysisResultViewModel](#VM_Operations_Post_Interfaces_IOperationAnalysisResultViewModel).

#### Remarks

This method extracts and returns the array of state IDs from the result file. 
The returned array contains the IDs of all states relevant to the simulation or analysis.

### MoveToAnimationFrame\(int\)

Moves the animation to the specified frame.

```python
void MoveToAnimationFrame(int frame)
```

#### Parameters

`frame` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The frame number to move to.

#### Examples

For an example that includes this property, see the [Interface IOperationAnalysisResultViewModel](#VM_Operations_Post_Interfaces_IOperationAnalysisResultViewModel).

#### Remarks

This method sets the animation to the specified frame, allowing for control over the playback position.


