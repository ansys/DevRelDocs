# Interface IHasLink

Namespace: [VM.Managed.Collections](VM.Managed.Collections.md)  
Assembly: VMAppCore.dll  

```csharp
public interface IHasLink
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### GetLink\(ICollection<ILink\>\)

```csharp
void GetLink(ICollection<ILink> colLinks)
```

#### Parameters

`colLinks` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[ILink](VM.Managed.ILink.md)\>

### RemoveLink\(ILink\)

Remove specific link from this object.

```csharp
bool RemoveLink(ILink link)
```

#### Parameters

`link` [ILink](VM.Managed.ILink.md)

The link to remove.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true when need to erase this object, otherwise false.


