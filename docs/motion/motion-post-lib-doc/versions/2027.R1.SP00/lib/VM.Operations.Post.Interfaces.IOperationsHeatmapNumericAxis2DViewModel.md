# Interface IOperationsHeatmapNumericAxis2DViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsHeatmapNumericAxis2DViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides label-formatting and manual range settings for a numeric axis in a 2D STFT heat map.

```csharp
public interface IOperationsHeatmapNumericAxis2DViewModel
```

## Properties

 [Digit](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.Digit.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatmapNumericAxis2DViewModel\_Digit)

Gets or sets the number of digits used for the numeric label format.

 [FontColor](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.FontColor.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatmapNumericAxis2DViewModel\_FontColor)

Gets or sets `Color` used for numeric axis labels.

 [FontFace](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.FontFace.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatmapNumericAxis2DViewModel\_FontFace)

Gets or sets `FontFamily` used for numeric axis labels.

 [FontSize](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.FontSize.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatmapNumericAxis2DViewModel\_FontSize)

Gets or sets the font size of numeric axis labels.

 [FontStyle](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.FontStyle.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatmapNumericAxis2DViewModel\_FontStyle)

Gets or sets `FontStyle` used for numeric axis labels.

 [FontWeight](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.FontWeight.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatmapNumericAxis2DViewModel\_FontWeight)

Gets or sets `FontWeight` used for numeric axis labels.

 [General](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.General.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatmapNumericAxis2DViewModel\_General)

Gets or sets whether the label format is automatic. `true` selects general formatting and `false` uses [`Digit`](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.Digit.md) and [`LabelFormatType`](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.LabelFormatType.md).

 [LabelFormatType](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.LabelFormatType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatmapNumericAxis2DViewModel\_LabelFormatType)

Gets or sets the numeric format applied to axis labels when manual formatting is enabled.

 [ScaleInterval](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.ScaleInterval.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatmapNumericAxis2DViewModel\_ScaleInterval)

Gets or sets the manual scale interval of the axis.

 [ScaleMax](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.ScaleMax.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatmapNumericAxis2DViewModel\_ScaleMax)

Gets or sets the maximum value of the axis scale.

 [ScaleMin](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.ScaleMin.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatmapNumericAxis2DViewModel\_ScaleMin)

Gets or sets the minimum value of the axis scale.
