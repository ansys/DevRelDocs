# Class AnalysisAcceleration
<a id="VM_Managed_DAFUL_Car_AnalysisAcceleration"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The acceleration analysis class

```csharp
public class AnalysisAcceleration : StraightLineBase, IHasInitialVel
```

#### Inheritance

object ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[FullCarAnalysisBase](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md) ← 
[StraightLineBase](VM.Managed.DAFUL.Car.StraightLineBase.md) ← 
[AnalysisAcceleration](VM.Managed.DAFUL.Car.AnalysisAcceleration.md)

#### Implements

IHasInitialVel

#### Inherited Members

[StraightLineBase.GetTestRigMotionUSUBArgument\(string\[\]\)](VM.Managed.DAFUL.Car.StraightLineBase.md\#VM\_Managed\_DAFUL\_Car\_StraightLineBase\_GetTestRigMotionUSUBArgument\_System\_String\_\_\_), 
[StraightLineBase.InitialVelocity](VM.Managed.DAFUL.Car.StraightLineBase.md\#VM\_Managed\_DAFUL\_Car\_StraightLineBase\_InitialVelocity), 
[StraightLineBase.VelocityUnitType](VM.Managed.DAFUL.Car.StraightLineBase.md\#VM\_Managed\_DAFUL\_Car\_StraightLineBase\_VelocityUnitType), 
[StraightLineBase.TimeOfStart](VM.Managed.DAFUL.Car.StraightLineBase.md\#VM\_Managed\_DAFUL\_Car\_StraightLineBase\_TimeOfStart), 
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

### <a id="VM_Managed_DAFUL_Car_AnalysisAcceleration__ctor"></a> AnalysisAcceleration\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisAcceleration" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisAcceleration()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisAcceleration__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisAcceleration\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisAcceleration" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisAcceleration(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisAcceleration_AccelerationValue"></a> AccelerationValue

Gets or sets the acceleration.

```csharp
public double AccelerationValue { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisAcceleration_FinalThrottleValue"></a> FinalThrottleValue

Gets or sets the final throttle.

```csharp
public double FinalThrottleValue { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisAcceleration_IsShiftGears"></a> IsShiftGears

Gets or sets a value indicating whether [shift gears].

```csharp
public bool IsShiftGears { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Car_AnalysisAcceleration_SteeringInputType"></a> SteeringInputType

Gets or sets the steering input.

```csharp
public StraightLineSteeringInputType SteeringInputType { get; set; }
```

#### Property Value

 [StraightLineSteeringInputType](VM.Managed.DAFUL.Car.Analysis.Full.StraightLineSteeringInputType.md)

### <a id="VM_Managed_DAFUL_Car_AnalysisAcceleration_StepDuration"></a> StepDuration

Gets or sets the duration of step.

```csharp
public double StepDuration { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisAcceleration_StraightLoopType"></a> StraightLoopType

Gets or sets the loop of throttle.

```csharp
public StraightLoopType StraightLoopType { get; set; }
```

#### Property Value

 [StraightLoopType](VM.Managed.DAFUL.Car.Analysis.Full.StraightLoopType.md)

### <a id="VM_Managed_DAFUL_Car_AnalysisAcceleration_TireRadiusPosition"></a> TireRadiusPosition

Gets the tire radius position.

```csharp
public override int TireRadiusPosition { get; }
```

#### Property Value

 int

## Methods

### <a id="VM_Managed_DAFUL_Car_AnalysisAcceleration_GetTestRigMotionUSUBArgument_System_String___"></a> GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` string\[\]

The parameter array.

