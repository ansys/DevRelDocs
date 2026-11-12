# Method GetFrequency
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.GetFrequency.md" download="VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.GetFrequency.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_GetFrequency_System_Int32_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_GetFrequency_System_Int32_"></a> GetFrequency\(int\)

Gets a frequency entry at an index for the selected sampling time.

```csharp
IOperationsFrequencyViewModel GetFrequency(int index)
```

### Parameters

`index` int

Zero-based index in the frequencies available at the current [`TargetSamplingTime`](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.TargetSamplingTime.md).

<Danger>
A negative index is invalid and causes an exception.
</Danger>

### Returns

 [IOperationsFrequencyViewModel](VM.Operations.Post.Interfaces.IOperationsFrequencyViewModel.md)

[`IOperationsFrequencyViewModel`](VM.Operations.Post.Interfaces.IOperationsFrequencyViewModel.md) at `index`, or `null` when the index does not identify a loaded frequency.

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

# Select a sampling time before reading a frequency.
sampling_times = eigenvalue_analysis.GetSamplingTimes()
# The sampling time to select.
target_sampling_time = sampling_times[0]
eigenvalue_analysis.TargetSamplingTime = target_sampling_time

# Read one frequency by zero-based index.
# The index of the frequency entry for the selected sampling time.
frequency_index = 0
# The frequency entry at the index of the selected sampling time.
frequency = eigenvalue_analysis.GetFrequency(frequency_index)
```

### Remarks

The returned frequency belongs to the currently selected sampling time. An index outside the available frequency range returns `null`.
