# Method GetPlotCharacteristics
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetPlotCharacteristics.md" download="VM.Post.API.OutputReader.OutputReader.GetPlotCharacteristics.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_GetPlotCharacteristics_System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetPlotCharacteristics_System_String_"></a> GetPlotCharacteristics\(string\)

Gets characteristic names available for an entity identified by `entityName`.

```csharp
public IEnumerable<string> GetPlotCharacteristics(string entityName)
```

### Parameters

`entityName` string

Full name of the entity whose plot characteristics are requested.

### Returns

 IEnumerable<string\>

Enumerable of characteristic full names, or an empty enumerable when the entity is not found or does not provide plot data.

### Examples

```python
# Read curve characteristics for an entity.
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The characteristics available for plotting the entity.
characteristics = output_reader.GetPlotCharacteristics(entity_name)
```

### Remarks

The lookup and characteristic query are performed with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md).
