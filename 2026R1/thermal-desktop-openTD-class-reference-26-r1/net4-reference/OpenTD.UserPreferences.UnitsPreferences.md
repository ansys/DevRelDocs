# <a id="OpenTD_UserPreferences_UnitsPreferences"></a> Class UnitsPreferences

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Use to set the global units preferences.

```csharp
public class UnitsPreferences : Preferences, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
Preferences ← 
[UnitsPreferences](OpenTD.UserPreferences.UnitsPreferences.md)

#### Implements

[IUpdatable](OpenTD.IUpdatable.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_UserPreferences_UnitsPreferences__ctor"></a> UnitsPreferences\(\)

Do not use.

```csharp
public UnitsPreferences()
```

### <a id="OpenTD_UserPreferences_UnitsPreferences__ctor_OpenTD_ThermalDesktop_"></a> UnitsPreferences\(ThermalDesktop\)

```csharp
public UnitsPreferences(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### <a id="OpenTD_UserPreferences_UnitsPreferences_DoNotScaleModelOnNextUpdate"></a> DoNotScaleModelOnNextUpdate

```csharp
public bool DoNotScaleModelOnNextUpdate { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_UnitsPreferences_EngUnitsPressurePSIAorGaugeIndex"></a> EngUnitsPressurePSIAorGaugeIndex

```csharp
public int EngUnitsPressurePSIAorGaugeIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_UnitsPreferences_EngUnitsTemperatureIndex"></a> EngUnitsTemperatureIndex

```csharp
public int EngUnitsTemperatureIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_UnitsPreferences_SiUnitsTemperatureIndex"></a> SiUnitsTemperatureIndex

```csharp
public int SiUnitsTemperatureIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_UnitsPreferences_Units"></a> Units

```csharp
public UnitsData Units { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md)

### <a id="OpenTD_UserPreferences_UnitsPreferences_UnitsThermalOnlyInterfaceOrENG_SI_controlled"></a> UnitsThermalOnlyInterfaceOrENG\_SI\_controlled

```csharp
public int UnitsThermalOnlyInterfaceOrENG_SI_controlled { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_UnitsPreferences_calculationOutputUnits"></a> calculationOutputUnits

```csharp
public int calculationOutputUnits { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OpenTD_UserPreferences_UnitsPreferences_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public void Update()
```

### <a id="OpenTD_UserPreferences_UnitsPreferences_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD()
```

