#  Class AnalysisShimmy

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDFullCar.dll  

The Shimmy analysis class

```csharp
public class AnalysisShimmy : ShimmyJudderAnalysisBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
AnalysisBase ← 
[AnalysisFrequencyBase](VM.Managed.DAFUL.Car.AnalysisFrequencyBase.md) ← 
[ShimmyJudderAnalysisBase](VM.Managed.DAFUL.Car.ShimmyJudderAnalysisBase.md) ← 
[AnalysisShimmy](VM.Managed.DAFUL.Car.AnalysisShimmy.md)

#### Inherited Members

[AnalysisFrequencyBase.BeginValue](VM.Managed.DAFUL.Car.AnalysisFrequencyBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisFrequencyBase\_BeginValue), 
[AnalysisFrequencyBase.EndValue](VM.Managed.DAFUL.Car.AnalysisFrequencyBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisFrequencyBase\_EndValue), 
[AnalysisFrequencyBase.StepsValue](VM.Managed.DAFUL.Car.AnalysisFrequencyBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisFrequencyBase\_StepsValue), 
[AnalysisFrequencyBase.Increment\_Type](VM.Managed.DAFUL.Car.AnalysisFrequencyBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisFrequencyBase\_Increment\_Type), 
AnalysisBase.m\_pLnkContainer, 
AnalysisBase.SetModified\(\), 
AnalysisBase.GetTestRigMotionUSUBArgument\(string\[\]\), 
AnalysisBase.GetConvertUnit\(LengthUnitType\), 
AnalysisBase.GetGravity\(\), 
AnalysisBase.GetConvertUnit\(VelocityUnitType\), 
AnalysisBase.GetConvertUnit\(AccelerationUnitType\), 
AnalysisBase.IsSim

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Car_AnalysisShimmy__ctor"></a> AnalysisShimmy\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisShimmy" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisShimmy()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisShimmy__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisShimmy\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisShimmy" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisShimmy(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisShimmy_ActuatorInfo"></a> ActuatorInfo

Gets or sets the actuator.

```csharp
public ActuatorInfo ActuatorInfo { get; set; }
```

#### Property Value

 [ActuatorInfo](VM.Managed.DAFUL.Car.ActuatorInfo.md)

