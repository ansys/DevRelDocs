# Method GetPrimaryAnalysisResultType
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetPrimaryAnalysisResultType.md" download="VM.Post.API.OutputReader.OutputReader.GetPrimaryAnalysisResultType.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
