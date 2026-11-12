# Method GetActiveAnimationView
<div align="right"><a href="/lib/VM.API.Post.Operations.ApplicationHandler.GetActiveAnimationView.md" download="VM.API.Post.Operations.ApplicationHandler.GetActiveAnimationView.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_API_Post_Operations_ApplicationHandler_GetActiveAnimationView"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_GetActiveAnimationView"></a> GetActiveAnimationView\(\)

Retrieves the active animation view from the current page.

```csharp
public IOperationsAnimation GetActiveAnimationView()
```

### Returns

 [IOperationsAnimation](VM.Operations.Post.Interfaces.IOperationsAnimation.md)

The active [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md), or `null` when the active view is not an animation.

### Remarks

This method is obsolete. Use [GetActiveView\(\)](VM.Operations.Post.Interfaces.IPage.GetActiveView.md) instead.
