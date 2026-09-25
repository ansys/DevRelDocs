# Method GetVectorDisplayCharacteristics
<a id="VM_Post_API_OutputReader_OutputReader_GetVectorDisplayCharacteristics_System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetVectorDisplayCharacteristics_System_String_"></a> GetVectorDisplayCharacteristics\(string\)

Gets vector-display characteristic names available for an entity identified by `entityName`.

```csharp
public IEnumerable<string> GetVectorDisplayCharacteristics(string entityName)
```

### Parameters

`entityName` string

Full name of the entity whose vector-display characteristics are requested.

### Returns

 IEnumerable<string\>

Enumerable of characteristic full names, or an empty enumerable when the entity is not vector-displayable.

### Examples

```python
# Read vector-display characteristics for an entity.
entity_name = "TJ_01"
characteristics = output_reader.GetVectorDisplayCharacteristics(entity_name)
```

### Remarks

The entity is looked up with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md). A non-vector-displayable entity produces an empty result.
