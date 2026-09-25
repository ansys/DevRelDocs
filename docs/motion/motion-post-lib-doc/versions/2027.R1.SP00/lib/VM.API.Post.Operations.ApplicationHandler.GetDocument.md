# Method GetDocument
<a id="VM_API_Post_Operations_ApplicationHandler_GetDocument_System_String_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_GetDocument_System_String_"></a> GetDocument\(string\)

Retrieves an imported document by its file path.

```csharp
public IOperationDocument GetDocument(string filepath)
```

### Parameters

`filepath` string

The path supplied when the `.dfr` result file was imported.

### Returns

 [IOperationDocument](VM.ViewModels.Post.Interfaces.IOperationDocument.md)

The matching [`IOperationDocument`](VM.ViewModels.Post.Interfaces.IOperationDocument.md), or <code>null</code> when the path is not imported.

### Examples

```python
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
```

### Remarks

The lookup uses the path supplied to [AddDocument\(IList<string\>\)](VM.API.Post.Operations.ApplicationHandler.AddDocument.md). A `.dfhpc` path is converted to a `.dfr` path before the lookup.

### Exceptions

 FileLoadException

Thrown when a `.dfhpc` path is supplied and conversion to `.dfr` fails.
