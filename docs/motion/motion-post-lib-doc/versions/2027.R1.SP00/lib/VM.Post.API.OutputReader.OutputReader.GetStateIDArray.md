# Method GetStateIDArray
<a id="VM_Post_API_OutputReader_OutputReader_GetStateIDArray"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetStateIDArray"></a> GetStateIDArray\(\)

Gets state identifiers in the order reported by the opened result file.

```csharp
public IList<int> GetStateIDArray()
```

### Returns

 IList<int\>

List of state IDs from the first reported state to the last reported state.

### Examples

```python
# Read state IDs in result-file order.
state_ids = output_reader.GetStateIDArray()
```

### Remarks

The returned order matches [GetReferenceTimeArray\(\)](VM.Post.API.OutputReader.OutputReader.GetReferenceTimeArray.md). The same index in both lists identifies the same state.
