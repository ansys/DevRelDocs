# Property IsShowMessageBox
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
