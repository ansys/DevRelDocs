# Method GetPlotComponents
<a id="VM_Post_API_OutputReader_OutputReader_GetPlotComponents_System_String_System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetPlotComponents_System_String_System_String_"></a> GetPlotComponents\(string, string\)

Gets component names available for an entity and characteristic.

```csharp
public IEnumerable<string> GetPlotComponents(string entityName, string characteristicName)
```

### Parameters

`entityName` string

Full name of the entity whose components are requested.

`characteristicName` string

Full name of the characteristic used to find components.

### Returns

 IEnumerable<string\>

Enumerable of component full names, or an empty enumerable when the entity is not found.

### Examples

```python
# Read components for a curve characteristic.
entity_name = "FEBody_01"
characteristic_name = "Displacement"
components = output_reader.GetPlotComponents(entity_name, characteristic_name)
```

### Remarks

The entity and component query are performed with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md). The characteristic name is passed to the result document without changing it.
