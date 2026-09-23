# Property IsVisibleStateInfo
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsVisibleStateInfo"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsVisibleStateInfo"></a> IsVisibleStateInfo

Gets or sets whether animation state information is visible. `true` shows it and `false` hides it.

```csharp
bool IsVisibleStateInfo { get; set; }
```

### Property Value

 bool

### Remarks

State information is drawn in the animation view and in captured animation frames when this value is `true`. Its position and text color are controlled by [`StateInfoPosition`](VM.Operations.Post.Interfaces.IOperationsAnimation.StateInfoPosition.md) and [`TextColorStateInfo`](VM.Operations.Post.Interfaces.IOperationsAnimation.TextColorStateInfo.md).
