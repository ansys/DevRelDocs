# Method GetGeometryInfo
<a id="VM_Post_API_OutputReader_OutputReader_GetGeometryInfo_System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetGeometryInfo_System_String_"></a> GetGeometryInfo\(string\)

Gets the primary geometry data for the body identified by `target` with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md).

```csharp
public IDataPart GetGeometryInfo(string target)
```

### Parameters

`target` string

Full name of the body whose primary geometry data is requested.

### Returns

 [IDataPart](VM.Models.Post.IDataPart.md)

Primary geometry data for the identified body.

### Examples

```python
# Read primary geometry information for a body.
entity_name = "FEBody_01"
geometry_info = output_reader.GetGeometryInfo(entity_name)
```

### Remarks

The method retrieves `target` with `OutputReader` and returns the first geometry data entry for that body.

> [!IMPORTANT]
> `target` must identify a body. An unknown name or a non-body entity causes the lookup to fail before geometry data is returned.
