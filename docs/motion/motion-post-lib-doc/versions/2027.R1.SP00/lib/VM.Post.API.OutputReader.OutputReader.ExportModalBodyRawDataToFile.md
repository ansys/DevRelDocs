# Method ExportModalBodyRawDataToFile
<a id="VM_Post_API_OutputReader_OutputReader_ExportModalBodyRawDataToFile_System_String_System_String_System_Boolean_System_Boolean_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_ExportModalBodyRawDataToFile_System_String_System_String_System_Boolean_System_Boolean_"></a> ExportModalBodyRawDataToFile\(string, string, bool, bool\)

Exports raw data about the FE modal body to a file.

```csharp
public void ExportModalBodyRawDataToFile(string filePath, string target, bool includeGeometry, bool includeModeShape)
```

### Parameters

`filePath` string

Specifies the file path to export.

`target` string

Specifies the name of the entity.

`includeGeometry` bool

Specifies whether to include geometry data.

`includeModeShape` bool

Specifies whether to include mode shape data.

### Examples

```python
# Build the output file path.
# PATH : path to the folder where exported files are written
# RFR_MODAL_BODY_RAW_DATA_OUTPUT_FILENAME : output filename for modal body raw data
output_path = os.path.join(PATH, RFR_MODAL_BODY_RAW_DATA_OUTPUT_FILENAME)

# Export raw data for the FE modal body, including geometry and mode shape data.
entity_name = "FEBody_01"
include_geometry = True
include_mode_shape = True
output_reader.ExportModalBodyRawDataToFile(output_path, entity_name, include_geometry, include_mode_shape)
```

### Remarks

This method exports raw data about the FE modal body to a specified file path, including options to include geometry and mode shape data.
