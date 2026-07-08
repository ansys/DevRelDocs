# Class CreateRBE
<a id="VM_Managed_DAFUL_MeshFree_Operation_CreateRBE"></a>

Namespace: [VM.Managed.DAFUL.MeshFree.Operation](VM.Managed.DAFUL.MeshFree.Operation.md)  
Assembly: VMOpMeshFree.dll  

Create RBE

```csharp
public class CreateRBE
```

#### Inheritance

object ← 
[CreateRBE](VM.Managed.DAFUL.MeshFree.Operation.CreateRBE.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_MeshFree_Operation_CreateRBE__ctor"></a> CreateRBE\(\)

```csharp
public CreateRBE()
```

## Methods

### <a id="VM_Managed_DAFUL_MeshFree_Operation_CreateRBE_CreateRigidBodyElementSingle_VM_Managed_Document3D_VM_Managed_DAFUL_SetFace_VM_Managed_PointBase_System_String_"></a> CreateRigidBodyElementSingle\(Document3D, SetFace, PointBase, string\)

Create single rigid body element

```csharp
public static RigidBodyElementSingle CreateRigidBodyElementSingle(Document3D activeDocument, SetFace setFace, PointBase point, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The document

`setFace` [SetFace](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SetFace.cs)

The setface

`point` PointBase

The point

`strPrefixName` string

The prefix name

#### Returns

 [RigidBodyElementSingle](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDMeshFree/RigidBodyElement.cs)

