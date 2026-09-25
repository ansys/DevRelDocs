# Property MarkerSize
<a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_MarkerSize"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_MarkerSize"></a> MarkerSize

Gets or sets the size of the rendered coordinate-system marker.

```csharp
double MarkerSize { get; set; }
```

### Property Value

 double

### Remarks

The marker size changes the displayed marker scale when [`IsVisible`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisible.md) is `true` without changing its coordinate-system transform.
