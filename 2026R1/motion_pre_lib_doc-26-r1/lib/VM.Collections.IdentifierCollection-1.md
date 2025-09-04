#  Class IdentifierCollection<TItem\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```csharp
public class IdentifierCollection<TItem> : KeyedCollection<Identifier, TItem> where TItem : IHasID
```

#### Type Parameters

`TItem` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Collection<TItem\>](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection\-1) ← 
[KeyedCollection<Identifier, TItem\>](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.keyedcollection\-2) ← 
[IdentifierCollection<TItem\>](VM.Collections.IdentifierCollection\-1.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Collections_IdentifierCollection_1__ctor"></a> IdentifierCollection\(\)

```csharp
public IdentifierCollection()
```

## Methods

### <a id="VM_Collections_IdentifierCollection_1_GetKeyForItem__0_"></a> GetKeyForItem\(TItem\)

```csharp
protected override Identifier GetKeyForItem(TItem item)
```

#### Parameters

`item` TItem

#### Returns

 [Identifier](VM.Identifier.md)

