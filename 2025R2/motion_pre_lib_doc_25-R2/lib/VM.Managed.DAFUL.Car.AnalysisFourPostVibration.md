#  Class AnalysisFourPostVibration

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDFullCar.dll  

The vibration analysis class

```csharp
public class AnalysisFourPostVibration : AnalysisFrequencyBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
AnalysisBase ← 
[AnalysisFrequencyBase](VM.Managed.DAFUL.Car.AnalysisFrequencyBase.md) ← 
[AnalysisFourPostVibration](VM.Managed.DAFUL.Car.AnalysisFourPostVibration.md)

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

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostVibration__ctor"></a> AnalysisFourPostVibration\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisSteadySingle" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisFourPostVibration()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostVibration__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisFourPostVibration\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisSteadySingle" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisFourPostVibration(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostVibration_VirationInfo"></a> VirationInfo

Gets or sets the single.

```csharp
public AnalysisFourPostVibrationInfo VirationInfo { get; set; }
```

#### Property Value

 [AnalysisFourPostVibrationInfo](VM.Managed.DAFUL.Car.AnalysisFourPostVibrationInfo.md)

