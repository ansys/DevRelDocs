# Property NoOfRepeatedLoad
<a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_NoOfRepeatedLoad"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

## <a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_NoOfRepeatedLoad"></a> NoOfRepeatedLoad

Gets or sets the number of repeated loads used when writing the fatigue analysis input.

```csharp
double NoOfRepeatedLoad { get; set; }
```

### Property Value

 double

### Remarks

[RunFatigueAnalysis\(IDurabilityAnalysisParameter\)](VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysis.md) converts this value to an integer before writing the fatigue analysis input, so a fractional value loses its fractional part.
