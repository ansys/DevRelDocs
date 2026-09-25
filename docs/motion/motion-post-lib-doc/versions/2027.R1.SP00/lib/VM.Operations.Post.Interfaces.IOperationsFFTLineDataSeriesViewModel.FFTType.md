# Property FFTType
<a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_FFTType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_FFTType"></a> FFTType

Gets or sets the FFT result component selected from `FFTType`.

```csharp
FFTType FFTType { get; set; }
```

### Property Value

 [FFTType](VM.Models.Post.FFTType.md)

### Remarks

Changing this value refreshes the generated curve. Magnitude is calculated from the real and imaginary FFT components and is multiplied by two. Phase is calculated from their angle and normalized to the range from `-180` to `180` degrees.
