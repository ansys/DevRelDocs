# Class TScalar
<a id="VM_Managed_Symmetric_Force_TScalar"></a>

Namespace: [VM.Managed.Symmetric.Force](VM.Managed.Symmetric.Force.md)  
Assembly: VMSymFP.dll  

```csharp
public class TScalar : Force<TScalar, PropertyTScalar>, ISymmetricUpdater
```

#### Inheritance

object ← 
[Named<TScalar\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Named.cs) ← 
[Connector<TScalar, PropertyTScalar\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Connector.cs) ← 
[Force<TScalar, PropertyTScalar\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymFB/Force.cs) ← 
[TScalar](VM.Managed.Symmetric.Force.TScalar.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

[Force<TScalar, PropertyTScalar\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymFB/Force.cs), 
[Connector<TScalar, PropertyTScalar\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Connector.cs), 
[Named<TScalar\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Named.cs), 
[Named<TScalar\>.Initialize\(ISymmetricManager\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Named.cs), 
[Named<TScalar\>.FindObject\(string, SymmetricType, Plane, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Named.cs), 
[Named<TScalar\>.SymmetricManager](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/Named.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Force_TScalar__ctor"></a> TScalar\(\)

```csharp
public TScalar()
```

## Methods

### <a id="VM_Managed_Symmetric_Force_TScalar_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

