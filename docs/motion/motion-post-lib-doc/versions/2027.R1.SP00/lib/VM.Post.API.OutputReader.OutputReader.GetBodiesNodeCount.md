# Method GetBodiesNodeCount
<a id="VM_Post_API_OutputReader_OutputReader_GetBodiesNodeCount_System_Collections_Generic_IList_System_String__"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetBodiesNodeCount_System_Collections_Generic_IList_System_String__"></a> GetBodiesNodeCount\(IList<string\>\)

Gets the total node count for body names selected in [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md).

```csharp
public long GetBodiesNodeCount(IList<string> bodyNames)
```

### Parameters

`bodyNames` IList<string\>

Names of bodies whose node counts are included. A `null` value includes no bodies.

### Returns

 long

Total number of nodes in matching bodies.

### Examples

```python
# Build the entity name list.
body_names = List[str]()
entity_name = "FEBody_01"
body_names.Add(entity_name)

# Count nodes in the selected body.
node_count = output_reader.GetBodiesNodeCount(body_names)
```

### Remarks

The method checks body names against the bodies available with `OutputReader` and adds the node count from each matching body.
