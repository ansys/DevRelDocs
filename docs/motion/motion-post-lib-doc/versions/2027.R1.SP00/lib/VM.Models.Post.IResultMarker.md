# Interface IResultMarker
<a id="VM_Models_Post_IResultMarker"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Represents a marker result with the body, node, and parent information needed to read its values.

```csharp
public interface IResultMarker : IHasGuid
```

## Properties

 [ParentBodyIndex](VM.Models.Post.IResultMarker.ParentBodyIndex.md\#VM\_Models\_Post\_IResultMarker\_ParentBodyIndex)

Gets the index of the body that contains the marker.

 [ParentNodeIndex](VM.Models.Post.IResultMarker.ParentNodeIndex.md\#VM\_Models\_Post\_IResultMarker\_ParentNodeIndex)

Gets the index of the node associated with the marker.

 [ParentType](VM.Models.Post.IResultMarker.ParentType.md\#VM\_Models\_Post\_IResultMarker\_ParentType)

Gets the parent entity kind recorded for the marker.
