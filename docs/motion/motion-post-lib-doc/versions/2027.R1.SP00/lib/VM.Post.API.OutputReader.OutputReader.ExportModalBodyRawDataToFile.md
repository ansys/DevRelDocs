# Method ExportModalBodyRawDataToFile
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.ExportModalBodyRawDataToFile.md" download="VM.Post.API.OutputReader.OutputReader.ExportModalBodyRawDataToFile.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# PATH : path to the folder where exported files are written (e.g., D:\PostprocessorAPI\Output)
# RFR_MODAL_BODY_RAW_DATA_OUTPUT_FILENAME : output filename for modal body raw data (e.g., modal_body_raw_data.bin)
# The path of the exported modal body raw data file.
output_path = os.path.join(PATH, RFR_MODAL_BODY_RAW_DATA_OUTPUT_FILENAME)

# Export raw data for the FE modal body, including geometry and mode shape data.
# The name of the target finite-element body.
entity_name = "FEBody_01"
# True to include the geometry in the exported file.
include_geometry = True
# True to include the mode shape in the exported file.
include_mode_shape = True
output_reader.ExportModalBodyRawDataToFile(output_path, entity_name, include_geometry, include_mode_shape)
```

### Remarks

This method exports raw data about the FE modal body to a specified file path, including options to include geometry and mode shape data.
