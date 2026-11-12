# Method GetUnitsFromModeShapeFile
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetUnitsFromModeShapeFile.md" download="VM.Post.API.OutputReader.OutputReader.GetUnitsFromModeShapeFile.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_GetUnitsFromModeShapeFile_System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetUnitsFromModeShapeFile_System_String_"></a> GetUnitsFromModeShapeFile\(string\)

Gets unit information stored in the mode-shape file for a modal body.

```csharp
public Dictionary<string, KeyValuePair<string, double>> GetUnitsFromModeShapeFile(string target)
```

### Parameters

`target` string

Full name of the modal body whose mode-shape file is read.

### Returns

 Dictionary<string, KeyValuePair<string, double\>\>

Dictionary keyed by result dimension. Each value contains the stored unit name and scale factor.

### Examples

```python
# Read units stored in a modal body's mode-shape file.
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The unit information stored in the mode-shape file.
mode_shape_units = output_reader.GetUnitsFromModeShapeFile(entity_name)
```

### Remarks

The method reads unit information from the modal body's mode-shape file with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md).

### Exceptions

 ArgumentException

Thrown when `target` does not identify a modal body with an available mode-shape file.
