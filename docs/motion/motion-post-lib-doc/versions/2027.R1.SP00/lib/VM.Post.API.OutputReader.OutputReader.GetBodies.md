# Method GetBodies
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetBodies.md" download="VM.Post.API.OutputReader.OutputReader.GetBodies.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_GetBodies_VM_Models_Post_BodyType_System_Boolean_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetBodies_VM_Models_Post_BodyType_System_Boolean_"></a> GetBodies\(BodyType, bool\)

Gets body types and names matching the selected [`BodyType`](VM.Models.Post.BodyType.md).

```csharp
public IEnumerable<(BodyType, string)> GetBodies(BodyType type, bool includeDuymmy = false)
```

### Parameters

`type` [BodyType](VM.Models.Post.BodyType.md)

Body type used to filter the result.

`includeDuymmy` bool

`true` to include dummy bodies. `false` excludes dummy bodies.

### Returns

 IEnumerable<\([BodyType](VM.Models.Post.BodyType.md), string\)\>

Enumerable of body type and full-name pairs matching the filter.

### Examples

```python
# Read rigid-body names and types.
bodies = output_reader.GetBodies(BodyType.RIGID)
```

### Remarks

The method reads body entities from [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md) and omits dummy bodies unless `includeDuymmy` is `true`.
