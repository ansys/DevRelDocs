# Property Opacity
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
