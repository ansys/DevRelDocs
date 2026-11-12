# Method GetReferenceTimeArray
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetReferenceTimeArray.md" download="VM.Post.API.OutputReader.OutputReader.GetReferenceTimeArray.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_GetReferenceTimeArray"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetReferenceTimeArray"></a> GetReferenceTimeArray\(\)

Gets reference times in the order reported by the opened result file.

```csharp
public IList<double> GetReferenceTimeArray()
```

### Returns

 IList<double\>

List of reference times corresponding to the state IDs returned by [GetStateIDArray\(\)](VM.Post.API.OutputReader.OutputReader.GetStateIDArray.md).

### Examples

```python
# Read reference times in result-file order.
reference_times = output_reader.GetReferenceTimeArray()
```

### Remarks

The same index in `GetReferenceTimeArray()` and `GetStateIDArray()` identifies the same state.
