# Method GetGeometryNodes
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
entity_name = "FEBody_01"
geometry_nodes = output_reader.GetGeometryNodes(entity_name)
```

### Remarks

The method retrieves primary geometry data with [GetGeometryInfo\(string\)](VM.Post.API.OutputReader.OutputReader.GetGeometryInfo.md) and returns its node values.

> [!IMPORTANT]
> `target` must identify a body. An unknown name or a non-body entity causes the geometry lookup to fail.
