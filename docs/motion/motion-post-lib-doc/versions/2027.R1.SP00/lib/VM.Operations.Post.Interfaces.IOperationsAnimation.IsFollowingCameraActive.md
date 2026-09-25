# Property IsFollowingCameraActive
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsFollowingCameraActive"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsFollowingCameraActive"></a> IsFollowingCameraActive

Gets or sets whether camera tracking is enabled. `true` follows the target selected by [SetFollowingCameraTarget\(string\)](VM.Operations.Post.Interfaces.IOperationsAnimation.SetFollowingCameraTarget.md).

```csharp
bool IsFollowingCameraActive { get; set; }
```

### Property Value

 bool

### Remarks

Camera tracking has an effect only after [SetFollowingCameraTarget\(string\)](VM.Operations.Post.Interfaces.IOperationsAnimation.SetFollowingCameraTarget.md) finds a target. The selected translation or rotation axes determine which target changes are applied.
When this value is `false`, camera position updates do not follow the selected target.
