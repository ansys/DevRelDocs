# Method GetFrequencies
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.GetFrequencies.md" download="VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.GetFrequencies.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_GetFrequencies"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_GetFrequencies"></a> GetFrequencies\(\)

Gets frequency entries for the selected sampling time.

```csharp
IEnumerable<IOperationsFrequencyViewModel> GetFrequencies()
```

### Returns

 IEnumerable<[IOperationsFrequencyViewModel](VM.Operations.Post.Interfaces.IOperationsFrequencyViewModel.md)\>

[`IOperationsFrequencyViewModel`](VM.Operations.Post.Interfaces.IOperationsFrequencyViewModel.md) objects available at the current `TargetSamplingTime`.

### Examples

```python
# Get the eigenvalue analysis result.
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Eigenvalue
# The eigenvalue analysis result of the document.
eigenvalue_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Select a sampling time before reading frequencies.
sampling_times = eigenvalue_analysis.GetSamplingTimes()
# The sampling time to select.
target_sampling_time = sampling_times[0]
eigenvalue_analysis.TargetSamplingTime = target_sampling_time

# Read frequencies for the selected sampling time.
frequencies = eigenvalue_analysis.GetFrequencies()
```

### Remarks

Set [`TargetSamplingTime`](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.TargetSamplingTime.md) before calling this method when frequencies for a different sampling time are required.
