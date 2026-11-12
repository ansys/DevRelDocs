# Property IsFollowingZAxis
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsAnimation.IsFollowingZAxis.md" download="VM.Operations.Post.Interfaces.IOperationsAnimation.IsFollowingZAxis.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
