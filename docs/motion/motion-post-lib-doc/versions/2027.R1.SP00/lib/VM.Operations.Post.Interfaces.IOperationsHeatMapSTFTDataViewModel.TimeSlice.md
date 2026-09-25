# Property TimeSlice
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_TimeSlice"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_TimeSlice"></a> TimeSlice

Gets or sets the time length of each STFT window.

```csharp
double TimeSlice { get; set; }
```

### Property Value

 double

### Remarks

Changing this value changes the source time span assigned to each STFT window. A positive value is required when the STFT view is updating.
