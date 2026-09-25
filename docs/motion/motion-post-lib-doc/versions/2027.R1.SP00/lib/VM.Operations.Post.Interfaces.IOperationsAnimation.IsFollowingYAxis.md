# Property IsFollowingYAxis
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsFollowingYAxis"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsFollowingYAxis"></a> IsFollowingYAxis

Gets or sets whether camera tracking follows target translation along the Y axis when `TransformationType` is `Translation`.

```csharp
bool IsFollowingYAxis { get; set; }
```

### Property Value

 bool

### Remarks

This flag is used when [`TransformationType`](VM.Operations.Post.Interfaces.IOperationsAnimation.TransformationType.md) is `Translation`. It selects whether target translation along the Y axis changes the following camera.
When this value is `false`, target translation along the Y axis is not applied to camera tracking.
