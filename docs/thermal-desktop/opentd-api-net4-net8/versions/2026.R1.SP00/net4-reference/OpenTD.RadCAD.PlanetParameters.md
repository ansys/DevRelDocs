# Class PlanetParameters

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

Parameters used to define the planet being orbited.
Defaults to Earth data.

```csharp
[DataContract]
public class PlanetParameters
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PlanetParameters](OpenTD.RadCAD.PlanetParameters.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### PlanetParameters\(\)

```csharp
public PlanetParameters()
```

## Properties

### albedo

```csharp
[DataMember]
public double albedo { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### color

```csharp
[DataMember]
public int color { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### darkSideTempK

```csharp
[DataMember]
public double darkSideTempK { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### diurnalPeriodSec

```csharp
[DataMember]
public double diurnalPeriodSec { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### gravMassKm3s2

```csharp
[DataMember]
public double gravMassKm3s2 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### inclinationDeg

```csharp
[DataMember]
public double inclinationDeg { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### radiusKm

```csharp
[DataMember]
public double radiusKm { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### siderealPeriodSec

```csharp
[DataMember]
public double siderealPeriodSec { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### solarFluxWm2

```csharp
[DataMember]
public double solarFluxWm2 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### subSolarTempK

```csharp
[DataMember]
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


