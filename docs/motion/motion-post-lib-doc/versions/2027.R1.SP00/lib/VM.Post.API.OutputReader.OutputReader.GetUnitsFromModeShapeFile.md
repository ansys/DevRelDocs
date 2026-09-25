# Method GetUnitsFromModeShapeFile
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
entity_name = "FEBody_01"
mode_shape_units = output_reader.GetUnitsFromModeShapeFile(entity_name)
```

### Remarks

The method reads unit information from the modal body's mode-shape file with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md).

### Exceptions

 ArgumentException

Thrown when `target` does not identify a modal body with an available mode-shape file.
