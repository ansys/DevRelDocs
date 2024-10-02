#  Class AnalysisBrakingInTurn

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The braking-in-turn analysis class

```csharp
public class AnalysisBrakingInTurn : CorneringBase, IHasInitialVel, IHasLengthUnitType
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[FullCarAnalysisBase](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md) ← 
[CorneringBase](VM.Managed.DAFUL.Car.CorneringBase.md) ← 
[AnalysisBrakingInTurn](VM.Managed.DAFUL.Car.AnalysisBrakingInTurn.md)

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

### <a id="VM_Managed_DAFUL_Car_AnalysisBrakingInTurn__ctor"></a> AnalysisBrakingInTurn\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisBrakingInTurn" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisBrakingInTurn()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisBrakingInTurn__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisBrakingInTurn\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisBrakingInTurn" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisBrakingInTurn(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisBrakingInTurn_BrakeDeceler"></a> BrakeDeceler

Gets or sets the brake deceleration.

```csharp
public double BrakeDeceler { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisBrakingInTurn_InitialVelocityCornering"></a> InitialVelocityCornering

Gets or sets the initial velocity.

```csharp
public override double InitialVelocityCornering { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisBrakingInTurn_LateralAcc"></a> LateralAcc

Gets or sets the lateral acceleration.

```csharp
public double LateralAcc { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisBrakingInTurn_MaxBrakeDuration"></a> MaxBrakeDuration

Gets or sets the maximum duration of the brake.

```csharp
public double MaxBrakeDuration { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisBrakingInTurn_SteeringInputType"></a> SteeringInputType

Gets or sets the steering input.

```csharp
public CorneringSteeringInputType SteeringInputType { get; set; }
```

#### Property Value

 [CorneringSteeringInputType](VM.Managed.DAFUL.Car.Analysis.Full.CorneringSteeringInputType.md)

### <a id="VM_Managed_DAFUL_Car_AnalysisBrakingInTurn_TireRadiusPosition"></a> TireRadiusPosition

Gets the tire radius position.

```csharp
public override int TireRadiusPosition { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Car_AnalysisBrakingInTurn_TurnRadius"></a> TurnRadius

Gets or sets the turn radius.

```csharp
public double TurnRadius { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisBrakingInTurn_UnitOfLength"></a> UnitOfLength

Gets or sets the length unit.

```csharp
public LengthUnitType UnitOfLength { get; set; }
```

#### Property Value

 LengthUnitType

## Methods

### <a id="VM_Managed_DAFUL_Car_AnalysisBrakingInTurn_GetTestRigMotionUSUBArgument_System_String___"></a> GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The parameter array.

