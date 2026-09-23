# Property LogoPath
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_LogoPath"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_LogoPath"></a> LogoPath

Gets or sets the logo image file path. (`.bmp`, `.jpg`, `.png`)

```csharp
string LogoPath { get; set; }
```

### Property Value

 string

### Remarks

The path identifies the image drawn when [`IsVisibleLogo`](VM.Operations.Post.Interfaces.IOperationsAnimation.IsVisibleLogo.md) is `true`. [`LogoHeight`](VM.Operations.Post.Interfaces.IOperationsAnimation.LogoHeight.md) and [`LogoWidth`](VM.Operations.Post.Interfaces.IOperationsAnimation.LogoWidth.md) control the displayed size.
