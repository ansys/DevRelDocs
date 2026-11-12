# Method GetGeometryInfo
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetGeometryInfo.md" download="VM.Post.API.OutputReader.OutputReader.GetGeometryInfo.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The geometry data of the body.
geometry_info = output_reader.GetGeometryInfo(entity_name)
```

### Remarks

The method retrieves `target` with `OutputReader` and returns the first geometry data entry for that body.

<Danger>
`target` must identify a body. An unknown name or a non-body entity causes the lookup to fail before geometry data is returned.
</Danger>
