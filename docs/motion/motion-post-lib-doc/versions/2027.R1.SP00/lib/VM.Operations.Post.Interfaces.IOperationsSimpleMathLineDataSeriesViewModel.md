# Interface IOperationsSimpleMathLineDataSeriesViewModel
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsSimpleMathLineDataSeriesViewModel.md" download="VM.Operations.Post.Interfaces.IOperationsSimpleMathLineDataSeriesViewModel.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsSimpleMathLineDataSeriesViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides the mathematical operation and interpolation count for a calculated curve based on existing curves.

```csharp
public interface IOperationsSimpleMathLineDataSeriesViewModel
```

## Properties

 [MathType](VM.Operations.Post.Interfaces.IOperationsSimpleMathLineDataSeriesViewModel.MathType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsSimpleMathLineDataSeriesViewModel\_MathType)

Gets or sets the arithmetic operation selected from [`SimpleMathType`](VM.Models.Post.SimpleMathType.md) to combine the source curves.

 [Points](VM.Operations.Post.Interfaces.IOperationsSimpleMathLineDataSeriesViewModel.Points.md\#VM\_Operations\_Post\_Interfaces\_IOperationsSimpleMathLineDataSeriesViewModel\_Points)

Gets or sets the number of points used to interpolate each source curve before the arithmetic operation.
