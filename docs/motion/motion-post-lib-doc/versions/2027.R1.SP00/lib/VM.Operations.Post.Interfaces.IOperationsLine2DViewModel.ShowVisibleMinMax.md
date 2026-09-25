# Property ShowVisibleMinMax
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_ShowVisibleMinMax"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_ShowVisibleMinMax"></a> ShowVisibleMinMax

Gets or sets whether minimum and maximum annotations are shown for visible curves. `true` shows the annotations and `false` hides them.

```csharp
bool ShowVisibleMinMax { get; set; }
```

### Property Value

 bool

### Remarks

Changing this value changes annotation visibility without changing the underlying curve data.
