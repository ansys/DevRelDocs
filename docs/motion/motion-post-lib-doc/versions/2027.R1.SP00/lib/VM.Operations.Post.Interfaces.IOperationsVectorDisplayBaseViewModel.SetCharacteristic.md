# Method SetCharacteristic
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
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Create an animation to show the vector display.
page_name = "Page"
page = application_handler.GetPage(page_name)
animation_view_name = "ResultAnimation"
animation_view = page.CreateAnimation(dynamic_analysis, animation_view_name)

# Create a vector display on a target with its first characteristic.
entity_name = "TJ_01"
characteristic_name = "Displacement"
vector_display = dynamic_analysis.CreateVectorDisplay(entity_name, characteristic_name)

# Change the vector display to another characteristic.
new_characteristic = "Base Torque"
vector_display.SetCharacteristic(new_characteristic)
```

### Remarks

If `characteristic` identifies a valid candidate, the vector display is replaced when the candidate requires a different display type. An invalid name leaves the current characteristic unchanged.
