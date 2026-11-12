# Method GetPlotCharacteristics
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetPlotCharacteristics.md" download="VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetPlotCharacteristics.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetPlotCharacteristics_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetPlotCharacteristics_System_String_"></a> GetPlotCharacteristics\(string\)

Gets curve characteristics supported by an entity for use as curve data.

```csharp
IEnumerable<string> GetPlotCharacteristics(string entityName)
```

### Parameters

`entityName` string

Full name of an entity that supports curve data, such as [`IOperationsFEBody`](VM.Operations.Post.Interfaces.IOperationsFEBody.md).

### Returns

 IEnumerable<string\>

Full names of supported curve characteristics, or an empty collection when `entityName` does not identify an entity that supports curve data.

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

# Find curve characteristics for an entity.
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The characteristics available for plotting the entity.
characteristics = analysis_result.GetPlotCharacteristics(entity_name)
```

### Remarks

The returned characteristics are the valid input for [GetPlotComponents\(string, string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetPlotComponents.md) using the same `entityName`.
