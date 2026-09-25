# Method RemoveCoordinateSystem
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
coordinate_system_name = "ExampleCSYS"
output_reader.RemoveCoordinateSystem(coordinate_system_name)
```

### Remarks

The marker is removed from `Dynamics` when it exists with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md). Missing names are ignored.

The built-in Inertia marker is preserved and cannot be removed.
