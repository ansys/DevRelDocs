# Property IsVisibleLabelBackground
<a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_IsVisibleLabelBackground"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_IsVisibleLabelBackground"></a> IsVisibleLabelBackground

Gets or sets whether the background behind the coordinate-system label is rendered. `true` shows it when `IsVisibleLabel` is `true`, and `false` hides it.

```csharp
bool IsVisibleLabelBackground { get; set; }
```

### Property Value

 bool

### Remarks

This setting has no visible effect while [`IsVisibleLabel`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleLabel.md) is `false`.
