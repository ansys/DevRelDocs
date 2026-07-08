#  Interface IOperationAnalysisResultViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing common information for an analysis result view model.

```csharp
public interface IOperationAnalysisResultViewModel : IOperationsBase
```

#### Implements

[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResultViewModel_CreateContour_System_Collections_Generic_IList_System_String__VM_Models_ContourMappingType_System_String_System_String_System_String_"></a> CreateContour\(IList<string\>, ContourMappingType, string, string, string\)

Creates a contour for displaying various simulation results.

```csharp
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

The following example demonstrates how to use the <code>CreateContour</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.LoadAnimationFrames(50);
entities = dynamic_analysis.GetContourables(ContourMappingType.Contact);
dynamic_analysis.CreateContour(entities, ContourMappingType.Contact, "Normal Force", "Average")</code></pre>

#### Remarks

This method allows the creation of a contour for visualizing simulation results based on various parameters. 
The target entities are specified by the <code class="paramref">entities</code> parameter, which is a list of entity names.
The <code class="paramref">mappingType</code> parameter determines the type of contour mapping to be used, with options 
including nodes, elements, and specialized groups. The <code class="paramref">characteristic</code> and <code class="paramref">component</code> 
parameters specify the characteristic and component for the contour, respectively. Optionally, a new name for 
the contour can be provided using the <code class="paramref">newName</code> parameter. If not specified, a default name will be used.

### <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResultViewModel_GetContourables_VM_Models_ContourMappingType_"></a> GetContourables\(ContourMappingType\)

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

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

An array of strings representing the entities applicable for the specified contour mapping type.

#### Examples

The following example demonstrates how to use the <code>GetContourables</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.LoadAnimationFrames(50);
entities = dynamic_analysis.GetContourables(ContourMappingType.Contact);</code></pre>

#### Remarks

This method returns the entities that correspond to the given <code class="paramref">contourMappingType</code>. 
If there are applicable entities, they are returned as an array of strings.

### <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResultViewModel_GetReferenceTimeArray"></a> GetReferenceTimeArray\(\)

Retrieves an array of time values from the result file.

```csharp
double[] GetReferenceTimeArray()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

An array of doubles representing the time values.

#### Examples

The following example demonstrates how to use the <code>GetReferenceTimeArray</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
timearray = dynamic_analysis.GetReferenceTimeArray();</code></pre>

#### Remarks

This method extracts and returns the array of time values from the result file. The returned array 
contains the time points relevant to the simulation or analysis.

### <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResultViewModel_GetStateIDArray"></a> GetStateIDArray\(\)

Retrieves an array of state IDs from the result file.

```csharp
int[] GetStateIDArray()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

An array of integers representing the state IDs included in the result file.

#### Examples

The following example demonstrates how to use the <code>GetStateIDArray</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
idarray = dynamic_analysis.GetStateIDArray();</code></pre>

#### Remarks

This method extracts and returns the array of state IDs from the result file. 
The returned array contains the IDs of all states relevant to the simulation or analysis.

### <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResultViewModel_MoveToAnimationFrame_System_Int32_"></a> MoveToAnimationFrame\(int\)

Moves the animation to the specified frame.

```csharp
void MoveToAnimationFrame(int frame)
```

#### Parameters

`frame` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The frame number to move to.

#### Examples

The following example demonstrates how to use the <code>MoveToAnimationFrame</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.LoadAnimationFrames(50);
dynamic_analysis.MoveToAnimationFrame(10);</code></pre>

#### Remarks

This method sets the animation to the specified frame, allowing for control over the playback position.

