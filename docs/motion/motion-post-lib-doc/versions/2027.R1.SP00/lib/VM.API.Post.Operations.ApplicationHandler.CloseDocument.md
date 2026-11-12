# Method CloseDocument
<div align="right"><a href="/lib/VM.API.Post.Operations.ApplicationHandler.CloseDocument.md" download="VM.API.Post.Operations.ApplicationHandler.CloseDocument.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_API_Post_Operations_ApplicationHandler_CloseDocument_System_String_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_CloseDocument_System_String_"></a> CloseDocument\(string\)

Closes an open document by its file path.

```csharp
public void CloseDocument(string filepath)
```

### Parameters

`filepath` string

The file path of the document to be closed.

### Examples

```python
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
application_handler.CloseDocument(RESULT_FILE_PATH)
```

### Remarks

When `filepath` identifies imported [`IOperationDocument`](VM.ViewModels.Post.Interfaces.IOperationDocument.md), that document is removed.
