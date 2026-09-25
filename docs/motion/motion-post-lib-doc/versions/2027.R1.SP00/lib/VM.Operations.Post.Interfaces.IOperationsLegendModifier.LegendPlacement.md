# Property LegendPlacement
<a id="VM_Operations_Post_Interfaces_IOperationsLegendModifier_LegendPlacement"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLegendModifier_LegendPlacement"></a> LegendPlacement

Gets or sets the legend placement selected from [`LegendPlacementType`](VM.Models.Post.LegendPlacementType.md) relative to the chart.

```csharp
LegendPlacementType LegendPlacement { get; set; }
```

### Property Value

 [LegendPlacementType](VM.Models.Post.LegendPlacementType.md)

### Remarks

Setting `Inside` shows the legend inside the chart. Setting another placement switches the legend to the outside layout.
