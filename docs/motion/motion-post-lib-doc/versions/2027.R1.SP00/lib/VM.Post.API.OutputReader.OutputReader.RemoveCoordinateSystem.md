# Method RemoveCoordinateSystem
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.RemoveCoordinateSystem.md" download="VM.Post.API.OutputReader.OutputReader.RemoveCoordinateSystem.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_RemoveCoordinateSystem_System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_RemoveCoordinateSystem_System_String_"></a> RemoveCoordinateSystem\(string\)

Removes a user-created coordinate-system marker identified by `name`.

```csharp
public void RemoveCoordinateSystem(string name)
```

### Parameters

`name` string

Full name of the coordinate-system marker to remove.

### Examples

```python
# Remove a user-created coordinate-system marker.
# The name of the new coordinate system.
coordinate_system_name = "ExampleCSYS"
output_reader.RemoveCoordinateSystem(coordinate_system_name)
```

### Remarks

The marker is removed from `Dynamics` when it exists with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md). Missing names are ignored.

The built-in Inertia marker is preserved and cannot be removed.
