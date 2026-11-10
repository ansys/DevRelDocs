# Method GetSamplingTimes
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.GetSamplingTimes.md" download="VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.GetSamplingTimes.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Eigenvalue
# The eigenvalue analysis result of the document.
eigenvalue_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Read available sampling times.
sampling_times = eigenvalue_analysis.GetSamplingTimes()
```
