# Enum SignType
<div align="right"><a href="/lib/VM.Models.Post.SignType.md" download="VM.Models.Post.SignType.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_Post_SignType"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Selects the sign applied to the absolute-value curve created by [`CreateAbsolute(IEnumerable<string>, SignType)`](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateAbsolute.md).

The absolute transform first takes the absolute value of each Y point. `Positive` keeps those values as they are, and `Negative` flips them to make every point negative.

```csharp
public enum SignType
```

## Fields

`Negative = 1` 

Flips the absolute values to negative, so every Y point stays at or below zero.



`Positive = 0` 

Keeps the absolute values as positive, so every Y point stays at or above zero.
