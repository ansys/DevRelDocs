#  Class EHDBearingUtil

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

```csharp
public static class EHDBearingUtil
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EHDBearingUtil](VM.Managed.DAFUL.GearTrain.Operation.EHDBearingUtil.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_EHDBearingUtil_CreateEHDBearing_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_PointBase_VM_Managed_DirectionBase_VM_Managed_DirectionBase_VM_Managed_PointBase_VM_Managed_DirectionBase_VM_Managed_DirectionBase_System_Double_System_Double_System_Double_"></a> CreateEHDBearing\(GearTrainDocument, string, ObjectBase, ObjectBase, PointBase, DirectionBase, DirectionBase, PointBase, DirectionBase, DirectionBase, double, double, double\)

```csharp
public static EHDBearing CreateEHDBearing(this GearTrainDocument gearTrainDocument, string strName, ObjectBase baseGeometry, ObjectBase actionGeometry, PointBase basePosition, DirectionBase baseZAxis, DirectionBase baseXAxis, PointBase actionPosition, DirectionBase actionZAxis, DirectionBase actionXAxis, double dBearingRadius, double dJournalRadius, double dWidth)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`baseGeometry` ObjectBase

`actionGeometry` ObjectBase

`basePosition` PointBase

`baseZAxis` DirectionBase

`baseXAxis` DirectionBase

`actionPosition` PointBase

`actionZAxis` DirectionBase

`actionXAxis` DirectionBase

`dBearingRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dJournalRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 EHDBearing

### <a id="VM_Managed_DAFUL_GearTrain_Operation_EHDBearingUtil_CreateEHDBearing_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_PointBase_VM_Managed_DirectionBase_VM_Managed_DirectionBase_System_Double_System_Double_System_Double_"></a> CreateEHDBearing\(GearTrainDocument, string, ObjectBase, ObjectBase, PointBase, DirectionBase, DirectionBase, double, double, double\)

```csharp
public static EHDBearing CreateEHDBearing(this GearTrainDocument gearTrainDocument, string strName, ObjectBase baseGeometry, ObjectBase actionGeometry, PointBase position, DirectionBase zAxis, DirectionBase xAxis, double dBearingRadius, double dJournalRadius, double dWidth)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`baseGeometry` ObjectBase

`actionGeometry` ObjectBase

`position` PointBase

`zAxis` DirectionBase

`xAxis` DirectionBase

`dBearingRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dJournalRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 EHDBearing

