# Interface IOperationsCustomAxisViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Defines scale, label-format, font, range, and unit settings for a custom chart axis.

```csharp
public interface IOperationsCustomAxisViewModel : IOperationsAxisViewModelBase
```

## Properties

 [AxisType](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.AxisType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCustomAxisViewModel\_AxisType)

Gets or sets the scale type selected from [`AxisType`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.AxisType.md) to map values on the custom axis.

 [Decimal](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.Decimal.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCustomAxisViewModel\_Decimal)

Gets or sets the number of decimal places, from `0` through `16`, used in axis labels when manual decimal formatting is enabled.

 [Default](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.Default.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCustomAxisViewModel\_Default)

Gets or sets whether axis label decimal formatting is automatic. `true` uses automatic formatting and `false` applies [`Decimal`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.Decimal.md) and [`LabelFormatType`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.LabelFormatType.md).

 [FontColor](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.FontColor.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCustomAxisViewModel\_FontColor)

Gets or sets the color used to render custom-axis label text.

 [FontFace](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.FontFace.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCustomAxisViewModel\_FontFace)

Gets or sets the font family used to render custom-axis label text.

 [IsAuto](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.IsAuto.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCustomAxisViewModel\_IsAuto)

Gets or sets whether axis tick intervals and range limits are automatic. `true` calculates them automatically and `false` enables [`ScaleInterval`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.ScaleInterval.md), [`ScaleMin`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.ScaleMin.md), and [`ScaleMax`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.ScaleMax.md).

 [LabelFormatType](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.LabelFormatType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCustomAxisViewModel\_LabelFormatType)

Gets or sets the numeric format selected from [`LabelFormatType`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.LabelFormatType.md) for custom-axis labels.

 [LabelSize](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.LabelSize.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCustomAxisViewModel\_LabelSize)

Gets or sets the font size used to render custom-axis label text.

 [LabelWeight](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.LabelWeight.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCustomAxisViewModel\_LabelWeight)

Gets or sets the font weight used to render custom-axis label text.

 [LogarithmicBase](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.LogarithmicBase.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCustomAxisViewModel\_LogarithmicBase)

Gets or sets the logarithmic base used by a custom axis, such as `2`, `3`, `4`, `5`, `10`, or `E`.

 [ScaleInterval](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.ScaleInterval.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCustomAxisViewModel\_ScaleInterval)

Gets or sets the manual tick interval used when [`IsAuto`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.IsAuto.md) is `false`.

 [ScaleMax](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.ScaleMax.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCustomAxisViewModel\_ScaleMax)

Gets or sets the manual upper limit of the axis range used when [`IsAuto`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.IsAuto.md) is `false`.

 [ScaleMin](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.ScaleMin.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCustomAxisViewModel\_ScaleMin)

Gets or sets the manual lower limit of the axis range used when [`IsAuto`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.IsAuto.md) is `false`.

 [Style](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.Style.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCustomAxisViewModel\_Style)

Gets or sets the font style used to render custom-axis label text.

 [Unit](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.Unit.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCustomAxisViewModel\_Unit)

Gets the unit text supplied by the axis source, or an empty value when no unit is available.
