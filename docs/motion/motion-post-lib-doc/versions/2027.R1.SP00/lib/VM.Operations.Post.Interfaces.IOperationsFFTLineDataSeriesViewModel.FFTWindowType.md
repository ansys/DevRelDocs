# Property FFTWindowType
<a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_FFTWindowType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_FFTWindowType"></a> FFTWindowType

Gets or sets the window function selected from `FFTWindowType` and applied before FFT.

```csharp
FFTWindowType FFTWindowType { get; set; }
```

### Property Value

 [FFTWindowType](VM.Models.Post.FFTWindowType.md)

### Remarks

Changing this value refreshes the generated curve. The selected window weights the interpolated source samples before the FFT calculation. The `None` selection leaves those samples unchanged.
