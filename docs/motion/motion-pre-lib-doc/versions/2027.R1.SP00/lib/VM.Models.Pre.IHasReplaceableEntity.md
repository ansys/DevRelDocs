# Interface IHasReplaceableEntity
<a id="VM_Models_Pre_IHasReplaceableEntity"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

This interface is to represent the replaceable entity.

```csharp
public interface IHasReplaceableEntity
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Pre_IHasReplaceableEntity_HasReplaceableEntity_VM_Models_Pre_IObjectBase_"></a> HasReplaceableEntity\(IObjectBase\)

Gets a value indicating whether this instance has replacable entity.

```csharp
bool HasReplaceableEntity(IObjectBase oldObject)
```

#### Parameters

`oldObject` [IObjectBase](VM.Models.Pre.IObjectBase.md)

The old object

#### Returns

 bool

if this instance has replacable entity, the result is true.

### <a id="VM_Models_Pre_IHasReplaceableEntity_ReplaceEntity_VM_Models_Pre_IObjectBase_VM_Models_Pre_IObjectBase_"></a> ReplaceEntity\(IObjectBase, IObjectBase\)

Replace Entity

```csharp
bool ReplaceEntity(IObjectBase oldObject, IObjectBase newObject)
```

#### Parameters

`oldObject` [IObjectBase](VM.Models.Pre.IObjectBase.md)

The old object

`newObject` [IObjectBase](VM.Models.Pre.IObjectBase.md)

The new object

#### Returns

 bool

if success, the result is true.

