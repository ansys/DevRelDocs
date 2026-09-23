# Method GetMarkerPosition
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
marker_names = List[str]()
marker_name = "Crank/CM"
marker_names.Add(marker_name)
marker_positions = output_reader.GetMarkerPosition(marker_names)
```

### Remarks

Each input name is checked with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md). Names that do not identify an entity are omitted from the dictionary.

> [!NOTE]
> Names that do not identify an entity are omitted from the returned dictionary.
