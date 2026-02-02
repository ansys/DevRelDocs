# Class AnalysisPowerOffStraightLine
<a id="VM_Managed_DAFUL_Car_AnalysisPowerOffStraightLine"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The power=off straight line analysis class

```csharp
public class AnalysisPowerOffStraightLine : StraightLineBase, IHasInitialVel
```

#### Inheritance

object ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[FullCarAnalysisBase](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md) ← 
[StraightLineBase](VM.Managed.DAFUL.Car.StraightLineBase.md) ← 
[AnalysisPowerOffStraightLine](VM.Managed.DAFUL.Car.AnalysisPowerOffStraightLine.md)

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

### <a id="VM_Managed_DAFUL_Car_AnalysisPowerOffStraightLine__ctor"></a> AnalysisPowerOffStraightLine\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisPowerOffStraightLine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisPowerOffStraightLine()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisPowerOffStraightLine__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisPowerOffStraightLine\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisPowerOffStraightLine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisPowerOffStraightLine(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisPowerOffStraightLine_DelayOfClutch"></a> DelayOfClutch

Gets or sets the clutch delay.

```csharp
public double DelayOfClutch { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisPowerOffStraightLine_DeleyOfThrottle"></a> DeleyOfThrottle

Gets or sets the throttle deley.

```csharp
public double DeleyOfThrottle { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisPowerOffStraightLine_IsDisengageClutchDuringPowerOff"></a> IsDisengageClutchDuringPowerOff

Gets or sets a value indicating whether [disengage clutch during power off].

```csharp
public bool IsDisengageClutchDuringPowerOff { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Car_AnalysisPowerOffStraightLine_IsStraightLineControl"></a> IsStraightLineControl

Gets or sets a value indicating whether [straight line control].

```csharp
public bool IsStraightLineControl { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Car_AnalysisPowerOffStraightLine_SWAValue"></a> SWAValue

Gets or sets the SWA.

```csharp
public double SWAValue { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisPowerOffStraightLine_StepDurationOfClutch"></a> StepDurationOfClutch

Gets or sets the duration of the clutch step.

```csharp
public double StepDurationOfClutch { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisPowerOffStraightLine_StepDurationOfThrottle"></a> StepDurationOfThrottle

Gets or sets the duration of the throttle step.

```csharp
public double StepDurationOfThrottle { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisPowerOffStraightLine_TireRadiusPosition"></a> TireRadiusPosition

Gets the tire radius position.

```csharp
public override int TireRadiusPosition { get; }
```

#### Property Value

 int

## Methods

### <a id="VM_Managed_DAFUL_Car_AnalysisPowerOffStraightLine_GetTestRigMotionUSUBArgument_System_String___"></a> GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` string\[\]

The parameter array.

