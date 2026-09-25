# Property DocumentFilePath
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
