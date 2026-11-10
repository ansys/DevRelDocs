# Interface IOperationsEigenValueAnalysisResultViewModel
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.md" download="VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides sampling-time, frequency, and mode-shape frame operations for an eigenvalue analysis result through [`IOperationAnalysisResult`](VM.Operations.Post.Interfaces.IOperationAnalysisResult.md).

```csharp
public interface IOperationsEigenValueAnalysisResultViewModel : IOperationAnalysisResult
```

## Properties

 [Frame](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.Frame.md\#VM\_Operations\_Post\_Interfaces\_IOperationsEigenValueAnalysisResultViewModel\_Frame)

Gets or sets the positive number of frames generated when an eigenvalue frequency is loaded.

 [TargetSamplingTime](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.TargetSamplingTime.md\#VM\_Operations\_Post\_Interfaces\_IOperationsEigenValueAnalysisResultViewModel\_TargetSamplingTime)

Gets or sets the sampling time used to select eigenvalue frequencies. When the exact value is unavailable, the closest available sampling time is selected.

## Methods

 [GetFrequencies\(\)](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.GetFrequencies.md\#VM\_Operations\_Post\_Interfaces\_IOperationsEigenValueAnalysisResultViewModel\_GetFrequencies)

Gets frequency entries for the selected sampling time.

 [GetFrequency\(int\)](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.GetFrequency.md\#VM\_Operations\_Post\_Interfaces\_IOperationsEigenValueAnalysisResultViewModel\_GetFrequency\_System\_Int32\_)

Gets a frequency entry at an index for the selected sampling time.

 [GetSamplingTimes\(\)](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.GetSamplingTimes.md\#VM\_Operations\_Post\_Interfaces\_IOperationsEigenValueAnalysisResultViewModel\_GetSamplingTimes)

Gets sampling times available in the eigenvalue result.
