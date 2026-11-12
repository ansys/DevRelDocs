# Property ParentBodyIndex
<div align="right"><a href="/lib/VM.Models.Post.IFEProperty.ParentBodyIndex.md" download="VM.Models.Post.IFEProperty.ParentBodyIndex.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
