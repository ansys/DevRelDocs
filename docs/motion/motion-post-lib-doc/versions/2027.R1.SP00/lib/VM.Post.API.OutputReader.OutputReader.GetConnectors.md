# Method GetConnectors
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
entity_name = "Crank"
connectors = output_reader.GetConnectors(entity_name)
```

### Remarks

The method checks constraints, contacts, and forces associated with the body and includes each connector once.
