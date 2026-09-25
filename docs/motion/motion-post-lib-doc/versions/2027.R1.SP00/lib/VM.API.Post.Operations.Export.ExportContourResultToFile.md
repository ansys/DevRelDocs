# Method ExportContourResultToFile
<a id="VM_API_Post_Operations_Export_ExportContourResultToFile_System_String_System_String_System_Collections_Generic_IList_System_String__System_Boolean_VM_Models_ContourMappingType_System_String_VM_Models_AnalysisResultType_VM_Models_FileFormatType_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_Export_ExportContourResultToFile_System_String_System_String_System_Collections_Generic_IList_System_String__System_Boolean_VM_Models_ContourMappingType_System_String_VM_Models_AnalysisResultType_VM_Models_FileFormatType_"></a> ExportContourResultToFile\(string, string, IList<string\>, bool, ContourMappingType, string, AnalysisResultType, FileFormatType\)

Exports contour results for selected entities from an active [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md) to a file.

```csharp
public static void ExportContourResultToFile(string documentFilePath, string resultFilePath, IList<string> targetEntities, bool fullFrame, ContourMappingType contourMappingType, string combinedPath, AnalysisResultType analysisResultType = AnalysisResultType.Dynamics, FileFormatType formatType = FileFormatType.TXT)
```

### Parameters

`documentFilePath` string

The path of the result document displayed by `IOperationsAnimation`.

`resultFilePath` string

The path of the file to create for the exported contour results.

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

The file format used for the exported results. The default is `TXT`.

### Examples

```python
# Get the document and dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)

# Create the animation view.
page_name = "Page"
page = application_handler.GetPage(page_name)
animation_view_name = "ResultAnimation"
animation_view = page.CreateAnimation(analysis_result, animation_view_name)

# Select contour targets and result fields.
body_name = "FEBody_01"
febody = animation_view.GetViewModelByName(body_name)
target_names = List[str]()
target_names.Add(febody.FullName)
is_full_frame = True
contour_mapping_type = ContourMappingType.FENode
# Prepare the output file path.
# PATH : path to the folder where exported files are written
# CONTOUR_OUTPUT_FILENAME : output filename for the exported contour result
output_path = os.path.join(PATH, CONTOUR_OUTPUT_FILENAME)

# Select the displacement characteristic and X component path.
characteristic_component_path = "Displacement/X"
Export.ExportContourResultToFile(RESULT_FILE_PATH, output_path, target_names, is_full_frame, contour_mapping_type, characteristic_component_path)
```

### Remarks

`IOperationsAnimation` supplies the result document and frame state used for the export. That result document creates or overwrites <code class="paramref">resultFilePath</code>.

> [!IMPORTANT]
> Activate `IOperationsAnimation` for <code class="paramref">documentFilePath</code> and load its frames before calling this method.

### Exceptions

 Exception

Thrown when the active view is not an animation for <code class="paramref">documentFilePath</code> or its frames are not available.
