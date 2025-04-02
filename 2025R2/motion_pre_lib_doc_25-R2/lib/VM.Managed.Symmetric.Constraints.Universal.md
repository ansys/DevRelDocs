#  Class Universal

Namespace: [VM.Managed.Symmetric.Constraints](VM.Managed.Symmetric.Constraints.md)  
Assembly: VMSymCP.dll  

```csharp
public class Universal : Constraint<Universal, PropertyUniversal>, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<Universal\> ← 
Connector<Universal, PropertyUniversal\> ← 
Constraint<Universal, PropertyUniversal\> ← 
[Universal](VM.Managed.Symmetric.Constraints.Universal.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

Constraint<Universal, PropertyUniversal\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Connector<Universal, PropertyUniversal\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Universal\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Universal\>.Initialize\(ISymmetricManager\), 
Named<Universal\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<Universal\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Constraints_Universal__ctor"></a> Universal\(\)

```csharp
public Universal()
```

## Methods

### <a id="VM_Managed_Symmetric_Constraints_Universal_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

### <a id="VM_Managed_Symmetric_Constraints_Universal_UpdateProperty_VM_Managed_DAFUL_Constraints_PropertyUniversal_VM_Managed_DAFUL_Constraints_PropertyUniversal_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> UpdateProperty\(PropertyUniversal, PropertyUniversal, SymmetricType, Plane, Document\)

```csharp
public static void UpdateProperty(PropertyUniversal toolProperty, PropertyUniversal targetProperty, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`toolProperty` PropertyUniversal

`targetProperty` PropertyUniversal

`sym_type` SymmetricType

`sym_plane` Plane

`doc` Document

