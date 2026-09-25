# Method GetContourables
<a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetContourables_VM_Models_ContourMappingType_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetContourables_VM_Models_ContourMappingType_"></a> GetContourables\(ContourMappingType\)

Gets entity names that support a contour mapping type.

```csharp
string[] GetContourables(ContourMappingType contourMappingType)
```

### Parameters

`contourMappingType` [ContourMappingType](VM.Models.ContourMappingType.md)

Contour mapping type used to filter supported entities.

### Returns

 string\[\]

Array of supported entity full names.

### Examples

```python
# Get the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)

# Find entities that support the selected contour mapping type.
contour_mapping_type = ContourMappingType.FENode
target_entities = analysis_result.GetContourables(contour_mapping_type)
```

### Remarks

The returned names are the valid entity inputs for [CreateContour\(IList<string\>, ContourMappingType, string, string, string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.CreateContour.md) with the same mapping type.
