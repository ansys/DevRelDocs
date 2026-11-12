# Enum AlignType
<div align="right"><a href="/lib/VM.Models.Post.AlignType.md" download="VM.Models.Post.AlignType.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_Post_AlignType"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Selects how curves are lined up by [`CreateAlign(IEnumerable<string>, AlignType)`](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateAlign.md).

`Zero` moves each curve so its first Y point starts at zero. `Curve` shifts every following curve so its first Y point matches the first Y point of the first selected curve.

```csharp
public enum AlignType
```

## Fields

`Curve = 1` 

Shifts every following curve so its first Y point matches the first Y point of the first selected curve.



`Zero = 0` 

Shifts each curve so its first Y point starts at zero.
