# Method RemoveContour
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.RemoveContour.md" download="VM.Operations.Post.Interfaces.IOperationAnalysisResult.RemoveContour.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_RemoveContour_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_RemoveContour_System_String_"></a> RemoveContour\(string\)

Removes a contour by its [`FullName`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.FullName.md).

```csharp
void RemoveContour(string name)
```

### Parameters

`name` string

Full name of a contour previously created with [CreateContour\(IList<string\>, ContourMappingType, string, string, string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.CreateContour.md).

### Remarks

If `name` does not identify an existing contour, this method has no effect.
