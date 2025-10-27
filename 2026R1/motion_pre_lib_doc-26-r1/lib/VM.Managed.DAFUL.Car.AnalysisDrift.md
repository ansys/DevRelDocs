# Class AnalysisDrift
<a id="VM_Managed_DAFUL_Car_AnalysisDrift"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The drift analysis class

```csharp
public class AnalysisDrift : OpenLoopSteeringBase, IAnalysisDrift, IHasInitialVel
```

#### Inheritance

object ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[FullCarAnalysisBase](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md) ← 
[OpenLoopSteeringBase](VM.Managed.DAFUL.Car.OpenLoopSteeringBase.md) ← 
[AnalysisDrift](VM.Managed.DAFUL.Car.AnalysisDrift.md)

#### Implements

IAnalysisDrift, 
IHasInitialVel

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_Car_AnalysisDrift__ctor"></a> AnalysisDrift\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisDrift" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisDrift()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisDrift__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisDrift\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisDrift" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisDrift(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisDrift_InitThrottle"></a> InitThrottle

Gets or sets the initial throttle.

```csharp
public double InitThrottle { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisDrift_Steer"></a> Steer

Gets or sets the steer value.

```csharp
public double Steer { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisDrift_SteeringInputType"></a> SteeringInputType

Gets or sets the steering input.

```csharp
public SteeringInputType SteeringInputType { get; set; }
```

#### Property Value

 [SteeringInputType](VM.Managed.DAFUL.Car.Analysis.Full.SteeringInputType.md)

### <a id="VM_Managed_DAFUL_Car_AnalysisDrift_Throttle_Ramp"></a> Throttle\_Ramp

Gets or sets the throttle ramp.

```csharp
public double Throttle_Ramp { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisDrift_TireRadiusPosition"></a> TireRadiusPosition

Gets the tire radius position.

```csharp
public override int TireRadiusPosition { get; }
```

#### Property Value

 int

## Methods

### <a id="VM_Managed_DAFUL_Car_AnalysisDrift_GetTestRigMotionUSUBArgument_System_String___"></a> GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` string\[\]

The parameter array.

