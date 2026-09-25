# Property IsAuto
<a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_IsAuto"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_IsAuto"></a> IsAuto

Gets or sets whether axis tick intervals and range limits are automatic. `true` calculates them automatically and `false` enables [`ScaleInterval`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.ScaleInterval.md), [`ScaleMin`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.ScaleMin.md), and [`ScaleMax`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.ScaleMax.md).

```csharp
bool IsAuto { get; set; }
```

### Property Value

 bool

### Remarks

When this value is `false`, [`ScaleInterval`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.ScaleInterval.md), [`ScaleMin`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.ScaleMin.md), and [`ScaleMax`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.ScaleMax.md) provide the manual interval and range settings for the axis.
