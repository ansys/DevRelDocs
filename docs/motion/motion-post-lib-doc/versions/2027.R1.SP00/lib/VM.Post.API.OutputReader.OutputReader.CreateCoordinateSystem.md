# Method CreateCoordinateSystem
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.CreateCoordinateSystem.md" download="VM.Post.API.OutputReader.OutputReader.CreateCoordinateSystem.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_CreateCoordinateSystem_System_String_System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_CreateCoordinateSystem_System_String_System_String_"></a> CreateCoordinateSystem\(string, string\)

Creates a coordinate-system marker in the Dynamics analysis result.

For a complete operations, see [Result File Reader API Example - Create a Coordinate System](../document/result-file-reader/example/example_coordinate_system_for_result_file_reader_api.md#create-a-coordinate-system).

```csharp
public GeneralMarker CreateCoordinateSystem(string newName, string parentFullName = "Ground")
```

### Parameters

`newName` string

Full name for the new marker.

`parentFullName` string

Full name of the parent entity. If omitted, `GroundName` is used.

### Returns

 [GeneralMarker](VM.Models.Post.GeneralMarker.md)

Newly created [`GeneralMarker`](VM.Models.Post.GeneralMarker.md), or `null` when the Dynamics analysis result is unavailable.

### Examples

```python
# Create a coordinate-system marker in the Dynamics result.
# The name of the new coordinate system.
coordinate_system_name = "ExampleCSYS"
# The coordinate system created in the Dynamics analysis result.
coordinate_system = output_reader.CreateCoordinateSystem(coordinate_system_name)
```

### Remarks

The new marker is added with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md) to `Dynamics`.

<Danger>
A Dynamics analysis result must be available. Otherwise, this method returns `null`.
</Danger>

<Note>
When <code class="paramref">parentFullName</code> is omitted, `NameService.GroundName` is used as the parent.
</Note>
