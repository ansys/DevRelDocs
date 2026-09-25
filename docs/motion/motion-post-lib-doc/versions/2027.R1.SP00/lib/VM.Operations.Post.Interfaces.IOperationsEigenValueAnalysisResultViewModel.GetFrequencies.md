# Method GetFrequencies
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
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Eigenvalue
eigenvalue_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Select a sampling time before reading frequencies.
sampling_times = eigenvalue_analysis.GetSamplingTimes()
target_sampling_time = sampling_times[0]
eigenvalue_analysis.TargetSamplingTime = target_sampling_time

# Read frequencies for the selected sampling time.
frequencies = eigenvalue_analysis.GetFrequencies()
```

### Remarks

Set [`TargetSamplingTime`](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.TargetSamplingTime.md) before calling this method when frequencies for a different sampling time are required.
