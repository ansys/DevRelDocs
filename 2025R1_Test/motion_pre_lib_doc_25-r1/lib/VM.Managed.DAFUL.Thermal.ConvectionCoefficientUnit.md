#  Class ConvectionCoefficientUnit

Namespace: [VM.Managed.DAFUL.Thermal](VM.Managed.DAFUL.Thermal.md)  
Assembly: VMThermalBase.dll  

This class is to represent the unit of convection coefficient.

```csharp
public class ConvectionCoefficientUnit : ThermalUnitBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
FunctionUnitBase ← 
[ThermalUnitBase](VM.Managed.DAFUL.Thermal.ThermalUnitBase.md) ← 
[ConvectionCoefficientUnit](VM.Managed.DAFUL.Thermal.ConvectionCoefficientUnit.md)

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

### <a id="VM_Managed_DAFUL_Thermal_ConvectionCoefficientUnit__ctor"></a> ConvectionCoefficientUnit\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Thermal.ConvectionCoefficientUnit" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ConvectionCoefficientUnit()
```

### <a id="VM_Managed_DAFUL_Thermal_ConvectionCoefficientUnit__ctor_VM_Models_Pre_ILinkContainer_"></a> ConvectionCoefficientUnit\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Thermal.ConvectionCoefficientUnit" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ConvectionCoefficientUnit(ILinkContainer lc)
```

#### Parameters

`lc` ILinkContainer

The owner.

## Properties

### <a id="VM_Managed_DAFUL_Thermal_ConvectionCoefficientUnit_Factor"></a> Factor

Gets the factor.

```csharp
public override string Factor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Thermal_ConvectionCoefficientUnit_Scale"></a> Scale

Gets the scale.

```csharp
public override double Scale { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Thermal_ConvectionCoefficientUnit_UnitOfConvectionCoef"></a> UnitOfConvectionCoef

Gets or sets the unit.

```csharp
public ConvectionCoefficientUnit.ConvectionCoefficient UnitOfConvectionCoef { get; set; }
```

#### Property Value

 [ConvectionCoefficientUnit](VM.Managed.DAFUL.Thermal.ConvectionCoefficientUnit.md).[ConvectionCoefficient](VM.Managed.DAFUL.Thermal.ConvectionCoefficientUnit.ConvectionCoefficient.md)

