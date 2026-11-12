# Enum MeanStressCorrection
<div align="right"><a href="/lib/VM.Models.Post.MeanStressCorrection.md" download="VM.Models.Post.MeanStressCorrection.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_Post_MeanStressCorrection"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Specifies the mean-stress correction used for stress-life fatigue analysis.

```csharp
public enum MeanStressCorrection
```

## Fields

`DEelliptic = 4` 

Description: "DE Elliptic"

Uses the DE elliptic mean-stress correction.



`GerberLocus = 2` 

Description: "Gerber Locus"

Uses the Gerber locus mean-stress correction.



`ModifiedGoodman = 1` 

Description: "Modified Goodman"

Uses the Modified Goodman mean-stress correction.



`Neglect = 0` 

Description: "Neglect"

Does not apply a mean-stress correction.



`Sodeberg = 3` 

Description: "Soderberg"

Uses the Soderberg mean-stress correction.
