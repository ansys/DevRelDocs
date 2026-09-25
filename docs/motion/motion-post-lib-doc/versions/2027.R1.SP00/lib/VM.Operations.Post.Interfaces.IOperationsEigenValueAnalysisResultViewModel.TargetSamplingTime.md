# Property TargetSamplingTime
<a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_TargetSamplingTime"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_TargetSamplingTime"></a> TargetSamplingTime

Gets or sets the sampling time used to select eigenvalue frequencies. When the exact value is unavailable, the closest available sampling time is selected.

```csharp
double TargetSamplingTime { get; set; }
```

### Property Value

 double

### Examples

```python
# Get the eigenvalue analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Eigenvalue
eigenvalue_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Select an available sampling time.
sampling_times = eigenvalue_analysis.GetSamplingTimes()
target_sampling_time = sampling_times[0]
eigenvalue_analysis.TargetSamplingTime = target_sampling_time
```

### Remarks

Changing this value applies the selected sampling-time data, rebuilds the related result state, disables previously active frequencies, removes contour data, clears the current selection, and refreshes the animation display.
