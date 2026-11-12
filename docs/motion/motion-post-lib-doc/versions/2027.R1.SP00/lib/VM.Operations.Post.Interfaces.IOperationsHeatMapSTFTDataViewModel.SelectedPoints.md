# Property SelectedPoints
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.SelectedPoints.md" download="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.SelectedPoints.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_SelectedPoints"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_SelectedPoints"></a> SelectedPoints

Gets or sets the number of samples used for each FFT calculation.

```csharp
int SelectedPoints { get; set; }
```

### Property Value

 int

### Remarks

Changing this value changes the number of samples in each STFT window and refreshes the heat-map data.
