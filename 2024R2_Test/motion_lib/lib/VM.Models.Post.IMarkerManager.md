# <a id="VM_Models_Post_IMarkerManager"></a> Interface IMarkerManager

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IMarkerManager : ISelectionManager, IAnimationManager, IManager
```

#### Implements

[ISelectionManager](VM.Models.Post.ISelectionManager.md), 
[IAnimationManager](VM.Models.Post.IAnimationManager.md), 
[IManager](VM.Models.Post.IManager.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_IMarkerManager_Add_VM_Models_Post_IMarkerAnimation_"></a> Add\(IMarkerAnimation\)

```csharp
void Add(IMarkerAnimation markerData)
```

#### Parameters

`markerData` [IMarkerAnimation](VM.Models.Post.IMarkerAnimation.md)

### <a id="VM_Models_Post_IMarkerManager_Find_System_String_"></a> Find\(string\)

```csharp
IMarkerAnimation Find(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IMarkerAnimation](VM.Models.Post.IMarkerAnimation.md)

### <a id="VM_Models_Post_IMarkerManager_Remove_VM_Models_Post_IMarkerAnimation_"></a> Remove\(IMarkerAnimation\)

```csharp
void Remove(IMarkerAnimation markerData)
```

#### Parameters

`markerData` [IMarkerAnimation](VM.Models.Post.IMarkerAnimation.md)

### <a id="VM_Models_Post_IMarkerManager_Trajectory_System_Boolean_System_String_"></a> Trajectory\(bool, string\)

```csharp
void Trajectory(bool show, string name)
```

#### Parameters

`show` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

