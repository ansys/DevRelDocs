# Class AnalysisFourPostVibrationInfo

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDFullCar.dll  

This struct is to represent the analysis information.

```csharp
public class AnalysisFourPostVibrationInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisFourPostVibrationInfo](VM.Managed.DAFUL.Car.AnalysisFourPostVibrationInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### AnalysisFourPostVibrationInfo\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisFourPostVibrationInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisFourPostVibrationInfo()
```

## Properties

### ActuationType

Gets or sets the type of the actuation.

```csharp
public ActuationType ActuationType { get; set; }
```

#### Property Value

 ActuationType

### FrontLeftActuator

Gets or sets the front left actuator.

```csharp
public ActuatorInfo FrontLeftActuator { get; set; }
```

#### Property Value

 [ActuatorInfo](VM.Managed.DAFUL.Car.ActuatorInfo.md)

### FrontRightActuator

Gets or sets the front right actuator.

```csharp
public ActuatorInfo FrontRightActuator { get; set; }
```

#### Property Value

 [ActuatorInfo](VM.Managed.DAFUL.Car.ActuatorInfo.md)

### InputDirection

Gets or sets the input direction.

```csharp
public VibrationInputInputDirection InputDirection { get; set; }
```

#### Property Value

 VibrationInputInputDirection

### InputLocation

Gets or sets the input location.

```csharp
public VibrationInputLocation InputLocation { get; set; }
```

#### Property Value

 VibrationInputLocation

### RearLeftActuator

Gets or sets the rear left actuator.

```csharp
public ActuatorInfo RearLeftActuator { get; set; }
```

#### Property Value

 [ActuatorInfo](VM.Managed.DAFUL.Car.ActuatorInfo.md)

### RearRightActuator

Gets or sets the rear right actuator.

```csharp
public ActuatorInfo RearRightActuator { get; set; }
```

#### Property Value

 [ActuatorInfo](VM.Managed.DAFUL.Car.ActuatorInfo.md)


