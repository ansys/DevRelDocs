# Class FourPostAnalysisBase
<a id="VM_Managed_DAFUL_Car_FourPostAnalysisBase"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDFullCar.dll  

The FourPost analysis base class

```csharp
public abstract class FourPostAnalysisBase : AnalysisBase
```

#### Inheritance

object ← 
[AnalysisBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCar/SuspensionAnalysis.cs) ← 
[FourPostAnalysisBase](VM.Managed.DAFUL.Car.FourPostAnalysisBase.md)

#### Derived

[AnalysisFourPostRide](VM.Managed.DAFUL.Car.AnalysisFourPostRide.md)

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

### <a id="VM_Managed_DAFUL_Car_FourPostAnalysisBase__ctor"></a> FourPostAnalysisBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.FourPostAnalysisBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FourPostAnalysisBase()
```

### <a id="VM_Managed_DAFUL_Car_FourPostAnalysisBase__ctor_VM_Models_Pre_ILinkContainer_"></a> FourPostAnalysisBase\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.FourPostAnalysisBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FourPostAnalysisBase(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Methods

### <a id="VM_Managed_DAFUL_Car_FourPostAnalysisBase_GetTestRigMotionUSUBArgumentCore_System_String_VM_Managed_DAFUL_Car_AnalysisFourPostRideInfo_System_String___"></a> GetTestRigMotionUSUBArgumentCore\(string, AnalysisFourPostRideInfo, string\[\]\)

Gets the test rig motion USUB argument core.

```csharp
protected void GetTestRigMotionUSUBArgumentCore(string strAnaType, AnalysisFourPostRideInfo info, string[] arParameter)
```

#### Parameters

`strAnaType` string

Type of the STR ana.

`info` [AnalysisFourPostRideInfo](VM.Managed.DAFUL.Car.AnalysisFourPostRideInfo.md)

The info.

`arParameter` string\[\]

The ar parameter.

