#  Class HeatFlowUnit

Namespace: [VM.Managed.DAFUL.Thermal](VM.Managed.DAFUL.Thermal.md)  
Assembly: VMThermalBase.dll  

This class is to represent the unit of heat flow.

```csharp
public class HeatFlowUnit : ThermalUnitBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
FunctionUnitBase ← 
[ThermalUnitBase](VM.Managed.DAFUL.Thermal.ThermalUnitBase.md) ← 
[HeatFlowUnit](VM.Managed.DAFUL.Thermal.HeatFlowUnit.md)

#### Inherited Members

[ThermalUnitBase.SetModified\(\)](VM.Managed.DAFUL.Thermal.ThermalUnitBase.md\#VM\_Managed\_DAFUL\_Thermal\_ThermalUnitBase\_SetModified), 
FunctionUnitBase.Scale, 
FunctionUnitBase.Shift, 
FunctionUnitBase.Factor

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Thermal_HeatFlowUnit__ctor"></a> HeatFlowUnit\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Thermal.HeatFlowUnit" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HeatFlowUnit()
```

### <a id="VM_Managed_DAFUL_Thermal_HeatFlowUnit__ctor_VM_Models_Pre_ILinkContainer_"></a> HeatFlowUnit\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Thermal.HeatFlowUnit" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HeatFlowUnit(ILinkContainer lc)
```

#### Parameters

`lc` ILinkContainer

The owner.

## Properties

### <a id="VM_Managed_DAFUL_Thermal_HeatFlowUnit_Factor"></a> Factor

Gets the factor.

```csharp
public override string Factor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Thermal_HeatFlowUnit_Scale"></a> Scale

Gets the scale.

```csharp
public override double Scale { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Thermal_HeatFlowUnit_UnitOfHeatFlow"></a> UnitOfHeatFlow

Gets or sets the unit.

```csharp
public HeatFlowUnit.HeatFlow UnitOfHeatFlow { get; set; }
```

#### Property Value

 [HeatFlowUnit](VM.Managed.DAFUL.Thermal.HeatFlowUnit.md).[HeatFlow](VM.Managed.DAFUL.Thermal.HeatFlowUnit.HeatFlow.md)

