# <a id="OpenTD_Dimension_IDimension"></a> Interface IDimension

Namespace: [OpenTD.Dimension](OpenTD.Dimension.md)  
Assembly: OpenTD.dll  

Represents a physical dimension, e.g., density

```csharp
public interface IDimension
```

## Methods

### <a id="OpenTD_Dimension_IDimension_ConvertFromSI_System_Double_OpenTD_UnitsData_"></a> ConvertFromSI\(double, UnitsData\)

Converts x from SI to input units.

```csharp
double ConvertFromSI(double x, UnitsData units)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

`units` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Dimension_IDimension_ConvertToSI_OpenTD_UnitsData_System_Double_"></a> ConvertToSI\(UnitsData, double\)

Converts x from input units to SI.

```csharp
double ConvertToSI(UnitsData units, double x)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md)

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Dimension_IDimension_GetName"></a> GetName\(\)

Gets the name of the dimension, e.g., "Density".

```csharp
string GetName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

System.String.

### <a id="OpenTD_Dimension_IDimension_GetTitle_OpenTD_UnitsData_"></a> GetTitle\(UnitsData\)

Gets the name of the dimension and the unit, e.g., "Density (kg/m3)".

```csharp
string GetTitle(UnitsData units)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md)

The units.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

System.String.

### <a id="OpenTD_Dimension_IDimension_GetUnitsName_OpenTD_UnitsData_"></a> GetUnitsName\(UnitsData\)

Gets the name of unit corresponding to this dimension, e.g. "kg/m3".

```csharp
string GetUnitsName(UnitsData units)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md)

The units.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

System.String.

