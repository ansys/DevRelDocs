#  Class Distance

Namespace: [VM.Managed.Symmetric.Constraints](VM.Managed.Symmetric.Constraints.md)  
Assembly: VMSymCP.dll  

```csharp
public class Distance : Constraint<Distance, PropertyDistance>, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<Distance\> ← 
Connector<Distance, PropertyDistance\> ← 
Constraint<Distance, PropertyDistance\> ← 
[Distance](VM.Managed.Symmetric.Constraints.Distance.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

Constraint<Distance, PropertyDistance\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Connector<Distance, PropertyDistance\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Distance\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Distance\>.Initialize\(ISymmetricManager\), 
Named<Distance\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<Distance\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Constraints_Distance__ctor"></a> Distance\(\)

```csharp
public Distance()
```

## Methods

### <a id="VM_Managed_Symmetric_Constraints_Distance_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

### <a id="VM_Managed_Symmetric_Constraints_Distance_UpdateProperty_VM_Managed_DAFUL_Constraints_PropertyDistance_VM_Managed_DAFUL_Constraints_PropertyDistance_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> UpdateProperty\(PropertyDistance, PropertyDistance, SymmetricType, Plane, Document\)

```csharp
public static bool UpdateProperty(PropertyDistance toolProperty, PropertyDistance targetProperty, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`toolProperty` PropertyDistance

`targetProperty` PropertyDistance

`sym_type` SymmetricType

`sym_plane` Plane

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

