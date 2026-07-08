# Class DoubleUtility

Namespace: [OpenTD.Utility](OpenTD.Utility.md)  
Assembly: OpenTD.dll  

Utility methods for working with doubles.

```csharp
public static class DoubleUtility
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DoubleUtility](OpenTD.Utility.DoubleUtility.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### PercentTolerance

Defaults to 0.1%

```csharp
public static double PercentTolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### AreEqual\(double, double\)

Determines whether two doubles are equal to within the static
DoubleUtility.PercentTolerance.

```csharp
public static bool AreEqual(double x1, double x2)
```

#### Parameters

`x1` [double](https://learn.microsoft.com/dotnet/api/system.double)

`x2` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### See Also

[DoubleUtility](OpenTD.Utility.DoubleUtility.md).[PercentTolerance](OpenTD.Utility.DoubleUtility.md\#OpenTD\_Utility\_DoubleUtility\_PercentTolerance)

### PercentDifference\(double, double\)

Determines the percent difference between two doubles. Handles
NaN.

```csharp
public static double PercentDifference(double x, double y)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

`y` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)


