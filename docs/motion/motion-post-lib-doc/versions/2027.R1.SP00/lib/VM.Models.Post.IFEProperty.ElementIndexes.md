# Property ElementIndexes
<a id="VM_Models_Post_IFEProperty_ElementIndexes"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

## <a id="VM_Models_Post_IFEProperty_ElementIndexes"></a> ElementIndexes

Gets the array of element indexes associated with the finite element property.

```csharp
uint[] ElementIndexes { get; }
```

### Property Value

 uint\[\]

### Remarks

The element indexes represent the finite elements that are linked to this property.
These indexes are used to identify specific elements in the model.
