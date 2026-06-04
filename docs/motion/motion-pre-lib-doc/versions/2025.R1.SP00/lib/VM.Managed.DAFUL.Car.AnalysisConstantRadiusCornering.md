#  Class AnalysisConstantRadiusCornering

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The constant radius cornering analysis class

```csharp
public class AnalysisConstantRadiusCornering : CorneringBase, IHasInitialVel, IHasLengthUnitType
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[FullCarAnalysisBase](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md) ← 
[CorneringBase](VM.Managed.DAFUL.Car.CorneringBase.md) ← 
[AnalysisConstantRadiusCornering](VM.Managed.DAFUL.Car.AnalysisConstantRadiusCornering.md)

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

### <a id="VM_Managed_DAFUL_Car_AnalysisConstantRadiusCornering__ctor"></a> AnalysisConstantRadiusCornering\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisConstantRadiusCornering" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisConstantRadiusCornering()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisConstantRadiusCornering__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisConstantRadiusCornering\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisConstantRadiusCornering" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisConstantRadiusCornering(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisConstantRadiusCornering_AccelerationUnitType"></a> AccelerationUnitType

Gets or sets the acceleration unit.

```csharp
public AccelerationUnitType AccelerationUnitType { get; set; }
```

#### Property Value

 [AccelerationUnitType](VM.Managed.DAFUL.Car.Analysis.AccelerationUnitType.md)

### <a id="VM_Managed_DAFUL_Car_AnalysisConstantRadiusCornering_ControlType"></a> ControlType

Gets or sets the control.

```csharp
public ControlType ControlType { get; set; }
```

#### Property Value

 [ControlType](VM.Managed.DAFUL.Car.Analysis.Full.ControlType.md)

### <a id="VM_Managed_DAFUL_Car_AnalysisConstantRadiusCornering_DurationManeuver"></a> DurationManeuver

Gets or sets the durationmaneuver.

```csharp
public double DurationManeuver { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisConstantRadiusCornering_FinalAcceleration"></a> FinalAcceleration

Gets or sets the final acceleration.

```csharp
public double FinalAcceleration { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisConstantRadiusCornering_FinalVelocity"></a> FinalVelocity

Gets or sets the final velocity.

```csharp
public double FinalVelocity { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisConstantRadiusCornering_InitialAcceleration"></a> InitialAcceleration

Gets or sets the initial acceleration.

```csharp
public double InitialAcceleration { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisConstantRadiusCornering_InitialVelocity"></a> InitialVelocity

Gets or sets the initial velocity.

```csharp
public double InitialVelocity { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisConstantRadiusCornering_InitialVelocityCornering"></a> InitialVelocityCornering

Gets or sets the initial velocity.

```csharp
public override double InitialVelocityCornering { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisConstantRadiusCornering_IsSiftGears"></a> IsSiftGears

Gets or sets a value indicating whether [sift gears].

```csharp
public bool IsSiftGears { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Car_AnalysisConstantRadiusCornering_TireRadiusPosition"></a> TireRadiusPosition

Gets the tire radius position.

```csharp
public override int TireRadiusPosition { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Car_AnalysisConstantRadiusCornering_TurnRadius"></a> TurnRadius

Gets or sets the turn radius.

```csharp
public double TurnRadius { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisConstantRadiusCornering_UnitOfLength"></a> UnitOfLength

Gets or sets the length unit.

```csharp
public LengthUnitType UnitOfLength { get; set; }
```

#### Property Value

 LengthUnitType

### <a id="VM_Managed_DAFUL_Car_AnalysisConstantRadiusCornering_VelocityUnitType"></a> VelocityUnitType

Gets or sets the velocity unit.

```csharp
public VelocityUnitType VelocityUnitType { get; set; }
```

#### Property Value

 [VelocityUnitType](VM.Managed.DAFUL.Car.Analysis.VelocityUnitType.md)

## Methods

### <a id="VM_Managed_DAFUL_Car_AnalysisConstantRadiusCornering_GetTestRigMotionUSUBArgument_System_String___"></a> GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The parameter array.

