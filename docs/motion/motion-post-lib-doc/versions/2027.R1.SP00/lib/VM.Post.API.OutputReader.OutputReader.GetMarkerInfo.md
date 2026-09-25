# Method GetMarkerInfo
<a id="VM_Post_API_OutputReader_OutputReader_GetMarkerInfo_System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetMarkerInfo_System_String_"></a> GetMarkerInfo\(string\)

Gets marker values for the marker identified by `name` across the available result states.

```csharp
public IList<double[]> GetMarkerInfo(string name)
```

### Parameters

`name` string

Full name used to find a marker in the opened result file.

### Returns

 IList<double\[\]\>

List of value arrays for each result state, or `null` when `name` does not identify a supported marker.

### Examples

```python
# Read marker values across the result states.
marker_name = "Crank/CM"
marker_info = output_reader.GetMarkerInfo(marker_name)
```

### Remarks

Each state array contains position, orientation, velocity, angular velocity, acceleration, and angular acceleration values. [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md) uses the Inertia marker when values are read from a general marker.

> [!NOTE]
> If `name` does not identify a [`GeneralMarker`](VM.Models.Post.GeneralMarker.md) or `ResultMarker`, this method returns `null`.
