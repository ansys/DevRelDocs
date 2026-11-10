# Method GetGeometryNodes
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetGeometryNodes.md" download="VM.Post.API.OutputReader.OutputReader.GetGeometryNodes.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_GetGeometryNodes_System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetGeometryNodes_System_String_"></a> GetGeometryNodes\(string\)

Gets node coordinate values for the body identified by `target` with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md).

```csharp
public double[] GetGeometryNodes(string target)
```

### Parameters

`target` string

Full name of the body whose node values are requested.

### Returns

 double\[\]

Flat array containing node coordinate values for the body's primary geometry data.

### Examples

```python
# Read the node coordinate values for a body.
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The node coordinate values of the body.
geometry_nodes = output_reader.GetGeometryNodes(entity_name)
```

### Remarks

The method retrieves primary geometry data with [GetGeometryInfo\(string\)](VM.Post.API.OutputReader.OutputReader.GetGeometryInfo.md) and returns its node values.

<Danger>
`target` must identify a body. An unknown name or a non-body entity causes the geometry lookup to fail.
</Danger>
