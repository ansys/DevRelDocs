# Method SetFatiguePath
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
# FATIGUE_RESULT_NAME : name of the fatigue result file in the Fatigue folder, without the .dffrf extension
# RESULT_FILE_PATH : .dfr result file path
DurabilityAnalysis.SetFatiguePath(RESULT_FILE_PATH, FATIGUE_RESULT_NAME)
```

### Remarks

The selected name is used when later fatigue-result data is read or exported for the document. Calling this method does not run a fatigue analysis.

> [!IMPORTANT]
> The document identified by <code class="paramref">documentFilePath</code> must already be available before calling this method.

### Exceptions

 Exception

Thrown when no imported document matches <code class="paramref">documentFilePath</code>.
