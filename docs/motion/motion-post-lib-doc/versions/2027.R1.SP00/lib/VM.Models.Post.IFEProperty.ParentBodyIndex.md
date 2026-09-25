# Property ParentBodyIndex
<a id="VM_Models_Post_IFEProperty_ParentBodyIndex"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

## <a id="VM_Models_Post_IFEProperty_ParentBodyIndex"></a> ParentBodyIndex

Gets the index of the parent body associated with the finite element property.

```csharp
int ParentBodyIndex { get; }
```

### Property Value

 int

### Remarks

The parent body index refers to the body that this property is associated with in the model.
It is used to establish a relationship between the property and its parent body.
