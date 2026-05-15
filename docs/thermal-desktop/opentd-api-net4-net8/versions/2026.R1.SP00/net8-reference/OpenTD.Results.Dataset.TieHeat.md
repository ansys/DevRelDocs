# Class TieHeat

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Represents heatrate data for a tie connection.

```csharp
public class TieHeat
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TieHeat](OpenTD.Results.Dataset.TieHeat.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### DUPN

```csharp
public Dimensional<Dimensionless> DUPN { get; }
```

#### Property Value

 Dimensional<Dimensionless\>

### Heatrate

```csharp
public Dimensional<HeatRate> Heatrate { get; }
```

#### Property Value

 Dimensional<HeatRate\>

### QTIE

```csharp
public Dimensional<HeatRate> QTIE { get; }
```

#### Property Value

 Dimensional<HeatRate\>

### TieInfo

```csharp
public ITieInfo TieInfo { get; }
```

#### Property Value

 [ITieInfo](OpenTD.Results.Dataset.Topology.ITieInfo.md)


