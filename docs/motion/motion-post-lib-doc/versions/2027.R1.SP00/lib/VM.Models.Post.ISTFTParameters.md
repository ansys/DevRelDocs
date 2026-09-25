# Interface ISTFTParameters
<a id="VM_Models_Post_ISTFTParameters"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Carries the source signal and the window, frequency, and scaling settings that [`CreateSTFT(ISTFTParameters, IList<string>)`](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSTFT.md) uses to build a Short-Time Fourier Transform (STFT) heat map.

The STFT splits the source signal into overlapping time windows and runs a Fast Fourier Transform (FFT) on each window, so the values set here decide the time range, window size, overlap, frequency axis, and value scaling of the result.

```csharp
public interface ISTFTParameters
```

## Properties

 [End](VM.Models.Post.ISTFTParameters.End.md\#VM\_Models\_Post\_ISTFTParameters\_End)

Gets or sets the end of the time range taken from the source signal for the STFT.

 [Overlap](VM.Models.Post.ISTFTParameters.Overlap.md\#VM\_Models\_Post\_ISTFTParameters\_Overlap)

Gets or sets the percentage of samples shared between two neighboring STFT windows. A larger value makes the windows overlap more.

 [ReferenceValue](VM.Models.Post.ISTFTParameters.ReferenceValue.md\#VM\_Models\_Post\_ISTFTParameters\_ReferenceValue)

Gets or sets the reference value used when [`SelectedScaleType`](VM.Models.Post.ISTFTParameters.SelectedScaleType.md) selects decibel scaling. It has no effect in the original-value mode.

 [SamplingFrequency](VM.Models.Post.ISTFTParameters.SamplingFrequency.md\#VM\_Models\_Post\_ISTFTParameters\_SamplingFrequency)

Gets or sets the sampling frequency, in samples per second, used to build the frequency axis of the STFT result.

 [ScaleFactor](VM.Models.Post.ISTFTParameters.ScaleFactor.md\#VM\_Models\_Post\_ISTFTParameters\_ScaleFactor)

Gets or sets the factor multiplied into the time coordinates of the STFT result.

 [SelectedPoints](VM.Models.Post.ISTFTParameters.SelectedPoints.md\#VM\_Models\_Post\_ISTFTParameters\_SelectedPoints)

Gets or sets the number of samples used for each FFT window. This sets how many frequency points each STFT window produces.

 [SelectedScaleType](VM.Models.Post.ISTFTParameters.SelectedScaleType.md\#VM\_Models\_Post\_ISTFTParameters\_SelectedScaleType)

Gets or sets [`STFTScaleType`](VM.Models.Post.STFTScaleType.md) that decides whether STFT values are kept as original values or converted to a decibel scale.

 [SourceX](VM.Models.Post.ISTFTParameters.SourceX.md\#VM\_Models\_Post\_ISTFTParameters\_SourceX)

Gets or sets the X values of the source signal, which are the time points of each sample. The spacing between the first two values sets the sample time step used to slice the signal.

 [SourceY](VM.Models.Post.ISTFTParameters.SourceY.md\#VM\_Models\_Post\_ISTFTParameters\_SourceY)

Gets or sets the Y values of the source signal, which are the amplitude at each time point in [`SourceX`](VM.Models.Post.ISTFTParameters.SourceX.md).

 [Start](VM.Models.Post.ISTFTParameters.Start.md\#VM\_Models\_Post\_ISTFTParameters\_Start)

Gets or sets the start of the time range taken from the source signal for the STFT.

 [TimeSlice](VM.Models.Post.ISTFTParameters.TimeSlice.md\#VM\_Models\_Post\_ISTFTParameters\_TimeSlice)

Gets or sets the time length of one STFT window. It sets how much of the source signal each window covers.
