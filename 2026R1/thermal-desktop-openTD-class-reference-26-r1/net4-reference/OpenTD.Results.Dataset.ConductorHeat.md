# Class ConductorHeat

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Represents heatrate data for a conductor connection.

```csharp
public class ConductorHeat
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ConductorHeat](OpenTD.Results.Dataset.ConductorHeat.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Properties

### ConductorInfo

```csharp
public IConductorInfo ConductorInfo { get; }
```

#### Property Value

 [IConductorInfo](OpenTD.Results.Dataset.Topology.IConductorInfo.md)

### G

```csharp
public Dimensional<Conductance> G { get; }
```

#### Property Value

 Dimensional<Conductance\>

### Heatrate

```csharp
public Dimensional<HeatRate> Heatrate { get; }
```

#### Property Value

 Dimensional<HeatRate\>

### ToTemp

```csharp
public Dimensional<Temp> ToTemp { get; }
```

#### Property Value

 Dimensional<Temp\>


