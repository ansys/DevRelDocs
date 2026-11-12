# Method GetMarkerInfo
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetMarkerInfo.md" download="VM.Post.API.OutputReader.OutputReader.GetMarkerInfo.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# The path of the marker.
marker_name = "Crank/CM"
# The marker values for each result state.
marker_info = output_reader.GetMarkerInfo(marker_name)
```

### Remarks

Each state array contains position, orientation, velocity, angular velocity, acceleration, and angular acceleration values. [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md) uses the Inertia marker when values are read from a general marker.

<Note>
If `name` does not identify a [`GeneralMarker`](VM.Models.Post.GeneralMarker.md) or `ResultMarker`, this method returns `null`.
</Note>
