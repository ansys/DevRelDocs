# Method GetNamedSelections
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
