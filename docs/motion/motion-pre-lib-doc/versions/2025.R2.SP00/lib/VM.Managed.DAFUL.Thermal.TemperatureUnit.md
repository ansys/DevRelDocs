#  Class TemperatureUnit

Namespace: [VM.Managed.DAFUL.Thermal](VM.Managed.DAFUL.Thermal.md)  
Assembly: VMThermalBase.dll  

This class is to represent the unit of temperature.

```csharp
public class TemperatureUnit : ThermalUnitBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
FunctionUnitBase ← 
[ThermalUnitBase](VM.Managed.DAFUL.Thermal.ThermalUnitBase.md) ← 
[TemperatureUnit](VM.Managed.DAFUL.Thermal.TemperatureUnit.md)

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

### <a id="VM_Managed_DAFUL_Thermal_TemperatureUnit__ctor"></a> TemperatureUnit\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Thermal.TemperatureUnit" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TemperatureUnit()
```

### <a id="VM_Managed_DAFUL_Thermal_TemperatureUnit__ctor_VM_Models_Pre_ILinkContainer_"></a> TemperatureUnit\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Thermal.TemperatureUnit" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TemperatureUnit(ILinkContainer lc)
```

#### Parameters

`lc` ILinkContainer

The owner.

## Properties

### <a id="VM_Managed_DAFUL_Thermal_TemperatureUnit_Factor"></a> Factor

Gets the factor.

```csharp
public override string Factor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Thermal_TemperatureUnit_Scale"></a> Scale

Gets the scale.

```csharp
public override double Scale { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Thermal_TemperatureUnit_Shift"></a> Shift

Gets the shift.

```csharp
public override double Shift { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Thermal_TemperatureUnit_UnitOfTemperature"></a> UnitOfTemperature

Gets or sets the unit.

```csharp
public TemperatureUnit.Temperature UnitOfTemperature { get; set; }
```

#### Property Value

 [TemperatureUnit](VM.Managed.DAFUL.Thermal.TemperatureUnit.md).[Temperature](VM.Managed.DAFUL.Thermal.TemperatureUnit.Temperature.md)

