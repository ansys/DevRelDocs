# Method GetVectorDisplayCharacteristics
<a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_GetVectorDisplayCharacteristics_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_GetVectorDisplayCharacteristics_System_String_"></a> GetVectorDisplayCharacteristics\(string\)

Gets vector-display characteristic names supported by an entity in the dynamic result.

```csharp
IEnumerable<string> GetVectorDisplayCharacteristics(string entityName)
```

### Parameters

`entityName` string

Full name of an entity in the dynamic result. Obtain the name from [GetViewModelByName\(string\)](VM.Operations.Post.Interfaces.IOperationsAnimation.GetViewModelByName.md) or another public entity lookup before calling this method.

### Returns

 IEnumerable<string\>

Characteristic names supported by the entity. An empty collection is returned when the entity is missing or does not support vector display.

### Examples

```python
# Get the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Read characteristics supported by an entity.
entity_name = "TJ_01"
characteristics = dynamic_analysis.GetVectorDisplayCharacteristics(entity_name)
```
