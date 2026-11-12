# Interface IFEProperty
<div align="right"><a href="/lib/VM.Models.Post.IFEProperty.md" download="VM.Models.Post.IFEProperty.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_Post_IFEProperty"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Represents a finite element property entity.

```csharp
public interface IFEProperty : IHasGuid
```

## Remarks

This interface defines the common properties required for a finite element property entity,
including parent body index and associated element indexes.

## Properties

 [ElementIndexes](VM.Models.Post.IFEProperty.ElementIndexes.md\#VM\_Models\_Post\_IFEProperty\_ElementIndexes)

Gets the array of element indexes associated with the finite element property.

 [FatigueMaterial](VM.Models.Post.IFEProperty.FatigueMaterial.md\#VM\_Models\_Post\_IFEProperty\_FatigueMaterial)

Gets or sets the fatigue material properties used for fatigue analysis.

 [IsVisible](VM.Models.Post.IFEProperty.IsVisible.md\#VM\_Models\_Post\_IFEProperty\_IsVisible)

Gets or sets a value indicating whether the finite element property is visible.

 [ParentBodyIndex](VM.Models.Post.IFEProperty.ParentBodyIndex.md\#VM\_Models\_Post\_IFEProperty\_ParentBodyIndex)

Gets the index of the parent body associated with the finite element property.
