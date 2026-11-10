# Method GetContourComponents
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourComponents.md" download="VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourComponents.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The analysis result of the document.
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)

# Find a contour target and its components for a validated characteristic.
# The type of the contour mapping.
contour_mapping_type = ContourMappingType.FENode
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The name of the characteristic.
characteristic_name = "Displacement"
# The components available for the contour characteristic of the entity.
components = analysis_result.GetContourComponents(entity_name, contour_mapping_type, characteristic_name)
```
