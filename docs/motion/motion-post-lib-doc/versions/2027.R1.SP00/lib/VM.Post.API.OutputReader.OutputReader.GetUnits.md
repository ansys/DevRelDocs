# Method GetUnits
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
