# Method GetSamplingTimes
<a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_GetSamplingTimes"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_GetSamplingTimes"></a> GetSamplingTimes\(\)

Gets sampling times available in the eigenvalue result.

```csharp
double[] GetSamplingTimes()
```

### Returns

 double\[\]

Sampling times available in the eigenvalue result, in source order. An empty array is returned when no sampling-time records are available.

### Examples

```python
# Get the eigenvalue analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Eigenvalue
eigenvalue_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Read available sampling times.
sampling_times = eigenvalue_analysis.GetSamplingTimes()
```
