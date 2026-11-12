# Method ExportContourResultToFile
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.ExportContourResultToFile.md" download="VM.Post.API.OutputReader.OutputReader.ExportContourResultToFile.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_ExportContourResultToFile_System_String_System_IO_FileMode_System_Collections_Generic_IList_System_Int32__System_String_VM_Models_ContourMappingType_System_String_VM_Models_AnalysisResultType_VM_Models_FileFormatType_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_ExportContourResultToFile_System_String_System_IO_FileMode_System_Collections_Generic_IList_System_Int32__System_String_VM_Models_ContourMappingType_System_String_VM_Models_AnalysisResultType_VM_Models_FileFormatType_"></a> ExportContourResultToFile\(string, FileMode, IList<int\>, string, ContourMappingType, string, AnalysisResultType, FileFormatType\)

Exports contour results to a file.

For a complete operations, see [Result File Reader API Example - Export Contour](../document/result-file-reader/example/example_contour_for_result_file_reader_api.md#export-contour).

This overload defaults <code class="paramref">formatType</code> to `BINARY`, unlike the Operation API export, which defaults to text. The exported text and binary formats are the same as the Operation API's contour export. For the file format, see [ExportContourResultToFile\(string, string, IList<string\>, bool, ContourMappingType, string, AnalysisResultType, FileFormatType\)](VM.API.Post.Operations.Export.ExportContourResultToFile.md).

```csharp
public void ExportContourResultToFile(string resultpath, FileMode mode, IList<int> stateids, string fullName, ContourMappingType type, string path, AnalysisResultType analysisResultType = AnalysisResultType.Dynamics, FileFormatType formatType = FileFormatType.BINARY)
```

### Parameters

`resultpath` string

Specifies the file path to export.

`mode` FileMode

Specifies how the operating system should open the output file.

`stateids` IList<int\>

Specifies the list of state IDs to time.

`fullName` string

Specifies the name of the entities.

`type` [ContourMappingType](VM.Models.ContourMappingType.md)

Specifies the contour mapping type used to select target data.

`path` string

This is a combination of characteristic and component.

`analysisResultType` [AnalysisResultType](VM.Models.AnalysisResultType.md)

Specifies the analysis result used to select contour data. Defaults to `Dynamics`.

`formatType` [FileFormatType](VM.Models.FileFormatType.md)

Specifies the output file format. `TXT` writes the text table and `BINARY` writes raw doubles. Defaults to `BINARY`.

### Examples

```python
# Build the output file path.
# PATH : path to the folder where exported files are written (e.g., D:\PostprocessorAPI\Output)
# RFR_CONTOUR_OUTPUT_FILENAME : output filename for contour data (e.g., ExportContourResultToFile.txt)
# The path of the exported contour result file.
output_path = os.path.join(PATH, RFR_CONTOUR_OUTPUT_FILENAME)

# Get the state list.
state_ids = output_reader.GetStateIDArray()

# Export contour data for one body.
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The characteristic/component path of the result.
characteristic_name = "Top Stress/X"
output_reader.ExportContourResultToFile(
    output_path,
    FileMode.Create,
    state_ids,
    entity_name,
    ContourMappingType.FENode,
    characteristic_name,
    AnalysisResultType.Dynamics,
    FileFormatType.TXT,
)
```

### Remarks

This method exports contour results to a specified file path.

<Note>
`FEElementNode` and `FEMaterial` are supported only for an `FEBody` that uses a linear material.
</Note>

<Note>
An invalid state ID, entity name, mapping type, result path, or output path can cause export to fail.
</Note>

## <a id="VM_Post_API_OutputReader_OutputReader_ExportContourResultToFile_System_String_System_IO_FileMode_System_Collections_Generic_IList_System_Int32__System_Collections_Generic_IList_System_String__VM_Models_ContourMappingType_System_String_VM_Models_AnalysisResultType_VM_Models_FileFormatType_"></a> ExportContourResultToFile\(string, FileMode, IList<int\>, IList<string\>, ContourMappingType, string, AnalysisResultType, FileFormatType\)

Exports contour results to a file.

This overload defaults <code class="paramref">formatType</code> to `BINARY`, unlike the Operation API export, which defaults to text. The exported text and binary formats are the same as the Operation API's contour export. For the file format, see [ExportContourResultToFile\(string, string, IList<string\>, bool, ContourMappingType, string, AnalysisResultType, FileFormatType\)](VM.API.Post.Operations.Export.ExportContourResultToFile.md).

```csharp
public void ExportContourResultToFile(string resultpath, FileMode mode, IList<int> stateids, IList<string> fullNames, ContourMappingType type, string path, AnalysisResultType analysisResultType = AnalysisResultType.Dynamics, FileFormatType formatType = FileFormatType.BINARY)
```

### Parameters

`resultpath` string

Specifies the file path to export.

`mode` FileMode

Specifies how the operating system should open the output file.

`stateids` IList<int\>

Specifies the list of state IDs to time.

`fullNames` IList<string\>

Specifies the names of the entities.

`type` [ContourMappingType](VM.Models.ContourMappingType.md)

Specifies the contour mapping type used to select target data.

`path` string

This is a combination of characteristic and component.

`analysisResultType` [AnalysisResultType](VM.Models.AnalysisResultType.md)

Specifies the analysis result used to select contour data. Defaults to `Dynamics`.

`formatType` [FileFormatType](VM.Models.FileFormatType.md)

Specifies the output file format. `TXT` writes the text table and `BINARY` writes raw doubles. Defaults to `BINARY`.

### Examples

```python
# Build the output file path.
# PATH : path to the folder where exported files are written (e.g., D:\PostprocessorAPI\Output)
# RFR_CONTOUR_OUTPUT_FILENAME : output filename for contour data (e.g., ExportContourResultToFile.txt)
# The path of the exported contour result file.
output_path = os.path.join(PATH, RFR_CONTOUR_OUTPUT_FILENAME)

# Get the state list.
state_ids = output_reader.GetStateIDArray()

# Build the entity name list.
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The full names of the entities whose surfaces generate the sound pressure.
body_names = List[str]()
body_names.Add(entity_name)

# Export contour data for multiple bodies.
# The characteristic/component path of the result.
characteristic_name = "Top Stress/X"
output_reader.ExportContourResultToFile(
    output_path,
    FileMode.Create,
    state_ids,
    body_names,
    ContourMappingType.FENode,
    characteristic_name,
    AnalysisResultType.Dynamics,
    FileFormatType.TXT,
)
```

### Remarks

This method exports contour results to a specified file path.

<Note>
`FEElementNode` and `FEMaterial` are supported only for an `FEBody` that uses a linear material.
</Note>

<Note>
An invalid state ID, entity name, mapping type, result path, or output path can cause export to fail.
</Note>
