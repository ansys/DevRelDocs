# Method CreateCoordinateSystem
<a id="VM_Post_API_OutputReader_OutputReader_CreateCoordinateSystem_System_String_System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_CreateCoordinateSystem_System_String_System_String_"></a> CreateCoordinateSystem\(string, string\)

Creates a coordinate-system marker in the Dynamics analysis result.

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
coordinate_system_name = "ExampleCSYS"
coordinate_system = output_reader.CreateCoordinateSystem(coordinate_system_name)
```

### Remarks

The new marker is added with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md) to `Dynamics`.

> [!IMPORTANT]
> A Dynamics analysis result must be available. Otherwise, this method returns `null`.

> [!NOTE]
> When <code class="paramref">parentFullName</code> is omitted, `NameService.GroundName` is used as the parent.
