# <a id="OpenTD_Dimension_EnergyPerMass"></a> Class EnergyPerMass

Namespace: [OpenTD.Dimension](OpenTD.Dimension.md)  
Assembly: OpenTD.dll  

```csharp
public class EnergyPerMass : IDimension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EnergyPerMass](OpenTD.Dimension.EnergyPerMass.md)

#### Implements

[IDimension](OpenTD.Dimension.IDimension.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Methods

### <a id="OpenTD_Dimension_EnergyPerMass_ConvertFromSI_System_Double_OpenTD_UnitsData_"></a> ConvertFromSI\(double, UnitsData\)

Converts x from SI to input units.

```csharp
public double ConvertFromSI(double x, UnitsData units)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

`units` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Dimension_EnergyPerMass_ConvertToSI_OpenTD_UnitsData_System_Double_"></a> ConvertToSI\(UnitsData, double\)

Converts x from input units to SI.

```csharp
public double ConvertToSI(UnitsData units, double x)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md)

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Dimension_EnergyPerMass_GetName"></a> GetName\(\)

Gets the name of the dimension, e.g., "Density".

```csharp
public string GetName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

System.String.

### <a id="OpenTD_Dimension_EnergyPerMass_GetTitle_OpenTD_UnitsData_"></a> GetTitle\(UnitsData\)

Gets the name of the dimension and the unit, e.g., "Density (kg/m3)".

```csharp
public string GetTitle(UnitsData units)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md)

The units.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

System.String.

### <a id="OpenTD_Dimension_EnergyPerMass_GetUnitsName_OpenTD_UnitsData_"></a> GetUnitsName\(UnitsData\)

Gets the name of unit corresponding to this dimension, e.g. "kg/m3".

```csharp
public string GetUnitsName(UnitsData units)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md)

The units.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

System.String.

