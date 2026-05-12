#  Interface ICunstomLink

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the custom link.

```csharp
public interface ICunstomLink
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_ICunstomLink_GetAllLink_System_Collections_Generic_ICollection_VM_Managed_ILink__System_Collections_Generic_ICollection_VM_Managed_Collections_ILinkCollection__System_Boolean_"></a> GetAllLink\(ICollection<ILink\>, ICollection<ILinkCollection\>, bool\)

```csharp
void GetAllLink(ICollection<ILink> colLinks, ICollection<ILinkCollection> colLinkCollections, bool bIncludeNullLinks)
```

#### Parameters

`colLinks` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[ILink](VM.Managed.ILink.md)\>

`colLinkCollections` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[ILinkCollection](VM.Managed.Collections.ILinkCollection.md)\>

`bIncludeNullLinks` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_ICunstomLink_GetAllLink_System_Collections_Generic_HashSet_VM_Managed_ILink___"></a> GetAllLink\(ref HashSet<ILink\>\)

```csharp
void GetAllLink(ref HashSet<ILink> hs)
```

#### Parameters

`hs` [HashSet](https://learn.microsoft.com/dotnet/api/system.collections.generic.hashset\-1)<[ILink](VM.Managed.ILink.md)\>

