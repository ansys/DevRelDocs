# Method GetPlotComponents
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetPlotComponents.md" download="VM.Post.API.OutputReader.OutputReader.GetPlotComponents.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The name of the characteristic.
characteristic_name = "Displacement"
# The components available for the plot characteristic of the entity.
components = output_reader.GetPlotComponents(entity_name, characteristic_name)
```

### Remarks

The entity and component query are performed with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md). The characteristic name is passed to the result document without changing it.
