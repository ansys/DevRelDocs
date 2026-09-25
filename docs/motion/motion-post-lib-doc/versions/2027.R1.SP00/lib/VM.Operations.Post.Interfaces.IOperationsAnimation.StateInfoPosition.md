# Property StateInfoPosition
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_StateInfoPosition"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_StateInfoPosition"></a> StateInfoPosition

Gets or sets the state-information position selected from [`Layout`](VM.Models.Post.Layout.md).

```csharp
Layout StateInfoPosition { get; set; }
```

### Property Value

 [Layout](VM.Models.Post.Layout.md)

### Remarks

[`Layout`](VM.Models.Post.Layout.md) selects a predefined corner position for the overlay in the animation view and captured frames when [`IsVisibleStateInfo`](VM.Operations.Post.Interfaces.IOperationsAnimation.IsVisibleStateInfo.md) is `true`.
