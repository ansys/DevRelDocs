#  Interface IGeometryContainer

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This interface is to represent the geometry container.

```csharp
public interface IGeometryContainer
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_CAD_IGeometryContainer_GetGeometries_System_Collections_Generic_IList_VM_Managed_ObjectBase__"></a> GetGeometries\(IList<ObjectBase\>\)

```csharp
void GetGeometries(IList<ObjectBase> lstObj)
```

#### Parameters

`lstObj` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### <a id="VM_Managed_CAD_IGeometryContainer_IsContain_System_UIntPtr_"></a> IsContain\(UIntPtr\)

Determines whether the specified geom_key is contain.

```csharp
bool IsContain(UIntPtr geom_key)
```

#### Parameters

`geom_key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The body key.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified geom_key is contain; otherwise, <code>false</code>.

