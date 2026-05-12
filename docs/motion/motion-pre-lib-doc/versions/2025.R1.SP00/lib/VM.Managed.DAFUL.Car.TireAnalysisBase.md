#  Class TireAnalysisBase

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The tire analysis base class

```csharp
public abstract class TireAnalysisBase : AnalysisBase, IHasInitialVel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[TireAnalysisBase](VM.Managed.DAFUL.Car.TireAnalysisBase.md)

#### Derived

[AnalysisRideDrum](VM.Managed.DAFUL.Car.AnalysisRideDrum.md), 
[AnalysisRideGeneral](VM.Managed.DAFUL.Car.AnalysisRideGeneral.md), 
[AnalysisSteadyBatch](VM.Managed.DAFUL.Car.AnalysisSteadyBatch.md), 
[AnalysisSteadySingle](VM.Managed.DAFUL.Car.AnalysisSteadySingle.md), 
[AnalysisTransientBatch](VM.Managed.DAFUL.Car.AnalysisTransientBatch.md), 
[AnalysisTransientSingle](VM.Managed.DAFUL.Car.AnalysisTransientSingle.md)

#### Implements

IHasInitialVel

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

### <a id="VM_Managed_DAFUL_Car_TireAnalysisBase__ctor"></a> TireAnalysisBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.TireAnalysisBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TireAnalysisBase()
```

### <a id="VM_Managed_DAFUL_Car_TireAnalysisBase__ctor_VM_Models_Pre_ILinkContainer_"></a> TireAnalysisBase\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.TireAnalysisBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TireAnalysisBase(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_TireAnalysisBase_InitialVelocity"></a> InitialVelocity

Gets the initial velocity.

```csharp
protected virtual double InitialVelocity { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_TireAnalysisBase_TypeOfSimulation"></a> TypeOfSimulation

Gets the type of simulation.

```csharp
public virtual TireAnalysisBase.SimulationType TypeOfSimulation { get; }
```

#### Property Value

 [TireAnalysisBase](VM.Managed.DAFUL.Car.TireAnalysisBase.md).[SimulationType](VM.Managed.DAFUL.Car.TireAnalysisBase.SimulationType.md)

## Methods

### <a id="VM_Managed_DAFUL_Car_TireAnalysisBase_GetConvertUnitToMMKS_VM_Managed_DAFUL_Car_Analysis_VelocityUnitType_"></a> GetConvertUnitToMMKS\(VelocityUnitType\)

Gets the convert unit for velocity.

```csharp
protected double GetConvertUnitToMMKS(VelocityUnitType type)
```

#### Parameters

`type` [VelocityUnitType](VM.Managed.DAFUL.Car.Analysis.VelocityUnitType.md)

The type.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_TireAnalysisBase_GetTestRigMotionUSUBArgumentCore_System_String_System_String_VM_Managed_DAFUL_Car_AnalysisInfo_System_String___"></a> GetTestRigMotionUSUBArgumentCore\(string, string, AnalysisInfo, string\[\]\)

Gets the test rig motion USUB argument core.

```csharp
protected void GetTestRigMotionUSUBArgumentCore(string strAnaCat, string strAnaType, AnalysisInfo info, string[] arParameter)
```

#### Parameters

`strAnaCat` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR ana cat.

`strAnaType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Type of the STR ana.

`info` [AnalysisInfo](VM.Managed.DAFUL.Car.AnalysisInfo.md)

The info.

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The ar parameter.

