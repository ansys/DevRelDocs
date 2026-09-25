# Method ExportMarkerToFile
<a id="VM_Post_API_OutputReader_OutputReader_ExportMarkerToFile_System_String_System_Int32___VM_Models_Post_IResultMarker___"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_ExportMarkerToFile_System_String_System_Int32___VM_Models_Post_IResultMarker___"></a> ExportMarkerToFile\(string, int\[\], IResultMarker\[\]\)

Exports marker results to a file.

```csharp
public void ExportMarkerToFile(string filePath, int[] stateids, IResultMarker[] markers)
```

### Parameters

`filePath` string

Specifies the file path to export.

`stateids` int\[\]

Specifies the list of state IDs to time.

`markers` [IResultMarker](VM.Models.Post.IResultMarker.md)\[\]

Specifies the [`IResultMarker`](VM.Models.Post.IResultMarker.md) objects to export.

### Examples

```python
# Build the output file path.
# PATH : path to the folder where exported files are written
# RFR_MARKER_OUTPUT_FILENAME : output filename for marker values
output_path = os.path.join(PATH, RFR_MARKER_OUTPUT_FILENAME)

# Get the state list.
state_ids = output_reader.GetStateIDArray()

# Collect the marker entities to export.
markers = List[IResultMarker]()
marker_entities = output_reader.GetEntities(EntityType.Marker)
for marker_entity in marker_entities:
    markers.Add(IResultMarker(marker_entity))
    break

# Export the marker values to a file.
output_reader.ExportMarkerToFile(output_path, state_ids, markers)
```

### Remarks

> [!IMPORTANT]
> The supplied markers must be [`IResultMarker`](VM.Models.Post.IResultMarker.md) objects. A [`GeneralMarker`](VM.Models.Post.GeneralMarker.md) created by [CreateCoordinateSystem\(string, string\)](VM.Post.API.OutputReader.OutputReader.CreateCoordinateSystem.md) is not compatible with this parameter.
