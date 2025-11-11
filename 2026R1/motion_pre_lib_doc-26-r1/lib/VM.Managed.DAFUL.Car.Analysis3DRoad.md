# Class Analysis3DRoad
<a id="VM_Managed_DAFUL_Car_Analysis3DRoad"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The 3D road analysis class

```csharp
public class Analysis3DRoad : CourseBase, IHasInitialVel
```

#### Inheritance

object ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[FullCarAnalysisBase](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md) ← 
[CourseBase](VM.Managed.DAFUL.Car.CourseBase.md) ← 
[Analysis3DRoad](VM.Managed.DAFUL.Car.Analysis3DRoad.md)

#### Implements

IHasInitialVel

#### Inherited Members

[CourseBase.GetTestRigMotionUSUBArgument\(string\[\]\)](VM.Managed.DAFUL.Car.CourseBase.md\#VM\_Managed\_DAFUL\_Car\_CourseBase\_GetTestRigMotionUSUBArgument\_System\_String\_\_\_), 
[CourseBase.InitialVelocity](VM.Managed.DAFUL.Car.CourseBase.md\#VM\_Managed\_DAFUL\_Car\_CourseBase\_InitialVelocity), 
[CourseBase.VelocityUnitType](VM.Managed.DAFUL.Car.CourseBase.md\#VM\_Managed\_DAFUL\_Car\_CourseBase\_VelocityUnitType), 
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

### <a id="VM_Managed_DAFUL_Car_Analysis3DRoad__ctor"></a> Analysis3DRoad\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.Analysis3DRoad" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Analysis3DRoad()
```

### <a id="VM_Managed_DAFUL_Car_Analysis3DRoad__ctor_VM_Models_Pre_ILinkContainer_"></a> Analysis3DRoad\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.Analysis3DRoad" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Analysis3DRoad(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_Analysis3DRoad_DriverFile"></a> DriverFile

Gets or sets the driver data file.

```csharp
public string DriverFile { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_Analysis3DRoad_LongitudialAcc"></a> LongitudialAcc

Gets or sets the longitudial accelereaion.

```csharp
public double LongitudialAcc { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_Analysis3DRoad_SpeedControlType"></a> SpeedControlType

Gets or sets the speed control.

```csharp
public SpeedControlType SpeedControlType { get; set; }
```

#### Property Value

 [SpeedControlType](VM.Managed.DAFUL.Car.Analysis.Full.SpeedControlType.md)

### <a id="VM_Managed_DAFUL_Car_Analysis3DRoad_TimeOfStart"></a> TimeOfStart

Gets or sets the start time.

```csharp
public double TimeOfStart { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_Analysis3DRoad_TireRadiusPosition"></a> TireRadiusPosition

Gets the tire radius position.

```csharp
public override int TireRadiusPosition { get; }
```

#### Property Value

 int

## Methods

### <a id="VM_Managed_DAFUL_Car_Analysis3DRoad_GetTestRigMotionUSUBArgument_System_String___"></a> GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` string\[\]

The parameter array.

