#  Class AnalysisBraking

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The braking analysis class

```csharp
public class AnalysisBraking : StraightLineBase, IHasInitialVel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[FullCarAnalysisBase](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md) ← 
[StraightLineBase](VM.Managed.DAFUL.Car.StraightLineBase.md) ← 
[AnalysisBraking](VM.Managed.DAFUL.Car.AnalysisBraking.md)

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

### <a id="VM_Managed_DAFUL_Car_AnalysisBraking__ctor"></a> AnalysisBraking\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisBraking" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisBraking()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisBraking__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisBraking\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisBraking" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisBraking(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisBraking_BrakeLoopType"></a> BrakeLoopType

Gets or sets the loop of brake.

```csharp
public StraightLoopType BrakeLoopType { get; set; }
```

#### Property Value

 [StraightLoopType](VM.Managed.DAFUL.Car.Analysis.Full.StraightLoopType.md)

### <a id="VM_Managed_DAFUL_Car_AnalysisBraking_DecelerationValue"></a> DecelerationValue

Gets or sets the deceleration.

```csharp
public double DecelerationValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisBraking_FinalBrakeValue"></a> FinalBrakeValue

Gets or sets the final brake.

```csharp
public double FinalBrakeValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisBraking_SteeringInputType"></a> SteeringInputType

Gets or sets the steering input.

```csharp
public StraightLineSteeringInputType SteeringInputType { get; set; }
```

#### Property Value

 [StraightLineSteeringInputType](VM.Managed.DAFUL.Car.Analysis.Full.StraightLineSteeringInputType.md)

### <a id="VM_Managed_DAFUL_Car_AnalysisBraking_StepDuration"></a> StepDuration

Gets or sets the duration of step.

```csharp
public double StepDuration { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisBraking_TireRadiusPosition"></a> TireRadiusPosition

Gets the tire radius position.

```csharp
public override int TireRadiusPosition { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Managed_DAFUL_Car_AnalysisBraking_GetTestRigMotionUSUBArgument_System_String___"></a> GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The parameter array.

