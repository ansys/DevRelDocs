# Property MeanStressCorrection
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsFEBody.MeanStressCorrection.md" download="VM.Operations.Post.Interfaces.IOperationsFEBody.MeanStressCorrection.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsFEBody_MeanStressCorrection"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_MeanStressCorrection"></a> MeanStressCorrection

Gets or sets the correction method selected from [`MeanStressCorrection`](VM.Models.Post.MeanStressCorrection.md) for stress-life fatigue analysis.

```csharp
MeanStressCorrection MeanStressCorrection { get; set; }
```

### Property Value

 [MeanStressCorrection](VM.Models.Post.MeanStressCorrection.md)

### Remarks

This property applies when [`AnalysisType`](VM.Operations.Post.Interfaces.IOperationsFEBody.AnalysisType.md) selects stress-life analysis. Changing it updates the mean-stress correction stored for fatigue evaluation.
