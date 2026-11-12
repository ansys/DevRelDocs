# Method SetFatiguePath
<div align="right"><a href="/lib/VM.API.Post.Operations.DurabilityAnalysis.SetFatiguePath.md" download="VM.API.Post.Operations.DurabilityAnalysis.SetFatiguePath.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_API_Post_Operations_DurabilityAnalysis_SetFatiguePath_System_String_System_String_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_DurabilityAnalysis_SetFatiguePath_System_String_System_String_"></a> SetFatiguePath\(string, string\)

Selects the fatigue result name used for subsequent operations on an imported document.

```csharp
public static void SetFatiguePath(string documentFilePath, string fatigueFilePath)
```

### Parameters

`documentFilePath` string

The path of a result document previously imported through [AddDocument\(IList<string\>\)](VM.API.Post.Operations.ApplicationHandler.AddDocument.md).

`fatigueFilePath` string

The fatigue result name to assign to the document, such as `FEBody_01_Fatigue`.

### Examples

```python
# FATIGUE_RESULT_NAME : name of the fatigue result file in the Fatigue folder, without the .dffrf extension (e.g., FEBody_01_Fatigue)
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
DurabilityAnalysis.SetFatiguePath(RESULT_FILE_PATH, FATIGUE_RESULT_NAME)
```

### Remarks

The selected name is used when later fatigue-result data is read or exported for the document. Calling this method does not run a fatigue analysis.

<Danger>
The document identified by <code class="paramref">documentFilePath</code> must already be available before calling this method.
</Danger>

### Exceptions

 Exception

Thrown when no imported document matches <code class="paramref">documentFilePath</code>.
