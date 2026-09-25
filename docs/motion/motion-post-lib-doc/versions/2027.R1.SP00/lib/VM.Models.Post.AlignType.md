# Enum AlignType
<a id="VM_Models_Post_AlignType"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Selects how curves are lined up by [`CreateAlign(IEnumerable<string>, AlignType)`](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateAlign.md).

`Zero` moves each curve so its first Y point starts at zero. `Curve` shifts every following curve so its first Y point matches the first Y point of the first selected curve.

```csharp
public enum AlignType
```

## Fields

`Curve` 

Shifts every following curve so its first Y point matches the first Y point of the first selected curve.



`Zero` 

Shifts each curve so its first Y point starts at zero.


