# Interface IOperationsContourViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides display, component, range, and legend settings for contour data created with [`IOperationAnalysisResult`](VM.Operations.Post.Interfaces.IOperationAnalysisResult.md).

```csharp
public interface IOperationsContourViewModel
```

## Properties

 [AutoRange](VM.Operations.Post.Interfaces.IOperationsContourViewModel.AutoRange.md\#VM\_Operations\_Post\_Interfaces\_IOperationsContourViewModel\_AutoRange)

Gets or sets whether contour range limits are calculated automatically. `true` calculates them automatically and `false` uses [`Min`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.Min.md) and [`Max`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.Max.md).

 [Component](VM.Operations.Post.Interfaces.IOperationsContourViewModel.Component.md\#VM\_Operations\_Post\_Interfaces\_IOperationsContourViewModel\_Component)

Gets or sets the contour component selected from [`ComponentList`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.ComponentList.md) for display.

 [ComponentList](VM.Operations.Post.Interfaces.IOperationsContourViewModel.ComponentList.md\#VM\_Operations\_Post\_Interfaces\_IOperationsContourViewModel\_ComponentList)

Gets the component names available for the contour target and characteristic and accepted by [`Component`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.Component.md).

 [Continuous](VM.Operations.Post.Interfaces.IOperationsContourViewModel.Continuous.md\#VM\_Operations\_Post\_Interfaces\_IOperationsContourViewModel\_Continuous)

Gets or sets whether contour colors are interpolated continuously. `true` interpolates between colors and `false` uses discrete color bands.

 [FullName](VM.Operations.Post.Interfaces.IOperationsContourViewModel.FullName.md\#VM\_Operations\_Post\_Interfaces\_IOperationsContourViewModel\_FullName)

Gets or sets the full name used by analysis-result contour operations to identify the contour.

 [IsEnabled](VM.Operations.Post.Interfaces.IOperationsContourViewModel.IsEnabled.md\#VM\_Operations\_Post\_Interfaces\_IOperationsContourViewModel\_IsEnabled)

Gets or sets whether contour data is active in the animation view. `true` activates and displays the contour; `false` deactivates it.

 [LegendColorScheme](VM.Operations.Post.Interfaces.IOperationsContourViewModel.LegendColorScheme.md\#VM\_Operations\_Post\_Interfaces\_IOperationsContourViewModel\_LegendColorScheme)

Gets or sets the color scheme selected from [`ColorSchemeType`](VM.Models.Post.ColorSchemeType.md) for the contour legend.

 [LegendFontColor](VM.Operations.Post.Interfaces.IOperationsContourViewModel.LegendFontColor.md\#VM\_Operations\_Post\_Interfaces\_IOperationsContourViewModel\_LegendFontColor)

Gets or sets the color used to render contour legend text.

 [LegendVisibility](VM.Operations.Post.Interfaces.IOperationsContourViewModel.LegendVisibility.md\#VM\_Operations\_Post\_Interfaces\_IOperationsContourViewModel\_LegendVisibility)

Gets or sets whether the contour legend is rendered. `true` shows it and `false` hides it.

 [LogScale](VM.Operations.Post.Interfaces.IOperationsContourViewModel.LogScale.md\#VM\_Operations\_Post\_Interfaces\_IOperationsContourViewModel\_LogScale)

Gets or sets whether contour values use logarithmic scaling. `true` uses logarithmic scaling and `false` uses linear scaling.

 [Max](VM.Operations.Post.Interfaces.IOperationsContourViewModel.Max.md\#VM\_Operations\_Post\_Interfaces\_IOperationsContourViewModel\_Max)

Gets or sets the upper contour range limit used when [`AutoRange`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.AutoRange.md) is `false`.

 [Min](VM.Operations.Post.Interfaces.IOperationsContourViewModel.Min.md\#VM\_Operations\_Post\_Interfaces\_IOperationsContourViewModel\_Min)

Gets or sets the lower contour range limit used when [`AutoRange`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.AutoRange.md) is `false`.

 [MinMaxTargetType](VM.Operations.Post.Interfaces.IOperationsContourViewModel.MinMaxTargetType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsContourViewModel\_MinMaxTargetType)

Gets or sets the extremal-value scope selected from [`ExtremalValueType`](VM.Models.Post.ExtremalValueType.md) for contour display.
