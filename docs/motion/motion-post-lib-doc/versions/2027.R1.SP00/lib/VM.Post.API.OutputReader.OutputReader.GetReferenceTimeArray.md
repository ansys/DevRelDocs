# Method GetReferenceTimeArray
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
