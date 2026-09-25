# Property AutoRange
<a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_AutoRange"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_AutoRange"></a> AutoRange

Gets or sets whether contour range limits are calculated automatically. `true` calculates them automatically and `false` uses [`Min`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.Min.md) and [`Max`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.Max.md).

```csharp
bool AutoRange { get; set; }
```

### Property Value

 bool

### Remarks

Changing this value updates contour rendering and enables manual [`Min`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.Min.md) and [`Max`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.Max.md) control only when it is `false`.
