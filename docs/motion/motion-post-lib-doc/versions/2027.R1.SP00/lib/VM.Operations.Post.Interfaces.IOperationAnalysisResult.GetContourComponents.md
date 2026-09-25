# Method GetContourComponents
<a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetContourComponents_System_String_VM_Models_ContourMappingType_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetContourComponents_System_String_VM_Models_ContourMappingType_System_String_"></a> GetContourComponents\(string, ContourMappingType, string\)

Gets contour components supported by an entity, mapping type, and characteristic.

```csharp
IEnumerable<string> GetContourComponents(string entityName, ContourMappingType contourMappingType, string characteristicName)
```

### Parameters

`entityName` string

Full name returned by [GetContourables\(ContourMappingType\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourables.md).

`contourMappingType` [ContourMappingType](VM.Models.ContourMappingType.md)

Mapping type used to select the characteristic components.

`characteristicName` string

Characteristic name returned by [GetContourCharacteristics\(string, ContourMappingType\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourCharacteristics.md).

### Returns

 IEnumerable<string\>

Full names of supported components, or an empty collection when the entity or characteristic is not valid.

### Examples

```python
# Get the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)

# Find a contour target and its components for a validated characteristic.
contour_mapping_type = ContourMappingType.FENode
entity_name = "FEBody_01"
characteristic_name = "Displacement"
components = analysis_result.GetContourComponents(entity_name, contour_mapping_type, characteristic_name)
```
