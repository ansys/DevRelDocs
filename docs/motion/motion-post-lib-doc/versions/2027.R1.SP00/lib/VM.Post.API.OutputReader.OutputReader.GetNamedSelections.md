# Method GetNamedSelections
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetNamedSelections.md" download="VM.Post.API.OutputReader.OutputReader.GetNamedSelections.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_GetNamedSelections"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetNamedSelections"></a> GetNamedSelections\(\)

Gets named selections available through [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md).

```csharp
public NamedSelection[] GetNamedSelections()
```

### Returns

 [NamedSelection](VM.Models.Post.EntityTypes.NamedSelection.md)\[\]

Array containing named selections from the opened result file.

### Examples

```python
# Read named selections.
named_selections = output_reader.GetNamedSelections()
```

### Remarks

The result contains every named selection available in the result file. The array is empty when no named selections are available.
