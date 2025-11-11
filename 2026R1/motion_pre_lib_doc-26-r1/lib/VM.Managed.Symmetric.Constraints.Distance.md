# Class Distance
<a id="VM_Managed_Symmetric_Constraints_Distance"></a>

Namespace: [VM.Managed.Symmetric.Constraints](VM.Managed.Symmetric.Constraints.md)  
Assembly: VMSymCP.dll  

```csharp
public class Distance : Constraint<Distance, PropertyDistance>, ISymmetricUpdater
```

#### Inheritance

object ← 
[Named<Distance\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Named.cs) ← 
[Connector<Distance, PropertyDistance\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Connector.cs) ← 
[Constraint<Distance, PropertyDistance\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymCB/Constraint.cs) ← 
[Distance](VM.Managed.Symmetric.Constraints.Distance.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

[Constraint<Distance, PropertyDistance\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymCB/Constraint.cs), 
[Connector<Distance, PropertyDistance\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Connector.cs), 
[Named<Distance\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Named.cs), 
[Named<Distance\>.Initialize\(ISymmetricManager\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Named.cs), 
[Named<Distance\>.FindObject\(string, SymmetricType, Plane, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Named.cs), 
[Named<Distance\>.SymmetricManager](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Named.cs)

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

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Symmetric_Constraints_Distance_UpdateProperty_VM_Managed_DAFUL_Constraints_PropertyDistance_VM_Managed_DAFUL_Constraints_PropertyDistance_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> UpdateProperty\(PropertyDistance, PropertyDistance, SymmetricType, Plane, Document\)

```csharp
public static bool UpdateProperty(PropertyDistance toolProperty, PropertyDistance targetProperty, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`toolProperty` [PropertyDistance](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCP/Distance.cs)

`targetProperty` [PropertyDistance](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCP/Distance.cs)

`sym_type` SymmetricType

`sym_plane` Plane

`doc` Document

#### Returns

 bool

