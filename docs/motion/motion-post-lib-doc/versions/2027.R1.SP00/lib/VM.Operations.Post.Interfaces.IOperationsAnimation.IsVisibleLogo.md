# Property IsVisibleLogo
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsAnimation.IsVisibleLogo.md" download="VM.Operations.Post.Interfaces.IOperationsAnimation.IsVisibleLogo.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsVisibleLogo"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsVisibleLogo"></a> IsVisibleLogo

Gets or sets whether the logo overlay is visible. `true` shows the logo and `false` hides it.

```csharp
bool IsVisibleLogo { get; set; }
```

### Property Value

 bool

### Remarks

The logo is drawn in the animation view and in captured animation frames when this value is `true`. Use [`LogoPath`](VM.Operations.Post.Interfaces.IOperationsAnimation.LogoPath.md), [`LogoPosition`](VM.Operations.Post.Interfaces.IOperationsAnimation.LogoPosition.md), [`LogoHeight`](VM.Operations.Post.Interfaces.IOperationsAnimation.LogoHeight.md), [`LogoWidth`](VM.Operations.Post.Interfaces.IOperationsAnimation.LogoWidth.md), and [`Opacity`](VM.Operations.Post.Interfaces.IOperationsAnimation.Opacity.md) to configure it.
