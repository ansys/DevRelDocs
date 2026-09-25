# Property LegendColorScheme
<a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_LegendColorScheme"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_LegendColorScheme"></a> LegendColorScheme

Gets or sets the color scheme selected from [`ColorSchemeType`](VM.Models.Post.ColorSchemeType.md) for the contour legend.

```csharp
ColorSchemeType LegendColorScheme { get; set; }
```

### Property Value

 [ColorSchemeType](VM.Models.Post.ColorSchemeType.md)

### Remarks

Changing the scheme updates the contour legend gradient and contour rendering.
