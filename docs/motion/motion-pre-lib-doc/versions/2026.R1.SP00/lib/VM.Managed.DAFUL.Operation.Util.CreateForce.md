# Class CreateForce
<a id="VM_Managed_DAFUL_Operation_Util_CreateForce"></a>

Namespace: [VM.Managed.DAFUL.Operation.Util](VM.Managed.DAFUL.Operation.Util.md)  
Assembly: VMOpCore.dll  

The utility class for the forces creation.

```csharp
public class CreateForce
```

#### Inheritance

object ← 
[CreateForce](VM.Managed.DAFUL.Operation.Util.CreateForce.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Operation_Util_CreateForce__ctor"></a> CreateForce\(\)

```csharp
public CreateForce()
```

## Methods

### <a id="VM_Managed_DAFUL_Operation_Util_CreateForce_CreateRScalar_VM_Managed_Document3D_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_VM_Managed_PointBase_System_String_"></a> CreateRScalar\(Document3D, IConnectable, IConnectable, PointBase, PointBase, string\)

Creates the r scalar.

```csharp
public static RScalar CreateRScalar(Document3D activeDocument, IConnectable baseConnectable, IConnectable actionConnectable, PointBase ptStart, PointBase ptEnd, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`baseConnectable` IConnectable

The base connectable.

`actionConnectable` IConnectable

The action connectable.

`ptStart` PointBase

The pt start.

`ptEnd` PointBase

The pt end.

`strPrefixName` string

Name of the string prefix.

#### Returns

 [RScalar](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFP/RScalar.cs)

#### Exceptions

 Exception

### <a id="VM_Managed_DAFUL_Operation_Util_CreateForce_CreateRScalar_VM_Managed_Document3D_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_VM_Managed_DirectionBase_System_String_"></a> CreateRScalar\(Document3D, IConnectable, IConnectable, PointBase, DirectionBase, string\)

Creates the r scalar.

```csharp
public static RScalar CreateRScalar(Document3D activeDocument, IConnectable baseConnectable, IConnectable actionConnectable, PointBase ptEnd, DirectionBase dirZ, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`baseConnectable` IConnectable

The base connectable.

`actionConnectable` IConnectable

The action connectable.

`ptEnd` PointBase

The pt end.

`dirZ` DirectionBase

The dir z.

`strPrefixName` string

Name of the string prefix.

#### Returns

 [RScalar](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFP/RScalar.cs)

#### Exceptions

 Exception

### <a id="VM_Managed_DAFUL_Operation_Util_CreateForce_CreateRScalar_VM_Managed_Document3D_VM_Models_Pre_IObjectBase_VM_Models_Pre_IObjectBase_VM_Managed_PointBase_VM_Managed_DirectionBase_System_String_VM_Managed_DAFUL_Function_System_Boolean_"></a> CreateRScalar\(Document3D, IObjectBase, IObjectBase, PointBase, DirectionBase, string, Function, bool\)

Creates the r scalar.

```csharp
public static RScalar CreateRScalar(Document3D activeDocument, IObjectBase baseConnectable, IObjectBase actionConnectable, PointBase ptEnd, DirectionBase dirZ, string name, Function function, bool getNewEntityName = false)
```

#### Parameters

`activeDocument` Document3D

The active document.

`baseConnectable` IObjectBase

The base connectable.

`actionConnectable` IObjectBase

The action connectable.

`ptEnd` PointBase

The pt end.

`dirZ` DirectionBase

The dir z.

`name` string

Name of the string prefix.

`function` [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

`getNewEntityName` bool

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 [RScalar](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFP/RScalar.cs)

#### Exceptions

 Exception

### <a id="VM_Managed_DAFUL_Operation_Util_CreateForce_CreateRSpringDamper_VM_Managed_Document3D_VM_Managed_ObjectBase_System_String_"></a> CreateRSpringDamper\(Document3D, ObjectBase, string\)

Create the rotational spring damper force.

```csharp
public static RSpringDamper CreateRSpringDamper(Document3D activeDocument, ObjectBase joint, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`joint` ObjectBase

The object that IRSpringDamperComponent.

`strPrefixName` string

The spring force prefix name.

#### Returns

 [RSpringDamper](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFB/RSpringDamper.cs)

The new rotational spring damper force.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateForce_CreateTScalar_VM_Managed_Document3D_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_VM_Managed_PointBase_System_String_"></a> CreateTScalar\(Document3D, IConnectable, IConnectable, PointBase, PointBase, string\)

Create the translational scalar damper force.

```csharp
public static TScalar CreateTScalar(Document3D activeDocument, IConnectable baseConnectable, IConnectable actionConnectable, PointBase ptStart, PointBase ptEnd, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`baseConnectable` IConnectable

The base connectable.

`actionConnectable` IConnectable

The action connectable.

`ptStart` PointBase

The start location of scalar.

`ptEnd` PointBase

The end location of scalar.

`strPrefixName` string

The scalar force prefix name.

#### Returns

 [TScalar](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFP/TScalar.cs)

The new translational sclar force.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateForce_CreateTScalar_VM_Managed_Document3D_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_VM_Managed_DirectionBase_System_String_"></a> CreateTScalar\(Document3D, IConnectable, IConnectable, PointBase, DirectionBase, string\)

Create the translational scalar damper force.

```csharp
public static TScalar CreateTScalar(Document3D activeDocument, IConnectable baseConnectable, IConnectable actionConnectable, PointBase ptEnd, DirectionBase dirZ, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`baseConnectable` IConnectable

The base connectable.

`actionConnectable` IConnectable

The action connectable.

`ptEnd` PointBase

The end location of scalar.

`dirZ` DirectionBase

The z direction of scalar.

`strPrefixName` string

The scalar force prefix name.

#### Returns

 [TScalar](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFP/TScalar.cs)

The new translational sclar force.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateForce_CreateTSpringDamper_VM_Managed_Document3D_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_VM_Managed_PointBase_System_String_"></a> CreateTSpringDamper\(Document3D, IConnectable, IConnectable, PointBase, PointBase, string\)

Create the translational spring damper force.

```csharp
public static TSpringDamper CreateTSpringDamper(Document3D activeDocument, IConnectable baseConnectable, IConnectable actionConnectable, PointBase ptStart, PointBase ptEnd, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`baseConnectable` IConnectable

The base connectable.

`actionConnectable` IConnectable

The action connectable.

`ptStart` PointBase

The start location of spring.

`ptEnd` PointBase

The end location of spring.

`strPrefixName` string

The spring force prefix name.

#### Returns

 [TSpringDamper](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFB/TSpringDamper.cs)

The new translational spring damper force.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateForce_CreateVector_VM_Managed_Document_System_String_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_VM_Managed_PointBase_"></a> CreateVector\(Document, string, IConnectable, IConnectable, PointBase, PointBase\)

Creates the vector.

```csharp
public static Vector CreateVector(Document document, string name, IConnectable baseBody, IConnectable actionBody, PointBase basePosi, PointBase actionPosi)
```

#### Parameters

`document` Document

The active document.

`name` string

The name.

`baseBody` IConnectable

The base body.

`actionBody` IConnectable

The action body.

`basePosi` PointBase

The base posi.

`actionPosi` PointBase

The action posi.

#### Returns

 [Vector](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFP/Vector.cs)

### <a id="VM_Managed_DAFUL_Operation_Util_CreateForce_CreateVector_VM_Managed_Document_System_String_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_TMatrix_VM_TMatrix_System_Boolean_"></a> CreateVector\(Document, string, IConnectable, IConnectable, TMatrix, TMatrix, bool\)

Creates the vector.

```csharp
public static Vector CreateVector(Document document, string name, IConnectable baseBody, IConnectable actionBody, TMatrix baseTransform, TMatrix actionTransform, bool addToDocument = true)
```

#### Parameters

`document` Document

The active document.

`name` string

The name.

`baseBody` IConnectable

The base body.

`actionBody` IConnectable

The action body.

`baseTransform` TMatrix

The base posi.

`actionTransform` TMatrix

The action posi.

`addToDocument` bool

Flag for add created element to document.

#### Returns

 [Vector](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFP/Vector.cs)

### <a id="VM_Managed_DAFUL_Operation_Util_CreateForce_CreateVector_VM_Managed_Document_System_String_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_VM_Managed_PointBase_VM_Managed_OrientationBase_VM_Managed_OrientationBase_VM_Managed_IMarker_"></a> CreateVector\(Document, string, IConnectable, IConnectable, PointBase, PointBase, OrientationBase, OrientationBase, IMarker\)

Creates the vector.

```csharp
public static Vector CreateVector(Document document, string name, IConnectable baseBody, IConnectable actionBody, PointBase basePosi, PointBase actionPosi, OrientationBase baseOri, OrientationBase actionOri, IMarker markerReference)
```

#### Parameters

`document` Document

The active document.

`name` string

The name.

`baseBody` IConnectable

The base body.

`actionBody` IConnectable

The action body.

`basePosi` PointBase

The base position.

`actionPosi` PointBase

The action position.

`baseOri` OrientationBase

The base orientation.

`actionOri` OrientationBase

The action orientation.

`markerReference` IMarker

The reference marekr.

#### Returns

 [Vector](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFP/Vector.cs)

