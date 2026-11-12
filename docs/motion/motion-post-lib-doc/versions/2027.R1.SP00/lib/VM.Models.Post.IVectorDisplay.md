# Interface IVectorDisplay
<div align="right"><a href="/lib/VM.Models.Post.IVectorDisplay.md" download="VM.Models.Post.IVectorDisplay.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_Post_IVectorDisplay"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Represents a vector display definition associated with an entity and a vector characteristic.

```csharp
public interface IVectorDisplay : IHasGuid
```

## Properties

 [Characteristic](VM.Models.Post.IVectorDisplay.Characteristic.md\#VM\_Models\_Post\_IVectorDisplay\_Characteristic)

Gets the characteristic name used to obtain vector values.

 [Target](VM.Models.Post.IVectorDisplay.Target.md\#VM\_Models\_Post\_IVectorDisplay\_Target)

Gets the entity that supplies the vector display values.

 [Type](VM.Models.Post.IVectorDisplay.Type.md\#VM\_Models\_Post\_IVectorDisplay\_Type)

Gets the vector display mode used to interpret the values.

 [VectorDisplayBaseData](VM.Models.Post.IVectorDisplay.VectorDisplayBaseData.md\#VM\_Models\_Post\_IVectorDisplay\_VectorDisplayBaseData)

Gets the animation data used to render the vector display.
