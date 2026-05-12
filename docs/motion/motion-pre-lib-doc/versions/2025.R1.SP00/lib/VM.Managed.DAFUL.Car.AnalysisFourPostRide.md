#  Class AnalysisFourPostRide

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDFullCar.dll  

The handling steady single analysis class

```csharp
public class AnalysisFourPostRide : FourPostAnalysisBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
AnalysisBase ← 
[FourPostAnalysisBase](VM.Managed.DAFUL.Car.FourPostAnalysisBase.md) ← 
[AnalysisFourPostRide](VM.Managed.DAFUL.Car.AnalysisFourPostRide.md)

#### Inherited Members

[FourPostAnalysisBase.GetTestRigMotionUSUBArgumentCore\(string, AnalysisFourPostRideInfo, string\[\]\)](VM.Managed.DAFUL.Car.FourPostAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_FourPostAnalysisBase\_GetTestRigMotionUSUBArgumentCore\_System\_String\_VM\_Managed\_DAFUL\_Car\_AnalysisFourPostRideInfo\_System\_String\_\_\_), 
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

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRide__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisFourPostRide\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisSteadySingle" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisFourPostRide(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRide__ctor"></a> AnalysisFourPostRide\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisSteadySingle" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisFourPostRide()
```

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRide_RideInfo"></a> RideInfo

Gets or sets the single.

```csharp
public AnalysisFourPostRideInfo RideInfo { get; set; }
```

#### Property Value

 [AnalysisFourPostRideInfo](VM.Managed.DAFUL.Car.AnalysisFourPostRideInfo.md)

## Methods

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRide_GetTestRigMotionUSUBArgument_System_String___"></a> GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The parameter array.

### <a id="VM_Managed_DAFUL_Car_AnalysisFourPostRide_MakeSpline_System_Collections_Generic_List_System_Double______"></a> MakeSpline\(List<double\[\]\>\[\]\)

Makes the spline.

```csharp
public bool MakeSpline(List<double[]>[] arSpl)
```

#### Parameters

`arSpl` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\[\]

The ar SPL.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

