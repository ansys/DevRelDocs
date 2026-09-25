# Property IsFollowingZAxis
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsFollowingZAxis"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsFollowingZAxis"></a> IsFollowingZAxis

Gets or sets whether camera tracking follows target translation along the Z axis when `TransformationType` is `Translation`.

```csharp
bool IsFollowingZAxis { get; set; }
```

### Property Value

 bool

### Remarks

This flag is used when [`TransformationType`](VM.Operations.Post.Interfaces.IOperationsAnimation.TransformationType.md) is `Translation`. It selects whether target translation along the Z axis changes the following camera.
When this value is `false`, target translation along the Z axis is not applied to camera tracking.
