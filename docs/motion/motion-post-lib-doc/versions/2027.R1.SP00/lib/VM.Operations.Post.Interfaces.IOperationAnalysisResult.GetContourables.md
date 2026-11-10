# Method GetContourables
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourables.md" download="VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourables.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The analysis result of the document.
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)

# Find entities that support the selected contour mapping type.
# The type of the contour mapping.
contour_mapping_type = ContourMappingType.FENode
# The entities available for the contour mapping type.
target_entities = analysis_result.GetContourables(contour_mapping_type)
```

### Remarks

The returned names are the valid entity inputs for [CreateContour\(IList<string\>, ContourMappingType, string, string, string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.CreateContour.md) with the same mapping type.
