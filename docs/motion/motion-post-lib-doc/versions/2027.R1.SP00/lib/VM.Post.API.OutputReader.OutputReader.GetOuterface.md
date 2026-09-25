# Method GetOuterface
<a id="VM_Post_API_OutputReader_OutputReader_GetOuterface_System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetOuterface_System_String_"></a> GetOuterface\(string\)

Gets visible outer-face triangle connectivity for the body identified by `target` with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md).

```csharp
public uint[] GetOuterface(string target)
```

### Parameters

`target` string

Full name of the body whose visible outer-face triangles are requested.

### Returns

 uint\[\]

Unsigned integer array containing the vertex connectivity of visible outer-face triangles.

### Examples

```python
# Read visible outer-face triangle connectivity.
entity_name = "FEBody_01"
outer_face = output_reader.GetOuterface(entity_name)
```

### Remarks

Each group of three consecutive values identifies one visible triangle in the outer-face connectivity data.

### Exceptions

 ArgumentException

Thrown when `target` does not identify a body.
