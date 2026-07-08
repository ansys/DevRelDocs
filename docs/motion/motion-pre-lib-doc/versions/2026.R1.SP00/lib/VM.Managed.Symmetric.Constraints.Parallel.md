# Class Parallel
<a id="VM_Managed_Symmetric_Constraints_Parallel"></a>

Namespace: [VM.Managed.Symmetric.Constraints](VM.Managed.Symmetric.Constraints.md)  
Assembly: VMSymCP.dll  

```csharp
public class Parallel : Constraint<Parallel, PropertyParallel>, ISymmetricUpdater
```

#### Inheritance

object ← 
[Named<Parallel\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Named.cs) ← 
[Connector<Parallel, PropertyParallel\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Connector.cs) ← 
[Constraint<Parallel, PropertyParallel\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymCB/Constraint.cs) ← 
[Parallel](VM.Managed.Symmetric.Constraints.Parallel.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

[Constraint<Parallel, PropertyParallel\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymCB/Constraint.cs), 
[Connector<Parallel, PropertyParallel\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Connector.cs), 
[Named<Parallel\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Named.cs), 
[Named<Parallel\>.Initialize\(ISymmetricManager\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Named.cs), 
[Named<Parallel\>.FindObject\(string, SymmetricType, Plane, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Named.cs), 
[Named<Parallel\>.SymmetricManager](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Named.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Constraints_Parallel__ctor"></a> Parallel\(\)

```csharp
public Parallel()
```

## Methods

### <a id="VM_Managed_Symmetric_Constraints_Parallel_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

