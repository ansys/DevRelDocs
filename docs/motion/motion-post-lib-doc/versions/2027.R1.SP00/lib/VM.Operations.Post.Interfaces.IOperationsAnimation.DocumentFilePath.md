# Property DocumentFilePath
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsAnimation.DocumentFilePath.md" download="VM.Operations.Post.Interfaces.IOperationsAnimation.DocumentFilePath.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_DocumentFilePath"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_DocumentFilePath"></a> DocumentFilePath

Gets the result file path associated with the animation, or an empty string when no result document is associated.

```csharp
string DocumentFilePath { get; }
```

### Property Value

 string

### Remarks

The path identifies the result file used to create [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md). The value is empty when the animation view has no result document.
The value is read-only and is determined by the result document associated with the animation view.
