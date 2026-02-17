# <a id="OpenTD_Units"></a> Class Units

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Static class with methods for working with units.
Includes methods to convert between unit systems.

```csharp
public static class Units
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Units](OpenTD.Units.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="OpenTD_Units_Eng"></a> Eng

A static units system always set to English units.

```csharp
public static readonly UnitsData Eng
```

#### Field Value

 [UnitsData](OpenTD.UnitsData.md)

### <a id="OpenTD_Units_SI"></a> SI

A static units system always set to SI.

```csharp
public static readonly UnitsData SI
```

#### Field Value

 [UnitsData](OpenTD.UnitsData.md)

## Properties

### <a id="OpenTD_Units_WorkingUnits"></a> WorkingUnits

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

### <a id="OpenTD_Units_Convert_OpenTD_UnitsData_UnitsType_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> Convert\(UnitsType, UnitsData, double, UnitsData\)

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

### <a id="OpenTD_Units_Convert_OpenTD_UnitsData_UnitsType_OpenTD_UnitsData_System_Collections_Generic_List_System_Double__OpenTD_UnitsData_System_Boolean_"></a> Convert\(UnitsType, UnitsData, List<double\>, UnitsData, bool\)

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

### <a id="OpenTD_Units_Convert_OpenTD_UnitsData_ModelLength_System_Double_OpenTD_UnitsData_ModelLength_"></a> Convert\(ModelLength, double, ModelLength\)

```csharp
public static double Convert(UnitsData.ModelLength from, double val, UnitsData.ModelLength to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md).[ModelLength](OpenTD.UnitsData.ModelLength.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md).[ModelLength](OpenTD.UnitsData.ModelLength.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_Convert_OpenTD_UnitsData_OrbitLength_System_Double_OpenTD_UnitsData_OrbitLength_"></a> Convert\(OrbitLength, double, OrbitLength\)

```csharp
public static double Convert(UnitsData.OrbitLength from, double val, UnitsData.OrbitLength to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md).[OrbitLength](OpenTD.UnitsData.OrbitLength.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md).[OrbitLength](OpenTD.UnitsData.OrbitLength.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_Convert_OpenTD_UnitsData_Time_System_Double_OpenTD_UnitsData_Time_"></a> Convert\(Time, double, Time\)

```csharp
public static double Convert(UnitsData.Time from, double val, UnitsData.Time to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md).[Time](OpenTD.UnitsData.Time.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md).[Time](OpenTD.UnitsData.Time.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_Convert_OpenTD_UnitsData_Energy_System_Double_OpenTD_UnitsData_Energy_"></a> Convert\(Energy, double, Energy\)

```csharp
public static double Convert(UnitsData.Energy from, double val, UnitsData.Energy to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md).[Energy](OpenTD.UnitsData.Energy.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md).[Energy](OpenTD.UnitsData.Energy.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_Convert_OpenTD_UnitsData_Temp_System_Double_OpenTD_UnitsData_Temp_System_Boolean_"></a> Convert\(Temp, double, Temp, bool\)

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

### <a id="OpenTD_Units_Convert_OpenTD_UnitsData_Mass_System_Double_OpenTD_UnitsData_Mass_"></a> Convert\(Mass, double, Mass\)

```csharp
public static double Convert(UnitsData.Mass from, double val, UnitsData.Mass to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md).[Mass](OpenTD.UnitsData.Mass.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md).[Mass](OpenTD.UnitsData.Mass.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_Convert_OpenTD_UnitsData_Pressure_System_Double_OpenTD_UnitsData_Pressure_System_Boolean_"></a> Convert\(Pressure, double, Pressure, bool\)

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

### <a id="OpenTD_Units_Convert_OpenTD_UnitsData_Angle_System_Double_OpenTD_UnitsData_Angle_"></a> Convert\(Angle, double, Angle\)

```csharp
public static double Convert(UnitsData.Angle unitsFrom, double val, UnitsData.Angle unitsTo)
```

#### Parameters

`unitsFrom` [UnitsData](OpenTD.UnitsData.md).[Angle](OpenTD.UnitsData.Angle.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`unitsTo` [UnitsData](OpenTD.UnitsData.md).[Angle](OpenTD.UnitsData.Angle.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_Convert_OpenTD_UnitsData_Force_System_Double_OpenTD_UnitsData_Force_"></a> Convert\(Force, double, Force\)

```csharp
public static double Convert(UnitsData.Force unitsFrom, double val, UnitsData.Force unitsTo)
```

#### Parameters

`unitsFrom` [UnitsData](OpenTD.UnitsData.md).[Force](OpenTD.UnitsData.Force.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`unitsTo` [UnitsData](OpenTD.UnitsData.md).[Force](OpenTD.UnitsData.Force.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_Convert_OpenTD_UnitsData_Current_System_Double_OpenTD_UnitsData_Current_"></a> Convert\(Current, double, Current\)

```csharp
public static double Convert(UnitsData.Current unitsFrom, double val, UnitsData.Current unitsTo)
```

#### Parameters

`unitsFrom` [UnitsData](OpenTD.UnitsData.md).[Current](OpenTD.UnitsData.Current.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`unitsTo` [UnitsData](OpenTD.UnitsData.md).[Current](OpenTD.UnitsData.Current.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_Convert_OpenTD_UnitsData_Voltage_System_Double_OpenTD_UnitsData_Voltage_"></a> Convert\(Voltage, double, Voltage\)

```csharp
public static double Convert(UnitsData.Voltage unitsFrom, double val, UnitsData.Voltage unitsTo)
```

#### Parameters

`unitsFrom` [UnitsData](OpenTD.UnitsData.md).[Voltage](OpenTD.UnitsData.Voltage.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`unitsTo` [UnitsData](OpenTD.UnitsData.md).[Voltage](OpenTD.UnitsData.Voltage.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_Convert_OpenTD_UnitsData_Resistance_System_Double_OpenTD_UnitsData_Resistance_"></a> Convert\(Resistance, double, Resistance\)

```csharp
public static double Convert(UnitsData.Resistance unitsFrom, double val, UnitsData.Resistance unitsTo)
```

#### Parameters

`unitsFrom` [UnitsData](OpenTD.UnitsData.md).[Resistance](OpenTD.UnitsData.Resistance.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`unitsTo` [UnitsData](OpenTD.UnitsData.md).[Resistance](OpenTD.UnitsData.Resistance.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertArea_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertArea\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertArea(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertCondPerArea_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertCondPerArea\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertCondPerArea(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertCondPerLength_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertCondPerLength\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertCondPerLength(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertConductance_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertConductance\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertConductance(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertDensity_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertDensity\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertDensity(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertEnergyPerArea_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertEnergyPerArea\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertEnergyPerArea(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertEnergyPerLength_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertEnergyPerLength\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertEnergyPerLength(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertEnergyPerMass_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertEnergyPerMass\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertEnergyPerMass(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertEnergyPerTemperature_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertEnergyPerTemperature\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertEnergyPerTemperature(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertFlux_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertFlux\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertFlux(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertForcePerLength_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertForcePerLength\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertForcePerLength(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertGravity_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertGravity\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertGravity(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertHeatRate_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertHeatRate\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertHeatRate(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertHeatRatePerVolume_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertHeatRatePerVolume\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertHeatRatePerVolume(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertInertial_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertInertial\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertInertial(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertInversePressure_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertInversePressure\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertInversePressure(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertInverseVolume_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertInverseVolume\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertInverseVolume(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertMassFlowRate_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertMassFlowRate\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertMassFlowRate(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertMassFlowratePerEnthalpy_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertMassFlowratePerEnthalpy\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertMassFlowratePerEnthalpy(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertMassFlowratePerPressure_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertMassFlowratePerPressure\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertMassFlowratePerPressure(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertMassFlux_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertMassFlux\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertMassFlux(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertMassPerLength_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertMassPerLength\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertMassPerLength(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertMomentOfInertia_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertMomentOfInertia\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertMomentOfInertia(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertOrbitVelocity_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertOrbitVelocity\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertOrbitVelocity(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertPressurePerVolume_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertPressurePerVolume\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertPressurePerVolume(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertResistivity_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertResistivity\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertResistivity(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertRotation_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertRotation\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertRotation(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertSpecificHeat_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertSpecificHeat\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertSpecificHeat(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertStefanBoltzmann_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertStefanBoltzmann\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertStefanBoltzmann(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertTorque_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertTorque\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertTorque(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertVelocity_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertVelocity\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertVelocity(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertViscosity_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertViscosity\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertViscosity(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertVoltsPerTemp_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertVoltsPerTemp\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertVoltsPerTemp(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertVolume_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertVolume\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertVolume(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_ConvertVolumeFlowRate_OpenTD_UnitsData_System_Double_OpenTD_UnitsData_"></a> ConvertVolumeFlowRate\(UnitsData, double, UnitsData\)

```csharp
public static double ConvertVolumeFlowRate(UnitsData from, double val, UnitsData to)
```

#### Parameters

`from` [UnitsData](OpenTD.UnitsData.md)

`val` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Units_GetDimension_OpenTD_UnitsData_UnitsType_"></a> GetDimension\(UnitsType\)

```csharp
public static IDimension GetDimension(UnitsData.UnitsType type)
```

#### Parameters

`type` [UnitsData](OpenTD.UnitsData.md).[UnitsType](OpenTD.UnitsData.UnitsType.md)

#### Returns

 [IDimension](OpenTD.Dimension.IDimension.md)

### <a id="OpenTD_Units_GetDimensional_OpenTD_UnitsData_UnitsType_System_Double_"></a> GetDimensional\(UnitsType, double\)

```csharp
public static dynamic GetDimensional(UnitsData.UnitsType type, double x)
```

#### Parameters

`type` [UnitsData](OpenTD.UnitsData.md).[UnitsType](OpenTD.UnitsData.UnitsType.md)

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 dynamic

### <a id="OpenTD_Units_GetDimensionalIfPositive_OpenTD_UnitsData_UnitsType_System_Double_"></a> GetDimensionalIfPositive\(UnitsType, double\)

```csharp
public static dynamic GetDimensionalIfPositive(UnitsData.UnitsType type, double x)
```

#### Parameters

`type` [UnitsData](OpenTD.UnitsData.md).[UnitsType](OpenTD.UnitsData.UnitsType.md)

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 dynamic

### <a id="OpenTD_Units_GetDimensionalIfPositiveList_OpenTD_UnitsData_UnitsType_System_Double___"></a> GetDimensionalIfPositiveList\(UnitsType, double\[\]\)

```csharp
public static dynamic GetDimensionalIfPositiveList(UnitsData.UnitsType type, double[] x)
```

#### Parameters

`type` [UnitsData](OpenTD.UnitsData.md).[UnitsType](OpenTD.UnitsData.UnitsType.md)

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 dynamic

### <a id="OpenTD_Units_GetDimensionalList_OpenTD_UnitsData_UnitsType_System_Double___"></a> GetDimensionalList\(UnitsType, double\[\]\)

```csharp
public static dynamic GetDimensionalList(UnitsData.UnitsType type, double[] x)
```

#### Parameters

`type` [UnitsData](OpenTD.UnitsData.md).[UnitsType](OpenTD.UnitsData.UnitsType.md)

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 dynamic

### <a id="OpenTD_Units_RestoreWorkingUnits"></a> RestoreWorkingUnits\(\)

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

### <a id="OpenTD_Units_SaveWorkingUnits"></a> SaveWorkingUnits\(\)

Pushes a copy of the current WorkingUnits on to a stack, for later
retrieval using the RestoreWorkingUnits() method. Note that each
thread in an OpenTD client maintains a separate stack.

```csharp
public static void SaveWorkingUnits()
```

#### See Also

[Units](OpenTD.Units.md).[WorkingUnits](OpenTD.Units.md\#OpenTD\_Units\_WorkingUnits), 
[Units](OpenTD.Units.md).[RestoreWorkingUnits](OpenTD.Units.md\#OpenTD\_Units\_RestoreWorkingUnits)\(\)

### <a id="OpenTD_Units_SaveWorkingUnitsAndSetToSI"></a> SaveWorkingUnitsAndSetToSI\(\)

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

