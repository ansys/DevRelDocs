# Interface IOperationAnalysisResult
<a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing common information for an analysis result.

```csharp
public interface IOperationAnalysisResult
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationAnalysisResult.py
# -*- coding: utf-8 -*-
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

# This retrieves the state IDs from the dynamic analysis.
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

# targetentities - Set the entity as the target for export
# Set Contour Mapping Type
# ContourMappingType can be one of the following:
# - ContourMappingType.None - None
# - ContourMappingType.FENode - Node (Averaged across body)
# - ContourMappingType.FEElement - Element (Unaveraged)
# - ContourMappingType.FEElementNode - Node (Unaveraged)
# - ContourMappingType.FEMaterial - Node (Averaged within material)
# - ContourMappingType.BeamGroup - Beam Group
# - ContourMappingType.Contact - Contact
# - ContourMappingType.ChainedSystem - Chained System
# - ContourMappingType.Usersubroutine - Usersubroutine
# characteristic_path - The path to the characteristic for which the contour will be created.
# component_path - The path to the component for which the contour will be created.
contour = dynamic_analysis.CreateContour(targetentities, ContourMappingType.FENode, "Displacement", "X")

# Set properties for the contour
contour.LegendColorScheme = ColorSchemeType.BLACK_TO_WHITE
contour.AutoRange = False
if contour.AutoRange == False:
    contour.Max = 4
    contour.Min = 1

# Set additional properties for the contour
contour.LegendFontColor = Colors.Red
contour.LogScale = True
contour.LegendVisibility = False
contour.Continuous = True
contour.Component = "Z"
contour.FullName = "FEBody_01_Contour_Z"
contour.MinMaxTargetType = ExtremalValueType.Part
contour.IsEnabled = False

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
```

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_CreateContour_System_Collections_Generic_IList_System_String__VM_Models_ContourMappingType_System_String_System_String_System_String_"></a> CreateContour\(IList<string\>, ContourMappingType, string, string, string\)

Creates a contour for displaying various simulation results. Please refer to this [here](../getting_started_operation_api_using_py.md#how-to-input-the-value-of-the-target-into-the-function-parameter) link.

```csharp
IOperationsContourViewModel CreateContour(IList<string> entities, ContourMappingType mappingType, string characteristic, string component, string newName = null)
```

#### Parameters

`entities` IList<string\>

The names of the target entities.

`mappingType` ContourMappingType

The MappingType is an option to choose objects for contour display. Refer to UI for Contour.
The available options are:
<ul><li><xref href="VM.Models.ContourMappingType.None" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FENode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElement" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElementNode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEMaterial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.BeamGroup" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Contact" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.ChainedSystem" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Usersubroutine" data-throw-if-not-resolved="false"></xref></li></ul>

`characteristic` string

The name of the characteristic. Refer to UI for Contour.

`component` string

The name of the component. Refer to UI for Contour.

`newName` string

The name of the Contour.

#### Returns

 [IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsContourViewModel" data-throw-if-not-resolved="false"></xref> representing the created contour.

#### Examples

For an example that includes this property, see the [Interface IOperationAnalysisResult](VM.Operations.Post.Interfaces.IOperationAnalysisResult.md).

#### Remarks

This method allows the creation of a contour for visualizing simulation results based on various parameters.
The target entities are specified by the <code class="paramref">entities</code> parameter, which is a list of entity names.
The <code class="paramref">mappingType</code> parameter determines the type of contour mapping to be used, with options
including nodes, elements, and specialized groups. The <code class="paramref">characteristic</code> and <code class="paramref">component</code>
parameters specify the characteristic and component for the contour, respectively. Optionally, a new name for
the contour can be provided using the <code class="paramref">newName</code> parameter. If not specified, a default name will be used.

### <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetContourables_VM_Models_ContourMappingType_"></a> GetContourables\(ContourMappingType\)

Retrieves the entities that are applicable for the specified contour mapping type.

```csharp
string[] GetContourables(ContourMappingType contourMappingType)
```

#### Parameters

`contourMappingType` ContourMappingType

The type of contour mapping.
The available options are:
<ul><li><xref href="VM.Models.ContourMappingType.None" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FENode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElement" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEElementNode" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.FEMaterial" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.BeamGroup" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Contact" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.ChainedSystem" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.ContourMappingType.Usersubroutine" data-throw-if-not-resolved="false"></xref></li></ul>

#### Returns

 string\[\]

An array of strings representing the entities applicable for the specified contour mapping type.

#### Examples

For an example that includes this property, see the [Interface IOperationAnalysisResult](VM.Operations.Post.Interfaces.IOperationAnalysisResult.md).

#### Remarks

This method returns the entities that correspond to the given <code class="paramref">contourMappingType</code>.
If there are applicable entities, they are returned as an array of strings.

### <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetReferenceTimeArray"></a> GetReferenceTimeArray\(\)

Retrieves an array of time values from the result file.

```csharp
double[] GetReferenceTimeArray()
```

#### Returns

 double\[\]

An array of doubles representing the time values.

#### Examples

For an example that includes this property, see the [Interface IOperationAnalysisResult](VM.Operations.Post.Interfaces.IOperationAnalysisResult.md).

#### Remarks

This method extracts and returns the array of time values from the result file. The returned array
contains the time points relevant to the simulation or analysis.

### <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetStateIDArray"></a> GetStateIDArray\(\)

Retrieves an array of state IDs from the result file.

```csharp
int[] GetStateIDArray()
```

#### Returns

 int\[\]

An array of integers representing the state IDs included in the result file.

#### Examples

For an example that includes this property, see the [Interface IOperationAnalysisResult](VM.Operations.Post.Interfaces.IOperationAnalysisResult.md).

#### Remarks

This method extracts and returns the array of state IDs from the result file.
The returned array contains the IDs of all states relevant to the simulation or analysis.

### <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_MoveToAnimationFrame_System_Int32_"></a> MoveToAnimationFrame\(int\)

Moves the animation to the specified frame.

```csharp
void MoveToAnimationFrame(int frame)
```

#### Parameters

`frame` int

The frame number to move to.

#### Examples

For an example that includes this property, see the [Interface IOperationAnalysisResult](VM.Operations.Post.Interfaces.IOperationAnalysisResult.md).

#### Remarks

This method sets the animation to the specified frame, allowing for control over the playback position.

