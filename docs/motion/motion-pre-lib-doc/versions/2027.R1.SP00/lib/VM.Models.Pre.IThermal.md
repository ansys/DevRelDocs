# Interface IThermal
<a id="VM_Models_Pre_IThermal"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

This interface is to represent the thermal.

```csharp
public interface IThermal : IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner
```

#### Implements

[IEntity](VM.Models.Pre.IEntity.md), 
[IEntityBase](VM.Models.Pre.IEntityBase.md), 
[IObjectBase](VM.Models.Pre.IObjectBase.md), 
[IObject](VM.Models.Pre.IObject.md), 
[ILinkContainer](VM.Models.Pre.ILinkContainer.md), 
[IOwned](VM.Models.Pre.IOwned.md), 
IHasID, 
[IEventProvider](VM.Models.Pre.IEventProvider.md), 
[IHasKeyObject](VM.Models.Pre.IHasKeyObject.md), 
IHasName, 
IEnabled, 
IHasComment, 
IVisible, 
[IDocumentOwner](VM.Models.Pre.IDocumentOwner.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Pre_IThermal_TargetObject"></a> TargetObject

Gets the target object.

```csharp
IObjectBase TargetObject { get; }
```

#### Property Value

 [IObjectBase](VM.Models.Pre.IObjectBase.md)

