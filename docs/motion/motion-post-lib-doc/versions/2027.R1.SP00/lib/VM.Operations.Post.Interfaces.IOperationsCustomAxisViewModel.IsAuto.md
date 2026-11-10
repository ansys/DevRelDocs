# Property IsAuto
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.IsAuto.md" download="VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.IsAuto.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
