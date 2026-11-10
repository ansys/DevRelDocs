# Method GetUnits
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetUnits.md" download="VM.Post.API.OutputReader.OutputReader.GetUnits.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_GetUnits"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetUnits"></a> GetUnits\(\)

Gets the unit name and scale factor for each result dimension.

```csharp
public Dictionary<string, KeyValuePair<string, double>> GetUnits()
```

### Returns

 Dictionary<string, KeyValuePair<string, double\>\>

Dictionary keyed by result dimension. Each value contains the unit name and scale factor reported by [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md).

### Examples

```python
# Read unit names and scale factors.
units = output_reader.GetUnits()
```

### Remarks

The scale factor is read from the unit system associated with the opened result file.
