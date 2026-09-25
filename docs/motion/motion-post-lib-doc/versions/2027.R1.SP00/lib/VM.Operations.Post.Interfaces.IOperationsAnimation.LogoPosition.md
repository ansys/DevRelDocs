# Property LogoPosition
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
