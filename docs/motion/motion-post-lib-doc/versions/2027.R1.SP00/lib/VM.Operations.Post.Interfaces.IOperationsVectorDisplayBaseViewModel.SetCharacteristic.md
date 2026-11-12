# Method SetCharacteristic
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.SetCharacteristic.md" download="VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.SetCharacteristic.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayBaseViewModel_SetCharacteristic_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayBaseViewModel_SetCharacteristic_System_String_"></a> SetCharacteristic\(string\)

Changes the result characteristic shown by the vector display.

```csharp
void SetCharacteristic(string characteristic)
```

### Parameters

`characteristic` string

Full name of a characteristic available for the vector target.

### Examples

```python
# Get the dynamic analysis result from the imported document.
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The dynamic analysis result of the document.
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Create an animation to show the vector display.
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The name of the new animation view.
animation_view_name = "ResultAnimation"
page.CreateAnimation(dynamic_analysis, animation_view_name)

# Create a vector display on a target with its first characteristic.
# The name of the vector displayable entity.
entity_name = "TJ_01"
# The name of the characteristic.
characteristic_name = "Base Force"
# The vector display created for the entity and characteristic.
vector_display = dynamic_analysis.CreateVectorDisplay(entity_name, characteristic_name)

# Change the vector display to another characteristic.
# The name of the characteristic to change to.
new_characteristic_name = "Base Torque"
vector_display.SetCharacteristic(new_characteristic_name)
```

### Remarks

If `characteristic` identifies a valid candidate, the vector display is replaced when the candidate requires a different display type. An invalid name leaves the current characteristic unchanged.
