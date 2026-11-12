# Method GetConnectors
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetConnectors.md" download="VM.Post.API.OutputReader.OutputReader.GetConnectors.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_GetConnectors_System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetConnectors_System_String_"></a> GetConnectors\(string\)

Gets connector type, action type, and name information associated with a body.

```csharp
public IList<(ConnectorType, ActionType, string)> GetConnectors(string name)
```

### Parameters

`name` string

Full name of the body.

### Returns

 IList<\([ConnectorType](VM.Models.Post.ConnectorType.md), [ActionType](VM.Models.Post.ActionType.md), string\)\>

List of connector type, action type, and connector full-name tuples. An empty list is returned when no body with `name` is found.

### Examples

```python
# Read connectors associated with a body.
# The name of the target entity.
entity_name = "Crank"
# The connectors associated with the body.
connectors = output_reader.GetConnectors(entity_name)
```

### Remarks

The method checks constraints, contacts, and forces associated with the body and includes each connector once.
