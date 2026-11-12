# Method GetFrequenciesInfoArray
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetFrequenciesInfoArray.md" download="VM.Post.API.OutputReader.OutputReader.GetFrequenciesInfoArray.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_GetFrequenciesInfoArray"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetFrequenciesInfoArray"></a> GetFrequenciesInfoArray\(\)

Gets frequency information for eigenvalue result data.

```csharp
public IList<(string path, double time, double[] frequencies)> GetFrequenciesInfoArray()
```

### Returns

 IList<\(string path, double time, double\[\] frequencies\)\>

List of tuples containing the frequency-result path, sampling time, and frequency values for each eigenvalue analysis entry.

### Examples

```python
# Read eigenvalue frequency information.
frequencies = output_reader.GetFrequenciesInfoArray()
```

### Remarks

Each tuple keeps its values in this order: path, time, and frequency array. The list is empty when no eigenvalue frequency information is available with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md).
