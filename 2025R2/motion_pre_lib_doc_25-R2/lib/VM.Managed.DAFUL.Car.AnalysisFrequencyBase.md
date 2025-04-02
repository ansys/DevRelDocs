#  Class AnalysisFrequencyBase

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDFullCar.dll  

The frequency analysis class

```csharp
public abstract class AnalysisFrequencyBase : AnalysisBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
AnalysisBase ← 
[AnalysisFrequencyBase](VM.Managed.DAFUL.Car.AnalysisFrequencyBase.md)

#### Derived

[AnalysisFourPostVibration](VM.Managed.DAFUL.Car.AnalysisFourPostVibration.md), 
[ShimmyJudderAnalysisBase](VM.Managed.DAFUL.Car.ShimmyJudderAnalysisBase.md)

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_Car_AnalysisFrequencyBase__ctor"></a> AnalysisFrequencyBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisFrequencyBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisFrequencyBase()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisFrequencyBase__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisFrequencyBase\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisFrequencyBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisFrequencyBase(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisFrequencyBase_BeginValue"></a> BeginValue

Gets or sets the begin.

```csharp
public double BeginValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisFrequencyBase_EndValue"></a> EndValue

Gets or sets the end.

```csharp
public double EndValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisFrequencyBase_Increment_Type"></a> Increment\_Type

Gets or sets the increment.

```csharp
public AnalysisFrequencyBase.IncrementType Increment_Type { get; set; }
```

#### Property Value

 [AnalysisFrequencyBase](VM.Managed.DAFUL.Car.AnalysisFrequencyBase.md).[IncrementType](VM.Managed.DAFUL.Car.AnalysisFrequencyBase.IncrementType.md)

### <a id="VM_Managed_DAFUL_Car_AnalysisFrequencyBase_StepsValue"></a> StepsValue

Gets or sets the steps.

```csharp
public uint StepsValue { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

