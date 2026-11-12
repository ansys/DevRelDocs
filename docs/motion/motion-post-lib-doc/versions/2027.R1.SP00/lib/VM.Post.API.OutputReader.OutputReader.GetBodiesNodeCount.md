# Method GetBodiesNodeCount
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetBodiesNodeCount.md" download="VM.Post.API.OutputReader.OutputReader.GetBodiesNodeCount.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# The full names of the entities whose surfaces generate the sound pressure.
body_names = List[str]()
# The name of the target finite-element body.
entity_name = "FEBody_01"
body_names.Add(entity_name)

# Count nodes in the selected body.
node_count = output_reader.GetBodiesNodeCount(body_names)
```

### Remarks

The method checks body names against the bodies available with `OutputReader` and adds the node count from each matching body.
