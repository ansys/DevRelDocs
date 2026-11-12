# Class GeneralMarker
<div align="right"><a href="/lib/VM.Models.Post.GeneralMarker.md" download="VM.Models.Post.GeneralMarker.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_Post_GeneralMarker"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Represents a coordinate-system marker loaded from or created in a result document.

```csharp
public sealed class GeneralMarker : MarkerBase, IHasGuid
```

#### Inherited Members

[EntityBase.CategoryType](VM.Models.Post.EntityBase.CategoryType.md\#VM\_Models\_Post\_EntityBase\_CategoryType), 
[EntityBase.EntityType](VM.Models.Post.EntityBase.EntityType.md\#VM\_Models\_Post\_EntityBase\_EntityType), 
[ObjectBase.FullName](VM.Models.Post.ObjectBase.FullName.md\#VM\_Models\_Post\_ObjectBase\_FullName)

## Properties

 [GeneralMarkerType](VM.Models.Post.GeneralMarker.GeneralMarkerType.md\#VM\_Models\_Post\_GeneralMarker\_GeneralMarkerType)

Gets or sets the coordinate-system representation used by this marker.

 [PrimaryAxis](VM.Models.Post.GeneralMarker.PrimaryAxis.md\#VM\_Models\_Post\_GeneralMarker\_PrimaryAxis)

Gets or sets the primary coordinate axis used by this marker.

 [SecondaryAxis](VM.Models.Post.GeneralMarker.SecondaryAxis.md\#VM\_Models\_Post\_GeneralMarker\_SecondaryAxis)

Gets or sets the secondary coordinate axis used by this marker.

 [TransformationOffsetParameters](VM.Models.Post.GeneralMarker.TransformationOffsetParameters.md\#VM\_Models\_Post\_GeneralMarker\_TransformationOffsetParameters)

Gets or sets the angle, position, rotation-axis, and rotation-type values for this marker's transformation offset.
