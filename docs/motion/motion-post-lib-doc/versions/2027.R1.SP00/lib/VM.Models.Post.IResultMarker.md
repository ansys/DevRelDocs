# Interface IResultMarker
<div align="right"><a href="/lib/VM.Models.Post.IResultMarker.md" download="VM.Models.Post.IResultMarker.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
