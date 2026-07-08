# Class FullCarAnalysisBase
<a id="VM_Managed_DAFUL_Car_FullCarAnalysisBase"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The full car analysis base class

```csharp
public abstract class FullCarAnalysisBase : AnalysisBase
```

#### Inheritance

object ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[FullCarAnalysisBase](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md)

#### Derived

[AnalysisFileDriven](VM.Managed.DAFUL.Car.AnalysisFileDriven.md), 
[CorneringBase](VM.Managed.DAFUL.Car.CorneringBase.md), 
[CourseBase](VM.Managed.DAFUL.Car.CourseBase.md), 
[OpenLoopSteeringBase](VM.Managed.DAFUL.Car.OpenLoopSteeringBase.md), 
[StraightLineBase](VM.Managed.DAFUL.Car.StraightLineBase.md)

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisBase__ctor"></a> FullCarAnalysisBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.FullCarAnalysisBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FullCarAnalysisBase()
```

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisBase__ctor_VM_Models_Pre_ILinkContainer_"></a> FullCarAnalysisBase\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.FullCarAnalysisBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FullCarAnalysisBase(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisBase_GearPositionType"></a> GearPositionType

Gets or sets the gear position.

```csharp
public GearPositionType GearPositionType { get; set; }
```

#### Property Value

 [GearPositionType](VM.Managed.DAFUL.Car.Analysis.Full.GearPositionType.md)

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisBase_IsQuasiStaticStraightLineSetup"></a> IsQuasiStaticStraightLineSetup

Gets or sets a value indicating whether [quasi static straight line setup].

```csharp
public bool IsQuasiStaticStraightLineSetup { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisBase_RoadFile"></a> RoadFile

Gets or sets the road data file.

```csharp
public string RoadFile { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisBase_TireRadiusPosition"></a> TireRadiusPosition

Gets the tire radius position.

```csharp
public abstract int TireRadiusPosition { get; }
```

#### Property Value

 int

