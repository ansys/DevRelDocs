# Class FourPostAnalysisBase

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDFullCar.dll  

The FourPost analysis base class

```csharp
public abstract class FourPostAnalysisBase : AnalysisBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
AnalysisBase ← 
[FourPostAnalysisBase](VM.Managed.DAFUL.Car.FourPostAnalysisBase.md)

#### Derived

[AnalysisFourPostRide](VM.Managed.DAFUL.Car.AnalysisFourPostRide.md)

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

### FourPostAnalysisBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.FourPostAnalysisBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FourPostAnalysisBase()
```

### FourPostAnalysisBase\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.FourPostAnalysisBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FourPostAnalysisBase(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Methods

### GetTestRigMotionUSUBArgumentCore\(string, AnalysisFourPostRideInfo, string\[\]\)

Gets the test rig motion USUB argument core.

```csharp
protected void GetTestRigMotionUSUBArgumentCore(string strAnaType, AnalysisFourPostRideInfo info, string[] arParameter)
```

#### Parameters

`strAnaType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Type of the STR ana.

`info` [AnalysisFourPostRideInfo](VM.Managed.DAFUL.Car.AnalysisFourPostRideInfo.md)

The info.

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The ar parameter.


