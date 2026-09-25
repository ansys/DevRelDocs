# Method CreateVector
<a id="VM_Post_API_OutputReader_OutputReader_CreateVector_System_String_System_String_System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_CreateVector_System_String_System_String_System_String_"></a> CreateVector\(string, string, string\)

Creates a vector definition for a vector-displayable entity and characteristic path.

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
vector_name = "ExampleVector"
entity_name = "TJ_01"
characteristic_name = "Base Force"
vector = output_reader.CreateVector(vector_name, entity_name, characteristic_name)
```

### Remarks

The vector definition is added with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md) to the Dynamics analysis result.

> [!IMPORTANT]
> A Dynamics analysis result must be available.

> [!NOTE]
> `target` must identify an entity that implements [`IVectorDisplayable`](VM.Models.Post.IVectorDisplayable.md). Otherwise, this method returns `null`.
