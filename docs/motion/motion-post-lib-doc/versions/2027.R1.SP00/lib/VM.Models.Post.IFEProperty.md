# Interface IFEProperty
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
