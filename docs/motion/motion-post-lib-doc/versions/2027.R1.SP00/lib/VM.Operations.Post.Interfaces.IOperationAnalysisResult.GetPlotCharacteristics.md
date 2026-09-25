# Method GetPlotCharacteristics
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
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)

# Find curve characteristics for an entity.
entity_name = "FEBody_01"
characteristics = analysis_result.GetPlotCharacteristics(entity_name)
```

### Remarks

The returned characteristics are the valid input for [GetPlotComponents\(string, string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetPlotComponents.md) using the same `entityName`.
