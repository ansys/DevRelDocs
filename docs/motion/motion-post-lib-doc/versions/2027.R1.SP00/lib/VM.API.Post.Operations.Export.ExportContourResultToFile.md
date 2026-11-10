# Method ExportContourResultToFile
<div align="right"><a href="/lib/VM.API.Post.Operations.Export.ExportContourResultToFile.md" download="VM.API.Post.Operations.Export.ExportContourResultToFile.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_API_Post_Operations_Export_ExportContourResultToFile_System_String_System_String_System_Collections_Generic_IList_System_String__System_Boolean_VM_Models_ContourMappingType_System_String_VM_Models_AnalysisResultType_VM_Models_FileFormatType_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_Export_ExportContourResultToFile_System_String_System_String_System_Collections_Generic_IList_System_String__System_Boolean_VM_Models_ContourMappingType_System_String_VM_Models_AnalysisResultType_VM_Models_FileFormatType_"></a> ExportContourResultToFile\(string, string, IList<string\>, bool, ContourMappingType, string, AnalysisResultType, FileFormatType\)

Exports contour results for selected entities from an active [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md) to a file.

For a complete operations, see [Operation API Example - Export Contour Result To File](../document/operation-api/example/example_export_for_operation_api.md#export-contour-result-to-file).

With `TXT`, the created file is a text table whose column separator is chosen from the file extension of <code class="paramref">resultFilePath</code>. It takes one of the following forms.

A `.csv` path is written as a comma-separated table.

```text
! Ansys Motion Postprocessor [Version]
! File Version
27,1
! Number of Step
251
! Number of Targets
1
! FEBody_01/Top Stress/X
! Node ID
1,2,3,4,5,...
0
-9.82423831175083E-09,-5.87715014432888E-08,9.87900534710207E-08,...
0.0021
-9.82423831175083E-09,-5.87715014432888E-08,9.87900534710207E-08,...
...
```

The first two header lines report the product title and the `! File Version` label, and the row under that label holds the exported assembly's major and minor version numbers separated by the same column separator. `! Number of Step` is followed by the exported frame count, and `! Number of Targets` is followed by the exported entity count.

For each target, `! {target}/{characteristic}/{component}` names the exported data, and the label line and rows that follow it depend on <code class="paramref">contourMappingType</code>.

- `FENode` writes `! Node ID` followed by one row listing every node ID of the target.
- `FEElement` writes `! Element ID` followed by one row listing every element ID of the target.
- `FEElementNode` writes `! Element Node ID` followed by one row listing every element ID of the target, then `! Nodes per Element` followed by one row listing the node count of each of those elements in the same order.
- `FEMaterial` has no dedicated identifier-row branch in this method.
- `BeamGroup`, `Contact`, `ChainedSystem`, `Usersubroutine` writes `! Body ID` followed by one comment line holding the target's index, with no separate identifier row.

Each following group of rows repeats for one exported frame. The first row is that frame's time, followed by one row per target named in <code class="paramref">targetEntities</code>, and each of those rows holds one contour value per identifier in the same column order.

A `.txt` extension is written as a tab-separated table.

```text
! Ansys Motion Postprocessor [Version]
! File Version
27	1
! Number of Step
251
! Number of Targets
1
! FEBody_01/Top Stress/X
! Node ID
1	2	3	4	5	...
0
-9.82423831175083E-09	-5.87715014432888E-08	9.87900534710207E-08	...
0.0021
-9.82423831175083E-09	-5.87715014432888E-08	9.87900534710207E-08	...
...
```

With `BINARY`, the file has none of the header, identifier, or time rows. It stores only the contour values as consecutive raw 8-byte doubles, written frame by frame in the same identifier order used by the text table.

```csharp
public static void ExportContourResultToFile(string documentFilePath, string resultFilePath, IList<string> targetEntities, bool fullFrame, ContourMappingType contourMappingType, string combinedPath, AnalysisResultType analysisResultType = AnalysisResultType.Dynamics, FileFormatType formatType = FileFormatType.TXT)
```

### Parameters

`documentFilePath` string

The path of the result document displayed by `IOperationsAnimation`.

`resultFilePath` string

The path of the file to create for the exported contour results. A `.csv` extension makes the text table comma-separated. A `.txt` extension makes it tab-separated.

`targetEntities` IList<string\>

The full names of the entities whose contour results are exported.

`fullFrame` bool

`true` exports every available animation frame. `false` exports only the current frame.

`contourMappingType` [ContourMappingType](VM.Models.ContourMappingType.md)

The mapping applied between the selected entities and the contour result.

`combinedPath` string

The characteristic and component path used to select the contour data, such as `Displacement/X`.

`analysisResultType` [AnalysisResultType](VM.Models.AnalysisResultType.md)

The analysis result category from which the contour data is exported. The default is `Dynamics`.

`formatType` [FileFormatType](VM.Models.FileFormatType.md)

The file format used for the exported results. `TXT` writes the text table, and `BINARY` writes raw doubles. The default is `TXT`.

### Examples

```python
# Get the document and dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The analysis result of the document.
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)

# Create the animation view.
page = application_handler.GetActivePage()
# The name of the new animation view.
animation_view_name = "ResultAnimation"
# The animation view created on the page.
animation_view = page.CreateAnimation(analysis_result, animation_view_name)
animation_view.Activate()
application_handler.LoadingAnimation()

# Select contour targets and result fields.
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The finite-element body with the specified name.
febody = animation_view.GetViewModelByName(entity_name)
# The names of the targets to export.
target_names = List[str]()
target_names.Add(febody.FullName)
# True to export all frames, or False to export only the current frame.
is_full_frame = True
# The type of the contour mapping.
contour_mapping_type = ContourMappingType.FENode
# Prepare the output file path.
# PATH : path to the folder where exported files are written (e.g., D:\PostprocessorAPI\Output)
# CONTOUR_OUTPUT_FILENAME : output filename for the exported contour result (e.g., Displacement.txt)
# The path of the exported contour result file.
output_path = Path.Combine(PATH, CONTOUR_OUTPUT_FILENAME)

# Select the displacement characteristic and X component path.
# The characteristic/component path of the result, in "Characteristic/Component" format.
characteristic_component_path = "Displacement/X"
Export.ExportContourResultToFile(RESULT_FILE_PATH, output_path, target_names, is_full_frame, contour_mapping_type, characteristic_component_path)
```

### Remarks

`IOperationsAnimation` supplies the result document and frame state used for the export. That result document creates or overwrites <code class="paramref">resultFilePath</code>.

<Note>
`FEElementNode` and `FEMaterial` are supported only for an `FEBody` that uses a linear material.
</Note>

<Danger>
Activate `IOperationsAnimation` for <code class="paramref">documentFilePath</code> and load its frames before calling this method.
</Danger>

### Exceptions

 Exception

Thrown when the active view is not an animation for <code class="paramref">documentFilePath</code> or its frames are not available.
