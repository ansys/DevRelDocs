# Method AddDocument
<a id="VM_API_Post_Operations_ApplicationHandler_AddDocument_System_Collections_Generic_IList_System_String__"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_AddDocument_System_Collections_Generic_IList_System_String__"></a> AddDocument\(IList<string\>\)

Imports result documents from the specified file paths.

```csharp
public void AddDocument(IList<string> filepaths)
```

### Parameters

`filepaths` IList<string\>

The paths of the `.dfr` result files to import.

### Examples

```python
# Add the result document.
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path
filepaths.Add(RESULT_FILE_PATH)
application_handler.AddDocument(filepaths)
```

<a href="/lib/VM.API.Post.Operations.ApplicationHandler.AddDocument.md" download="VM.API.Post.Operations.ApplicationHandler.AddDocument.md">Download this page as Markdown</a>
