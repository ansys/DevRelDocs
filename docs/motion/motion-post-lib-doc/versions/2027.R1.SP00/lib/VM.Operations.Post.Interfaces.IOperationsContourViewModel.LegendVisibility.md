# Property LegendVisibility
<a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_LegendVisibility"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_LegendVisibility"></a> LegendVisibility

Gets or sets whether the contour legend is rendered. `true` shows it and `false` hides it.

```csharp
bool LegendVisibility { get; set; }
```

### Property Value

 bool

### Remarks

Changing this value updates scalar contour rendering and does not disable the contour itself.
