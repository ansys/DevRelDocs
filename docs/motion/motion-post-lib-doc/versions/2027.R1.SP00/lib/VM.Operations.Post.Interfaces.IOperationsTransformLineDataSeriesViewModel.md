# Interface IOperationsTransformLineDataSeriesViewModel
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md" download="VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides transform settings for a calculated curve.

```csharp
public interface IOperationsTransformLineDataSeriesViewModel
```

## Properties

 [Align](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.Align.md\#VM\_Operations\_Post\_Interfaces\_IOperationsTransformLineDataSeriesViewModel\_Align)

Gets or sets the alignment mode selected from [`AlignType`](VM.Models.Post.AlignType.md).

 [Base](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.Base.md\#VM\_Operations\_Post\_Interfaces\_IOperationsTransformLineDataSeriesViewModel\_Base)

Gets or sets the logarithm base used by the log-scale transform.

 [Coefficient](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.Coefficient.md\#VM\_Operations\_Post\_Interfaces\_IOperationsTransformLineDataSeriesViewModel\_Coefficient)

Gets or sets the coefficient used by the log-scale transform.

 [IsDecibel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.IsDecibel.md\#VM\_Operations\_Post\_Interfaces\_IOperationsTransformLineDataSeriesViewModel\_IsDecibel)

Gets or sets whether the log-scale transform uses decibel values.

 [OffsetX](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.OffsetX.md\#VM\_Operations\_Post\_Interfaces\_IOperationsTransformLineDataSeriesViewModel\_OffsetX)

Gets or sets the X offset used by the translate transform.

 [OffsetY](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.OffsetY.md\#VM\_Operations\_Post\_Interfaces\_IOperationsTransformLineDataSeriesViewModel\_OffsetY)

Gets or sets the Y offset used by the translate transform.

 [ScaleX](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.ScaleX.md\#VM\_Operations\_Post\_Interfaces\_IOperationsTransformLineDataSeriesViewModel\_ScaleX)

Gets or sets the X scale used by the linear-scale transform.

 [ScaleY](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.ScaleY.md\#VM\_Operations\_Post\_Interfaces\_IOperationsTransformLineDataSeriesViewModel\_ScaleY)

Gets or sets the Y scale used by the linear-scale transform.

 [SelectedTransformType](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.SelectedTransformType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsTransformLineDataSeriesViewModel\_SelectedTransformType)

Gets or sets the transform mode selected from `TransformType`.

 [Sign](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.Sign.md\#VM\_Operations\_Post\_Interfaces\_IOperationsTransformLineDataSeriesViewModel\_Sign)

Gets or sets the sign selected from [`SignType`](VM.Models.Post.SignType.md) for the absolute transform.
