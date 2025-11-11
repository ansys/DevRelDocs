# Class IdentifierCollection<TItem\>
<a id="VM_Collections_IdentifierCollection_1"></a>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```csharp
public class IdentifierCollection<TItem> : KeyedCollection<Identifier, TItem> where TItem : IHasID
```

#### Type Parameters

`TItem` 

#### Inheritance

object ← 
Collection<TItem\> ← 
KeyedCollection<Identifier, TItem\> ← 
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

