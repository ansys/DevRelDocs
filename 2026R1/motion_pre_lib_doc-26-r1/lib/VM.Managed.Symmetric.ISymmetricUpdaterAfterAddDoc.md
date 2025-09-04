#  Interface ISymmetricUpdaterAfterAddDoc

Namespace: [VM.Managed.Symmetric](VM.Managed.Symmetric.md)  
Assembly: VMAppCore.dll  

This interface is to represent the symmetric updater.

```csharp
public interface ISymmetricUpdaterAfterAddDoc
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_Symmetric_ISymmetricUpdaterAfterAddDoc_UpdateAfterAddDoc_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> UpdateAfterAddDoc\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

Updates the symmetric objects after [add document].

```csharp
void UpdateAfterAddDoc(ObjectBase tool, ObjectBase target, SymmetricType sym_type, Plane sym_plane, Document docOwner)
```

#### Parameters

`tool` [ObjectBase](VM.Managed.ObjectBase.md)

The tool object.

`target` [ObjectBase](VM.Managed.ObjectBase.md)

The target object.

`sym_type` [SymmetricType](VM.Managed.SymmetricType.md)

Specifies type of symmetric.

`sym_plane` Plane

Plane of symmetric.

`docOwner` [Document](VM.Managed.Document.md)

update document.

