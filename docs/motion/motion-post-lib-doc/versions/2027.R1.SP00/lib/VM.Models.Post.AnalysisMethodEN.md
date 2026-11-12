# Enum AnalysisMethodEN
<div align="right"><a href="/lib/VM.Models.Post.AnalysisMethodEN.md" download="VM.Models.Post.AnalysisMethodEN.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_Post_AnalysisMethodEN"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Specifies the mean-stress correction method used in fatigue analysis.

```csharp
public enum AnalysisMethodEN
```

## Fields

`Morrow = 1` 

Description: "Morrow"

Applies the Morrow mean-stress correction.



`Neglect = 0` 

Description: "Neglect"

Does not apply a mean-stress correction.



`SWT = 2` 

Description: "S-W-T"

Applies the Smith-Watson-Topper correction.
