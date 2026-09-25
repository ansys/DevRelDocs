# Method CreateContour
<a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_CreateContour_System_Collections_Generic_IList_System_String__VM_Models_ContourMappingType_System_String_System_String_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_CreateContour_System_Collections_Generic_IList_System_String__VM_Models_ContourMappingType_System_String_System_String_System_String_"></a> CreateContour\(IList<string\>, ContourMappingType, string, string, string\)

Creates [`IOperationsContourViewModel`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md) for one or more entities and adds it to the analysis result.

```csharp
IOperationsContourViewModel CreateContour(IList<string> entities, ContourMappingType mappingType, string characteristic, string component, string newName = null)
```

### Parameters

`entities` IList<string\>

Full names returned by [GetContourables\(ContourMappingType\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourables.md) for the same `mappingType`.

> [!IMPORTANT]
> A name that `GetContourables(ContourMappingType)` did not return causes an exception when the contour is built.

`mappingType` [ContourMappingType](VM.Models.ContourMappingType.md)

Contour mapping type used to select result data for every entity in `entities`.

`characteristic` string

Characteristic name returned by [GetContourCharacteristics\(string, ContourMappingType\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourCharacteristics.md) for `mappingType`.

`component` string

Component name returned by [GetContourComponents\(string, ContourMappingType, string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourComponents.md) for `characteristic`. The value becomes the initial [`Component`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.Component.md).

`newName` string

Name for the new contour. If omitted, the name combines `characteristic` and `component`, and a numbered variant is generated automatically when that name is already used in the analysis result.

> [!IMPORTANT]
> Passing `newName` when the analysis result does not support contour visualization causes an exception, because no contour is created to rename.

### Returns

 [IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md)

Created `IOperationsContourViewModel`, or no value when the analysis result does not support contour visualization.

### Examples

```python
# Get the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)

# Select contour targets and result fields.
contour_mapping_type = ContourMappingType.FENode
target_entities = analysis_result.GetContourables(contour_mapping_type)

characteristic_name = "Displacement"
component_name = "X"
contour = analysis_result.CreateContour(target_entities, contour_mapping_type, characteristic_name, component_name)
```

### Remarks

The created contour can be configured through `IOperationsContourViewModel`, including its [`IsEnabled`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.IsEnabled.md) display state.

When `entities` lists more than one entity, only the contour components common to every listed entity become available through [`ComponentList`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.ComponentList.md).
