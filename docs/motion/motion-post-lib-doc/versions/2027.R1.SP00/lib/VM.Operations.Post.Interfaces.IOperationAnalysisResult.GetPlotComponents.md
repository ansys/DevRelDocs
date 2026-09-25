# Method GetPlotComponents
<a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetPlotComponents_System_String_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetPlotComponents_System_String_System_String_"></a> GetPlotComponents\(string, string\)

Gets curve components supported by an entity and characteristic.

```csharp
IEnumerable<string> GetPlotComponents(string entityName, string characteristicName)
```

### Parameters

`entityName` string

Full name of an entity that supports curve data, such as [`IOperationsFEBody`](VM.Operations.Post.Interfaces.IOperationsFEBody.md).

`characteristicName` string

Characteristic name returned by [GetPlotCharacteristics\(string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetPlotCharacteristics.md).

### Returns

 IEnumerable<string\>

Full names of supported curve components, or an empty collection when `entityName` does not identify an entity that supports curve data, or when `characteristicName` is not valid for that entity.

### Examples

```python
# Get the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)

# Find components for the validated Modal Flex body characteristic.
entity_name = "FEBody_01"
characteristic_name = "Displacement"

components = analysis_result.GetPlotComponents(entity_name, characteristic_name)
```
