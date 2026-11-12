# Method GetGeometryInfoArray
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetGeometryInfoArray.md" download="VM.Post.API.OutputReader.OutputReader.GetGeometryInfoArray.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
geometry_infos = output_reader.GetGeometryInfoArray()
```

### Remarks

The result includes every body entity available through `OutputReader`. The returned sequence is empty when the result file contains no body entities.
