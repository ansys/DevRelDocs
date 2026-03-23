# Class MotorEMForceUtil

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

```csharp
public static class MotorEMForceUtil
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MotorEMForceUtil](VM.Managed.DAFUL.GearTrain.Operation.MotorEMForceUtil.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### CreateMotorEMForceForAM\(GearTrainDocument, string, ObjectBase, ObjectBase, PointBase, DirectionBase, DirectionBase, ObjectBase, string, string, string\)

```csharp
public static MotorEMForce CreateMotorEMForceForAM(this GearTrainDocument gearTrainDocument, string strName, ObjectBase Stator, ObjectBase Rotor, PointBase Position, DirectionBase ZAxis, DirectionBase XAxis, ObjectBase ReferenceOfRotational, string ResultFile, string MaxwellGeometryFile, string MaxwellForceFile)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`Stator` ObjectBase

`Rotor` ObjectBase

`Position` PointBase

`ZAxis` DirectionBase

`XAxis` DirectionBase

`ReferenceOfRotational` ObjectBase

`ResultFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

`MaxwellGeometryFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

`MaxwellForceFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 MotorEMForce

### CreateMotorEMForceForJMAG\(GearTrainDocument, string, ObjectBase, ObjectBase, PointBase, DirectionBase, DirectionBase, ObjectBase, \(string, string, double\)\[\]\)

```csharp
public static MotorEMForce CreateMotorEMForceForJMAG(this GearTrainDocument gearTrainDocument, string strName, ObjectBase Stator, ObjectBase Rotor, PointBase Position, DirectionBase ZAxis, DirectionBase XAxis, ObjectBase ReferenceOfRotational, (string, string, double)[] ForceStatorRotorRPMUNVFile)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`Stator` ObjectBase

`Rotor` ObjectBase

`Position` PointBase

`ZAxis` DirectionBase

`XAxis` DirectionBase

`ReferenceOfRotational` ObjectBase

`ForceStatorRotorRPMUNVFile` \([string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string), [double](https://learn.microsoft.com/dotnet/api/system.double)\)\[\]

#### Returns

 MotorEMForce

### CreateMotorEMForceForUNV\(GearTrainDocument, string, ObjectBase, ObjectBase, PointBase, DirectionBase, DirectionBase, ObjectBase, \(string, string\), \(string, string, double\)\[\]\)

```csharp
public static MotorEMForce CreateMotorEMForceForUNV(this GearTrainDocument gearTrainDocument, string strName, ObjectBase Stator, ObjectBase Rotor, PointBase Position, DirectionBase ZAxis, DirectionBase XAxis, ObjectBase ReferenceOfRotational, (string, string) GeometryStatorRotorUNVFile, (string, string, double)[] ForceStatorRotorRPMUNVFile)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`Stator` ObjectBase

`Rotor` ObjectBase

`Position` PointBase

`ZAxis` DirectionBase

`XAxis` DirectionBase

`ReferenceOfRotational` ObjectBase

`GeometryStatorRotorUNVFile` \([string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\)

`ForceStatorRotorRPMUNVFile` \([string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string), [double](https://learn.microsoft.com/dotnet/api/system.double)\)\[\]

#### Returns

 MotorEMForce


