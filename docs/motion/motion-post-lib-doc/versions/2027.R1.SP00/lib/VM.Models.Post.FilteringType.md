# Enum FilteringType
<a id="VM_Models_Post_FilteringType"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Specifies the frequency range passed by a filtering operation.

```csharp
public enum FilteringType
```

## Fields

`BandPass = 2` 

Passes frequencies inside the configured lower and upper cutoffs.



`BandStop = 3` 

Passes frequencies outside the configured lower and upper cutoffs.



`HighPass = 1` 

Passes frequencies above the configured cutoff.



`LowPass = 0` 

Passes frequencies below the configured cutoff.

<a href="/lib/VM.Models.Post.FilteringType.md" download="VM.Models.Post.FilteringType.md">Download this page as Markdown</a>
