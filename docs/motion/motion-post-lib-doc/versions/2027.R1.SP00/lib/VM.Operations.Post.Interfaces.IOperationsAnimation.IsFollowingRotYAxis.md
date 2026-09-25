# Property IsFollowingRotYAxis
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsFollowingRotYAxis"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsFollowingRotYAxis"></a> IsFollowingRotYAxis

Gets or sets whether camera tracking follows target rotation around the Y axis when `TransformationType` is `Rotation`.

```csharp
bool IsFollowingRotYAxis { get; set; }
```

### Property Value

 bool

### Remarks

This flag is used when [`TransformationType`](VM.Operations.Post.Interfaces.IOperationsAnimation.TransformationType.md) is `Rotation`. It selects whether target rotation around the Y axis changes the following camera.
When this value is `false`, target rotation around the Y axis is not applied to camera tracking.
