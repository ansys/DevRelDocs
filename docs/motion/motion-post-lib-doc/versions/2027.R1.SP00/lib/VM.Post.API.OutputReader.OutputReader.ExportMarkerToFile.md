# Method ExportMarkerToFile
<a id="VM_Post_API_OutputReader_OutputReader_ExportMarkerToFile_System_String_System_Int32___VM_Models_Post_IResultMarker___"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_ExportMarkerToFile_System_String_System_Int32___VM_Models_Post_IResultMarker___"></a> ExportMarkerToFile\(string, int\[\], IResultMarker\[\]\)

Exports marker results to a file.

The created file is always a text table, and its column separator is chosen from the file extension of <code class="paramref">filePath</code>. It takes one of the following forms.

A `.csv` path is written as a comma-separated table.

```text
! Ansys Motion Postprocessor [Version]
! File Version
25,0
! Number of Step
251
! Number of Targets
1
! ^INITIALMARKER
! Components
! X,Y,Z,f[3],g[3],h[3]
0
0,0,0,1,0,0,0,1,0,0,0,1
0.0021
...
```

The first two header lines report the product title and the `! File Version` label. They are followed by the version-number line, then `! Number of Step` with the exported state count, and then `! Number of Targets` with the exported marker count.

For each marker, `! {FullName}` names the exported data, and `! Components` precedes the column-name row `! X,Y,Z,f[3],g[3],h[3]`. `X`, `Y`, and `Z` are the marker's position, and `f`, `g`, and `h` are its three orientation axes, each written as 3 values.

After the header, the file repeats one block per exported state. Each state block begins with a single line that holds the state's time value, and that time line is followed by one value line per marker, listing the 12 values named after `! Components`, in the same order, for that marker at that state.

A `.txt` path, or a path with no extension, is written as a tab-separated table.

```text
! Ansys Motion Postprocessor [Version]
! File Version
25	0
! Number of Step
251
! Number of Targets
1
! ^INITIALMARKER
! Components
! X	Y	Z	f[3]	g[3]	h[3]
0
0	0	0	1	0	0	0	1	0	0	0	1
0.0021
...
```

The header block and per-state result rows are identical to the `.csv` form, and only the separator differs, using a tab character between columns. A path with no extension is saved without adding `.txt` to the file name.

```csharp
public void ExportMarkerToFile(string filePath, int[] stateids, IResultMarker[] markers)
```

### Parameters

`filePath` string

Specifies the file path to export. A `.csv` extension makes the table comma-separated. A `.txt` extension or no extension makes it a tab-separated text table. A path without an extension is saved without adding `.txt` to the file name.

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
markers = []
marker_entities = output_reader.GetEntities(EntityType.Marker)
for marker_entity in marker_entities:
    markers.append(IResultMarker(marker_entity))
    break

# Export the marker values to a file.
output_reader.ExportMarkerToFile(output_path, state_ids, markers)
```

### Remarks

<Danger>
The supplied markers must be [`IResultMarker`](VM.Models.Post.IResultMarker.md) objects. A [`GeneralMarker`](VM.Models.Post.GeneralMarker.md) created by [CreateCoordinateSystem\(string, string\)](VM.Post.API.OutputReader.OutputReader.CreateCoordinateSystem.md) is not compatible with this parameter.
</Danger>
