# Property TransformationType
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_TransformationType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_TransformationType"></a> TransformationType

Gets or sets [`TransformationType`](VM.Models.Post.TransformationType.md) that determines the camera-follow direction.

```csharp
TransformationType TransformationType { get; set; }
```

### Property Value

 [TransformationType](VM.Models.Post.TransformationType.md)

### Remarks

`TransformationType` controls whether the camera follows the target's translational or rotational direction.
The selected mode determines whether camera-follow updates use target translation, target rotation, or both.

> [!IMPORTANT]
> `Unknown` is not a settable value. Assigning it throws `NotSupportedException`.
