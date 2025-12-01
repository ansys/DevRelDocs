# Class HeatFluxUnit
<a id="VM_Managed_DAFUL_Thermal_HeatFluxUnit"></a>

Namespace: [VM.Managed.DAFUL.Thermal](VM.Managed.DAFUL.Thermal.md)  
Assembly: VMThermalBase.dll  

This class is to represent the unit of heat flux.

```csharp
public class HeatFluxUnit : ThermalUnitBase
```

#### Inheritance

object ← 
[FunctionUnitBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/FunctionUnit.cs) ← 
[ThermalUnitBase](VM.Managed.DAFUL.Thermal.ThermalUnitBase.md) ← 
[HeatFluxUnit](VM.Managed.DAFUL.Thermal.HeatFluxUnit.md)

#### Inherited Members

[ThermalUnitBase.SetModified\(\)](VM.Managed.DAFUL.Thermal.ThermalUnitBase.md\#VM\_Managed\_DAFUL\_Thermal\_ThermalUnitBase\_SetModified), 
[FunctionUnitBase.Scale](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/FunctionUnit.cs), 
[FunctionUnitBase.Shift](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/FunctionUnit.cs), 
[FunctionUnitBase.Factor](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/FunctionUnit.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Thermal_HeatFluxUnit__ctor"></a> HeatFluxUnit\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Thermal.HeatFluxUnit" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HeatFluxUnit()
```

### <a id="VM_Managed_DAFUL_Thermal_HeatFluxUnit__ctor_VM_Models_Pre_ILinkContainer_"></a> HeatFluxUnit\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Thermal.HeatFluxUnit" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HeatFluxUnit(ILinkContainer lc)
```

#### Parameters

`lc` ILinkContainer

The owner.

## Properties

### <a id="VM_Managed_DAFUL_Thermal_HeatFluxUnit_Factor"></a> Factor

Gets the factor.

```csharp
public override string Factor { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Thermal_HeatFluxUnit_Scale"></a> Scale

Gets the scale.

```csharp
public override double Scale { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Thermal_HeatFluxUnit_UnitOfHeatFlux"></a> UnitOfHeatFlux

Gets or sets the unit.

```csharp
public HeatFluxUnit.HeatFlux UnitOfHeatFlux { get; set; }
```

#### Property Value

 [HeatFluxUnit](VM.Managed.DAFUL.Thermal.HeatFluxUnit.md).[HeatFlux](VM.Managed.DAFUL.Thermal.HeatFluxUnit.HeatFlux.md)

