# Property ShowLegend
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_ShowLegend"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModel_ShowLegend"></a> ShowLegend

Gets or sets whether the legend is rendered for the 2D chart. `true` renders it when curves are present and `false` hides it.

```csharp
bool ShowLegend { get; set; }
```

### Property Value

 bool

### Remarks

Changing this value updates legend visibility. The legend is hidden when the chart has no renderable curves.
