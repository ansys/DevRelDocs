# Interface ILinkContainer

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

### ClearChildInfoBeforeDeserialize

Gets a value indicating whether [clear child info before deserialize].

```csharp
bool ClearChildInfoBeforeDeserialize { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### ClearLinkBeforeDeserialize\(\)

Disconnect the link relation.

```csharp
void ClearLinkBeforeDeserialize()
```

### ClearLinkBeforeSwap\(\)

Disconnect the link relation for undo/redo.

```csharp
void ClearLinkBeforeSwap()
```

### GetChilds\(HashSet<ILinkContainer\>\)

Get child objects.

```csharp
void GetChilds(HashSet<ILinkContainer> lstObjs)
```

#### Parameters

`lstObjs` [HashSet](https://learn.microsoft.com/dotnet/api/system.collections.generic.hashset\-1)<[ILinkContainer](VM.Models.Pre.ILinkContainer.md)\>

The object list.

### GetFirstDesignEntities\(\)

Get first design entities.

```csharp
IEnumerable<IObject> GetFirstDesignEntities()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IObject](VM.Models.Pre.IObject.md)\>

The collection of IObject&gt;

### OnReserved\(object, object, EventArgs\)

Called after reserve linked object.

```csharp
void OnReserved(object reserved, object objNotifier, EventArgs args)
```

#### Parameters

`reserved` [object](https://learn.microsoft.com/dotnet/api/system.object)

The reserved object.

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The notifier object.

`args` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

The event argument.

### SetDestroyedLink\(\)

Called when object destroyed.

```csharp
void SetDestroyedLink()
```

### SetModifiedAllLink\(\)

Called when all object modified.

```csharp
void SetModifiedAllLink()
```

### SetModifiedLink\(\)

Called when object modified.

```csharp
void SetModifiedLink()
```

### SkipModifiedEvent\(\)

Skip Modified event for undo/redo.

```csharp
bool SkipModifiedEvent()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

True if succeeded, otherwise false.


