# Property Frame
<a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_Frame"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_Frame"></a> Frame

Gets or sets the positive number of frames generated when an eigenvalue frequency is loaded.

```csharp
uint Frame { get; set; }
```

### Property Value

 uint

### Remarks

Changing this value reloads the active frequency's mode-shape animation with the new frame count. If no frequency is active, the stored frame count changes without loading a mode shape.

> [!IMPORTANT]
> Setting `0` is invalid and throws an exception.
