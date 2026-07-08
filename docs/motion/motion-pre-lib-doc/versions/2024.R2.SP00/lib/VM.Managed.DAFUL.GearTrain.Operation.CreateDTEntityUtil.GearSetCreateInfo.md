# Class CreateDTEntityUtil.GearSetCreateInfo

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

```csharp
public class CreateDTEntityUtil.GearSetCreateInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CreateDTEntityUtil.GearSetCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.GearSetCreateInfo.md)

#### Derived

[CreateDTEntityUtil.GearSetCrossHelicalCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.GearSetCrossHelicalCreateInfo.md), 
[CreateDTEntityUtil.GearSetCycloidPinCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.GearSetCycloidPinCreateInfo.md), 
[CreateDTEntityUtil.GearSetPlanetaryDPCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.GearSetPlanetaryDPCreateInfo.md), 
[CreateDTEntityUtil.GearSetRackAndPinionCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.GearSetRackAndPinionCreateInfo.md), 
[CreateDTEntityUtil.GearSetWormAndWormWheelCreateInfo](VM.Managed.DAFUL.GearTrain.Operation.CreateDTEntityUtil.GearSetWormAndWormWheelCreateInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### GearSetCreateInfo\(\)

```csharp
public GearSetCreateInfo()
```

## Fields

### Advanced

```csharp
public bool Advanced
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CenterDistance

```csharp
public double[] CenterDistance
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### FaceWidth

```csharp
public double[] FaceWidth
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GearType

```csharp
public BasicInvolute.GearType GearType
```

#### Field Value

 BasicInvolute.GearType

### HelicalAngleDirection

```csharp
public BasicInvolute.HelicalAngleType HelicalAngleDirection
```

#### Field Value

 BasicInvolute.HelicalAngleType

### HelixAngle

```csharp
public double HelixAngle
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### KissSoft

```csharp
public bool KissSoft
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Module

```csharp
public double Module
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Name

```csharp
public string[] Name
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### NumberOfGear

```csharp
public int NumberOfGear
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfTeeth

```csharp
public int[] NumberOfTeeth
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### PasternAngle

```csharp
public double PasternAngle
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### PressureAngle

```csharp
public double PressureAngle
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ProfileMethodType

```csharp
public BasicInvolute.ProfilMethodType ProfileMethodType
```

#### Field Value

 BasicInvolute.ProfilMethodType

### ProfileShift

```csharp
public double[] ProfileShift
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### Reserved

```csharp
public double[] Reserved
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

## Properties

### CenterDistances

```csharp
public string[] CenterDistances { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### FaceWidths

```csharp
public string[] FaceWidths { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### InputArray

```csharp
public string[] InputArray { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### InputArrayForCustom

```csharp
public string[] InputArrayForCustom { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### InputArrayForPlanetary

```csharp
public string[] InputArrayForPlanetary { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### Names

```csharp
public string Names { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### NumberOfTeeths

```csharp
public string[] NumberOfTeeths { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### ProfileShifts

```csharp
public string[] ProfileShifts { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Methods

### InitializeCustom\(\)

```csharp
public void InitializeCustom()
```

### InitializeExternal\(\)

```csharp
public void InitializeExternal()
```

### InitializeInternal\(\)

```csharp
public void InitializeInternal()
```

### InitializePlanetary\(\)

```csharp
public void InitializePlanetary()
```


