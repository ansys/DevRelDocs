# Method CreateContour
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.CreateContour.md" download="VM.Operations.Post.Interfaces.IOperationAnalysisResult.CreateContour.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_CreateContour_System_Collections_Generic_IList_System_String__VM_Models_ContourMappingType_System_String_System_String_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_CreateContour_System_Collections_Generic_IList_System_String__VM_Models_ContourMappingType_System_String_System_String_System_String_"></a> CreateContour\(IList<string\>, ContourMappingType, string, string, string\)

Creates [`IOperationsContourViewModel`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md) for one or more entities and adds it to the analysis result.

For a complete operations, see [Operation API Example - Contour](../document/operation-api/example/example_animation_for_operation_api.md#contour).

```csharp
IOperationsContourViewModel CreateContour(IList<string> entities, ContourMappingType mappingType, string characteristic, string component, string newName = null)
```

### Parameters

`entities` IList<string\>

Full names returned by [GetContourables\(ContourMappingType\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourables.md) for the same `mappingType`.

<Danger>
A name that `GetContourables(ContourMappingType)` did not return causes an exception when the contour is built.
</Danger>

`mappingType` [ContourMappingType](VM.Models.ContourMappingType.md)

Contour mapping type used to select result data for every entity in `entities`.

`characteristic` string

Characteristic name returned by [GetContourCharacteristics\(string, ContourMappingType\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourCharacteristics.md) for `mappingType`.

`component` string

Component name returned by [GetContourComponents\(string, ContourMappingType, string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourComponents.md) for `characteristic`. The value becomes the initial [`Component`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.Component.md).

`newName` string

Name for the new contour. If omitted, the name combines `characteristic` and `component`, and a numbered variant is generated automatically when that name is already used in the analysis result.

<Danger>
Passing `newName` when the analysis result does not support contour visualization causes an exception, because no contour is created to rename.
</Danger>

### Returns

 [IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md)

Created `IOperationsContourViewModel`, or no value when the analysis result does not support contour visualization.

### Examples

```python
# Get the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The analysis result of the document.
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)

# Select contour targets and result fields.
# The type of the contour mapping.
contour_mapping_type = ContourMappingType.FENode
# The entities available for the contour mapping type.
target_entities = analysis_result.GetContourables(contour_mapping_type)

# The name of the characteristic.
characteristic_name = "Displacement"
# The name of the component.
component_name = "X"
# The contour created for the target entities.
contour = analysis_result.CreateContour(target_entities, contour_mapping_type, characteristic_name, component_name)
```

### Remarks

The created contour can be configured through `IOperationsContourViewModel`, including its [`IsEnabled`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.IsEnabled.md) display state.

When `entities` lists more than one entity, only the contour components common to every listed entity become available through [`ComponentList`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.ComponentList.md).
