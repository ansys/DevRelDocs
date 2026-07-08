# Class AnalysisISOLaneChange
<a id="VM_Managed_DAFUL_Car_AnalysisISOLaneChange"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The ISO lane change analysis class

```csharp
public class AnalysisISOLaneChange : CourseBase, IHasInitialVel
```

#### Inheritance

object ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[FullCarAnalysisBase](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md) ← 
[CourseBase](VM.Managed.DAFUL.Car.CourseBase.md) ← 
[AnalysisISOLaneChange](VM.Managed.DAFUL.Car.AnalysisISOLaneChange.md)

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

### <a id="VM_Managed_DAFUL_Car_AnalysisISOLaneChange__ctor"></a> AnalysisISOLaneChange\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisISOLaneChange" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisISOLaneChange()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisISOLaneChange__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisISOLaneChange\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisISOLaneChange" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisISOLaneChange(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisISOLaneChange_TireRadiusPosition"></a> TireRadiusPosition

Gets the tire radius position.

```csharp
public override int TireRadiusPosition { get; }
```

#### Property Value

 int

## Methods

### <a id="VM_Managed_DAFUL_Car_AnalysisISOLaneChange_GetTestRigMotionUSUBArgument_System_String___"></a> GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` string\[\]

The parameter array.

