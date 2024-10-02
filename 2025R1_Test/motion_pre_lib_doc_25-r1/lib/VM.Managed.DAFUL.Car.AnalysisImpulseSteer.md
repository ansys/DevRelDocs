#  Class AnalysisImpulseSteer

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The impulse steer analysis class

```csharp
public class AnalysisImpulseSteer : AnalysisSteerBase, IHasInitialVel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[FullCarAnalysisBase](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md) ← 
[OpenLoopSteeringBase](VM.Managed.DAFUL.Car.OpenLoopSteeringBase.md) ← 
[AnalysisSteerBase](VM.Managed.DAFUL.Car.AnalysisSteerBase.md) ← 
[AnalysisImpulseSteer](VM.Managed.DAFUL.Car.AnalysisImpulseSteer.md)

#### Derived

[AnalysisSingleLaneChange](VM.Managed.DAFUL.Car.AnalysisSingleLaneChange.md)

#### Implements

IHasInitialVel

#### Inherited Members

[AnalysisSteerBase.TimeOfStart](VM.Managed.DAFUL.Car.AnalysisSteerBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisSteerBase\_TimeOfStart), 
[AnalysisSteerBase.SteeringInputType](VM.Managed.DAFUL.Car.AnalysisSteerBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisSteerBase\_SteeringInputType), 
[AnalysisSteerBase.IsCruiseControl](VM.Managed.DAFUL.Car.AnalysisSteerBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisSteerBase\_IsCruiseControl), 
[OpenLoopSteeringBase.GetTestRigMotionUSUBArgument\(string\[\]\)](VM.Managed.DAFUL.Car.OpenLoopSteeringBase.md\#VM\_Managed\_DAFUL\_Car\_OpenLoopSteeringBase\_GetTestRigMotionUSUBArgument\_System\_String\_\_\_), 
[OpenLoopSteeringBase.InitialVelocity](VM.Managed.DAFUL.Car.OpenLoopSteeringBase.md\#VM\_Managed\_DAFUL\_Car\_OpenLoopSteeringBase\_InitialVelocity), 
[OpenLoopSteeringBase.VelocityUnitType](VM.Managed.DAFUL.Car.OpenLoopSteeringBase.md\#VM\_Managed\_DAFUL\_Car\_OpenLoopSteeringBase\_VelocityUnitType), 
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

### <a id="VM_Managed_DAFUL_Car_AnalysisImpulseSteer__ctor"></a> AnalysisImpulseSteer\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisImpulseSteer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisImpulseSteer()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisImpulseSteer__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisImpulseSteer\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisImpulseSteer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisImpulseSteer(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisImpulseSteer_CycleLen"></a> CycleLen

Gets or sets the length of the cycle.

```csharp
public double CycleLen { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisImpulseSteer_MaximumSteer"></a> MaximumSteer

Gets or sets the maximum steer value.

```csharp
public double MaximumSteer { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisImpulseSteer_TireRadiusPosition"></a> TireRadiusPosition

Gets the tire radius position.

```csharp
public override int TireRadiusPosition { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Managed_DAFUL_Car_AnalysisImpulseSteer_GetTestRigMotionUSUBArgument_System_String___"></a> GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The parameter array.

