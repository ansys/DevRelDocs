# <a id="VM_Models_Post_IGeneralMarkerManager"></a> Interface IGeneralMarkerManager

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IGeneralMarkerManager : IMarkerManager, ISelectionManager, IAnimationManager, IManager
```

#### Implements

[IMarkerManager](VM.Models.Post.IMarkerManager.md), 
[ISelectionManager](VM.Models.Post.ISelectionManager.md), 
[IAnimationManager](VM.Models.Post.IAnimationManager.md), 
[IManager](VM.Models.Post.IManager.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_IGeneralMarkerManager_Find_System_UInt32_"></a> Find\(uint\)

```csharp
IMarkerAnimation Find(uint partindex)
```

#### Parameters

`partindex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [IMarkerAnimation](VM.Models.Post.IMarkerAnimation.md)

