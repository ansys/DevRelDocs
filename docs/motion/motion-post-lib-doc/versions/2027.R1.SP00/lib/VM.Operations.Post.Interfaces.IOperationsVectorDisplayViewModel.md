# Interface IOperationsVectorDisplayViewModel
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsVectorDisplayViewModel.md" download="VM.Operations.Post.Interfaces.IOperationsVectorDisplayViewModel.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides color, scale, and logarithmic display settings for a vector display.

```csharp
public interface IOperationsVectorDisplayViewModel : IOperationsVectorDisplayBaseViewModel
```

## Properties

 [Color](VM.Operations.Post.Interfaces.IOperationsVectorDisplayViewModel.Color.md\#VM\_Operations\_Post\_Interfaces\_IOperationsVectorDisplayViewModel\_Color)

Gets or sets the color used to draw the vector.

 [IsLog](VM.Operations.Post.Interfaces.IOperationsVectorDisplayViewModel.IsLog.md\#VM\_Operations\_Post\_Interfaces\_IOperationsVectorDisplayViewModel\_IsLog)

Gets or sets whether logarithmic vector scaling is enabled. `true` uses logarithmic scaling and `false` uses linear scaling.

 [Scale](VM.Operations.Post.Interfaces.IOperationsVectorDisplayViewModel.Scale.md\#VM\_Operations\_Post\_Interfaces\_IOperationsVectorDisplayViewModel\_Scale)

Gets or sets the scale applied to vector lengths.
