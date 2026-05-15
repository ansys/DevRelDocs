# Class PlanetParameters

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

Parameters used to define the planet being orbited.
Defaults to Earth data.

```csharp
[MessagePackObject(true)]
public class PlanetParameters
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PlanetParameters](OpenTD.RadCAD.PlanetParameters.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### PlanetParameters\(\)

```csharp
public PlanetParameters()
```

## Properties

### albedo

```csharp
public double albedo { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### color

```csharp
public int color { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### darkSideTempK

```csharp
public double darkSideTempK { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### diurnalPeriodSec

```csharp
public double diurnalPeriodSec { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### gravMassKm3s2

```csharp
public double gravMassKm3s2 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### inclinationDeg

```csharp
public double inclinationDeg { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### radiusKm

```csharp
public double radiusKm { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### siderealPeriodSec

```csharp
public double siderealPeriodSec { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### solarFluxWm2

```csharp
public double solarFluxWm2 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### subSolarTempK

```csharp
public double subSolarTempK { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### SetToEarth\(\)

```csharp
public void SetToEarth()
```

### SetToGeneric\(\)

```csharp
public void SetToGeneric()
```

### SetToJupiter\(\)

```csharp
public void SetToJupiter()
```

### SetToMars\(\)

```csharp
public void SetToMars()
```

### SetToMercury\(\)

```csharp
public void SetToMercury()
```

### SetToMoon\(\)

```csharp
public void SetToMoon()
```

### SetToNeptune\(\)

```csharp
public void SetToNeptune()
```

### SetToPluto\(\)

```csharp
public void SetToPluto()
```

### SetToSaturn\(\)

```csharp
public void SetToSaturn()
```

### SetToSun\(\)

```csharp
public void SetToSun()
```

### SetToUranus\(\)

```csharp
public void SetToUranus()
```

### SetToVenus\(\)

```csharp
public void SetToVenus()
```


