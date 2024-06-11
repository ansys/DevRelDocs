# Class CreateForce

Namespace: [VM.Managed.DAFUL.Operation.Util](VM.Managed.DAFUL.Operation.Util.md)  
Assembly: VMOpCore.dll  

The utility class for the forces creation.

```csharp
public class CreateForce
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CreateForce](VM.Managed.DAFUL.Operation.Util.CreateForce.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### CreateForce\(\)

```csharp
public CreateForce()
```

## Methods

### CreateRScalar\(Document3D, IConnectable, IConnectable, PointBase, PointBase, string\)

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

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string prefix.

#### Returns

 RScalar

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

### CreateRScalar\(Document3D, IConnectable, IConnectable, PointBase, DirectionBase, string\)

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

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string prefix.

#### Returns

 RScalar

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

### CreateRScalar\(Document3D, IObjectBase, IObjectBase, PointBase, DirectionBase, string, Function, bool\)

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

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string prefix.

`function` Function

`getNewEntityName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 RScalar

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

### CreateRSpringDamper\(Document3D, ObjectBase, string\)

Create the rotational spring damper force.

```csharp
public static RSpringDamper CreateRSpringDamper(Document3D activeDocument, ObjectBase joint, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`joint` ObjectBase

The object that IRSpringDamperComponent.

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The spring force prefix name.

#### Returns

 RSpringDamper

The new rotational spring damper force.

### CreateTScalar\(Document3D, IConnectable, IConnectable, PointBase, PointBase, string\)

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

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The scalar force prefix name.

#### Returns

 TScalar

The new translational sclar force.

### CreateTScalar\(Document3D, IConnectable, IConnectable, PointBase, DirectionBase, string\)

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

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The scalar force prefix name.

#### Returns

 TScalar

The new translational sclar force.

### CreateTSpringDamper\(Document3D, IConnectable, IConnectable, PointBase, PointBase, string\)

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

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The spring force prefix name.

#### Returns

 TSpringDamper

The new translational spring damper force.

### CreateVector\(Document, string, IConnectable, IConnectable, PointBase, PointBase\)

Creates the vector.

```csharp
public static Vector CreateVector(Document document, string name, IConnectable baseBody, IConnectable actionBody, PointBase basePosi, PointBase actionPosi)
```

#### Parameters

`document` Document

The active document.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

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

 Vector

### CreateVector\(Document, string, IConnectable, IConnectable, TMatrix, TMatrix, bool\)

Creates the vector.

```csharp
public static Vector CreateVector(Document document, string name, IConnectable baseBody, IConnectable actionBody, TMatrix baseTransform, TMatrix actionTransform, bool addToDocument = true)
```

#### Parameters

`document` Document

The active document.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

`baseBody` IConnectable

The base body.

`actionBody` IConnectable

The action body.

`baseTransform` TMatrix

The base posi.

`actionTransform` TMatrix

The action posi.

`addToDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for add created element to document.

#### Returns

 Vector

### CreateVector\(Document, string, IConnectable, IConnectable, PointBase, PointBase, OrientationBase, OrientationBase, IMarker\)

Creates the vector.

```csharp
public static Vector CreateVector(Document document, string name, IConnectable baseBody, IConnectable actionBody, PointBase basePosi, PointBase actionPosi, OrientationBase baseOri, OrientationBase actionOri, IMarker markerReference)
```

#### Parameters

`document` Document

The active document.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

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

 Vector


