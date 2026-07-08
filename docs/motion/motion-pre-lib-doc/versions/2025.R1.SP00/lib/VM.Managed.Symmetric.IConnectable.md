#  Class IConnectable

Namespace: [VM.Managed.Symmetric](VM.Managed.Symmetric.md)  
Assembly: VMSymBase.dll  

```csharp
public class IConnectable : ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IConnectable](VM.Managed.Symmetric.IConnectable.md)

#### Implements

ISymmetricUpdater

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_IConnectable__ctor"></a> IConnectable\(\)

```csharp
public IConnectable()
```

## Methods

### <a id="VM_Managed_Symmetric_IConnectable_Initialize_VM_Managed_Symmetric_ISymmetricManager_"></a> Initialize\(ISymmetricManager\)

Initialize the symmetric objects.

```csharp
public virtual bool Initialize(ISymmetricManager Manager)
```

#### Parameters

`Manager` ISymmetricManager

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Symmetric_IConnectable_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

Updates the symmetric objects.

```csharp
public bool Update(ObjectBase tool, ObjectBase target, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`tool` ObjectBase

The reference object.

`target` ObjectBase

The target object.

`sym_type` SymmetricType

Specifies type of symmetric.

`sym_plane` Plane

Plane of symmetric.

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

