# Class AnalysisLiftOffTurnIn

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The lift-off-turn-in analysis class

```csharp
public class AnalysisLiftOffTurnIn : CorneringBase, IHasInitialVel, IHasLengthUnitType
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[FullCarAnalysisBase](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md) ← 
[CorneringBase](VM.Managed.DAFUL.Car.CorneringBase.md) ← 
[AnalysisLiftOffTurnIn](VM.Managed.DAFUL.Car.AnalysisLiftOffTurnIn.md)

#### Implements

IHasInitialVel, 
IHasLengthUnitType

#### Inherited Members

[CorneringBase.GetTestRigMotionUSUBArgument\(string\[\]\)](VM.Managed.DAFUL.Car.CorneringBase.md\#VM\_Managed\_DAFUL\_Car\_CorneringBase\_GetTestRigMotionUSUBArgument\_System\_String\_\_\_), 
[CorneringBase.EntityDistance](VM.Managed.DAFUL.Car.CorneringBase.md\#VM\_Managed\_DAFUL\_Car\_CorneringBase\_EntityDistance), 
[CorneringBase.DistanceUnitType](VM.Managed.DAFUL.Car.CorneringBase.md\#VM\_Managed\_DAFUL\_Car\_CorneringBase\_DistanceUnitType), 
[CorneringBase.TimeOfSettle](VM.Managed.DAFUL.Car.CorneringBase.md\#VM\_Managed\_DAFUL\_Car\_CorneringBase\_TimeOfSettle), 
[CorneringBase.TurnDirectionType](VM.Managed.DAFUL.Car.CorneringBase.md\#VM\_Managed\_DAFUL\_Car\_CorneringBase\_TurnDirectionType), 
[CorneringBase.InitialVelocityCornering](VM.Managed.DAFUL.Car.CorneringBase.md\#VM\_Managed\_DAFUL\_Car\_CorneringBase\_InitialVelocityCornering), 
[FullCarAnalysisBase.IsQuasiStaticStraightLineSetup](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisBase\_IsQuasiStaticStraightLineSetup), 
[FullCarAnalysisBase.RoadFile](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisBase\_RoadFile), 
[FullCarAnalysisBase.GearPositionType](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisBase\_GearPositionType), 
[FullCarAnalysisBase.TireRadiusPosition](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisBase\_TireRadiusPosition), 
[AnalysisBase.m\_pLnkContainer](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_m\_pLnkContainer), 
[AnalysisBase.SetModified\(\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_SetModified), 
[AnalysisBase.GetTestRigMotionUSUBArgument\(string\[\]\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetTestRigMotionUSUBArgument\_System\_String\_\_\_), 
[AnalysisBase.GetConvertUnit\(LengthUnitType\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetConvertUnit\_VM\_Models\_Pre\_LengthUnitType\_), 
[AnalysisBase.GetGravity\(\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetGravity), 
[AnalysisBase.GetConvertUnit\(VelocityUnitType\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetConvertUnit\_VM\_Managed\_DAFUL\_Car\_Analysis\_VelocityUnitType\_), 
[AnalysisBase.GetConvertUnit\(AccelerationUnitType\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetConvertUnit\_VM\_Managed\_DAFUL\_Car\_Analysis\_AccelerationUnitType\_), 
[AnalysisBase.IsSim](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_IsSim)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### AnalysisLiftOffTurnIn\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisLiftOffTurnIn" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisLiftOffTurnIn()
```

### AnalysisLiftOffTurnIn\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisLiftOffTurnIn" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisLiftOffTurnIn(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### DelayOfClutch

Gets or sets the clutch delay.

```csharp
public double DelayOfClutch { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DelayOfSteering

Gets or sets the steering delay.

```csharp
public double DelayOfSteering { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DelayOfThrottle

Gets or sets the throttle delay.

```csharp
public double DelayOfThrottle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### InitialVelocityCornering

Gets or sets the initial velocity.

```csharp
public override double InitialVelocityCornering { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### IsDisengageClutchDuringLiftOff

Gets or sets a value indicating whether [disengage clutch during lift off].

```csharp
public bool IsDisengageClutchDuringLiftOff { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LateralAcc

Gets or sets the lateral acceleration.

```csharp
public double LateralAcc { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### RampOfSteering

Gets or sets the steering ramp.

```csharp
public double RampOfSteering { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### StepDurationOfClutch

Gets or sets the duration of the clutch step.

```csharp
public double StepDurationOfClutch { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### StepDurationOfThrottle

Gets or sets the duration of the throttle step.

```csharp
public double StepDurationOfThrottle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### TireRadiusPosition

Gets the tire radius position.

```csharp
public override int TireRadiusPosition { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TurnRadius

Gets or sets the turn radius.

```csharp
public double TurnRadius { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### UnitOfLength

Gets or sets the length unit.

```csharp
public LengthUnitType UnitOfLength { get; set; }
```

#### Property Value

 LengthUnitType

## Methods

### GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The parameter array.


