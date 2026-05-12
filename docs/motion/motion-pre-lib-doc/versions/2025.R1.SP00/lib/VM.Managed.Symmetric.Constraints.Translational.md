#  Class Translational

Namespace: [VM.Managed.Symmetric.Constraints](VM.Managed.Symmetric.Constraints.md)  
Assembly: VMSymCB.dll  

```csharp
public class Translational : Constraint<Translational, PropertyTranslational>, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<Translational\> ← 
Connector<Translational, PropertyTranslational\> ← 
[Constraint<Translational, PropertyTranslational\>](VM.Managed.Symmetric.Constraints.Constraint\-2.md) ← 
[Translational](VM.Managed.Symmetric.Constraints.Translational.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

[Constraint<Translational, PropertyTranslational\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.Constraints.Constraint\-2.md\#VM\_Managed\_Symmetric\_Constraints\_Constraint\_2\_Update\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_), 
Connector<Translational, PropertyTranslational\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Translational\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Translational\>.Initialize\(ISymmetricManager\), 
Named<Translational\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<Translational\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Constraints_Translational__ctor"></a> Translational\(\)

```csharp
public Translational()
```

## Methods

### <a id="VM_Managed_Symmetric_Constraints_Translational_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

### <a id="VM_Managed_Symmetric_Constraints_Translational_UpdateProperty_VM_Managed_DAFUL_Constraints_PropertyTranslational_VM_Managed_DAFUL_Constraints_PropertyTranslational_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> UpdateProperty\(PropertyTranslational, PropertyTranslational, SymmetricType, Plane, Document\)

```csharp
public static void UpdateProperty(PropertyTranslational toolProperty, PropertyTranslational targetProperty, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`toolProperty` PropertyTranslational

`targetProperty` PropertyTranslational

`sym_type` SymmetricType

`sym_plane` Plane

`doc` Document

