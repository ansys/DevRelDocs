# Method GetFrequenciesInfoArray
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
