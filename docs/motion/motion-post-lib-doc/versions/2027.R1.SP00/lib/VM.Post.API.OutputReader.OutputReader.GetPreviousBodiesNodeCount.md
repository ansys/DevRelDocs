# Method GetPreviousBodiesNodeCount
<a id="VM_Post_API_OutputReader_OutputReader_GetPreviousBodiesNodeCount_System_Collections_Generic_IList_System_String__System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetPreviousBodiesNodeCount_System_Collections_Generic_IList_System_String__System_String_"></a> GetPreviousBodiesNodeCount\(IList<string\>, string\)

Gets the node count for selected bodies that occur before `target` with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md).

```csharp
public long GetPreviousBodiesNodeCount(IList<string> bodyNames, string target)
```

### Parameters

`bodyNames` IList<string\>

Names of bodies whose node counts are included before `target`. A `null` value includes no bodies.

`target` string

Full name that marks where counting stops.

### Returns

 long

Total number of nodes in selected bodies encountered before `target`.

### Examples

```python
# Build the entity name list.
body_names = List[str]()
entity_name = "FEBody_01"
body_names.Add(entity_name)

# Count selected body nodes before a target body.
node_count = output_reader.GetPreviousBodiesNodeCount(body_names, entity_name)
```

### Remarks

Body entities are checked in the order provided by `OutputReader`. Counting stops when a body with matching `FullName` is reached. If `target` is not found, all matching bodies are counted.
