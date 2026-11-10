# Enum SignalProcessingType
<div align="right"><a href="/lib/VM.Models.Post.SignalProcessingType.md" download="VM.Models.Post.SignalProcessingType.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_Post_SignalProcessingType"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Specifies the signal-processing operation applied to curve data.

```csharp
public enum SignalProcessingType
```

## Fields

`Filtering = 0` 

Description: "Filtering"

Applies a frequency filter to the curve data.



`FrequencyWeighting = 2` 

Description: "Frequency Weighting"

Applies frequency weighting to the curve data.



`Smoothing = 1` 

Description: "Smoothing"

Applies a smoothing operation to the curve data.
