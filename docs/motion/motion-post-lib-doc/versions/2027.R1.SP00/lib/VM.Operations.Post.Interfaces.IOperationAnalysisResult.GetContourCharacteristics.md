# Method GetContourCharacteristics
<a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetContourCharacteristics_System_String_VM_Models_ContourMappingType_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetContourCharacteristics_System_String_VM_Models_ContourMappingType_"></a> GetContourCharacteristics\(string, ContourMappingType\)

Gets contour characteristics supported by an entity and mapping type.

```csharp
IEnumerable<string> GetContourCharacteristics(string entityName, ContourMappingType contourMappingType)
```

### Parameters

`entityName` string

Full name returned by [GetContourables\(ContourMappingType\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourables.md).

`contourMappingType` [ContourMappingType](VM.Models.ContourMappingType.md)

Mapping type used to select contour characteristics.

### Returns

 IEnumerable<string\>

Full names of supported characteristics, or an empty collection when `entityName` is not valid.

### Examples

```python
# Get the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)

# Find a contour target and its available characteristics.
contour_mapping_type = ContourMappingType.FENode
entity_name = "FEBody_01"
characteristics = analysis_result.GetContourCharacteristics(entity_name, contour_mapping_type)
```
