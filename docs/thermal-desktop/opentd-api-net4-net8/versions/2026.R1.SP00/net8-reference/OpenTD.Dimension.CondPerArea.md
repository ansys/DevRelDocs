# Class CondPerArea

Namespace: [OpenTD.Dimension](OpenTD.Dimension.md)  
Assembly: OpenTD.dll  

```csharp
[MessagePackObject(false)]
public class CondPerArea : IDimension
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CondPerArea](OpenTD.Dimension.CondPerArea.md)

## Implements

[IDimension](OpenTD.Dimension.IDimension.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### ConvertFromSI\(double, UnitsData\)

Converts x from SI to input units.

```csharp
public double ConvertFromSI(double x, UnitsData units)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

`units` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvertToSI\(UnitsData, double\)

Converts x from input units to SI.

```csharp
public double ConvertToSI(UnitsData units, double x)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md)

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetName\(\)

Gets the name of the dimension, e.g., "Density".

```csharp
public string GetName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

System.String.

### GetTitle\(UnitsData\)

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

### GetUnitsName\(UnitsData\)

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


