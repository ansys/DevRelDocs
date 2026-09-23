# Method CloseDocument
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
# RESULT_FILE_PATH : .dfr result file path
application_handler.CloseDocument(RESULT_FILE_PATH)
```

### Remarks

When `filepath` identifies imported [`IOperationDocument`](VM.ViewModels.Post.Interfaces.IOperationDocument.md), that document is removed.
