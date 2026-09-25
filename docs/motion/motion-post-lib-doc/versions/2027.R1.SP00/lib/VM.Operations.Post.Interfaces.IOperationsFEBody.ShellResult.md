# Property ShellResult
<a id="VM_Operations_Post_Interfaces_IOperationsFEBody_ShellResult"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_ShellResult"></a> ShellResult

Gets or sets the shell direction selected from [`ShellDirectionType`](VM.Models.Post.ShellDirectionType.md) for fatigue result extraction.

```csharp
ShellDirectionType ShellResult { get; set; }
```

### Property Value

 [ShellDirectionType](VM.Models.Post.ShellDirectionType.md)

### Remarks

The selected shell direction determines which shell layer supplies stress or strain values for fatigue evaluation.
