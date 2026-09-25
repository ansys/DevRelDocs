# Method GetPrimaryAnalysisResultType
<a id="VM_Post_API_OutputReader_OutputReader_GetPrimaryAnalysisResultType"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetPrimaryAnalysisResultType"></a> GetPrimaryAnalysisResultType\(\)

Gets the type of the primary analysis result in the opened result file.

```csharp
public AnalysisResultType GetPrimaryAnalysisResultType()
```

### Returns

 [AnalysisResultType](VM.Models.AnalysisResultType.md)

Primary analysis type, or `Nothing` when no primary result is available.

### Examples

```python
# Read the primary analysis result type.
analysis_result_type = output_reader.GetPrimaryAnalysisResultType()
```

### Remarks

The returned value is taken from the primary analysis result reported with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md).
