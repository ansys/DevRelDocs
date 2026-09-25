# Method GetActiveAnimationView
<a id="VM_API_Post_Operations_ApplicationHandler_GetActiveAnimationView"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_GetActiveAnimationView"></a> GetActiveAnimationView\(\)

Retrieves the active animation view from the current page.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the GetActiveView function of the IPage interface instead.", true)]
public IOperationsAnimation GetActiveAnimationView()
```

### Returns

 [IOperationsAnimation](VM.Operations.Post.Interfaces.IOperationsAnimation.md)

The active [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md), or <code>null</code> when the active view is not an animation.

### Remarks

This method is obsolete. Use [GetActiveView\(\)](VM.Operations.Post.Interfaces.IPage.GetActiveView.md) instead.
