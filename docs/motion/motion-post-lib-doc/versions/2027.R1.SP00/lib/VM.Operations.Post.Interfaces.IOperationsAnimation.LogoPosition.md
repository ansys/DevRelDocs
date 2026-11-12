# Property LogoPosition
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsAnimation.LogoPosition.md" download="VM.Operations.Post.Interfaces.IOperationsAnimation.LogoPosition.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_LogoPosition"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_LogoPosition"></a> LogoPosition

Gets or sets the logo position selected from [`Layout`](VM.Models.Post.Layout.md).

```csharp
Layout LogoPosition { get; set; }
```

### Property Value

 [Layout](VM.Models.Post.Layout.md)

### Remarks

[`Layout`](VM.Models.Post.Layout.md) selects a predefined corner position for the overlay in the animation view and captured frames when [`IsVisibleLogo`](VM.Operations.Post.Interfaces.IOperationsAnimation.IsVisibleLogo.md) is `true`.
