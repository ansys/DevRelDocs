# Enum SignType
<a id="VM_Models_Post_SignType"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Selects the sign applied to the absolute-value curve created by [`CreateAbsolute(IEnumerable<string>, SignType)`](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateAbsolute.md).

The absolute transform first takes the absolute value of each Y point. `Positive` keeps those values as they are, and `Negative` flips them to make every point negative.

```csharp
public enum SignType
```

## Fields

`Negative` 

Flips the absolute values to negative, so every Y point stays at or below zero.



`Positive` 

Keeps the absolute values as positive, so every Y point stays at or above zero.


