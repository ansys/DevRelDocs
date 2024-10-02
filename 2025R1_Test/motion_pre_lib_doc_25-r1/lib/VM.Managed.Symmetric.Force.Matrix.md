#  Class Matrix

Namespace: [VM.Managed.Symmetric.Force](VM.Managed.Symmetric.Force.md)  
Assembly: VMSymFP.dll  

```csharp
public class Matrix : Force<Matrix, PropertyMatrix>, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<Matrix\> ← 
Connector<Matrix, PropertyMatrix\> ← 
Force<Matrix, PropertyMatrix\> ← 
[Matrix](VM.Managed.Symmetric.Force.Matrix.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

Force<Matrix, PropertyMatrix\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Connector<Matrix, PropertyMatrix\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Matrix\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Matrix\>.Initialize\(ISymmetricManager\), 
Named<Matrix\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<Matrix\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Force_Matrix__ctor"></a> Matrix\(\)

```csharp
public Matrix()
```

## Methods

### <a id="VM_Managed_Symmetric_Force_Matrix_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

### <a id="VM_Managed_Symmetric_Force_Matrix_UpdateProperty_VM_Managed_DAFUL_Force_PropertyMatrix_VM_Managed_DAFUL_Force_PropertyMatrix_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> UpdateProperty\(PropertyMatrix, PropertyMatrix, SymmetricType, Plane, Document\)

```csharp
public static bool UpdateProperty(PropertyMatrix toolProperty, PropertyMatrix targetProperty, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`toolProperty` PropertyMatrix

`targetProperty` PropertyMatrix

`sym_type` SymmetricType

`sym_plane` Plane

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

