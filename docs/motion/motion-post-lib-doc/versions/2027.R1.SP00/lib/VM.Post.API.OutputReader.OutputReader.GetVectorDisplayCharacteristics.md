# Method GetVectorDisplayCharacteristics
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetVectorDisplayCharacteristics.md" download="VM.Post.API.OutputReader.OutputReader.GetVectorDisplayCharacteristics.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# The name of the vector displayable entity.
entity_name = "TJ_01"
# The characteristics available for the vector display of the entity.
characteristics = output_reader.GetVectorDisplayCharacteristics(entity_name)
```

### Remarks

The entity is looked up with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md). A non-vector-displayable entity produces an empty result.
