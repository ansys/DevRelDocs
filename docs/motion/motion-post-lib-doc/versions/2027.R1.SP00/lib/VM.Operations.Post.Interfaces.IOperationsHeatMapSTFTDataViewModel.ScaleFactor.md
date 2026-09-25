# Property ScaleFactor
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_ScaleFactor"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_ScaleFactor"></a> ScaleFactor

Gets or sets the factor applied to STFT time coordinates.

```csharp
double ScaleFactor { get; set; }
```

### Property Value

 double

### Remarks

Changing this value refreshes the heat map and multiplies the X coordinates of the generated heat-map data. A value greater than zero is required when the STFT view is updating.
