#  Class MotorEMForceUtil

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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_MotorEMForceUtil_CreateMotorEMForceForAM_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_PointBase_VM_Managed_DirectionBase_VM_Managed_DirectionBase_VM_Managed_ObjectBase_System_String_System_String_System_String_"></a> CreateMotorEMForceForAM\(GearTrainDocument, string, ObjectBase, ObjectBase, PointBase, DirectionBase, DirectionBase, ObjectBase, string, string, string\)

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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_MotorEMForceUtil_CreateMotorEMForceForJMAG_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_PointBase_VM_Managed_DirectionBase_VM_Managed_DirectionBase_VM_Managed_ObjectBase_System_ValueTuple_System_String_System_String_System_Double____"></a> CreateMotorEMForceForJMAG\(GearTrainDocument, string, ObjectBase, ObjectBase, PointBase, DirectionBase, DirectionBase, ObjectBase, \(string, string, double\)\[\]\)

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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_MotorEMForceUtil_CreateMotorEMForceForUNV_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_PointBase_VM_Managed_DirectionBase_VM_Managed_DirectionBase_VM_Managed_ObjectBase_System_ValueTuple_System_String_System_String__System_ValueTuple_System_String_System_String_System_Double____"></a> CreateMotorEMForceForUNV\(GearTrainDocument, string, ObjectBase, ObjectBase, PointBase, DirectionBase, DirectionBase, ObjectBase, \(string, string\), \(string, string, double\)\[\]\)

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

