# Method GetModalModeCount
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
entity_name = "FEBody_01"
mode_count = output_reader.GetModalModeCount(entity_name)
```

### Remarks

`target` is looked up with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md). A non-modal body and an unknown name both produce `-1`.
