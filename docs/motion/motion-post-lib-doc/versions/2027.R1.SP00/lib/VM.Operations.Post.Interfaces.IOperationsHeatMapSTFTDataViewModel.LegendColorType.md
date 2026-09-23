# Property LegendColorType
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_LegendColorType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_LegendColorType"></a> LegendColorType

Gets or sets [`ColorSchemeType`](VM.Models.Post.ColorSchemeType.md) used to map STFT values in the legend and heat map.

```csharp
ColorSchemeType LegendColorType { get; set; }
```

### Property Value

 [ColorSchemeType](VM.Models.Post.ColorSchemeType.md)

### Remarks

Changing this value refreshes the color mapping used by the legend and heat-map rendering.
