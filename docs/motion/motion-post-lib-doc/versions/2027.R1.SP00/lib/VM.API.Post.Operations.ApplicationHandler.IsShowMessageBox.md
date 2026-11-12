# Property IsShowMessageBox
<div align="right"><a href="/lib/VM.API.Post.Operations.ApplicationHandler.IsShowMessageBox.md" download="VM.API.Post.Operations.ApplicationHandler.IsShowMessageBox.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_API_Post_Operations_ApplicationHandler_IsShowMessageBox"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_IsShowMessageBox"></a> IsShowMessageBox

Gets or sets whether Operation API errors are displayed in a message box. `false` writes error messages to a `.log` file instead.

```csharp
public bool IsShowMessageBox { get; set; }
```

### Property Value

 bool

### Remarks

The `.log` file is created when the Postprocessor starts, in the current user's `AppData\Local\Temp\.ansys motion\postprocessor <version>` folder, with a file name based on the start time.

The default value is `false` after [`ApplicationHandler`](VM.API.Post.Operations.ApplicationHandler.md) is created.
