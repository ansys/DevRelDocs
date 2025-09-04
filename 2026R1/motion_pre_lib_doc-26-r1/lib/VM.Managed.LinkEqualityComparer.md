#  Class LinkEqualityComparer

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to compare Link key.

```csharp
public class LinkEqualityComparer
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LinkEqualityComparer](VM.Managed.LinkEqualityComparer.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_LinkEqualityComparer__ctor"></a> LinkEqualityComparer\(\)

```csharp
public LinkEqualityComparer()
```

## Methods

### <a id="VM_Managed_LinkEqualityComparer_Equals_VM_Managed_ILink_VM_Managed_ILink_"></a> Equals\(ILink, ILink\)

Compare two Link objects.

```csharp
public virtual bool Equals(ILink x, ILink y)
```

#### Parameters

`x` [ILink](VM.Managed.ILink.md)

The first comparable object.

`y` [ILink](VM.Managed.ILink.md)

The second comparable object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_LinkEqualityComparer_GetHashCode_VM_Managed_ILink_"></a> GetHashCode\(ILink\)

Get hash code of Link object.

```csharp
public virtual int GetHashCode(ILink iLink)
```

#### Parameters

`iLink` [ILink](VM.Managed.ILink.md)

The object to get hash code.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

