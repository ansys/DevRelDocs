# Property Opacity
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsAnimation.Opacity.md" download="VM.Operations.Post.Interfaces.IOperationsAnimation.Opacity.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_Opacity"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_Opacity"></a> Opacity

Gets or sets logo opacity from `0` to `100`, where `0` is fully transparent and `100` is fully opaque.

```csharp
double Opacity { get; set; }
```

### Property Value

 double

### Remarks

The value controls logo transparency when [`IsVisibleLogo`](VM.Operations.Post.Interfaces.IOperationsAnimation.IsVisibleLogo.md) is `true`. A value of `0` hides the logo content through full transparency, and a value of `100` uses full opacity.
Values outside the `0` to `100` range are not valid.
