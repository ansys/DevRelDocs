# Class AnalysisRideGeneral
<a id="VM_Managed_DAFUL_Car_AnalysisRideGeneral"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The ride general analysis class

```csharp
public class AnalysisRideGeneral : TireAnalysisBase, IHasInitialVel
```

#### Inheritance

object ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[TireAnalysisBase](VM.Managed.DAFUL.Car.TireAnalysisBase.md) ← 
[AnalysisRideGeneral](VM.Managed.DAFUL.Car.AnalysisRideGeneral.md)

#### Implements

IHasInitialVel

#### Inherited Members

[TireAnalysisBase.GetConvertUnitToMMKS\(VelocityUnitType\)](VM.Managed.DAFUL.Car.TireAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_TireAnalysisBase\_GetConvertUnitToMMKS\_VM\_Managed\_DAFUL\_Car\_Analysis\_VelocityUnitType\_), 
[TireAnalysisBase.GetTestRigMotionUSUBArgumentCore\(string, string, AnalysisInfo, string\[\]\)](VM.Managed.DAFUL.Car.TireAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_TireAnalysisBase\_GetTestRigMotionUSUBArgumentCore\_System\_String\_System\_String\_VM\_Managed\_DAFUL\_Car\_AnalysisInfo\_System\_String\_\_\_), 
[TireAnalysisBase.TypeOfSimulation](VM.Managed.DAFUL.Car.TireAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_TireAnalysisBase\_TypeOfSimulation), 
[TireAnalysisBase.InitialVelocity](VM.Managed.DAFUL.Car.TireAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_TireAnalysisBase\_InitialVelocity), 
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

### <a id="VM_Managed_DAFUL_Car_AnalysisRideGeneral__ctor"></a> AnalysisRideGeneral\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisRideGeneral" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisRideGeneral()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisRideGeneral__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisRideGeneral\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisRideGeneral" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisRideGeneral(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisRideGeneral_GeneralInfo"></a> GeneralInfo

Gets or sets the general.

```csharp
public AnalysisInfo GeneralInfo { get; set; }
```

#### Property Value

 [AnalysisInfo](VM.Managed.DAFUL.Car.AnalysisInfo.md)

### <a id="VM_Managed_DAFUL_Car_AnalysisRideGeneral_InitialVelocity"></a> InitialVelocity

Gets the initial velocity.

```csharp
protected override double InitialVelocity { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisRideGeneral_RoadFile"></a> RoadFile

Gets or sets the road data file.

```csharp
public string RoadFile { get; set; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_Car_AnalysisRideGeneral_GetTestRigMotionUSUBArgument_System_String___"></a> GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` string\[\]

The parameter array.

