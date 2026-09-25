# Property Min
<a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_Min"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_Min"></a> Min

Gets or sets the lower contour range limit used when [`AutoRange`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.AutoRange.md) is `false`.

```csharp
double Min { get; set; }
```

### Property Value

 double

### Remarks

Changing this value updates the scalar range only when manual range mode is active.
