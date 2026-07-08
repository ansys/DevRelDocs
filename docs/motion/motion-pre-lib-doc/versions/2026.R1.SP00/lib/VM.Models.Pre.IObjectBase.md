# Interface IObjectBase
<a id="VM_Models_Pre_IObjectBase"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

<p>This interface is to represent the object base.</p>

```csharp
public interface IObjectBase : IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject
```

#### Implements

[IObject](VM.Models.Pre.IObject.md), 
[ILinkContainer](VM.Models.Pre.ILinkContainer.md), 
[IOwned](VM.Models.Pre.IOwned.md), 
IHasID, 
[IEventProvider](VM.Models.Pre.IEventProvider.md), 
[IHasKeyObject](VM.Models.Pre.IHasKeyObject.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Pre_IObjectBase_DestroyObject"></a> DestroyObject\(\)

```csharp
void DestroyObject()
```

### <a id="VM_Models_Pre_IObjectBase_FixUp_VM_Models_Pre_IObjectBase_"></a> FixUp\(IObjectBase\)

```csharp
void FixUp(IObjectBase objectBase)
```

#### Parameters

`objectBase` [IObjectBase](VM.Models.Pre.IObjectBase.md)

### <a id="VM_Models_Pre_IObjectBase_Destroying"></a> Destroying

Raised when object is about to be destroyed

```csharp
event EventHandler<Identifier> Destroying
```

#### Event Type

 EventHandler<Identifier\>

