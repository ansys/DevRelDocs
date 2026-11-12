# Interface IOperationsLegendModifier
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsLegendModifier.md" download="VM.Operations.Post.Interfaces.IOperationsLegendModifier.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsLegendModifier"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides appearance, filtering, and placement settings for the legend rendered by a chart.

```csharp
public interface IOperationsLegendModifier
```

## Properties

 [Background](VM.Operations.Post.Interfaces.IOperationsLegendModifier.Background.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLegendModifier\_Background)

Gets or sets `Color` used for the legend background.

 [FontColor](VM.Operations.Post.Interfaces.IOperationsLegendModifier.FontColor.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLegendModifier\_FontColor)

Gets or sets `Color` used for legend text.

 [FontFace](VM.Operations.Post.Interfaces.IOperationsLegendModifier.FontFace.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLegendModifier\_FontFace)

Gets or sets `FontFamily` used for legend text.

 [FontSize](VM.Operations.Post.Interfaces.IOperationsLegendModifier.FontSize.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLegendModifier\_FontSize)

Gets or sets the font size of legend text, from `1` through `100`.

 [FontStyle](VM.Operations.Post.Interfaces.IOperationsLegendModifier.FontStyle.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLegendModifier\_FontStyle)

Gets or sets `FontStyle` used for legend text.

 [FontWeight](VM.Operations.Post.Interfaces.IOperationsLegendModifier.FontWeight.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLegendModifier\_FontWeight)

Gets or sets `FontWeight` used for legend text.

 [ItemsInFilter](VM.Operations.Post.Interfaces.IOperationsLegendModifier.ItemsInFilter.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLegendModifier\_ItemsInFilter)

Gets or sets whether the legend displays all chart curves or only visible curves, using the `All Curves` or `Visible Curves` filter label.

 [LegendPlacement](VM.Operations.Post.Interfaces.IOperationsLegendModifier.LegendPlacement.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLegendModifier\_LegendPlacement)

Gets or sets the legend placement selected from [`LegendPlacementType`](VM.Models.Post.LegendPlacementType.md) relative to the chart.
