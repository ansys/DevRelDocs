# Method AddDocument
<div align="right"><a href="/lib/VM.API.Post.Operations.ApplicationHandler.AddDocument.md" download="VM.API.Post.Operations.ApplicationHandler.AddDocument.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)
```
