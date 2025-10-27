# Class AnalysisFrequencyBase
<a id="VM_Managed_DAFUL_Car_AnalysisFrequencyBase"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDFullCar.dll  

The frequency analysis class

```csharp
public abstract class AnalysisFrequencyBase : AnalysisBase
```

#### Inheritance

object ← 
[AnalysisBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCar/SuspensionAnalysis.cs) ← 
[AnalysisFrequencyBase](VM.Managed.DAFUL.Car.AnalysisFrequencyBase.md)

#### Derived

[AnalysisFourPostVibration](VM.Managed.DAFUL.Car.AnalysisFourPostVibration.md), 
[ShimmyJudderAnalysisBase](VM.Managed.DAFUL.Car.ShimmyJudderAnalysisBase.md)

#### Inherited Members

[AnalysisBase.m\_pLnkContainer](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCar/SuspensionAnalysis.cs), 
[AnalysisBase.SetModified\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCar/SuspensionAnalysis.cs), 
[AnalysisBase.GetTestRigMotionUSUBArgument\(string\[\]\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCar/SuspensionAnalysis.cs), 
[AnalysisBase.GetConvertUnit\(LengthUnitType\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCar/SuspensionAnalysis.cs), 
[AnalysisBase.GetGravity\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCar/SuspensionAnalysis.cs), 
[AnalysisBase.GetConvertUnit\(VelocityUnitType\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCar/SuspensionAnalysis.cs), 
[AnalysisBase.GetConvertUnit\(AccelerationUnitType\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCar/SuspensionAnalysis.cs), 
[AnalysisBase.IsSim](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCar/SuspensionAnalysis.cs)

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

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisFrequencyBase_EndValue"></a> EndValue

Gets or sets the end.

```csharp
public double EndValue { get; set; }
```

#### Property Value

 double

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

 uint

