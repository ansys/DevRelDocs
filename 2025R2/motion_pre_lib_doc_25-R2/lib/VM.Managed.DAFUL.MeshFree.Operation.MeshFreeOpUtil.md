# <a id="VM_Managed_DAFUL_MeshFree_Operation_MeshFreeOpUtil"></a> Class MeshFreeOpUtil

Namespace: [VM.Managed.DAFUL.MeshFree.Operation](VM.Managed.DAFUL.MeshFree.Operation.md)  
Assembly: VMOpMeshFree.dll  

The common utility for MeshFree operation

```csharp
public static class MeshFreeOpUtil
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MeshFreeOpUtil](VM.Managed.DAFUL.MeshFree.Operation.MeshFreeOpUtil.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_MeshFree_Operation_MeshFreeOpUtil_CheckLumpCountOfSolidBodies_VM_Managed_Document_"></a> CheckLumpCountOfSolidBodies\(Document\)

Check whether has only 1 lump for all SolidBodies in document

```csharp
public static bool CheckLumpCountOfSolidBodies(Document doc)
```

#### Parameters

`doc` Document

Document to check SolidBody

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether has only 1 lump for all SolidBodies

### <a id="VM_Managed_DAFUL_MeshFree_Operation_MeshFreeOpUtil_CheckMaterialOfSolidBodies_VM_Managed_Document_"></a> CheckMaterialOfSolidBodies\(Document\)

Check whether set a Material for all SolidBodies in document

```csharp
public static bool CheckMaterialOfSolidBodies(Document doc)
```

#### Parameters

`doc` Document

Document to check SolidBody

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether exist material for all SolidBodies

