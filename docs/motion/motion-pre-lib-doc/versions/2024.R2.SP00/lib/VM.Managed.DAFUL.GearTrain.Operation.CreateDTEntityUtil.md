# Class CreateDTEntityUtil

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

```csharp
public static class CreateDTEntityUtil
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CreateDTEntityUtil](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### CreateBearing\(GearTrainDocument, string, BearingCreateInfo\)

```csharp
public static Bearing CreateBearing(this GearTrainDocument gearTrainDocument, string strName, CreateDTEntityUtil.BearingCreateInfo info)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`info` [CreateDTEntityUtil](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.md).[BearingCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.BearingCreateInfo.md)

#### Returns

 Bearing

### CreateCrossHelicalGearset\(GearTrainDocument, string, GearSetCrossHelicalCreateInfo\)

```csharp
public static GearSetCrossHelical CreateCrossHelicalGearset(this GearTrainDocument gearTrainDocument, string strName, CreateDTEntityUtil.GearSetCrossHelicalCreateInfo info)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`info` [CreateDTEntityUtil](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.md).[GearSetCrossHelicalCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.GearSetCrossHelicalCreateInfo.md)

#### Returns

 GearSetCrossHelical

### CreateCustomGearset\(GearTrainDocument, string, GearSetCreateInfo\)

```csharp
public static GearSetCustom CreateCustomGearset(this GearTrainDocument gearTrainDocument, string strName, CreateDTEntityUtil.GearSetCreateInfo info)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`info` [CreateDTEntityUtil](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.md).[GearSetCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.GearSetCreateInfo.md)

#### Returns

 GearSetCustom

### CreateCycloidPinGearset\(GearTrainDocument, string, GearSetCycloidPinCreateInfo\)

```csharp
public static GearSetCycloidPin CreateCycloidPinGearset(this GearTrainDocument gearTrainDocument, string strName, CreateDTEntityUtil.GearSetCycloidPinCreateInfo info)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`info` [CreateDTEntityUtil](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.md).[GearSetCycloidPinCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.GearSetCycloidPinCreateInfo.md)

#### Returns

 GearSetCycloidPin

### CreateGearset\(GearTrainDocument, string, int, GearSetCreateInfo\)

```csharp
public static GearSet CreateGearset(this GearTrainDocument gearTrainDocument, string strName, int nNumGear, CreateDTEntityUtil.GearSetCreateInfo info)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`nNumGear` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`info` [CreateDTEntityUtil](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.md).[GearSetCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.GearSetCreateInfo.md)

#### Returns

 GearSet

### CreateInternalGearset\(GearTrainDocument, string, GearSetCreateInfo\)

```csharp
public static GearSetInternal CreateInternalGearset(this GearTrainDocument gearTrainDocument, string strName, CreateDTEntityUtil.GearSetCreateInfo info)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`info` [CreateDTEntityUtil](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.md).[GearSetCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.GearSetCreateInfo.md)

#### Returns

 GearSetInternal

### CreatePlanetaryDPGearset\(GearTrainDocument, string, int, GearSetPlanetaryDPCreateInfo\)

```csharp
public static GearSetPlanetaryDP CreatePlanetaryDPGearset(this GearTrainDocument gearTrainDocument, string strName, int nNumPinionGear, CreateDTEntityUtil.GearSetPlanetaryDPCreateInfo info)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`nNumPinionGear` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`info` [CreateDTEntityUtil](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.md).[GearSetPlanetaryDPCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.GearSetPlanetaryDPCreateInfo.md)

#### Returns

 GearSetPlanetaryDP

### CreatePlanetaryGearset\(GearTrainDocument, string, int, GearSetCreateInfo\)

```csharp
public static GearSetPlanetary CreatePlanetaryGearset(this GearTrainDocument gearTrainDocument, string strName, int nNumPinionGear, CreateDTEntityUtil.GearSetCreateInfo info)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`nNumPinionGear` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`info` [CreateDTEntityUtil](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.md).[GearSetCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.GearSetCreateInfo.md)

#### Returns

 GearSetPlanetary

### CreateRackAndPinionGearset\(GearTrainDocument, string, GearSetRackAndPinionCreateInfo\)

```csharp
public static GearSetRackAndPinion CreateRackAndPinionGearset(this GearTrainDocument gearTrainDocument, string strName, CreateDTEntityUtil.GearSetRackAndPinionCreateInfo info)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`info` [CreateDTEntityUtil](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.md).[GearSetRackAndPinionCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.GearSetRackAndPinionCreateInfo.md)

#### Returns

 GearSetRackAndPinion

### CreateSimpleShaftset\(GearTrainDocument, string, Vector, Vector, double, double, int\)

```csharp
public static ShaftSet CreateSimpleShaftset(this GearTrainDocument gearTrainDocument, string strName, Vector position, Vector rotateAxis, double dLength, double dDiameter, int nNumSection)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`position` Vector

`rotateAxis` Vector

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dDiameter` [double](https://learn.microsoft.com/dotnet/api/system.double)

`nNumSection` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 ShaftSet

### CreateSlidingBearing\(GearTrainDocument, string, SlidingBearingCreateInfo\)

```csharp
public static SlidingBearing CreateSlidingBearing(this GearTrainDocument gearTrainDocument, string strName, CreateDTEntityUtil.SlidingBearingCreateInfo info)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`info` [CreateDTEntityUtil](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.md).[SlidingBearingCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.SlidingBearingCreateInfo.md)

#### Returns

 SlidingBearing

### CreateStiffnessBearing\(GearTrainDocument, string, StiffnessBearingCreateInfo\)

```csharp
public static Bearing CreateStiffnessBearing(this GearTrainDocument gearTrainDocument, string strName, CreateDTEntityUtil.StiffnessBearingCreateInfo info)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`info` [CreateDTEntityUtil](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.md).[StiffnessBearingCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.StiffnessBearingCreateInfo.md)

#### Returns

 Bearing

### CreateWormAndWormWheelGearset\(GearTrainDocument, string, GearSetWormAndWormWheelCreateInfo\)

```csharp
public static GearSetWormAndWormWheel CreateWormAndWormWheelGearset(this GearTrainDocument gearTrainDocument, string strName, CreateDTEntityUtil.GearSetWormAndWormWheelCreateInfo info)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`info` [CreateDTEntityUtil](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.md).[GearSetWormAndWormWheelCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.GearSetWormAndWormWheelCreateInfo.md)

#### Returns

 GearSetWormAndWormWheel

### OpenHiddenDocument\(object\)

```csharp
public static Document3D OpenHiddenDocument(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 Document3D


