# Method CreateVector
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.CreateVector.md" download="VM.Post.API.OutputReader.OutputReader.CreateVector.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_CreateVector_System_String_System_String_System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_CreateVector_System_String_System_String_System_String_"></a> CreateVector\(string, string, string\)

Creates a vector definition for a vector-displayable entity and characteristic path.

For a complete operations, see [Result File Reader API Example - Export Vector](../document/result-file-reader/example/example_vector_for_result_file_reader_api.md#export-vector).

```csharp
public IVectorDisplay CreateVector(string newName, string target, string path)
```

### Parameters

`newName` string

Full name for the new vector definition.

`target` string

Full name of the vector-displayable entity.

`path` string

Characteristic path used by the vector definition.

### Returns

 [IVectorDisplay](VM.Models.Post.IVectorDisplay.md)

Newly created [`IVectorDisplay`](VM.Models.Post.IVectorDisplay.md), or `null` when `target` is not vector-displayable.

### Examples

```python
# Create a vector definition for a supported entity and characteristic.
# The name of the vector.
vector_name = "ExampleVector"
# The name of the vector displayable entity.
entity_name = "TJ_01"
# The name of the characteristic.
characteristic_name = "Base Force"
# The vector definition created for the entity and characteristic.
vector = output_reader.CreateVector(vector_name, entity_name, characteristic_name)
```

### Remarks

The vector definition is added with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md) to the Dynamics analysis result.

<Danger>
A Dynamics analysis result must be available.
</Danger>

<Note>
`target` must identify an entity that implements [`IVectorDisplayable`](VM.Models.Post.IVectorDisplayable.md). Otherwise, this method returns `null`.
</Note>
