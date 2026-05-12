#  Class ThermalUnitBase

Namespace: [VM.Managed.DAFUL.Thermal](VM.Managed.DAFUL.Thermal.md)  
Assembly: VMThermalBase.dll  

This base class is to represent the unit of thermal.

```csharp
public abstract class ThermalUnitBase : FunctionUnitBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
FunctionUnitBase ← 
[ThermalUnitBase](VM.Managed.DAFUL.Thermal.ThermalUnitBase.md)

#### Derived

[ConvectionCoefficientUnit](VM.Managed.DAFUL.Thermal.ConvectionCoefficientUnit.md), 
[HeatFlowUnit](VM.Managed.DAFUL.Thermal.HeatFlowUnit.md), 
[HeatFluxUnit](VM.Managed.DAFUL.Thermal.HeatFluxUnit.md), 
[HeatGenerationUnit](VM.Managed.DAFUL.Thermal.HeatGenerationUnit.md), 
[TemperatureUnit](VM.Managed.DAFUL.Thermal.TemperatureUnit.md)

#### Inherited Members

FunctionUnitBase.Scale, 
FunctionUnitBase.Shift, 
FunctionUnitBase.Factor

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Thermal_ThermalUnitBase__ctor"></a> ThermalUnitBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Thermal.ThermalUnitBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ThermalUnitBase()
```

### <a id="VM_Managed_DAFUL_Thermal_ThermalUnitBase__ctor_VM_Models_Pre_ILinkContainer_"></a> ThermalUnitBase\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Thermal.ThermalUnitBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ThermalUnitBase(ILinkContainer lc)
```

#### Parameters

`lc` ILinkContainer

The owner.

## Methods

### <a id="VM_Managed_DAFUL_Thermal_ThermalUnitBase_SetModified"></a> SetModified\(\)

Set modified flag.

```csharp
protected void SetModified()
```

