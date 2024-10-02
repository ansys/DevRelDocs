#  Class AnalysisStaticLoad.StaticRoadBaseInfo

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The aligning torque class

```csharp
public class AnalysisStaticLoad.StaticRoadBaseInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisStaticLoad.StaticRoadBaseInfo](VM.Managed.DAFUL.Car.AnalysisStaticLoad.StaticRoadBaseInfo.md)

#### Derived

[AnalysisStaticLoad.AligningTorque](VM.Managed.DAFUL.Car.AnalysisStaticLoad.AligningTorque.md), 
[AnalysisStaticLoad.BrakingForce](VM.Managed.DAFUL.Car.AnalysisStaticLoad.BrakingForce.md), 
[AnalysisStaticLoad.CorneringForce](VM.Managed.DAFUL.Car.AnalysisStaticLoad.CorneringForce.md), 
[AnalysisStaticLoad.DamageForce](VM.Managed.DAFUL.Car.AnalysisStaticLoad.DamageForce.md), 
[AnalysisStaticLoad.OverturningTorque](VM.Managed.DAFUL.Car.AnalysisStaticLoad.OverturningTorque.md), 
[AnalysisStaticLoad.RollResTorque](VM.Managed.DAFUL.Car.AnalysisStaticLoad.RollResTorque.md), 
[AnalysisStaticLoad.TractionForce](VM.Managed.DAFUL.Car.AnalysisStaticLoad.TractionForce.md), 
[AnalysisStaticLoad.VerticalLength](VM.Managed.DAFUL.Car.AnalysisStaticLoad.VerticalLength.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Car_AnalysisStaticLoad_StaticRoadBaseInfo__ctor"></a> StaticRoadBaseInfo\(\)

Initializes the <xref href="VM.Managed.DAFUL.Car.AnalysisStaticLoad.StaticRoadBaseInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public StaticRoadBaseInfo()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisStaticLoad_StaticRoadBaseInfo__ctor_VM_Models_Pre_ILinkContainer_"></a> StaticRoadBaseInfo\(ILinkContainer\)

Initializes the <xref href="VM.Managed.DAFUL.Car.AnalysisStaticLoad.StaticRoadBaseInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public StaticRoadBaseInfo(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisStaticLoad_StaticRoadBaseInfo_LWRL"></a> LWRL

Gets or sets the LWR left.

```csharp
public double LWRL { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisStaticLoad_StaticRoadBaseInfo_LWRR"></a> LWRR

Gets or sets the LWR right.

```csharp
public double LWRR { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisStaticLoad_StaticRoadBaseInfo_UPRL"></a> UPRL

Gets or sets the UPR left.

```csharp
public double UPRL { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisStaticLoad_StaticRoadBaseInfo_UPRR"></a> UPRR

Gets or sets the UPR right.

```csharp
public double UPRR { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Managed_DAFUL_Car_AnalysisStaticLoad_StaticRoadBaseInfo_SetModified"></a> SetModified\(\)

Set modified flag.

```csharp
protected void SetModified()
```

