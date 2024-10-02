#  Class Marker

Namespace: [VM.Managed.Symmetric](VM.Managed.Symmetric.md)  
Assembly: VMSymBase.dll  

```csharp
public class Marker : Named<Marker>, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Named<Marker\>](VM.Managed.Symmetric.Named\-1.md) ← 
[Marker](VM.Managed.Symmetric.Marker.md)

#### Derived

[CenterMarker](VM.Managed.Symmetric.CenterMarker.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

[Named<Marker\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.Named\-1.md\#VM\_Managed\_Symmetric\_Named\_1\_Update\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_), 
[Named<Marker\>.Initialize\(ISymmetricManager\)](VM.Managed.Symmetric.Named\-1.md\#VM\_Managed\_Symmetric\_Named\_1\_Initialize\_VM\_Managed\_Symmetric\_ISymmetricManager\_), 
[Named<Marker\>.FindObject\(string, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.Named\-1.md\#VM\_Managed\_Symmetric\_Named\_1\_FindObject\_System\_String\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_), 
[Named<Marker\>.SymmetricManager](VM.Managed.Symmetric.Named\-1.md\#VM\_Managed\_Symmetric\_Named\_1\_SymmetricManager)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Marker__ctor"></a> Marker\(\)

```csharp
public Marker()
```

## Methods

### <a id="VM_Managed_Symmetric_Marker_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

Updates the symmetric objects.

```csharp
public override bool Update(ObjectBase tool, ObjectBase target, SymmetricType sym_type, Plane sym_plane, Document doc)
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

### <a id="VM_Managed_Symmetric_Marker_UpdateMarker_VM_Managed_DAFUL_Marker__VM_Managed_DAFUL_Marker__VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> UpdateMarker\(ref Marker, ref Marker, SymmetricType, Plane, Document\)

```csharp
public bool UpdateMarker(ref Marker m_tool, ref Marker m_target, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`m_tool` Marker

`m_target` Marker

`sym_type` SymmetricType

`sym_plane` Plane

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Symmetric_Marker_UpdateToNonSymName_VM_Managed_ObjectBase__VM_Managed_ObjectBase__"></a> UpdateToNonSymName\(ref ObjectBase, ref ObjectBase\)

```csharp
public bool UpdateToNonSymName(ref ObjectBase tool, ref ObjectBase target)
```

#### Parameters

`tool` ObjectBase

`target` ObjectBase

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Symmetric_Marker_UpdateToSymName_VM_Managed_ObjectBase__VM_Managed_ObjectBase__VM_Managed_SymmetricType_"></a> UpdateToSymName\(ref ObjectBase, ref ObjectBase, SymmetricType\)

```csharp
public bool UpdateToSymName(ref ObjectBase tool, ref ObjectBase target, SymmetricType baseSymType)
```

#### Parameters

`tool` ObjectBase

`target` ObjectBase

`baseSymType` SymmetricType

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

