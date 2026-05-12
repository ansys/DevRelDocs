#  Class AnalysisTransientBatch

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The handling transient batch analysis class

```csharp
public class AnalysisTransientBatch : TireAnalysisBase, IHasInitialVel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[TireAnalysisBase](VM.Managed.DAFUL.Car.TireAnalysisBase.md) ← 
[AnalysisTransientBatch](VM.Managed.DAFUL.Car.AnalysisTransientBatch.md)

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

### <a id="VM_Managed_DAFUL_Car_AnalysisTransientBatch__ctor"></a> AnalysisTransientBatch\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisTransientBatch" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisTransientBatch()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisTransientBatch__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisTransientBatch\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisTransientBatch" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisTransientBatch(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisTransientBatch_AngleUnitType"></a> AngleUnitType

Gets or sets the angle unit.

```csharp
public AngleUnitType AngleUnitType { get; set; }
```

#### Property Value

 [AngleUnitType](VM.Managed.DAFUL.Car.Analysis.AngleUnitType.md)

### <a id="VM_Managed_DAFUL_Car_AnalysisTransientBatch_InitialVelocity"></a> InitialVelocity

Gets the initial velocity.

```csharp
protected override double InitialVelocity { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisTransientBatch_IsLateral"></a> IsLateral

Gets or sets a value indicating whether [use lateral].

```csharp
public bool IsLateral { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Car_AnalysisTransientBatch_IsLongitudinal"></a> IsLongitudinal

Gets or sets a value indicating whether [use longitudinal].

```csharp
public bool IsLongitudinal { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Car_AnalysisTransientBatch_LateralInfo"></a> LateralInfo

Gets or sets the lateral.

```csharp
public AnalysisInfo LateralInfo { get; set; }
```

#### Property Value

 [AnalysisInfo](VM.Managed.DAFUL.Car.AnalysisInfo.md)

### <a id="VM_Managed_DAFUL_Car_AnalysisTransientBatch_LongitudinalInfo"></a> LongitudinalInfo

Gets or sets the longitudinal.

```csharp
public AnalysisInfo LongitudinalInfo { get; set; }
```

#### Property Value

 [AnalysisInfo](VM.Managed.DAFUL.Car.AnalysisInfo.md)

### <a id="VM_Managed_DAFUL_Car_AnalysisTransientBatch_TypeOfSimulation"></a> TypeOfSimulation

Gets the type of simulation.

```csharp
public override TireAnalysisBase.SimulationType TypeOfSimulation { get; }
```

#### Property Value

 [TireAnalysisBase](VM.Managed.DAFUL.Car.TireAnalysisBase.md).[SimulationType](VM.Managed.DAFUL.Car.TireAnalysisBase.SimulationType.md)

### <a id="VM_Managed_DAFUL_Car_AnalysisTransientBatch_VelocityUnitType"></a> VelocityUnitType

Gets or sets the velocity unit.

```csharp
public VelocityUnitType VelocityUnitType { get; set; }
```

#### Property Value

 [VelocityUnitType](VM.Managed.DAFUL.Car.Analysis.VelocityUnitType.md)

## Methods

### <a id="VM_Managed_DAFUL_Car_AnalysisTransientBatch_GetTestRigMotionUSUBArgument_System_String___"></a> GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The parameter array.

### <a id="VM_Managed_DAFUL_Car_AnalysisTransientBatch_GetTestRigMotionUSUBArgument_VM_Managed_DAFUL_Car_AnalysisTransientBatch_BatchType_System_String___"></a> GetTestRigMotionUSUBArgument\(BatchType, string\[\]\)

Gets the test rig motion USUB argument.

```csharp
public void GetTestRigMotionUSUBArgument(AnalysisTransientBatch.BatchType type, string[] arParameter)
```

#### Parameters

`type` [AnalysisTransientBatch](VM.Managed.DAFUL.Car.AnalysisTransientBatch.md).[BatchType](VM.Managed.DAFUL.Car.AnalysisTransientBatch.BatchType.md)

The type.

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The ar parameter.

