# Method GetMarkerPosition
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetMarkerPosition.md" download="VM.Post.API.OutputReader.OutputReader.GetMarkerPosition.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_GetMarkerPosition_System_Collections_Generic_IList_System_String__"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetMarkerPosition_System_Collections_Generic_IList_System_String__"></a> GetMarkerPosition\(IList<string\>\)

Gets position values for markers identified by `names`.

```csharp
public IDictionary<string, IList<double[]>> GetMarkerPosition(IList<string> names)
```

### Parameters

`names` IList<string\>

Names used to find markers in the opened result file.

### Returns

 IDictionary<string, IList<double\[\]\>\>

Dictionary keyed by matched marker `FullName`, with a list of position arrays for each marker.

### Examples

```python
# Read positions for selected markers.
# The paths of the markers.
marker_names = List[str]()
# The path of the marker.
marker_name = "Crank/CM"
marker_names.Add(marker_name)
# The positions of the markers, keyed by marker name.
marker_positions = output_reader.GetMarkerPosition(marker_names)
```

### Remarks

Each input name is checked with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md). Names that do not identify an entity are omitted from the dictionary.

<Note>
Names that do not identify an entity are omitted from the returned dictionary.
</Note>
