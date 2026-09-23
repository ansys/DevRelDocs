# Property IsVisibleLogo
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
