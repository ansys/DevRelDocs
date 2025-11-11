# Interface ILinkContainer
<a id="VM_Models_Pre_ILinkContainer"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

This interface is to represent the object container that has a relation with other object.

```csharp
public interface ILinkContainer : IOwned, IHasID
```

#### Implements

[IOwned](VM.Models.Pre.IOwned.md), 
IHasID

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Pre_ILinkContainer_ClearChildInfoBeforeDeserialize"></a> ClearChildInfoBeforeDeserialize

Gets a value indicating whether [clear child info before deserialize].

```csharp
bool ClearChildInfoBeforeDeserialize { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Models_Pre_ILinkContainer_ClearLinkBeforeDeserialize"></a> ClearLinkBeforeDeserialize\(\)

Disconnect the link relation.

```csharp
void ClearLinkBeforeDeserialize()
```

### <a id="VM_Models_Pre_ILinkContainer_ClearLinkBeforeSwap"></a> ClearLinkBeforeSwap\(\)

Disconnect the link relation for undo/redo.

```csharp
void ClearLinkBeforeSwap()
```

### <a id="VM_Models_Pre_ILinkContainer_GetChilds_System_Collections_Generic_HashSet_VM_Models_Pre_ILinkContainer__"></a> GetChilds\(HashSet<ILinkContainer\>\)

Get child objects.

```csharp
void GetChilds(HashSet<ILinkContainer> lstObjs)
```

#### Parameters

`lstObjs` HashSet<[ILinkContainer](VM.Models.Pre.ILinkContainer.md)\>

The object list.

### <a id="VM_Models_Pre_ILinkContainer_GetFirstDesignEntities"></a> GetFirstDesignEntities\(\)

Get first design entities.

```csharp
IEnumerable<IObject> GetFirstDesignEntities()
```

#### Returns

 IEnumerable<[IObject](VM.Models.Pre.IObject.md)\>

The collection of IObject&gt;

### <a id="VM_Models_Pre_ILinkContainer_OnReserved_System_Object_System_Object_System_EventArgs_"></a> OnReserved\(object, object, EventArgs\)

Called after reserve linked object.

```csharp
void OnReserved(object reserved, object objNotifier, EventArgs args)
```

#### Parameters

`reserved` object

The reserved object.

`objNotifier` object

The notifier object.

`args` EventArgs

The event argument.

### <a id="VM_Models_Pre_ILinkContainer_SetDestroyedLink"></a> SetDestroyedLink\(\)

Called when object destroyed.

```csharp
void SetDestroyedLink()
```

### <a id="VM_Models_Pre_ILinkContainer_SetModifiedAllLink"></a> SetModifiedAllLink\(\)

Called when all object modified.

```csharp
void SetModifiedAllLink()
```

### <a id="VM_Models_Pre_ILinkContainer_SetModifiedLink"></a> SetModifiedLink\(\)

Called when object modified.

```csharp
void SetModifiedLink()
```

### <a id="VM_Models_Pre_ILinkContainer_SkipModifiedEvent"></a> SkipModifiedEvent\(\)

Skip Modified event for undo/redo.

```csharp
bool SkipModifiedEvent()
```

#### Returns

 bool

True if succeeded, otherwise false.

