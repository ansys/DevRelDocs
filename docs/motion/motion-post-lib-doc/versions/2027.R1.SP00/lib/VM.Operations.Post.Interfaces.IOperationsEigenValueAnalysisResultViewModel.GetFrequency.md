# Method GetFrequency
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

> [!IMPORTANT]
> A negative index is invalid and causes an exception.

### Returns

 [IOperationsFrequencyViewModel](VM.Operations.Post.Interfaces.IOperationsFrequencyViewModel.md)

[`IOperationsFrequencyViewModel`](VM.Operations.Post.Interfaces.IOperationsFrequencyViewModel.md) at `index`, or `null` when the index does not identify a loaded frequency.

### Examples

```python
# Get the eigenvalue analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Eigenvalue
eigenvalue_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Select a sampling time before reading a frequency.
sampling_times = eigenvalue_analysis.GetSamplingTimes()
target_sampling_time = sampling_times[0]
eigenvalue_analysis.TargetSamplingTime = target_sampling_time

# Read one frequency by zero-based index.
frequency_index = 0
frequency = eigenvalue_analysis.GetFrequency(frequency_index)
```

### Remarks

The returned frequency belongs to the currently selected sampling time. An index outside the available frequency range returns `null`.
