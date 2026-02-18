# Class UnitsPreferences

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Use to set the global units preferences.

```csharp
public class UnitsPreferences : Preferences, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
Preferences ← 
[UnitsPreferences](OpenTD.UserPreferences.UnitsPreferences.md)

## Implements

[IUpdatable](OpenTD.IUpdatable.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### UnitsPreferences\(\)

Do not use.

```csharp
public UnitsPreferences()
```

### UnitsPreferences\(ThermalDesktop\)

```csharp
public UnitsPreferences(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### DoNotScaleModelOnNextUpdate

```csharp
public bool DoNotScaleModelOnNextUpdate { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EngUnitsPressurePSIAorGaugeIndex

```csharp
public int EngUnitsPressurePSIAorGaugeIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EngUnitsTemperatureIndex

```csharp
public int EngUnitsTemperatureIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SiUnitsTemperatureIndex

```csharp
public int SiUnitsTemperatureIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Units

```csharp
public UnitsData Units { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md)

### UnitsThermalOnlyInterfaceOrENG\_SI\_controlled

```csharp
public int UnitsThermalOnlyInterfaceOrENG_SI_controlled { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### calculationOutputUnits

```csharp
public int calculationOutputUnits { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### Update\(\)

Updates the TD entity with the latest client data.

```csharp
public void Update()
```

### UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD()
```


