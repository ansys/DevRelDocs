# Class Units

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Static class with methods for working with units.
Includes methods to convert between unit systems.

```csharp
public static class Units
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Units](OpenTD.Units.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Fields

### Eng

A static units system always set to English units.

```csharp
public static readonly UnitsData Eng
```

#### Field Value

 [UnitsData](OpenTD.UnitsData.md)

### SI

A static units system always set to SI.

```csharp
public static readonly UnitsData SI
```

#### Field Value

 [UnitsData](OpenTD.UnitsData.md)

## Properties

### WorkingUnits

All dimensional values in OpenTD are accessed in the
WorkingUnits system, which defaults to SI. This is independent
of any dwg units set in any ThermalDesktop instances.
WorkingUnits is a thread-static property, so each thread
in a client program operates on an independent set of
WorkingUnits.

```csharp
public static UnitsData WorkingUnits { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md)

## Methods

### Convert\(UnitsType, UnitsData, double, UnitsData\)

```csharp
public static double Convert(UnitsData.UnitsType type, UnitsData from, double val, UnitsData to)
```

#### Parameters

`type` [UnitsData](OpenTD.UnitsData.md).[UnitsType](OpenTD.UnitsData.UnitsType.md)

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Convert\(UnitsType, UnitsData, List<double\>, UnitsData, bool\)

```csharp
public static List<double> Convert(UnitsData.UnitsType type, UnitsData from, List<double> vals, UnitsData to, bool ConvertOnlyIfPositive = false)
```

#### Parameters

`type` [UnitsData](OpenTD.UnitsData.md).[UnitsType](OpenTD.UnitsData.UnitsType.md)

`from` [UnitsData](OpenTD.UnitsData.md)

`vals` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

`to` [UnitsData](OpenTD.UnitsData.md)

`ConvertOnlyIfPositive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### Convert\(ModelLength, double, ModelLength\)

```csharp
public static double Convert(UnitsData.ModelLength from, double val, UnitsData.ModelLength to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md).[ModelLength](OpenTD.UnitsData.ModelLength.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md).[ModelLength](OpenTD.UnitsData.ModelLength.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Convert\(OrbitLength, double, OrbitLength\)

```csharp
public static double Convert(UnitsData.OrbitLength from, double val, UnitsData.OrbitLength to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md).[OrbitLength](OpenTD.UnitsData.OrbitLength.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md).[OrbitLength](OpenTD.UnitsData.OrbitLength.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Convert\(Time, double, Time\)

```csharp
public static double Convert(UnitsData.Time from, double val, UnitsData.Time to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md).[Time](OpenTD.UnitsData.Time.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md).[Time](OpenTD.UnitsData.Time.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Convert\(Energy, double, Energy\)

```csharp
public static double Convert(UnitsData.Energy from, double val, UnitsData.Energy to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md).[Energy](OpenTD.UnitsData.Energy.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md).[Energy](OpenTD.UnitsData.Energy.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Convert\(Temp, double, Temp, bool\)

```csharp
public static double Convert(UnitsData.Temp from, double val, UnitsData.Temp to, bool OnlyConvertDegreeSize = false)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md).[Temp](OpenTD.UnitsData.Temp.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md).[Temp](OpenTD.UnitsData.Temp.md)

`OnlyConvertDegreeSize` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Convert\(Mass, double, Mass\)

```csharp
public static double Convert(UnitsData.Mass from, double val, UnitsData.Mass to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md).[Mass](OpenTD.UnitsData.Mass.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md).[Mass](OpenTD.UnitsData.Mass.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Convert\(Pressure, double, Pressure, bool\)

```csharp
public static double Convert(UnitsData.Pressure unitsFrom, double val, UnitsData.Pressure unitsTo, bool IgnoreGauge = false)
```

#### Parameters

`unitsFrom` [UnitsData](OpenTD.UnitsData.md).[Pressure](OpenTD.UnitsData.Pressure.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`unitsTo` [UnitsData](OpenTD.UnitsData.md).[Pressure](OpenTD.UnitsData.Pressure.md)

`IgnoreGauge` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Convert\(Angle, double, Angle\)

```csharp
public static double Convert(UnitsData.Angle unitsFrom, double val, UnitsData.Angle unitsTo)
```

#### Parameters

`unitsFrom` [UnitsData](OpenTD.UnitsData.md).[Angle](OpenTD.UnitsData.Angle.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`unitsTo` [UnitsData](OpenTD.UnitsData.md).[Angle](OpenTD.UnitsData.Angle.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Convert\(Force, double, Force\)

```csharp
public static double Convert(UnitsData.Force unitsFrom, double val, UnitsData.Force unitsTo)
```

#### Parameters

`unitsFrom` [UnitsData](OpenTD.UnitsData.md).[Force](OpenTD.UnitsData.Force.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`unitsTo` [UnitsData](OpenTD.UnitsData.md).[Force](OpenTD.UnitsData.Force.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Convert\(Current, double, Current\)

```csharp
public static double Convert(UnitsData.Current unitsFrom, double val, UnitsData.Current unitsTo)
```

#### Parameters

`unitsFrom` [UnitsData](OpenTD.UnitsData.md).[Current](OpenTD.UnitsData.Current.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`unitsTo` [UnitsData](OpenTD.UnitsData.md).[Current](OpenTD.UnitsData.Current.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Convert\(Voltage, double, Voltage\)

```csharp
public static double Convert(UnitsData.Voltage unitsFrom, double val, UnitsData.Voltage unitsTo)
```

#### Parameters

`unitsFrom` [UnitsData](OpenTD.UnitsData.md).[Voltage](OpenTD.UnitsData.Voltage.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`unitsTo` [UnitsData](OpenTD.UnitsData.md).[Voltage](OpenTD.UnitsData.Voltage.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Convert\(Resistance, double, Resistance\)

```csharp
public static double Convert(UnitsData.Resistance unitsFrom, double val, UnitsData.Resistance unitsTo)
```

#### Parameters

`unitsFrom` [UnitsData](OpenTD.UnitsData.md).[Resistance](OpenTD.UnitsData.Resistance.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`unitsTo` [UnitsData](OpenTD.UnitsData.md).[Resistance](OpenTD.UnitsData.Resistance.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertArea\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertArea(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertCondPerArea\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertCondPerArea(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertCondPerLength\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertCondPerLength(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertConductance\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertConductance(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertDensity\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertDensity(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertEnergyPerArea\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertEnergyPerArea(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertEnergyPerLength\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertEnergyPerLength(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertEnergyPerMass\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertEnergyPerMass(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertEnergyPerTemperature\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertEnergyPerTemperature(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertFlux\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertFlux(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertForcePerLength\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertForcePerLength(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertGravity\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertGravity(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertHeatRate\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertHeatRate(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertHeatRatePerVolume\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertHeatRatePerVolume(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertInertial\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertInertial(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertInversePressure\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertInversePressure(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertInverseVolume\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertInverseVolume(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertMassFlowRate\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertMassFlowRate(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertMassFlowratePerEnthalpy\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertMassFlowratePerEnthalpy(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertMassFlowratePerPressure\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertMassFlowratePerPressure(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertMassFlux\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertMassFlux(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertMassPerLength\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertMassPerLength(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertMomentOfInertia\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertMomentOfInertia(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertOrbitVelocity\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertOrbitVelocity(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertPressurePerVolume\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertPressurePerVolume(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertResistivity\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertResistivity(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertRotation\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertRotation(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertSpecificHeat\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertSpecificHeat(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertStefanBoltzmann\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertStefanBoltzmann(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertTorque\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertTorque(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertVelocity\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertVelocity(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertViscosity\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertViscosity(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertVoltsPerTemp\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertVoltsPerTemp(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertVolume\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertVolume(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertVolumeFlowRate\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertVolumeFlowRate(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetDimension\(UnitsType\)

```csharp
public static IDimension GetDimension(UnitsData.UnitsType type)
```

#### Parameters

`type` [UnitsData](OpenTD.UnitsData.md).[UnitsType](OpenTD.UnitsData.UnitsType.md)

#### Returns

 [IDimension](OpenTD.Dimension.IDimension.md)

### GetDimensional\(UnitsType, double\)

```csharp
public static dynamic GetDimensional(UnitsData.UnitsType type, double x)
```

#### Parameters

`type` [UnitsData](OpenTD.UnitsData.md).[UnitsType](OpenTD.UnitsData.UnitsType.md)

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 dynamic

### GetDimensionalIfPositive\(UnitsType, double\)

```csharp
public static dynamic GetDimensionalIfPositive(UnitsData.UnitsType type, double x)
```

#### Parameters

`type` [UnitsData](OpenTD.UnitsData.md).[UnitsType](OpenTD.UnitsData.UnitsType.md)

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 dynamic

### GetDimensionalIfPositiveList\(UnitsType, double\[\]\)

```csharp
public static dynamic GetDimensionalIfPositiveList(UnitsData.UnitsType type, double[] x)
```

#### Parameters

`type` [UnitsData](OpenTD.UnitsData.md).[UnitsType](OpenTD.UnitsData.UnitsType.md)

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 dynamic

### GetDimensionalList\(UnitsType, double\[\]\)

```csharp
public static dynamic GetDimensionalList(UnitsData.UnitsType type, double[] x)
```

#### Parameters

`type` [UnitsData](OpenTD.UnitsData.md).[UnitsType](OpenTD.UnitsData.UnitsType.md)

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 dynamic

### RestoreWorkingUnits\(\)

Pops the top units system off of the WorkingUnits stack and copies
it to the current WorkingUnits. Note that each
thread in an OpenTD client maintains a separate stack.

```csharp
public static void RestoreWorkingUnits()
```

#### See Also

[Units](OpenTD.Units.md).[WorkingUnits](OpenTD.Units.md\#OpenTD\_Units\_WorkingUnits), 
[Units](OpenTD.Units.md).[SaveWorkingUnits](OpenTD.Units.md\#OpenTD\_Units\_SaveWorkingUnits)\(\), 
[Units](OpenTD.Units.md).[SaveWorkingUnitsAndSetToSI](OpenTD.Units.md\#OpenTD\_Units\_SaveWorkingUnitsAndSetToSI)\(\)

### SaveWorkingUnits\(\)

Pushes a copy of the current WorkingUnits on to a stack, for later
retrieval using the RestoreWorkingUnits() method. Note that each
thread in an OpenTD client maintains a separate stack.

```csharp
public static void SaveWorkingUnits()
```

#### See Also

[Units](OpenTD.Units.md).[WorkingUnits](OpenTD.Units.md\#OpenTD\_Units\_WorkingUnits), 
[Units](OpenTD.Units.md).[RestoreWorkingUnits](OpenTD.Units.md\#OpenTD\_Units\_RestoreWorkingUnits)\(\)

### SaveWorkingUnitsAndSetToSI\(\)

Pushes a copy of the current WorkingUnits on to a stack, for later
retrieval using the RestoreWorkingUnits() method, then
sets the current WorkingUnits to SI. Note that each
thread in an OpenTD client maintains a separate stack.

```csharp
public static void SaveWorkingUnitsAndSetToSI()
```

#### See Also

[Units](OpenTD.Units.md).[WorkingUnits](OpenTD.Units.md\#OpenTD\_Units\_WorkingUnits), 
[Units](OpenTD.Units.md).[RestoreWorkingUnits](OpenTD.Units.md\#OpenTD\_Units\_RestoreWorkingUnits)\(\)


