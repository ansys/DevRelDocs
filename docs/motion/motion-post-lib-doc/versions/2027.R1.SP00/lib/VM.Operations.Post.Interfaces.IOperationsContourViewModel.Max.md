# Property Max
<a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_Max"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_Max"></a> Max

Gets or sets the upper contour range limit used when [`AutoRange`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.AutoRange.md) is `false`.

```csharp
double Max { get; set; }
```

### Property Value

 double

### Remarks

Changing this value updates the scalar range only when manual range mode is active.
