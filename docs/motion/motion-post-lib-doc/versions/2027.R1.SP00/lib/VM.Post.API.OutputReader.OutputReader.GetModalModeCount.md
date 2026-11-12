# Method GetModalModeCount
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetModalModeCount.md" download="VM.Post.API.OutputReader.OutputReader.GetModalModeCount.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_GetModalModeCount_System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetModalModeCount_System_String_"></a> GetModalModeCount\(string\)

Gets the selected mode count for a modal body identified by `target`.

```csharp
public int GetModalModeCount(string target)
```

### Parameters

`target` string

Full name of the modal body.

### Returns

 int

Number of selected modes, or `-1` when `target` does not identify a modal body.

### Examples

```python
# Read the selected mode count for a modal body.
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The number of selected modes of the modal body.
mode_count = output_reader.GetModalModeCount(entity_name)
```

### Remarks

`target` is looked up with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md). A non-modal body and an unknown name both produce `-1`.
