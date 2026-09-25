# Property SelectedPoints
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
