# <a id="VM_Managed_DAFUL_Car_AnalysisSweptSineSteer"></a> Class AnalysisSweptSineSteer

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The swept-sine steer analysis class

```csharp
public class AnalysisSweptSineSteer : AnalysisSteerBase, IHasInitialVel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[FullCarAnalysisBase](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md) ← 
[OpenLoopSteeringBase](VM.Managed.DAFUL.Car.OpenLoopSteeringBase.md) ← 
[AnalysisSteerBase](VM.Managed.DAFUL.Car.AnalysisSteerBase.md) ← 
[AnalysisSweptSineSteer](VM.Managed.DAFUL.Car.AnalysisSweptSineSteer.md)

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

### <a id="VM_Managed_DAFUL_Car_AnalysisSweptSineSteer__ctor"></a> AnalysisSweptSineSteer\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisSweptSineSteer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisSweptSineSteer()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisSweptSineSteer__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisSweptSineSteer\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisSweptSineSteer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisSweptSineSteer(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisSweptSineSteer_FrequencyRateValue"></a> FrequencyRateValue

Gets or sets the frequency rate.

```csharp
public double FrequencyRateValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisSweptSineSteer_InitFrequency"></a> InitFrequency

Gets or sets the initial frequency.

```csharp
public double InitFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisSweptSineSteer_InitialSteer"></a> InitialSteer

Gets or sets the initial steer value.

```csharp
public double InitialSteer { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisSweptSineSteer_MaxiFrequency"></a> MaxiFrequency

Gets or sets the maximum frequency.

```csharp
public double MaxiFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisSweptSineSteer_MaximumSteer"></a> MaximumSteer

Gets or sets the maximum steer value.

```csharp
public double MaximumSteer { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisSweptSineSteer_TireRadiusPosition"></a> TireRadiusPosition

Gets the tire radius position.

```csharp
public override int TireRadiusPosition { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Managed_DAFUL_Car_AnalysisSweptSineSteer_GetTestRigMotionUSUBArgument_System_String___"></a> GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The parameter array.

