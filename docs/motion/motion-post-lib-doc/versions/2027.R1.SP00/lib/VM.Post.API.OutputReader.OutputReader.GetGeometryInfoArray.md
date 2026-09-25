# Method GetGeometryInfoArray
<a id="VM_Post_API_OutputReader_OutputReader_GetGeometryInfoArray"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetGeometryInfoArray"></a> GetGeometryInfoArray\(\)

Gets the body entities that contain geometry data with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md).

```csharp
public IEnumerable<BodyBase> GetGeometryInfoArray()
```

### Returns

 IEnumerable<[BodyBase](VM.Models.Post.Bodies.BodyBase.md)\>

Enumerable containing body entities available in the opened result file.

### Examples

```python
# Read geometry information for all bodies.
geometry_info = output_reader.GetGeometryInfoArray()
```

### Remarks

The result includes every body entity available through `OutputReader`. The returned sequence is empty when the result file contains no body entities.
