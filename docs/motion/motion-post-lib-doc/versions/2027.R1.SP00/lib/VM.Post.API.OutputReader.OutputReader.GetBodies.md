# Method GetBodies
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
