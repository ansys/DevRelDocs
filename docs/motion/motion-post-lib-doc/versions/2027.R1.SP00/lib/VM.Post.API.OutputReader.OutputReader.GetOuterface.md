# Method GetOuterface
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetOuterface.md" download="VM.Post.API.OutputReader.OutputReader.GetOuterface.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The vertex connectivity of the visible outer-face triangles.
outer_face = output_reader.GetOuterface(entity_name)
```

### Remarks

Each group of three consecutive values identifies one visible triangle in the outer-face connectivity data.

### Exceptions

 ArgumentException

Thrown when `target` does not identify a body.
