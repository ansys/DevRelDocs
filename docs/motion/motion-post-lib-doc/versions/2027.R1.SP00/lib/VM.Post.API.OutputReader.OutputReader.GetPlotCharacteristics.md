# Method GetPlotCharacteristics
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
entity_name = "FEBody_01"
characteristics = output_reader.GetPlotCharacteristics(entity_name)
```

### Remarks

The lookup and characteristic query are performed with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md).
