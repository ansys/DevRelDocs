#  Class AnalysisBase

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The car analysis base class

```csharp
public abstract class AnalysisBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md)

#### Derived

[AnalysisExternFiles](VM.Managed.DAFUL.Car.AnalysisExternFiles.md), 
[AnalysisRandomMotion](VM.Managed.DAFUL.Car.AnalysisRandomMotion.md), 
[FullCarAnalysisBase](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md), 
[SuspensionAnalysisBase](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md), 
[TireAnalysisBase](VM.Managed.DAFUL.Car.TireAnalysisBase.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Car_AnalysisBase__ctor"></a> AnalysisBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisBase()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisBase__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisBase\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisBase(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Fields

### <a id="VM_Managed_DAFUL_Car_AnalysisBase_m_pLnkContainer"></a> m\_pLnkContainer

```csharp
protected ILinkContainer m_pLnkContainer
```

#### Field Value

 ILinkContainer

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisBase_IsSim"></a> IsSim

Gets or sets a value indicating whether this instance is simulation.

```csharp
public bool IsSim { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_Car_AnalysisBase_GetConvertUnit_VM_Models_Pre_LengthUnitType_"></a> GetConvertUnit\(LengthUnitType\)

Gets the convert unit for length.

```csharp
protected double GetConvertUnit(LengthUnitType type)
```

#### Parameters

`type` LengthUnitType

The type.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisBase_GetConvertUnit_VM_Managed_DAFUL_Car_Analysis_VelocityUnitType_"></a> GetConvertUnit\(VelocityUnitType\)

Gets the convert unit for velocity.

```csharp
protected double GetConvertUnit(VelocityUnitType type)
```

#### Parameters

`type` [VelocityUnitType](VM.Managed.DAFUL.Car.Analysis.VelocityUnitType.md)

The type.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisBase_GetConvertUnit_VM_Managed_DAFUL_Car_Analysis_AccelerationUnitType_"></a> GetConvertUnit\(AccelerationUnitType\)

Gets the convert unit for acceleration.

```csharp
protected double GetConvertUnit(AccelerationUnitType type)
```

#### Parameters

`type` [AccelerationUnitType](VM.Managed.DAFUL.Car.Analysis.AccelerationUnitType.md)

The type.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisBase_GetGravity"></a> GetGravity\(\)

```csharp
protected double GetGravity()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_AnalysisBase_GetTestRigMotionUSUBArgument_System_String___"></a> GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public virtual void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The parameter array.

### <a id="VM_Managed_DAFUL_Car_AnalysisBase_SetModified"></a> SetModified\(\)

Set modified flag.

```csharp
protected void SetModified()
```

